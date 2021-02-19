import { Support } from '@e2d/engine';

export default class CanvasSupport extends Support {
	readonly canvas: HTMLCanvasElement;
	readonly context2d: CanvasRenderingContext2D;

	get element(): HTMLElement {
		return this.canvas;
	}

	constructor() {
		super();
		this.canvas = document.createElement('canvas');
		this.context2d = this.canvas.getContext('2d') as CanvasRenderingContext2D;
	}

	clear(): void {
		const { canvas } = this;

		this.context2d.setTransform();
		this.context2d.clearRect(0, 0, canvas.width, canvas.height);
	}

	setSize(width: number, height: number, pixelRatio: number) {
		const viewWidth = Math.floor(width * pixelRatio);
		const viewHeight = Math.floor(height * pixelRatio);

		const { canvas } = this;

		if (canvas.width !== viewWidth || canvas.height !== viewHeight) {
			canvas.width = viewWidth;
			canvas.height = viewHeight;
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
		}
	}
}