import { CanvasEngine, CanvasPlatform } from '@jeng/canvas-engine';
import { Engine, Pivot } from '@jeng/core';
import {
	ColorTransform, Matrix, Point, Rectangle,
} from '@jeng/geom';
import {
	EllipseData, GraphicsData, PathData, RectangleData,
} from '../data/data';
import { ShapeExtension, SHAPE, Shape } from '../shape';
import { applyRectangle } from './rectangle';
import { applyEllipse } from './ellipse';
import { applyPath } from './path';
import { applyString } from './string';
import { setFillStyle, setStrokeStyle } from './style';

const bounds = Rectangle.empty();
const offset = Point.empty();

function renderGraphics(data: GraphicsData, colorTransform: ColorTransform, context: CanvasRenderingContext2D, engine: CanvasEngine) {
	const { fill, stroke } = data;

	const hasFill: boolean = !!fill || fill === 0;
	const hasStroke: boolean = !!stroke || stroke === 0;

	if (!hasFill && !hasStroke) {
		return;
	}

	let exist = true;

	const { type } = data;
	switch (type) {
		case 'rectangle':
			exist = applyRectangle(data as RectangleData, hasFill, context);
			break;
		case 'ellipse':
			exist = applyEllipse(data as EllipseData, hasFill, context);
			break;
		case 'path':
			const path = data as PathData;
			if (typeof path.data === 'string') {
				exist = applyString(path.data, hasFill, context);
			} else if (Array.isArray(path.data)) {
				exist = applyPath(path.data, hasFill, context);
			} else {
				exist = false;
			}
			break;
		default:
			break;
	}

	if (!exist) {
		return;
	}

	if (hasFill) {
		setFillStyle(fill!, colorTransform, context, engine);
		context.fill();
	}

	if (hasStroke) {
		setStrokeStyle(stroke!, colorTransform, context, engine);
		context.stroke();
	}
}

export namespace CanvasShapeExtension {
	export function render(shape: Shape, engine: Engine): void {
		const { data } = shape;
		if (!data) {
			return;
		}

		const context = engine.renderer.getContext();

		const { colorTransform } = context;
		if (colorTransform.alphaMultiplier <= 0) {
			return;
		}

		Point.setEmpty(offset);

		if (Pivot.hasValues(shape)) {
			Shape.calculateBounds(shape, bounds);
			if (Rectangle.isEmpty(bounds)) {
				return;
			}

			offset.x = Pivot.getX(shape, bounds.width);
			offset.y = Pivot.getY(shape, bounds.width);
		}

		const context2d = (engine.platform as CanvasPlatform).getContext();
		context2d.globalAlpha = 1;

		const { matrix } = context;

		if (Point.isEmpty(offset)) {
			Matrix.transformPointLocal(matrix, offset, offset);
		}

		context2d.setTransform(
			matrix.a,
			matrix.b,
			matrix.c,
			matrix.d,
			matrix.tx + offset.x,
			matrix.ty + offset.y,
		);

		if (Array.isArray(data)) {
			for (let i = 0; i < data.length; i++) {
				renderGraphics(data[i], colorTransform, context2d, engine as CanvasEngine);
			}
		} else if (typeof data === 'object') {
			renderGraphics(data, colorTransform, context2d, engine as CanvasEngine);
		}
	}

	export function init(engine: CanvasEngine) {
		ShapeExtension.init(engine);
		engine.components.render.set(SHAPE, render);
	}
}
