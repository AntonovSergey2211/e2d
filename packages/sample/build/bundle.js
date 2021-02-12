/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../canvas-support/dist/index.js":
/*!***************************************!*\
  !*** ../canvas-support/dist/index.js ***!
  \***************************************/
/*! namespace exports */
/*! export CanvasSupport [provided] [used in main] [could be renamed] -> ../canvas-support/dist/support.js .default */
/*! export createColorPattern [provided] [used in main] [could be renamed] -> ../canvas-support/dist/patterns.js .createColorPattern */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createColorPattern": () => /* reexport safe */ _patterns__WEBPACK_IMPORTED_MODULE_1__.createColorPattern,
/* harmony export */   "CanvasSupport": () => /* reexport safe */ _support__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support */ "../canvas-support/dist/support.js");
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patterns */ "../canvas-support/dist/patterns.js");




/***/ }),

/***/ "../canvas-support/dist/patterns.js":
/*!******************************************!*\
  !*** ../canvas-support/dist/patterns.js ***!
  \******************************************/
/*! namespace exports */
/*! export createColorPattern [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createColorPattern": () => /* binding */ createColorPattern
/* harmony export */ });
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");

function createColorPattern(color, alpha, ct) {
  var r = color >> 16 & 0xff;
  var g = color >> 8 & 0xff;
  var b = color & 0xff;
  var a = alpha * 0xff;

  if (!_e2d_geom__WEBPACK_IMPORTED_MODULE_0__.ColorTransform.isDefault(ct)) {
    r = r * ct.redMultiplier + ct.redOffset & 0xff;
    g = g * ct.greenMultiplier + ct.greenOffset & 0xff;
    b = b * ct.blueMultiplier + ct.blueOffset & 0xff;
    a = a * ct.alphaMultiplier + ct.alphaOffset & 0xff;
  }

  if (a < 0xff) {
    return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a / 0xff, ")");
  }

  return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
}

/***/ }),

/***/ "../canvas-support/dist/support.js":
/*!*****************************************!*\
  !*** ../canvas-support/dist/support.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ CanvasSupport
/* harmony export */ });
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CanvasSupport = /*#__PURE__*/function (_Support) {
  _inherits(CanvasSupport, _Support);

  var _super = _createSuper(CanvasSupport);

  function CanvasSupport() {
    var _this;

    _classCallCheck(this, CanvasSupport);

    _this = _super.call(this);
    _this.canvas = document.createElement('canvas');
    _this.context2d = _this.canvas.getContext('2d');
    return _this;
  }

  _createClass(CanvasSupport, [{
    key: "clear",
    value: function clear() {
      var canvas = this.canvas;
      this.context2d.setTransform();
      this.context2d.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, {
    key: "setSize",
    value: function setSize(width, height, pixelRatio) {
      var viewWidth = Math.floor(width * pixelRatio);
      var viewHeight = Math.floor(height * pixelRatio);
      var canvas = this.canvas;

      if (canvas.width !== viewWidth || canvas.height !== viewHeight) {
        canvas.width = viewWidth;
        canvas.height = viewHeight;
        canvas.style.width = "".concat(width, "px");
        canvas.style.height = "".concat(height, "px");
      }
    }
  }, {
    key: "element",
    get: function get() {
      return this.canvas;
    }
  }]);

  return CanvasSupport;
}(_e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Support);



/***/ }),

/***/ "../engine/dist/components/component.js":
/*!**********************************************!*\
  !*** ../engine/dist/components/component.js ***!
  \**********************************************/
/*! namespace exports */
/*! export Component [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => /* binding */ Component
/* harmony export */ });
var Component;

(function (Component) {
  function isEnabled(component) {
    var _component$enabled;

    return (_component$enabled = component.enabled) !== null && _component$enabled !== void 0 ? _component$enabled : true;
  }

  Component.isEnabled = isEnabled;

  function isVisible(component) {
    var _component$visible;

    return (_component$visible = component.visible) !== null && _component$visible !== void 0 ? _component$visible : true;
  }

  Component.isVisible = isVisible;
})(Component || (Component = {}));

/***/ }),

/***/ "../engine/dist/components/container.js":
/*!**********************************************!*\
  !*** ../engine/dist/components/container.js ***!
  \**********************************************/
/*! namespace exports */
/*! export CONTAINER [provided] [unused] [could be renamed] */
/*! export Container [provided] [unused] [could be renamed] */
/*! export applyContainerExtension [provided] [used in main] [could be renamed] */
/*! export hitTest [provided] [unused] [could be renamed] */
/*! export render [provided] [unused] [could be renamed] */
/*! export update [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyContainerExtension": () => /* binding */ applyContainerExtension
/* harmony export */ });
/* unused harmony exports CONTAINER, Container, render, update, hitTest */
var CONTAINER = 'container';
var Container;

(function (Container) {
  function numChildren(container) {
    var child = container.child,
        children = container.children;
    var count = 0;

    if (child) {
      count++;
    }

    if (children) {
      if (Array.isArray(children)) {
        count += children.length;
      } else {
        var keys = Object.keys(children);
        count += keys.length;
      }
    }

    return count;
  }

  Container.numChildren = numChildren;
})(Container || (Container = {}));

function render(container, context) {
  var child = container.child,
      children = container.children;
  var support = context.support;

  if (child) {
    var childContext = support.getRenderContext(child, context);
    support.render(child, childContext);
  }

  if (children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var component = children[i];
        var componentContext = support.getRenderContext(component, context);
        support.render(component, componentContext);
      }
    } else {
      var keys = Object.keys(children);

      for (var _i = 0; _i < keys.length; _i++) {
        var _component = children[keys[_i]];

        var _componentContext = support.getRenderContext(_component, context);

        support.render(_component, _componentContext);
      }
    }
  }
}
function update(container, context) {
  var child = container.child,
      children = container.children;
  var support = context.support;

  if (child) {
    var childContext = support.getUpdateContext(child, context);
    support.update(child, childContext);
  }

  if (children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var component = children[i];
        var componentContext = support.getUpdateContext(component, context);
        support.update(component, componentContext);
      }
    } else {
      var keys = Object.keys(children);

      for (var _i2 = 0; _i2 < keys.length; _i2++) {
        var _component2 = children[keys[_i2]];

        var _componentContext2 = support.getUpdateContext(_component2, context);

        support.update(_component2, _componentContext2);
      }
    }
  }
}
function hitTest(container, context) {
  var child = container.child,
      children = container.children;
  var support = context.support;

  if (children) {
    if (Array.isArray(children)) {
      for (var i = children.length - 1; i >= 0; i--) {
        var component = children[i];
        var componentContext = support.getPointerContext(component, context);
        var result = support.hitTest(component, componentContext);

        if (result) {
          return true;
        }
      }
    } else {
      var keys = Object.keys(children);

      for (var _i3 = keys.length - 1; _i3 >= 0; _i3--) {
        var _component3 = children[keys[_i3]];

        var _componentContext3 = support.getPointerContext(_component3, context);

        var _result = support.hitTest(_component3, _componentContext3);

        if (_result) {
          return true;
        }
      }
    }
  }

  if (child) {
    var childContext = support.getPointerContext(child, context);

    var _result2 = support.hitTest(child, childContext);

    if (_result2) {
      return true;
    }
  }

  return false;
}
function applyContainerExtension(support) {
  support.updateHandlers.set(CONTAINER, update);
  support.renderHandlers.set(CONTAINER, render);
  support.hitTestHandlers.set(CONTAINER, hitTest);
}

/***/ }),

/***/ "../engine/dist/engine/context.js":
/*!****************************************!*\
  !*** ../engine/dist/engine/context.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),

/***/ "../engine/dist/engine/engine.js":
/*!***************************************!*\
  !*** ../engine/dist/engine/engine.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Engine
/* harmony export */ });
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container */ "../engine/dist/components/container.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var EMPTY_MATRIX = _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.empty();

var Engine = /*#__PURE__*/function () {
  function Engine(support) {
    var _this = this;

    _classCallCheck(this, Engine);

    this.width = 400;
    this.height = 300;
    this.fullscreen = true;
    this.updateEnabled = true;
    this.renderEnabled = true;
    this.pointerEnabled = true;
    this.paused = true;
    this.time = -1;
    this.matrix = _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.empty();

    this.internalUpdate = function (time) {
      var deltaTime = _this.time === -1 ? 0 : time - _this.time;
      _this.time = time;

      _this.updateFrame(deltaTime / 1000);
    };

    this.support = support;
    (0,_components_container__WEBPACK_IMPORTED_MODULE_1__.applyContainerExtension)(this.support);
  }

  _createClass(Engine, [{
    key: "update",
    value: function update() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (!this.root) {
        return;
      }

      var base = {
        support: this.support,
        time: time,
        depth: 0
      };
      var context = this.support.getUpdateContext(this.root, base);
      this.support.update(this.root, context);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.root) {
        return;
      }

      this.support.clear();
      var base = {
        support: this.support,
        depth: 0,
        matrix: this.matrix,
        colorTransform: _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.ColorTransform.empty()
      };
      var context = this.support.getRenderContext(this.root, base);
      this.support.render(this.root, context);
    }
  }, {
    key: "updateSize",
    value: function updateSize() {
      var pixelRatio = window.devicePixelRatio;
      var width = this.width,
          height = this.height,
          fullscreen = this.fullscreen;
      var targetWidth = Math.floor(width);
      var targetHeight = Math.floor(height);

      if (fullscreen) {
        targetWidth = window.innerWidth;
        targetHeight = window.innerHeight;
      }

      this.matrix.a = pixelRatio;
      this.matrix.d = pixelRatio;
      this.support.setSize(targetWidth, targetHeight, pixelRatio);
    }
  }, {
    key: "updateFrame",
    value: function updateFrame() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.paused) {
        return;
      }

      this.updateSize();

      if (this.updateEnabled) {
        this.update(time);
      }

      if (this.renderEnabled) {
        this.render();
      }

      this.updateNextFrame();
    }
  }, {
    key: "updateNextFrame",
    value: function updateNextFrame() {
      requestAnimationFrame(this.internalUpdate);
    }
  }, {
    key: "dispatchPointerEvent",
    value: function dispatchPointerEvent(event) {
      if (this.paused) {
        return;
      }

      if (!this.pointerEnabled) {
        return;
      }

      if (!this.root) {
        return;
      }

      var type = event.type,
          id = event.id,
          x = event.x,
          y = event.y;
      var base = {
        support: this.support,
        depth: 0,
        matrix: EMPTY_MATRIX,
        local: {
          x: x,
          y: y
        },
        global: {
          x: x,
          y: y
        },
        type: type,
        id: id
      };
      var context = this.support.getPointerContext(this.root, base);
      this.support.hitTest(this.root, context);
    }
  }, {
    key: "play",
    value: function play() {
      console.log('play');

      if (this.paused) {
        this.time = -1;
        this.paused = false;
        this.updateNextFrame();
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      console.log('pause');
      this.paused = true;
    }
  }]);

  return Engine;
}();



/***/ }),

/***/ "../engine/dist/engine/resources.js":
/*!******************************************!*\
  !*** ../engine/dist/engine/resources.js ***!
  \******************************************/
/*! namespace exports */
/*! export Resources [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Resources": () => /* binding */ Resources
/* harmony export */ });
/* harmony import */ var _utils_debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/debug */ "../engine/dist/utils/debug.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Resources = /*#__PURE__*/function () {
  function Resources() {
    _classCallCheck(this, Resources);

    this.resources = new Map();
    this.resolvers = new Set();
  }

  _createClass(Resources, [{
    key: "get",
    value: function get(asset) {
      if (!asset) {
        return null;
      }

      var resource = this.resources.get(asset);

      if (!resource) {
        resource = this.resolve(asset);
        this.resources.set(asset, resource);
      }

      return resource;
    }
  }, {
    key: "add",
    value: function add(asset, resource) {
      this.resources.set(asset, resource);
    }
  }, {
    key: "remove",
    value: function remove(asset) {
      this.resources["delete"](asset);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.resources.clear();
    }
  }, {
    key: "resolve",
    value: function resolve(asset) {
      var _iterator = _createForOfIteratorHelper(this.resolvers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var resolver = _step.value;
          var resource = resolver(asset);

          if (resource) {
            return resource;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      _utils_debug__WEBPACK_IMPORTED_MODULE_0__.default.warning("Resource not resolved: ".concat(asset));
      return null;
    }
  }]);

  return Resources;
}();

/***/ }),

/***/ "../engine/dist/engine/support.js":
/*!****************************************!*\
  !*** ../engine/dist/engine/support.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Support
/* harmony export */ });
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/component */ "../engine/dist/components/component.js");
/* harmony import */ var _interfaces_pointer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/pointer */ "../engine/dist/interfaces/pointer.js");
/* harmony import */ var _interfaces_transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces/transform */ "../engine/dist/interfaces/transform.js");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources */ "../engine/dist/engine/resources.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Support = /*#__PURE__*/function () {
  function Support() {
    _classCallCheck(this, Support);

    this.updateDepth = 64;
    this.updateHandlers = new Map();
    this.renderHandlers = new Map();
    this.hitTestHandlers = new Map();
    this.propertyHandlers = new Map();
    this.resources = new _resources__WEBPACK_IMPORTED_MODULE_4__.Resources();
  }

  _createClass(Support, [{
    key: "update",
    value: function update(component, context) {
      if (context.depth > this.updateDepth) {
        return;
      }

      if (!_components_component__WEBPACK_IMPORTED_MODULE_1__.Component.isEnabled(component)) {
        return;
      }

      this.propertyHandlers.forEach(function (handler, property) {
        if (component[property]) {
          handler(component, context);
        }
      });

      if (component.onUpdate) {
        component.onUpdate(context.time);
      }

      var handler = this.updateHandlers.get(component.type);

      if (handler) {
        handler(component, context);
      }
    }
  }, {
    key: "render",
    value: function render(component, context) {
      if (context.depth > this.updateDepth) {
        return;
      }

      if (!_components_component__WEBPACK_IMPORTED_MODULE_1__.Component.isVisible(component)) {
        return;
      }

      var handler = this.renderHandlers.get(component.type);

      if (handler) {
        handler(component, context);
      }
    }
  }, {
    key: "hitTest",
    value: function hitTest(component, context) {
      if (context.depth > this.updateDepth) {
        return false;
      }

      if (!_components_component__WEBPACK_IMPORTED_MODULE_1__.Component.isVisible(component)) {
        return false;
      }

      if (!_interfaces_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.isPointerEnabled(component)) {
        return false;
      }

      var handler = this.hitTestHandlers.get(component.type);

      if (handler) {
        var _context$local = context.local,
            x = _context$local.x,
            y = _context$local.y;
        var result = handler(component, context);

        if (result) {
          _interfaces_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, context.type, x, y, context.id);
        }

        if (context.type === 'pointerMove') {
          if (result && !component.pointerOver) {
            _interfaces_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, 'pointerOver', x, y, context.id);
          } else if (!result && component.pointerOver) {
            _interfaces_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, 'pointerOut', x, y, context.id);
          }

          component.pointerOver = result;
        }

        return result;
      }

      return false;
    }
  }, {
    key: "getUpdateContext",
    value: function getUpdateContext(component, parent) {
      return {
        time: parent.time,
        depth: parent.depth + 1,
        support: parent.support
      };
    }
  }, {
    key: "getRenderContext",
    value: function getRenderContext(component, parent) {
      var matrix = _interfaces_transform__WEBPACK_IMPORTED_MODULE_3__.Transform.getMatrix(component);
      var colorTransform = _interfaces_transform__WEBPACK_IMPORTED_MODULE_3__.Transform.getColorTransform(component);
      return {
        depth: parent.depth + 1,
        support: parent.support,
        matrix: _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.concat(parent.matrix, matrix),
        colorTransform: _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.ColorTransform.concat(parent.colorTransform, colorTransform)
      };
    }
  }, {
    key: "getPointerContext",
    value: function getPointerContext(component, parent) {
      var matrix = _interfaces_transform__WEBPACK_IMPORTED_MODULE_3__.Transform.getMatrix(component);
      var transformedMatrix = _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.concat(parent.matrix, matrix);
      return {
        depth: parent.depth + 1,
        type: parent.type,
        support: parent.support,
        global: parent.global,
        matrix: transformedMatrix,
        local: _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.transformInversePoint(transformedMatrix, parent.global)
      };
    }
  }]);

  return Support;
}();



/***/ }),

/***/ "../engine/dist/index.js":
/*!*******************************!*\
  !*** ../engine/dist/index.js ***!
  \*******************************/
/*! namespace exports */
/*! export CONTAINER [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Component [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Container [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Debug [provided] [used in main] [could be renamed] -> ../engine/dist/utils/debug.js .default */
/*! export Engine [provided] [used in main] [could be renamed] -> ../engine/dist/engine/engine.js .default */
/*! export Pivot [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] */
/*! export Pointer [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Resources [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Source [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] */
/*! export Support [provided] [used in main] [could be renamed] -> ../engine/dist/engine/support.js .default */
/*! export Transform [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export applyContainerExtension [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export applyKeyboardSupportExtension [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export applyMouseSupportExtension [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] */
/*! export applyTouchSupportExtension [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export default [not provided] [unused] [could be renamed] */
/*! export hitTest [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export render [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export update [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! other exports [maybe provided (runtime-defined)] [unused] -> ../engine/dist/engine/context.js */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.o, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Source": () => /* reexport safe */ _interfaces_source__WEBPACK_IMPORTED_MODULE_7__.Source,
/* harmony export */   "Pivot": () => /* reexport safe */ _interfaces_pivot__WEBPACK_IMPORTED_MODULE_8__.Pivot,
/* harmony export */   "applyMouseSupportExtension": () => /* reexport safe */ _input_mouse__WEBPACK_IMPORTED_MODULE_12__.applyMouseSupportExtension,
/* harmony export */   "Support": () => /* reexport safe */ _engine_support__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "Engine": () => /* reexport safe */ _engine_engine__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "Debug": () => /* reexport safe */ _utils_debug__WEBPACK_IMPORTED_MODULE_2__.default
/* harmony export */ });
/* harmony import */ var _engine_support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/support */ "../engine/dist/engine/support.js");
/* harmony import */ var _engine_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/engine */ "../engine/dist/engine/engine.js");
/* harmony import */ var _utils_debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/debug */ "../engine/dist/utils/debug.js");
/* harmony import */ var _engine_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/context */ "../engine/dist/engine/context.js");
/* harmony import */ var _engine_context__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_engine_context__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_engine_context__WEBPACK_IMPORTED_MODULE_3__, "Pivot")) __webpack_require__.d(__webpack_exports__, { "Pivot": function() { return _engine_context__WEBPACK_IMPORTED_MODULE_3__.Pivot; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_engine_context__WEBPACK_IMPORTED_MODULE_3__, "Source")) __webpack_require__.d(__webpack_exports__, { "Source": function() { return _engine_context__WEBPACK_IMPORTED_MODULE_3__.Source; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_engine_context__WEBPACK_IMPORTED_MODULE_3__, "applyMouseSupportExtension")) __webpack_require__.d(__webpack_exports__, { "applyMouseSupportExtension": function() { return _engine_context__WEBPACK_IMPORTED_MODULE_3__.applyMouseSupportExtension; } });
/* harmony import */ var _engine_resources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engine/resources */ "../engine/dist/engine/resources.js");
/* harmony import */ var _interfaces_pointer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interfaces/pointer */ "../engine/dist/interfaces/pointer.js");
/* harmony import */ var _interfaces_transform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interfaces/transform */ "../engine/dist/interfaces/transform.js");
/* harmony import */ var _interfaces_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interfaces/source */ "../engine/dist/interfaces/source.js");
/* harmony import */ var _interfaces_pivot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interfaces/pivot */ "../engine/dist/interfaces/pivot.js");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/component */ "../engine/dist/components/component.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/container */ "../engine/dist/components/container.js");
/* harmony import */ var _input_keyboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./input/keyboard */ "../engine/dist/input/keyboard.js");
/* harmony import */ var _input_mouse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./input/mouse */ "../engine/dist/input/mouse.js");
/* harmony import */ var _input_touch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./input/touch */ "../engine/dist/input/touch.js");
















/***/ }),

/***/ "../engine/dist/input/keyboard.js":
/*!****************************************!*\
  !*** ../engine/dist/input/keyboard.js ***!
  \****************************************/
/*! namespace exports */
/*! export applyKeyboardSupportExtension [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export applyKeyboardSupportExtension */
function applyKeyboardSupportExtension(engine) {}

/***/ }),

/***/ "../engine/dist/input/mouse.js":
/*!*************************************!*\
  !*** ../engine/dist/input/mouse.js ***!
  \*************************************/
/*! namespace exports */
/*! export applyMouseSupportExtension [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyMouseSupportExtension": () => /* binding */ applyMouseSupportExtension
/* harmony export */ });
function dispatchEvent(engine, event, type) {
  var element = engine.support.element;
  var clientRect = element.getBoundingClientRect();
  var x = event.clientX - clientRect.left - element.clientLeft;
  var y = event.clientY - clientRect.top - element.clientTop;
  engine.dispatchPointerEvent({
    type: type,
    x: x,
    y: y
  });
  event.preventDefault();
}

function applyMouseSupportExtension(engine) {
  var element = engine.support.element;
  element.addEventListener('mousedown', function (event) {
    dispatchEvent(engine, event, 'pointerDown');
  });
  element.addEventListener('mouseup', function (event) {
    dispatchEvent(engine, event, 'pointerUp');
  });
  element.addEventListener('mousemove', function (event) {
    dispatchEvent(engine, event, 'pointerMove');
  });
}

/***/ }),

/***/ "../engine/dist/input/touch.js":
/*!*************************************!*\
  !*** ../engine/dist/input/touch.js ***!
  \*************************************/
/*! namespace exports */
/*! export applyTouchSupportExtension [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export applyTouchSupportExtension */
function dispatchEvent(engine, event, type) {
  var element = engine.support.element;
  var clientRect = element.getBoundingClientRect();

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var x = touch.clientX - clientRect.left - element.clientLeft;
    var y = touch.clientY - clientRect.top - element.clientTop;
    var id = touch.identifier;
    engine.dispatchPointerEvent({
      type: type,
      x: x,
      y: y,
      id: id
    });
  }

  event.preventDefault();
}

function applyTouchSupportExtension(engine) {
  var element = engine.support.element;
  element.addEventListener('touchstart', function (event) {
    dispatchEvent(engine, event, 'pointerDown');
  });
  element.addEventListener('touchend', function (event) {
    dispatchEvent(engine, event, 'pointerUp');
  });
  element.addEventListener('touchmove', function (event) {
    dispatchEvent(engine, event, 'pointerMove');
  });
}

/***/ }),

/***/ "../engine/dist/interfaces/pivot.js":
/*!******************************************!*\
  !*** ../engine/dist/interfaces/pivot.js ***!
  \******************************************/
/*! namespace exports */
/*! export Pivot [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pivot": () => /* binding */ Pivot
/* harmony export */ });
var Pivot;

(function (Pivot) {
  function getX(pivot, width) {
    var pivotX = pivot.pivotX;

    if (pivotX) {
      return -pivotX * width;
    }

    return 0;
  }

  Pivot.getX = getX;

  function getY(pivot, height) {
    var pivotY = pivot.pivotY;

    if (pivotY) {
      return -pivotY * height;
    }

    return 0;
  }

  Pivot.getY = getY;
})(Pivot || (Pivot = {}));

/***/ }),

/***/ "../engine/dist/interfaces/pointer.js":
/*!********************************************!*\
  !*** ../engine/dist/interfaces/pointer.js ***!
  \********************************************/
/*! namespace exports */
/*! export Pointer [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pointer": () => /* binding */ Pointer
/* harmony export */ });
/* harmony import */ var _utils_debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/debug */ "../engine/dist/utils/debug.js");

var Pointer;

(function (Pointer) {
  function isPointerOver(pointer) {
    return !!pointer.pointerOver;
  }

  Pointer.isPointerOver = isPointerOver;

  function isPointerEnabled(pointer) {
    var _pointer$pointerEnabl;

    return (_pointer$pointerEnabl = pointer.pointerEnabled) !== null && _pointer$pointerEnabl !== void 0 ? _pointer$pointerEnabl : true;
  }

  Pointer.isPointerEnabled = isPointerEnabled;

  function dispatchEvent(pointer, type, x, y, id) {
    var handlerName = "on".concat(type.charAt(0).toUpperCase()).concat(type.slice(1));

    if (handlerName) {
      var handler = pointer[handlerName];

      if (handler) {
        var event = {
          type: type,
          x: x,
          y: y,
          id: id
        };
        handler(event);
      }
    } else {
      _utils_debug__WEBPACK_IMPORTED_MODULE_0__.default.warning("Pointer event with type: ".concat(type, " not found"));
    }
  }

  Pointer.dispatchEvent = dispatchEvent;
})(Pointer || (Pointer = {}));

/***/ }),

/***/ "../engine/dist/interfaces/source.js":
/*!*******************************************!*\
  !*** ../engine/dist/interfaces/source.js ***!
  \*******************************************/
/*! namespace exports */
/*! export Source [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Source": () => /* binding */ Source
/* harmony export */ });
var Source;

(function (Source) {
  function getResource(source, context) {
    var src = source.src;

    if (!src) {
      return null;
    }

    return context.support.resources.get(src);
  }

  Source.getResource = getResource;

  function isLoaded(source, context) {
    var resource = getResource(source, context);
    return !!(resource === null || resource === void 0 ? void 0 : resource.loaded);
  }

  Source.isLoaded = isLoaded;
})(Source || (Source = {}));

/***/ }),

/***/ "../engine/dist/interfaces/transform.js":
/*!**********************************************!*\
  !*** ../engine/dist/interfaces/transform.js ***!
  \**********************************************/
/*! namespace exports */
/*! export Transform [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transform": () => /* binding */ Transform
/* harmony export */ });
var Transform;

(function (Transform) {
  function getMatrix(transform) {
    var _ref, _transform$scaleX, _ref2, _transform$scaleY, _transform$x, _transform$y;

    var matrix = transform.matrix;

    if (matrix) {
      var _matrix$a, _matrix$b, _matrix$c, _matrix$d, _matrix$tx, _matrix$ty;

      return {
        a: (_matrix$a = matrix.a) !== null && _matrix$a !== void 0 ? _matrix$a : 1,
        b: (_matrix$b = matrix.b) !== null && _matrix$b !== void 0 ? _matrix$b : 0,
        c: (_matrix$c = matrix.c) !== null && _matrix$c !== void 0 ? _matrix$c : 0,
        d: (_matrix$d = matrix.d) !== null && _matrix$d !== void 0 ? _matrix$d : 1,
        tx: (_matrix$tx = matrix.tx) !== null && _matrix$tx !== void 0 ? _matrix$tx : 0,
        ty: (_matrix$ty = matrix.ty) !== null && _matrix$ty !== void 0 ? _matrix$ty : 0
      };
    }

    var rotation = transform.rotation;
    var scaleX = (_ref = (_transform$scaleX = transform.scaleX) !== null && _transform$scaleX !== void 0 ? _transform$scaleX : transform.scale) !== null && _ref !== void 0 ? _ref : 1;
    var scaleY = (_ref2 = (_transform$scaleY = transform.scaleY) !== null && _transform$scaleY !== void 0 ? _transform$scaleY : transform.scale) !== null && _ref2 !== void 0 ? _ref2 : 1;
    var tx = (_transform$x = transform.x) !== null && _transform$x !== void 0 ? _transform$x : 0;
    var ty = (_transform$y = transform.y) !== null && _transform$y !== void 0 ? _transform$y : 0;

    if (rotation) {
      var cos = Math.cos(rotation);
      var sin = Math.sin(rotation);
      return {
        a: cos * scaleX,
        b: sin * scaleX,
        c: -sin * scaleY,
        d: cos * scaleY,
        tx: tx,
        ty: ty
      };
    }

    return {
      a: scaleX,
      b: 0,
      c: 0,
      d: scaleY,
      tx: tx,
      ty: ty
    };
  }

  Transform.getMatrix = getMatrix;

  function getColorTransform(transform) {
    var _transform$alpha2;

    var colorTransform = transform.colorTransform;

    if (colorTransform) {
      var _colorTransform$alpha, _colorTransform$redMu, _colorTransform$green, _colorTransform$blueM, _colorTransform$alpha2, _colorTransform$redOf, _colorTransform$green2, _colorTransform$blueO;

      return {
        alphaMultiplier: (_colorTransform$alpha = colorTransform.alphaMultiplier) !== null && _colorTransform$alpha !== void 0 ? _colorTransform$alpha : 1,
        redMultiplier: (_colorTransform$redMu = colorTransform.redMultiplier) !== null && _colorTransform$redMu !== void 0 ? _colorTransform$redMu : 1,
        greenMultiplier: (_colorTransform$green = colorTransform.greenMultiplier) !== null && _colorTransform$green !== void 0 ? _colorTransform$green : 1,
        blueMultiplier: (_colorTransform$blueM = colorTransform.blueMultiplier) !== null && _colorTransform$blueM !== void 0 ? _colorTransform$blueM : 1,
        alphaOffset: (_colorTransform$alpha2 = colorTransform.alphaOffset) !== null && _colorTransform$alpha2 !== void 0 ? _colorTransform$alpha2 : 0,
        redOffset: (_colorTransform$redOf = colorTransform.redOffset) !== null && _colorTransform$redOf !== void 0 ? _colorTransform$redOf : 0,
        greenOffset: (_colorTransform$green2 = colorTransform.greenOffset) !== null && _colorTransform$green2 !== void 0 ? _colorTransform$green2 : 0,
        blueOffset: (_colorTransform$blueO = colorTransform.blueOffset) !== null && _colorTransform$blueO !== void 0 ? _colorTransform$blueO : 0
      };
    }

    var tint = transform.tint;

    if (tint) {
      var _transform$alpha;

      var _tint$color = tint.color,
          color = _tint$color === void 0 ? 0 : _tint$color,
          _tint$value = tint.value,
          value = _tint$value === void 0 ? 1 : _tint$value;
      var valueInverted = 1 - value;
      var r = color >> 16 & 0xff;
      var g = color >> 8 & 0xff;
      var b = color & 0xff;
      return {
        alphaMultiplier: (_transform$alpha = transform.alpha) !== null && _transform$alpha !== void 0 ? _transform$alpha : 1,
        redMultiplier: valueInverted,
        greenMultiplier: valueInverted,
        blueMultiplier: valueInverted,
        alphaOffset: 0,
        redOffset: r * value,
        greenOffset: g * value,
        blueOffset: b * value
      };
    }

    return {
      alphaMultiplier: (_transform$alpha2 = transform.alpha) !== null && _transform$alpha2 !== void 0 ? _transform$alpha2 : 1,
      redMultiplier: 1,
      greenMultiplier: 1,
      blueMultiplier: 1,
      alphaOffset: 0,
      redOffset: 0,
      greenOffset: 0,
      blueOffset: 0
    };
  }

  Transform.getColorTransform = getColorTransform;
})(Transform || (Transform = {}));

/***/ }),

/***/ "../engine/dist/utils/debug.js":
/*!*************************************!*\
  !*** ../engine/dist/utils/debug.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Debug
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Debug = /*#__PURE__*/function () {
  function Debug() {
    _classCallCheck(this, Debug);
  }

  _createClass(Debug, null, [{
    key: "log",
    value: function log() {
      var _console;

      (_console = console).log.apply(_console, arguments);
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var id = String(args);
      var count = this.errors.get(id);

      if (!count) {
        var _console2;

        count = 0;

        (_console2 = console).error.apply(_console2, args);
      }

      count++;
      this.errors.set(id, count);
    }
  }, {
    key: "warning",
    value: function warning() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var id = String(args);
      var count = this.warnings.get(id);

      if (!count) {
        var _console3;

        count = 0;

        (_console3 = console).warn.apply(_console3, args);
      }

      count++;
      this.warnings.set(id, count);
    }
  }]);

  return Debug;
}();


Debug.errors = new Map();
Debug.warnings = new Map();

/***/ }),

/***/ "../geom/dist/bounds.js":
/*!******************************!*\
  !*** ../geom/dist/bounds.js ***!
  \******************************/
/*! namespace exports */
/*! export Bounds [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bounds": () => /* binding */ Bounds
/* harmony export */ });
var Bounds;

(function (Bounds) {
  function empty() {
    return {
      minX: Number.MAX_VALUE,
      minY: Number.MAX_VALUE,
      maxX: Number.MIN_VALUE,
      maxY: Number.MIN_VALUE
    };
  }

  Bounds.empty = empty;

  function isEmpty(bounds) {
    var minX = bounds.minX,
        minY = bounds.minY,
        maxX = bounds.maxX,
        maxY = bounds.maxY;
    return minX === Number.MAX_VALUE && minY === Number.MAX_VALUE && maxX === Number.MIN_VALUE && maxY === Number.MIN_VALUE;
  }

  Bounds.isEmpty = isEmpty;

  function toRectangle(bounds) {
    var minX = bounds.minX,
        minY = bounds.minY,
        maxX = bounds.maxX,
        maxY = bounds.maxY;
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }

  Bounds.toRectangle = toRectangle;

  function testX(bounds, x) {
    if (bounds.minX > x) {
      bounds.minX = x;
    } else if (bounds.maxX < x) {
      bounds.maxX = x;
    }
  }

  Bounds.testX = testX;

  function testY(bounds, y) {
    if (bounds.minY > y) {
      bounds.minY = y;
    } else if (bounds.maxY < y) {
      bounds.maxY = y;
    }
  }

  Bounds.testY = testY;

  function test(bounds, x, y) {
    if (bounds.minX > x) {
      bounds.minX = x;
    } else if (bounds.maxX < x) {
      bounds.maxX = x;
    }

    if (bounds.minY > y) {
      bounds.minY = y;
    } else if (bounds.maxY < y) {
      bounds.maxY = y;
    }
  }

  Bounds.test = test;

  function testPoint(bounds, point) {
    var x = point.x,
        y = point.y;

    if (bounds.minX > x) {
      bounds.minX = x;
    } else if (bounds.maxX < x) {
      bounds.maxX = x;
    }

    if (bounds.minY > y) {
      bounds.minY = y;
    } else if (bounds.maxY < y) {
      bounds.maxY = y;
    }
  }

  Bounds.testPoint = testPoint;
})(Bounds || (Bounds = {}));

/***/ }),

/***/ "../geom/dist/color-transform.js":
/*!***************************************!*\
  !*** ../geom/dist/color-transform.js ***!
  \***************************************/
/*! namespace exports */
/*! export ColorTransform [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorTransform": () => /* binding */ ColorTransform
/* harmony export */ });
var ColorTransform;

(function (ColorTransform) {
  function empty() {
    return {
      alphaMultiplier: 1,
      redMultiplier: 1,
      greenMultiplier: 1,
      blueMultiplier: 1,
      alphaOffset: 0,
      redOffset: 0,
      greenOffset: 0,
      blueOffset: 0
    };
  }

  ColorTransform.empty = empty;

  function concat(ct1, ct0) {
    return {
      alphaMultiplier: ct1.alphaMultiplier * ct0.alphaMultiplier,
      redMultiplier: ct1.redMultiplier * ct0.redMultiplier,
      greenMultiplier: ct1.greenMultiplier * ct0.greenMultiplier,
      blueMultiplier: ct1.blueMultiplier * ct0.blueMultiplier,
      alphaOffset: ct1.alphaMultiplier * ct0.alphaOffset + ct0.alphaOffset,
      redOffset: ct1.redMultiplier * ct0.redOffset + ct0.redOffset,
      greenOffset: ct1.greenMultiplier * ct0.greenOffset + ct0.greenOffset,
      blueOffset: ct1.blueMultiplier * ct0.blueOffset + ct0.blueOffset
    };
  }

  ColorTransform.concat = concat;

  function isDefault(ct) {
    return ct.redMultiplier === 1 && ct.greenMultiplier === 1 && ct.blueMultiplier === 1 && ct.alphaMultiplier === 1 && ct.redOffset === 0 && ct.greenOffset === 0 && ct.blueOffset === 0 && ct.alphaOffset === 0;
  }

  ColorTransform.isDefault = isDefault;
})(ColorTransform || (ColorTransform = {}));

/***/ }),

/***/ "../geom/dist/index.js":
/*!*****************************!*\
  !*** ../geom/dist/index.js ***!
  \*****************************/
/*! namespace exports */
/*! export Bounds [provided] [used in main] [could be renamed] -> ../geom/dist/bounds.js .Bounds */
/*! export ColorTransform [provided] [used in main] [could be renamed] -> ../geom/dist/color-transform.js .ColorTransform */
/*! export Matrix [provided] [used in main] [could be renamed] -> ../geom/dist/matrix.js .Matrix */
/*! export Point [provided] [unused] [could be renamed] -> ../geom/dist/point.js .Point */
/*! export Rectangle [provided] [used in main] [could be renamed] -> ../geom/dist/rectangle.js .Rectangle */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorTransform": () => /* reexport safe */ _color_transform__WEBPACK_IMPORTED_MODULE_0__.ColorTransform,
/* harmony export */   "Bounds": () => /* reexport safe */ _bounds__WEBPACK_IMPORTED_MODULE_1__.Bounds,
/* harmony export */   "Matrix": () => /* reexport safe */ _matrix__WEBPACK_IMPORTED_MODULE_2__.Matrix,
/* harmony export */   "Rectangle": () => /* reexport safe */ _rectangle__WEBPACK_IMPORTED_MODULE_4__.Rectangle
/* harmony export */ });
/* harmony import */ var _color_transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-transform */ "../geom/dist/color-transform.js");
/* harmony import */ var _bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bounds */ "../geom/dist/bounds.js");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matrix */ "../geom/dist/matrix.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point */ "../geom/dist/point.js");
/* harmony import */ var _rectangle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rectangle */ "../geom/dist/rectangle.js");






/***/ }),

/***/ "../geom/dist/matrix.js":
/*!******************************!*\
  !*** ../geom/dist/matrix.js ***!
  \******************************/
/*! namespace exports */
/*! export Matrix [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Matrix": () => /* binding */ Matrix
/* harmony export */ });
var Matrix;

(function (Matrix) {
  function empty() {
    return {
      a: 1,
      b: 0,
      c: 0,
      d: 1,
      tx: 0,
      ty: 0
    };
  }

  Matrix.empty = empty;

  function concat(matrix0, matrix1) {
    return {
      a: matrix1.a * matrix0.a + matrix1.b * matrix0.c,
      b: matrix1.a * matrix0.b + matrix1.b * matrix0.d,
      c: matrix1.c * matrix0.a + matrix1.d * matrix0.c,
      d: matrix1.c * matrix0.b + matrix1.d * matrix0.d,
      tx: matrix1.tx * matrix0.a + matrix1.ty * matrix0.c + matrix0.tx,
      ty: matrix1.tx * matrix0.b + matrix1.ty * matrix0.d + matrix0.ty
    };
  }

  Matrix.concat = concat;

  function getDeterminant(matrix) {
    return matrix.a * matrix.d - matrix.b * matrix.c;
  }

  Matrix.getDeterminant = getDeterminant;

  function invert(matrix) {
    var determinant = getDeterminant(matrix);

    if (determinant === 0) {
      matrix.a = 0;
      matrix.b = 0;
      matrix.c = 0;
      matrix.d = 0;
      matrix.tx = -matrix.tx;
      matrix.ty = -matrix.ty;
    } else {
      determinant = 1.0 / determinant;
      var d = matrix.d * determinant;
      var a = matrix.a * determinant;
      matrix.a = d;
      matrix.b *= -determinant;
      matrix.c *= -determinant;
      matrix.d = a;
      var tx = -matrix.a * matrix.tx - matrix.c * matrix.ty;
      var ty = -matrix.b * matrix.tx - matrix.d * matrix.ty;
      matrix.tx = tx;
      matrix.ty = ty;
    }
  }

  Matrix.invert = invert;

  function transformPoint(matrix, point) {
    var x = point.x,
        y = point.y;
    return {
      x: x * matrix.a + y * matrix.c + matrix.tx,
      y: x * matrix.b + y * matrix.d + matrix.ty
    };
  }

  Matrix.transformPoint = transformPoint;

  function transformInversePoint(matrix, point) {
    var determinant = getDeterminant(matrix);

    if (determinant === 0) {
      return {
        x: -matrix.tx,
        y: -matrix.ty
      };
    }

    determinant = 1 / determinant;
    var x = point.x,
        y = point.y;
    return {
      x: determinant * (matrix.c * (matrix.ty - y) + matrix.d * (x - matrix.tx)),
      y: determinant * (matrix.a * (y - matrix.ty) + matrix.b * (matrix.tx - x))
    };
  }

  Matrix.transformInversePoint = transformInversePoint;

  function transformBounds(matrix, bounds) {
    var a = matrix.a,
        b = matrix.b,
        c = matrix.c,
        d = matrix.d,
        tx = matrix.tx,
        ty = matrix.ty;
    var rx = bounds.x;
    var ry = bounds.y;
    var rr = rx + bounds.width;
    var rb = ry + bounds.height;
    var nx1 = rx * a + ry * c + tx;
    var ny1 = rx * b + ry * d + ty;
    var nx2 = rr * a + ry * c + tx;
    var ny2 = rr * b + ry * d + ty;
    var nx3 = rr * a + rb * c + tx;
    var ny3 = rr * b + rb * d + ty;
    var nx4 = rx * a + rb * c + tx;
    var ny4 = rx * b + rb * d + ty;
    var left = nx1;

    if (left > nx2) {
      left = nx2;
    }

    if (left > nx3) {
      left = nx3;
    }

    if (left > nx4) {
      left = nx4;
    }

    var top = ny1;

    if (top > ny2) {
      top = ny2;
    }

    if (top > ny3) {
      top = ny3;
    }

    if (top > ny4) {
      top = ny4;
    }

    var right = nx1;

    if (right < nx2) {
      right = nx2;
    }

    if (right < nx3) {
      right = nx3;
    }

    if (right < nx4) {
      right = nx4;
    }

    var bottom = ny1;

    if (bottom < ny2) {
      bottom = ny2;
    }

    if (bottom < ny3) {
      bottom = ny3;
    }

    if (bottom < ny4) {
      bottom = ny4;
    }

    return {
      x: left,
      y: top,
      width: right - left,
      height: bottom - top
    };
  }

  Matrix.transformBounds = transformBounds;
})(Matrix || (Matrix = {}));

/***/ }),

/***/ "../geom/dist/point.js":
/*!*****************************!*\
  !*** ../geom/dist/point.js ***!
  \*****************************/
/*! namespace exports */
/*! export Point [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export Point */
var Point;

(function (Point) {
  function empty() {
    return {
      x: 0,
      y: 0
    };
  }

  Point.empty = empty;
})(Point || (Point = {}));

/***/ }),

/***/ "../geom/dist/rectangle.js":
/*!*********************************!*\
  !*** ../geom/dist/rectangle.js ***!
  \*********************************/
/*! namespace exports */
/*! export Rectangle [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rectangle": () => /* binding */ Rectangle
/* harmony export */ });
var Rectangle;

(function (Rectangle) {
  function contains(rectangle, point) {
    return rectangle.x < point.x && rectangle.x + rectangle.width > point.x && rectangle.y < point.y && rectangle.y + rectangle.height > point.y;
  }

  Rectangle.contains = contains;

  function isEmpty(rectangle) {
    return !rectangle.width || !rectangle.height;
  }

  Rectangle.isEmpty = isEmpty;
})(Rectangle || (Rectangle = {}));

/***/ }),

/***/ "../image/dist/image-canvas-color.js":
/*!*******************************************!*\
  !*** ../image/dist/image-canvas-color.js ***!
  \*******************************************/
/*! namespace exports */
/*! export applyCanvasImageColorExtension [provided] [used in main] [could be renamed] */
/*! export renderCanvasColor [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyCanvasImageColorExtension": () => /* binding */ applyCanvasImageColorExtension
/* harmony export */ });
/* unused harmony export renderCanvasColor */
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "../image/dist/image.js");



var tempContext;

function isDefaultColorTransform(ct) {
  return ct.redMultiplier === 1 && ct.greenMultiplier === 1 && ct.blueMultiplier === 1 && ct.redOffset === 0 && ct.greenOffset === 0 && ct.blueOffset === 0 && ct.alphaOffset === 0;
}

function updateTempContext(context) {
  if (!tempContext) {
    var canvas = document.createElement('canvas');
    tempContext = canvas.getContext('2d');
  }

  if (tempContext.canvas.width !== context.canvas.width) {
    tempContext.canvas.width = context.canvas.width;
  }

  if (tempContext.canvas.height !== context.canvas.height) {
    tempContext.canvas.height = context.canvas.height;
  }
}

function renderCanvasColor(image, context) {
  var resource = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Source.getResource(image, context);

  if (!(resource === null || resource === void 0 ? void 0 : resource.loaded) || !(resource === null || resource === void 0 ? void 0 : resource.image)) {
    return;
  }

  var colorTransform = context.colorTransform;

  if (colorTransform.alphaMultiplier <= 0) {
    return;
  }

  var support = context.support,
      matrix = context.matrix;
  var context2d = support.context2d;
  var _resource$image = resource.image,
      width = _resource$image.width,
      height = _resource$image.height;
  var x = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(image, width);
  var y = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(image, height);

  if (isDefaultColorTransform(colorTransform)) {
    context2d.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
    context2d.globalAlpha = colorTransform.alphaMultiplier;
    context2d.drawImage(resource.image, x, y);
  } else {
    updateTempContext(context2d);
    var bounds = _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Matrix.transformBounds(matrix, {
      x: x,
      y: y,
      width: width,
      height: height
    });

    if (_e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.isEmpty(bounds)) {
      return;
    }

    tempContext.clearRect(bounds.x, bounds.y, bounds.width, bounds.height);
    tempContext.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
    tempContext.drawImage(resource.image, x, y);
    var imageData = tempContext.getImageData(bounds.x, bounds.y, bounds.width, bounds.height);
    var rm = colorTransform.redMultiplier;
    var gm = colorTransform.greenMultiplier;
    var bm = colorTransform.blueMultiplier;
    var am = colorTransform.alphaMultiplier;
    var ro = colorTransform.redOffset;
    var go = colorTransform.greenOffset;
    var bo = colorTransform.blueOffset;
    var ao = colorTransform.alphaOffset;
    var data = imageData.data;
    var length = data.length;

    for (var i = 0; i < length;) {
      data[i] = data[i++] * rm + ro;
      data[i] = data[i++] * gm + go;
      data[i] = data[i++] * bm + bo;
      data[i] = data[i++] * am + ao;
    }

    tempContext.putImageData(imageData, bounds.x, bounds.y);
    context2d.setTransform();
    context2d.globalAlpha = 1;
    context2d.drawImage(tempContext.canvas, bounds.x, bounds.y, bounds.width, bounds.height, bounds.x, bounds.y, bounds.width, bounds.height);
  }
}
function applyCanvasImageColorExtension(support) {
  (0,_image__WEBPACK_IMPORTED_MODULE_2__.applyImageExtension)(support);
  support.renderHandlers.set(_image__WEBPACK_IMPORTED_MODULE_2__.IMAGE, renderCanvasColor);
}

/***/ }),

/***/ "../image/dist/image-canvas.js":
/*!*************************************!*\
  !*** ../image/dist/image-canvas.js ***!
  \*************************************/
/*! namespace exports */
/*! export applyCanvasImageExtension [provided] [unused] [could be renamed] */
/*! export renderCanvas [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports renderCanvas, applyCanvasImageExtension */
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "../image/dist/image.js");


function renderCanvas(image, context) {
  var resource = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Source.getResource(image, context);

  if (!(resource === null || resource === void 0 ? void 0 : resource.loaded) || !(resource === null || resource === void 0 ? void 0 : resource.image)) {
    return;
  }

  var colorTransform = context.colorTransform;

  if (colorTransform.alphaMultiplier <= 0) {
    return;
  }

  var support = context.support;
  var context2d = support.context2d;
  var matrix = context.matrix;
  context2d.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
  var _resource$image = resource.image,
      width = _resource$image.width,
      height = _resource$image.height;
  var x = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(image, width);
  var y = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(image, height);
  context2d.globalAlpha = colorTransform.alphaMultiplier;
  context2d.drawImage(resource.image, x, y);
}
function applyCanvasImageExtension(support) {
  (0,_image__WEBPACK_IMPORTED_MODULE_1__.applyImageExtension)(support);
  support.renderHandlers.set(_image__WEBPACK_IMPORTED_MODULE_1__.IMAGE, renderCanvas);
}

/***/ }),

/***/ "../image/dist/image.js":
/*!******************************!*\
  !*** ../image/dist/image.js ***!
  \******************************/
/*! namespace exports */
/*! export IMAGE [provided] [used in main] [could be renamed] */
/*! export Image [provided] [unused] [could be renamed] */
/*! export applyImageExtension [provided] [used in main] [could be renamed] */
/*! export hitTest [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMAGE": () => /* binding */ IMAGE,
/* harmony export */   "applyImageExtension": () => /* binding */ applyImageExtension
/* harmony export */ });
/* unused harmony exports Image, hitTest */
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _e2d_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @e2d/resources */ "../resources/dist/index.js");



var IMAGE = 'image';
var Image;

(function (Image) {
  function getBounds(image, context) {
    var src = image.src;

    if (!src) {
      return undefined;
    }

    var support = context.support;
    var resource = support.resources.get(src);

    if (!(resource === null || resource === void 0 ? void 0 : resource.loaded) || !(resource === null || resource === void 0 ? void 0 : resource.image)) {
      return undefined;
    }

    var _resource$image = resource.image,
        width = _resource$image.width,
        height = _resource$image.height;
    var x = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(image, width);
    var y = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(image, height);
    return {
      x: x,
      y: y,
      width: width,
      height: height
    };
  }

  Image.getBounds = getBounds;
})(Image || (Image = {}));

function hitTest(image, context) {
  var local = context.local;
  var bounds = Image.getBounds(image, context);
  return !!bounds && _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.contains(bounds, local);
}
function applyImageExtension(support) {
  support.hitTestHandlers.set(IMAGE, hitTest);
  support.resources.resolvers.add(_e2d_resources__WEBPACK_IMPORTED_MODULE_2__.resolveImage);
}

/***/ }),

/***/ "../image/dist/index.js":
/*!******************************!*\
  !*** ../image/dist/index.js ***!
  \******************************/
/*! namespace exports */
/*! export IMAGE [provided] [used in main] [could be renamed] -> ../image/dist/image.js .IMAGE */
/*! export Image [provided] [unused] [could be renamed] -> ../image/dist/image.js .Image */
/*! export applyCanvasImageColorExtension [provided] [used in main] [could be renamed] -> ../image/dist/image-canvas-color.js .applyCanvasImageColorExtension */
/*! export applyCanvasImageExtension [provided] [unused] [could be renamed] -> ../image/dist/image-canvas.js .applyCanvasImageExtension */
/*! export applyImageExtension [provided] [used in main] [could be renamed] -> ../image/dist/image.js .applyImageExtension */
/*! export hitTest [provided] [unused] [could be renamed] -> ../image/dist/image.js .hitTest */
/*! export renderCanvas [provided] [unused] [could be renamed] -> ../image/dist/image-canvas.js .renderCanvas */
/*! export renderCanvasColor [provided] [unused] [could be renamed] -> ../image/dist/image-canvas-color.js .renderCanvasColor */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMAGE": () => /* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_0__.IMAGE,
/* harmony export */   "applyImageExtension": () => /* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_0__.applyImageExtension,
/* harmony export */   "applyCanvasImageColorExtension": () => /* reexport safe */ _image_canvas_color__WEBPACK_IMPORTED_MODULE_2__.applyCanvasImageColorExtension
/* harmony export */ });
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image */ "../image/dist/image.js");
/* harmony import */ var _image_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-canvas */ "../image/dist/image-canvas.js");
/* harmony import */ var _image_canvas_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-canvas-color */ "../image/dist/image-canvas-color.js");




/***/ }),

/***/ "../resources/dist/image.js":
/*!**********************************!*\
  !*** ../resources/dist/image.js ***!
  \**********************************/
/*! namespace exports */
/*! export resolveImage [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveImage": () => /* binding */ resolveImage
/* harmony export */ });
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");

function resolveImage(asset) {
  var extension = asset.split('.').pop();

  switch (extension) {
    case 'png':
    case 'jpg':
      var resource = {
        asset: asset,
        loaded: false,
        image: null
      };
      var image = document.createElement('img');
      image.src = asset;

      image.onload = function () {
        console.log("image loaded: ".concat(asset));
        resource.image = image;
        resource.loaded = true;
      };

      image.onerror = function (e) {
        return _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Debug.warning('image load error', e);
      };

      return resource;

    default:
      break;
  }

  return null;
}

/***/ }),

/***/ "../resources/dist/index.js":
/*!**********************************!*\
  !*** ../resources/dist/index.js ***!
  \**********************************/
/*! namespace exports */
/*! export resolveImage [provided] [used in main] [could be renamed] -> ../resources/dist/image.js .resolveImage */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveImage": () => /* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_0__.resolveImage
/* harmony export */ });
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image */ "../resources/dist/image.js");


/***/ }),

/***/ "../shape/dist/data/data.js":
/*!**********************************!*\
  !*** ../shape/dist/data/data.js ***!
  \**********************************/
/*! namespace exports */
/*! export EllipseData [provided] [unused] [could be renamed] */
/*! export GraphicsData [provided] [used in main] [could be renamed] */
/*! export PathData [provided] [unused] [could be renamed] */
/*! export RectangleData [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphicsData": () => /* binding */ GraphicsData
/* harmony export */ });
/* unused harmony exports RectangleData, EllipseData, PathData */
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path */ "../shape/dist/data/path.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string */ "../shape/dist/data/string.js");



var RectangleData;

(function (RectangleData) {
  function calculateBounds(data, bounds) {
    var _data$x = data.x,
        x = _data$x === void 0 ? 0 : _data$x,
        _data$y = data.y,
        y = _data$y === void 0 ? 0 : _data$y,
        _data$width = data.width,
        width = _data$width === void 0 ? 0 : _data$width,
        _data$height = data.height,
        height = _data$height === void 0 ? 0 : _data$height;
    _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, x, y);
    _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, x + width, y + height);
  }

  RectangleData.calculateBounds = calculateBounds;
})(RectangleData || (RectangleData = {}));

var EllipseData;

(function (EllipseData) {
  function calculateBounds(data, bounds) {
    var _data$x2 = data.x,
        x = _data$x2 === void 0 ? 0 : _data$x2,
        _data$y2 = data.y,
        y = _data$y2 === void 0 ? 0 : _data$y2,
        radius = data.radius,
        _data$radiusX = data.radiusX,
        radiusX = _data$radiusX === void 0 ? 0 : _data$radiusX,
        _data$radiusY = data.radiusY,
        radiusY = _data$radiusY === void 0 ? 0 : _data$radiusY;
    var rx = radius !== null && radius !== void 0 ? radius : radiusX;
    var ry = radius !== null && radius !== void 0 ? radius : radiusY;
    _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, x - rx, y - ry);
    _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, x + rx, y + ry);
  }

  EllipseData.calculateBounds = calculateBounds;
})(EllipseData || (EllipseData = {}));

var PathData;

(function (PathData) {
  function calculateBounds(pathData, bounds) {
    var data = pathData.data;

    if (typeof data === 'string') {
      _string__WEBPACK_IMPORTED_MODULE_2__.GraphicsString.calculateBounds(data, bounds);
    } else if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        var command = data[i];
        _path__WEBPACK_IMPORTED_MODULE_1__.PathCommand.calculateBounds(command, bounds);
      }
    }
  }

  PathData.calculateBounds = calculateBounds;
})(PathData || (PathData = {}));

var GraphicsData;

(function (GraphicsData) {
  function calculateBounds(data, bounds) {
    var type = data.type;

    switch (type) {
      case 'rectangle':
        RectangleData.calculateBounds(data, bounds);
        break;

      case 'ellipse':
        EllipseData.calculateBounds(data, bounds);
        break;

      case 'path':
        PathData.calculateBounds(data, bounds);
        break;

      default:
        break;
    }
  }

  GraphicsData.calculateBounds = calculateBounds;
})(GraphicsData || (GraphicsData = {}));

/***/ }),

/***/ "../shape/dist/data/path.js":
/*!**********************************!*\
  !*** ../shape/dist/data/path.js ***!
  \**********************************/
/*! namespace exports */
/*! export PathCommand [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PathCommand": () => /* binding */ PathCommand
/* harmony export */ });
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");

var PathCommand;

(function (PathCommand) {
  function calculateBounds(path, bounds) {
    var _moveTo$x, _moveTo$y, _curveTo$cx, _curveTo$cy, _curveTo$x, _curveTo$y, _cubicCurveTo$cx, _cubicCurveTo$cy, _cubicCurveTo$sx, _cubicCurveTo$sy, _cubicCurveTo$x, _cubicCurveTo$y;

    var type = path.type;

    switch (type) {
      case 'moveTo':
      case 'lineTo':
        var moveTo = path;
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_moveTo$x = moveTo.x) !== null && _moveTo$x !== void 0 ? _moveTo$x : 0, (_moveTo$y = moveTo.y) !== null && _moveTo$y !== void 0 ? _moveTo$y : 0);
        break;

      case 'curveTo':
        var curveTo = path;
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_curveTo$cx = curveTo.cx) !== null && _curveTo$cx !== void 0 ? _curveTo$cx : 0, (_curveTo$cy = curveTo.cy) !== null && _curveTo$cy !== void 0 ? _curveTo$cy : 0);
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_curveTo$x = curveTo.x) !== null && _curveTo$x !== void 0 ? _curveTo$x : 0, (_curveTo$y = curveTo.y) !== null && _curveTo$y !== void 0 ? _curveTo$y : 0);
        break;

      case 'cubicCurveTo':
        var cubicCurveTo = path;
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_cubicCurveTo$cx = cubicCurveTo.cx) !== null && _cubicCurveTo$cx !== void 0 ? _cubicCurveTo$cx : 0, (_cubicCurveTo$cy = cubicCurveTo.cy) !== null && _cubicCurveTo$cy !== void 0 ? _cubicCurveTo$cy : 0);
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_cubicCurveTo$sx = cubicCurveTo.sx) !== null && _cubicCurveTo$sx !== void 0 ? _cubicCurveTo$sx : 0, (_cubicCurveTo$sy = cubicCurveTo.sy) !== null && _cubicCurveTo$sy !== void 0 ? _cubicCurveTo$sy : 0);
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_cubicCurveTo$x = cubicCurveTo.x) !== null && _cubicCurveTo$x !== void 0 ? _cubicCurveTo$x : 0, (_cubicCurveTo$y = cubicCurveTo.y) !== null && _cubicCurveTo$y !== void 0 ? _cubicCurveTo$y : 0);
        break;

      default:
        break;
    }
  }

  PathCommand.calculateBounds = calculateBounds;
})(PathCommand || (PathCommand = {}));

/***/ }),

/***/ "../shape/dist/data/string.js":
/*!************************************!*\
  !*** ../shape/dist/data/string.js ***!
  \************************************/
/*! namespace exports */
/*! export GraphicsString [provided] [used in main] [could be renamed] */
/*! export GraphicsStringReader [provided] [unused] [could be renamed] */
/*! export GraphicsStringStream [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphicsString": () => /* binding */ GraphicsString
/* harmony export */ });
/* unused harmony exports GraphicsStringStream, GraphicsStringReader */
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path */ "../shape/dist/data/path.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var TEST_COMMAND = /[MmLlHhVvCcSsQqTtAaZz]/;
var TEST_SPACE = /[\s,]/;
var TEST_NUMBER = /[-+.\d]/;
var GraphicsStringStream = /*#__PURE__*/function () {
  function GraphicsStringStream() {
    _classCallCheck(this, GraphicsStringStream);

    this.path = '';
    this.position = 0;
    this.command = null;
    this.buffer = [];
    this.size = 0;
  }

  _createClass(GraphicsStringStream, [{
    key: "setPath",
    value: function setPath(path) {
      this.path = path;
      this.position = 0;
    }
  }, {
    key: "hasData",
    value: function hasData() {
      return this.position < this.path.length;
    }
  }, {
    key: "getCommand",
    value: function getCommand() {
      return this.command;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this.size;
    }
  }, {
    key: "getBuffer",
    value: function getBuffer() {
      return this.buffer;
    }
  }, {
    key: "readNext",
    value: function readNext() {
      this.readCommand();
      this.readNumbers();
    }
  }, {
    key: "readCommand",
    value: function readCommand() {
      this.command = null;

      while (this.position < this.path.length) {
        var command = this.path[this.position];

        if (TEST_COMMAND.test(command)) {
          this.command = command;
        }

        this.position++;
      }
    }
  }, {
    key: "readNumbers",
    value: function readNumbers() {
      this.size = 0;
      var number = '';

      while (this.position < this.path.length) {
        var _char = this.path[this.position];

        if (TEST_NUMBER.test(_char)) {
          number += _char;
        } else if (TEST_SPACE.test(_char)) {
          this.buffer[this.size++] = parseFloat(number);
          number = '';
        } else if (TEST_COMMAND.test(_char)) {
          break;
        }

        this.position++;
      }

      if (number) {
        this.buffer[this.size++] = parseFloat(number);
      }
    }
  }]);

  return GraphicsStringStream;
}();
var GraphicsStringReader = /*#__PURE__*/function () {
  function GraphicsStringReader() {
    _classCallCheck(this, GraphicsStringReader);

    this.stream = new GraphicsStringStream();
    this.command = {
      type: 'moveTo'
    };
    this.commandExists = false;
    this.lastX = 0;
    this.lastY = 0;
  }

  _createClass(GraphicsStringReader, [{
    key: "setPath",
    value: function setPath(path) {
      this.stream.setPath(path);
      this.lastX = 0;
      this.lastY = 0;
      this.commandExists = false;
    }
  }, {
    key: "hasData",
    value: function hasData() {
      return this.stream.hasData();
    }
  }, {
    key: "getCommand",
    value: function getCommand() {
      return this.commandExists ? this.command : null;
    }
  }, {
    key: "readNext",
    value: function readNext() {
      this.stream.readNext();
      this.parse();
    }
  }, {
    key: "parse",
    value: function parse() {
      var command = this.stream.getCommand();
      this.commandExists = !!command;

      if (!this.commandExists) {
        return;
      }

      var buffer = this.stream.getBuffer();

      var _buffer = _slicedToArray(buffer, 6),
          x0 = _buffer[0],
          y0 = _buffer[1],
          x1 = _buffer[2],
          y1 = _buffer[3],
          x2 = _buffer[4],
          y2 = _buffer[5];

      var cx = 0;
      var cy = 0;

      switch (command) {
        case 'M':
          {
            this.command.type = 'moveTo';
            var moveTo = this.command;
            moveTo.x = x0;
            moveTo.y = y0;
            this.lastX = moveTo.x;
            this.lastY = moveTo.y;
          }
          break;

        case 'm':
          {
            this.command.type = 'moveTo';
            var _moveTo = this.command;
            _moveTo.x = x0 + this.lastX;
            _moveTo.y = y0 + this.lastY;
            this.lastX = _moveTo.x;
            this.lastY = _moveTo.y;
          }
          break;

        case 'L':
          {
            this.command.type = 'lineTo';
            var lineTo = this.command;
            lineTo.x = x0;
            lineTo.y = y0;
            this.lastX = lineTo.x;
            this.lastY = lineTo.y;
          }
          break;

        case 'l':
          {
            this.command.type = 'lineTo';
            var _lineTo = this.command;
            _lineTo.x = x0 + this.lastX;
            _lineTo.y = y0 + this.lastY;
            this.lastX = _lineTo.x;
            this.lastY = _lineTo.y;
          }
          break;

        case 'H':
          {
            this.command.type = 'lineTo';
            var _lineTo2 = this.command;
            _lineTo2.x = x0;
            _lineTo2.y = this.lastY;
            this.lastX = _lineTo2.x;
          }
          break;

        case 'h':
          {
            this.command.type = 'lineTo';
            var _lineTo3 = this.command;
            _lineTo3.x = x0 + this.lastX;
            _lineTo3.y = this.lastY;
            this.lastX = _lineTo3.x;
          }
          break;

        case 'V':
          {
            this.command.type = 'lineTo';
            var _lineTo4 = this.command;
            _lineTo4.x = this.lastX;
            _lineTo4.y = x0;
            this.lastY = _lineTo4.y;
          }
          break;

        case 'v':
          {
            this.command.type = 'lineTo';
            var _lineTo5 = this.command;
            _lineTo5.x = this.lastX;
            _lineTo5.y = x0 + this.lastY;
            this.lastY = _lineTo5.y;
          }
          break;

        case 'C':
          {
            this.command.type = 'cubicCurveTo';
            var cubicCurveTo = this.command;
            cubicCurveTo.cx = x0;
            cubicCurveTo.cy = y0;
            cubicCurveTo.sx = x1;
            cubicCurveTo.sy = y1;
            cubicCurveTo.x = x2;
            cubicCurveTo.y = y2;
            cx = cubicCurveTo.x - (cubicCurveTo.sx - cubicCurveTo.x);
            cy = cubicCurveTo.y - (cubicCurveTo.sy - cubicCurveTo.y);
            this.lastX = cubicCurveTo.x;
            this.lastY = cubicCurveTo.y;
          }
          break;

        case 'c':
          {
            this.command.type = 'cubicCurveTo';
            var _cubicCurveTo = this.command;
            _cubicCurveTo.cx = x0 + this.lastX;
            _cubicCurveTo.cy = y0 + this.lastY;
            _cubicCurveTo.sx = x1 + this.lastX;
            _cubicCurveTo.sy = y1 + this.lastY;
            _cubicCurveTo.x = x2 + this.lastX;
            _cubicCurveTo.y = y2 + this.lastY;
            cx = _cubicCurveTo.x - (_cubicCurveTo.sx - _cubicCurveTo.x);
            cy = _cubicCurveTo.y - (_cubicCurveTo.sy - _cubicCurveTo.y);
            this.lastX = _cubicCurveTo.x;
            this.lastY = _cubicCurveTo.y;
          }
          break;

        case 'S':
          {
            this.command.type = 'cubicCurveTo';
            var _cubicCurveTo2 = this.command;
            _cubicCurveTo2.cx = cx;
            _cubicCurveTo2.cy = cy;
            _cubicCurveTo2.sx = x0;
            _cubicCurveTo2.sy = y0;
            _cubicCurveTo2.x = x1;
            _cubicCurveTo2.y = y1;
            cx = _cubicCurveTo2.x - (_cubicCurveTo2.sx - _cubicCurveTo2.x);
            cy = _cubicCurveTo2.y - (_cubicCurveTo2.sy - _cubicCurveTo2.y);
            this.lastX = _cubicCurveTo2.x;
            this.lastY = _cubicCurveTo2.y;
          }
          break;

        case 's':
          {
            this.command.type = 'cubicCurveTo';
            var _cubicCurveTo3 = this.command;
            _cubicCurveTo3.cx = cx;
            _cubicCurveTo3.cy = cy;
            _cubicCurveTo3.sx = x0 + this.lastX;
            _cubicCurveTo3.sy = y0 + this.lastY;
            _cubicCurveTo3.x = x1 + this.lastX;
            _cubicCurveTo3.y = y1 + this.lastY;
            cx = _cubicCurveTo3.x - (_cubicCurveTo3.sx - _cubicCurveTo3.x);
            cy = _cubicCurveTo3.y - (_cubicCurveTo3.sy - _cubicCurveTo3.y);
            this.lastX = _cubicCurveTo3.x;
            this.lastY = _cubicCurveTo3.y;
          }
          break;

        case 'Q':
          {
            this.command.type = 'curveTo';
            var curveTo = this.command;
            curveTo.cx = x0;
            curveTo.cy = y0;
            curveTo.x = x1;
            curveTo.y = y1;
            cx = curveTo.x - (curveTo.cx - curveTo.x);
            cy = curveTo.y - (curveTo.cy - curveTo.y);
            this.lastX = curveTo.x;
            this.lastY = curveTo.y;
          }
          break;

        case 'q':
          {
            this.command.type = 'curveTo';
            var _curveTo = this.command;
            _curveTo.cx = x0 + this.lastX;
            _curveTo.cy = y0 + this.lastY;
            _curveTo.x = x1 + this.lastX;
            _curveTo.y = y1 + this.lastY;
            cx = _curveTo.x - (_curveTo.cx - _curveTo.x);
            cy = _curveTo.y - (_curveTo.cy - _curveTo.y);
            this.lastX = _curveTo.x;
            this.lastY = _curveTo.y;
          }
          break;

        case 'T':
          {
            this.command.type = 'curveTo';
            var _curveTo2 = this.command;
            _curveTo2.cx = cx;
            _curveTo2.cy = cy;
            _curveTo2.x = x0;
            _curveTo2.y = y0;
            cx = _curveTo2.x - (_curveTo2.cx - _curveTo2.x);
            cy = _curveTo2.y - (_curveTo2.cy - _curveTo2.y);
            this.lastX = _curveTo2.x;
            this.lastY = _curveTo2.y;
          }
          break;

        case 't':
          {
            this.command.type = 'curveTo';
            var _curveTo3 = this.command;
            _curveTo3.cx = cx;
            _curveTo3.cy = cy;
            _curveTo3.x = x0 + this.lastX;
            _curveTo3.y = y0 + this.lastY;
            cx = _curveTo3.x - (_curveTo3.cx - _curveTo3.x);
            cy = _curveTo3.y - (_curveTo3.cy - _curveTo3.y);
            this.lastX = _curveTo3.x;
            this.lastY = _curveTo3.y;
          }
          break;

        default:
          break;
      }
    }
  }]);

  return GraphicsStringReader;
}();
var reader = new GraphicsStringReader();
var GraphicsString;

(function (GraphicsString) {
  function calculateBounds(path, bounds) {
    reader.setPath(path);

    while (reader.hasData()) {
      reader.readNext();
      var command = reader.getCommand();

      if (command) {
        _path__WEBPACK_IMPORTED_MODULE_0__.PathCommand.calculateBounds(command, bounds);
      }
    }
  }

  GraphicsString.calculateBounds = calculateBounds;
})(GraphicsString || (GraphicsString = {}));

/***/ }),

/***/ "../shape/dist/data/style.js":
/*!***********************************!*\
  !*** ../shape/dist/data/style.js ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),

/***/ "../shape/dist/graphics.js":
/*!*********************************!*\
  !*** ../shape/dist/graphics.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Graphics
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Graphics = /*#__PURE__*/function () {
  function Graphics(shape) {
    _classCallCheck(this, Graphics);

    this.shape = shape;
  }

  _createClass(Graphics, [{
    key: "beginFill",
    value: function beginFill() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      this.fill = {
        type: 'solid',
        color: color,
        alpha: alpha
      };
    }
  }, {
    key: "beginBitmapFill",
    value: function beginBitmapFill(src, matrix) {
      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var smooth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      this.fill = {
        type: 'bitmap',
        src: src,
        matrix: matrix,
        repeat: repeat,
        smooth: smooth
      };
    }
  }, {
    key: "beginGradientFill",
    value: function beginGradientFill(type, color, alpha, ratio, matrix) {
      var spread = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'repeat';
      var interpolation = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'rgb';
      var focalPointRatio = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      this.fill = {
        type: type,
        color: color,
        alpha: alpha,
        ratio: ratio,
        matrix: matrix,
        spread: spread,
        interpolation: interpolation,
        focalPointRatio: focalPointRatio
      };
    }
  }, {
    key: "lineStyle",
    value: function lineStyle() {
      var thickness = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var alpha = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var pixelHinting = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var scaleMode = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'none';
      var caps = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'round';
      var joints = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'round';
      var miterLimit = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 3;
      this.stroke = {
        thickness: thickness,
        pixelHinting: pixelHinting,
        scaleMode: scaleMode,
        caps: caps,
        joints: joints,
        miterLimit: miterLimit,
        fill: {
          type: 'solid',
          color: color,
          alpha: alpha
        }
      };
    }
  }, {
    key: "lineGradientStyle",
    value: function lineGradientStyle(type, color, alpha, ratio, matrix) {
      var spread = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'repeat';
      var interpolation = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'rgb';
      var focalPointRatio = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;

      if (!this.stroke) {
        return;
      }

      this.stroke.fill = {
        type: type,
        color: color,
        alpha: alpha,
        ratio: ratio,
        matrix: matrix,
        spread: spread,
        interpolation: interpolation,
        focalPointRatio: focalPointRatio
      };
    }
  }, {
    key: "lineBitmapStyle",
    value: function lineBitmapStyle(src, matrix) {
      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var smooth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (!this.stroke) {
        return;
      }

      this.stroke.fill = {
        type: 'bitmap',
        src: src,
        matrix: matrix,
        repeat: repeat,
        smooth: smooth
      };
    }
  }, {
    key: "moveTo",
    value: function moveTo(x, y) {
      var path = this.beginPath();
      path.push({
        type: 'moveTo',
        x: x,
        y: y
      });
    }
  }, {
    key: "lineTo",
    value: function lineTo(x, y) {
      var path = this.getPath();

      if (!path) {
        return;
      }

      path.push({
        type: 'lineTo',
        x: x,
        y: y
      });
    }
  }, {
    key: "curveTo",
    value: function curveTo(cx, cy, x, y) {
      var path = this.getPath();

      if (!path) {
        return;
      }

      path.push({
        type: 'curveTo',
        cx: cx,
        cy: cy,
        x: x,
        y: y
      });
    }
  }, {
    key: "cubicCurveTo",
    value: function cubicCurveTo(cx, cy, sx, sy, x, y) {
      var path = this.getPath();

      if (!path) {
        return;
      }

      path.push({
        type: 'curveTo',
        cx: cx,
        cy: cy,
        sx: sx,
        sy: sy,
        x: x,
        y: y
      });
    }
  }, {
    key: "drawRoundRect",
    value: function drawRoundRect(x, y, width, height) {
      var ellipseWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var ellipseHeight = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var path = this.beginPath();
      var w = ellipseWidth;
      var h = ellipseHeight;
      var k = 0.5522848;
      var ox = w / 2 * k;
      var oy = h / 2 * k;
      var xe = x + w;
      var ye = y + h;
      var xm = x + w / 2;
      var ym = y + h / 2;
      var dx = width - w;
      var dy = height - h;
      path.push({
        type: 'moveTo',
        x: x,
        y: ym
      });
      path.push({
        type: 'cubicCurveTo',
        cx: x,
        cy: ym - oy,
        sx: xm - ox,
        sy: y,
        x: xm,
        y: y
      });
      path.push({
        type: 'lineTo',
        x: xm + dx,
        y: y
      });
      path.push({
        type: 'cubicCurveTo',
        cx: xm + ox + dx,
        cy: y,
        sx: xe + dx,
        sy: ym - oy,
        x: xe + dx,
        y: ym
      });
      path.push({
        type: 'lineTo',
        x: xe + dx,
        y: ym + dy
      });
      path.push({
        type: 'cubicCurveTo',
        cx: xe + dx,
        cy: ym + oy + dy,
        sx: xm + ox + dx,
        sy: ye + dy,
        x: xm + dx,
        y: ye + dy
      });
      path.push({
        type: 'lineTo',
        x: xm,
        y: ye + dy
      });
      path.push({
        type: 'cubicCurveTo',
        cx: xm - ox,
        cy: ye + dy,
        sx: x,
        sy: ym + oy + dy,
        x: x,
        y: ym + dy
      });
    }
  }, {
    key: "drawRect",
    value: function drawRect(x, y, width, height) {
      var data = this.createData();
      data.type = 'rectangle';
      data.x = x;
      data.y = y;
      data.width = width;
      data.height = height;
    }
  }, {
    key: "drawCircle",
    value: function drawCircle(x, y, radius) {
      var data = this.createData();
      data.type = 'ellipse';
      data.x = x;
      data.y = y;
      data.radius = radius;
    }
  }, {
    key: "drawEllipse",
    value: function drawEllipse(x, y, width, height) {
      var data = this.createData();
      data.type = 'ellipse';
      data.radiusX = width / 2;
      data.radiusY = height / 2;
      data.x = x - data.radiusX;
      data.y = y - data.radiusY;
    }
  }, {
    key: "clear",
    value: function clear() {
      delete this.shape.data;
    }
  }, {
    key: "createData",
    value: function createData() {
      var shape = this.shape,
          fill = this.fill,
          stroke = this.stroke;

      if (Array.isArray(shape.data)) {} else if (_typeof(shape.data) === 'object') {
        shape.data = [shape.data];
      } else {
        shape.data = [];
      }

      var graphicsData = {
        type: 'path',
        fill: fill,
        stroke: stroke
      };
      shape.data.push(graphicsData);
      return graphicsData;
    }
  }, {
    key: "beginPath",
    value: function beginPath() {
      var data = this.createData();
      data.data = [];
      return data.data;
    }
  }, {
    key: "getPath",
    value: function getPath() {
      var shape = this.shape;

      if (!Array.isArray(shape.data) || !shape.data.length) {
        return undefined;
      }

      var data = shape.data[shape.data.length - 1];

      if (!Array.isArray(data.data)) {
        return undefined;
      }

      return data.data;
    }
  }]);

  return Graphics;
}();



/***/ }),

/***/ "../shape/dist/index.js":
/*!******************************!*\
  !*** ../shape/dist/index.js ***!
  \******************************/
/*! namespace exports */
/*! export EllipseData [provided] [unused] [could be renamed] -> ../shape/dist/data/data.js .EllipseData */
/*! export GraphicsData [provided] [unused] [could be renamed] -> ../shape/dist/data/data.js .GraphicsData */
/*! export GraphicsString [provided] [unused] [could be renamed] -> ../shape/dist/data/string.js .GraphicsString */
/*! export GraphicsStringReader [provided] [unused] [could be renamed] -> ../shape/dist/data/string.js .GraphicsStringReader */
/*! export GraphicsStringStream [provided] [unused] [could be renamed] -> ../shape/dist/data/string.js .GraphicsStringStream */
/*! export PathCommand [provided] [unused] [could be renamed] -> ../shape/dist/data/path.js .PathCommand */
/*! export PathData [provided] [unused] [could be renamed] -> ../shape/dist/data/data.js .PathData */
/*! export RectangleData [provided] [unused] [could be renamed] -> ../shape/dist/data/data.js .RectangleData */
/*! export SHAPE [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Shape [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export applyCanvasShapeExtension [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] */
/*! export applyShapeExtension [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export default [not provided] [unused] [could be renamed] */
/*! export hitTest [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export renderShape [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! other exports [maybe provided (runtime-defined)] [unused] -> ../shape/dist/data/style.js */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.o, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyCanvasShapeExtension": () => /* reexport safe */ _shape_canvas__WEBPACK_IMPORTED_MODULE_6__.applyCanvasShapeExtension
/* harmony export */ });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/data */ "../shape/dist/data/data.js");
/* harmony import */ var _data_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/path */ "../shape/dist/data/path.js");
/* harmony import */ var _data_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/string */ "../shape/dist/data/string.js");
/* harmony import */ var _data_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/style */ "../shape/dist/data/style.js");
/* harmony import */ var _data_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_data_style__WEBPACK_IMPORTED_MODULE_3__, "applyCanvasShapeExtension")) __webpack_require__.d(__webpack_exports__, { "applyCanvasShapeExtension": function() { return _data_style__WEBPACK_IMPORTED_MODULE_3__.applyCanvasShapeExtension; } });
/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphics */ "../shape/dist/graphics.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shape */ "../shape/dist/shape.js");
/* harmony import */ var _shape_canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shape-canvas */ "../shape/dist/shape-canvas.js");








/***/ }),

/***/ "../shape/dist/shape-canvas.js":
/*!*************************************!*\
  !*** ../shape/dist/shape-canvas.js ***!
  \*************************************/
/*! namespace exports */
/*! export applyCanvasShapeExtension [provided] [used in main] [could be renamed] */
/*! export renderShape [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyCanvasShapeExtension": () => /* binding */ applyCanvasShapeExtension
/* harmony export */ });
/* unused harmony export renderShape */
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "../shape/dist/shape.js");

function renderShape(shape, context) {}
function applyCanvasShapeExtension(support) {
  (0,_shape__WEBPACK_IMPORTED_MODULE_0__.applyShapeExtension)(support);
  support.renderHandlers.set(_shape__WEBPACK_IMPORTED_MODULE_0__.SHAPE, renderShape);
}

/***/ }),

/***/ "../shape/dist/shape.js":
/*!******************************!*\
  !*** ../shape/dist/shape.js ***!
  \******************************/
/*! namespace exports */
/*! export SHAPE [provided] [used in main] [could be renamed] */
/*! export Shape [provided] [unused] [could be renamed] */
/*! export applyShapeExtension [provided] [used in main] [could be renamed] */
/*! export hitTest [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SHAPE": () => /* binding */ SHAPE,
/* harmony export */   "applyShapeExtension": () => /* binding */ applyShapeExtension
/* harmony export */ });
/* unused harmony exports Shape, hitTest */
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _e2d_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @e2d/resources */ "../resources/dist/index.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/data */ "../shape/dist/data/data.js");
/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphics */ "../shape/dist/graphics.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






var SHAPE = 'shape';
var Shape;

(function (Shape) {
  function getGraphics(shape) {
    return new _graphics__WEBPACK_IMPORTED_MODULE_4__.default(shape);
  }

  Shape.getGraphics = getGraphics;

  function getBounds(shape) {
    var data = shape.data;

    if (!data) {
      return undefined;
    }

    var bounds = _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Bounds.empty();

    if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        _data_data__WEBPACK_IMPORTED_MODULE_3__.GraphicsData.calculateBounds(data[i], bounds);
      }
    } else if (_typeof(data) === 'object') {
      _data_data__WEBPACK_IMPORTED_MODULE_3__.GraphicsData.calculateBounds(data, bounds);
    } else {
      return undefined;
    }

    if (_e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Bounds.isEmpty(bounds)) {
      return undefined;
    }

    var width = bounds.maxX - bounds.minX;
    var height = bounds.maxY - bounds.minY;
    var x = bounds.minX + _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(shape, width);
    var y = bounds.minY + _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(shape, height);
    return {
      x: x,
      y: y,
      width: width,
      height: height
    };
  }

  Shape.getBounds = getBounds;
})(Shape || (Shape = {}));

function hitTest(shape, context) {
  var local = context.local;
  var bounds = Shape.getBounds(shape);
  return !!bounds && _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.contains(bounds, local);
}
function applyShapeExtension(support) {
  support.hitTestHandlers.set(SHAPE, hitTest);
  support.resources.resolvers.add(_e2d_resources__WEBPACK_IMPORTED_MODULE_2__.resolveImage);
}

/***/ }),

/***/ "../text/dist/font.js":
/*!****************************!*\
  !*** ../text/dist/font.js ***!
  \****************************/
/*! namespace exports */
/*! export EM [provided] [unused] [could be renamed] */
/*! export getAdvance [provided] [used in main] [could be renamed] */
/*! export getCharWidth [provided] [unused] [could be renamed] */
/*! export getFont [provided] [used in main] [could be renamed] */
/*! export getKerning [provided] [unused] [could be renamed] */
/*! export getLineWidth [provided] [used in main] [could be renamed] */
/*! export getStyleFont [provided] [used in main] [could be renamed] */
/*! export getTextHeight [provided] [used in main] [could be renamed] */
/*! export getTextWidth [provided] [used in main] [could be renamed] */
/*! export measureText [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStyleFont": () => /* binding */ getStyleFont,
/* harmony export */   "getAdvance": () => /* binding */ getAdvance,
/* harmony export */   "getFont": () => /* binding */ getFont,
/* harmony export */   "getLineWidth": () => /* binding */ getLineWidth,
/* harmony export */   "getTextWidth": () => /* binding */ getTextWidth,
/* harmony export */   "getTextHeight": () => /* binding */ getTextHeight
/* harmony export */ });
/* unused harmony exports EM, measureText, getCharWidth, getKerning */
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
var EM = 1024;
var fonts = new Map();
function getStyleFont(font, size) {
  return "".concat(size, "px ").concat(font);
}
function measureText(font, size, text) {
  context.font = getStyleFont(font, size);
  return context.measureText(text).width;
}
function getCharWidth(font, _char) {
  var width = font.widths.get(_char);

  if (!width) {
    width = measureText(font.name, EM, _char);
    font.widths.set(_char, width);
  }

  return width;
}
function getKerning(font, first, second) {
  var pair = first + second;
  var kerning = font.kernings.get(pair);

  if (!kerning) {
    var widthSecond = getCharWidth(font, second);
    var widthTotal = measureText(font.name, EM, first + second);
    kerning = widthTotal - widthSecond;
    font.kernings.set(pair, kerning);
  }

  return kerning;
}
function getAdvance(font, size, first, second) {
  var scale = size / EM;
  var width = getCharWidth(font, first);

  if (!second) {
    return width * scale;
  }

  var kerning = getKerning(font, first, second);
  return kerning * scale;
}
function getFont(name) {
  var font = fonts.get(name);

  if (!font) {
    font = {
      name: name,
      widths: new Map(),
      kernings: new Map()
    };
    fonts.set(name, font);
  }

  return font;
}
function getLineWidth(font, format, line) {
  var width = 0;

  for (var i = 0; i < line.length; i++) {
    var first = line.charAt(i);
    var second = line.charAt(i + 1);
    var advance = getAdvance(font, format.size, first, second);
    width += advance;
  }

  if (format.letterSpacing && line.length > 1) {
    width += format.letterSpacing * (line.length - 1);
  }

  return width;
}
function getTextWidth(font, format, lines) {
  var width = 0;

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var lineWidth = getLineWidth(font, format, line);

    if (width < lineWidth) {
      width = lineWidth;
    }
  }

  return width;
}
function getTextHeight(format, lines) {
  var height = format.size * lines.length;

  if (format.leading && lines.length > 1) {
    height += format.leading * (lines.length - 1);
  }

  return height;
}

/***/ }),

/***/ "../text/dist/format.js":
/*!******************************!*\
  !*** ../text/dist/format.js ***!
  \******************************/
/*! namespace exports */
/*! export defaultTextFormat [provided] [unused] [could be renamed] */
/*! export getAlingValue [provided] [used in main] [could be renamed] */
/*! export getValidTextFormat [provided] [used in main] [could be renamed] */
/*! export getVerticalAlingValue [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getValidTextFormat": () => /* binding */ getValidTextFormat,
/* harmony export */   "getAlingValue": () => /* binding */ getAlingValue,
/* harmony export */   "getVerticalAlingValue": () => /* binding */ getVerticalAlingValue
/* harmony export */ });
/* unused harmony export defaultTextFormat */
var defaultTextFormat = {
  font: 'arial',
  size: 15,
  color: 0,
  alpha: 1,
  bold: false,
  italic: false,
  underline: false,
  letterSpacing: 0,
  leading: 0,
  align: 'left',
  verticalAlign: 'top'
};
var format = {};
function getValidTextFormat(textFormat) {
  var _textFormat$font, _textFormat$size, _textFormat$color, _textFormat$alpha, _textFormat$bold, _textFormat$italic, _textFormat$underline, _textFormat$letterSpa, _textFormat$leading, _textFormat$align, _textFormat$verticalA;

  format.font = (_textFormat$font = textFormat === null || textFormat === void 0 ? void 0 : textFormat.font) !== null && _textFormat$font !== void 0 ? _textFormat$font : defaultTextFormat.font;
  format.size = (_textFormat$size = textFormat === null || textFormat === void 0 ? void 0 : textFormat.size) !== null && _textFormat$size !== void 0 ? _textFormat$size : defaultTextFormat.size;
  format.color = (_textFormat$color = textFormat === null || textFormat === void 0 ? void 0 : textFormat.color) !== null && _textFormat$color !== void 0 ? _textFormat$color : defaultTextFormat.color;
  format.alpha = (_textFormat$alpha = textFormat === null || textFormat === void 0 ? void 0 : textFormat.alpha) !== null && _textFormat$alpha !== void 0 ? _textFormat$alpha : defaultTextFormat.alpha;
  format.bold = (_textFormat$bold = textFormat === null || textFormat === void 0 ? void 0 : textFormat.bold) !== null && _textFormat$bold !== void 0 ? _textFormat$bold : defaultTextFormat.bold;
  format.italic = (_textFormat$italic = textFormat === null || textFormat === void 0 ? void 0 : textFormat.italic) !== null && _textFormat$italic !== void 0 ? _textFormat$italic : defaultTextFormat.italic;
  format.underline = (_textFormat$underline = textFormat === null || textFormat === void 0 ? void 0 : textFormat.underline) !== null && _textFormat$underline !== void 0 ? _textFormat$underline : defaultTextFormat.underline;
  format.letterSpacing = (_textFormat$letterSpa = textFormat === null || textFormat === void 0 ? void 0 : textFormat.letterSpacing) !== null && _textFormat$letterSpa !== void 0 ? _textFormat$letterSpa : defaultTextFormat.letterSpacing;
  format.leading = (_textFormat$leading = textFormat === null || textFormat === void 0 ? void 0 : textFormat.leading) !== null && _textFormat$leading !== void 0 ? _textFormat$leading : defaultTextFormat.leading;
  format.align = (_textFormat$align = textFormat === null || textFormat === void 0 ? void 0 : textFormat.align) !== null && _textFormat$align !== void 0 ? _textFormat$align : defaultTextFormat.align;
  format.verticalAlign = (_textFormat$verticalA = textFormat === null || textFormat === void 0 ? void 0 : textFormat.verticalAlign) !== null && _textFormat$verticalA !== void 0 ? _textFormat$verticalA : defaultTextFormat.verticalAlign;
  return format;
}
function getAlingValue(align) {
  switch (align) {
    case 'left':
      return 0;

    case 'center':
      return 0.5;

    case 'right':
      return 1;

    default:
      return 0;
  }
}
function getVerticalAlingValue(align) {
  switch (align) {
    case 'top':
      return 0;

    case 'middle':
      return 0.5;

    case 'bottom':
      return 1;

    default:
      return 0;
  }
}

/***/ }),

/***/ "../text/dist/index.js":
/*!*****************************!*\
  !*** ../text/dist/index.js ***!
  \*****************************/
/*! namespace exports */
/*! export EM [provided] [unused] [could be renamed] -> ../text/dist/font.js .EM */
/*! export TEXT [provided] [unused] [could be renamed] -> ../text/dist/text.js .TEXT */
/*! export Text [provided] [unused] [could be renamed] -> ../text/dist/text.js .Text */
/*! export applyCanvasTextExtension [provided] [used in main] [could be renamed] -> ../text/dist/text-canvas.js .applyCanvasTextExtension */
/*! export applyTextExtension [provided] [unused] [could be renamed] -> ../text/dist/text.js .applyTextExtension */
/*! export defaultTextFormat [provided] [unused] [could be renamed] -> ../text/dist/format.js .defaultTextFormat */
/*! export getAdvance [provided] [unused] [could be renamed] -> ../text/dist/font.js .getAdvance */
/*! export getAlingValue [provided] [unused] [could be renamed] -> ../text/dist/format.js .getAlingValue */
/*! export getCharWidth [provided] [unused] [could be renamed] -> ../text/dist/font.js .getCharWidth */
/*! export getFont [provided] [unused] [could be renamed] -> ../text/dist/font.js .getFont */
/*! export getKerning [provided] [unused] [could be renamed] -> ../text/dist/font.js .getKerning */
/*! export getLineWidth [provided] [unused] [could be renamed] -> ../text/dist/font.js .getLineWidth */
/*! export getStyleFont [provided] [unused] [could be renamed] -> ../text/dist/font.js .getStyleFont */
/*! export getTextHeight [provided] [unused] [could be renamed] -> ../text/dist/font.js .getTextHeight */
/*! export getTextWidth [provided] [unused] [could be renamed] -> ../text/dist/font.js .getTextWidth */
/*! export getValidTextFormat [provided] [unused] [could be renamed] -> ../text/dist/format.js .getValidTextFormat */
/*! export getVerticalAlingValue [provided] [unused] [could be renamed] -> ../text/dist/format.js .getVerticalAlingValue */
/*! export hitTest [provided] [unused] [could be renamed] -> ../text/dist/text.js .hitTest */
/*! export measureText [provided] [unused] [could be renamed] -> ../text/dist/font.js .measureText */
/*! export renderCanvasText [provided] [unused] [could be renamed] -> ../text/dist/text-canvas.js .renderCanvasText */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyCanvasTextExtension": () => /* reexport safe */ _text_canvas__WEBPACK_IMPORTED_MODULE_3__.applyCanvasTextExtension
/* harmony export */ });
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ "../text/dist/text.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format */ "../text/dist/format.js");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./font */ "../text/dist/font.js");
/* harmony import */ var _text_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-canvas */ "../text/dist/text-canvas.js");





/***/ }),

/***/ "../text/dist/text-canvas.js":
/*!***********************************!*\
  !*** ../text/dist/text-canvas.js ***!
  \***********************************/
/*! namespace exports */
/*! export applyCanvasTextExtension [provided] [used in main] [could be renamed] */
/*! export renderCanvasText [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyCanvasTextExtension": () => /* binding */ applyCanvasTextExtension
/* harmony export */ });
/* unused harmony export renderCanvasText */
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");
/* harmony import */ var _e2d_canvas_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/canvas-support */ "../canvas-support/dist/index.js");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./font */ "../text/dist/font.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text */ "../text/dist/text.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./format */ "../text/dist/format.js");





function renderCanvasText(component, context) {
  var text = component.text;

  if (!text) {
    return;
  }

  var matrix = context.matrix,
      colorTransform = context.colorTransform;

  if (colorTransform.alphaMultiplier <= 0) {
    return;
  }

  var lines = text.split('\n');
  var width = component.width,
      height = component.height,
      textFormat = component.textFormat,
      border = component.border,
      background = component.background;
  var format = (0,_format__WEBPACK_IMPORTED_MODULE_4__.getValidTextFormat)(textFormat);
  var formatSize = format.size;
  var formatLetterSpacing = format.letterSpacing;
  var formatLeading = format.leading;
  var font = (0,_font__WEBPACK_IMPORTED_MODULE_2__.getFont)(format.font);
  var support = context.support;
  var context2d = support.context2d;
  var textWidth = (0,_font__WEBPACK_IMPORTED_MODULE_2__.getTextWidth)(font, format, lines);
  var textHeight = (0,_font__WEBPACK_IMPORTED_MODULE_2__.getTextHeight)(format, lines);
  var realWidth = width !== null && width !== void 0 ? width : textWidth;
  var realHeight = height !== null && height !== void 0 ? height : textHeight;
  var offsetX = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(component, realWidth);
  var offsetY = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(component, realHeight);
  var y = 0;

  if (height) {
    var alignVerticalValue = (0,_format__WEBPACK_IMPORTED_MODULE_4__.getVerticalAlingValue)(format.verticalAlign);
    y = (height - textHeight) * alignVerticalValue;

    if (y < 0) {
      y = 0;
    }
  }

  context2d.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
  context2d.globalAlpha = 1;

  if (background !== undefined) {
    context2d.strokeStyle = '';
    context2d.fillStyle = (0,_e2d_canvas_support__WEBPACK_IMPORTED_MODULE_1__.createColorPattern)(background, 1, colorTransform);
    context2d.beginPath();
    context2d.rect(offsetX, offsetY, realWidth, realHeight);
    context2d.fill();
  }

  if (border !== undefined) {
    context2d.strokeStyle = (0,_e2d_canvas_support__WEBPACK_IMPORTED_MODULE_1__.createColorPattern)(border, 1, colorTransform);
    context2d.fillStyle = '';
    context2d.beginPath();
    context2d.rect(offsetX, offsetY, realWidth, realHeight);
    context2d.stroke();
  }

  context2d.font = (0,_font__WEBPACK_IMPORTED_MODULE_2__.getStyleFont)(format.font, formatSize);
  context2d.textBaseline = 'alphabetic';
  context2d.strokeStyle = '';
  context2d.fillStyle = (0,_e2d_canvas_support__WEBPACK_IMPORTED_MODULE_1__.createColorPattern)(format.color, format.alpha, colorTransform);
  y += offsetY;

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var lineWidth = (0,_font__WEBPACK_IMPORTED_MODULE_2__.getLineWidth)(font, format, line);
    var alignValue = (0,_format__WEBPACK_IMPORTED_MODULE_4__.getAlingValue)(format.align);
    var x = (realWidth - lineWidth) * alignValue;

    if (x < 0) {
      x = 0;
    }

    x += offsetX;

    for (var j = 0; j < line.length; j++) {
      var first = line.charAt(j);
      var second = line.charAt(j + 1);
      var advance = (0,_font__WEBPACK_IMPORTED_MODULE_2__.getAdvance)(font, formatSize, first, second);
      context2d.fillText(first, x, y + formatSize);
      x += advance + formatLetterSpacing;
    }

    y += formatSize + formatLeading;
  }
}
function applyCanvasTextExtension(support) {
  (0,_text__WEBPACK_IMPORTED_MODULE_3__.applyTextExtension)(support);
  support.renderHandlers.set(_text__WEBPACK_IMPORTED_MODULE_3__.TEXT, renderCanvasText);
}

/***/ }),

/***/ "../text/dist/text.js":
/*!****************************!*\
  !*** ../text/dist/text.js ***!
  \****************************/
/*! namespace exports */
/*! export TEXT [provided] [used in main] [could be renamed] */
/*! export Text [provided] [unused] [could be renamed] */
/*! export applyTextExtension [provided] [used in main] [could be renamed] */
/*! export hitTest [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TEXT": () => /* binding */ TEXT,
/* harmony export */   "applyTextExtension": () => /* binding */ applyTextExtension
/* harmony export */ });
/* unused harmony exports Text, hitTest */
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./format */ "../text/dist/format.js");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./font */ "../text/dist/font.js");




var TEXT = 'text';
var Text;

(function (Text) {
  function getBounds(component) {
    var text = component.text;

    if (!text) {
      return undefined;
    }

    var lines = text.split('\n');
    var width = component.width,
        height = component.height;
    var textFormat = component.textFormat;
    var format = (0,_format__WEBPACK_IMPORTED_MODULE_2__.getValidTextFormat)(textFormat);

    if (!width) {
      var font = (0,_font__WEBPACK_IMPORTED_MODULE_3__.getFont)(format.font);
      width = (0,_font__WEBPACK_IMPORTED_MODULE_3__.getTextWidth)(font, format, lines);
    }

    if (!height) {
      height = (0,_font__WEBPACK_IMPORTED_MODULE_3__.getTextHeight)(format, lines);
    }

    var x = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(component, width);
    var y = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(component, height);
    return {
      x: x,
      y: y,
      width: width,
      height: height
    };
  }

  Text.getBounds = getBounds;
})(Text || (Text = {}));

function hitTest(text, context) {
  var local = context.local;
  var bounds = Text.getBounds(text);
  return !!bounds && _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.contains(bounds, local);
}
function applyTextExtension(support) {
  support.hitTestHandlers.set(TEXT, hitTest);
}

/***/ }),

/***/ "../tween/dist/easing.js":
/*!*******************************!*\
  !*** ../tween/dist/easing.js ***!
  \*******************************/
/*! namespace exports */
/*! export BACK [provided] [unused] [could be renamed] */
/*! export BACK_IN [provided] [unused] [could be renamed] */
/*! export BACK_OUT [provided] [unused] [could be renamed] */
/*! export BOUNCE [provided] [unused] [could be renamed] */
/*! export BOUNCE_IN [provided] [unused] [could be renamed] */
/*! export BOUNCE_OUT [provided] [unused] [could be renamed] */
/*! export CIRCULAR [provided] [unused] [could be renamed] */
/*! export CIRCULAR_IN [provided] [unused] [could be renamed] */
/*! export CIRCULAR_OUT [provided] [unused] [could be renamed] */
/*! export CUBIC [provided] [unused] [could be renamed] */
/*! export CUBIC_IN [provided] [unused] [could be renamed] */
/*! export CUBIC_OUT [provided] [unused] [could be renamed] */
/*! export ELASTIC [provided] [unused] [could be renamed] */
/*! export ELASTIC_IN [provided] [unused] [could be renamed] */
/*! export ELASTIC_OUT [provided] [unused] [could be renamed] */
/*! export EXPONENTIAL [provided] [unused] [could be renamed] */
/*! export EXPONENTIAL_IN [provided] [unused] [could be renamed] */
/*! export EXPONENTIAL_OUT [provided] [unused] [could be renamed] */
/*! export LINEAR [provided] [used in main] [could be renamed] */
/*! export QUADRATIC [provided] [unused] [could be renamed] */
/*! export QUADRATIC_IN [provided] [unused] [could be renamed] */
/*! export QUADRATIC_OUT [provided] [unused] [could be renamed] */
/*! export QUARTIC [provided] [unused] [could be renamed] */
/*! export QUARTIC_IN [provided] [unused] [could be renamed] */
/*! export QUARTIC_OUT [provided] [unused] [could be renamed] */
/*! export QUINTIC [provided] [unused] [could be renamed] */
/*! export QUINTIC_IN [provided] [unused] [could be renamed] */
/*! export QUINTIC_OUT [provided] [unused] [could be renamed] */
/*! export SINUSOIDAL [provided] [unused] [could be renamed] */
/*! export SINUSOIDAL_IN [provided] [unused] [could be renamed] */
/*! export SINUSOIDAL_OUT [provided] [unused] [could be renamed] */
/*! export easing [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LINEAR": () => /* binding */ LINEAR,
/* harmony export */   "easing": () => /* binding */ easing
/* harmony export */ });
/* unused harmony exports QUADRATIC, QUADRATIC_IN, QUADRATIC_OUT, CUBIC, CUBIC_IN, CUBIC_OUT, QUARTIC, QUARTIC_IN, QUARTIC_OUT, QUINTIC, QUINTIC_IN, QUINTIC_OUT, SINUSOIDAL, SINUSOIDAL_IN, SINUSOIDAL_OUT, EXPONENTIAL, EXPONENTIAL_IN, EXPONENTIAL_OUT, CIRCULAR, CIRCULAR_IN, CIRCULAR_OUT, ELASTIC, ELASTIC_IN, ELASTIC_OUT, BACK, BACK_IN, BACK_OUT, BOUNCE, BOUNCE_IN, BOUNCE_OUT */
var _easing;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LINEAR = 'linear';
var QUADRATIC = 'quadratic';
var QUADRATIC_IN = 'quadraticin';
var QUADRATIC_OUT = 'quadraticout';
var CUBIC = 'cubic';
var CUBIC_IN = 'cubicin';
var CUBIC_OUT = 'cubicout';
var QUARTIC = 'quartic';
var QUARTIC_IN = 'quarticin';
var QUARTIC_OUT = 'quarticout';
var QUINTIC = 'quintic';
var QUINTIC_IN = 'quinticin';
var QUINTIC_OUT = 'quinticout';
var SINUSOIDAL = 'quintic';
var SINUSOIDAL_IN = 'quinticin';
var SINUSOIDAL_OUT = 'quinticout';
var EXPONENTIAL = 'exponential';
var EXPONENTIAL_IN = 'exponentialin';
var EXPONENTIAL_OUT = 'exponentialout';
var CIRCULAR = 'circular';
var CIRCULAR_IN = 'circularin';
var CIRCULAR_OUT = 'circularout';
var ELASTIC = 'elastic';
var ELASTIC_IN = 'elasticin';
var ELASTIC_OUT = 'elasticout';
var BACK = 'back';
var BACK_IN = 'backin';
var BACK_OUT = 'backout';
var BOUNCE = 'bounce';
var BOUNCE_IN = 'bouncein';
var BOUNCE_OUT = 'bounceout';
var easing = (_easing = {}, _defineProperty(_easing, LINEAR, function (value) {
  return value;
}), _defineProperty(_easing, QUADRATIC, function (value) {
  if ((value *= 2) < 1) {
    return 0.5 * value * value;
  }

  return -0.5 * (--value * (value - 2) - 1);
}), _defineProperty(_easing, QUADRATIC_IN, function (value) {
  return value * value;
}), _defineProperty(_easing, QUADRATIC_OUT, function (value) {
  return value * (2 - value);
}), _defineProperty(_easing, CUBIC, function (value) {
  if ((value *= 2) < 1) {
    return 0.5 * value * value * value;
  }

  return 0.5 * ((value -= 2) * value * value + 2);
}), _defineProperty(_easing, CUBIC_IN, function (value) {
  return value * value * value;
}), _defineProperty(_easing, CUBIC_OUT, function (value) {
  return --value * value * value + 1;
}), _defineProperty(_easing, QUARTIC, function (value) {
  if ((value *= 2) < 1) {
    return 0.5 * value * value * value * value;
  }

  return -0.5 * ((value -= 2) * value * value * value - 2);
}), _defineProperty(_easing, QUARTIC_IN, function (value) {
  return value * value * value * value;
}), _defineProperty(_easing, QUARTIC_OUT, function (value) {
  return 1 - --value * value * value * value;
}), _defineProperty(_easing, QUINTIC, function (value) {
  if ((value *= 2) < 1) {
    return 0.5 * value * value * value * value * value;
  }

  return 0.5 * ((value -= 2) * value * value * value * value + 2);
}), _defineProperty(_easing, QUINTIC_IN, function (value) {
  return value * value * value * value * value;
}), _defineProperty(_easing, QUINTIC_OUT, function (value) {
  return --value * value * value * value * value + 1;
}), _defineProperty(_easing, SINUSOIDAL, function (value) {
  return 0.5 * (1 - Math.cos(Math.PI * value));
}), _defineProperty(_easing, SINUSOIDAL_IN, function (value) {
  return 1 - Math.cos(value * Math.PI / 2);
}), _defineProperty(_easing, SINUSOIDAL_OUT, function (value) {
  return Math.sin(value * Math.PI / 2);
}), _defineProperty(_easing, EXPONENTIAL, function (value) {
  if (value === 0) {
    return 0;
  }

  if (value === 1) {
    return 1;
  }

  if ((value *= 2) < 1) {
    return 0.5 * Math.pow(1024, value - 1);
  }

  return 0.5 * (-Math.pow(2, -10 * (value - 1)) + 2);
}), _defineProperty(_easing, EXPONENTIAL_IN, function (value) {
  return value === 0 ? 0 : Math.pow(1024, value - 1);
}), _defineProperty(_easing, EXPONENTIAL_OUT, function (value) {
  return value === 1 ? 1 : 1 - Math.pow(2, -10 * value);
}), _defineProperty(_easing, CIRCULAR, function (value) {
  if ((value *= 2) < 1) {
    return -0.5 * (Math.sqrt(1 - value * value) - 1);
  }

  return 0.5 * (Math.sqrt(1 - (value -= 2) * value) + 1);
}), _defineProperty(_easing, CIRCULAR_IN, function (value) {
  return 1 - Math.sqrt(1 - value * value);
}), _defineProperty(_easing, CIRCULAR_OUT, function (value) {
  return Math.sqrt(1 - --value * value);
}), _defineProperty(_easing, ELASTIC, function (value) {
  if (value === 0) {
    return 0;
  }

  if (value === 1) {
    return 1;
  }

  value *= 2;

  if (value < 1) {
    return -0.5 * Math.pow(2, 10 * (value - 1)) * Math.sin((value - 1.1) * 5 * Math.PI);
  }

  return 0.5 * Math.pow(2, -10 * (value - 1)) * Math.sin((value - 1.1) * 5 * Math.PI) + 1;
}), _defineProperty(_easing, ELASTIC_IN, function (value) {
  if (value === 0) {
    return 0;
  }

  if (value === 1) {
    return 1;
  }

  return -Math.pow(2, 10 * (value - 1)) * Math.sin((value - 1.1) * 5 * Math.PI);
}), _defineProperty(_easing, ELASTIC_OUT, function (value) {
  if (value === 0) {
    return 0;
  }

  if (value === 1) {
    return 1;
  }

  return Math.pow(2, -10 * value) * Math.sin((value - 0.1) * 5 * Math.PI) + 1;
}), _defineProperty(_easing, BACK, function (value) {
  var s = 1.70158 * 1.525;

  if ((value *= 2) < 1) {
    return 0.5 * (value * value * ((s + 1) * value - s));
  }

  return 0.5 * ((value -= 2) * value * ((s + 1) * value + s) + 2);
}), _defineProperty(_easing, BACK_IN, function (value) {
  var s = 1.70158;
  return value * value * ((s + 1) * value - s);
}), _defineProperty(_easing, BACK_OUT, function (value) {
  var s = 1.70158;
  return --value * value * ((s + 1) * value + s) + 1;
}), _defineProperty(_easing, BOUNCE, function (value) {
  if (value < 0.5) {
    return easing[BOUNCE_IN](value * 2) * 0.5;
  }

  return easing[BOUNCE_OUT](value * 2 - 1) * 0.5 + 0.5;
}), _defineProperty(_easing, BOUNCE_IN, function (value) {
  return 1 - easing[BOUNCE_OUT](1 - value);
}), _defineProperty(_easing, BOUNCE_OUT, function (value) {
  if (value < 1 / 2.75) {
    return 7.5625 * value * value;
  }

  if (value < 2 / 2.75) {
    return 7.5625 * (value -= 1.5 / 2.75) * value + 0.75;
  }

  if (value < 2.5 / 2.75) {
    return 7.5625 * (value -= 2.25 / 2.75) * value + 0.9375;
  }

  return 7.5625 * (value -= 2.625 / 2.75) * value + 0.984375;
}), _easing);

/***/ }),

/***/ "../tween/dist/index.js":
/*!******************************!*\
  !*** ../tween/dist/index.js ***!
  \******************************/
/*! namespace exports */
/*! export BACK [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .BACK */
/*! export BACK_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .BACK_IN */
/*! export BACK_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .BACK_OUT */
/*! export BOUNCE [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .BOUNCE */
/*! export BOUNCE_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .BOUNCE_IN */
/*! export BOUNCE_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .BOUNCE_OUT */
/*! export CIRCULAR [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .CIRCULAR */
/*! export CIRCULAR_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .CIRCULAR_IN */
/*! export CIRCULAR_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .CIRCULAR_OUT */
/*! export CUBIC [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .CUBIC */
/*! export CUBIC_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .CUBIC_IN */
/*! export CUBIC_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .CUBIC_OUT */
/*! export ELASTIC [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .ELASTIC */
/*! export ELASTIC_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .ELASTIC_IN */
/*! export ELASTIC_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .ELASTIC_OUT */
/*! export EXPONENTIAL [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .EXPONENTIAL */
/*! export EXPONENTIAL_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .EXPONENTIAL_IN */
/*! export EXPONENTIAL_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .EXPONENTIAL_OUT */
/*! export LINEAR [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .LINEAR */
/*! export QUADRATIC [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUADRATIC */
/*! export QUADRATIC_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUADRATIC_IN */
/*! export QUADRATIC_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUADRATIC_OUT */
/*! export QUARTIC [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUARTIC */
/*! export QUARTIC_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUARTIC_IN */
/*! export QUARTIC_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUARTIC_OUT */
/*! export QUINTIC [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUINTIC */
/*! export QUINTIC_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUINTIC_IN */
/*! export QUINTIC_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUINTIC_OUT */
/*! export SINUSOIDAL [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .SINUSOIDAL */
/*! export SINUSOIDAL_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .SINUSOIDAL_IN */
/*! export SINUSOIDAL_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .SINUSOIDAL_OUT */
/*! export TWEEN [provided] [unused] [could be renamed] -> ../tween/dist/tween.js .TWEEN */
/*! export applyTweenExtension [provided] [used in main] [could be renamed] -> ../tween/dist/tween.js .applyTweenExtension */
/*! export easing [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .easing */
/*! export updateTweem [provided] [unused] [could be renamed] -> ../tween/dist/tween.js .updateTweem */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyTweenExtension": () => /* reexport safe */ _tween__WEBPACK_IMPORTED_MODULE_0__.applyTweenExtension
/* harmony export */ });
/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tween */ "../tween/dist/tween.js");
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./easing */ "../tween/dist/easing.js");



/***/ }),

/***/ "../tween/dist/tween.js":
/*!******************************!*\
  !*** ../tween/dist/tween.js ***!
  \******************************/
/*! namespace exports */
/*! export TWEEN [provided] [unused] [could be renamed] */
/*! export applyTweenExtension [provided] [used in main] [could be renamed] */
/*! export updateTweem [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyTweenExtension": () => /* binding */ applyTweenExtension
/* harmony export */ });
/* unused harmony exports TWEEN, updateTweem */
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easing */ "../tween/dist/easing.js");

var TWEEN = 'tween';
function updateTweem(component, context) {
  var tween = component.tween;
  var phases = tween.phases;

  if (!(phases === null || phases === void 0 ? void 0 : phases.length)) {
    console.warn('Animation parts not found');
    return;
  }

  if (tween.time === undefined) {
    tween.time = 0;
  }

  tween.time += context.time;
  var time = tween.time;
  var offset = 0;
  phases.forEach(function (phase) {
    var _phase$easing$toLower, _phase$easing;

    if (!phase.time) {
      console.warn('Animation time not set');
      return;
    }

    if (phase.offset !== undefined) {
      offset = phase.offset;
    }

    var easingName = (_phase$easing$toLower = phase === null || phase === void 0 ? void 0 : (_phase$easing = phase.easing) === null || _phase$easing === void 0 ? void 0 : _phase$easing.toLowerCase()) !== null && _phase$easing$toLower !== void 0 ? _phase$easing$toLower : _easing__WEBPACK_IMPORTED_MODULE_0__.LINEAR;
    var easingMethod = _easing__WEBPACK_IMPORTED_MODULE_0__.easing[easingName];

    if (!easingMethod) {
      console.warn("Unknown easing type: ".concat(_easing__WEBPACK_IMPORTED_MODULE_0__.easing));
      return;
    }

    var value = (time - offset) / phase.time;
    offset += phase.time;

    if (value < 0 || value > 1) {
      return;
    }

    var easingValue = easingMethod(value);

    if (!phase.to) {
      console.warn('Animation "to" state not found');
      return;
    }

    if (!phase.from) {
      phase.from = {};
    }

    var to = phase.to,
        from = phase.from;
    var state = component;
    Object.keys(to).forEach(function (key) {
      if (from[key] === undefined) {
        var _state$key;

        from[key] = (_state$key = state[key]) !== null && _state$key !== void 0 ? _state$key : 0;
      }

      var fromValue = from[key];
      var toValue = to[key];

      if (typeof fromValue === 'number' && typeof toValue === 'number') {
        var stateValue = fromValue + easingValue * (toValue - fromValue);
        state[key] = stateValue;
      }
    });
  });

  if (tween.loop && tween.time > offset) {
    tween.time = 0;
  }
}
function applyTweenExtension(support) {
  support.propertyHandlers.set(TWEEN, updateTweem);
}

/***/ }),

/***/ "./src/artifact.ts":
/*!*************************!*\
  !*** ./src/artifact.ts ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ recursive
/* harmony export */ });
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ "./src/assets.ts");

function recursive() {
    const container = {
        type: 'container',
        child: {
            type: 'container',
            x: 30,
            y: 30,
            scaleX: 0.9,
            scaleY: 0.9,
            rotation: 0.2,
            alpha: 0.9,
            children: [{
                    type: 'image',
                    src: _assets__WEBPACK_IMPORTED_MODULE_0__.ABILITY_WOLF,
                    scale: 0.3,
                }],
            onUpdate(time) {
                this.rotation += time * 0.05;
            },
        },
    };
    container.child.children.push(container);
    return container;
}


/***/ }),

/***/ "./src/assets.ts":
/*!***********************!*\
  !*** ./src/assets.ts ***!
  \***********************/
/*! namespace exports */
/*! export ABILITY_FOX [provided] [used in main] [could be renamed] */
/*! export ABILITY_WOLF [provided] [used in main] [could be renamed] */
/*! export ANIMALIST [provided] [used in main] [could be renamed] */
/*! export ANIMALIST_IMAGE [provided] [used in main] [could be renamed] */
/*! export ARCHER [provided] [used in main] [could be renamed] */
/*! export ARCHER_IMAGE [provided] [used in main] [could be renamed] */
/*! export BACKGROUND [provided] [used in main] [could be renamed] */
/*! export TEST_CANVAS [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANIMALIST": () => /* binding */ ANIMALIST,
/* harmony export */   "ARCHER": () => /* binding */ ARCHER,
/* harmony export */   "ANIMALIST_IMAGE": () => /* binding */ ANIMALIST_IMAGE,
/* harmony export */   "ARCHER_IMAGE": () => /* binding */ ARCHER_IMAGE,
/* harmony export */   "ABILITY_FOX": () => /* binding */ ABILITY_FOX,
/* harmony export */   "ABILITY_WOLF": () => /* binding */ ABILITY_WOLF,
/* harmony export */   "BACKGROUND": () => /* binding */ BACKGROUND,
/* harmony export */   "TEST_CANVAS": () => /* binding */ TEST_CANVAS
/* harmony export */ });
const IMAGE_ASSETS = 'assets/';
const ANIMALIST = 'id:animalist';
const ARCHER = 'id:archer';
const ANIMALIST_IMAGE = `${IMAGE_ASSETS}AnimalistFox1_image.png`;
const ARCHER_IMAGE = `${IMAGE_ASSETS}Archer2_hunter_image.png`;
const ABILITY_FOX = `${IMAGE_ASSETS}AnimalistAbility_Fox.png`;
const ABILITY_WOLF = `${IMAGE_ASSETS}AnimalistAbility_Wolf.png`;
const BACKGROUND = `${IMAGE_ASSETS}jungle_background.jpg`;
const TEST_CANVAS = 'test.canvas';


/***/ }),

/***/ "./src/engine/image.ts":
/*!*****************************!*\
  !*** ./src/engine/image.ts ***!
  \*****************************/
/*! namespace exports */
/*! export applyCustomImageExtension [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyCustomImageExtension": () => /* binding */ applyCustomImageExtension
/* harmony export */ });
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");
/* harmony import */ var _e2d_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/image */ "../image/dist/index.js");


function renderImage(image, context) {
    if (!image.src) {
        return;
    }
    const { matrix, colorTransform } = context;
    if (colorTransform.alphaMultiplier <= 0) {
        return;
    }
    const { support } = context;
    const resource = support.resources.get(image.src);
    if (!resource?.loaded || !resource?.image) {
        return;
    }
    const { context2d } = support;
    context2d.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
    const { width, height } = resource.image;
    const x = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(image, width);
    const y = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(image, height);
    context2d.globalAlpha = 1;
    context2d.fillStyle = '';
    context2d.strokeStyle = 'gray';
    context2d.strokeRect(x, y, width, height);
}
function applyCustomImageExtension(support) {
    (0,_e2d_image__WEBPACK_IMPORTED_MODULE_1__.applyImageExtension)(support);
    support.renderHandlers.set(_e2d_image__WEBPACK_IMPORTED_MODULE_1__.IMAGE, renderImage);
}


/***/ }),

/***/ "./src/engine/resources.ts":
/*!*********************************!*\
  !*** ./src/engine/resources.ts ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ CustomResourceManager
/* harmony export */ });
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");
/* harmony import */ var _e2d_resources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/resources */ "../resources/dist/index.js");


class CustomResourceManager {
    constructor() {
        this.aliases = new Map();
        this.resources = new Map();
        this.resolve = (asset) => {
            if (asset.indexOf('id:') === 0) {
                const id = asset.slice(3);
                let resource = this.resources.get(id);
                if (!resource) {
                    const url = this.aliases.get(id);
                    if (url) {
                        resource = (0,_e2d_resources__WEBPACK_IMPORTED_MODULE_1__.resolveImage)(url);
                        this.resources.set(id, resource);
                    }
                    else {
                        _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Debug.warning(`Resource with id: ${asset} not found`);
                    }
                }
                return resource;
            }
            return null;
        };
    }
}


/***/ }),

/***/ "./src/engine/support.ts":
/*!*******************************!*\
  !*** ./src/engine/support.ts ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ CustomSupport
/* harmony export */ });
/* harmony import */ var _e2d_canvas_support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/canvas-support */ "../canvas-support/dist/index.js");
/* harmony import */ var _e2d_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/text */ "../text/dist/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "./src/engine/image.ts");



class CustomSupport extends _e2d_canvas_support__WEBPACK_IMPORTED_MODULE_0__.CanvasSupport {
    constructor() {
        super();
        (0,_e2d_text__WEBPACK_IMPORTED_MODULE_1__.applyCanvasTextExtension)(this);
        (0,_image__WEBPACK_IMPORTED_MODULE_2__.applyCustomImageExtension)(this);
    }
    clear() {
        const { context2d } = this;
        context2d.fillStyle = 'black';
        context2d.setTransform();
        context2d.fillRect(0, 0, context2d.canvas.width, context2d.canvas.height);
        context2d.fillStyle = '';
    }
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ main
/* harmony export */ });
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ "./src/assets.ts");
/* harmony import */ var _artifact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artifact */ "./src/artifact.ts");
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit */ "./src/unit.ts");



function main() {
    function onUnitClick(data) {
        data.health = Math.random();
        console.log('onUnitClick', data.name);
    }
    return {
        type: 'container',
        children: {
            background: {
                type: 'image',
                src: _assets__WEBPACK_IMPORTED_MODULE_0__.BACKGROUND,
                scaleX: 1,
                scaleY: 1,
            },
            figure: {
                type: 'shape',
                data: {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    width: 100,
                    height: 100,
                    fill: 0xff00ff,
                    stroke: {
                        thickness: 2,
                        fill: 0x00ff00,
                    },
                },
            },
            shapes: {
                type: 'shape',
                data: [
                    {
                        type: 'circle',
                        x: 100,
                        y: 100,
                        radius: 50,
                        fill: { type: 'solid', color: 0xffff00, alpha: 0.5 },
                    },
                    {
                        type: 'path',
                        data: 'M 10 10 H 90 V 90 H 10 Z',
                        fill: 0xff00ff,
                    },
                    {
                        type: 'path',
                        data: [
                            { type: 'moveTo', x: 0, y: 0 },
                            { type: 'lineTo', x: 100, y: 0 },
                            { type: 'lineTo', x: 100, y: 100 },
                            { type: 'lineTo', x: 0, y: 100 },
                            { type: 'lineTo', x: 0, y: 0 },
                        ],
                        fill: 0xff00ff,
                        stroke: 0x000000,
                    },
                ],
            },
            units: {
                type: 'container',
                children: [
                    (0,_unit__WEBPACK_IMPORTED_MODULE_1__.unit)({
                        name: 'Archer', health: 1, image: _assets__WEBPACK_IMPORTED_MODULE_0__.ARCHER, onClick: onUnitClick,
                    }),
                    (0,_unit__WEBPACK_IMPORTED_MODULE_1__.unit)({
                        name: 'Animalist', health: 1, image: _assets__WEBPACK_IMPORTED_MODULE_0__.ANIMALIST, onClick: onUnitClick,
                    }),
                ],
            },
            artifact: {
                type: 'container',
                x: 300,
                y: 350,
                children: [(0,_artifact__WEBPACK_IMPORTED_MODULE_2__.default)()],
            },
            map: {
                type: 'image',
                y: 450,
                scaleX: 0.2,
                scaleY: 0.2,
                alpha: 0.5,
                src: 'test.canvas',
                onPointerOver() {
                    this.alpha = 1;
                },
                onPointerOut() {
                    this.alpha = 0.5;
                },
            },
            abilityFox: {
                type: 'image',
                src: _assets__WEBPACK_IMPORTED_MODULE_0__.ABILITY_FOX,
                x: 450,
                y: 500,
                scale: 0.5,
                tint: {
                    color: 0x00ff00,
                    value: 1,
                },
                onUpdate(time) {
                    this.tint.value += time;
                    if (this.tint.value >= 1) {
                        this.tint.value = 0;
                    }
                },
                onPointerDown(e) {
                    console.log('fox', e);
                },
            },
            abilityWolf: {
                type: 'container',
                x: 350,
                y: 400,
                child: {
                    type: 'image',
                    src: _assets__WEBPACK_IMPORTED_MODULE_0__.ABILITY_WOLF,
                    scale: 0.5,
                    alpha: 1,
                    tween: {
                        loop: true,
                        phases: [
                            {
                                time: 1,
                                to: { x: 200 },
                            },
                            {
                                easing: 'cubicout',
                                time: 1,
                                to: { y: 200, alpha: 0.5 },
                            },
                            {
                                easing: 'quadraticIn',
                                time: 1,
                                to: { x: 0, alpha: 1 },
                            },
                            {
                                easing: 'quadraticOut',
                                time: 1,
                                to: { y: 0 },
                            },
                        ],
                    },
                },
            },
        },
        start() {
            console.log('start');
        },
    };
}


/***/ }),

/***/ "./src/unit.ts":
/*!*********************!*\
  !*** ./src/unit.ts ***!
  \*********************/
/*! namespace exports */
/*! export unit [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unit": () => /* binding */ unit
/* harmony export */ });
const SPEED = 100;
function unit(props) {
    function getTitle() {
        return `${props.name}: ${Math.round(props.health * 100)}%`;
    }
    return {
        type: 'container',
        x: 50 + Math.random() * 400,
        y: 200,
        rotation: 0,
        updateMove(time) {
            this.x += this.children.image.scaleX * time * SPEED;
            if (this.x < 50) {
                this.children.image.scaleX = 1;
            }
            else if (this.x > 400) {
                this.children.image.scaleX = -1;
            }
        },
        onUpdate(time) {
            this.updateMove(time);
        },
        children: {
            text: {
                type: 'text',
                text: getTitle(),
                textFormat: {
                    size: 15,
                    color: 0xffdddd,
                    align: 'center',
                    verticalAlign: 'middle',
                },
                border: 0x00ff00,
                y: -30,
                height: 35,
                pivotX: 0.5,
                onPointerDown: () => {
                    props.onClick(props);
                },
                onUpdate() {
                    this.text = getTitle();
                },
            },
            image: {
                type: 'image',
                src: props.image,
                scaleX: Math.random() > 0.5 ? 1 : -1,
                pivotX: 0.5,
                onPointerDown: () => {
                    props.onClick(props);
                },
            },
        },
    };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");
/* harmony import */ var _e2d_tween__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/tween */ "../tween/dist/index.js");
/* harmony import */ var _e2d_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @e2d/text */ "../text/dist/index.js");
/* harmony import */ var _e2d_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @e2d/image */ "../image/dist/index.js");
/* harmony import */ var _e2d_shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @e2d/shape */ "../shape/dist/index.js");
/* harmony import */ var _e2d_canvas_support__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @e2d/canvas-support */ "../canvas-support/dist/index.js");
/* harmony import */ var _engine_resources__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./engine/resources */ "./src/engine/resources.ts");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main */ "./src/main.ts");
/* harmony import */ var _engine_support__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./engine/support */ "./src/engine/support.ts");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets */ "./src/assets.ts");










const app = (0,_main__WEBPACK_IMPORTED_MODULE_6__.default)();
app.start();
const engine = new _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Engine(new _e2d_canvas_support__WEBPACK_IMPORTED_MODULE_5__.CanvasSupport());
(0,_e2d_image__WEBPACK_IMPORTED_MODULE_3__.applyCanvasImageColorExtension)(engine.support);
(0,_e2d_text__WEBPACK_IMPORTED_MODULE_2__.applyCanvasTextExtension)(engine.support);
(0,_e2d_shape__WEBPACK_IMPORTED_MODULE_4__.applyCanvasShapeExtension)(engine.support);
(0,_e2d_tween__WEBPACK_IMPORTED_MODULE_1__.applyTweenExtension)(engine.support);
(0,_e2d_engine__WEBPACK_IMPORTED_MODULE_0__.applyMouseSupportExtension)(engine);
engine.root = app;
engine.play();
document.body.appendChild(engine.support.element);
const customEngine = new _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Engine(new _engine_support__WEBPACK_IMPORTED_MODULE_7__.default());
customEngine.fullscreen = false;
customEngine.height = 600;
customEngine.updateEnabled = false;
customEngine.root = engine.root;
customEngine.play();
customEngine.support.element.style.position = 'absolute';
customEngine.support.element.style.top = '0px';
customEngine.support.element.style.left = '600px';
document.body.appendChild(customEngine.support.element);
document.body.style.margin = '0';
document.body.style.padding = '0';
setTimeout(() => engine.pause(), 5000);
setTimeout(() => engine.play(), 10000);
engine.support.resources.add(_assets__WEBPACK_IMPORTED_MODULE_8__.TEST_CANVAS, {
    asset: _assets__WEBPACK_IMPORTED_MODULE_8__.TEST_CANVAS,
    image: customEngine.support.element,
    loaded: true,
});
customEngine.support.resources.add(_assets__WEBPACK_IMPORTED_MODULE_8__.TEST_CANVAS, {
    asset: _assets__WEBPACK_IMPORTED_MODULE_8__.TEST_CANVAS,
    image: engine.support.element,
    loaded: true,
});
const resourceManager = new _engine_resources__WEBPACK_IMPORTED_MODULE_9__.default();
resourceManager.aliases.set(_assets__WEBPACK_IMPORTED_MODULE_8__.ARCHER.replace('id:', ''), _assets__WEBPACK_IMPORTED_MODULE_8__.ARCHER_IMAGE);
resourceManager.aliases.set(_assets__WEBPACK_IMPORTED_MODULE_8__.ANIMALIST.replace('id:', ''), _assets__WEBPACK_IMPORTED_MODULE_8__.ANIMALIST_IMAGE);
engine.support.resources.resolvers.add(resourceManager.resolve);
customEngine.support.resources.resolvers.add(resourceManager.resolve);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jYW52YXMtc3VwcG9ydC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NhbnZhcy1zdXBwb3J0L2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY2FudmFzLXN1cHBvcnQvZGlzdC9zdXBwb3J0LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2VuZ2luZS9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvZW5naW5lL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9lbmdpbmUvc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnB1dC9rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnB1dC9tb3VzZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnB1dC90b3VjaC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnRlcmZhY2VzL3Bpdm90LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2ludGVyZmFjZXMvcG9pbnRlci5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnRlcmZhY2VzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnRlcmZhY2VzL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC91dGlscy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9nZW9tL2Rpc3QvYm91bmRzLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9jb2xvci10cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZ2VvbS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9tYXRyaXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZ2VvbS9kaXN0L3BvaW50LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vaW1hZ2UvZGlzdC9pbWFnZS1jYW52YXMtY29sb3IuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vaW1hZ2UvZGlzdC9pbWFnZS1jYW52YXMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vaW1hZ2UvZGlzdC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9pbWFnZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3Jlc291cmNlcy9kaXN0L2ltYWdlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvZGF0YS9kYXRhLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvZGF0YS9wYXRoLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvZGF0YS9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vc2hhcGUvZGlzdC9ncmFwaGljcy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3Qvc2hhcGUtY2FudmFzLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3Qvc2hhcGUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdGV4dC9kaXN0L2ZvbnQuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdGV4dC9kaXN0L2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90ZXh0L2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdGV4dC9kaXN0L3RleHQtY2FudmFzLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3RleHQvZGlzdC90ZXh0LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3R3ZWVuL2Rpc3QvZWFzaW5nLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3R3ZWVuL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdHdlZW4vZGlzdC90d2Vlbi5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9hcnRpZmFjdC50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9hc3NldHMudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvZW5naW5lL2ltYWdlLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2VuZ2luZS9yZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvZW5naW5lL3N1cHBvcnQudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy91bml0LnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BlMmQvc2FtcGxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0BlMmQvc2FtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImNyZWF0ZUNvbG9yUGF0dGVybiIsImNvbG9yIiwiYWxwaGEiLCJjdCIsInIiLCJnIiwiYiIsImEiLCJDb2xvclRyYW5zZm9ybSIsInJlZE11bHRpcGxpZXIiLCJyZWRPZmZzZXQiLCJncmVlbk11bHRpcGxpZXIiLCJncmVlbk9mZnNldCIsImJsdWVNdWx0aXBsaWVyIiwiYmx1ZU9mZnNldCIsImFscGhhTXVsdGlwbGllciIsImFscGhhT2Zmc2V0IiwiQ2FudmFzU3VwcG9ydCIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQyZCIsImdldENvbnRleHQiLCJzZXRUcmFuc2Zvcm0iLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInBpeGVsUmF0aW8iLCJ2aWV3V2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJ2aWV3SGVpZ2h0Iiwic3R5bGUiLCJTdXBwb3J0IiwiQ29tcG9uZW50IiwiaXNFbmFibGVkIiwiY29tcG9uZW50IiwiZW5hYmxlZCIsImlzVmlzaWJsZSIsInZpc2libGUiLCJDT05UQUlORVIiLCJDb250YWluZXIiLCJudW1DaGlsZHJlbiIsImNvbnRhaW5lciIsImNoaWxkIiwiY2hpbGRyZW4iLCJjb3VudCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImtleXMiLCJPYmplY3QiLCJyZW5kZXIiLCJjb250ZXh0Iiwic3VwcG9ydCIsImNoaWxkQ29udGV4dCIsImdldFJlbmRlckNvbnRleHQiLCJpIiwiY29tcG9uZW50Q29udGV4dCIsInVwZGF0ZSIsImdldFVwZGF0ZUNvbnRleHQiLCJoaXRUZXN0IiwiZ2V0UG9pbnRlckNvbnRleHQiLCJyZXN1bHQiLCJhcHBseUNvbnRhaW5lckV4dGVuc2lvbiIsInVwZGF0ZUhhbmRsZXJzIiwic2V0IiwicmVuZGVySGFuZGxlcnMiLCJoaXRUZXN0SGFuZGxlcnMiLCJFTVBUWV9NQVRSSVgiLCJNYXRyaXgiLCJFbmdpbmUiLCJmdWxsc2NyZWVuIiwidXBkYXRlRW5hYmxlZCIsInJlbmRlckVuYWJsZWQiLCJwb2ludGVyRW5hYmxlZCIsInBhdXNlZCIsInRpbWUiLCJtYXRyaXgiLCJpbnRlcm5hbFVwZGF0ZSIsImRlbHRhVGltZSIsInVwZGF0ZUZyYW1lIiwicm9vdCIsImJhc2UiLCJkZXB0aCIsImNsZWFyIiwiY29sb3JUcmFuc2Zvcm0iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwidGFyZ2V0V2lkdGgiLCJ0YXJnZXRIZWlnaHQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkIiwic2V0U2l6ZSIsInVwZGF0ZVNpemUiLCJ1cGRhdGVOZXh0RnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJldmVudCIsInR5cGUiLCJpZCIsIngiLCJ5IiwibG9jYWwiLCJnbG9iYWwiLCJjb25zb2xlIiwibG9nIiwiUmVzb3VyY2VzIiwicmVzb3VyY2VzIiwiTWFwIiwicmVzb2x2ZXJzIiwiU2V0IiwiYXNzZXQiLCJyZXNvdXJjZSIsImdldCIsInJlc29sdmUiLCJyZXNvbHZlciIsIkRlYnVnIiwidXBkYXRlRGVwdGgiLCJwcm9wZXJ0eUhhbmRsZXJzIiwiZm9yRWFjaCIsImhhbmRsZXIiLCJwcm9wZXJ0eSIsIm9uVXBkYXRlIiwiUG9pbnRlciIsInBvaW50ZXJPdmVyIiwicGFyZW50IiwiVHJhbnNmb3JtIiwidHJhbnNmb3JtZWRNYXRyaXgiLCJhcHBseUtleWJvYXJkU3VwcG9ydEV4dGVuc2lvbiIsImVuZ2luZSIsImRpc3BhdGNoRXZlbnQiLCJlbGVtZW50IiwiY2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50TGVmdCIsImNsaWVudFkiLCJ0b3AiLCJjbGllbnRUb3AiLCJkaXNwYXRjaFBvaW50ZXJFdmVudCIsInByZXZlbnREZWZhdWx0IiwiYXBwbHlNb3VzZVN1cHBvcnRFeHRlbnNpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiY2hhbmdlZFRvdWNoZXMiLCJ0b3VjaCIsImlkZW50aWZpZXIiLCJhcHBseVRvdWNoU3VwcG9ydEV4dGVuc2lvbiIsIlBpdm90IiwiZ2V0WCIsInBpdm90IiwicGl2b3RYIiwiZ2V0WSIsInBpdm90WSIsImlzUG9pbnRlck92ZXIiLCJwb2ludGVyIiwiaXNQb2ludGVyRW5hYmxlZCIsImhhbmRsZXJOYW1lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIlNvdXJjZSIsImdldFJlc291cmNlIiwic291cmNlIiwic3JjIiwiaXNMb2FkZWQiLCJsb2FkZWQiLCJnZXRNYXRyaXgiLCJ0cmFuc2Zvcm0iLCJjIiwidHgiLCJ0eSIsInJvdGF0aW9uIiwic2NhbGVYIiwic2NhbGUiLCJzY2FsZVkiLCJjb3MiLCJzaW4iLCJnZXRDb2xvclRyYW5zZm9ybSIsInRpbnQiLCJ2YWx1ZSIsInZhbHVlSW52ZXJ0ZWQiLCJhcmdzIiwiU3RyaW5nIiwiZXJyb3JzIiwiZXJyb3IiLCJ3YXJuaW5ncyIsIndhcm4iLCJCb3VuZHMiLCJlbXB0eSIsIm1pblgiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJtaW5ZIiwibWF4WCIsIk1JTl9WQUxVRSIsIm1heFkiLCJpc0VtcHR5IiwiYm91bmRzIiwidG9SZWN0YW5nbGUiLCJ0ZXN0WCIsInRlc3RZIiwidGVzdCIsInRlc3RQb2ludCIsInBvaW50IiwiY29uY2F0IiwiY3QxIiwiY3QwIiwiaXNEZWZhdWx0IiwibWF0cml4MCIsIm1hdHJpeDEiLCJnZXREZXRlcm1pbmFudCIsImludmVydCIsImRldGVybWluYW50IiwidHJhbnNmb3JtUG9pbnQiLCJ0cmFuc2Zvcm1JbnZlcnNlUG9pbnQiLCJ0cmFuc2Zvcm1Cb3VuZHMiLCJyeCIsInJ5IiwicnIiLCJyYiIsIm54MSIsIm55MSIsIm54MiIsIm55MiIsIm54MyIsIm55MyIsIm54NCIsIm55NCIsInJpZ2h0IiwiYm90dG9tIiwiUG9pbnQiLCJSZWN0YW5nbGUiLCJjb250YWlucyIsInJlY3RhbmdsZSIsInRlbXBDb250ZXh0IiwiaXNEZWZhdWx0Q29sb3JUcmFuc2Zvcm0iLCJ1cGRhdGVUZW1wQ29udGV4dCIsInJlbmRlckNhbnZhc0NvbG9yIiwiaW1hZ2UiLCJnbG9iYWxBbHBoYSIsImRyYXdJbWFnZSIsImltYWdlRGF0YSIsImdldEltYWdlRGF0YSIsInJtIiwiZ20iLCJibSIsImFtIiwicm8iLCJnbyIsImJvIiwiYW8iLCJkYXRhIiwicHV0SW1hZ2VEYXRhIiwiYXBwbHlDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uIiwiYXBwbHlJbWFnZUV4dGVuc2lvbiIsIklNQUdFIiwicmVuZGVyQ2FudmFzIiwiYXBwbHlDYW52YXNJbWFnZUV4dGVuc2lvbiIsIkltYWdlIiwiZ2V0Qm91bmRzIiwidW5kZWZpbmVkIiwiYWRkIiwicmVzb2x2ZUltYWdlIiwiZXh0ZW5zaW9uIiwic3BsaXQiLCJwb3AiLCJvbmxvYWQiLCJvbmVycm9yIiwiZSIsIlJlY3RhbmdsZURhdGEiLCJjYWxjdWxhdGVCb3VuZHMiLCJFbGxpcHNlRGF0YSIsInJhZGl1cyIsInJhZGl1c1giLCJyYWRpdXNZIiwiUGF0aERhdGEiLCJwYXRoRGF0YSIsIkdyYXBoaWNzU3RyaW5nIiwiY29tbWFuZCIsIlBhdGhDb21tYW5kIiwiR3JhcGhpY3NEYXRhIiwicGF0aCIsIm1vdmVUbyIsImN1cnZlVG8iLCJjeCIsImN5IiwiY3ViaWNDdXJ2ZVRvIiwic3giLCJzeSIsIlRFU1RfQ09NTUFORCIsIlRFU1RfU1BBQ0UiLCJURVNUX05VTUJFUiIsIkdyYXBoaWNzU3RyaW5nU3RyZWFtIiwicG9zaXRpb24iLCJidWZmZXIiLCJzaXplIiwicmVhZENvbW1hbmQiLCJyZWFkTnVtYmVycyIsIm51bWJlciIsImNoYXIiLCJwYXJzZUZsb2F0IiwiR3JhcGhpY3NTdHJpbmdSZWFkZXIiLCJzdHJlYW0iLCJjb21tYW5kRXhpc3RzIiwibGFzdFgiLCJsYXN0WSIsInNldFBhdGgiLCJoYXNEYXRhIiwicmVhZE5leHQiLCJwYXJzZSIsImdldENvbW1hbmQiLCJnZXRCdWZmZXIiLCJ4MCIsInkwIiwieDEiLCJ5MSIsIngyIiwieTIiLCJsaW5lVG8iLCJyZWFkZXIiLCJHcmFwaGljcyIsInNoYXBlIiwiZmlsbCIsInJlcGVhdCIsInNtb290aCIsInJhdGlvIiwic3ByZWFkIiwiaW50ZXJwb2xhdGlvbiIsImZvY2FsUG9pbnRSYXRpbyIsInRoaWNrbmVzcyIsInBpeGVsSGludGluZyIsInNjYWxlTW9kZSIsImNhcHMiLCJqb2ludHMiLCJtaXRlckxpbWl0Iiwic3Ryb2tlIiwiYmVnaW5QYXRoIiwicHVzaCIsImdldFBhdGgiLCJlbGxpcHNlV2lkdGgiLCJlbGxpcHNlSGVpZ2h0IiwidyIsImgiLCJrIiwib3giLCJveSIsInhlIiwieWUiLCJ4bSIsInltIiwiZHgiLCJkeSIsImNyZWF0ZURhdGEiLCJncmFwaGljc0RhdGEiLCJyZW5kZXJTaGFwZSIsImFwcGx5Q2FudmFzU2hhcGVFeHRlbnNpb24iLCJhcHBseVNoYXBlRXh0ZW5zaW9uIiwiU0hBUEUiLCJTaGFwZSIsImdldEdyYXBoaWNzIiwiRU0iLCJmb250cyIsImdldFN0eWxlRm9udCIsImZvbnQiLCJtZWFzdXJlVGV4dCIsInRleHQiLCJnZXRDaGFyV2lkdGgiLCJ3aWR0aHMiLCJuYW1lIiwiZ2V0S2VybmluZyIsImZpcnN0Iiwic2Vjb25kIiwicGFpciIsImtlcm5pbmciLCJrZXJuaW5ncyIsIndpZHRoU2Vjb25kIiwid2lkdGhUb3RhbCIsImdldEFkdmFuY2UiLCJnZXRGb250IiwiZ2V0TGluZVdpZHRoIiwiZm9ybWF0IiwibGluZSIsImFkdmFuY2UiLCJsZXR0ZXJTcGFjaW5nIiwiZ2V0VGV4dFdpZHRoIiwibGluZXMiLCJsaW5lV2lkdGgiLCJnZXRUZXh0SGVpZ2h0IiwibGVhZGluZyIsImRlZmF1bHRUZXh0Rm9ybWF0IiwiYm9sZCIsIml0YWxpYyIsInVuZGVybGluZSIsImFsaWduIiwidmVydGljYWxBbGlnbiIsImdldFZhbGlkVGV4dEZvcm1hdCIsInRleHRGb3JtYXQiLCJnZXRBbGluZ1ZhbHVlIiwiZ2V0VmVydGljYWxBbGluZ1ZhbHVlIiwicmVuZGVyQ2FudmFzVGV4dCIsImJvcmRlciIsImJhY2tncm91bmQiLCJmb3JtYXRTaXplIiwiZm9ybWF0TGV0dGVyU3BhY2luZyIsImZvcm1hdExlYWRpbmciLCJ0ZXh0V2lkdGgiLCJ0ZXh0SGVpZ2h0IiwicmVhbFdpZHRoIiwicmVhbEhlaWdodCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiYWxpZ25WZXJ0aWNhbFZhbHVlIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJyZWN0IiwidGV4dEJhc2VsaW5lIiwiYWxpZ25WYWx1ZSIsImoiLCJmaWxsVGV4dCIsImFwcGx5Q2FudmFzVGV4dEV4dGVuc2lvbiIsImFwcGx5VGV4dEV4dGVuc2lvbiIsIlRFWFQiLCJUZXh0IiwiTElORUFSIiwiUVVBRFJBVElDIiwiUVVBRFJBVElDX0lOIiwiUVVBRFJBVElDX09VVCIsIkNVQklDIiwiQ1VCSUNfSU4iLCJDVUJJQ19PVVQiLCJRVUFSVElDIiwiUVVBUlRJQ19JTiIsIlFVQVJUSUNfT1VUIiwiUVVJTlRJQyIsIlFVSU5USUNfSU4iLCJRVUlOVElDX09VVCIsIlNJTlVTT0lEQUwiLCJTSU5VU09JREFMX0lOIiwiU0lOVVNPSURBTF9PVVQiLCJFWFBPTkVOVElBTCIsIkVYUE9ORU5USUFMX0lOIiwiRVhQT05FTlRJQUxfT1VUIiwiQ0lSQ1VMQVIiLCJDSVJDVUxBUl9JTiIsIkNJUkNVTEFSX09VVCIsIkVMQVNUSUMiLCJFTEFTVElDX0lOIiwiRUxBU1RJQ19PVVQiLCJCQUNLIiwiQkFDS19JTiIsIkJBQ0tfT1VUIiwiQk9VTkNFIiwiQk9VTkNFX0lOIiwiQk9VTkNFX09VVCIsImVhc2luZyIsIlBJIiwicG93Iiwic3FydCIsInMiLCJUV0VFTiIsInVwZGF0ZVR3ZWVtIiwidHdlZW4iLCJwaGFzZXMiLCJvZmZzZXQiLCJwaGFzZSIsImVhc2luZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImVhc2luZ01ldGhvZCIsImVhc2luZ1ZhbHVlIiwidG8iLCJmcm9tIiwic3RhdGUiLCJrZXkiLCJmcm9tVmFsdWUiLCJ0b1ZhbHVlIiwic3RhdGVWYWx1ZSIsImxvb3AiLCJhcHBseVR3ZWVuRXh0ZW5zaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNPLFNBQVNBLGtCQUFULENBQTRCQyxLQUE1QixFQUFtQ0MsS0FBbkMsRUFBMENDLEVBQTFDLEVBQThDO0FBQ2pELE1BQUlDLENBQUMsR0FBR0gsS0FBSyxJQUFJLEVBQVQsR0FBYyxJQUF0QjtBQUNBLE1BQUlJLENBQUMsR0FBR0osS0FBSyxJQUFJLENBQVQsR0FBYSxJQUFyQjtBQUNBLE1BQUlLLENBQUMsR0FBR0wsS0FBSyxHQUFHLElBQWhCO0FBQ0EsTUFBSU0sQ0FBQyxHQUFHTCxLQUFLLEdBQUcsSUFBaEI7O0FBQ0EsTUFBSSxDQUFDTSwrREFBQSxDQUF5QkwsRUFBekIsQ0FBTCxFQUFtQztBQUMvQkMsS0FBQyxHQUFJQSxDQUFDLEdBQUdELEVBQUUsQ0FBQ00sYUFBUCxHQUF1Qk4sRUFBRSxDQUFDTyxTQUEzQixHQUF3QyxJQUE1QztBQUNBTCxLQUFDLEdBQUlBLENBQUMsR0FBR0YsRUFBRSxDQUFDUSxlQUFQLEdBQXlCUixFQUFFLENBQUNTLFdBQTdCLEdBQTRDLElBQWhEO0FBQ0FOLEtBQUMsR0FBSUEsQ0FBQyxHQUFHSCxFQUFFLENBQUNVLGNBQVAsR0FBd0JWLEVBQUUsQ0FBQ1csVUFBNUIsR0FBMEMsSUFBOUM7QUFDQVAsS0FBQyxHQUFJQSxDQUFDLEdBQUdKLEVBQUUsQ0FBQ1ksZUFBUCxHQUF5QlosRUFBRSxDQUFDYSxXQUE3QixHQUE0QyxJQUFoRDtBQUNIOztBQUNELE1BQUlULENBQUMsR0FBRyxJQUFSLEVBQWM7QUFDViwwQkFBZUgsQ0FBZixlQUFxQkMsQ0FBckIsZUFBMkJDLENBQTNCLGVBQWlDQyxDQUFDLEdBQUcsSUFBckM7QUFDSDs7QUFDRCx1QkFBY0gsQ0FBZCxlQUFvQkMsQ0FBcEIsZUFBMEJDLENBQTFCO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRDs7SUFDcUJXLGE7Ozs7O0FBQ2pCLDJCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLQyxNQUFMLEdBQWNDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFkO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQixNQUFLSCxNQUFMLENBQVlJLFVBQVosQ0FBdUIsSUFBdkIsQ0FBakI7QUFIVTtBQUliOzs7OzRCQUlPO0FBQUEsVUFDSUosTUFESixHQUNlLElBRGYsQ0FDSUEsTUFESjtBQUVKLFdBQUtHLFNBQUwsQ0FBZUUsWUFBZjtBQUNBLFdBQUtGLFNBQUwsQ0FBZUcsU0FBZixDQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQk4sTUFBTSxDQUFDTyxLQUF0QyxFQUE2Q1AsTUFBTSxDQUFDUSxNQUFwRDtBQUNIOzs7NEJBQ09ELEssRUFBT0MsTSxFQUFRQyxVLEVBQVk7QUFDL0IsVUFBTUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsS0FBSyxHQUFHRSxVQUFuQixDQUFsQjtBQUNBLFVBQU1JLFVBQVUsR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVdKLE1BQU0sR0FBR0MsVUFBcEIsQ0FBbkI7QUFGK0IsVUFHdkJULE1BSHVCLEdBR1osSUFIWSxDQUd2QkEsTUFIdUI7O0FBSS9CLFVBQUlBLE1BQU0sQ0FBQ08sS0FBUCxLQUFpQkcsU0FBakIsSUFBOEJWLE1BQU0sQ0FBQ1EsTUFBUCxLQUFrQkssVUFBcEQsRUFBZ0U7QUFDNURiLGNBQU0sQ0FBQ08sS0FBUCxHQUFlRyxTQUFmO0FBQ0FWLGNBQU0sQ0FBQ1EsTUFBUCxHQUFnQkssVUFBaEI7QUFDQWIsY0FBTSxDQUFDYyxLQUFQLENBQWFQLEtBQWIsYUFBd0JBLEtBQXhCO0FBQ0FQLGNBQU0sQ0FBQ2MsS0FBUCxDQUFhTixNQUFiLGFBQXlCQSxNQUF6QjtBQUNIO0FBQ0o7Ozt3QkFsQmE7QUFDVixhQUFPLEtBQUtSLE1BQVo7QUFDSDs7OztFQVJzQ2UsZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEcEMsSUFBSUMsU0FBSjs7QUFDUCxDQUFDLFVBQVVBLFNBQVYsRUFBcUI7QUFDbEIsV0FBU0MsU0FBVCxDQUFtQkMsU0FBbkIsRUFBOEI7QUFBQTs7QUFDMUIsaUNBQU9BLFNBQVMsQ0FBQ0MsT0FBakIsbUVBQTRCLElBQTVCO0FBQ0g7O0FBQ0RILFdBQVMsQ0FBQ0MsU0FBVixHQUFzQkEsU0FBdEI7O0FBQ0EsV0FBU0csU0FBVCxDQUFtQkYsU0FBbkIsRUFBOEI7QUFBQTs7QUFDMUIsaUNBQU9BLFNBQVMsQ0FBQ0csT0FBakIsbUVBQTRCLElBQTVCO0FBQ0g7O0FBQ0RMLFdBQVMsQ0FBQ0ksU0FBVixHQUFzQkEsU0FBdEI7QUFDSCxDQVRELEVBU0dKLFNBQVMsS0FBS0EsU0FBUyxHQUFHLEVBQWpCLENBVFosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNETyxJQUFNTSxTQUFTLEdBQUcsV0FBbEI7QUFDQSxJQUFJQyxTQUFKOztBQUNQLENBQUMsVUFBVUEsU0FBVixFQUFxQjtBQUNsQixXQUFTQyxXQUFULENBQXFCQyxTQUFyQixFQUFnQztBQUFBLFFBQ3BCQyxLQURvQixHQUNBRCxTQURBLENBQ3BCQyxLQURvQjtBQUFBLFFBQ2JDLFFBRGEsR0FDQUYsU0FEQSxDQUNiRSxRQURhO0FBRTVCLFFBQUlDLEtBQUssR0FBRyxDQUFaOztBQUNBLFFBQUlGLEtBQUosRUFBVztBQUNQRSxXQUFLO0FBQ1I7O0FBQ0QsUUFBSUQsUUFBSixFQUFjO0FBQ1YsVUFBSUUsS0FBSyxDQUFDQyxPQUFOLENBQWNILFFBQWQsQ0FBSixFQUE2QjtBQUN6QkMsYUFBSyxJQUFJRCxRQUFRLENBQUNJLE1BQWxCO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsWUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQVAsQ0FBWUwsUUFBWixDQUFiO0FBQ0FDLGFBQUssSUFBSUksSUFBSSxDQUFDRCxNQUFkO0FBQ0g7QUFDSjs7QUFDRCxXQUFPSCxLQUFQO0FBQ0g7O0FBQ0RMLFdBQVMsQ0FBQ0MsV0FBVixHQUF3QkEsV0FBeEI7QUFDSCxDQW5CRCxFQW1CR0QsU0FBUyxLQUFLQSxTQUFTLEdBQUcsRUFBakIsQ0FuQlo7O0FBb0JPLFNBQVNXLE1BQVQsQ0FBZ0JULFNBQWhCLEVBQTJCVSxPQUEzQixFQUFvQztBQUFBLE1BQy9CVCxLQUQrQixHQUNYRCxTQURXLENBQy9CQyxLQUQrQjtBQUFBLE1BQ3hCQyxRQUR3QixHQUNYRixTQURXLENBQ3hCRSxRQUR3QjtBQUFBLE1BRS9CUyxPQUYrQixHQUVuQkQsT0FGbUIsQ0FFL0JDLE9BRitCOztBQUd2QyxNQUFJVixLQUFKLEVBQVc7QUFDUCxRQUFNVyxZQUFZLEdBQUdELE9BQU8sQ0FBQ0UsZ0JBQVIsQ0FBeUJaLEtBQXpCLEVBQWdDUyxPQUFoQyxDQUFyQjtBQUNBQyxXQUFPLENBQUNGLE1BQVIsQ0FBZVIsS0FBZixFQUFzQlcsWUFBdEI7QUFDSDs7QUFDRCxNQUFJVixRQUFKLEVBQWM7QUFDVixRQUFJRSxLQUFLLENBQUNDLE9BQU4sQ0FBY0gsUUFBZCxDQUFKLEVBQTZCO0FBQ3pCLFdBQUssSUFBSVksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osUUFBUSxDQUFDSSxNQUE3QixFQUFxQ1EsQ0FBQyxFQUF0QyxFQUEwQztBQUN0QyxZQUFNckIsU0FBUyxHQUFHUyxRQUFRLENBQUNZLENBQUQsQ0FBMUI7QUFDQSxZQUFNQyxnQkFBZ0IsR0FBR0osT0FBTyxDQUFDRSxnQkFBUixDQUF5QnBCLFNBQXpCLEVBQW9DaUIsT0FBcEMsQ0FBekI7QUFDQUMsZUFBTyxDQUFDRixNQUFSLENBQWVoQixTQUFmLEVBQTBCc0IsZ0JBQTFCO0FBQ0g7QUFDSixLQU5ELE1BT0s7QUFDRCxVQUFNUixJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZTCxRQUFaLENBQWI7O0FBQ0EsV0FBSyxJQUFJWSxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHUCxJQUFJLENBQUNELE1BQXpCLEVBQWlDUSxFQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFlBQU1yQixVQUFTLEdBQUdTLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDTyxFQUFELENBQUwsQ0FBMUI7O0FBQ0EsWUFBTUMsaUJBQWdCLEdBQUdKLE9BQU8sQ0FBQ0UsZ0JBQVIsQ0FBeUJwQixVQUF6QixFQUFvQ2lCLE9BQXBDLENBQXpCOztBQUNBQyxlQUFPLENBQUNGLE1BQVIsQ0FBZWhCLFVBQWYsRUFBMEJzQixpQkFBMUI7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNNLFNBQVNDLE1BQVQsQ0FBZ0JoQixTQUFoQixFQUEyQlUsT0FBM0IsRUFBb0M7QUFBQSxNQUMvQlQsS0FEK0IsR0FDWEQsU0FEVyxDQUMvQkMsS0FEK0I7QUFBQSxNQUN4QkMsUUFEd0IsR0FDWEYsU0FEVyxDQUN4QkUsUUFEd0I7QUFBQSxNQUUvQlMsT0FGK0IsR0FFbkJELE9BRm1CLENBRS9CQyxPQUYrQjs7QUFHdkMsTUFBSVYsS0FBSixFQUFXO0FBQ1AsUUFBTVcsWUFBWSxHQUFHRCxPQUFPLENBQUNNLGdCQUFSLENBQXlCaEIsS0FBekIsRUFBZ0NTLE9BQWhDLENBQXJCO0FBQ0FDLFdBQU8sQ0FBQ0ssTUFBUixDQUFlZixLQUFmLEVBQXNCVyxZQUF0QjtBQUNIOztBQUNELE1BQUlWLFFBQUosRUFBYztBQUNWLFFBQUlFLEtBQUssQ0FBQ0MsT0FBTixDQUFjSCxRQUFkLENBQUosRUFBNkI7QUFDekIsV0FBSyxJQUFJWSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWixRQUFRLENBQUNJLE1BQTdCLEVBQXFDUSxDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDLFlBQU1yQixTQUFTLEdBQUdTLFFBQVEsQ0FBQ1ksQ0FBRCxDQUExQjtBQUNBLFlBQU1DLGdCQUFnQixHQUFHSixPQUFPLENBQUNNLGdCQUFSLENBQXlCeEIsU0FBekIsRUFBb0NpQixPQUFwQyxDQUF6QjtBQUNBQyxlQUFPLENBQUNLLE1BQVIsQ0FBZXZCLFNBQWYsRUFBMEJzQixnQkFBMUI7QUFDSDtBQUNKLEtBTkQsTUFPSztBQUNELFVBQU1SLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlMLFFBQVosQ0FBYjs7QUFDQSxXQUFLLElBQUlZLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUdQLElBQUksQ0FBQ0QsTUFBekIsRUFBaUNRLEdBQUMsRUFBbEMsRUFBc0M7QUFDbEMsWUFBTXJCLFdBQVMsR0FBR1MsUUFBUSxDQUFDSyxJQUFJLENBQUNPLEdBQUQsQ0FBTCxDQUExQjs7QUFDQSxZQUFNQyxrQkFBZ0IsR0FBR0osT0FBTyxDQUFDTSxnQkFBUixDQUF5QnhCLFdBQXpCLEVBQW9DaUIsT0FBcEMsQ0FBekI7O0FBQ0FDLGVBQU8sQ0FBQ0ssTUFBUixDQUFldkIsV0FBZixFQUEwQnNCLGtCQUExQjtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ00sU0FBU0csT0FBVCxDQUFpQmxCLFNBQWpCLEVBQTRCVSxPQUE1QixFQUFxQztBQUFBLE1BQ2hDVCxLQURnQyxHQUNaRCxTQURZLENBQ2hDQyxLQURnQztBQUFBLE1BQ3pCQyxRQUR5QixHQUNaRixTQURZLENBQ3pCRSxRQUR5QjtBQUFBLE1BRWhDUyxPQUZnQyxHQUVwQkQsT0FGb0IsQ0FFaENDLE9BRmdDOztBQUd4QyxNQUFJVCxRQUFKLEVBQWM7QUFDVixRQUFJRSxLQUFLLENBQUNDLE9BQU4sQ0FBY0gsUUFBZCxDQUFKLEVBQTZCO0FBQ3pCLFdBQUssSUFBSVksQ0FBQyxHQUFHWixRQUFRLENBQUNJLE1BQVQsR0FBa0IsQ0FBL0IsRUFBa0NRLENBQUMsSUFBSSxDQUF2QyxFQUEwQ0EsQ0FBQyxFQUEzQyxFQUErQztBQUMzQyxZQUFNckIsU0FBUyxHQUFHUyxRQUFRLENBQUNZLENBQUQsQ0FBMUI7QUFDQSxZQUFNQyxnQkFBZ0IsR0FBR0osT0FBTyxDQUFDUSxpQkFBUixDQUEwQjFCLFNBQTFCLEVBQXFDaUIsT0FBckMsQ0FBekI7QUFDQSxZQUFNVSxNQUFNLEdBQUdULE9BQU8sQ0FBQ08sT0FBUixDQUFnQnpCLFNBQWhCLEVBQTJCc0IsZ0JBQTNCLENBQWY7O0FBQ0EsWUFBSUssTUFBSixFQUFZO0FBQ1IsaUJBQU8sSUFBUDtBQUNIO0FBQ0o7QUFDSixLQVRELE1BVUs7QUFDRCxVQUFNYixJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZTCxRQUFaLENBQWI7O0FBQ0EsV0FBSyxJQUFJWSxHQUFDLEdBQUdQLElBQUksQ0FBQ0QsTUFBTCxHQUFjLENBQTNCLEVBQThCUSxHQUFDLElBQUksQ0FBbkMsRUFBc0NBLEdBQUMsRUFBdkMsRUFBMkM7QUFDdkMsWUFBTXJCLFdBQVMsR0FBR1MsUUFBUSxDQUFDSyxJQUFJLENBQUNPLEdBQUQsQ0FBTCxDQUExQjs7QUFDQSxZQUFNQyxrQkFBZ0IsR0FBR0osT0FBTyxDQUFDUSxpQkFBUixDQUEwQjFCLFdBQTFCLEVBQXFDaUIsT0FBckMsQ0FBekI7O0FBQ0EsWUFBTVUsT0FBTSxHQUFHVCxPQUFPLENBQUNPLE9BQVIsQ0FBZ0J6QixXQUFoQixFQUEyQnNCLGtCQUEzQixDQUFmOztBQUNBLFlBQUlLLE9BQUosRUFBWTtBQUNSLGlCQUFPLElBQVA7QUFDSDtBQUNKO0FBQ0o7QUFDSjs7QUFDRCxNQUFJbkIsS0FBSixFQUFXO0FBQ1AsUUFBTVcsWUFBWSxHQUFHRCxPQUFPLENBQUNRLGlCQUFSLENBQTBCbEIsS0FBMUIsRUFBaUNTLE9BQWpDLENBQXJCOztBQUNBLFFBQU1VLFFBQU0sR0FBR1QsT0FBTyxDQUFDTyxPQUFSLENBQWdCakIsS0FBaEIsRUFBdUJXLFlBQXZCLENBQWY7O0FBQ0EsUUFBSVEsUUFBSixFQUFZO0FBQ1IsYUFBTyxJQUFQO0FBQ0g7QUFDSjs7QUFDRCxTQUFPLEtBQVA7QUFDSDtBQUNNLFNBQVNDLHVCQUFULENBQWlDVixPQUFqQyxFQUEwQztBQUM3Q0EsU0FBTyxDQUFDVyxjQUFSLENBQXVCQyxHQUF2QixDQUEyQjFCLFNBQTNCLEVBQXNDbUIsTUFBdEM7QUFDQUwsU0FBTyxDQUFDYSxjQUFSLENBQXVCRCxHQUF2QixDQUEyQjFCLFNBQTNCLEVBQXNDWSxNQUF0QztBQUNBRSxTQUFPLENBQUNjLGVBQVIsQ0FBd0JGLEdBQXhCLENBQTRCMUIsU0FBNUIsRUFBdUNxQixPQUF2QztBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvR0Q7QUFDQTtBQUNBLElBQU1RLFlBQVksR0FBR0MsbURBQUEsRUFBckI7O0lBQ3FCQyxNO0FBQ2pCLGtCQUFZakIsT0FBWixFQUFxQjtBQUFBOztBQUFBOztBQUNqQixTQUFLN0IsS0FBTCxHQUFhLEdBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsR0FBZDtBQUNBLFNBQUs4QyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLElBQXRCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FBQyxDQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjUixtREFBQSxFQUFkOztBQUNBLFNBQUtTLGNBQUwsR0FBc0IsVUFBQ0YsSUFBRCxFQUFVO0FBQzVCLFVBQU1HLFNBQVMsR0FBRyxLQUFJLENBQUNILElBQUwsS0FBYyxDQUFDLENBQWYsR0FBbUIsQ0FBbkIsR0FBdUJBLElBQUksR0FBRyxLQUFJLENBQUNBLElBQXJEO0FBQ0EsV0FBSSxDQUFDQSxJQUFMLEdBQVlBLElBQVo7O0FBQ0EsV0FBSSxDQUFDSSxXQUFMLENBQWlCRCxTQUFTLEdBQUcsSUFBN0I7QUFDSCxLQUpEOztBQUtBLFNBQUsxQixPQUFMLEdBQWVBLE9BQWY7QUFDQVUsa0ZBQXVCLENBQUMsS0FBS1YsT0FBTixDQUF2QjtBQUNIOzs7OzZCQUNnQjtBQUFBLFVBQVZ1QixJQUFVLHVFQUFILENBQUc7O0FBQ2IsVUFBSSxDQUFDLEtBQUtLLElBQVYsRUFBZ0I7QUFDWjtBQUNIOztBQUNELFVBQU1DLElBQUksR0FBRztBQUNUN0IsZUFBTyxFQUFFLEtBQUtBLE9BREw7QUFFVHVCLFlBQUksRUFBSkEsSUFGUztBQUdUTyxhQUFLLEVBQUU7QUFIRSxPQUFiO0FBS0EsVUFBTS9CLE9BQU8sR0FBRyxLQUFLQyxPQUFMLENBQWFNLGdCQUFiLENBQThCLEtBQUtzQixJQUFuQyxFQUF5Q0MsSUFBekMsQ0FBaEI7QUFDQSxXQUFLN0IsT0FBTCxDQUFhSyxNQUFiLENBQW9CLEtBQUt1QixJQUF6QixFQUErQjdCLE9BQS9CO0FBQ0g7Ozs2QkFDUTtBQUNMLFVBQUksQ0FBQyxLQUFLNkIsSUFBVixFQUFnQjtBQUNaO0FBQ0g7O0FBQ0QsV0FBSzVCLE9BQUwsQ0FBYStCLEtBQWI7QUFDQSxVQUFNRixJQUFJLEdBQUc7QUFDVDdCLGVBQU8sRUFBRSxLQUFLQSxPQURMO0FBRVQ4QixhQUFLLEVBQUUsQ0FGRTtBQUdUTixjQUFNLEVBQUUsS0FBS0EsTUFISjtBQUlUUSxzQkFBYyxFQUFFOUUsMkRBQUE7QUFKUCxPQUFiO0FBTUEsVUFBTTZDLE9BQU8sR0FBRyxLQUFLQyxPQUFMLENBQWFFLGdCQUFiLENBQThCLEtBQUswQixJQUFuQyxFQUF5Q0MsSUFBekMsQ0FBaEI7QUFDQSxXQUFLN0IsT0FBTCxDQUFhRixNQUFiLENBQW9CLEtBQUs4QixJQUF6QixFQUErQjdCLE9BQS9CO0FBQ0g7OztpQ0FDWTtBQUNULFVBQU0xQixVQUFVLEdBQUc0RCxNQUFNLENBQUNDLGdCQUExQjtBQURTLFVBRUQvRCxLQUZDLEdBRTZCLElBRjdCLENBRURBLEtBRkM7QUFBQSxVQUVNQyxNQUZOLEdBRTZCLElBRjdCLENBRU1BLE1BRk47QUFBQSxVQUVjOEMsVUFGZCxHQUU2QixJQUY3QixDQUVjQSxVQUZkO0FBR1QsVUFBSWlCLFdBQVcsR0FBRzVELElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxLQUFYLENBQWxCO0FBQ0EsVUFBSWlFLFlBQVksR0FBRzdELElBQUksQ0FBQ0MsS0FBTCxDQUFXSixNQUFYLENBQW5COztBQUNBLFVBQUk4QyxVQUFKLEVBQWdCO0FBQ1ppQixtQkFBVyxHQUFHRixNQUFNLENBQUNJLFVBQXJCO0FBQ0FELG9CQUFZLEdBQUdILE1BQU0sQ0FBQ0ssV0FBdEI7QUFDSDs7QUFDRCxXQUFLZCxNQUFMLENBQVl2RSxDQUFaLEdBQWdCb0IsVUFBaEI7QUFDQSxXQUFLbUQsTUFBTCxDQUFZZSxDQUFaLEdBQWdCbEUsVUFBaEI7QUFDQSxXQUFLMkIsT0FBTCxDQUFhd0MsT0FBYixDQUFxQkwsV0FBckIsRUFBa0NDLFlBQWxDLEVBQWdEL0QsVUFBaEQ7QUFDSDs7O2tDQUNxQjtBQUFBLFVBQVZrRCxJQUFVLHVFQUFILENBQUc7O0FBQ2xCLFVBQUksS0FBS0QsTUFBVCxFQUFpQjtBQUNiO0FBQ0g7O0FBQ0QsV0FBS21CLFVBQUw7O0FBQ0EsVUFBSSxLQUFLdEIsYUFBVCxFQUF3QjtBQUNwQixhQUFLZCxNQUFMLENBQVlrQixJQUFaO0FBQ0g7O0FBQ0QsVUFBSSxLQUFLSCxhQUFULEVBQXdCO0FBQ3BCLGFBQUt0QixNQUFMO0FBQ0g7O0FBQ0QsV0FBSzRDLGVBQUw7QUFDSDs7O3NDQUNpQjtBQUNkQywyQkFBcUIsQ0FBQyxLQUFLbEIsY0FBTixDQUFyQjtBQUNIOzs7eUNBQ29CbUIsSyxFQUFPO0FBQ3hCLFVBQUksS0FBS3RCLE1BQVQsRUFBaUI7QUFDYjtBQUNIOztBQUNELFVBQUksQ0FBQyxLQUFLRCxjQUFWLEVBQTBCO0FBQ3RCO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDLEtBQUtPLElBQVYsRUFBZ0I7QUFDWjtBQUNIOztBQVR1QixVQVVoQmlCLElBVmdCLEdBVUlELEtBVkosQ0FVaEJDLElBVmdCO0FBQUEsVUFVVkMsRUFWVSxHQVVJRixLQVZKLENBVVZFLEVBVlU7QUFBQSxVQVVOQyxDQVZNLEdBVUlILEtBVkosQ0FVTkcsQ0FWTTtBQUFBLFVBVUhDLENBVkcsR0FVSUosS0FWSixDQVVISSxDQVZHO0FBV3hCLFVBQU1uQixJQUFJLEdBQUc7QUFDVDdCLGVBQU8sRUFBRSxLQUFLQSxPQURMO0FBRVQ4QixhQUFLLEVBQUUsQ0FGRTtBQUdUTixjQUFNLEVBQUVULFlBSEM7QUFJVGtDLGFBQUssRUFBRTtBQUFFRixXQUFDLEVBQURBLENBQUY7QUFBS0MsV0FBQyxFQUFEQTtBQUFMLFNBSkU7QUFLVEUsY0FBTSxFQUFFO0FBQUVILFdBQUMsRUFBREEsQ0FBRjtBQUFLQyxXQUFDLEVBQURBO0FBQUwsU0FMQztBQU1USCxZQUFJLEVBQUpBLElBTlM7QUFPVEMsVUFBRSxFQUFGQTtBQVBTLE9BQWI7QUFTQSxVQUFNL0MsT0FBTyxHQUFHLEtBQUtDLE9BQUwsQ0FBYVEsaUJBQWIsQ0FBK0IsS0FBS29CLElBQXBDLEVBQTBDQyxJQUExQyxDQUFoQjtBQUNBLFdBQUs3QixPQUFMLENBQWFPLE9BQWIsQ0FBcUIsS0FBS3FCLElBQTFCLEVBQWdDN0IsT0FBaEM7QUFDSDs7OzJCQUNNO0FBQ0hvRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaOztBQUNBLFVBQUksS0FBSzlCLE1BQVQsRUFBaUI7QUFDYixhQUFLQyxJQUFMLEdBQVksQ0FBQyxDQUFiO0FBQ0EsYUFBS0QsTUFBTCxHQUFjLEtBQWQ7QUFDQSxhQUFLb0IsZUFBTDtBQUNIO0FBQ0o7Ozs0QkFDTztBQUNKUyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsV0FBSzlCLE1BQUwsR0FBYyxJQUFkO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9HTDtBQUNPLElBQU0rQixTQUFiO0FBQ0ksdUJBQWM7QUFBQTs7QUFDVixTQUFLQyxTQUFMLEdBQWlCLElBQUlDLEdBQUosRUFBakI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlDLEdBQUosRUFBakI7QUFDSDs7QUFKTDtBQUFBO0FBQUEsd0JBS1FDLEtBTFIsRUFLZTtBQUNQLFVBQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1IsZUFBTyxJQUFQO0FBQ0g7O0FBQ0QsVUFBSUMsUUFBUSxHQUFHLEtBQUtMLFNBQUwsQ0FBZU0sR0FBZixDQUFtQkYsS0FBbkIsQ0FBZjs7QUFDQSxVQUFJLENBQUNDLFFBQUwsRUFBZTtBQUNYQSxnQkFBUSxHQUFHLEtBQUtFLE9BQUwsQ0FBYUgsS0FBYixDQUFYO0FBQ0EsYUFBS0osU0FBTCxDQUFlMUMsR0FBZixDQUFtQjhDLEtBQW5CLEVBQTBCQyxRQUExQjtBQUNIOztBQUNELGFBQU9BLFFBQVA7QUFDSDtBQWZMO0FBQUE7QUFBQSx3QkFnQlFELEtBaEJSLEVBZ0JlQyxRQWhCZixFQWdCeUI7QUFDakIsV0FBS0wsU0FBTCxDQUFlMUMsR0FBZixDQUFtQjhDLEtBQW5CLEVBQTBCQyxRQUExQjtBQUNIO0FBbEJMO0FBQUE7QUFBQSwyQkFtQldELEtBbkJYLEVBbUJrQjtBQUNWLFdBQUtKLFNBQUwsV0FBc0JJLEtBQXRCO0FBQ0g7QUFyQkw7QUFBQTtBQUFBLDRCQXNCWTtBQUNKLFdBQUtKLFNBQUwsQ0FBZXZCLEtBQWY7QUFDSDtBQXhCTDtBQUFBO0FBQUEsNEJBeUJZMkIsS0F6QlosRUF5Qm1CO0FBQUEsaURBQ1ksS0FBS0YsU0FEakI7QUFBQTs7QUFBQTtBQUNYLDREQUF1QztBQUFBLGNBQTVCTSxRQUE0QjtBQUNuQyxjQUFNSCxRQUFRLEdBQUdHLFFBQVEsQ0FBQ0osS0FBRCxDQUF6Qjs7QUFDQSxjQUFJQyxRQUFKLEVBQWM7QUFDVixtQkFBT0EsUUFBUDtBQUNIO0FBQ0o7QUFOVTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU9YSSwrREFBQSxrQ0FBd0NMLEtBQXhDO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFsQ0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFDcUIvRSxPO0FBQ2pCLHFCQUFjO0FBQUE7O0FBQ1YsU0FBS3FGLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxTQUFLckQsY0FBTCxHQUFzQixJQUFJNEMsR0FBSixFQUF0QjtBQUNBLFNBQUsxQyxjQUFMLEdBQXNCLElBQUkwQyxHQUFKLEVBQXRCO0FBQ0EsU0FBS3pDLGVBQUwsR0FBdUIsSUFBSXlDLEdBQUosRUFBdkI7QUFDQSxTQUFLVSxnQkFBTCxHQUF3QixJQUFJVixHQUFKLEVBQXhCO0FBQ0EsU0FBS0QsU0FBTCxHQUFpQixJQUFJRCxpREFBSixFQUFqQjtBQUNIOzs7OzJCQUNNdkUsUyxFQUFXaUIsTyxFQUFTO0FBQ3ZCLFVBQUlBLE9BQU8sQ0FBQytCLEtBQVIsR0FBZ0IsS0FBS2tDLFdBQXpCLEVBQXNDO0FBQ2xDO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDcEYsc0VBQUEsQ0FBb0JFLFNBQXBCLENBQUwsRUFBcUM7QUFDakM7QUFDSDs7QUFDRCxXQUFLbUYsZ0JBQUwsQ0FBc0JDLE9BQXRCLENBQThCLFVBQUNDLE9BQUQsRUFBVUMsUUFBVixFQUF1QjtBQUNqRCxZQUFJdEYsU0FBUyxDQUFDc0YsUUFBRCxDQUFiLEVBQXlCO0FBQ3JCRCxpQkFBTyxDQUFDckYsU0FBRCxFQUFZaUIsT0FBWixDQUFQO0FBQ0g7QUFDSixPQUpEOztBQUtBLFVBQUlqQixTQUFTLENBQUN1RixRQUFkLEVBQXdCO0FBQ3BCdkYsaUJBQVMsQ0FBQ3VGLFFBQVYsQ0FBbUJ0RSxPQUFPLENBQUN3QixJQUEzQjtBQUNIOztBQUNELFVBQU00QyxPQUFPLEdBQUcsS0FBS3hELGNBQUwsQ0FBb0JpRCxHQUFwQixDQUF3QjlFLFNBQVMsQ0FBQytELElBQWxDLENBQWhCOztBQUNBLFVBQUlzQixPQUFKLEVBQWE7QUFDVEEsZUFBTyxDQUFDckYsU0FBRCxFQUFZaUIsT0FBWixDQUFQO0FBQ0g7QUFDSjs7OzJCQUNNakIsUyxFQUFXaUIsTyxFQUFTO0FBQ3ZCLFVBQUlBLE9BQU8sQ0FBQytCLEtBQVIsR0FBZ0IsS0FBS2tDLFdBQXpCLEVBQXNDO0FBQ2xDO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDcEYsc0VBQUEsQ0FBb0JFLFNBQXBCLENBQUwsRUFBcUM7QUFDakM7QUFDSDs7QUFDRCxVQUFNcUYsT0FBTyxHQUFHLEtBQUt0RCxjQUFMLENBQW9CK0MsR0FBcEIsQ0FBd0I5RSxTQUFTLENBQUMrRCxJQUFsQyxDQUFoQjs7QUFDQSxVQUFJc0IsT0FBSixFQUFhO0FBQ1RBLGVBQU8sQ0FBQ3JGLFNBQUQsRUFBWWlCLE9BQVosQ0FBUDtBQUNIO0FBQ0o7Ozs0QkFDT2pCLFMsRUFBV2lCLE8sRUFBUztBQUN4QixVQUFJQSxPQUFPLENBQUMrQixLQUFSLEdBQWdCLEtBQUtrQyxXQUF6QixFQUFzQztBQUNsQyxlQUFPLEtBQVA7QUFDSDs7QUFDRCxVQUFJLENBQUNwRixzRUFBQSxDQUFvQkUsU0FBcEIsQ0FBTCxFQUFxQztBQUNqQyxlQUFPLEtBQVA7QUFDSDs7QUFDRCxVQUFJLENBQUN3Rix5RUFBQSxDQUF5QnhGLFNBQXpCLENBQUwsRUFBMEM7QUFDdEMsZUFBTyxLQUFQO0FBQ0g7O0FBQ0QsVUFBTXFGLE9BQU8sR0FBRyxLQUFLckQsZUFBTCxDQUFxQjhDLEdBQXJCLENBQXlCOUUsU0FBUyxDQUFDK0QsSUFBbkMsQ0FBaEI7O0FBQ0EsVUFBSXNCLE9BQUosRUFBYTtBQUFBLDZCQUNRcEUsT0FBTyxDQUFDa0QsS0FEaEI7QUFBQSxZQUNERixDQURDLGtCQUNEQSxDQURDO0FBQUEsWUFDRUMsQ0FERixrQkFDRUEsQ0FERjtBQUVULFlBQU12QyxNQUFNLEdBQUcwRCxPQUFPLENBQUNyRixTQUFELEVBQVlpQixPQUFaLENBQXRCOztBQUNBLFlBQUlVLE1BQUosRUFBWTtBQUNSNkQsZ0ZBQUEsQ0FBc0J4RixTQUF0QixFQUFpQ2lCLE9BQU8sQ0FBQzhDLElBQXpDLEVBQStDRSxDQUEvQyxFQUFrREMsQ0FBbEQsRUFBcURqRCxPQUFPLENBQUMrQyxFQUE3RDtBQUNIOztBQUNELFlBQUkvQyxPQUFPLENBQUM4QyxJQUFSLEtBQWlCLGFBQXJCLEVBQW9DO0FBQ2hDLGNBQUlwQyxNQUFNLElBQUksQ0FBQzNCLFNBQVMsQ0FBQ3lGLFdBQXpCLEVBQXNDO0FBQ2xDRCxrRkFBQSxDQUFzQnhGLFNBQXRCLEVBQWlDLGFBQWpDLEVBQWdEaUUsQ0FBaEQsRUFBbURDLENBQW5ELEVBQXNEakQsT0FBTyxDQUFDK0MsRUFBOUQ7QUFDSCxXQUZELE1BR0ssSUFBSSxDQUFDckMsTUFBRCxJQUFXM0IsU0FBUyxDQUFDeUYsV0FBekIsRUFBc0M7QUFDdkNELGtGQUFBLENBQXNCeEYsU0FBdEIsRUFBaUMsWUFBakMsRUFBK0NpRSxDQUEvQyxFQUFrREMsQ0FBbEQsRUFBcURqRCxPQUFPLENBQUMrQyxFQUE3RDtBQUNIOztBQUNEaEUsbUJBQVMsQ0FBQ3lGLFdBQVYsR0FBd0I5RCxNQUF4QjtBQUNIOztBQUNELGVBQU9BLE1BQVA7QUFDSDs7QUFDRCxhQUFPLEtBQVA7QUFDSDs7O3FDQUNnQjNCLFMsRUFBVzBGLE0sRUFBUTtBQUNoQyxhQUFPO0FBQ0hqRCxZQUFJLEVBQUVpRCxNQUFNLENBQUNqRCxJQURWO0FBRUhPLGFBQUssRUFBRTBDLE1BQU0sQ0FBQzFDLEtBQVAsR0FBZSxDQUZuQjtBQUdIOUIsZUFBTyxFQUFFd0UsTUFBTSxDQUFDeEU7QUFIYixPQUFQO0FBS0g7OztxQ0FDZ0JsQixTLEVBQVcwRixNLEVBQVE7QUFDaEMsVUFBTWhELE1BQU0sR0FBR2lELHNFQUFBLENBQW9CM0YsU0FBcEIsQ0FBZjtBQUNBLFVBQU1rRCxjQUFjLEdBQUd5Qyw4RUFBQSxDQUE0QjNGLFNBQTVCLENBQXZCO0FBQ0EsYUFBTztBQUNIZ0QsYUFBSyxFQUFFMEMsTUFBTSxDQUFDMUMsS0FBUCxHQUFlLENBRG5CO0FBRUg5QixlQUFPLEVBQUV3RSxNQUFNLENBQUN4RSxPQUZiO0FBR0h3QixjQUFNLEVBQUVSLG9EQUFBLENBQWN3RCxNQUFNLENBQUNoRCxNQUFyQixFQUE2QkEsTUFBN0IsQ0FITDtBQUlIUSxzQkFBYyxFQUFFOUUsNERBQUEsQ0FBc0JzSCxNQUFNLENBQUN4QyxjQUE3QixFQUE2Q0EsY0FBN0M7QUFKYixPQUFQO0FBTUg7OztzQ0FDaUJsRCxTLEVBQVcwRixNLEVBQVE7QUFDakMsVUFBTWhELE1BQU0sR0FBR2lELHNFQUFBLENBQW9CM0YsU0FBcEIsQ0FBZjtBQUNBLFVBQU00RixpQkFBaUIsR0FBRzFELG9EQUFBLENBQWN3RCxNQUFNLENBQUNoRCxNQUFyQixFQUE2QkEsTUFBN0IsQ0FBMUI7QUFDQSxhQUFPO0FBQ0hNLGFBQUssRUFBRTBDLE1BQU0sQ0FBQzFDLEtBQVAsR0FBZSxDQURuQjtBQUVIZSxZQUFJLEVBQUUyQixNQUFNLENBQUMzQixJQUZWO0FBR0g3QyxlQUFPLEVBQUV3RSxNQUFNLENBQUN4RSxPQUhiO0FBSUhrRCxjQUFNLEVBQUVzQixNQUFNLENBQUN0QixNQUpaO0FBS0gxQixjQUFNLEVBQUVrRCxpQkFMTDtBQU1IekIsYUFBSyxFQUFFakMsbUVBQUEsQ0FBNkIwRCxpQkFBN0IsRUFBZ0RGLE1BQU0sQ0FBQ3RCLE1BQXZEO0FBTkosT0FBUDtBQVFIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYk8sU0FBU3lCLDZCQUFULENBQXVDQyxNQUF2QyxFQUErQyxDQUNyRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RELFNBQVNDLGFBQVQsQ0FBdUJELE1BQXZCLEVBQStCaEMsS0FBL0IsRUFBc0NDLElBQXRDLEVBQTRDO0FBQUEsTUFDaENpQyxPQURnQyxHQUNwQkYsTUFBTSxDQUFDNUUsT0FEYSxDQUNoQzhFLE9BRGdDO0FBRXhDLE1BQU1DLFVBQVUsR0FBR0QsT0FBTyxDQUFDRSxxQkFBUixFQUFuQjtBQUNBLE1BQU1qQyxDQUFDLEdBQUdILEtBQUssQ0FBQ3FDLE9BQU4sR0FBZ0JGLFVBQVUsQ0FBQ0csSUFBM0IsR0FBa0NKLE9BQU8sQ0FBQ0ssVUFBcEQ7QUFDQSxNQUFNbkMsQ0FBQyxHQUFHSixLQUFLLENBQUN3QyxPQUFOLEdBQWdCTCxVQUFVLENBQUNNLEdBQTNCLEdBQWlDUCxPQUFPLENBQUNRLFNBQW5EO0FBQ0FWLFFBQU0sQ0FBQ1csb0JBQVAsQ0FBNEI7QUFDeEIxQyxRQUFJLEVBQUpBLElBRHdCO0FBQ2xCRSxLQUFDLEVBQURBLENBRGtCO0FBQ2ZDLEtBQUMsRUFBREE7QUFEZSxHQUE1QjtBQUdBSixPQUFLLENBQUM0QyxjQUFOO0FBQ0g7O0FBQ00sU0FBU0MsMEJBQVQsQ0FBb0NiLE1BQXBDLEVBQTRDO0FBQUEsTUFDdkNFLE9BRHVDLEdBQzNCRixNQUFNLENBQUM1RSxPQURvQixDQUN2QzhFLE9BRHVDO0FBRS9DQSxTQUFPLENBQUNZLGdCQUFSLENBQXlCLFdBQXpCLEVBQXNDLFVBQUM5QyxLQUFELEVBQVc7QUFDN0NpQyxpQkFBYSxDQUFDRCxNQUFELEVBQVNoQyxLQUFULEVBQWdCLGFBQWhCLENBQWI7QUFDSCxHQUZEO0FBR0FrQyxTQUFPLENBQUNZLGdCQUFSLENBQXlCLFNBQXpCLEVBQW9DLFVBQUM5QyxLQUFELEVBQVc7QUFDM0NpQyxpQkFBYSxDQUFDRCxNQUFELEVBQVNoQyxLQUFULEVBQWdCLFdBQWhCLENBQWI7QUFDSCxHQUZEO0FBR0FrQyxTQUFPLENBQUNZLGdCQUFSLENBQXlCLFdBQXpCLEVBQXNDLFVBQUM5QyxLQUFELEVBQVc7QUFDN0NpQyxpQkFBYSxDQUFDRCxNQUFELEVBQVNoQyxLQUFULEVBQWdCLGFBQWhCLENBQWI7QUFDSCxHQUZEO0FBR0gsQzs7Ozs7Ozs7Ozs7Ozs7O0FDckJELFNBQVNpQyxhQUFULENBQXVCRCxNQUF2QixFQUErQmhDLEtBQS9CLEVBQXNDQyxJQUF0QyxFQUE0QztBQUFBLE1BQ2hDaUMsT0FEZ0MsR0FDcEJGLE1BQU0sQ0FBQzVFLE9BRGEsQ0FDaEM4RSxPQURnQztBQUV4QyxNQUFNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQ0UscUJBQVIsRUFBbkI7O0FBQ0EsT0FBSyxJQUFJN0UsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3lDLEtBQUssQ0FBQytDLGNBQU4sQ0FBcUJoRyxNQUF6QyxFQUFpRFEsQ0FBQyxFQUFsRCxFQUFzRDtBQUNsRCxRQUFNeUYsS0FBSyxHQUFHaEQsS0FBSyxDQUFDK0MsY0FBTixDQUFxQnhGLENBQXJCLENBQWQ7QUFDQSxRQUFNNEMsQ0FBQyxHQUFHNkMsS0FBSyxDQUFDWCxPQUFOLEdBQWdCRixVQUFVLENBQUNHLElBQTNCLEdBQWtDSixPQUFPLENBQUNLLFVBQXBEO0FBQ0EsUUFBTW5DLENBQUMsR0FBRzRDLEtBQUssQ0FBQ1IsT0FBTixHQUFnQkwsVUFBVSxDQUFDTSxHQUEzQixHQUFpQ1AsT0FBTyxDQUFDUSxTQUFuRDtBQUNBLFFBQU14QyxFQUFFLEdBQUc4QyxLQUFLLENBQUNDLFVBQWpCO0FBQ0FqQixVQUFNLENBQUNXLG9CQUFQLENBQTRCO0FBQ3hCMUMsVUFBSSxFQUFKQSxJQUR3QjtBQUNsQkUsT0FBQyxFQUFEQSxDQURrQjtBQUNmQyxPQUFDLEVBQURBLENBRGU7QUFDWkYsUUFBRSxFQUFGQTtBQURZLEtBQTVCO0FBR0g7O0FBQ0RGLE9BQUssQ0FBQzRDLGNBQU47QUFDSDs7QUFDTSxTQUFTTSwwQkFBVCxDQUFvQ2xCLE1BQXBDLEVBQTRDO0FBQUEsTUFDdkNFLE9BRHVDLEdBQzNCRixNQUFNLENBQUM1RSxPQURvQixDQUN2QzhFLE9BRHVDO0FBRS9DQSxTQUFPLENBQUNZLGdCQUFSLENBQXlCLFlBQXpCLEVBQXVDLFVBQUM5QyxLQUFELEVBQVc7QUFDOUNpQyxpQkFBYSxDQUFDRCxNQUFELEVBQVNoQyxLQUFULEVBQWdCLGFBQWhCLENBQWI7QUFDSCxHQUZEO0FBR0FrQyxTQUFPLENBQUNZLGdCQUFSLENBQXlCLFVBQXpCLEVBQXFDLFVBQUM5QyxLQUFELEVBQVc7QUFDNUNpQyxpQkFBYSxDQUFDRCxNQUFELEVBQVNoQyxLQUFULEVBQWdCLFdBQWhCLENBQWI7QUFDSCxHQUZEO0FBR0FrQyxTQUFPLENBQUNZLGdCQUFSLENBQXlCLFdBQXpCLEVBQXNDLFVBQUM5QyxLQUFELEVBQVc7QUFDN0NpQyxpQkFBYSxDQUFDRCxNQUFELEVBQVNoQyxLQUFULEVBQWdCLGFBQWhCLENBQWI7QUFDSCxHQUZEO0FBR0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Qk0sSUFBSW1ELEtBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxLQUFWLEVBQWlCO0FBQ2QsV0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQXFCOUgsS0FBckIsRUFBNEI7QUFBQSxRQUNoQitILE1BRGdCLEdBQ0xELEtBREssQ0FDaEJDLE1BRGdCOztBQUV4QixRQUFJQSxNQUFKLEVBQVk7QUFDUixhQUFPLENBQUNBLE1BQUQsR0FBVS9ILEtBQWpCO0FBQ0g7O0FBQ0QsV0FBTyxDQUFQO0FBQ0g7O0FBQ0Q0SCxPQUFLLENBQUNDLElBQU4sR0FBYUEsSUFBYjs7QUFDQSxXQUFTRyxJQUFULENBQWNGLEtBQWQsRUFBcUI3SCxNQUFyQixFQUE2QjtBQUFBLFFBQ2pCZ0ksTUFEaUIsR0FDTkgsS0FETSxDQUNqQkcsTUFEaUI7O0FBRXpCLFFBQUlBLE1BQUosRUFBWTtBQUNSLGFBQU8sQ0FBQ0EsTUFBRCxHQUFVaEksTUFBakI7QUFDSDs7QUFDRCxXQUFPLENBQVA7QUFDSDs7QUFDRDJILE9BQUssQ0FBQ0ksSUFBTixHQUFhQSxJQUFiO0FBQ0gsQ0FqQkQsRUFpQkdKLEtBQUssS0FBS0EsS0FBSyxHQUFHLEVBQWIsQ0FqQlIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDTyxJQUFJekIsT0FBSjs7QUFDUCxDQUFDLFVBQVVBLE9BQVYsRUFBbUI7QUFDaEIsV0FBUytCLGFBQVQsQ0FBdUJDLE9BQXZCLEVBQWdDO0FBQzVCLFdBQU8sQ0FBQyxDQUFDQSxPQUFPLENBQUMvQixXQUFqQjtBQUNIOztBQUNERCxTQUFPLENBQUMrQixhQUFSLEdBQXdCQSxhQUF4Qjs7QUFDQSxXQUFTRSxnQkFBVCxDQUEwQkQsT0FBMUIsRUFBbUM7QUFBQTs7QUFDL0Isb0NBQU9BLE9BQU8sQ0FBQ2pGLGNBQWYseUVBQWlDLElBQWpDO0FBQ0g7O0FBQ0RpRCxTQUFPLENBQUNpQyxnQkFBUixHQUEyQkEsZ0JBQTNCOztBQUNBLFdBQVMxQixhQUFULENBQXVCeUIsT0FBdkIsRUFBZ0N6RCxJQUFoQyxFQUFzQ0UsQ0FBdEMsRUFBeUNDLENBQXpDLEVBQTRDRixFQUE1QyxFQUFnRDtBQUM1QyxRQUFNMEQsV0FBVyxlQUFRM0QsSUFBSSxDQUFDNEQsTUFBTCxDQUFZLENBQVosRUFBZUMsV0FBZixFQUFSLFNBQXVDN0QsSUFBSSxDQUFDOEQsS0FBTCxDQUFXLENBQVgsQ0FBdkMsQ0FBakI7O0FBQ0EsUUFBSUgsV0FBSixFQUFpQjtBQUNiLFVBQU1yQyxPQUFPLEdBQUdtQyxPQUFPLENBQUNFLFdBQUQsQ0FBdkI7O0FBQ0EsVUFBSXJDLE9BQUosRUFBYTtBQUNULFlBQU12QixLQUFLLEdBQUc7QUFDVkMsY0FBSSxFQUFKQSxJQURVO0FBQ0pFLFdBQUMsRUFBREEsQ0FESTtBQUNEQyxXQUFDLEVBQURBLENBREM7QUFDRUYsWUFBRSxFQUFGQTtBQURGLFNBQWQ7QUFHQXFCLGVBQU8sQ0FBQ3ZCLEtBQUQsQ0FBUDtBQUNIO0FBQ0osS0FSRCxNQVNLO0FBQ0RtQiwrREFBQSxvQ0FBMENsQixJQUExQztBQUNIO0FBQ0o7O0FBQ0R5QixTQUFPLENBQUNPLGFBQVIsR0FBd0JBLGFBQXhCO0FBQ0gsQ0F6QkQsRUF5QkdQLE9BQU8sS0FBS0EsT0FBTyxHQUFHLEVBQWYsQ0F6QlYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGTyxJQUFJc0MsTUFBSjs7QUFDUCxDQUFDLFVBQVVBLE1BQVYsRUFBa0I7QUFDZixXQUFTQyxXQUFULENBQXFCQyxNQUFyQixFQUE2Qi9HLE9BQTdCLEVBQXNDO0FBQUEsUUFDMUJnSCxHQUQwQixHQUNsQkQsTUFEa0IsQ0FDMUJDLEdBRDBCOztBQUVsQyxRQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNOLGFBQU8sSUFBUDtBQUNIOztBQUNELFdBQU9oSCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JzRCxTQUFoQixDQUEwQk0sR0FBMUIsQ0FBOEJtRCxHQUE5QixDQUFQO0FBQ0g7O0FBQ0RILFFBQU0sQ0FBQ0MsV0FBUCxHQUFxQkEsV0FBckI7O0FBQ0EsV0FBU0csUUFBVCxDQUFrQkYsTUFBbEIsRUFBMEIvRyxPQUExQixFQUFtQztBQUMvQixRQUFNNEQsUUFBUSxHQUFHa0QsV0FBVyxDQUFDQyxNQUFELEVBQVMvRyxPQUFULENBQTVCO0FBQ0EsV0FBTyxDQUFDLEVBQUM0RCxRQUFELGFBQUNBLFFBQUQsdUJBQUNBLFFBQVEsQ0FBRXNELE1BQVgsQ0FBUjtBQUNIOztBQUNETCxRQUFNLENBQUNJLFFBQVAsR0FBa0JBLFFBQWxCO0FBQ0gsQ0FkRCxFQWNHSixNQUFNLEtBQUtBLE1BQU0sR0FBRyxFQUFkLENBZFQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNETyxJQUFJbkMsU0FBSjs7QUFDUCxDQUFDLFVBQVVBLFNBQVYsRUFBcUI7QUFDbEIsV0FBU3lDLFNBQVQsQ0FBbUJDLFNBQW5CLEVBQThCO0FBQUE7O0FBQUEsUUFDbEIzRixNQURrQixHQUNQMkYsU0FETyxDQUNsQjNGLE1BRGtCOztBQUUxQixRQUFJQSxNQUFKLEVBQVk7QUFBQTs7QUFDUixhQUFPO0FBQ0h2RSxTQUFDLGVBQUV1RSxNQUFNLENBQUN2RSxDQUFULGlEQUFjLENBRFo7QUFFSEQsU0FBQyxlQUFFd0UsTUFBTSxDQUFDeEUsQ0FBVCxpREFBYyxDQUZaO0FBR0hvSyxTQUFDLGVBQUU1RixNQUFNLENBQUM0RixDQUFULGlEQUFjLENBSFo7QUFJSDdFLFNBQUMsZUFBRWYsTUFBTSxDQUFDZSxDQUFULGlEQUFjLENBSlo7QUFLSDhFLFVBQUUsZ0JBQUU3RixNQUFNLENBQUM2RixFQUFULG1EQUFlLENBTGQ7QUFNSEMsVUFBRSxnQkFBRTlGLE1BQU0sQ0FBQzhGLEVBQVQsbURBQWU7QUFOZCxPQUFQO0FBUUg7O0FBWHlCLFFBWWxCQyxRQVprQixHQVlMSixTQVpLLENBWWxCSSxRQVprQjtBQWExQixRQUFNQyxNQUFNLGdDQUFHTCxTQUFTLENBQUNLLE1BQWIsaUVBQXVCTCxTQUFTLENBQUNNLEtBQWpDLHVDQUEwQyxDQUF0RDtBQUNBLFFBQU1DLE1BQU0saUNBQUdQLFNBQVMsQ0FBQ08sTUFBYixpRUFBdUJQLFNBQVMsQ0FBQ00sS0FBakMseUNBQTBDLENBQXREO0FBQ0EsUUFBTUosRUFBRSxtQkFBR0YsU0FBUyxDQUFDcEUsQ0FBYix1REFBa0IsQ0FBMUI7QUFDQSxRQUFNdUUsRUFBRSxtQkFBR0gsU0FBUyxDQUFDbkUsQ0FBYix1REFBa0IsQ0FBMUI7O0FBQ0EsUUFBSXVFLFFBQUosRUFBYztBQUNWLFVBQU1JLEdBQUcsR0FBR3BKLElBQUksQ0FBQ29KLEdBQUwsQ0FBU0osUUFBVCxDQUFaO0FBQ0EsVUFBTUssR0FBRyxHQUFHckosSUFBSSxDQUFDcUosR0FBTCxDQUFTTCxRQUFULENBQVo7QUFDQSxhQUFPO0FBQ0h0SyxTQUFDLEVBQUUwSyxHQUFHLEdBQUdILE1BRE47QUFFSHhLLFNBQUMsRUFBRTRLLEdBQUcsR0FBR0osTUFGTjtBQUdISixTQUFDLEVBQUUsQ0FBQ1EsR0FBRCxHQUFPRixNQUhQO0FBSUhuRixTQUFDLEVBQUVvRixHQUFHLEdBQUdELE1BSk47QUFLSEwsVUFBRSxFQUFGQSxFQUxHO0FBTUhDLFVBQUUsRUFBRkE7QUFORyxPQUFQO0FBUUg7O0FBQ0QsV0FBTztBQUNIckssT0FBQyxFQUFFdUssTUFEQTtBQUVIeEssT0FBQyxFQUFFLENBRkE7QUFHSG9LLE9BQUMsRUFBRSxDQUhBO0FBSUg3RSxPQUFDLEVBQUVtRixNQUpBO0FBS0hMLFFBQUUsRUFBRkEsRUFMRztBQU1IQyxRQUFFLEVBQUZBO0FBTkcsS0FBUDtBQVFIOztBQUNEN0MsV0FBUyxDQUFDeUMsU0FBVixHQUFzQkEsU0FBdEI7O0FBQ0EsV0FBU1csaUJBQVQsQ0FBMkJWLFNBQTNCLEVBQXNDO0FBQUE7O0FBQUEsUUFDMUJuRixjQUQwQixHQUNQbUYsU0FETyxDQUMxQm5GLGNBRDBCOztBQUVsQyxRQUFJQSxjQUFKLEVBQW9CO0FBQUE7O0FBQ2hCLGFBQU87QUFDSHZFLHVCQUFlLDJCQUFFdUUsY0FBYyxDQUFDdkUsZUFBakIseUVBQW9DLENBRGhEO0FBRUhOLHFCQUFhLDJCQUFFNkUsY0FBYyxDQUFDN0UsYUFBakIseUVBQWtDLENBRjVDO0FBR0hFLHVCQUFlLDJCQUFFMkUsY0FBYyxDQUFDM0UsZUFBakIseUVBQW9DLENBSGhEO0FBSUhFLHNCQUFjLDJCQUFFeUUsY0FBYyxDQUFDekUsY0FBakIseUVBQW1DLENBSjlDO0FBS0hHLG1CQUFXLDRCQUFFc0UsY0FBYyxDQUFDdEUsV0FBakIsMkVBQWdDLENBTHhDO0FBTUhOLGlCQUFTLDJCQUFFNEUsY0FBYyxDQUFDNUUsU0FBakIseUVBQThCLENBTnBDO0FBT0hFLG1CQUFXLDRCQUFFMEUsY0FBYyxDQUFDMUUsV0FBakIsMkVBQWdDLENBUHhDO0FBUUhFLGtCQUFVLDJCQUFFd0UsY0FBYyxDQUFDeEUsVUFBakIseUVBQStCO0FBUnRDLE9BQVA7QUFVSDs7QUFiaUMsUUFjMUJzSyxJQWQwQixHQWNqQlgsU0FkaUIsQ0FjMUJXLElBZDBCOztBQWVsQyxRQUFJQSxJQUFKLEVBQVU7QUFBQTs7QUFBQSx3QkFDMkJBLElBRDNCLENBQ0VuTCxLQURGO0FBQUEsVUFDRUEsS0FERiw0QkFDVSxDQURWO0FBQUEsd0JBQzJCbUwsSUFEM0IsQ0FDYUMsS0FEYjtBQUFBLFVBQ2FBLEtBRGIsNEJBQ3FCLENBRHJCO0FBRU4sVUFBTUMsYUFBYSxHQUFHLElBQUlELEtBQTFCO0FBQ0EsVUFBTWpMLENBQUMsR0FBSUgsS0FBSyxJQUFJLEVBQVYsR0FBZ0IsSUFBMUI7QUFDQSxVQUFNSSxDQUFDLEdBQUlKLEtBQUssSUFBSSxDQUFWLEdBQWUsSUFBekI7QUFDQSxVQUFNSyxDQUFDLEdBQUdMLEtBQUssR0FBRyxJQUFsQjtBQUNBLGFBQU87QUFDSGMsdUJBQWUsc0JBQUUwSixTQUFTLENBQUN2SyxLQUFaLCtEQUFxQixDQURqQztBQUVITyxxQkFBYSxFQUFFNkssYUFGWjtBQUdIM0ssdUJBQWUsRUFBRTJLLGFBSGQ7QUFJSHpLLHNCQUFjLEVBQUV5SyxhQUpiO0FBS0h0SyxtQkFBVyxFQUFFLENBTFY7QUFNSE4saUJBQVMsRUFBRU4sQ0FBQyxHQUFHaUwsS0FOWjtBQU9IekssbUJBQVcsRUFBRVAsQ0FBQyxHQUFHZ0wsS0FQZDtBQVFIdkssa0JBQVUsRUFBRVIsQ0FBQyxHQUFHK0s7QUFSYixPQUFQO0FBVUg7O0FBQ0QsV0FBTztBQUNIdEsscUJBQWUsdUJBQUUwSixTQUFTLENBQUN2SyxLQUFaLGlFQUFxQixDQURqQztBQUVITyxtQkFBYSxFQUFFLENBRlo7QUFHSEUscUJBQWUsRUFBRSxDQUhkO0FBSUhFLG9CQUFjLEVBQUUsQ0FKYjtBQUtIRyxpQkFBVyxFQUFFLENBTFY7QUFNSE4sZUFBUyxFQUFFLENBTlI7QUFPSEUsaUJBQVcsRUFBRSxDQVBWO0FBUUhFLGdCQUFVLEVBQUU7QUFSVCxLQUFQO0FBVUg7O0FBQ0RpSCxXQUFTLENBQUNvRCxpQkFBVixHQUE4QkEsaUJBQTlCO0FBQ0gsQ0FwRkQsRUFvRkdwRCxTQUFTLEtBQUtBLFNBQVMsR0FBRyxFQUFqQixDQXBGWixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0RxQlYsSzs7Ozs7OzswQkFDRztBQUFBOztBQUNoQixrQkFBQVosT0FBTyxFQUFDQyxHQUFSO0FBQ0g7Ozs0QkFDcUI7QUFBQSx3Q0FBTjZFLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUNsQixVQUFNbkYsRUFBRSxHQUFHb0YsTUFBTSxDQUFDRCxJQUFELENBQWpCO0FBQ0EsVUFBSXpJLEtBQUssR0FBRyxLQUFLMkksTUFBTCxDQUFZdkUsR0FBWixDQUFnQmQsRUFBaEIsQ0FBWjs7QUFDQSxVQUFJLENBQUN0RCxLQUFMLEVBQVk7QUFBQTs7QUFDUkEsYUFBSyxHQUFHLENBQVI7O0FBQ0EscUJBQUEyRCxPQUFPLEVBQUNpRixLQUFSLGtCQUFpQkgsSUFBakI7QUFDSDs7QUFDRHpJLFdBQUs7QUFDTCxXQUFLMkksTUFBTCxDQUFZdkgsR0FBWixDQUFnQmtDLEVBQWhCLEVBQW9CdEQsS0FBcEI7QUFDSDs7OzhCQUN1QjtBQUFBLHlDQUFOeUksSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ3BCLFVBQU1uRixFQUFFLEdBQUdvRixNQUFNLENBQUNELElBQUQsQ0FBakI7QUFDQSxVQUFJekksS0FBSyxHQUFHLEtBQUs2SSxRQUFMLENBQWN6RSxHQUFkLENBQWtCZCxFQUFsQixDQUFaOztBQUNBLFVBQUksQ0FBQ3RELEtBQUwsRUFBWTtBQUFBOztBQUNSQSxhQUFLLEdBQUcsQ0FBUjs7QUFDQSxxQkFBQTJELE9BQU8sRUFBQ21GLElBQVIsa0JBQWdCTCxJQUFoQjtBQUNIOztBQUNEekksV0FBSztBQUNMLFdBQUs2SSxRQUFMLENBQWN6SCxHQUFkLENBQWtCa0MsRUFBbEIsRUFBc0J0RCxLQUF0QjtBQUNIOzs7Ozs7O0FBRUx1RSxLQUFLLENBQUNvRSxNQUFOLEdBQWUsSUFBSTVFLEdBQUosRUFBZjtBQUNBUSxLQUFLLENBQUNzRSxRQUFOLEdBQWlCLElBQUk5RSxHQUFKLEVBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJPLElBQUlnRixNQUFKOztBQUNQLENBQUMsVUFBVUEsTUFBVixFQUFrQjtBQUNmLFdBQVNDLEtBQVQsR0FBaUI7QUFDYixXQUFPO0FBQ0hDLFVBQUksRUFBRUMsTUFBTSxDQUFDQyxTQURWO0FBRUhDLFVBQUksRUFBRUYsTUFBTSxDQUFDQyxTQUZWO0FBR0hFLFVBQUksRUFBRUgsTUFBTSxDQUFDSSxTQUhWO0FBSUhDLFVBQUksRUFBRUwsTUFBTSxDQUFDSTtBQUpWLEtBQVA7QUFNSDs7QUFDRFAsUUFBTSxDQUFDQyxLQUFQLEdBQWVBLEtBQWY7O0FBQ0EsV0FBU1EsT0FBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFBQSxRQUNiUixJQURhLEdBQ2VRLE1BRGYsQ0FDYlIsSUFEYTtBQUFBLFFBQ1BHLElBRE8sR0FDZUssTUFEZixDQUNQTCxJQURPO0FBQUEsUUFDREMsSUFEQyxHQUNlSSxNQURmLENBQ0RKLElBREM7QUFBQSxRQUNLRSxJQURMLEdBQ2VFLE1BRGYsQ0FDS0YsSUFETDtBQUVyQixXQUFPTixJQUFJLEtBQUtDLE1BQU0sQ0FBQ0MsU0FBaEIsSUFDQUMsSUFBSSxLQUFLRixNQUFNLENBQUNDLFNBRGhCLElBRUFFLElBQUksS0FBS0gsTUFBTSxDQUFDSSxTQUZoQixJQUdBQyxJQUFJLEtBQUtMLE1BQU0sQ0FBQ0ksU0FIdkI7QUFJSDs7QUFDRFAsUUFBTSxDQUFDUyxPQUFQLEdBQWlCQSxPQUFqQjs7QUFDQSxXQUFTRSxXQUFULENBQXFCRCxNQUFyQixFQUE2QjtBQUFBLFFBQ2pCUixJQURpQixHQUNXUSxNQURYLENBQ2pCUixJQURpQjtBQUFBLFFBQ1hHLElBRFcsR0FDV0ssTUFEWCxDQUNYTCxJQURXO0FBQUEsUUFDTEMsSUFESyxHQUNXSSxNQURYLENBQ0xKLElBREs7QUFBQSxRQUNDRSxJQURELEdBQ1dFLE1BRFgsQ0FDQ0YsSUFERDtBQUV6QixXQUFPO0FBQ0hoRyxPQUFDLEVBQUUwRixJQURBO0FBRUh6RixPQUFDLEVBQUU0RixJQUZBO0FBR0h6SyxXQUFLLEVBQUUwSyxJQUFJLEdBQUdKLElBSFg7QUFJSHJLLFlBQU0sRUFBRTJLLElBQUksR0FBR0g7QUFKWixLQUFQO0FBTUg7O0FBQ0RMLFFBQU0sQ0FBQ1csV0FBUCxHQUFxQkEsV0FBckI7O0FBQ0EsV0FBU0MsS0FBVCxDQUFlRixNQUFmLEVBQXVCbEcsQ0FBdkIsRUFBMEI7QUFDdEIsUUFBSWtHLE1BQU0sQ0FBQ1IsSUFBUCxHQUFjMUYsQ0FBbEIsRUFBcUI7QUFDakJrRyxZQUFNLENBQUNSLElBQVAsR0FBYzFGLENBQWQ7QUFDSCxLQUZELE1BR0ssSUFBSWtHLE1BQU0sQ0FBQ0osSUFBUCxHQUFjOUYsQ0FBbEIsRUFBcUI7QUFDdEJrRyxZQUFNLENBQUNKLElBQVAsR0FBYzlGLENBQWQ7QUFDSDtBQUNKOztBQUNEd0YsUUFBTSxDQUFDWSxLQUFQLEdBQWVBLEtBQWY7O0FBQ0EsV0FBU0MsS0FBVCxDQUFlSCxNQUFmLEVBQXVCakcsQ0FBdkIsRUFBMEI7QUFDdEIsUUFBSWlHLE1BQU0sQ0FBQ0wsSUFBUCxHQUFjNUYsQ0FBbEIsRUFBcUI7QUFDakJpRyxZQUFNLENBQUNMLElBQVAsR0FBYzVGLENBQWQ7QUFDSCxLQUZELE1BR0ssSUFBSWlHLE1BQU0sQ0FBQ0YsSUFBUCxHQUFjL0YsQ0FBbEIsRUFBcUI7QUFDdEJpRyxZQUFNLENBQUNGLElBQVAsR0FBYy9GLENBQWQ7QUFDSDtBQUNKOztBQUNEdUYsUUFBTSxDQUFDYSxLQUFQLEdBQWVBLEtBQWY7O0FBQ0EsV0FBU0MsSUFBVCxDQUFjSixNQUFkLEVBQXNCbEcsQ0FBdEIsRUFBeUJDLENBQXpCLEVBQTRCO0FBQ3hCLFFBQUlpRyxNQUFNLENBQUNSLElBQVAsR0FBYzFGLENBQWxCLEVBQXFCO0FBQ2pCa0csWUFBTSxDQUFDUixJQUFQLEdBQWMxRixDQUFkO0FBQ0gsS0FGRCxNQUdLLElBQUlrRyxNQUFNLENBQUNKLElBQVAsR0FBYzlGLENBQWxCLEVBQXFCO0FBQ3RCa0csWUFBTSxDQUFDSixJQUFQLEdBQWM5RixDQUFkO0FBQ0g7O0FBQ0QsUUFBSWtHLE1BQU0sQ0FBQ0wsSUFBUCxHQUFjNUYsQ0FBbEIsRUFBcUI7QUFDakJpRyxZQUFNLENBQUNMLElBQVAsR0FBYzVGLENBQWQ7QUFDSCxLQUZELE1BR0ssSUFBSWlHLE1BQU0sQ0FBQ0YsSUFBUCxHQUFjL0YsQ0FBbEIsRUFBcUI7QUFDdEJpRyxZQUFNLENBQUNGLElBQVAsR0FBYy9GLENBQWQ7QUFDSDtBQUNKOztBQUNEdUYsUUFBTSxDQUFDYyxJQUFQLEdBQWNBLElBQWQ7O0FBQ0EsV0FBU0MsU0FBVCxDQUFtQkwsTUFBbkIsRUFBMkJNLEtBQTNCLEVBQWtDO0FBQUEsUUFDdEJ4RyxDQURzQixHQUNid0csS0FEYSxDQUN0QnhHLENBRHNCO0FBQUEsUUFDbkJDLENBRG1CLEdBQ2J1RyxLQURhLENBQ25CdkcsQ0FEbUI7O0FBRTlCLFFBQUlpRyxNQUFNLENBQUNSLElBQVAsR0FBYzFGLENBQWxCLEVBQXFCO0FBQ2pCa0csWUFBTSxDQUFDUixJQUFQLEdBQWMxRixDQUFkO0FBQ0gsS0FGRCxNQUdLLElBQUlrRyxNQUFNLENBQUNKLElBQVAsR0FBYzlGLENBQWxCLEVBQXFCO0FBQ3RCa0csWUFBTSxDQUFDSixJQUFQLEdBQWM5RixDQUFkO0FBQ0g7O0FBQ0QsUUFBSWtHLE1BQU0sQ0FBQ0wsSUFBUCxHQUFjNUYsQ0FBbEIsRUFBcUI7QUFDakJpRyxZQUFNLENBQUNMLElBQVAsR0FBYzVGLENBQWQ7QUFDSCxLQUZELE1BR0ssSUFBSWlHLE1BQU0sQ0FBQ0YsSUFBUCxHQUFjL0YsQ0FBbEIsRUFBcUI7QUFDdEJpRyxZQUFNLENBQUNGLElBQVAsR0FBYy9GLENBQWQ7QUFDSDtBQUNKOztBQUNEdUYsUUFBTSxDQUFDZSxTQUFQLEdBQW1CQSxTQUFuQjtBQUNILENBN0VELEVBNkVHZixNQUFNLEtBQUtBLE1BQU0sR0FBRyxFQUFkLENBN0VULEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRE8sSUFBSXJMLGNBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxjQUFWLEVBQTBCO0FBQ3ZCLFdBQVNzTCxLQUFULEdBQWlCO0FBQ2IsV0FBTztBQUNIL0sscUJBQWUsRUFBRSxDQURkO0FBRUhOLG1CQUFhLEVBQUUsQ0FGWjtBQUdIRSxxQkFBZSxFQUFFLENBSGQ7QUFJSEUsb0JBQWMsRUFBRSxDQUpiO0FBS0hHLGlCQUFXLEVBQUUsQ0FMVjtBQU1ITixlQUFTLEVBQUUsQ0FOUjtBQU9IRSxpQkFBVyxFQUFFLENBUFY7QUFRSEUsZ0JBQVUsRUFBRTtBQVJULEtBQVA7QUFVSDs7QUFDRE4sZ0JBQWMsQ0FBQ3NMLEtBQWYsR0FBdUJBLEtBQXZCOztBQUNBLFdBQVNnQixNQUFULENBQWdCQyxHQUFoQixFQUFxQkMsR0FBckIsRUFBMEI7QUFDdEIsV0FBTztBQUNIak0scUJBQWUsRUFBRWdNLEdBQUcsQ0FBQ2hNLGVBQUosR0FBc0JpTSxHQUFHLENBQUNqTSxlQUR4QztBQUVITixtQkFBYSxFQUFFc00sR0FBRyxDQUFDdE0sYUFBSixHQUFvQnVNLEdBQUcsQ0FBQ3ZNLGFBRnBDO0FBR0hFLHFCQUFlLEVBQUVvTSxHQUFHLENBQUNwTSxlQUFKLEdBQXNCcU0sR0FBRyxDQUFDck0sZUFIeEM7QUFJSEUsb0JBQWMsRUFBRWtNLEdBQUcsQ0FBQ2xNLGNBQUosR0FBcUJtTSxHQUFHLENBQUNuTSxjQUp0QztBQUtIRyxpQkFBVyxFQUFFK0wsR0FBRyxDQUFDaE0sZUFBSixHQUFzQmlNLEdBQUcsQ0FBQ2hNLFdBQTFCLEdBQXdDZ00sR0FBRyxDQUFDaE0sV0FMdEQ7QUFNSE4sZUFBUyxFQUFFcU0sR0FBRyxDQUFDdE0sYUFBSixHQUFvQnVNLEdBQUcsQ0FBQ3RNLFNBQXhCLEdBQW9Dc00sR0FBRyxDQUFDdE0sU0FOaEQ7QUFPSEUsaUJBQVcsRUFBRW1NLEdBQUcsQ0FBQ3BNLGVBQUosR0FBc0JxTSxHQUFHLENBQUNwTSxXQUExQixHQUF3Q29NLEdBQUcsQ0FBQ3BNLFdBUHREO0FBUUhFLGdCQUFVLEVBQUVpTSxHQUFHLENBQUNsTSxjQUFKLEdBQXFCbU0sR0FBRyxDQUFDbE0sVUFBekIsR0FBc0NrTSxHQUFHLENBQUNsTTtBQVJuRCxLQUFQO0FBVUg7O0FBQ0ROLGdCQUFjLENBQUNzTSxNQUFmLEdBQXdCQSxNQUF4Qjs7QUFDQSxXQUFTRyxTQUFULENBQW1COU0sRUFBbkIsRUFBdUI7QUFDbkIsV0FBT0EsRUFBRSxDQUFDTSxhQUFILEtBQXFCLENBQXJCLElBQ0FOLEVBQUUsQ0FBQ1EsZUFBSCxLQUF1QixDQUR2QixJQUVBUixFQUFFLENBQUNVLGNBQUgsS0FBc0IsQ0FGdEIsSUFHQVYsRUFBRSxDQUFDWSxlQUFILEtBQXVCLENBSHZCLElBSUFaLEVBQUUsQ0FBQ08sU0FBSCxLQUFpQixDQUpqQixJQUtBUCxFQUFFLENBQUNTLFdBQUgsS0FBbUIsQ0FMbkIsSUFNQVQsRUFBRSxDQUFDVyxVQUFILEtBQWtCLENBTmxCLElBT0FYLEVBQUUsQ0FBQ2EsV0FBSCxLQUFtQixDQVAxQjtBQVFIOztBQUNEUixnQkFBYyxDQUFDeU0sU0FBZixHQUEyQkEsU0FBM0I7QUFDSCxDQXRDRCxFQXNDR3pNLGNBQWMsS0FBS0EsY0FBYyxHQUFHLEVBQXRCLENBdENqQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNITyxJQUFJOEQsTUFBSjs7QUFDUCxDQUFDLFVBQVVBLE1BQVYsRUFBa0I7QUFDZixXQUFTd0gsS0FBVCxHQUFpQjtBQUNiLFdBQU87QUFDSHZMLE9BQUMsRUFBRSxDQURBO0FBRUhELE9BQUMsRUFBRSxDQUZBO0FBR0hvSyxPQUFDLEVBQUUsQ0FIQTtBQUlIN0UsT0FBQyxFQUFFLENBSkE7QUFLSDhFLFFBQUUsRUFBRSxDQUxEO0FBTUhDLFFBQUUsRUFBRTtBQU5ELEtBQVA7QUFRSDs7QUFDRHRHLFFBQU0sQ0FBQ3dILEtBQVAsR0FBZUEsS0FBZjs7QUFDQSxXQUFTZ0IsTUFBVCxDQUFnQkksT0FBaEIsRUFBeUJDLE9BQXpCLEVBQWtDO0FBQzlCLFdBQU87QUFDSDVNLE9BQUMsRUFBRTRNLE9BQU8sQ0FBQzVNLENBQVIsR0FBWTJNLE9BQU8sQ0FBQzNNLENBQXBCLEdBQXdCNE0sT0FBTyxDQUFDN00sQ0FBUixHQUFZNE0sT0FBTyxDQUFDeEMsQ0FENUM7QUFFSHBLLE9BQUMsRUFBRTZNLE9BQU8sQ0FBQzVNLENBQVIsR0FBWTJNLE9BQU8sQ0FBQzVNLENBQXBCLEdBQXdCNk0sT0FBTyxDQUFDN00sQ0FBUixHQUFZNE0sT0FBTyxDQUFDckgsQ0FGNUM7QUFHSDZFLE9BQUMsRUFBRXlDLE9BQU8sQ0FBQ3pDLENBQVIsR0FBWXdDLE9BQU8sQ0FBQzNNLENBQXBCLEdBQXdCNE0sT0FBTyxDQUFDdEgsQ0FBUixHQUFZcUgsT0FBTyxDQUFDeEMsQ0FINUM7QUFJSDdFLE9BQUMsRUFBRXNILE9BQU8sQ0FBQ3pDLENBQVIsR0FBWXdDLE9BQU8sQ0FBQzVNLENBQXBCLEdBQXdCNk0sT0FBTyxDQUFDdEgsQ0FBUixHQUFZcUgsT0FBTyxDQUFDckgsQ0FKNUM7QUFLSDhFLFFBQUUsRUFBRXdDLE9BQU8sQ0FBQ3hDLEVBQVIsR0FBYXVDLE9BQU8sQ0FBQzNNLENBQXJCLEdBQXlCNE0sT0FBTyxDQUFDdkMsRUFBUixHQUFhc0MsT0FBTyxDQUFDeEMsQ0FBOUMsR0FBa0R3QyxPQUFPLENBQUN2QyxFQUwzRDtBQU1IQyxRQUFFLEVBQUV1QyxPQUFPLENBQUN4QyxFQUFSLEdBQWF1QyxPQUFPLENBQUM1TSxDQUFyQixHQUF5QjZNLE9BQU8sQ0FBQ3ZDLEVBQVIsR0FBYXNDLE9BQU8sQ0FBQ3JILENBQTlDLEdBQWtEcUgsT0FBTyxDQUFDdEM7QUFOM0QsS0FBUDtBQVFIOztBQUNEdEcsUUFBTSxDQUFDd0ksTUFBUCxHQUFnQkEsTUFBaEI7O0FBQ0EsV0FBU00sY0FBVCxDQUF3QnRJLE1BQXhCLEVBQWdDO0FBQzVCLFdBQU9BLE1BQU0sQ0FBQ3ZFLENBQVAsR0FBV3VFLE1BQU0sQ0FBQ2UsQ0FBbEIsR0FBc0JmLE1BQU0sQ0FBQ3hFLENBQVAsR0FBV3dFLE1BQU0sQ0FBQzRGLENBQS9DO0FBQ0g7O0FBQ0RwRyxRQUFNLENBQUM4SSxjQUFQLEdBQXdCQSxjQUF4Qjs7QUFDQSxXQUFTQyxNQUFULENBQWdCdkksTUFBaEIsRUFBd0I7QUFDcEIsUUFBSXdJLFdBQVcsR0FBR0YsY0FBYyxDQUFDdEksTUFBRCxDQUFoQzs7QUFDQSxRQUFJd0ksV0FBVyxLQUFLLENBQXBCLEVBQXVCO0FBQ25CeEksWUFBTSxDQUFDdkUsQ0FBUCxHQUFXLENBQVg7QUFDQXVFLFlBQU0sQ0FBQ3hFLENBQVAsR0FBVyxDQUFYO0FBQ0F3RSxZQUFNLENBQUM0RixDQUFQLEdBQVcsQ0FBWDtBQUNBNUYsWUFBTSxDQUFDZSxDQUFQLEdBQVcsQ0FBWDtBQUNBZixZQUFNLENBQUM2RixFQUFQLEdBQVksQ0FBQzdGLE1BQU0sQ0FBQzZGLEVBQXBCO0FBQ0E3RixZQUFNLENBQUM4RixFQUFQLEdBQVksQ0FBQzlGLE1BQU0sQ0FBQzhGLEVBQXBCO0FBQ0gsS0FQRCxNQVFLO0FBQ0QwQyxpQkFBVyxHQUFHLE1BQU1BLFdBQXBCO0FBQ0EsVUFBTXpILENBQUMsR0FBR2YsTUFBTSxDQUFDZSxDQUFQLEdBQVd5SCxXQUFyQjtBQUNBLFVBQU0vTSxDQUFDLEdBQUd1RSxNQUFNLENBQUN2RSxDQUFQLEdBQVcrTSxXQUFyQjtBQUNBeEksWUFBTSxDQUFDdkUsQ0FBUCxHQUFXc0YsQ0FBWDtBQUNBZixZQUFNLENBQUN4RSxDQUFQLElBQVksQ0FBQ2dOLFdBQWI7QUFDQXhJLFlBQU0sQ0FBQzRGLENBQVAsSUFBWSxDQUFDNEMsV0FBYjtBQUNBeEksWUFBTSxDQUFDZSxDQUFQLEdBQVd0RixDQUFYO0FBQ0EsVUFBTW9LLEVBQUUsR0FBRyxDQUFDN0YsTUFBTSxDQUFDdkUsQ0FBUixHQUFZdUUsTUFBTSxDQUFDNkYsRUFBbkIsR0FBd0I3RixNQUFNLENBQUM0RixDQUFQLEdBQVc1RixNQUFNLENBQUM4RixFQUFyRDtBQUNBLFVBQU1BLEVBQUUsR0FBRyxDQUFDOUYsTUFBTSxDQUFDeEUsQ0FBUixHQUFZd0UsTUFBTSxDQUFDNkYsRUFBbkIsR0FBd0I3RixNQUFNLENBQUNlLENBQVAsR0FBV2YsTUFBTSxDQUFDOEYsRUFBckQ7QUFDQTlGLFlBQU0sQ0FBQzZGLEVBQVAsR0FBWUEsRUFBWjtBQUNBN0YsWUFBTSxDQUFDOEYsRUFBUCxHQUFZQSxFQUFaO0FBQ0g7QUFDSjs7QUFDRHRHLFFBQU0sQ0FBQytJLE1BQVAsR0FBZ0JBLE1BQWhCOztBQUNBLFdBQVNFLGNBQVQsQ0FBd0J6SSxNQUF4QixFQUFnQytILEtBQWhDLEVBQXVDO0FBQUEsUUFDM0J4RyxDQUQyQixHQUNsQndHLEtBRGtCLENBQzNCeEcsQ0FEMkI7QUFBQSxRQUN4QkMsQ0FEd0IsR0FDbEJ1RyxLQURrQixDQUN4QnZHLENBRHdCO0FBRW5DLFdBQU87QUFDSEQsT0FBQyxFQUFFQSxDQUFDLEdBQUd2QixNQUFNLENBQUN2RSxDQUFYLEdBQWUrRixDQUFDLEdBQUd4QixNQUFNLENBQUM0RixDQUExQixHQUE4QjVGLE1BQU0sQ0FBQzZGLEVBRHJDO0FBRUhyRSxPQUFDLEVBQUVELENBQUMsR0FBR3ZCLE1BQU0sQ0FBQ3hFLENBQVgsR0FBZWdHLENBQUMsR0FBR3hCLE1BQU0sQ0FBQ2UsQ0FBMUIsR0FBOEJmLE1BQU0sQ0FBQzhGO0FBRnJDLEtBQVA7QUFJSDs7QUFDRHRHLFFBQU0sQ0FBQ2lKLGNBQVAsR0FBd0JBLGNBQXhCOztBQUNBLFdBQVNDLHFCQUFULENBQStCMUksTUFBL0IsRUFBdUMrSCxLQUF2QyxFQUE4QztBQUMxQyxRQUFJUyxXQUFXLEdBQUdGLGNBQWMsQ0FBQ3RJLE1BQUQsQ0FBaEM7O0FBQ0EsUUFBSXdJLFdBQVcsS0FBSyxDQUFwQixFQUF1QjtBQUNuQixhQUFPO0FBQ0hqSCxTQUFDLEVBQUUsQ0FBQ3ZCLE1BQU0sQ0FBQzZGLEVBRFI7QUFFSHJFLFNBQUMsRUFBRSxDQUFDeEIsTUFBTSxDQUFDOEY7QUFGUixPQUFQO0FBSUg7O0FBQ0QwQyxlQUFXLEdBQUcsSUFBSUEsV0FBbEI7QUFSMEMsUUFTbENqSCxDQVRrQyxHQVN6QndHLEtBVHlCLENBU2xDeEcsQ0FUa0M7QUFBQSxRQVMvQkMsQ0FUK0IsR0FTekJ1RyxLQVR5QixDQVMvQnZHLENBVCtCO0FBVTFDLFdBQU87QUFDSEQsT0FBQyxFQUFFaUgsV0FBVyxJQUFJeEksTUFBTSxDQUFDNEYsQ0FBUCxJQUFZNUYsTUFBTSxDQUFDOEYsRUFBUCxHQUFZdEUsQ0FBeEIsSUFBNkJ4QixNQUFNLENBQUNlLENBQVAsSUFBWVEsQ0FBQyxHQUFHdkIsTUFBTSxDQUFDNkYsRUFBdkIsQ0FBakMsQ0FEWDtBQUVIckUsT0FBQyxFQUFFZ0gsV0FBVyxJQUFJeEksTUFBTSxDQUFDdkUsQ0FBUCxJQUFZK0YsQ0FBQyxHQUFHeEIsTUFBTSxDQUFDOEYsRUFBdkIsSUFBNkI5RixNQUFNLENBQUN4RSxDQUFQLElBQVl3RSxNQUFNLENBQUM2RixFQUFQLEdBQVl0RSxDQUF4QixDQUFqQztBQUZYLEtBQVA7QUFJSDs7QUFDRC9CLFFBQU0sQ0FBQ2tKLHFCQUFQLEdBQStCQSxxQkFBL0I7O0FBQ0EsV0FBU0MsZUFBVCxDQUF5QjNJLE1BQXpCLEVBQWlDeUgsTUFBakMsRUFBeUM7QUFBQSxRQUM3QmhNLENBRDZCLEdBQ0x1RSxNQURLLENBQzdCdkUsQ0FENkI7QUFBQSxRQUMxQkQsQ0FEMEIsR0FDTHdFLE1BREssQ0FDMUJ4RSxDQUQwQjtBQUFBLFFBQ3ZCb0ssQ0FEdUIsR0FDTDVGLE1BREssQ0FDdkI0RixDQUR1QjtBQUFBLFFBQ3BCN0UsQ0FEb0IsR0FDTGYsTUFESyxDQUNwQmUsQ0FEb0I7QUFBQSxRQUNqQjhFLEVBRGlCLEdBQ0w3RixNQURLLENBQ2pCNkYsRUFEaUI7QUFBQSxRQUNiQyxFQURhLEdBQ0w5RixNQURLLENBQ2I4RixFQURhO0FBRXJDLFFBQU04QyxFQUFFLEdBQUduQixNQUFNLENBQUNsRyxDQUFsQjtBQUNBLFFBQU1zSCxFQUFFLEdBQUdwQixNQUFNLENBQUNqRyxDQUFsQjtBQUNBLFFBQU1zSCxFQUFFLEdBQUdGLEVBQUUsR0FBR25CLE1BQU0sQ0FBQzlLLEtBQXZCO0FBQ0EsUUFBTW9NLEVBQUUsR0FBR0YsRUFBRSxHQUFHcEIsTUFBTSxDQUFDN0ssTUFBdkI7QUFDQSxRQUFNb00sR0FBRyxHQUFHSixFQUFFLEdBQUduTixDQUFMLEdBQVNvTixFQUFFLEdBQUdqRCxDQUFkLEdBQWtCQyxFQUE5QjtBQUNBLFFBQU1vRCxHQUFHLEdBQUdMLEVBQUUsR0FBR3BOLENBQUwsR0FBU3FOLEVBQUUsR0FBRzlILENBQWQsR0FBa0IrRSxFQUE5QjtBQUNBLFFBQU1vRCxHQUFHLEdBQUdKLEVBQUUsR0FBR3JOLENBQUwsR0FBU29OLEVBQUUsR0FBR2pELENBQWQsR0FBa0JDLEVBQTlCO0FBQ0EsUUFBTXNELEdBQUcsR0FBR0wsRUFBRSxHQUFHdE4sQ0FBTCxHQUFTcU4sRUFBRSxHQUFHOUgsQ0FBZCxHQUFrQitFLEVBQTlCO0FBQ0EsUUFBTXNELEdBQUcsR0FBR04sRUFBRSxHQUFHck4sQ0FBTCxHQUFTc04sRUFBRSxHQUFHbkQsQ0FBZCxHQUFrQkMsRUFBOUI7QUFDQSxRQUFNd0QsR0FBRyxHQUFHUCxFQUFFLEdBQUd0TixDQUFMLEdBQVN1TixFQUFFLEdBQUdoSSxDQUFkLEdBQWtCK0UsRUFBOUI7QUFDQSxRQUFNd0QsR0FBRyxHQUFHVixFQUFFLEdBQUduTixDQUFMLEdBQVNzTixFQUFFLEdBQUduRCxDQUFkLEdBQWtCQyxFQUE5QjtBQUNBLFFBQU0wRCxHQUFHLEdBQUdYLEVBQUUsR0FBR3BOLENBQUwsR0FBU3VOLEVBQUUsR0FBR2hJLENBQWQsR0FBa0IrRSxFQUE5QjtBQUNBLFFBQUlwQyxJQUFJLEdBQUdzRixHQUFYOztBQUNBLFFBQUl0RixJQUFJLEdBQUd3RixHQUFYLEVBQWdCO0FBQ1p4RixVQUFJLEdBQUd3RixHQUFQO0FBQ0g7O0FBQ0QsUUFBSXhGLElBQUksR0FBRzBGLEdBQVgsRUFBZ0I7QUFDWjFGLFVBQUksR0FBRzBGLEdBQVA7QUFDSDs7QUFDRCxRQUFJMUYsSUFBSSxHQUFHNEYsR0FBWCxFQUFnQjtBQUNaNUYsVUFBSSxHQUFHNEYsR0FBUDtBQUNIOztBQUNELFFBQUl6RixHQUFHLEdBQUdvRixHQUFWOztBQUNBLFFBQUlwRixHQUFHLEdBQUdzRixHQUFWLEVBQWU7QUFDWHRGLFNBQUcsR0FBR3NGLEdBQU47QUFDSDs7QUFDRCxRQUFJdEYsR0FBRyxHQUFHd0YsR0FBVixFQUFlO0FBQ1h4RixTQUFHLEdBQUd3RixHQUFOO0FBQ0g7O0FBQ0QsUUFBSXhGLEdBQUcsR0FBRzBGLEdBQVYsRUFBZTtBQUNYMUYsU0FBRyxHQUFHMEYsR0FBTjtBQUNIOztBQUNELFFBQUlDLEtBQUssR0FBR1IsR0FBWjs7QUFDQSxRQUFJUSxLQUFLLEdBQUdOLEdBQVosRUFBaUI7QUFDYk0sV0FBSyxHQUFHTixHQUFSO0FBQ0g7O0FBQ0QsUUFBSU0sS0FBSyxHQUFHSixHQUFaLEVBQWlCO0FBQ2JJLFdBQUssR0FBR0osR0FBUjtBQUNIOztBQUNELFFBQUlJLEtBQUssR0FBR0YsR0FBWixFQUFpQjtBQUNiRSxXQUFLLEdBQUdGLEdBQVI7QUFDSDs7QUFDRCxRQUFJRyxNQUFNLEdBQUdSLEdBQWI7O0FBQ0EsUUFBSVEsTUFBTSxHQUFHTixHQUFiLEVBQWtCO0FBQ2RNLFlBQU0sR0FBR04sR0FBVDtBQUNIOztBQUNELFFBQUlNLE1BQU0sR0FBR0osR0FBYixFQUFrQjtBQUNkSSxZQUFNLEdBQUdKLEdBQVQ7QUFDSDs7QUFDRCxRQUFJSSxNQUFNLEdBQUdGLEdBQWIsRUFBa0I7QUFDZEUsWUFBTSxHQUFHRixHQUFUO0FBQ0g7O0FBQ0QsV0FBTztBQUNIaEksT0FBQyxFQUFFbUMsSUFEQTtBQUVIbEMsT0FBQyxFQUFFcUMsR0FGQTtBQUdIbEgsV0FBSyxFQUFFNk0sS0FBSyxHQUFHOUYsSUFIWjtBQUlIOUcsWUFBTSxFQUFFNk0sTUFBTSxHQUFHNUY7QUFKZCxLQUFQO0FBTUg7O0FBQ0RyRSxRQUFNLENBQUNtSixlQUFQLEdBQXlCQSxlQUF6QjtBQUNILENBMUlELEVBMElHbkosTUFBTSxLQUFLQSxNQUFNLEdBQUcsRUFBZCxDQTFJVCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNETyxJQUFJa0ssS0FBSjs7QUFDUCxDQUFDLFVBQVVBLEtBQVYsRUFBaUI7QUFDZCxXQUFTMUMsS0FBVCxHQUFpQjtBQUNiLFdBQU87QUFBRXpGLE9BQUMsRUFBRSxDQUFMO0FBQVFDLE9BQUMsRUFBRTtBQUFYLEtBQVA7QUFDSDs7QUFDRGtJLE9BQUssQ0FBQzFDLEtBQU4sR0FBY0EsS0FBZDtBQUNILENBTEQsRUFLRzBDLEtBQUssS0FBS0EsS0FBSyxHQUFHLEVBQWIsQ0FMUixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RPLElBQUlDLFNBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxTQUFWLEVBQXFCO0FBQ2xCLFdBQVNDLFFBQVQsQ0FBa0JDLFNBQWxCLEVBQTZCOUIsS0FBN0IsRUFBb0M7QUFDaEMsV0FBTzhCLFNBQVMsQ0FBQ3RJLENBQVYsR0FBY3dHLEtBQUssQ0FBQ3hHLENBQXBCLElBQ0FzSSxTQUFTLENBQUN0SSxDQUFWLEdBQWNzSSxTQUFTLENBQUNsTixLQUF4QixHQUFnQ29MLEtBQUssQ0FBQ3hHLENBRHRDLElBRUFzSSxTQUFTLENBQUNySSxDQUFWLEdBQWN1RyxLQUFLLENBQUN2RyxDQUZwQixJQUdBcUksU0FBUyxDQUFDckksQ0FBVixHQUFjcUksU0FBUyxDQUFDak4sTUFBeEIsR0FBaUNtTCxLQUFLLENBQUN2RyxDQUg5QztBQUlIOztBQUNEbUksV0FBUyxDQUFDQyxRQUFWLEdBQXFCQSxRQUFyQjs7QUFDQSxXQUFTcEMsT0FBVCxDQUFpQnFDLFNBQWpCLEVBQTRCO0FBQ3hCLFdBQU8sQ0FBQ0EsU0FBUyxDQUFDbE4sS0FBWCxJQUFvQixDQUFDa04sU0FBUyxDQUFDak4sTUFBdEM7QUFDSDs7QUFDRCtNLFdBQVMsQ0FBQ25DLE9BQVYsR0FBb0JBLE9BQXBCO0FBQ0gsQ0FaRCxFQVlHbUMsU0FBUyxLQUFLQSxTQUFTLEdBQUcsRUFBakIsQ0FaWixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0EsSUFBSUcsV0FBSjs7QUFDQSxTQUFTQyx1QkFBVCxDQUFpQzFPLEVBQWpDLEVBQXFDO0FBQ2pDLFNBQU9BLEVBQUUsQ0FBQ00sYUFBSCxLQUFxQixDQUFyQixJQUNBTixFQUFFLENBQUNRLGVBQUgsS0FBdUIsQ0FEdkIsSUFFQVIsRUFBRSxDQUFDVSxjQUFILEtBQXNCLENBRnRCLElBR0FWLEVBQUUsQ0FBQ08sU0FBSCxLQUFpQixDQUhqQixJQUlBUCxFQUFFLENBQUNTLFdBQUgsS0FBbUIsQ0FKbkIsSUFLQVQsRUFBRSxDQUFDVyxVQUFILEtBQWtCLENBTGxCLElBTUFYLEVBQUUsQ0FBQ2EsV0FBSCxLQUFtQixDQU4xQjtBQU9IOztBQUNELFNBQVM4TixpQkFBVCxDQUEyQnpMLE9BQTNCLEVBQW9DO0FBQ2hDLE1BQUksQ0FBQ3VMLFdBQUwsRUFBa0I7QUFDZCxRQUFNMU4sTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBd04sZUFBVyxHQUFHMU4sTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQWQ7QUFDSDs7QUFDRCxNQUFJc04sV0FBVyxDQUFDMU4sTUFBWixDQUFtQk8sS0FBbkIsS0FBNkI0QixPQUFPLENBQUNuQyxNQUFSLENBQWVPLEtBQWhELEVBQXVEO0FBQ25EbU4sZUFBVyxDQUFDMU4sTUFBWixDQUFtQk8sS0FBbkIsR0FBMkI0QixPQUFPLENBQUNuQyxNQUFSLENBQWVPLEtBQTFDO0FBQ0g7O0FBQ0QsTUFBSW1OLFdBQVcsQ0FBQzFOLE1BQVosQ0FBbUJRLE1BQW5CLEtBQThCMkIsT0FBTyxDQUFDbkMsTUFBUixDQUFlUSxNQUFqRCxFQUF5RDtBQUNyRGtOLGVBQVcsQ0FBQzFOLE1BQVosQ0FBbUJRLE1BQW5CLEdBQTRCMkIsT0FBTyxDQUFDbkMsTUFBUixDQUFlUSxNQUEzQztBQUNIO0FBQ0o7O0FBQ00sU0FBU3FOLGlCQUFULENBQTJCQyxLQUEzQixFQUFrQzNMLE9BQWxDLEVBQTJDO0FBQzlDLE1BQU00RCxRQUFRLEdBQUdpRCwyREFBQSxDQUFtQjhFLEtBQW5CLEVBQTBCM0wsT0FBMUIsQ0FBakI7O0FBQ0EsTUFBSSxFQUFDNEQsUUFBRCxhQUFDQSxRQUFELHVCQUFDQSxRQUFRLENBQUVzRCxNQUFYLEtBQXFCLEVBQUN0RCxRQUFELGFBQUNBLFFBQUQsdUJBQUNBLFFBQVEsQ0FBRStILEtBQVgsQ0FBekIsRUFBMkM7QUFDdkM7QUFDSDs7QUFKNkMsTUFLdEMxSixjQUxzQyxHQUtuQmpDLE9BTG1CLENBS3RDaUMsY0FMc0M7O0FBTTlDLE1BQUlBLGNBQWMsQ0FBQ3ZFLGVBQWYsSUFBa0MsQ0FBdEMsRUFBeUM7QUFDckM7QUFDSDs7QUFSNkMsTUFTdEN1QyxPQVRzQyxHQVNsQkQsT0FUa0IsQ0FTdENDLE9BVHNDO0FBQUEsTUFTN0J3QixNQVQ2QixHQVNsQnpCLE9BVGtCLENBUzdCeUIsTUFUNkI7QUFBQSxNQVV0Q3pELFNBVnNDLEdBVXhCaUMsT0FWd0IsQ0FVdENqQyxTQVZzQztBQUFBLHdCQVdwQjRGLFFBQVEsQ0FBQytILEtBWFc7QUFBQSxNQVd0Q3ZOLEtBWHNDLG1CQVd0Q0EsS0FYc0M7QUFBQSxNQVcvQkMsTUFYK0IsbUJBVy9CQSxNQVgrQjtBQVk5QyxNQUFNMkUsQ0FBQyxHQUFHZ0QsbURBQUEsQ0FBVzJGLEtBQVgsRUFBa0J2TixLQUFsQixDQUFWO0FBQ0EsTUFBTTZFLENBQUMsR0FBRytDLG1EQUFBLENBQVcyRixLQUFYLEVBQWtCdE4sTUFBbEIsQ0FBVjs7QUFDQSxNQUFJbU4sdUJBQXVCLENBQUN2SixjQUFELENBQTNCLEVBQTZDO0FBQ3pDakUsYUFBUyxDQUFDRSxZQUFWLENBQXVCdUQsTUFBTSxDQUFDdkUsQ0FBOUIsRUFBaUN1RSxNQUFNLENBQUN4RSxDQUF4QyxFQUEyQ3dFLE1BQU0sQ0FBQzRGLENBQWxELEVBQXFENUYsTUFBTSxDQUFDZSxDQUE1RCxFQUErRGYsTUFBTSxDQUFDNkYsRUFBdEUsRUFBMEU3RixNQUFNLENBQUM4RixFQUFqRjtBQUNBdkosYUFBUyxDQUFDNE4sV0FBVixHQUF3QjNKLGNBQWMsQ0FBQ3ZFLGVBQXZDO0FBQ0FNLGFBQVMsQ0FBQzZOLFNBQVYsQ0FBb0JqSSxRQUFRLENBQUMrSCxLQUE3QixFQUFvQzNJLENBQXBDLEVBQXVDQyxDQUF2QztBQUNILEdBSkQsTUFLSztBQUNEd0kscUJBQWlCLENBQUN6TixTQUFELENBQWpCO0FBQ0EsUUFBTWtMLE1BQU0sR0FBR2pJLDZEQUFBLENBQXVCUSxNQUF2QixFQUErQjtBQUMxQ3VCLE9BQUMsRUFBREEsQ0FEMEM7QUFDdkNDLE9BQUMsRUFBREEsQ0FEdUM7QUFDcEM3RSxXQUFLLEVBQUxBLEtBRG9DO0FBQzdCQyxZQUFNLEVBQU5BO0FBRDZCLEtBQS9CLENBQWY7O0FBR0EsUUFBSStNLHdEQUFBLENBQWtCbEMsTUFBbEIsQ0FBSixFQUErQjtBQUMzQjtBQUNIOztBQUNEcUMsZUFBVyxDQUFDcE4sU0FBWixDQUFzQitLLE1BQU0sQ0FBQ2xHLENBQTdCLEVBQWdDa0csTUFBTSxDQUFDakcsQ0FBdkMsRUFBMENpRyxNQUFNLENBQUM5SyxLQUFqRCxFQUF3RDhLLE1BQU0sQ0FBQzdLLE1BQS9EO0FBQ0FrTixlQUFXLENBQUNyTixZQUFaLENBQXlCdUQsTUFBTSxDQUFDdkUsQ0FBaEMsRUFBbUN1RSxNQUFNLENBQUN4RSxDQUExQyxFQUE2Q3dFLE1BQU0sQ0FBQzRGLENBQXBELEVBQXVENUYsTUFBTSxDQUFDZSxDQUE5RCxFQUFpRWYsTUFBTSxDQUFDNkYsRUFBeEUsRUFBNEU3RixNQUFNLENBQUM4RixFQUFuRjtBQUNBZ0UsZUFBVyxDQUFDTSxTQUFaLENBQXNCakksUUFBUSxDQUFDK0gsS0FBL0IsRUFBc0MzSSxDQUF0QyxFQUF5Q0MsQ0FBekM7QUFDQSxRQUFNNkksU0FBUyxHQUFHUCxXQUFXLENBQUNRLFlBQVosQ0FBeUI3QyxNQUFNLENBQUNsRyxDQUFoQyxFQUFtQ2tHLE1BQU0sQ0FBQ2pHLENBQTFDLEVBQTZDaUcsTUFBTSxDQUFDOUssS0FBcEQsRUFBMkQ4SyxNQUFNLENBQUM3SyxNQUFsRSxDQUFsQjtBQUNBLFFBQU0yTixFQUFFLEdBQUcvSixjQUFjLENBQUM3RSxhQUExQjtBQUNBLFFBQU02TyxFQUFFLEdBQUdoSyxjQUFjLENBQUMzRSxlQUExQjtBQUNBLFFBQU00TyxFQUFFLEdBQUdqSyxjQUFjLENBQUN6RSxjQUExQjtBQUNBLFFBQU0yTyxFQUFFLEdBQUdsSyxjQUFjLENBQUN2RSxlQUExQjtBQUNBLFFBQU0wTyxFQUFFLEdBQUduSyxjQUFjLENBQUM1RSxTQUExQjtBQUNBLFFBQU1nUCxFQUFFLEdBQUdwSyxjQUFjLENBQUMxRSxXQUExQjtBQUNBLFFBQU0rTyxFQUFFLEdBQUdySyxjQUFjLENBQUN4RSxVQUExQjtBQUNBLFFBQU04TyxFQUFFLEdBQUd0SyxjQUFjLENBQUN0RSxXQUExQjtBQW5CQyxRQW9CTzZPLElBcEJQLEdBb0JnQlYsU0FwQmhCLENBb0JPVSxJQXBCUDtBQUFBLFFBcUJPNU0sTUFyQlAsR0FxQmtCNE0sSUFyQmxCLENBcUJPNU0sTUFyQlA7O0FBc0JELFNBQUssSUFBSVEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1IsTUFBcEIsR0FBNkI7QUFDekI0TSxVQUFJLENBQUNwTSxDQUFELENBQUosR0FBVW9NLElBQUksQ0FBQ3BNLENBQUMsRUFBRixDQUFKLEdBQVk0TCxFQUFaLEdBQWlCSSxFQUEzQjtBQUNBSSxVQUFJLENBQUNwTSxDQUFELENBQUosR0FBVW9NLElBQUksQ0FBQ3BNLENBQUMsRUFBRixDQUFKLEdBQVk2TCxFQUFaLEdBQWlCSSxFQUEzQjtBQUNBRyxVQUFJLENBQUNwTSxDQUFELENBQUosR0FBVW9NLElBQUksQ0FBQ3BNLENBQUMsRUFBRixDQUFKLEdBQVk4TCxFQUFaLEdBQWlCSSxFQUEzQjtBQUNBRSxVQUFJLENBQUNwTSxDQUFELENBQUosR0FBVW9NLElBQUksQ0FBQ3BNLENBQUMsRUFBRixDQUFKLEdBQVkrTCxFQUFaLEdBQWlCSSxFQUEzQjtBQUNIOztBQUNEaEIsZUFBVyxDQUFDa0IsWUFBWixDQUF5QlgsU0FBekIsRUFBb0M1QyxNQUFNLENBQUNsRyxDQUEzQyxFQUE4Q2tHLE1BQU0sQ0FBQ2pHLENBQXJEO0FBQ0FqRixhQUFTLENBQUNFLFlBQVY7QUFDQUYsYUFBUyxDQUFDNE4sV0FBVixHQUF3QixDQUF4QjtBQUNBNU4sYUFBUyxDQUFDNk4sU0FBVixDQUFvQk4sV0FBVyxDQUFDMU4sTUFBaEMsRUFBd0NxTCxNQUFNLENBQUNsRyxDQUEvQyxFQUFrRGtHLE1BQU0sQ0FBQ2pHLENBQXpELEVBQTREaUcsTUFBTSxDQUFDOUssS0FBbkUsRUFBMEU4SyxNQUFNLENBQUM3SyxNQUFqRixFQUF5RjZLLE1BQU0sQ0FBQ2xHLENBQWhHLEVBQW1Ha0csTUFBTSxDQUFDakcsQ0FBMUcsRUFBNkdpRyxNQUFNLENBQUM5SyxLQUFwSCxFQUEySDhLLE1BQU0sQ0FBQzdLLE1BQWxJO0FBQ0g7QUFDSjtBQUNNLFNBQVNxTyw4QkFBVCxDQUF3Q3pNLE9BQXhDLEVBQWlEO0FBQ3BEME0sNkRBQW1CLENBQUMxTSxPQUFELENBQW5CO0FBQ0FBLFNBQU8sQ0FBQ2EsY0FBUixDQUF1QkQsR0FBdkIsQ0FBMkIrTCx5Q0FBM0IsRUFBa0NsQixpQkFBbEM7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkQ7QUFDQTtBQUNPLFNBQVNtQixZQUFULENBQXNCbEIsS0FBdEIsRUFBNkIzTCxPQUE3QixFQUFzQztBQUN6QyxNQUFNNEQsUUFBUSxHQUFHaUQsMkRBQUEsQ0FBbUI4RSxLQUFuQixFQUEwQjNMLE9BQTFCLENBQWpCOztBQUNBLE1BQUksRUFBQzRELFFBQUQsYUFBQ0EsUUFBRCx1QkFBQ0EsUUFBUSxDQUFFc0QsTUFBWCxLQUFxQixFQUFDdEQsUUFBRCxhQUFDQSxRQUFELHVCQUFDQSxRQUFRLENBQUUrSCxLQUFYLENBQXpCLEVBQTJDO0FBQ3ZDO0FBQ0g7O0FBSndDLE1BS2pDMUosY0FMaUMsR0FLZGpDLE9BTGMsQ0FLakNpQyxjQUxpQzs7QUFNekMsTUFBSUEsY0FBYyxDQUFDdkUsZUFBZixJQUFrQyxDQUF0QyxFQUF5QztBQUNyQztBQUNIOztBQVJ3QyxNQVNqQ3VDLE9BVGlDLEdBU3JCRCxPQVRxQixDQVNqQ0MsT0FUaUM7QUFBQSxNQVVqQ2pDLFNBVmlDLEdBVW5CaUMsT0FWbUIsQ0FVakNqQyxTQVZpQztBQUFBLE1BV2pDeUQsTUFYaUMsR0FXdEJ6QixPQVhzQixDQVdqQ3lCLE1BWGlDO0FBWXpDekQsV0FBUyxDQUFDRSxZQUFWLENBQXVCdUQsTUFBTSxDQUFDdkUsQ0FBOUIsRUFBaUN1RSxNQUFNLENBQUN4RSxDQUF4QyxFQUEyQ3dFLE1BQU0sQ0FBQzRGLENBQWxELEVBQXFENUYsTUFBTSxDQUFDZSxDQUE1RCxFQUErRGYsTUFBTSxDQUFDNkYsRUFBdEUsRUFBMEU3RixNQUFNLENBQUM4RixFQUFqRjtBQVp5Qyx3QkFhZjNELFFBQVEsQ0FBQytILEtBYk07QUFBQSxNQWFqQ3ZOLEtBYmlDLG1CQWFqQ0EsS0FiaUM7QUFBQSxNQWExQkMsTUFiMEIsbUJBYTFCQSxNQWIwQjtBQWN6QyxNQUFNMkUsQ0FBQyxHQUFHZ0QsbURBQUEsQ0FBVzJGLEtBQVgsRUFBa0J2TixLQUFsQixDQUFWO0FBQ0EsTUFBTTZFLENBQUMsR0FBRytDLG1EQUFBLENBQVcyRixLQUFYLEVBQWtCdE4sTUFBbEIsQ0FBVjtBQUNBTCxXQUFTLENBQUM0TixXQUFWLEdBQXdCM0osY0FBYyxDQUFDdkUsZUFBdkM7QUFDQU0sV0FBUyxDQUFDNk4sU0FBVixDQUFvQmpJLFFBQVEsQ0FBQytILEtBQTdCLEVBQW9DM0ksQ0FBcEMsRUFBdUNDLENBQXZDO0FBQ0g7QUFDTSxTQUFTNkoseUJBQVQsQ0FBbUM3TSxPQUFuQyxFQUE0QztBQUMvQzBNLDZEQUFtQixDQUFDMU0sT0FBRCxDQUFuQjtBQUNBQSxTQUFPLENBQUNhLGNBQVIsQ0FBdUJELEdBQXZCLENBQTJCK0wseUNBQTNCLEVBQWtDQyxZQUFsQztBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkQ7QUFDQTtBQUNBO0FBQ08sSUFBTUQsS0FBSyxHQUFHLE9BQWQ7QUFDQSxJQUFJRyxLQUFKOztBQUNQLENBQUMsVUFBVUEsS0FBVixFQUFpQjtBQUNkLFdBQVNDLFNBQVQsQ0FBbUJyQixLQUFuQixFQUEwQjNMLE9BQTFCLEVBQW1DO0FBQUEsUUFDdkJnSCxHQUR1QixHQUNmMkUsS0FEZSxDQUN2QjNFLEdBRHVCOztBQUUvQixRQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNOLGFBQU9pRyxTQUFQO0FBQ0g7O0FBSjhCLFFBS3ZCaE4sT0FMdUIsR0FLWEQsT0FMVyxDQUt2QkMsT0FMdUI7QUFNL0IsUUFBTTJELFFBQVEsR0FBRzNELE9BQU8sQ0FBQ3NELFNBQVIsQ0FBa0JNLEdBQWxCLENBQXNCbUQsR0FBdEIsQ0FBakI7O0FBQ0EsUUFBSSxFQUFDcEQsUUFBRCxhQUFDQSxRQUFELHVCQUFDQSxRQUFRLENBQUVzRCxNQUFYLEtBQXFCLEVBQUN0RCxRQUFELGFBQUNBLFFBQUQsdUJBQUNBLFFBQVEsQ0FBRStILEtBQVgsQ0FBekIsRUFBMkM7QUFDdkMsYUFBT3NCLFNBQVA7QUFDSDs7QUFUOEIsMEJBVUxySixRQUFRLENBQUMrSCxLQVZKO0FBQUEsUUFVdkJ2TixLQVZ1QixtQkFVdkJBLEtBVnVCO0FBQUEsUUFVaEJDLE1BVmdCLG1CQVVoQkEsTUFWZ0I7QUFXL0IsUUFBTTJFLENBQUMsR0FBR2dELG1EQUFBLENBQVcyRixLQUFYLEVBQWtCdk4sS0FBbEIsQ0FBVjtBQUNBLFFBQU02RSxDQUFDLEdBQUcrQyxtREFBQSxDQUFXMkYsS0FBWCxFQUFrQnROLE1BQWxCLENBQVY7QUFDQSxXQUFPO0FBQ0gyRSxPQUFDLEVBQURBLENBREc7QUFDQUMsT0FBQyxFQUFEQSxDQURBO0FBQ0c3RSxXQUFLLEVBQUxBLEtBREg7QUFDVUMsWUFBTSxFQUFOQTtBQURWLEtBQVA7QUFHSDs7QUFDRDBPLE9BQUssQ0FBQ0MsU0FBTixHQUFrQkEsU0FBbEI7QUFDSCxDQW5CRCxFQW1CR0QsS0FBSyxLQUFLQSxLQUFLLEdBQUcsRUFBYixDQW5CUjs7QUFvQk8sU0FBU3ZNLE9BQVQsQ0FBaUJtTCxLQUFqQixFQUF3QjNMLE9BQXhCLEVBQWlDO0FBQUEsTUFDNUJrRCxLQUQ0QixHQUNsQmxELE9BRGtCLENBQzVCa0QsS0FENEI7QUFFcEMsTUFBTWdHLE1BQU0sR0FBRzZELEtBQUssQ0FBQ0MsU0FBTixDQUFnQnJCLEtBQWhCLEVBQXVCM0wsT0FBdkIsQ0FBZjtBQUNBLFNBQU8sQ0FBQyxDQUFDa0osTUFBRixJQUFZa0MseURBQUEsQ0FBbUJsQyxNQUFuQixFQUEyQmhHLEtBQTNCLENBQW5CO0FBQ0g7QUFDTSxTQUFTeUosbUJBQVQsQ0FBNkIxTSxPQUE3QixFQUFzQztBQUN6Q0EsU0FBTyxDQUFDYyxlQUFSLENBQXdCRixHQUF4QixDQUE0QitMLEtBQTVCLEVBQW1DcE0sT0FBbkM7QUFDQVAsU0FBTyxDQUFDc0QsU0FBUixDQUFrQkUsU0FBbEIsQ0FBNEJ5SixHQUE1QixDQUFnQ0Msd0RBQWhDO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ08sU0FBU0EsWUFBVCxDQUFzQnhKLEtBQXRCLEVBQTZCO0FBQ2hDLE1BQU15SixTQUFTLEdBQUd6SixLQUFLLENBQUMwSixLQUFOLENBQVksR0FBWixFQUFpQkMsR0FBakIsRUFBbEI7O0FBQ0EsVUFBUUYsU0FBUjtBQUNJLFNBQUssS0FBTDtBQUNBLFNBQUssS0FBTDtBQUNJLFVBQU14SixRQUFRLEdBQUc7QUFDYkQsYUFBSyxFQUFMQSxLQURhO0FBRWJ1RCxjQUFNLEVBQUUsS0FGSztBQUdieUUsYUFBSyxFQUFFO0FBSE0sT0FBakI7QUFLQSxVQUFNQSxLQUFLLEdBQUc3TixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBNE4sV0FBSyxDQUFDM0UsR0FBTixHQUFZckQsS0FBWjs7QUFDQWdJLFdBQUssQ0FBQzRCLE1BQU4sR0FBZSxZQUFNO0FBQ2pCbkssZUFBTyxDQUFDQyxHQUFSLHlCQUE2Qk0sS0FBN0I7QUFDQUMsZ0JBQVEsQ0FBQytILEtBQVQsR0FBaUJBLEtBQWpCO0FBQ0EvSCxnQkFBUSxDQUFDc0QsTUFBVCxHQUFrQixJQUFsQjtBQUNILE9BSkQ7O0FBS0F5RSxXQUFLLENBQUM2QixPQUFOLEdBQWdCLFVBQUNDLENBQUQ7QUFBQSxlQUFPekosc0RBQUEsQ0FBYyxrQkFBZCxFQUFrQ3lKLENBQWxDLENBQVA7QUFBQSxPQUFoQjs7QUFDQSxhQUFPN0osUUFBUDs7QUFDSjtBQUNJO0FBbEJSOztBQW9CQSxTQUFPLElBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkQ7QUFDQTtBQUNBO0FBQ08sSUFBSThKLGFBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxhQUFWLEVBQXlCO0FBQ3RCLFdBQVNDLGVBQVQsQ0FBeUJuQixJQUF6QixFQUErQnRELE1BQS9CLEVBQXVDO0FBQUEsa0JBQ2NzRCxJQURkLENBQzNCeEosQ0FEMkI7QUFBQSxRQUMzQkEsQ0FEMkIsd0JBQ3ZCLENBRHVCO0FBQUEsa0JBQ2N3SixJQURkLENBQ3BCdkosQ0FEb0I7QUFBQSxRQUNwQkEsQ0FEb0Isd0JBQ2hCLENBRGdCO0FBQUEsc0JBQ2N1SixJQURkLENBQ2JwTyxLQURhO0FBQUEsUUFDYkEsS0FEYSw0QkFDTCxDQURLO0FBQUEsdUJBQ2NvTyxJQURkLENBQ0ZuTyxNQURFO0FBQUEsUUFDRkEsTUFERSw2QkFDTyxDQURQO0FBRW5DbUssc0RBQUEsQ0FBWVUsTUFBWixFQUFvQmxHLENBQXBCLEVBQXVCQyxDQUF2QjtBQUNBdUYsc0RBQUEsQ0FBWVUsTUFBWixFQUFvQmxHLENBQUMsR0FBRzVFLEtBQXhCLEVBQStCNkUsQ0FBQyxHQUFHNUUsTUFBbkM7QUFDSDs7QUFDRHFQLGVBQWEsQ0FBQ0MsZUFBZCxHQUFnQ0EsZUFBaEM7QUFDSCxDQVBELEVBT0dELGFBQWEsS0FBS0EsYUFBYSxHQUFHLEVBQXJCLENBUGhCOztBQVFPLElBQUlFLFdBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxXQUFWLEVBQXVCO0FBQ3BCLFdBQVNELGVBQVQsQ0FBeUJuQixJQUF6QixFQUErQnRELE1BQS9CLEVBQXVDO0FBQUEsbUJBQ3lCc0QsSUFEekIsQ0FDM0J4SixDQUQyQjtBQUFBLFFBQzNCQSxDQUQyQix5QkFDdkIsQ0FEdUI7QUFBQSxtQkFDeUJ3SixJQUR6QixDQUNwQnZKLENBRG9CO0FBQUEsUUFDcEJBLENBRG9CLHlCQUNoQixDQURnQjtBQUFBLFFBQ2I0SyxNQURhLEdBQ3lCckIsSUFEekIsQ0FDYnFCLE1BRGE7QUFBQSx3QkFDeUJyQixJQUR6QixDQUNMc0IsT0FESztBQUFBLFFBQ0xBLE9BREssOEJBQ0ssQ0FETDtBQUFBLHdCQUN5QnRCLElBRHpCLENBQ1F1QixPQURSO0FBQUEsUUFDUUEsT0FEUiw4QkFDa0IsQ0FEbEI7QUFFbkMsUUFBTTFELEVBQUUsR0FBR3dELE1BQUgsYUFBR0EsTUFBSCxjQUFHQSxNQUFILEdBQWFDLE9BQXJCO0FBQ0EsUUFBTXhELEVBQUUsR0FBR3VELE1BQUgsYUFBR0EsTUFBSCxjQUFHQSxNQUFILEdBQWFFLE9BQXJCO0FBQ0F2RixzREFBQSxDQUFZVSxNQUFaLEVBQW9CbEcsQ0FBQyxHQUFHcUgsRUFBeEIsRUFBNEJwSCxDQUFDLEdBQUdxSCxFQUFoQztBQUNBOUIsc0RBQUEsQ0FBWVUsTUFBWixFQUFvQmxHLENBQUMsR0FBR3FILEVBQXhCLEVBQTRCcEgsQ0FBQyxHQUFHcUgsRUFBaEM7QUFDSDs7QUFDRHNELGFBQVcsQ0FBQ0QsZUFBWixHQUE4QkEsZUFBOUI7QUFDSCxDQVRELEVBU0dDLFdBQVcsS0FBS0EsV0FBVyxHQUFHLEVBQW5CLENBVGQ7O0FBVU8sSUFBSUksUUFBSjs7QUFDUCxDQUFDLFVBQVVBLFFBQVYsRUFBb0I7QUFDakIsV0FBU0wsZUFBVCxDQUF5Qk0sUUFBekIsRUFBbUMvRSxNQUFuQyxFQUEyQztBQUFBLFFBQy9Cc0QsSUFEK0IsR0FDdEJ5QixRQURzQixDQUMvQnpCLElBRCtCOztBQUV2QyxRQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDMUIwQix5RUFBQSxDQUErQjFCLElBQS9CLEVBQXFDdEQsTUFBckM7QUFDSCxLQUZELE1BR0ssSUFBSXhKLEtBQUssQ0FBQ0MsT0FBTixDQUFjNk0sSUFBZCxDQUFKLEVBQXlCO0FBQzFCLFdBQUssSUFBSXBNLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdvTSxJQUFJLENBQUM1TSxNQUF6QixFQUFpQ1EsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxZQUFNK04sT0FBTyxHQUFHM0IsSUFBSSxDQUFDcE0sQ0FBRCxDQUFwQjtBQUNBZ08sc0VBQUEsQ0FBNEJELE9BQTVCLEVBQXFDakYsTUFBckM7QUFDSDtBQUNKO0FBQ0o7O0FBQ0Q4RSxVQUFRLENBQUNMLGVBQVQsR0FBMkJBLGVBQTNCO0FBQ0gsQ0FkRCxFQWNHSyxRQUFRLEtBQUtBLFFBQVEsR0FBRyxFQUFoQixDQWRYOztBQWVPLElBQUlLLFlBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxZQUFWLEVBQXdCO0FBQ3JCLFdBQVNWLGVBQVQsQ0FBeUJuQixJQUF6QixFQUErQnRELE1BQS9CLEVBQXVDO0FBQUEsUUFDM0JwRyxJQUQyQixHQUNsQjBKLElBRGtCLENBQzNCMUosSUFEMkI7O0FBRW5DLFlBQVFBLElBQVI7QUFDSSxXQUFLLFdBQUw7QUFDSTRLLHFCQUFhLENBQUNDLGVBQWQsQ0FBOEJuQixJQUE5QixFQUFvQ3RELE1BQXBDO0FBQ0E7O0FBQ0osV0FBSyxTQUFMO0FBQ0kwRSxtQkFBVyxDQUFDRCxlQUFaLENBQTRCbkIsSUFBNUIsRUFBa0N0RCxNQUFsQztBQUNBOztBQUNKLFdBQUssTUFBTDtBQUNJOEUsZ0JBQVEsQ0FBQ0wsZUFBVCxDQUF5Qm5CLElBQXpCLEVBQStCdEQsTUFBL0I7QUFDQTs7QUFDSjtBQUNJO0FBWFI7QUFhSDs7QUFDRG1GLGNBQVksQ0FBQ1YsZUFBYixHQUErQkEsZUFBL0I7QUFDSCxDQWxCRCxFQWtCR1UsWUFBWSxLQUFLQSxZQUFZLEdBQUcsRUFBcEIsQ0FsQmYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ08sSUFBSUQsV0FBSjs7QUFDUCxDQUFDLFVBQVVBLFdBQVYsRUFBdUI7QUFDcEIsV0FBU1QsZUFBVCxDQUF5QlcsSUFBekIsRUFBK0JwRixNQUEvQixFQUF1QztBQUFBOztBQUFBLFFBQzNCcEcsSUFEMkIsR0FDbEJ3TCxJQURrQixDQUMzQnhMLElBRDJCOztBQUVuQyxZQUFRQSxJQUFSO0FBQ0ksV0FBSyxRQUFMO0FBQ0EsV0FBSyxRQUFMO0FBQ0ksWUFBTXlMLE1BQU0sR0FBR0QsSUFBZjtBQUNBOUYsMERBQUEsQ0FBWVUsTUFBWixlQUFvQnFGLE1BQU0sQ0FBQ3ZMLENBQTNCLGlEQUFnQyxDQUFoQyxlQUFtQ3VMLE1BQU0sQ0FBQ3RMLENBQTFDLGlEQUErQyxDQUEvQztBQUNBOztBQUNKLFdBQUssU0FBTDtBQUNJLFlBQU11TCxPQUFPLEdBQUdGLElBQWhCO0FBQ0E5RiwwREFBQSxDQUFZVSxNQUFaLGlCQUFvQnNGLE9BQU8sQ0FBQ0MsRUFBNUIscURBQWtDLENBQWxDLGlCQUFxQ0QsT0FBTyxDQUFDRSxFQUE3QyxxREFBbUQsQ0FBbkQ7QUFDQWxHLDBEQUFBLENBQVlVLE1BQVosZ0JBQW9Cc0YsT0FBTyxDQUFDeEwsQ0FBNUIsbURBQWlDLENBQWpDLGdCQUFvQ3dMLE9BQU8sQ0FBQ3ZMLENBQTVDLG1EQUFpRCxDQUFqRDtBQUNBOztBQUNKLFdBQUssY0FBTDtBQUNJLFlBQU0wTCxZQUFZLEdBQUdMLElBQXJCO0FBQ0E5RiwwREFBQSxDQUFZVSxNQUFaLHNCQUFvQnlGLFlBQVksQ0FBQ0YsRUFBakMsK0RBQXVDLENBQXZDLHNCQUEwQ0UsWUFBWSxDQUFDRCxFQUF2RCwrREFBNkQsQ0FBN0Q7QUFDQWxHLDBEQUFBLENBQVlVLE1BQVosc0JBQW9CeUYsWUFBWSxDQUFDQyxFQUFqQywrREFBdUMsQ0FBdkMsc0JBQTBDRCxZQUFZLENBQUNFLEVBQXZELCtEQUE2RCxDQUE3RDtBQUNBckcsMERBQUEsQ0FBWVUsTUFBWixxQkFBb0J5RixZQUFZLENBQUMzTCxDQUFqQyw2REFBc0MsQ0FBdEMscUJBQXlDMkwsWUFBWSxDQUFDMUwsQ0FBdEQsNkRBQTJELENBQTNEO0FBQ0E7O0FBQ0o7QUFDSTtBQWxCUjtBQW9CSDs7QUFDRG1MLGFBQVcsQ0FBQ1QsZUFBWixHQUE4QkEsZUFBOUI7QUFDSCxDQXpCRCxFQXlCR1MsV0FBVyxLQUFLQSxXQUFXLEdBQUcsRUFBbkIsQ0F6QmQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQSxJQUFNVSxZQUFZLEdBQUcsd0JBQXJCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLE9BQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFNBQXBCO0FBQ08sSUFBTUMsb0JBQWI7QUFDSSxrQ0FBYztBQUFBOztBQUNWLFNBQUtYLElBQUwsR0FBWSxFQUFaO0FBQ0EsU0FBS1ksUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtmLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS2dCLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLENBQVo7QUFDSDs7QUFQTDtBQUFBO0FBQUEsNEJBUVlkLElBUlosRUFRa0I7QUFDVixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLWSxRQUFMLEdBQWdCLENBQWhCO0FBQ0g7QUFYTDtBQUFBO0FBQUEsOEJBWWM7QUFDTixhQUFPLEtBQUtBLFFBQUwsR0FBZ0IsS0FBS1osSUFBTCxDQUFVMU8sTUFBakM7QUFDSDtBQWRMO0FBQUE7QUFBQSxpQ0FlaUI7QUFDVCxhQUFPLEtBQUt1TyxPQUFaO0FBQ0g7QUFqQkw7QUFBQTtBQUFBLDhCQWtCYztBQUNOLGFBQU8sS0FBS2lCLElBQVo7QUFDSDtBQXBCTDtBQUFBO0FBQUEsZ0NBcUJnQjtBQUNSLGFBQU8sS0FBS0QsTUFBWjtBQUNIO0FBdkJMO0FBQUE7QUFBQSwrQkF3QmU7QUFDUCxXQUFLRSxXQUFMO0FBQ0EsV0FBS0MsV0FBTDtBQUNIO0FBM0JMO0FBQUE7QUFBQSxrQ0E0QmtCO0FBQ1YsV0FBS25CLE9BQUwsR0FBZSxJQUFmOztBQUNBLGFBQU8sS0FBS2UsUUFBTCxHQUFnQixLQUFLWixJQUFMLENBQVUxTyxNQUFqQyxFQUF5QztBQUNyQyxZQUFNdU8sT0FBTyxHQUFHLEtBQUtHLElBQUwsQ0FBVSxLQUFLWSxRQUFmLENBQWhCOztBQUNBLFlBQUlKLFlBQVksQ0FBQ3hGLElBQWIsQ0FBa0I2RSxPQUFsQixDQUFKLEVBQWdDO0FBQzVCLGVBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNIOztBQUNELGFBQUtlLFFBQUw7QUFDSDtBQUNKO0FBckNMO0FBQUE7QUFBQSxrQ0FzQ2tCO0FBQ1YsV0FBS0UsSUFBTCxHQUFZLENBQVo7QUFDQSxVQUFJRyxNQUFNLEdBQUcsRUFBYjs7QUFDQSxhQUFPLEtBQUtMLFFBQUwsR0FBZ0IsS0FBS1osSUFBTCxDQUFVMU8sTUFBakMsRUFBeUM7QUFDckMsWUFBTTRQLEtBQUksR0FBRyxLQUFLbEIsSUFBTCxDQUFVLEtBQUtZLFFBQWYsQ0FBYjs7QUFDQSxZQUFJRixXQUFXLENBQUMxRixJQUFaLENBQWlCa0csS0FBakIsQ0FBSixFQUE0QjtBQUN4QkQsZ0JBQU0sSUFBSUMsS0FBVjtBQUNILFNBRkQsTUFHSyxJQUFJVCxVQUFVLENBQUN6RixJQUFYLENBQWdCa0csS0FBaEIsQ0FBSixFQUEyQjtBQUM1QixlQUFLTCxNQUFMLENBQVksS0FBS0MsSUFBTCxFQUFaLElBQTJCSyxVQUFVLENBQUNGLE1BQUQsQ0FBckM7QUFDQUEsZ0JBQU0sR0FBRyxFQUFUO0FBQ0gsU0FISSxNQUlBLElBQUlULFlBQVksQ0FBQ3hGLElBQWIsQ0FBa0JrRyxLQUFsQixDQUFKLEVBQTZCO0FBQzlCO0FBQ0g7O0FBQ0QsYUFBS04sUUFBTDtBQUNIOztBQUNELFVBQUlLLE1BQUosRUFBWTtBQUNSLGFBQUtKLE1BQUwsQ0FBWSxLQUFLQyxJQUFMLEVBQVosSUFBMkJLLFVBQVUsQ0FBQ0YsTUFBRCxDQUFyQztBQUNIO0FBQ0o7QUExREw7O0FBQUE7QUFBQTtBQTRETyxJQUFNRyxvQkFBYjtBQUNJLGtDQUFjO0FBQUE7O0FBQ1YsU0FBS0MsTUFBTCxHQUFjLElBQUlWLG9CQUFKLEVBQWQ7QUFDQSxTQUFLZCxPQUFMLEdBQWU7QUFBRXJMLFVBQUksRUFBRTtBQUFSLEtBQWY7QUFDQSxTQUFLOE0sYUFBTCxHQUFxQixLQUFyQjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDSDs7QUFQTDtBQUFBO0FBQUEsNEJBUVl4QixJQVJaLEVBUWtCO0FBQ1YsV0FBS3FCLE1BQUwsQ0FBWUksT0FBWixDQUFvQnpCLElBQXBCO0FBQ0EsV0FBS3VCLEtBQUwsR0FBYSxDQUFiO0FBQ0EsV0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLRixhQUFMLEdBQXFCLEtBQXJCO0FBQ0g7QUFiTDtBQUFBO0FBQUEsOEJBY2M7QUFDTixhQUFPLEtBQUtELE1BQUwsQ0FBWUssT0FBWixFQUFQO0FBQ0g7QUFoQkw7QUFBQTtBQUFBLGlDQWlCaUI7QUFDVCxhQUFPLEtBQUtKLGFBQUwsR0FBcUIsS0FBS3pCLE9BQTFCLEdBQW9DLElBQTNDO0FBQ0g7QUFuQkw7QUFBQTtBQUFBLCtCQW9CZTtBQUNQLFdBQUt3QixNQUFMLENBQVlNLFFBQVo7QUFDQSxXQUFLQyxLQUFMO0FBQ0g7QUF2Qkw7QUFBQTtBQUFBLDRCQXdCWTtBQUNKLFVBQU0vQixPQUFPLEdBQUcsS0FBS3dCLE1BQUwsQ0FBWVEsVUFBWixFQUFoQjtBQUNBLFdBQUtQLGFBQUwsR0FBcUIsQ0FBQyxDQUFDekIsT0FBdkI7O0FBQ0EsVUFBSSxDQUFDLEtBQUt5QixhQUFWLEVBQXlCO0FBQ3JCO0FBQ0g7O0FBQ0QsVUFBTVQsTUFBTSxHQUFHLEtBQUtRLE1BQUwsQ0FBWVMsU0FBWixFQUFmOztBQU5JLG1DQU84QmpCLE1BUDlCO0FBQUEsVUFPR2tCLEVBUEg7QUFBQSxVQU9PQyxFQVBQO0FBQUEsVUFPV0MsRUFQWDtBQUFBLFVBT2VDLEVBUGY7QUFBQSxVQU9tQkMsRUFQbkI7QUFBQSxVQU91QkMsRUFQdkI7O0FBUUosVUFBSWpDLEVBQUUsR0FBRyxDQUFUO0FBQ0EsVUFBSUMsRUFBRSxHQUFHLENBQVQ7O0FBQ0EsY0FBUVAsT0FBUjtBQUNJLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUtBLE9BQUwsQ0FBYXJMLElBQWIsR0FBb0IsUUFBcEI7QUFDQSxnQkFBTXlMLE1BQU0sR0FBRyxLQUFLSixPQUFwQjtBQUNBSSxrQkFBTSxDQUFDdkwsQ0FBUCxHQUFXcU4sRUFBWDtBQUNBOUIsa0JBQU0sQ0FBQ3RMLENBQVAsR0FBV3FOLEVBQVg7QUFDQSxpQkFBS1QsS0FBTCxHQUFhdEIsTUFBTSxDQUFDdkwsQ0FBcEI7QUFDQSxpQkFBSzhNLEtBQUwsR0FBYXZCLE1BQU0sQ0FBQ3RMLENBQXBCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLa0wsT0FBTCxDQUFhckwsSUFBYixHQUFvQixRQUFwQjtBQUNBLGdCQUFNeUwsT0FBTSxHQUFHLEtBQUtKLE9BQXBCO0FBQ0FJLG1CQUFNLENBQUN2TCxDQUFQLEdBQVdxTixFQUFFLEdBQUcsS0FBS1IsS0FBckI7QUFDQXRCLG1CQUFNLENBQUN0TCxDQUFQLEdBQVdxTixFQUFFLEdBQUcsS0FBS1IsS0FBckI7QUFDQSxpQkFBS0QsS0FBTCxHQUFhdEIsT0FBTSxDQUFDdkwsQ0FBcEI7QUFDQSxpQkFBSzhNLEtBQUwsR0FBYXZCLE9BQU0sQ0FBQ3RMLENBQXBCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLa0wsT0FBTCxDQUFhckwsSUFBYixHQUFvQixRQUFwQjtBQUNBLGdCQUFNNk4sTUFBTSxHQUFHLEtBQUt4QyxPQUFwQjtBQUNBd0Msa0JBQU0sQ0FBQzNOLENBQVAsR0FBV3FOLEVBQVg7QUFDQU0sa0JBQU0sQ0FBQzFOLENBQVAsR0FBV3FOLEVBQVg7QUFDQSxpQkFBS1QsS0FBTCxHQUFhYyxNQUFNLENBQUMzTixDQUFwQjtBQUNBLGlCQUFLOE0sS0FBTCxHQUFhYSxNQUFNLENBQUMxTixDQUFwQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS2tMLE9BQUwsQ0FBYXJMLElBQWIsR0FBb0IsUUFBcEI7QUFDQSxnQkFBTTZOLE9BQU0sR0FBRyxLQUFLeEMsT0FBcEI7QUFDQXdDLG1CQUFNLENBQUMzTixDQUFQLEdBQVdxTixFQUFFLEdBQUcsS0FBS1IsS0FBckI7QUFDQWMsbUJBQU0sQ0FBQzFOLENBQVAsR0FBV3FOLEVBQUUsR0FBRyxLQUFLUixLQUFyQjtBQUNBLGlCQUFLRCxLQUFMLEdBQWFjLE9BQU0sQ0FBQzNOLENBQXBCO0FBQ0EsaUJBQUs4TSxLQUFMLEdBQWFhLE9BQU0sQ0FBQzFOLENBQXBCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLa0wsT0FBTCxDQUFhckwsSUFBYixHQUFvQixRQUFwQjtBQUNBLGdCQUFNNk4sUUFBTSxHQUFHLEtBQUt4QyxPQUFwQjtBQUNBd0Msb0JBQU0sQ0FBQzNOLENBQVAsR0FBV3FOLEVBQVg7QUFDQU0sb0JBQU0sQ0FBQzFOLENBQVAsR0FBVyxLQUFLNk0sS0FBaEI7QUFDQSxpQkFBS0QsS0FBTCxHQUFhYyxRQUFNLENBQUMzTixDQUFwQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS21MLE9BQUwsQ0FBYXJMLElBQWIsR0FBb0IsUUFBcEI7QUFDQSxnQkFBTTZOLFFBQU0sR0FBRyxLQUFLeEMsT0FBcEI7QUFDQXdDLG9CQUFNLENBQUMzTixDQUFQLEdBQVdxTixFQUFFLEdBQUcsS0FBS1IsS0FBckI7QUFDQWMsb0JBQU0sQ0FBQzFOLENBQVAsR0FBVyxLQUFLNk0sS0FBaEI7QUFDQSxpQkFBS0QsS0FBTCxHQUFhYyxRQUFNLENBQUMzTixDQUFwQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS21MLE9BQUwsQ0FBYXJMLElBQWIsR0FBb0IsUUFBcEI7QUFDQSxnQkFBTTZOLFFBQU0sR0FBRyxLQUFLeEMsT0FBcEI7QUFDQXdDLG9CQUFNLENBQUMzTixDQUFQLEdBQVcsS0FBSzZNLEtBQWhCO0FBQ0FjLG9CQUFNLENBQUMxTixDQUFQLEdBQVdvTixFQUFYO0FBQ0EsaUJBQUtQLEtBQUwsR0FBYWEsUUFBTSxDQUFDMU4sQ0FBcEI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUtrTCxPQUFMLENBQWFyTCxJQUFiLEdBQW9CLFFBQXBCO0FBQ0EsZ0JBQU02TixRQUFNLEdBQUcsS0FBS3hDLE9BQXBCO0FBQ0F3QyxvQkFBTSxDQUFDM04sQ0FBUCxHQUFXLEtBQUs2TSxLQUFoQjtBQUNBYyxvQkFBTSxDQUFDMU4sQ0FBUCxHQUFXb04sRUFBRSxHQUFHLEtBQUtQLEtBQXJCO0FBQ0EsaUJBQUtBLEtBQUwsR0FBYWEsUUFBTSxDQUFDMU4sQ0FBcEI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUtrTCxPQUFMLENBQWFyTCxJQUFiLEdBQW9CLGNBQXBCO0FBQ0EsZ0JBQU02TCxZQUFZLEdBQUcsS0FBS1IsT0FBMUI7QUFDQVEsd0JBQVksQ0FBQ0YsRUFBYixHQUFrQjRCLEVBQWxCO0FBQ0ExQix3QkFBWSxDQUFDRCxFQUFiLEdBQWtCNEIsRUFBbEI7QUFDQTNCLHdCQUFZLENBQUNDLEVBQWIsR0FBa0IyQixFQUFsQjtBQUNBNUIsd0JBQVksQ0FBQ0UsRUFBYixHQUFrQjJCLEVBQWxCO0FBQ0E3Qix3QkFBWSxDQUFDM0wsQ0FBYixHQUFpQnlOLEVBQWpCO0FBQ0E5Qix3QkFBWSxDQUFDMUwsQ0FBYixHQUFpQnlOLEVBQWpCO0FBQ0FqQyxjQUFFLEdBQUdFLFlBQVksQ0FBQzNMLENBQWIsSUFBa0IyTCxZQUFZLENBQUNDLEVBQWIsR0FBa0JELFlBQVksQ0FBQzNMLENBQWpELENBQUw7QUFDQTBMLGNBQUUsR0FBR0MsWUFBWSxDQUFDMUwsQ0FBYixJQUFrQjBMLFlBQVksQ0FBQ0UsRUFBYixHQUFrQkYsWUFBWSxDQUFDMUwsQ0FBakQsQ0FBTDtBQUNBLGlCQUFLNE0sS0FBTCxHQUFhbEIsWUFBWSxDQUFDM0wsQ0FBMUI7QUFDQSxpQkFBSzhNLEtBQUwsR0FBYW5CLFlBQVksQ0FBQzFMLENBQTFCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLa0wsT0FBTCxDQUFhckwsSUFBYixHQUFvQixjQUFwQjtBQUNBLGdCQUFNNkwsYUFBWSxHQUFHLEtBQUtSLE9BQTFCO0FBQ0FRLHlCQUFZLENBQUNGLEVBQWIsR0FBa0I0QixFQUFFLEdBQUcsS0FBS1IsS0FBNUI7QUFDQWxCLHlCQUFZLENBQUNELEVBQWIsR0FBa0I0QixFQUFFLEdBQUcsS0FBS1IsS0FBNUI7QUFDQW5CLHlCQUFZLENBQUNDLEVBQWIsR0FBa0IyQixFQUFFLEdBQUcsS0FBS1YsS0FBNUI7QUFDQWxCLHlCQUFZLENBQUNFLEVBQWIsR0FBa0IyQixFQUFFLEdBQUcsS0FBS1YsS0FBNUI7QUFDQW5CLHlCQUFZLENBQUMzTCxDQUFiLEdBQWlCeU4sRUFBRSxHQUFHLEtBQUtaLEtBQTNCO0FBQ0FsQix5QkFBWSxDQUFDMUwsQ0FBYixHQUFpQnlOLEVBQUUsR0FBRyxLQUFLWixLQUEzQjtBQUNBckIsY0FBRSxHQUFHRSxhQUFZLENBQUMzTCxDQUFiLElBQWtCMkwsYUFBWSxDQUFDQyxFQUFiLEdBQWtCRCxhQUFZLENBQUMzTCxDQUFqRCxDQUFMO0FBQ0EwTCxjQUFFLEdBQUdDLGFBQVksQ0FBQzFMLENBQWIsSUFBa0IwTCxhQUFZLENBQUNFLEVBQWIsR0FBa0JGLGFBQVksQ0FBQzFMLENBQWpELENBQUw7QUFDQSxpQkFBSzRNLEtBQUwsR0FBYWxCLGFBQVksQ0FBQzNMLENBQTFCO0FBQ0EsaUJBQUs4TSxLQUFMLEdBQWFuQixhQUFZLENBQUMxTCxDQUExQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS2tMLE9BQUwsQ0FBYXJMLElBQWIsR0FBb0IsY0FBcEI7QUFDQSxnQkFBTTZMLGNBQVksR0FBRyxLQUFLUixPQUExQjtBQUNBUSwwQkFBWSxDQUFDRixFQUFiLEdBQWtCQSxFQUFsQjtBQUNBRSwwQkFBWSxDQUFDRCxFQUFiLEdBQWtCQSxFQUFsQjtBQUNBQywwQkFBWSxDQUFDQyxFQUFiLEdBQWtCeUIsRUFBbEI7QUFDQTFCLDBCQUFZLENBQUNFLEVBQWIsR0FBa0J5QixFQUFsQjtBQUNBM0IsMEJBQVksQ0FBQzNMLENBQWIsR0FBaUJ1TixFQUFqQjtBQUNBNUIsMEJBQVksQ0FBQzFMLENBQWIsR0FBaUJ1TixFQUFqQjtBQUNBL0IsY0FBRSxHQUFHRSxjQUFZLENBQUMzTCxDQUFiLElBQWtCMkwsY0FBWSxDQUFDQyxFQUFiLEdBQWtCRCxjQUFZLENBQUMzTCxDQUFqRCxDQUFMO0FBQ0EwTCxjQUFFLEdBQUdDLGNBQVksQ0FBQzFMLENBQWIsSUFBa0IwTCxjQUFZLENBQUNFLEVBQWIsR0FBa0JGLGNBQVksQ0FBQzFMLENBQWpELENBQUw7QUFDQSxpQkFBSzRNLEtBQUwsR0FBYWxCLGNBQVksQ0FBQzNMLENBQTFCO0FBQ0EsaUJBQUs4TSxLQUFMLEdBQWFuQixjQUFZLENBQUMxTCxDQUExQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS2tMLE9BQUwsQ0FBYXJMLElBQWIsR0FBb0IsY0FBcEI7QUFDQSxnQkFBTTZMLGNBQVksR0FBRyxLQUFLUixPQUExQjtBQUNBUSwwQkFBWSxDQUFDRixFQUFiLEdBQWtCQSxFQUFsQjtBQUNBRSwwQkFBWSxDQUFDRCxFQUFiLEdBQWtCQSxFQUFsQjtBQUNBQywwQkFBWSxDQUFDQyxFQUFiLEdBQWtCeUIsRUFBRSxHQUFHLEtBQUtSLEtBQTVCO0FBQ0FsQiwwQkFBWSxDQUFDRSxFQUFiLEdBQWtCeUIsRUFBRSxHQUFHLEtBQUtSLEtBQTVCO0FBQ0FuQiwwQkFBWSxDQUFDM0wsQ0FBYixHQUFpQnVOLEVBQUUsR0FBRyxLQUFLVixLQUEzQjtBQUNBbEIsMEJBQVksQ0FBQzFMLENBQWIsR0FBaUJ1TixFQUFFLEdBQUcsS0FBS1YsS0FBM0I7QUFDQXJCLGNBQUUsR0FBR0UsY0FBWSxDQUFDM0wsQ0FBYixJQUFrQjJMLGNBQVksQ0FBQ0MsRUFBYixHQUFrQkQsY0FBWSxDQUFDM0wsQ0FBakQsQ0FBTDtBQUNBMEwsY0FBRSxHQUFHQyxjQUFZLENBQUMxTCxDQUFiLElBQWtCMEwsY0FBWSxDQUFDRSxFQUFiLEdBQWtCRixjQUFZLENBQUMxTCxDQUFqRCxDQUFMO0FBQ0EsaUJBQUs0TSxLQUFMLEdBQWFsQixjQUFZLENBQUMzTCxDQUExQjtBQUNBLGlCQUFLOE0sS0FBTCxHQUFhbkIsY0FBWSxDQUFDMUwsQ0FBMUI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUtrTCxPQUFMLENBQWFyTCxJQUFiLEdBQW9CLFNBQXBCO0FBQ0EsZ0JBQU0wTCxPQUFPLEdBQUcsS0FBS0wsT0FBckI7QUFDQUssbUJBQU8sQ0FBQ0MsRUFBUixHQUFhNEIsRUFBYjtBQUNBN0IsbUJBQU8sQ0FBQ0UsRUFBUixHQUFhNEIsRUFBYjtBQUNBOUIsbUJBQU8sQ0FBQ3hMLENBQVIsR0FBWXVOLEVBQVo7QUFDQS9CLG1CQUFPLENBQUN2TCxDQUFSLEdBQVl1TixFQUFaO0FBQ0EvQixjQUFFLEdBQUdELE9BQU8sQ0FBQ3hMLENBQVIsSUFBYXdMLE9BQU8sQ0FBQ0MsRUFBUixHQUFhRCxPQUFPLENBQUN4TCxDQUFsQyxDQUFMO0FBQ0EwTCxjQUFFLEdBQUdGLE9BQU8sQ0FBQ3ZMLENBQVIsSUFBYXVMLE9BQU8sQ0FBQ0UsRUFBUixHQUFhRixPQUFPLENBQUN2TCxDQUFsQyxDQUFMO0FBQ0EsaUJBQUs0TSxLQUFMLEdBQWFyQixPQUFPLENBQUN4TCxDQUFyQjtBQUNBLGlCQUFLOE0sS0FBTCxHQUFhdEIsT0FBTyxDQUFDdkwsQ0FBckI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUtrTCxPQUFMLENBQWFyTCxJQUFiLEdBQW9CLFNBQXBCO0FBQ0EsZ0JBQU0wTCxRQUFPLEdBQUcsS0FBS0wsT0FBckI7QUFDQUssb0JBQU8sQ0FBQ0MsRUFBUixHQUFhNEIsRUFBRSxHQUFHLEtBQUtSLEtBQXZCO0FBQ0FyQixvQkFBTyxDQUFDRSxFQUFSLEdBQWE0QixFQUFFLEdBQUcsS0FBS1IsS0FBdkI7QUFDQXRCLG9CQUFPLENBQUN4TCxDQUFSLEdBQVl1TixFQUFFLEdBQUcsS0FBS1YsS0FBdEI7QUFDQXJCLG9CQUFPLENBQUN2TCxDQUFSLEdBQVl1TixFQUFFLEdBQUcsS0FBS1YsS0FBdEI7QUFDQXJCLGNBQUUsR0FBR0QsUUFBTyxDQUFDeEwsQ0FBUixJQUFhd0wsUUFBTyxDQUFDQyxFQUFSLEdBQWFELFFBQU8sQ0FBQ3hMLENBQWxDLENBQUw7QUFDQTBMLGNBQUUsR0FBR0YsUUFBTyxDQUFDdkwsQ0FBUixJQUFhdUwsUUFBTyxDQUFDRSxFQUFSLEdBQWFGLFFBQU8sQ0FBQ3ZMLENBQWxDLENBQUw7QUFDQSxpQkFBSzRNLEtBQUwsR0FBYXJCLFFBQU8sQ0FBQ3hMLENBQXJCO0FBQ0EsaUJBQUs4TSxLQUFMLEdBQWF0QixRQUFPLENBQUN2TCxDQUFyQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS2tMLE9BQUwsQ0FBYXJMLElBQWIsR0FBb0IsU0FBcEI7QUFDQSxnQkFBTTBMLFNBQU8sR0FBRyxLQUFLTCxPQUFyQjtBQUNBSyxxQkFBTyxDQUFDQyxFQUFSLEdBQWFBLEVBQWI7QUFDQUQscUJBQU8sQ0FBQ0UsRUFBUixHQUFhQSxFQUFiO0FBQ0FGLHFCQUFPLENBQUN4TCxDQUFSLEdBQVlxTixFQUFaO0FBQ0E3QixxQkFBTyxDQUFDdkwsQ0FBUixHQUFZcU4sRUFBWjtBQUNBN0IsY0FBRSxHQUFHRCxTQUFPLENBQUN4TCxDQUFSLElBQWF3TCxTQUFPLENBQUNDLEVBQVIsR0FBYUQsU0FBTyxDQUFDeEwsQ0FBbEMsQ0FBTDtBQUNBMEwsY0FBRSxHQUFHRixTQUFPLENBQUN2TCxDQUFSLElBQWF1TCxTQUFPLENBQUNFLEVBQVIsR0FBYUYsU0FBTyxDQUFDdkwsQ0FBbEMsQ0FBTDtBQUNBLGlCQUFLNE0sS0FBTCxHQUFhckIsU0FBTyxDQUFDeEwsQ0FBckI7QUFDQSxpQkFBSzhNLEtBQUwsR0FBYXRCLFNBQU8sQ0FBQ3ZMLENBQXJCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLa0wsT0FBTCxDQUFhckwsSUFBYixHQUFvQixTQUFwQjtBQUNBLGdCQUFNMEwsU0FBTyxHQUFHLEtBQUtMLE9BQXJCO0FBQ0FLLHFCQUFPLENBQUNDLEVBQVIsR0FBYUEsRUFBYjtBQUNBRCxxQkFBTyxDQUFDRSxFQUFSLEdBQWFBLEVBQWI7QUFDQUYscUJBQU8sQ0FBQ3hMLENBQVIsR0FBWXFOLEVBQUUsR0FBRyxLQUFLUixLQUF0QjtBQUNBckIscUJBQU8sQ0FBQ3ZMLENBQVIsR0FBWXFOLEVBQUUsR0FBRyxLQUFLUixLQUF0QjtBQUNBckIsY0FBRSxHQUFHRCxTQUFPLENBQUN4TCxDQUFSLElBQWF3TCxTQUFPLENBQUNDLEVBQVIsR0FBYUQsU0FBTyxDQUFDeEwsQ0FBbEMsQ0FBTDtBQUNBMEwsY0FBRSxHQUFHRixTQUFPLENBQUN2TCxDQUFSLElBQWF1TCxTQUFPLENBQUNFLEVBQVIsR0FBYUYsU0FBTyxDQUFDdkwsQ0FBbEMsQ0FBTDtBQUNBLGlCQUFLNE0sS0FBTCxHQUFhckIsU0FBTyxDQUFDeEwsQ0FBckI7QUFDQSxpQkFBSzhNLEtBQUwsR0FBYXRCLFNBQU8sQ0FBQ3ZMLENBQXJCO0FBQ0g7QUFDRDs7QUFDSjtBQUNJO0FBdE1SO0FBd01IO0FBMU9MOztBQUFBO0FBQUE7QUE0T0EsSUFBTTJOLE1BQU0sR0FBRyxJQUFJbEIsb0JBQUosRUFBZjtBQUNPLElBQUl4QixjQUFKOztBQUNQLENBQUMsVUFBVUEsY0FBVixFQUEwQjtBQUN2QixXQUFTUCxlQUFULENBQXlCVyxJQUF6QixFQUErQnBGLE1BQS9CLEVBQXVDO0FBQ25DMEgsVUFBTSxDQUFDYixPQUFQLENBQWV6QixJQUFmOztBQUNBLFdBQU9zQyxNQUFNLENBQUNaLE9BQVAsRUFBUCxFQUF5QjtBQUNyQlksWUFBTSxDQUFDWCxRQUFQO0FBQ0EsVUFBTTlCLE9BQU8sR0FBR3lDLE1BQU0sQ0FBQ1QsVUFBUCxFQUFoQjs7QUFDQSxVQUFJaEMsT0FBSixFQUFhO0FBQ1RDLHNFQUFBLENBQTRCRCxPQUE1QixFQUFxQ2pGLE1BQXJDO0FBQ0g7QUFDSjtBQUNKOztBQUNEZ0YsZ0JBQWMsQ0FBQ1AsZUFBZixHQUFpQ0EsZUFBakM7QUFDSCxDQVpELEVBWUdPLGNBQWMsS0FBS0EsY0FBYyxHQUFHLEVBQXRCLENBWmpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM5U3FCMkMsUTtBQUNqQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNmLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNIOzs7O2dDQUMrQjtBQUFBLFVBQXRCbFUsS0FBc0IsdUVBQWQsQ0FBYztBQUFBLFVBQVhDLEtBQVcsdUVBQUgsQ0FBRztBQUM1QixXQUFLa1UsSUFBTCxHQUFZO0FBQ1JqTyxZQUFJLEVBQUUsT0FERTtBQUVSbEcsYUFBSyxFQUFMQSxLQUZRO0FBR1JDLGFBQUssRUFBTEE7QUFIUSxPQUFaO0FBS0g7OztvQ0FDZW1LLEcsRUFBS3ZGLE0sRUFBdUM7QUFBQSxVQUEvQnVQLE1BQStCLHVFQUF0QixJQUFzQjtBQUFBLFVBQWhCQyxNQUFnQix1RUFBUCxLQUFPO0FBQ3hELFdBQUtGLElBQUwsR0FBWTtBQUNSak8sWUFBSSxFQUFFLFFBREU7QUFFUmtFLFdBQUcsRUFBSEEsR0FGUTtBQUdSdkYsY0FBTSxFQUFOQSxNQUhRO0FBSVJ1UCxjQUFNLEVBQU5BLE1BSlE7QUFLUkMsY0FBTSxFQUFOQTtBQUxRLE9BQVo7QUFPSDs7O3NDQUNpQm5PLEksRUFBTWxHLEssRUFBT0MsSyxFQUFPcVUsSyxFQUFPelAsTSxFQUF1RTtBQUFBLFVBQS9EMFAsTUFBK0QsdUVBQXRELFFBQXNEO0FBQUEsVUFBNUNDLGFBQTRDLHVFQUE1QixLQUE0QjtBQUFBLFVBQXJCQyxlQUFxQix1RUFBSCxDQUFHO0FBQ2hILFdBQUtOLElBQUwsR0FBWTtBQUNSak8sWUFBSSxFQUFKQSxJQURRO0FBRVJsRyxhQUFLLEVBQUxBLEtBRlE7QUFHUkMsYUFBSyxFQUFMQSxLQUhRO0FBSVJxVSxhQUFLLEVBQUxBLEtBSlE7QUFLUnpQLGNBQU0sRUFBTkEsTUFMUTtBQU1SMFAsY0FBTSxFQUFOQSxNQU5RO0FBT1JDLHFCQUFhLEVBQWJBLGFBUFE7QUFRUkMsdUJBQWUsRUFBZkE7QUFSUSxPQUFaO0FBVUg7OztnQ0FDMEk7QUFBQSxVQUFqSUMsU0FBaUksdUVBQXJILENBQXFIO0FBQUEsVUFBbEgxVSxLQUFrSCx1RUFBMUcsQ0FBMEc7QUFBQSxVQUF2R0MsS0FBdUcsdUVBQS9GLENBQStGO0FBQUEsVUFBNUYwVSxZQUE0Rix1RUFBN0UsS0FBNkU7QUFBQSxVQUF0RUMsU0FBc0UsdUVBQTFELE1BQTBEO0FBQUEsVUFBbERDLElBQWtELHVFQUEzQyxPQUEyQztBQUFBLFVBQWxDQyxNQUFrQyx1RUFBekIsT0FBeUI7QUFBQSxVQUFoQkMsVUFBZ0IsdUVBQUgsQ0FBRztBQUN2SSxXQUFLQyxNQUFMLEdBQWM7QUFDVk4saUJBQVMsRUFBVEEsU0FEVTtBQUVWQyxvQkFBWSxFQUFaQSxZQUZVO0FBR1ZDLGlCQUFTLEVBQVRBLFNBSFU7QUFJVkMsWUFBSSxFQUFKQSxJQUpVO0FBS1ZDLGNBQU0sRUFBTkEsTUFMVTtBQU1WQyxrQkFBVSxFQUFWQSxVQU5VO0FBT1ZaLFlBQUksRUFBRTtBQUNGak8sY0FBSSxFQUFFLE9BREo7QUFFRmxHLGVBQUssRUFBTEEsS0FGRTtBQUdGQyxlQUFLLEVBQUxBO0FBSEU7QUFQSSxPQUFkO0FBYUg7OztzQ0FDaUJpRyxJLEVBQU1sRyxLLEVBQU9DLEssRUFBT3FVLEssRUFBT3pQLE0sRUFBdUU7QUFBQSxVQUEvRDBQLE1BQStELHVFQUF0RCxRQUFzRDtBQUFBLFVBQTVDQyxhQUE0Qyx1RUFBNUIsS0FBNEI7QUFBQSxVQUFyQkMsZUFBcUIsdUVBQUgsQ0FBRzs7QUFDaEgsVUFBSSxDQUFDLEtBQUtPLE1BQVYsRUFBa0I7QUFDZDtBQUNIOztBQUNELFdBQUtBLE1BQUwsQ0FBWWIsSUFBWixHQUFtQjtBQUNmak8sWUFBSSxFQUFKQSxJQURlO0FBRWZsRyxhQUFLLEVBQUxBLEtBRmU7QUFHZkMsYUFBSyxFQUFMQSxLQUhlO0FBSWZxVSxhQUFLLEVBQUxBLEtBSmU7QUFLZnpQLGNBQU0sRUFBTkEsTUFMZTtBQU1mMFAsY0FBTSxFQUFOQSxNQU5lO0FBT2ZDLHFCQUFhLEVBQWJBLGFBUGU7QUFRZkMsdUJBQWUsRUFBZkE7QUFSZSxPQUFuQjtBQVVIOzs7b0NBQ2VySyxHLEVBQUt2RixNLEVBQXVDO0FBQUEsVUFBL0J1UCxNQUErQix1RUFBdEIsSUFBc0I7QUFBQSxVQUFoQkMsTUFBZ0IsdUVBQVAsS0FBTzs7QUFDeEQsVUFBSSxDQUFDLEtBQUtXLE1BQVYsRUFBa0I7QUFDZDtBQUNIOztBQUNELFdBQUtBLE1BQUwsQ0FBWWIsSUFBWixHQUFtQjtBQUNmak8sWUFBSSxFQUFFLFFBRFM7QUFFZmtFLFdBQUcsRUFBSEEsR0FGZTtBQUdmdkYsY0FBTSxFQUFOQSxNQUhlO0FBSWZ1UCxjQUFNLEVBQU5BLE1BSmU7QUFLZkMsY0FBTSxFQUFOQTtBQUxlLE9BQW5CO0FBT0g7OzsyQkFDTWpPLEMsRUFBR0MsQyxFQUFHO0FBQ1QsVUFBTXFMLElBQUksR0FBRyxLQUFLdUQsU0FBTCxFQUFiO0FBQ0F2RCxVQUFJLENBQUN3RCxJQUFMLENBQVU7QUFBRWhQLFlBQUksRUFBRSxRQUFSO0FBQWtCRSxTQUFDLEVBQURBLENBQWxCO0FBQXFCQyxTQUFDLEVBQURBO0FBQXJCLE9BQVY7QUFDSDs7OzJCQUNNRCxDLEVBQUdDLEMsRUFBRztBQUNULFVBQU1xTCxJQUFJLEdBQUcsS0FBS3lELE9BQUwsRUFBYjs7QUFDQSxVQUFJLENBQUN6RCxJQUFMLEVBQVc7QUFDUDtBQUNIOztBQUNEQSxVQUFJLENBQUN3RCxJQUFMLENBQVU7QUFBRWhQLFlBQUksRUFBRSxRQUFSO0FBQWtCRSxTQUFDLEVBQURBLENBQWxCO0FBQXFCQyxTQUFDLEVBQURBO0FBQXJCLE9BQVY7QUFDSDs7OzRCQUNPd0wsRSxFQUFJQyxFLEVBQUkxTCxDLEVBQUdDLEMsRUFBRztBQUNsQixVQUFNcUwsSUFBSSxHQUFHLEtBQUt5RCxPQUFMLEVBQWI7O0FBQ0EsVUFBSSxDQUFDekQsSUFBTCxFQUFXO0FBQ1A7QUFDSDs7QUFDREEsVUFBSSxDQUFDd0QsSUFBTCxDQUFVO0FBQ05oUCxZQUFJLEVBQUUsU0FEQTtBQUNXMkwsVUFBRSxFQUFGQSxFQURYO0FBQ2VDLFVBQUUsRUFBRkEsRUFEZjtBQUNtQjFMLFNBQUMsRUFBREEsQ0FEbkI7QUFDc0JDLFNBQUMsRUFBREE7QUFEdEIsT0FBVjtBQUdIOzs7aUNBQ1l3TCxFLEVBQUlDLEUsRUFBSUUsRSxFQUFJQyxFLEVBQUk3TCxDLEVBQUdDLEMsRUFBRztBQUMvQixVQUFNcUwsSUFBSSxHQUFHLEtBQUt5RCxPQUFMLEVBQWI7O0FBQ0EsVUFBSSxDQUFDekQsSUFBTCxFQUFXO0FBQ1A7QUFDSDs7QUFDREEsVUFBSSxDQUFDd0QsSUFBTCxDQUFVO0FBQ05oUCxZQUFJLEVBQUUsU0FEQTtBQUNXMkwsVUFBRSxFQUFGQSxFQURYO0FBQ2VDLFVBQUUsRUFBRkEsRUFEZjtBQUNtQkUsVUFBRSxFQUFGQSxFQURuQjtBQUN1QkMsVUFBRSxFQUFGQSxFQUR2QjtBQUMyQjdMLFNBQUMsRUFBREEsQ0FEM0I7QUFDOEJDLFNBQUMsRUFBREE7QUFEOUIsT0FBVjtBQUdIOzs7a0NBQ2FELEMsRUFBR0MsQyxFQUFHN0UsSyxFQUFPQyxNLEVBQTZDO0FBQUEsVUFBckMyVCxZQUFxQyx1RUFBdEIsQ0FBc0I7QUFBQSxVQUFuQkMsYUFBbUIsdUVBQUgsQ0FBRztBQUNwRSxVQUFNM0QsSUFBSSxHQUFHLEtBQUt1RCxTQUFMLEVBQWI7QUFDQSxVQUFNSyxDQUFDLEdBQUdGLFlBQVY7QUFDQSxVQUFNRyxDQUFDLEdBQUdGLGFBQVY7QUFDQSxVQUFNRyxDQUFDLEdBQUcsU0FBVjtBQUNBLFVBQU1DLEVBQUUsR0FBSUgsQ0FBQyxHQUFHLENBQUwsR0FBVUUsQ0FBckI7QUFDQSxVQUFNRSxFQUFFLEdBQUlILENBQUMsR0FBRyxDQUFMLEdBQVVDLENBQXJCO0FBQ0EsVUFBTUcsRUFBRSxHQUFHdlAsQ0FBQyxHQUFHa1AsQ0FBZjtBQUNBLFVBQU1NLEVBQUUsR0FBR3ZQLENBQUMsR0FBR2tQLENBQWY7QUFDQSxVQUFNTSxFQUFFLEdBQUd6UCxDQUFDLEdBQUdrUCxDQUFDLEdBQUcsQ0FBbkI7QUFDQSxVQUFNUSxFQUFFLEdBQUd6UCxDQUFDLEdBQUdrUCxDQUFDLEdBQUcsQ0FBbkI7QUFDQSxVQUFNUSxFQUFFLEdBQUd2VSxLQUFLLEdBQUc4VCxDQUFuQjtBQUNBLFVBQU1VLEVBQUUsR0FBR3ZVLE1BQU0sR0FBRzhULENBQXBCO0FBQ0E3RCxVQUFJLENBQUN3RCxJQUFMLENBQVU7QUFDTmhQLFlBQUksRUFBRSxRQURBO0FBRU5FLFNBQUMsRUFBREEsQ0FGTTtBQUdOQyxTQUFDLEVBQUV5UDtBQUhHLE9BQVY7QUFLQXBFLFVBQUksQ0FBQ3dELElBQUwsQ0FBVTtBQUNOaFAsWUFBSSxFQUFFLGNBREE7QUFFTjJMLFVBQUUsRUFBRXpMLENBRkU7QUFHTjBMLFVBQUUsRUFBRWdFLEVBQUUsR0FBR0osRUFISDtBQUlOMUQsVUFBRSxFQUFFNkQsRUFBRSxHQUFHSixFQUpIO0FBS054RCxVQUFFLEVBQUU1TCxDQUxFO0FBTU5ELFNBQUMsRUFBRXlQLEVBTkc7QUFPTnhQLFNBQUMsRUFBREE7QUFQTSxPQUFWO0FBU0FxTCxVQUFJLENBQUN3RCxJQUFMLENBQVU7QUFDTmhQLFlBQUksRUFBRSxRQURBO0FBRU5FLFNBQUMsRUFBRXlQLEVBQUUsR0FBR0UsRUFGRjtBQUdOMVAsU0FBQyxFQUFEQTtBQUhNLE9BQVY7QUFLQXFMLFVBQUksQ0FBQ3dELElBQUwsQ0FBVTtBQUNOaFAsWUFBSSxFQUFFLGNBREE7QUFFTjJMLFVBQUUsRUFBRWdFLEVBQUUsR0FBR0osRUFBTCxHQUFVTSxFQUZSO0FBR05qRSxVQUFFLEVBQUV6TCxDQUhFO0FBSU4yTCxVQUFFLEVBQUUyRCxFQUFFLEdBQUdJLEVBSkg7QUFLTjlELFVBQUUsRUFBRTZELEVBQUUsR0FBR0osRUFMSDtBQU1OdFAsU0FBQyxFQUFFdVAsRUFBRSxHQUFHSSxFQU5GO0FBT04xUCxTQUFDLEVBQUV5UDtBQVBHLE9BQVY7QUFTQXBFLFVBQUksQ0FBQ3dELElBQUwsQ0FBVTtBQUNOaFAsWUFBSSxFQUFFLFFBREE7QUFFTkUsU0FBQyxFQUFFdVAsRUFBRSxHQUFHSSxFQUZGO0FBR04xUCxTQUFDLEVBQUV5UCxFQUFFLEdBQUdFO0FBSEYsT0FBVjtBQUtBdEUsVUFBSSxDQUFDd0QsSUFBTCxDQUFVO0FBQ05oUCxZQUFJLEVBQUUsY0FEQTtBQUVOMkwsVUFBRSxFQUFFOEQsRUFBRSxHQUFHSSxFQUZIO0FBR05qRSxVQUFFLEVBQUVnRSxFQUFFLEdBQUdKLEVBQUwsR0FBVU0sRUFIUjtBQUlOaEUsVUFBRSxFQUFFNkQsRUFBRSxHQUFHSixFQUFMLEdBQVVNLEVBSlI7QUFLTjlELFVBQUUsRUFBRTJELEVBQUUsR0FBR0ksRUFMSDtBQU1ONVAsU0FBQyxFQUFFeVAsRUFBRSxHQUFHRSxFQU5GO0FBT04xUCxTQUFDLEVBQUV1UCxFQUFFLEdBQUdJO0FBUEYsT0FBVjtBQVNBdEUsVUFBSSxDQUFDd0QsSUFBTCxDQUFVO0FBQ05oUCxZQUFJLEVBQUUsUUFEQTtBQUVORSxTQUFDLEVBQUV5UCxFQUZHO0FBR054UCxTQUFDLEVBQUV1UCxFQUFFLEdBQUdJO0FBSEYsT0FBVjtBQUtBdEUsVUFBSSxDQUFDd0QsSUFBTCxDQUFVO0FBQ05oUCxZQUFJLEVBQUUsY0FEQTtBQUVOMkwsVUFBRSxFQUFFZ0UsRUFBRSxHQUFHSixFQUZIO0FBR04zRCxVQUFFLEVBQUU4RCxFQUFFLEdBQUdJLEVBSEg7QUFJTmhFLFVBQUUsRUFBRTVMLENBSkU7QUFLTjZMLFVBQUUsRUFBRTZELEVBQUUsR0FBR0osRUFBTCxHQUFVTSxFQUxSO0FBTU41UCxTQUFDLEVBQURBLENBTk07QUFPTkMsU0FBQyxFQUFFeVAsRUFBRSxHQUFHRTtBQVBGLE9BQVY7QUFTSDs7OzZCQUNRNVAsQyxFQUFHQyxDLEVBQUc3RSxLLEVBQU9DLE0sRUFBUTtBQUMxQixVQUFNbU8sSUFBSSxHQUFHLEtBQUtxRyxVQUFMLEVBQWI7QUFDQXJHLFVBQUksQ0FBQzFKLElBQUwsR0FBWSxXQUFaO0FBQ0EwSixVQUFJLENBQUN4SixDQUFMLEdBQVNBLENBQVQ7QUFDQXdKLFVBQUksQ0FBQ3ZKLENBQUwsR0FBU0EsQ0FBVDtBQUNBdUosVUFBSSxDQUFDcE8sS0FBTCxHQUFhQSxLQUFiO0FBQ0FvTyxVQUFJLENBQUNuTyxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7OytCQUNVMkUsQyxFQUFHQyxDLEVBQUc0SyxNLEVBQVE7QUFDckIsVUFBTXJCLElBQUksR0FBRyxLQUFLcUcsVUFBTCxFQUFiO0FBQ0FyRyxVQUFJLENBQUMxSixJQUFMLEdBQVksU0FBWjtBQUNBMEosVUFBSSxDQUFDeEosQ0FBTCxHQUFTQSxDQUFUO0FBQ0F3SixVQUFJLENBQUN2SixDQUFMLEdBQVNBLENBQVQ7QUFDQXVKLFVBQUksQ0FBQ3FCLE1BQUwsR0FBY0EsTUFBZDtBQUNIOzs7Z0NBQ1c3SyxDLEVBQUdDLEMsRUFBRzdFLEssRUFBT0MsTSxFQUFRO0FBQzdCLFVBQU1tTyxJQUFJLEdBQUcsS0FBS3FHLFVBQUwsRUFBYjtBQUNBckcsVUFBSSxDQUFDMUosSUFBTCxHQUFZLFNBQVo7QUFDQTBKLFVBQUksQ0FBQ3NCLE9BQUwsR0FBZTFQLEtBQUssR0FBRyxDQUF2QjtBQUNBb08sVUFBSSxDQUFDdUIsT0FBTCxHQUFlMVAsTUFBTSxHQUFHLENBQXhCO0FBQ0FtTyxVQUFJLENBQUN4SixDQUFMLEdBQVNBLENBQUMsR0FBR3dKLElBQUksQ0FBQ3NCLE9BQWxCO0FBQ0F0QixVQUFJLENBQUN2SixDQUFMLEdBQVNBLENBQUMsR0FBR3VKLElBQUksQ0FBQ3VCLE9BQWxCO0FBQ0g7Ozs0QkFDTztBQUNKLGFBQU8sS0FBSytDLEtBQUwsQ0FBV3RFLElBQWxCO0FBQ0g7OztpQ0FDWTtBQUFBLFVBQ0RzRSxLQURDLEdBQ3VCLElBRHZCLENBQ0RBLEtBREM7QUFBQSxVQUNNQyxJQUROLEdBQ3VCLElBRHZCLENBQ01BLElBRE47QUFBQSxVQUNZYSxNQURaLEdBQ3VCLElBRHZCLENBQ1lBLE1BRFo7O0FBRVQsVUFBSWxTLEtBQUssQ0FBQ0MsT0FBTixDQUFjbVIsS0FBSyxDQUFDdEUsSUFBcEIsQ0FBSixFQUErQixDQUM5QixDQURELE1BRUssSUFBSSxRQUFPc0UsS0FBSyxDQUFDdEUsSUFBYixNQUFzQixRQUExQixFQUFvQztBQUNyQ3NFLGFBQUssQ0FBQ3RFLElBQU4sR0FBYSxDQUFDc0UsS0FBSyxDQUFDdEUsSUFBUCxDQUFiO0FBQ0gsT0FGSSxNQUdBO0FBQ0RzRSxhQUFLLENBQUN0RSxJQUFOLEdBQWEsRUFBYjtBQUNIOztBQUNELFVBQU1zRyxZQUFZLEdBQUc7QUFBRWhRLFlBQUksRUFBRSxNQUFSO0FBQWdCaU8sWUFBSSxFQUFKQSxJQUFoQjtBQUFzQmEsY0FBTSxFQUFOQTtBQUF0QixPQUFyQjtBQUNBZCxXQUFLLENBQUN0RSxJQUFOLENBQVdzRixJQUFYLENBQWdCZ0IsWUFBaEI7QUFDQSxhQUFPQSxZQUFQO0FBQ0g7OztnQ0FDVztBQUNSLFVBQU10RyxJQUFJLEdBQUcsS0FBS3FHLFVBQUwsRUFBYjtBQUNBckcsVUFBSSxDQUFDQSxJQUFMLEdBQVksRUFBWjtBQUNBLGFBQU9BLElBQUksQ0FBQ0EsSUFBWjtBQUNIOzs7OEJBQ1M7QUFBQSxVQUNFc0UsS0FERixHQUNZLElBRFosQ0FDRUEsS0FERjs7QUFFTixVQUFJLENBQUNwUixLQUFLLENBQUNDLE9BQU4sQ0FBY21SLEtBQUssQ0FBQ3RFLElBQXBCLENBQUQsSUFBOEIsQ0FBQ3NFLEtBQUssQ0FBQ3RFLElBQU4sQ0FBVzVNLE1BQTlDLEVBQXNEO0FBQ2xELGVBQU9xTixTQUFQO0FBQ0g7O0FBQ0QsVUFBTVQsSUFBSSxHQUFHc0UsS0FBSyxDQUFDdEUsSUFBTixDQUFXc0UsS0FBSyxDQUFDdEUsSUFBTixDQUFXNU0sTUFBWCxHQUFvQixDQUEvQixDQUFiOztBQUNBLFVBQUksQ0FBQ0YsS0FBSyxDQUFDQyxPQUFOLENBQWM2TSxJQUFJLENBQUNBLElBQW5CLENBQUwsRUFBK0I7QUFDM0IsZUFBT1MsU0FBUDtBQUNIOztBQUNELGFBQU9ULElBQUksQ0FBQ0EsSUFBWjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BPTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ08sU0FBU3VHLFdBQVQsQ0FBcUJqQyxLQUFyQixFQUE0QjlRLE9BQTVCLEVBQXFDLENBQzNDO0FBQ00sU0FBU2dULHlCQUFULENBQW1DL1MsT0FBbkMsRUFBNEM7QUFDL0NnVCw2REFBbUIsQ0FBQ2hULE9BQUQsQ0FBbkI7QUFDQUEsU0FBTyxDQUFDYSxjQUFSLENBQXVCRCxHQUF2QixDQUEyQnFTLHlDQUEzQixFQUFrQ0gsV0FBbEM7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNRyxLQUFLLEdBQUcsT0FBZDtBQUNBLElBQUlDLEtBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxLQUFWLEVBQWlCO0FBQ2QsV0FBU0MsV0FBVCxDQUFxQnRDLEtBQXJCLEVBQTRCO0FBQ3hCLFdBQU8sSUFBSUQsOENBQUosQ0FBYUMsS0FBYixDQUFQO0FBQ0g7O0FBQ0RxQyxPQUFLLENBQUNDLFdBQU4sR0FBb0JBLFdBQXBCOztBQUNBLFdBQVNwRyxTQUFULENBQW1COEQsS0FBbkIsRUFBMEI7QUFBQSxRQUNkdEUsSUFEYyxHQUNMc0UsS0FESyxDQUNkdEUsSUFEYzs7QUFFdEIsUUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUCxhQUFPUyxTQUFQO0FBQ0g7O0FBQ0QsUUFBTS9ELE1BQU0sR0FBR1YsbURBQUEsRUFBZjs7QUFDQSxRQUFJOUksS0FBSyxDQUFDQyxPQUFOLENBQWM2TSxJQUFkLENBQUosRUFBeUI7QUFDckIsV0FBSyxJQUFJcE0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR29NLElBQUksQ0FBQzVNLE1BQXpCLEVBQWlDUSxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDaU8sNEVBQUEsQ0FBNkI3QixJQUFJLENBQUNwTSxDQUFELENBQWpDLEVBQXNDOEksTUFBdEM7QUFDSDtBQUNKLEtBSkQsTUFLSyxJQUFJLFFBQU9zRCxJQUFQLE1BQWdCLFFBQXBCLEVBQThCO0FBQy9CNkIsMEVBQUEsQ0FBNkI3QixJQUE3QixFQUFtQ3RELE1BQW5DO0FBQ0gsS0FGSSxNQUdBO0FBQ0QsYUFBTytELFNBQVA7QUFDSDs7QUFDRCxRQUFJekUscURBQUEsQ0FBZVUsTUFBZixDQUFKLEVBQTRCO0FBQ3hCLGFBQU8rRCxTQUFQO0FBQ0g7O0FBQ0QsUUFBTTdPLEtBQUssR0FBRzhLLE1BQU0sQ0FBQ0osSUFBUCxHQUFjSSxNQUFNLENBQUNSLElBQW5DO0FBQ0EsUUFBTXJLLE1BQU0sR0FBRzZLLE1BQU0sQ0FBQ0YsSUFBUCxHQUFjRSxNQUFNLENBQUNMLElBQXBDO0FBQ0EsUUFBTTdGLENBQUMsR0FBR2tHLE1BQU0sQ0FBQ1IsSUFBUCxHQUFjMUMsbURBQUEsQ0FBVzhLLEtBQVgsRUFBa0IxUyxLQUFsQixDQUF4QjtBQUNBLFFBQU02RSxDQUFDLEdBQUdpRyxNQUFNLENBQUNMLElBQVAsR0FBYzdDLG1EQUFBLENBQVc4SyxLQUFYLEVBQWtCelMsTUFBbEIsQ0FBeEI7QUFDQSxXQUFPO0FBQ0gyRSxPQUFDLEVBQURBLENBREc7QUFDQUMsT0FBQyxFQUFEQSxDQURBO0FBQ0c3RSxXQUFLLEVBQUxBLEtBREg7QUFDVUMsWUFBTSxFQUFOQTtBQURWLEtBQVA7QUFHSDs7QUFDRDhVLE9BQUssQ0FBQ25HLFNBQU4sR0FBa0JBLFNBQWxCO0FBQ0gsQ0FsQ0QsRUFrQ0dtRyxLQUFLLEtBQUtBLEtBQUssR0FBRyxFQUFiLENBbENSOztBQW1DTyxTQUFTM1MsT0FBVCxDQUFpQnNRLEtBQWpCLEVBQXdCOVEsT0FBeEIsRUFBaUM7QUFBQSxNQUM1QmtELEtBRDRCLEdBQ2xCbEQsT0FEa0IsQ0FDNUJrRCxLQUQ0QjtBQUVwQyxNQUFNZ0csTUFBTSxHQUFHaUssS0FBSyxDQUFDbkcsU0FBTixDQUFnQjhELEtBQWhCLENBQWY7QUFDQSxTQUFPLENBQUMsQ0FBQzVILE1BQUYsSUFBWWtDLHlEQUFBLENBQW1CbEMsTUFBbkIsRUFBMkJoRyxLQUEzQixDQUFuQjtBQUNIO0FBQ00sU0FBUytQLG1CQUFULENBQTZCaFQsT0FBN0IsRUFBc0M7QUFDekNBLFNBQU8sQ0FBQ2MsZUFBUixDQUF3QkYsR0FBeEIsQ0FBNEJxUyxLQUE1QixFQUFtQzFTLE9BQW5DO0FBQ0FQLFNBQU8sQ0FBQ3NELFNBQVIsQ0FBa0JFLFNBQWxCLENBQTRCeUosR0FBNUIsQ0FBZ0NDLHdEQUFoQztBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERELElBQU10UCxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0EsSUFBTWlDLE9BQU8sR0FBR25DLE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFoQjtBQUNPLElBQU1vVixFQUFFLEdBQUcsSUFBWDtBQUNQLElBQU1DLEtBQUssR0FBRyxJQUFJOVAsR0FBSixFQUFkO0FBQ08sU0FBUytQLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCcEUsSUFBNUIsRUFBa0M7QUFDckMsbUJBQVVBLElBQVYsZ0JBQW9Cb0UsSUFBcEI7QUFDSDtBQUNNLFNBQVNDLFdBQVQsQ0FBcUJELElBQXJCLEVBQTJCcEUsSUFBM0IsRUFBaUNzRSxJQUFqQyxFQUF1QztBQUMxQzFULFNBQU8sQ0FBQ3dULElBQVIsR0FBZUQsWUFBWSxDQUFDQyxJQUFELEVBQU9wRSxJQUFQLENBQTNCO0FBQ0EsU0FBT3BQLE9BQU8sQ0FBQ3lULFdBQVIsQ0FBb0JDLElBQXBCLEVBQTBCdFYsS0FBakM7QUFDSDtBQUNNLFNBQVN1VixZQUFULENBQXNCSCxJQUF0QixFQUE0QmhFLEtBQTVCLEVBQWtDO0FBQ3JDLE1BQUlwUixLQUFLLEdBQUdvVixJQUFJLENBQUNJLE1BQUwsQ0FBWS9QLEdBQVosQ0FBZ0IyTCxLQUFoQixDQUFaOztBQUNBLE1BQUksQ0FBQ3BSLEtBQUwsRUFBWTtBQUNSQSxTQUFLLEdBQUdxVixXQUFXLENBQUNELElBQUksQ0FBQ0ssSUFBTixFQUFZUixFQUFaLEVBQWdCN0QsS0FBaEIsQ0FBbkI7QUFDQWdFLFFBQUksQ0FBQ0ksTUFBTCxDQUFZL1MsR0FBWixDQUFnQjJPLEtBQWhCLEVBQXNCcFIsS0FBdEI7QUFDSDs7QUFDRCxTQUFPQSxLQUFQO0FBQ0g7QUFDTSxTQUFTMFYsVUFBVCxDQUFvQk4sSUFBcEIsRUFBMEJPLEtBQTFCLEVBQWlDQyxNQUFqQyxFQUF5QztBQUM1QyxNQUFNQyxJQUFJLEdBQUdGLEtBQUssR0FBR0MsTUFBckI7QUFDQSxNQUFJRSxPQUFPLEdBQUdWLElBQUksQ0FBQ1csUUFBTCxDQUFjdFEsR0FBZCxDQUFrQm9RLElBQWxCLENBQWQ7O0FBQ0EsTUFBSSxDQUFDQyxPQUFMLEVBQWM7QUFDVixRQUFNRSxXQUFXLEdBQUdULFlBQVksQ0FBQ0gsSUFBRCxFQUFPUSxNQUFQLENBQWhDO0FBQ0EsUUFBTUssVUFBVSxHQUFHWixXQUFXLENBQUNELElBQUksQ0FBQ0ssSUFBTixFQUFZUixFQUFaLEVBQWdCVSxLQUFLLEdBQUdDLE1BQXhCLENBQTlCO0FBQ0FFLFdBQU8sR0FBR0csVUFBVSxHQUFHRCxXQUF2QjtBQUNBWixRQUFJLENBQUNXLFFBQUwsQ0FBY3RULEdBQWQsQ0FBa0JvVCxJQUFsQixFQUF3QkMsT0FBeEI7QUFDSDs7QUFDRCxTQUFPQSxPQUFQO0FBQ0g7QUFDTSxTQUFTSSxVQUFULENBQW9CZCxJQUFwQixFQUEwQnBFLElBQTFCLEVBQWdDMkUsS0FBaEMsRUFBdUNDLE1BQXZDLEVBQStDO0FBQ2xELE1BQU10TSxLQUFLLEdBQUcwSCxJQUFJLEdBQUdpRSxFQUFyQjtBQUNBLE1BQU1qVixLQUFLLEdBQUd1VixZQUFZLENBQUNILElBQUQsRUFBT08sS0FBUCxDQUExQjs7QUFDQSxNQUFJLENBQUNDLE1BQUwsRUFBYTtBQUNULFdBQU81VixLQUFLLEdBQUdzSixLQUFmO0FBQ0g7O0FBQ0QsTUFBTXdNLE9BQU8sR0FBR0osVUFBVSxDQUFDTixJQUFELEVBQU9PLEtBQVAsRUFBY0MsTUFBZCxDQUExQjtBQUNBLFNBQU9FLE9BQU8sR0FBR3hNLEtBQWpCO0FBQ0g7QUFDTSxTQUFTNk0sT0FBVCxDQUFpQlYsSUFBakIsRUFBdUI7QUFDMUIsTUFBSUwsSUFBSSxHQUFHRixLQUFLLENBQUN6UCxHQUFOLENBQVVnUSxJQUFWLENBQVg7O0FBQ0EsTUFBSSxDQUFDTCxJQUFMLEVBQVc7QUFDUEEsUUFBSSxHQUFHO0FBQ0hLLFVBQUksRUFBSkEsSUFERztBQUVIRCxZQUFNLEVBQUUsSUFBSXBRLEdBQUosRUFGTDtBQUdIMlEsY0FBUSxFQUFFLElBQUkzUSxHQUFKO0FBSFAsS0FBUDtBQUtBOFAsU0FBSyxDQUFDelMsR0FBTixDQUFVZ1QsSUFBVixFQUFnQkwsSUFBaEI7QUFDSDs7QUFDRCxTQUFPQSxJQUFQO0FBQ0g7QUFDTSxTQUFTZ0IsWUFBVCxDQUFzQmhCLElBQXRCLEVBQTRCaUIsTUFBNUIsRUFBb0NDLElBQXBDLEVBQTBDO0FBQzdDLE1BQUl0VyxLQUFLLEdBQUcsQ0FBWjs7QUFDQSxPQUFLLElBQUlnQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHc1UsSUFBSSxDQUFDOVUsTUFBekIsRUFBaUNRLENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsUUFBTTJULEtBQUssR0FBR1csSUFBSSxDQUFDaE8sTUFBTCxDQUFZdEcsQ0FBWixDQUFkO0FBQ0EsUUFBTTRULE1BQU0sR0FBR1UsSUFBSSxDQUFDaE8sTUFBTCxDQUFZdEcsQ0FBQyxHQUFHLENBQWhCLENBQWY7QUFDQSxRQUFNdVUsT0FBTyxHQUFHTCxVQUFVLENBQUNkLElBQUQsRUFBT2lCLE1BQU0sQ0FBQ3JGLElBQWQsRUFBb0IyRSxLQUFwQixFQUEyQkMsTUFBM0IsQ0FBMUI7QUFDQTVWLFNBQUssSUFBSXVXLE9BQVQ7QUFDSDs7QUFDRCxNQUFJRixNQUFNLENBQUNHLGFBQVAsSUFBd0JGLElBQUksQ0FBQzlVLE1BQUwsR0FBYyxDQUExQyxFQUE2QztBQUN6Q3hCLFNBQUssSUFBSXFXLE1BQU0sQ0FBQ0csYUFBUCxJQUF3QkYsSUFBSSxDQUFDOVUsTUFBTCxHQUFjLENBQXRDLENBQVQ7QUFDSDs7QUFDRCxTQUFPeEIsS0FBUDtBQUNIO0FBQ00sU0FBU3lXLFlBQVQsQ0FBc0JyQixJQUF0QixFQUE0QmlCLE1BQTVCLEVBQW9DSyxLQUFwQyxFQUEyQztBQUM5QyxNQUFJMVcsS0FBSyxHQUFHLENBQVo7O0FBQ0EsT0FBSyxJQUFJZ0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzBVLEtBQUssQ0FBQ2xWLE1BQTFCLEVBQWtDUSxDQUFDLEVBQW5DLEVBQXVDO0FBQ25DLFFBQU1zVSxJQUFJLEdBQUdJLEtBQUssQ0FBQzFVLENBQUQsQ0FBbEI7QUFDQSxRQUFNMlUsU0FBUyxHQUFHUCxZQUFZLENBQUNoQixJQUFELEVBQU9pQixNQUFQLEVBQWVDLElBQWYsQ0FBOUI7O0FBQ0EsUUFBSXRXLEtBQUssR0FBRzJXLFNBQVosRUFBdUI7QUFDbkIzVyxXQUFLLEdBQUcyVyxTQUFSO0FBQ0g7QUFDSjs7QUFDRCxTQUFPM1csS0FBUDtBQUNIO0FBQ00sU0FBUzRXLGFBQVQsQ0FBdUJQLE1BQXZCLEVBQStCSyxLQUEvQixFQUFzQztBQUN6QyxNQUFJelcsTUFBTSxHQUFHb1csTUFBTSxDQUFDckYsSUFBUCxHQUFjMEYsS0FBSyxDQUFDbFYsTUFBakM7O0FBQ0EsTUFBSTZVLE1BQU0sQ0FBQ1EsT0FBUCxJQUFrQkgsS0FBSyxDQUFDbFYsTUFBTixHQUFlLENBQXJDLEVBQXdDO0FBQ3BDdkIsVUFBTSxJQUFJb1csTUFBTSxDQUFDUSxPQUFQLElBQWtCSCxLQUFLLENBQUNsVixNQUFOLEdBQWUsQ0FBakMsQ0FBVjtBQUNIOztBQUNELFNBQU92QixNQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRk0sSUFBTTZXLGlCQUFpQixHQUFHO0FBQzdCMUIsTUFBSSxFQUFFLE9BRHVCO0FBRTdCcEUsTUFBSSxFQUFFLEVBRnVCO0FBRzdCeFMsT0FBSyxFQUFFLENBSHNCO0FBSTdCQyxPQUFLLEVBQUUsQ0FKc0I7QUFLN0JzWSxNQUFJLEVBQUUsS0FMdUI7QUFNN0JDLFFBQU0sRUFBRSxLQU5xQjtBQU83QkMsV0FBUyxFQUFFLEtBUGtCO0FBUTdCVCxlQUFhLEVBQUUsQ0FSYztBQVM3QkssU0FBTyxFQUFFLENBVG9CO0FBVTdCSyxPQUFLLEVBQUUsTUFWc0I7QUFXN0JDLGVBQWEsRUFBRTtBQVhjLENBQTFCO0FBYVAsSUFBTWQsTUFBTSxHQUFHLEVBQWY7QUFDTyxTQUFTZSxrQkFBVCxDQUE0QkMsVUFBNUIsRUFBd0M7QUFBQTs7QUFDM0NoQixRQUFNLENBQUNqQixJQUFQLHVCQUFjaUMsVUFBZCxhQUFjQSxVQUFkLHVCQUFjQSxVQUFVLENBQUVqQyxJQUExQiwrREFBa0MwQixpQkFBaUIsQ0FBQzFCLElBQXBEO0FBQ0FpQixRQUFNLENBQUNyRixJQUFQLHVCQUFjcUcsVUFBZCxhQUFjQSxVQUFkLHVCQUFjQSxVQUFVLENBQUVyRyxJQUExQiwrREFBa0M4RixpQkFBaUIsQ0FBQzlGLElBQXBEO0FBQ0FxRixRQUFNLENBQUM3WCxLQUFQLHdCQUFlNlksVUFBZixhQUFlQSxVQUFmLHVCQUFlQSxVQUFVLENBQUU3WSxLQUEzQixpRUFBb0NzWSxpQkFBaUIsQ0FBQ3RZLEtBQXREO0FBQ0E2WCxRQUFNLENBQUM1WCxLQUFQLHdCQUFlNFksVUFBZixhQUFlQSxVQUFmLHVCQUFlQSxVQUFVLENBQUU1WSxLQUEzQixpRUFBb0NxWSxpQkFBaUIsQ0FBQ3JZLEtBQXREO0FBQ0E0WCxRQUFNLENBQUNVLElBQVAsdUJBQWNNLFVBQWQsYUFBY0EsVUFBZCx1QkFBY0EsVUFBVSxDQUFFTixJQUExQiwrREFBa0NELGlCQUFpQixDQUFDQyxJQUFwRDtBQUNBVixRQUFNLENBQUNXLE1BQVAseUJBQWdCSyxVQUFoQixhQUFnQkEsVUFBaEIsdUJBQWdCQSxVQUFVLENBQUVMLE1BQTVCLG1FQUFzQ0YsaUJBQWlCLENBQUNFLE1BQXhEO0FBQ0FYLFFBQU0sQ0FBQ1ksU0FBUCw0QkFBbUJJLFVBQW5CLGFBQW1CQSxVQUFuQix1QkFBbUJBLFVBQVUsQ0FBRUosU0FBL0IseUVBQTRDSCxpQkFBaUIsQ0FBQ0csU0FBOUQ7QUFDQVosUUFBTSxDQUFDRyxhQUFQLDRCQUF1QmEsVUFBdkIsYUFBdUJBLFVBQXZCLHVCQUF1QkEsVUFBVSxDQUFFYixhQUFuQyx5RUFBb0RNLGlCQUFpQixDQUFDTixhQUF0RTtBQUNBSCxRQUFNLENBQUNRLE9BQVAsMEJBQWlCUSxVQUFqQixhQUFpQkEsVUFBakIsdUJBQWlCQSxVQUFVLENBQUVSLE9BQTdCLHFFQUF3Q0MsaUJBQWlCLENBQUNELE9BQTFEO0FBQ0FSLFFBQU0sQ0FBQ2EsS0FBUCx3QkFBZUcsVUFBZixhQUFlQSxVQUFmLHVCQUFlQSxVQUFVLENBQUVILEtBQTNCLGlFQUFvQ0osaUJBQWlCLENBQUNJLEtBQXREO0FBQ0FiLFFBQU0sQ0FBQ2MsYUFBUCw0QkFBdUJFLFVBQXZCLGFBQXVCQSxVQUF2Qix1QkFBdUJBLFVBQVUsQ0FBRUYsYUFBbkMseUVBQW9ETCxpQkFBaUIsQ0FBQ0ssYUFBdEU7QUFDQSxTQUFPZCxNQUFQO0FBQ0g7QUFDTSxTQUFTaUIsYUFBVCxDQUF1QkosS0FBdkIsRUFBOEI7QUFDakMsVUFBUUEsS0FBUjtBQUNJLFNBQUssTUFBTDtBQUFhLGFBQU8sQ0FBUDs7QUFDYixTQUFLLFFBQUw7QUFBZSxhQUFPLEdBQVA7O0FBQ2YsU0FBSyxPQUFMO0FBQWMsYUFBTyxDQUFQOztBQUNkO0FBQVMsYUFBTyxDQUFQO0FBSmI7QUFNSDtBQUNNLFNBQVNLLHFCQUFULENBQStCTCxLQUEvQixFQUFzQztBQUN6QyxVQUFRQSxLQUFSO0FBQ0ksU0FBSyxLQUFMO0FBQVksYUFBTyxDQUFQOztBQUNaLFNBQUssUUFBTDtBQUFlLGFBQU8sR0FBUDs7QUFDZixTQUFLLFFBQUw7QUFBZSxhQUFPLENBQVA7O0FBQ2Y7QUFBUyxhQUFPLENBQVA7QUFKYjtBQU1ILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNNLGdCQUFULENBQTBCN1csU0FBMUIsRUFBcUNpQixPQUFyQyxFQUE4QztBQUFBLE1BQ3pDMFQsSUFEeUMsR0FDaEMzVSxTQURnQyxDQUN6QzJVLElBRHlDOztBQUVqRCxNQUFJLENBQUNBLElBQUwsRUFBVztBQUNQO0FBQ0g7O0FBSmdELE1BS3pDalMsTUFMeUMsR0FLZHpCLE9BTGMsQ0FLekN5QixNQUx5QztBQUFBLE1BS2pDUSxjQUxpQyxHQUtkakMsT0FMYyxDQUtqQ2lDLGNBTGlDOztBQU1qRCxNQUFJQSxjQUFjLENBQUN2RSxlQUFmLElBQWtDLENBQXRDLEVBQXlDO0FBQ3JDO0FBQ0g7O0FBQ0QsTUFBTW9YLEtBQUssR0FBR3BCLElBQUksQ0FBQ3JHLEtBQUwsQ0FBVyxJQUFYLENBQWQ7QUFUaUQsTUFVekNqUCxLQVZ5QyxHQVVVVyxTQVZWLENBVXpDWCxLQVZ5QztBQUFBLE1BVWxDQyxNQVZrQyxHQVVVVSxTQVZWLENBVWxDVixNQVZrQztBQUFBLE1BVTFCb1gsVUFWMEIsR0FVVTFXLFNBVlYsQ0FVMUIwVyxVQVYwQjtBQUFBLE1BVWRJLE1BVmMsR0FVVTlXLFNBVlYsQ0FVZDhXLE1BVmM7QUFBQSxNQVVOQyxVQVZNLEdBVVUvVyxTQVZWLENBVU4rVyxVQVZNO0FBV2pELE1BQU1yQixNQUFNLEdBQUdlLDJEQUFrQixDQUFDQyxVQUFELENBQWpDO0FBQ0EsTUFBTU0sVUFBVSxHQUFHdEIsTUFBTSxDQUFDckYsSUFBMUI7QUFDQSxNQUFNNEcsbUJBQW1CLEdBQUd2QixNQUFNLENBQUNHLGFBQW5DO0FBQ0EsTUFBTXFCLGFBQWEsR0FBR3hCLE1BQU0sQ0FBQ1EsT0FBN0I7QUFDQSxNQUFNekIsSUFBSSxHQUFHZSw4Q0FBTyxDQUFDRSxNQUFNLENBQUNqQixJQUFSLENBQXBCO0FBZmlELE1BZ0J6Q3ZULE9BaEJ5QyxHQWdCN0JELE9BaEI2QixDQWdCekNDLE9BaEJ5QztBQUFBLE1BaUJ6Q2pDLFNBakJ5QyxHQWlCM0JpQyxPQWpCMkIsQ0FpQnpDakMsU0FqQnlDO0FBa0JqRCxNQUFNa1ksU0FBUyxHQUFHckIsbURBQVksQ0FBQ3JCLElBQUQsRUFBT2lCLE1BQVAsRUFBZUssS0FBZixDQUE5QjtBQUNBLE1BQU1xQixVQUFVLEdBQUduQixvREFBYSxDQUFDUCxNQUFELEVBQVNLLEtBQVQsQ0FBaEM7QUFDQSxNQUFNc0IsU0FBUyxHQUFHaFksS0FBSCxhQUFHQSxLQUFILGNBQUdBLEtBQUgsR0FBWThYLFNBQTNCO0FBQ0EsTUFBTUcsVUFBVSxHQUFHaFksTUFBSCxhQUFHQSxNQUFILGNBQUdBLE1BQUgsR0FBYThYLFVBQTdCO0FBQ0EsTUFBTUcsT0FBTyxHQUFHdFEsbURBQUEsQ0FBV2pILFNBQVgsRUFBc0JxWCxTQUF0QixDQUFoQjtBQUNBLE1BQU1HLE9BQU8sR0FBR3ZRLG1EQUFBLENBQVdqSCxTQUFYLEVBQXNCc1gsVUFBdEIsQ0FBaEI7QUFDQSxNQUFJcFQsQ0FBQyxHQUFHLENBQVI7O0FBQ0EsTUFBSTVFLE1BQUosRUFBWTtBQUNSLFFBQU1tWSxrQkFBa0IsR0FBR2IsOERBQXFCLENBQUNsQixNQUFNLENBQUNjLGFBQVIsQ0FBaEQ7QUFDQXRTLEtBQUMsR0FBRyxDQUFDNUUsTUFBTSxHQUFHOFgsVUFBVixJQUF3Qkssa0JBQTVCOztBQUNBLFFBQUl2VCxDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1BBLE9BQUMsR0FBRyxDQUFKO0FBQ0g7QUFDSjs7QUFDRGpGLFdBQVMsQ0FBQ0UsWUFBVixDQUF1QnVELE1BQU0sQ0FBQ3ZFLENBQTlCLEVBQWlDdUUsTUFBTSxDQUFDeEUsQ0FBeEMsRUFBMkN3RSxNQUFNLENBQUM0RixDQUFsRCxFQUFxRDVGLE1BQU0sQ0FBQ2UsQ0FBNUQsRUFBK0RmLE1BQU0sQ0FBQzZGLEVBQXRFLEVBQTBFN0YsTUFBTSxDQUFDOEYsRUFBakY7QUFDQXZKLFdBQVMsQ0FBQzROLFdBQVYsR0FBd0IsQ0FBeEI7O0FBQ0EsTUFBSWtLLFVBQVUsS0FBSzdJLFNBQW5CLEVBQThCO0FBQzFCalAsYUFBUyxDQUFDeVksV0FBVixHQUF3QixFQUF4QjtBQUNBelksYUFBUyxDQUFDMFksU0FBVixHQUFzQi9aLHVFQUFrQixDQUFDbVosVUFBRCxFQUFhLENBQWIsRUFBZ0I3VCxjQUFoQixDQUF4QztBQUNBakUsYUFBUyxDQUFDNlQsU0FBVjtBQUNBN1QsYUFBUyxDQUFDMlksSUFBVixDQUFlTCxPQUFmLEVBQXdCQyxPQUF4QixFQUFpQ0gsU0FBakMsRUFBNENDLFVBQTVDO0FBQ0FyWSxhQUFTLENBQUMrUyxJQUFWO0FBQ0g7O0FBQ0QsTUFBSThFLE1BQU0sS0FBSzVJLFNBQWYsRUFBMEI7QUFDdEJqUCxhQUFTLENBQUN5WSxXQUFWLEdBQXdCOVosdUVBQWtCLENBQUNrWixNQUFELEVBQVMsQ0FBVCxFQUFZNVQsY0FBWixDQUExQztBQUNBakUsYUFBUyxDQUFDMFksU0FBVixHQUFzQixFQUF0QjtBQUNBMVksYUFBUyxDQUFDNlQsU0FBVjtBQUNBN1QsYUFBUyxDQUFDMlksSUFBVixDQUFlTCxPQUFmLEVBQXdCQyxPQUF4QixFQUFpQ0gsU0FBakMsRUFBNENDLFVBQTVDO0FBQ0FyWSxhQUFTLENBQUM0VCxNQUFWO0FBQ0g7O0FBQ0Q1VCxXQUFTLENBQUN3VixJQUFWLEdBQWlCRCxtREFBWSxDQUFDa0IsTUFBTSxDQUFDakIsSUFBUixFQUFjdUMsVUFBZCxDQUE3QjtBQUNBL1gsV0FBUyxDQUFDNFksWUFBVixHQUF5QixZQUF6QjtBQUNBNVksV0FBUyxDQUFDeVksV0FBVixHQUF3QixFQUF4QjtBQUNBelksV0FBUyxDQUFDMFksU0FBVixHQUFzQi9aLHVFQUFrQixDQUFDOFgsTUFBTSxDQUFDN1gsS0FBUixFQUFlNlgsTUFBTSxDQUFDNVgsS0FBdEIsRUFBNkJvRixjQUE3QixDQUF4QztBQUNBZ0IsR0FBQyxJQUFJc1QsT0FBTDs7QUFDQSxPQUFLLElBQUluVyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMFUsS0FBSyxDQUFDbFYsTUFBMUIsRUFBa0NRLENBQUMsRUFBbkMsRUFBdUM7QUFDbkMsUUFBTXNVLElBQUksR0FBR0ksS0FBSyxDQUFDMVUsQ0FBRCxDQUFsQjtBQUNBLFFBQU0yVSxTQUFTLEdBQUdQLG1EQUFZLENBQUNoQixJQUFELEVBQU9pQixNQUFQLEVBQWVDLElBQWYsQ0FBOUI7QUFDQSxRQUFNbUMsVUFBVSxHQUFHbkIsc0RBQWEsQ0FBQ2pCLE1BQU0sQ0FBQ2EsS0FBUixDQUFoQztBQUNBLFFBQUl0UyxDQUFDLEdBQUcsQ0FBQ29ULFNBQVMsR0FBR3JCLFNBQWIsSUFBMEI4QixVQUFsQzs7QUFDQSxRQUFJN1QsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNQQSxPQUFDLEdBQUcsQ0FBSjtBQUNIOztBQUNEQSxLQUFDLElBQUlzVCxPQUFMOztBQUNBLFNBQUssSUFBSVEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3BDLElBQUksQ0FBQzlVLE1BQXpCLEVBQWlDa1gsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxVQUFNL0MsS0FBSyxHQUFHVyxJQUFJLENBQUNoTyxNQUFMLENBQVlvUSxDQUFaLENBQWQ7QUFDQSxVQUFNOUMsTUFBTSxHQUFHVSxJQUFJLENBQUNoTyxNQUFMLENBQVlvUSxDQUFDLEdBQUcsQ0FBaEIsQ0FBZjtBQUNBLFVBQU1uQyxPQUFPLEdBQUdMLGlEQUFVLENBQUNkLElBQUQsRUFBT3VDLFVBQVAsRUFBbUJoQyxLQUFuQixFQUEwQkMsTUFBMUIsQ0FBMUI7QUFDQWhXLGVBQVMsQ0FBQytZLFFBQVYsQ0FBbUJoRCxLQUFuQixFQUEwQi9RLENBQTFCLEVBQTZCQyxDQUFDLEdBQUc4UyxVQUFqQztBQUNBL1MsT0FBQyxJQUFJMlIsT0FBTyxHQUFHcUIsbUJBQWY7QUFDSDs7QUFDRC9TLEtBQUMsSUFBSThTLFVBQVUsR0FBR0UsYUFBbEI7QUFDSDtBQUNKO0FBQ00sU0FBU2Usd0JBQVQsQ0FBa0MvVyxPQUFsQyxFQUEyQztBQUM5Q2dYLDJEQUFrQixDQUFDaFgsT0FBRCxDQUFsQjtBQUNBQSxTQUFPLENBQUNhLGNBQVIsQ0FBdUJELEdBQXZCLENBQTJCcVcsdUNBQTNCLEVBQWlDdEIsZ0JBQWpDO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkQ7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNc0IsSUFBSSxHQUFHLE1BQWI7QUFDQSxJQUFJQyxJQUFKOztBQUNQLENBQUMsVUFBVUEsSUFBVixFQUFnQjtBQUNiLFdBQVNuSyxTQUFULENBQW1Cak8sU0FBbkIsRUFBOEI7QUFBQSxRQUNsQjJVLElBRGtCLEdBQ1QzVSxTQURTLENBQ2xCMlUsSUFEa0I7O0FBRTFCLFFBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1AsYUFBT3pHLFNBQVA7QUFDSDs7QUFDRCxRQUFNNkgsS0FBSyxHQUFHcEIsSUFBSSxDQUFDckcsS0FBTCxDQUFXLElBQVgsQ0FBZDtBQUwwQixRQU1wQmpQLEtBTm9CLEdBTUZXLFNBTkUsQ0FNcEJYLEtBTm9CO0FBQUEsUUFNYkMsTUFOYSxHQU1GVSxTQU5FLENBTWJWLE1BTmE7QUFBQSxRQU9sQm9YLFVBUGtCLEdBT0gxVyxTQVBHLENBT2xCMFcsVUFQa0I7QUFRMUIsUUFBTWhCLE1BQU0sR0FBR2UsMkRBQWtCLENBQUNDLFVBQUQsQ0FBakM7O0FBQ0EsUUFBSSxDQUFDclgsS0FBTCxFQUFZO0FBQ1IsVUFBTW9WLElBQUksR0FBR2UsOENBQU8sQ0FBQ0UsTUFBTSxDQUFDakIsSUFBUixDQUFwQjtBQUNBcFYsV0FBSyxHQUFHeVcsbURBQVksQ0FBQ3JCLElBQUQsRUFBT2lCLE1BQVAsRUFBZUssS0FBZixDQUFwQjtBQUNIOztBQUNELFFBQUksQ0FBQ3pXLE1BQUwsRUFBYTtBQUNUQSxZQUFNLEdBQUcyVyxvREFBYSxDQUFDUCxNQUFELEVBQVNLLEtBQVQsQ0FBdEI7QUFDSDs7QUFDRCxRQUFNOVIsQ0FBQyxHQUFHZ0QsbURBQUEsQ0FBV2pILFNBQVgsRUFBc0JYLEtBQXRCLENBQVY7QUFDQSxRQUFNNkUsQ0FBQyxHQUFHK0MsbURBQUEsQ0FBV2pILFNBQVgsRUFBc0JWLE1BQXRCLENBQVY7QUFDQSxXQUFPO0FBQ0gyRSxPQUFDLEVBQURBLENBREc7QUFDQUMsT0FBQyxFQUFEQSxDQURBO0FBQ0c3RSxXQUFLLEVBQUxBLEtBREg7QUFDVUMsWUFBTSxFQUFOQTtBQURWLEtBQVA7QUFHSDs7QUFDRDhZLE1BQUksQ0FBQ25LLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0gsQ0F4QkQsRUF3QkdtSyxJQUFJLEtBQUtBLElBQUksR0FBRyxFQUFaLENBeEJQOztBQXlCTyxTQUFTM1csT0FBVCxDQUFpQmtULElBQWpCLEVBQXVCMVQsT0FBdkIsRUFBZ0M7QUFBQSxNQUMzQmtELEtBRDJCLEdBQ2pCbEQsT0FEaUIsQ0FDM0JrRCxLQUQyQjtBQUVuQyxNQUFNZ0csTUFBTSxHQUFHaU8sSUFBSSxDQUFDbkssU0FBTCxDQUFlMEcsSUFBZixDQUFmO0FBQ0EsU0FBTyxDQUFDLENBQUN4SyxNQUFGLElBQVlrQyx5REFBQSxDQUFtQmxDLE1BQW5CLEVBQTJCaEcsS0FBM0IsQ0FBbkI7QUFDSDtBQUNNLFNBQVMrVCxrQkFBVCxDQUE0QmhYLE9BQTVCLEVBQXFDO0FBQ3hDQSxTQUFPLENBQUNjLGVBQVIsQ0FBd0JGLEdBQXhCLENBQTRCcVcsSUFBNUIsRUFBa0MxVyxPQUFsQztBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDTSxJQUFNNFcsTUFBTSxHQUFHLFFBQWY7QUFDQSxJQUFNQyxTQUFTLEdBQUcsV0FBbEI7QUFDQSxJQUFNQyxZQUFZLEdBQUcsYUFBckI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsY0FBdEI7QUFDQSxJQUFNQyxLQUFLLEdBQUcsT0FBZDtBQUNBLElBQU1DLFFBQVEsR0FBRyxTQUFqQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxZQUFwQjtBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxZQUFwQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxTQUFuQjtBQUNBLElBQU1DLGFBQWEsR0FBRyxXQUF0QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxZQUF2QjtBQUNBLElBQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUNBLElBQU1DLGNBQWMsR0FBRyxlQUF2QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxnQkFBeEI7QUFDQSxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsWUFBcEI7QUFDQSxJQUFNQyxZQUFZLEdBQUcsYUFBckI7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsWUFBcEI7QUFDQSxJQUFNQyxJQUFJLEdBQUcsTUFBYjtBQUNBLElBQU1DLE9BQU8sR0FBRyxRQUFoQjtBQUNBLElBQU1DLFFBQVEsR0FBRyxTQUFqQjtBQUNBLElBQU1DLE1BQU0sR0FBRyxRQUFmO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFVBQWxCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsSUFBTUMsTUFBTSwyQ0FDZC9CLE1BRGMsRUFDTCxVQUFDcFAsS0FBRDtBQUFBLFNBQVdBLEtBQVg7QUFBQSxDQURLLDRCQUVkcVAsU0FGYyxFQUVGLFVBQUNyUCxLQUFELEVBQVc7QUFDcEIsTUFBSSxDQUFDQSxLQUFLLElBQUksQ0FBVixJQUFlLENBQW5CLEVBQXNCO0FBQ2xCLFdBQU8sTUFBTUEsS0FBTixHQUFjQSxLQUFyQjtBQUNIOztBQUNELFNBQU8sQ0FBQyxHQUFELElBQVEsRUFBRUEsS0FBRixJQUFXQSxLQUFLLEdBQUcsQ0FBbkIsSUFBd0IsQ0FBaEMsQ0FBUDtBQUNILENBUGMsNEJBUWRzUCxZQVJjLEVBUUMsVUFBQ3RQLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLEdBQUdBLEtBQXBCO0FBQUEsQ0FSRCw0QkFTZHVQLGFBVGMsRUFTRSxVQUFDdlAsS0FBRDtBQUFBLFNBQVlBLEtBQUssSUFBSSxJQUFJQSxLQUFSLENBQWpCO0FBQUEsQ0FURiw0QkFVZHdQLEtBVmMsRUFVTixVQUFDeFAsS0FBRCxFQUFXO0FBQ2hCLE1BQUksQ0FBQ0EsS0FBSyxJQUFJLENBQVYsSUFBZSxDQUFuQixFQUFzQjtBQUNsQixXQUFPLE1BQU1BLEtBQU4sR0FBY0EsS0FBZCxHQUFzQkEsS0FBN0I7QUFDSDs7QUFDRCxTQUFPLE9BQU8sQ0FBQ0EsS0FBSyxJQUFJLENBQVYsSUFBZUEsS0FBZixHQUF1QkEsS0FBdkIsR0FBK0IsQ0FBdEMsQ0FBUDtBQUNILENBZmMsNEJBZ0JkeVAsUUFoQmMsRUFnQkgsVUFBQ3pQLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLEdBQUdBLEtBQVIsR0FBZ0JBLEtBQTVCO0FBQUEsQ0FoQkcsNEJBaUJkMFAsU0FqQmMsRUFpQkYsVUFBQzFQLEtBQUQ7QUFBQSxTQUFZLEVBQUVBLEtBQUYsR0FBVUEsS0FBVixHQUFrQkEsS0FBbEIsR0FBMEIsQ0FBdEM7QUFBQSxDQWpCRSw0QkFrQmQyUCxPQWxCYyxFQWtCSixVQUFDM1AsS0FBRCxFQUFXO0FBQ2xCLE1BQUksQ0FBQ0EsS0FBSyxJQUFJLENBQVYsSUFBZSxDQUFuQixFQUFzQjtBQUNsQixXQUFPLE1BQU1BLEtBQU4sR0FBY0EsS0FBZCxHQUFzQkEsS0FBdEIsR0FBOEJBLEtBQXJDO0FBQ0g7O0FBQ0QsU0FBTyxDQUFDLEdBQUQsSUFBUSxDQUFDQSxLQUFLLElBQUksQ0FBVixJQUFlQSxLQUFmLEdBQXVCQSxLQUF2QixHQUErQkEsS0FBL0IsR0FBdUMsQ0FBL0MsQ0FBUDtBQUNILENBdkJjLDRCQXdCZDRQLFVBeEJjLEVBd0JELFVBQUM1UCxLQUFEO0FBQUEsU0FBWUEsS0FBSyxHQUFHQSxLQUFSLEdBQWdCQSxLQUFoQixHQUF3QkEsS0FBcEM7QUFBQSxDQXhCQyw0QkF5QmQ2UCxXQXpCYyxFQXlCQSxVQUFDN1AsS0FBRDtBQUFBLFNBQVksSUFBSSxFQUFFQSxLQUFGLEdBQVVBLEtBQVYsR0FBa0JBLEtBQWxCLEdBQTBCQSxLQUExQztBQUFBLENBekJBLDRCQTBCZDhQLE9BMUJjLEVBMEJKLFVBQUM5UCxLQUFELEVBQVc7QUFDbEIsTUFBSSxDQUFDQSxLQUFLLElBQUksQ0FBVixJQUFlLENBQW5CLEVBQXNCO0FBQ2xCLFdBQU8sTUFBTUEsS0FBTixHQUFjQSxLQUFkLEdBQXNCQSxLQUF0QixHQUE4QkEsS0FBOUIsR0FBc0NBLEtBQTdDO0FBQ0g7O0FBQ0QsU0FBTyxPQUFPLENBQUNBLEtBQUssSUFBSSxDQUFWLElBQWVBLEtBQWYsR0FBdUJBLEtBQXZCLEdBQStCQSxLQUEvQixHQUF1Q0EsS0FBdkMsR0FBK0MsQ0FBdEQsQ0FBUDtBQUNILENBL0JjLDRCQWdDZCtQLFVBaENjLEVBZ0NELFVBQUMvUCxLQUFEO0FBQUEsU0FBWUEsS0FBSyxHQUFHQSxLQUFSLEdBQWdCQSxLQUFoQixHQUF3QkEsS0FBeEIsR0FBZ0NBLEtBQTVDO0FBQUEsQ0FoQ0MsNEJBaUNkZ1EsV0FqQ2MsRUFpQ0EsVUFBQ2hRLEtBQUQ7QUFBQSxTQUFZLEVBQUVBLEtBQUYsR0FBVUEsS0FBVixHQUFrQkEsS0FBbEIsR0FBMEJBLEtBQTFCLEdBQWtDQSxLQUFsQyxHQUEwQyxDQUF0RDtBQUFBLENBakNBLDRCQWtDZGlRLFVBbENjLEVBa0NELFVBQUNqUSxLQUFEO0FBQUEsU0FBWSxPQUFPLElBQUl4SixJQUFJLENBQUNvSixHQUFMLENBQVNwSixJQUFJLENBQUM0YSxFQUFMLEdBQVVwUixLQUFuQixDQUFYLENBQVo7QUFBQSxDQWxDQyw0QkFtQ2RrUSxhQW5DYyxFQW1DRSxVQUFDbFEsS0FBRDtBQUFBLFNBQVksSUFBSXhKLElBQUksQ0FBQ29KLEdBQUwsQ0FBVUksS0FBSyxHQUFHeEosSUFBSSxDQUFDNGEsRUFBZCxHQUFvQixDQUE3QixDQUFoQjtBQUFBLENBbkNGLDRCQW9DZGpCLGNBcENjLEVBb0NHLFVBQUNuUSxLQUFEO0FBQUEsU0FBWXhKLElBQUksQ0FBQ3FKLEdBQUwsQ0FBVUcsS0FBSyxHQUFHeEosSUFBSSxDQUFDNGEsRUFBZCxHQUFvQixDQUE3QixDQUFaO0FBQUEsQ0FwQ0gsNEJBcUNkaEIsV0FyQ2MsRUFxQ0EsVUFBQ3BRLEtBQUQsRUFBVztBQUN0QixNQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLFdBQU8sQ0FBUDtBQUNIOztBQUNELE1BQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2IsV0FBTyxDQUFQO0FBQ0g7O0FBQ0QsTUFBSSxDQUFDQSxLQUFLLElBQUksQ0FBVixJQUFlLENBQW5CLEVBQXNCO0FBQ2xCLFdBQU8sTUFBTXhKLElBQUksQ0FBQzZhLEdBQUwsQ0FBUyxJQUFULEVBQWVyUixLQUFLLEdBQUcsQ0FBdkIsQ0FBYjtBQUNIOztBQUNELFNBQU8sT0FBTyxDQUFDeEosSUFBSSxDQUFDNmEsR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFDLEVBQUQsSUFBT3JSLEtBQUssR0FBRyxDQUFmLENBQVosQ0FBRCxHQUFrQyxDQUF6QyxDQUFQO0FBQ0gsQ0FoRGMsNEJBaURkcVEsY0FqRGMsRUFpREcsVUFBQ3JRLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLEtBQUssQ0FBVixHQUFjLENBQWQsR0FBa0J4SixJQUFJLENBQUM2YSxHQUFMLENBQVMsSUFBVCxFQUFlclIsS0FBSyxHQUFHLENBQXZCLENBQTlCO0FBQUEsQ0FqREgsNEJBa0Rkc1EsZUFsRGMsRUFrREksVUFBQ3RRLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLEtBQUssQ0FBVixHQUFjLENBQWQsR0FBa0IsSUFBSXhKLElBQUksQ0FBQzZhLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFELEdBQU1yUixLQUFsQixDQUFsQztBQUFBLENBbERKLDRCQW1EZHVRLFFBbkRjLEVBbURILFVBQUN2USxLQUFELEVBQVc7QUFDbkIsTUFBSSxDQUFDQSxLQUFLLElBQUksQ0FBVixJQUFlLENBQW5CLEVBQXNCO0FBQ2xCLFdBQU8sQ0FBQyxHQUFELElBQVF4SixJQUFJLENBQUM4YSxJQUFMLENBQVUsSUFBSXRSLEtBQUssR0FBR0EsS0FBdEIsSUFBK0IsQ0FBdkMsQ0FBUDtBQUNIOztBQUNELFNBQU8sT0FBT3hKLElBQUksQ0FBQzhhLElBQUwsQ0FBVSxJQUFJLENBQUN0UixLQUFLLElBQUksQ0FBVixJQUFlQSxLQUE3QixJQUFzQyxDQUE3QyxDQUFQO0FBQ0gsQ0F4RGMsNEJBeURkd1EsV0F6RGMsRUF5REEsVUFBQ3hRLEtBQUQ7QUFBQSxTQUFZLElBQUl4SixJQUFJLENBQUM4YSxJQUFMLENBQVUsSUFBSXRSLEtBQUssR0FBR0EsS0FBdEIsQ0FBaEI7QUFBQSxDQXpEQSw0QkEwRGR5USxZQTFEYyxFQTBEQyxVQUFDelEsS0FBRDtBQUFBLFNBQVd4SixJQUFJLENBQUM4YSxJQUFMLENBQVUsSUFBSSxFQUFFdFIsS0FBRixHQUFVQSxLQUF4QixDQUFYO0FBQUEsQ0ExREQsNEJBMkRkMFEsT0EzRGMsRUEyREosVUFBQzFRLEtBQUQsRUFBVztBQUNsQixNQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLFdBQU8sQ0FBUDtBQUNIOztBQUNELE1BQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2IsV0FBTyxDQUFQO0FBQ0g7O0FBQ0RBLE9BQUssSUFBSSxDQUFUOztBQUNBLE1BQUlBLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDWCxXQUFPLENBQUMsR0FBRCxHQUFPeEosSUFBSSxDQUFDNmEsR0FBTCxDQUFTLENBQVQsRUFBWSxNQUFNclIsS0FBSyxHQUFHLENBQWQsQ0FBWixDQUFQLEdBQXVDeEosSUFBSSxDQUFDcUosR0FBTCxDQUFTLENBQUNHLEtBQUssR0FBRyxHQUFULElBQWdCLENBQWhCLEdBQW9CeEosSUFBSSxDQUFDNGEsRUFBbEMsQ0FBOUM7QUFDSDs7QUFDRCxTQUFPLE1BQU01YSxJQUFJLENBQUM2YSxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMsRUFBRCxJQUFPclIsS0FBSyxHQUFHLENBQWYsQ0FBWixDQUFOLEdBQXVDeEosSUFBSSxDQUFDcUosR0FBTCxDQUFTLENBQUNHLEtBQUssR0FBRyxHQUFULElBQWdCLENBQWhCLEdBQW9CeEosSUFBSSxDQUFDNGEsRUFBbEMsQ0FBdkMsR0FBK0UsQ0FBdEY7QUFDSCxDQXZFYyw0QkF3RWRULFVBeEVjLEVBd0VELFVBQUMzUSxLQUFELEVBQVc7QUFDckIsTUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixXQUFPLENBQVA7QUFDSDs7QUFDRCxNQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLFdBQU8sQ0FBUDtBQUNIOztBQUNELFNBQU8sQ0FBQ3hKLElBQUksQ0FBQzZhLEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBTXJSLEtBQUssR0FBRyxDQUFkLENBQVosQ0FBRCxHQUFpQ3hKLElBQUksQ0FBQ3FKLEdBQUwsQ0FBUyxDQUFDRyxLQUFLLEdBQUcsR0FBVCxJQUFnQixDQUFoQixHQUFvQnhKLElBQUksQ0FBQzRhLEVBQWxDLENBQXhDO0FBQ0gsQ0FoRmMsNEJBaUZkUixXQWpGYyxFQWlGQSxVQUFDNVEsS0FBRCxFQUFXO0FBQ3RCLE1BQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2IsV0FBTyxDQUFQO0FBQ0g7O0FBQ0QsTUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixXQUFPLENBQVA7QUFDSDs7QUFDRCxTQUFPeEosSUFBSSxDQUFDNmEsR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFDLEVBQUQsR0FBTXJSLEtBQWxCLElBQTJCeEosSUFBSSxDQUFDcUosR0FBTCxDQUFTLENBQUNHLEtBQUssR0FBRyxHQUFULElBQWdCLENBQWhCLEdBQW9CeEosSUFBSSxDQUFDNGEsRUFBbEMsQ0FBM0IsR0FBbUUsQ0FBMUU7QUFDSCxDQXpGYyw0QkEwRmRQLElBMUZjLEVBMEZQLFVBQUM3USxLQUFELEVBQVc7QUFDZixNQUFNdVIsQ0FBQyxHQUFHLFVBQVUsS0FBcEI7O0FBQ0EsTUFBSSxDQUFDdlIsS0FBSyxJQUFJLENBQVYsSUFBZSxDQUFuQixFQUFzQjtBQUNsQixXQUFPLE9BQU9BLEtBQUssR0FBR0EsS0FBUixJQUFpQixDQUFDdVIsQ0FBQyxHQUFHLENBQUwsSUFBVXZSLEtBQVYsR0FBa0J1UixDQUFuQyxDQUFQLENBQVA7QUFDSDs7QUFDRCxTQUFPLE9BQU8sQ0FBQ3ZSLEtBQUssSUFBSSxDQUFWLElBQWVBLEtBQWYsSUFBd0IsQ0FBQ3VSLENBQUMsR0FBRyxDQUFMLElBQVV2UixLQUFWLEdBQWtCdVIsQ0FBMUMsSUFBK0MsQ0FBdEQsQ0FBUDtBQUNILENBaEdjLDRCQWlHZFQsT0FqR2MsRUFpR0osVUFBQzlRLEtBQUQsRUFBVztBQUNsQixNQUFNdVIsQ0FBQyxHQUFHLE9BQVY7QUFDQSxTQUFPdlIsS0FBSyxHQUFHQSxLQUFSLElBQWlCLENBQUN1UixDQUFDLEdBQUcsQ0FBTCxJQUFVdlIsS0FBVixHQUFrQnVSLENBQW5DLENBQVA7QUFDSCxDQXBHYyw0QkFxR2RSLFFBckdjLEVBcUdILFVBQUMvUSxLQUFELEVBQVc7QUFDbkIsTUFBTXVSLENBQUMsR0FBRyxPQUFWO0FBQ0EsU0FBTyxFQUFFdlIsS0FBRixHQUFVQSxLQUFWLElBQW1CLENBQUN1UixDQUFDLEdBQUcsQ0FBTCxJQUFVdlIsS0FBVixHQUFrQnVSLENBQXJDLElBQTBDLENBQWpEO0FBQ0gsQ0F4R2MsNEJBeUdkUCxNQXpHYyxFQXlHTCxVQUFDaFIsS0FBRCxFQUFXO0FBQ2pCLE1BQUlBLEtBQUssR0FBRyxHQUFaLEVBQWlCO0FBQ2IsV0FBT21SLE1BQU0sQ0FBQ0YsU0FBRCxDQUFOLENBQWtCalIsS0FBSyxHQUFHLENBQTFCLElBQStCLEdBQXRDO0FBQ0g7O0FBQ0QsU0FBT21SLE1BQU0sQ0FBQ0QsVUFBRCxDQUFOLENBQW1CbFIsS0FBSyxHQUFHLENBQVIsR0FBWSxDQUEvQixJQUFvQyxHQUFwQyxHQUEwQyxHQUFqRDtBQUNILENBOUdjLDRCQStHZGlSLFNBL0djLEVBK0dGLFVBQUNqUixLQUFEO0FBQUEsU0FBWSxJQUFJbVIsTUFBTSxDQUFDRCxVQUFELENBQU4sQ0FBbUIsSUFBSWxSLEtBQXZCLENBQWhCO0FBQUEsQ0EvR0UsNEJBZ0hka1IsVUFoSGMsRUFnSEQsVUFBQ2xSLEtBQUQsRUFBVztBQUNyQixNQUFJQSxLQUFLLEdBQUcsSUFBSSxJQUFoQixFQUFzQjtBQUNsQixXQUFPLFNBQVNBLEtBQVQsR0FBaUJBLEtBQXhCO0FBQ0g7O0FBQ0QsTUFBSUEsS0FBSyxHQUFHLElBQUksSUFBaEIsRUFBc0I7QUFDbEIsV0FBTyxVQUFVQSxLQUFLLElBQUksTUFBTSxJQUF6QixJQUFpQ0EsS0FBakMsR0FBeUMsSUFBaEQ7QUFDSDs7QUFDRCxNQUFJQSxLQUFLLEdBQUcsTUFBTSxJQUFsQixFQUF3QjtBQUNwQixXQUFPLFVBQVVBLEtBQUssSUFBSSxPQUFPLElBQTFCLElBQWtDQSxLQUFsQyxHQUEwQyxNQUFqRDtBQUNIOztBQUNELFNBQU8sVUFBVUEsS0FBSyxJQUFJLFFBQVEsSUFBM0IsSUFBbUNBLEtBQW5DLEdBQTJDLFFBQWxEO0FBQ0gsQ0EzSGMsV0FBWixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ08sSUFBTXdSLEtBQUssR0FBRyxPQUFkO0FBQ0EsU0FBU0MsV0FBVCxDQUFxQjFhLFNBQXJCLEVBQWdDaUIsT0FBaEMsRUFBeUM7QUFBQSxNQUNwQzBaLEtBRG9DLEdBQzFCM2EsU0FEMEIsQ0FDcEMyYSxLQURvQztBQUFBLE1BRXBDQyxNQUZvQyxHQUV6QkQsS0FGeUIsQ0FFcENDLE1BRm9DOztBQUc1QyxNQUFJLEVBQUNBLE1BQUQsYUFBQ0EsTUFBRCx1QkFBQ0EsTUFBTSxDQUFFL1osTUFBVCxDQUFKLEVBQXFCO0FBQ2pCd0QsV0FBTyxDQUFDbUYsSUFBUixDQUFhLDJCQUFiO0FBQ0E7QUFDSDs7QUFDRCxNQUFJbVIsS0FBSyxDQUFDbFksSUFBTixLQUFleUwsU0FBbkIsRUFBOEI7QUFDMUJ5TSxTQUFLLENBQUNsWSxJQUFOLEdBQWEsQ0FBYjtBQUNIOztBQUNEa1ksT0FBSyxDQUFDbFksSUFBTixJQUFjeEIsT0FBTyxDQUFDd0IsSUFBdEI7QUFWNEMsTUFXcENBLElBWG9DLEdBVzNCa1ksS0FYMkIsQ0FXcENsWSxJQVhvQztBQVk1QyxNQUFJb1ksTUFBTSxHQUFHLENBQWI7QUFDQUQsUUFBTSxDQUFDeFYsT0FBUCxDQUFlLFVBQUMwVixLQUFELEVBQVc7QUFBQTs7QUFDdEIsUUFBSSxDQUFDQSxLQUFLLENBQUNyWSxJQUFYLEVBQWlCO0FBQ2I0QixhQUFPLENBQUNtRixJQUFSLENBQWEsd0JBQWI7QUFDQTtBQUNIOztBQUNELFFBQUlzUixLQUFLLENBQUNELE1BQU4sS0FBaUIzTSxTQUFyQixFQUFnQztBQUM1QjJNLFlBQU0sR0FBR0MsS0FBSyxDQUFDRCxNQUFmO0FBQ0g7O0FBQ0QsUUFBTUUsVUFBVSw0QkFBR0QsS0FBSCxhQUFHQSxLQUFILHdDQUFHQSxLQUFLLENBQUVWLE1BQVYsa0RBQUcsY0FBZVksV0FBZixFQUFILHlFQUFtQzNDLDJDQUFuRDtBQUNBLFFBQU00QyxZQUFZLEdBQUdiLDJDQUFNLENBQUNXLFVBQUQsQ0FBM0I7O0FBQ0EsUUFBSSxDQUFDRSxZQUFMLEVBQW1CO0FBQ2Y1VyxhQUFPLENBQUNtRixJQUFSLGdDQUFxQzRRLDJDQUFyQztBQUNBO0FBQ0g7O0FBQ0QsUUFBTW5SLEtBQUssR0FBRyxDQUFDeEcsSUFBSSxHQUFHb1ksTUFBUixJQUFrQkMsS0FBSyxDQUFDclksSUFBdEM7QUFDQW9ZLFVBQU0sSUFBSUMsS0FBSyxDQUFDclksSUFBaEI7O0FBQ0EsUUFBSXdHLEtBQUssR0FBRyxDQUFSLElBQWFBLEtBQUssR0FBRyxDQUF6QixFQUE0QjtBQUN4QjtBQUNIOztBQUNELFFBQU1pUyxXQUFXLEdBQUdELFlBQVksQ0FBQ2hTLEtBQUQsQ0FBaEM7O0FBQ0EsUUFBSSxDQUFDNlIsS0FBSyxDQUFDSyxFQUFYLEVBQWU7QUFDWDlXLGFBQU8sQ0FBQ21GLElBQVIsQ0FBYSxnQ0FBYjtBQUNBO0FBQ0g7O0FBQ0QsUUFBSSxDQUFDc1IsS0FBSyxDQUFDTSxJQUFYLEVBQWlCO0FBQ2JOLFdBQUssQ0FBQ00sSUFBTixHQUFhLEVBQWI7QUFDSDs7QUExQnFCLFFBMkJkRCxFQTNCYyxHQTJCREwsS0EzQkMsQ0EyQmRLLEVBM0JjO0FBQUEsUUEyQlZDLElBM0JVLEdBMkJETixLQTNCQyxDQTJCVk0sSUEzQlU7QUE0QnRCLFFBQU1DLEtBQUssR0FBR3JiLFNBQWQ7QUFDQWUsVUFBTSxDQUFDRCxJQUFQLENBQVlxYSxFQUFaLEVBQWdCL1YsT0FBaEIsQ0FBd0IsVUFBQ2tXLEdBQUQsRUFBUztBQUM3QixVQUFJRixJQUFJLENBQUNFLEdBQUQsQ0FBSixLQUFjcE4sU0FBbEIsRUFBNkI7QUFBQTs7QUFDekJrTixZQUFJLENBQUNFLEdBQUQsQ0FBSixpQkFBWUQsS0FBSyxDQUFDQyxHQUFELENBQWpCLG1EQUEwQixDQUExQjtBQUNIOztBQUNELFVBQU1DLFNBQVMsR0FBR0gsSUFBSSxDQUFDRSxHQUFELENBQXRCO0FBQ0EsVUFBTUUsT0FBTyxHQUFHTCxFQUFFLENBQUNHLEdBQUQsQ0FBbEI7O0FBQ0EsVUFBSSxPQUFPQyxTQUFQLEtBQXFCLFFBQXJCLElBQWlDLE9BQU9DLE9BQVAsS0FBbUIsUUFBeEQsRUFBa0U7QUFDOUQsWUFBTUMsVUFBVSxHQUFHRixTQUFTLEdBQUdMLFdBQVcsSUFBSU0sT0FBTyxHQUFHRCxTQUFkLENBQTFDO0FBQ0FGLGFBQUssQ0FBQ0MsR0FBRCxDQUFMLEdBQWFHLFVBQWI7QUFDSDtBQUNKLEtBVkQ7QUFXSCxHQXhDRDs7QUF5Q0EsTUFBSWQsS0FBSyxDQUFDZSxJQUFOLElBQWNmLEtBQUssQ0FBQ2xZLElBQU4sR0FBYW9ZLE1BQS9CLEVBQXVDO0FBQ25DRixTQUFLLENBQUNsWSxJQUFOLEdBQWEsQ0FBYjtBQUNIO0FBQ0o7QUFDTSxTQUFTa1osbUJBQVQsQ0FBNkJ6YSxPQUE3QixFQUFzQztBQUN6Q0EsU0FBTyxDQUFDaUUsZ0JBQVIsQ0FBeUJyRCxHQUF6QixDQUE2QjJZLEtBQTdCLEVBQW9DQyxXQUFwQztBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEdUM7QUFFekIsU0FBUyxTQUFTO0lBQ2hDLE1BQU0sU0FBUyxHQUFHO1FBQ2pCLElBQUksRUFBRSxXQUFXO1FBQ2pCLEtBQUssRUFBRTtZQUNOLElBQUksRUFBRSxXQUFXO1lBQ2pCLENBQUMsRUFBRSxFQUFFO1lBQ0wsQ0FBQyxFQUFFLEVBQUU7WUFDTCxNQUFNLEVBQUUsR0FBRztZQUNYLE1BQU0sRUFBRSxHQUFHO1lBQ1gsUUFBUSxFQUFFLEdBQUc7WUFDYixLQUFLLEVBQUUsR0FBRztZQUNWLFFBQVEsRUFBRSxDQUFDO29CQUNWLElBQUksRUFBRSxPQUFPO29CQUNiLEdBQUcsRUFBRSxpREFBWTtvQkFDakIsS0FBSyxFQUFFLEdBQUc7aUJBQ1YsQ0FBQztZQUNGLFFBQVEsQ0FBQyxJQUFZO2dCQUNwQixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7WUFDOUIsQ0FBQztTQUNEO0tBQ0QsQ0FBQztJQUVGLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFrQixDQUFDLENBQUM7SUFFbEQsT0FBTyxTQUFTLENBQUM7QUFDbEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkQsTUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDO0FBRXhCLE1BQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQztBQUNqQyxNQUFNLE1BQU0sR0FBRyxXQUFXLENBQUM7QUFFM0IsTUFBTSxlQUFlLEdBQUcsR0FBRyxZQUFZLHlCQUF5QixDQUFDO0FBQ2pFLE1BQU0sWUFBWSxHQUFHLEdBQUcsWUFBWSwwQkFBMEIsQ0FBQztBQUUvRCxNQUFNLFdBQVcsR0FBRyxHQUFHLFlBQVksMEJBQTBCLENBQUM7QUFDOUQsTUFBTSxZQUFZLEdBQUcsR0FBRyxZQUFZLDJCQUEyQixDQUFDO0FBRWhFLE1BQU0sVUFBVSxHQUFHLEdBQUcsWUFBWSx1QkFBdUIsQ0FBQztBQUUxRCxNQUFNLFdBQVcsR0FBRyxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWG1CO0FBR3hDO0FBR3BCLFNBQVMsV0FBVyxDQUFDLEtBQVksRUFBRSxPQUFzQjtJQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNmLE9BQU87S0FDUDtJQUVELE1BQU0sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEdBQUcsT0FBTyxDQUFDO0lBRTNDLElBQUksY0FBYyxDQUFDLGVBQWUsSUFBSSxDQUFDLEVBQUU7UUFDeEMsT0FBTztLQUNQO0lBRUQsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztJQUU1QixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUF5QixDQUFDO0lBRTFFLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRTtRQUMxQyxPQUFPO0tBQ1A7SUFFRCxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsT0FBd0IsQ0FBQztJQUUvQyxTQUFTLENBQUMsWUFBWSxDQUNyQixNQUFNLENBQUMsQ0FBQyxFQUNSLE1BQU0sQ0FBQyxDQUFDLEVBQ1IsTUFBTSxDQUFDLENBQUMsRUFDUixNQUFNLENBQUMsQ0FBQyxFQUNSLE1BQU0sQ0FBQyxFQUFFLEVBQ1QsTUFBTSxDQUFDLEVBQUUsQ0FDVCxDQUFDO0lBRUYsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQ3pDLE1BQU0sQ0FBQyxHQUFHLG1EQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25DLE1BQU0sQ0FBQyxHQUFHLG1EQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRXBDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLFNBQVMsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO0lBQy9CLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUVNLFNBQVMseUJBQXlCLENBQUMsT0FBZ0I7SUFDekQsK0RBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsNkNBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNoRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEbUM7QUFDeUI7QUFFOUMsTUFBTSxxQkFBcUI7SUFBMUM7UUFDVSxZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDcEMsY0FBUyxHQUFHLElBQUksR0FBRyxFQUF5QixDQUFDO1FBRXRELFlBQU8sR0FBRyxDQUFDLEtBQWEsRUFBd0IsRUFBRTtZQUNqRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMvQixNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQWtCLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2QsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2pDLElBQUksR0FBRyxFQUFFO3dCQUNSLFFBQVEsR0FBRyw0REFBWSxDQUFDLEdBQUcsQ0FBa0IsQ0FBQzt3QkFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO3FCQUNqQzt5QkFBTTt3QkFDTixzREFBYSxDQUFDLHFCQUFxQixLQUFLLFlBQVksQ0FBQyxDQUFDO3FCQUN0RDtpQkFDRDtnQkFDRCxPQUFPLFFBQVEsQ0FBQzthQUNoQjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQztJQUNGLENBQUM7Q0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJtRDtBQUNDO0FBQ0Q7QUFFckMsTUFBTSxhQUFjLFNBQVEsOERBQWE7SUFDdkQ7UUFDQyxLQUFLLEVBQUUsQ0FBQztRQUNSLG1FQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLGlFQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxLQUFLO1FBQ0osTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQztRQUMzQixTQUFTLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUM5QixTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUUsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmaUI7QUFDZ0I7QUFDWTtBQU8vQixTQUFTLElBQUk7SUFDM0IsU0FBUyxXQUFXLENBQUMsSUFBb0I7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxPQUFPO1FBQ04sSUFBSSxFQUFFLFdBQVc7UUFDakIsUUFBUSxFQUFFO1lBQ1QsVUFBVSxFQUFFO2dCQUNYLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSwrQ0FBVTtnQkFDZixNQUFNLEVBQUUsQ0FBQztnQkFDVCxNQUFNLEVBQUUsQ0FBQzthQUNUO1lBQ0QsTUFBTSxFQUFFO2dCQUNQLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRTtvQkFDTCxJQUFJLEVBQUUsTUFBTTtvQkFDWixDQUFDLEVBQUUsQ0FBQztvQkFDSixDQUFDLEVBQUUsQ0FBQztvQkFDSixLQUFLLEVBQUUsR0FBRztvQkFDVixNQUFNLEVBQUUsR0FBRztvQkFDWCxJQUFJLEVBQUUsUUFBUTtvQkFDZCxNQUFNLEVBQUU7d0JBQ1AsU0FBUyxFQUFFLENBQUM7d0JBQ1osSUFBSSxFQUFFLFFBQVE7cUJBQ2Q7aUJBQ0Q7YUFDRDtZQUNELE1BQU0sRUFBRTtnQkFDUCxJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUU7b0JBQ0w7d0JBQ0MsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsQ0FBQyxFQUFFLEdBQUc7d0JBQ04sQ0FBQyxFQUFFLEdBQUc7d0JBQ04sTUFBTSxFQUFFLEVBQUU7d0JBQ1YsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7cUJBQ3BEO29CQUNEO3dCQUNDLElBQUksRUFBRSxNQUFNO3dCQUNaLElBQUksRUFBRSwwQkFBMEI7d0JBQ2hDLElBQUksRUFBRSxRQUFRO3FCQUNkO29CQUNEO3dCQUNDLElBQUksRUFBRSxNQUFNO3dCQUNaLElBQUksRUFBRTs0QkFDTCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzRCQUM5QixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzRCQUNoQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFOzRCQUNsQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFOzRCQUNoQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO3lCQUM5Qjt3QkFDRCxJQUFJLEVBQUUsUUFBUTt3QkFDZCxNQUFNLEVBQUUsUUFBUTtxQkFDaEI7aUJBQ0Q7YUFDRDtZQUNELEtBQUssRUFBRTtnQkFDTixJQUFJLEVBQUUsV0FBVztnQkFDakIsUUFBUSxFQUFFO29CQUNULDJDQUFJLENBQUM7d0JBQ0osSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSwyQ0FBTSxFQUFFLE9BQU8sRUFBRSxXQUFXO3FCQUM5RCxDQUFDO29CQUNGLDJDQUFJLENBQUM7d0JBQ0osSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSw4Q0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXO3FCQUNwRSxDQUFDO2lCQUNGO2FBQ0Q7WUFDRCxRQUFRLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLENBQUMsRUFBRSxHQUFHO2dCQUNOLENBQUMsRUFBRSxHQUFHO2dCQUNOLFFBQVEsRUFBRSxDQUFDLGtEQUFRLEVBQUUsQ0FBQzthQUN0QjtZQUNELEdBQUcsRUFBRTtnQkFDSixJQUFJLEVBQUUsT0FBTztnQkFDYixDQUFDLEVBQUUsR0FBRztnQkFDTixNQUFNLEVBQUUsR0FBRztnQkFDWCxNQUFNLEVBQUUsR0FBRztnQkFDWCxLQUFLLEVBQUUsR0FBRztnQkFDVixHQUFHLEVBQUUsYUFBYTtnQkFDbEIsYUFBYTtvQkFDWixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsQ0FBQztnQkFDRCxZQUFZO29CQUNYLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNsQixDQUFDO2FBQ0Q7WUFDRCxVQUFVLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsR0FBRyxFQUFFLGdEQUFXO2dCQUNoQixDQUFDLEVBQUUsR0FBRztnQkFDTixDQUFDLEVBQUUsR0FBRztnQkFDTixLQUFLLEVBQUUsR0FBRztnQkFDVixJQUFJLEVBQUU7b0JBQ0wsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsS0FBSyxFQUFFLENBQUM7aUJBQ1I7Z0JBQ0QsUUFBUSxDQUFDLElBQVk7b0JBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztvQkFDeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7d0JBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztxQkFDcEI7Z0JBQ0YsQ0FBQztnQkFDRCxhQUFhLENBQUMsQ0FBTTtvQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7YUFDRDtZQUNELFdBQVcsRUFBRTtnQkFDWixJQUFJLEVBQUUsV0FBVztnQkFDakIsQ0FBQyxFQUFFLEdBQUc7Z0JBQ04sQ0FBQyxFQUFFLEdBQUc7Z0JBQ04sS0FBSyxFQUFFO29CQUNOLElBQUksRUFBRSxPQUFPO29CQUNiLEdBQUcsRUFBRSxpREFBWTtvQkFDakIsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsS0FBSyxFQUFFLENBQUM7b0JBQ1IsS0FBSyxFQUFFO3dCQUNOLElBQUksRUFBRSxJQUFJO3dCQUNWLE1BQU0sRUFBRTs0QkFDUDtnQ0FDQyxJQUFJLEVBQUUsQ0FBQztnQ0FDUCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFOzZCQUNkOzRCQUNEO2dDQUNDLE1BQU0sRUFBRSxVQUFVO2dDQUNsQixJQUFJLEVBQUUsQ0FBQztnQ0FDUCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7NkJBQzFCOzRCQUNEO2dDQUNDLE1BQU0sRUFBRSxhQUFhO2dDQUNyQixJQUFJLEVBQUUsQ0FBQztnQ0FDUCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7NkJBQ3RCOzRCQUNEO2dDQUNDLE1BQU0sRUFBRSxjQUFjO2dDQUN0QixJQUFJLEVBQUUsQ0FBQztnQ0FDUCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzZCQUNaO3lCQUNEO3FCQUNEO2lCQUNEO2FBQ0Q7U0FDRDtRQUNELEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLENBQUM7S0FDRCxDQUFDO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEtELE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQztBQWFYLFNBQVMsSUFBSSxDQUFDLEtBQXFCO0lBQ3pDLFNBQVMsUUFBUTtRQUNoQixPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUM1RCxDQUFDO0lBRUQsT0FBTztRQUNOLElBQUksRUFBRSxXQUFXO1FBQ2pCLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUc7UUFDM0IsQ0FBQyxFQUFFLEdBQUc7UUFDTixRQUFRLEVBQUUsQ0FBQztRQUNYLFVBQVUsQ0FBQyxJQUFZO1lBQ3RCLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7WUFDcEQsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUMvQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFO2dCQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEM7UUFDRixDQUFDO1FBQ0QsUUFBUSxDQUFDLElBQVk7WUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixDQUFDO1FBQ0QsUUFBUSxFQUFFO1lBQ1QsSUFBSSxFQUFFO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxRQUFRLEVBQUU7Z0JBQ2hCLFVBQVUsRUFBRTtvQkFDWCxJQUFJLEVBQUUsRUFBRTtvQkFDUixLQUFLLEVBQUUsUUFBUTtvQkFDZixLQUFLLEVBQUUsUUFBUTtvQkFDZixhQUFhLEVBQUUsUUFBUTtpQkFDdkI7Z0JBQ0QsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ04sTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsYUFBYSxFQUFFLEdBQUcsRUFBRTtvQkFDbkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEIsQ0FBQztnQkFDRCxRQUFRO29CQUNQLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7YUFDRDtZQUNELEtBQUssRUFBRTtnQkFDTixJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUs7Z0JBQ2hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsYUFBYSxFQUFFLEdBQUcsRUFBRTtvQkFDbkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEIsQ0FBQzthQUNEO1NBQ0Q7S0FDRCxDQUFDO0FBQ0gsQ0FBQzs7Ozs7OztVQ2xFRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0RTtBQUMzQjtBQUNJO0FBQ087QUFDTDtBQUNIO0FBRUc7QUFDN0I7QUFDbUI7QUFHM0I7QUFHbEIsTUFBTSxHQUFHLEdBQUcsOENBQUksRUFBRSxDQUFDO0FBQ25CLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUdaLE1BQU0sTUFBTSxHQUFHLElBQUksK0NBQU0sQ0FBQyxJQUFJLDhEQUFhLEVBQUUsQ0FBQyxDQUFDO0FBQy9DLDBFQUE4QixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQyxtRUFBd0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekMscUVBQXlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzFDLCtEQUFtQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwQyx1RUFBMEIsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuQyxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQXVCLENBQUM7QUFDdEMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUdsRCxNQUFNLFlBQVksR0FBRyxJQUFJLCtDQUFNLENBQUMsSUFBSSxvREFBYSxFQUFFLENBQUMsQ0FBQztBQUNyRCxZQUFZLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUNoQyxZQUFZLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUMxQixZQUFZLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztBQUNuQyxZQUFZLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDaEMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3BCLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0FBQ3pELFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQy9DLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQ2xELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFHeEQsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUNqQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBR2xDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdkMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUd2QyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQzNCLGdEQUFXLEVBQ1g7SUFDQyxLQUFLLEVBQUUsZ0RBQVc7SUFDbEIsS0FBSyxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTztJQUNuQyxNQUFNLEVBQUUsSUFBSTtDQUNLLENBQ2xCLENBQUM7QUFDRixZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQ2pDLGdEQUFXLEVBQ1g7SUFDQyxLQUFLLEVBQUUsZ0RBQVc7SUFDbEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTztJQUM3QixNQUFNLEVBQUUsSUFBSTtDQUNLLENBQ2xCLENBQUM7QUFHRixNQUFNLGVBQWUsR0FBRyxJQUFJLHNEQUFxQixFQUFFLENBQUM7QUFDcEQsZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbURBQWMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsaURBQVksQ0FBQyxDQUFDO0FBQ3JFLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNEQUFpQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxvREFBZSxDQUFDLENBQUM7QUFDM0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhc1N1cHBvcnQgZnJvbSAnLi9zdXBwb3J0JztcbmV4cG9ydCAqIGZyb20gJy4vcGF0dGVybnMnO1xuZXhwb3J0IHsgQ2FudmFzU3VwcG9ydCwgfTtcbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtIH0gZnJvbSAnQGUyZC9nZW9tJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb2xvclBhdHRlcm4oY29sb3IsIGFscGhhLCBjdCkge1xuICAgIGxldCByID0gY29sb3IgPj4gMTYgJiAweGZmO1xuICAgIGxldCBnID0gY29sb3IgPj4gOCAmIDB4ZmY7XG4gICAgbGV0IGIgPSBjb2xvciAmIDB4ZmY7XG4gICAgbGV0IGEgPSBhbHBoYSAqIDB4ZmY7XG4gICAgaWYgKCFDb2xvclRyYW5zZm9ybS5pc0RlZmF1bHQoY3QpKSB7XG4gICAgICAgIHIgPSAociAqIGN0LnJlZE11bHRpcGxpZXIgKyBjdC5yZWRPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgZyA9IChnICogY3QuZ3JlZW5NdWx0aXBsaWVyICsgY3QuZ3JlZW5PZmZzZXQpICYgMHhmZjtcbiAgICAgICAgYiA9IChiICogY3QuYmx1ZU11bHRpcGxpZXIgKyBjdC5ibHVlT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgIGEgPSAoYSAqIGN0LmFscGhhTXVsdGlwbGllciArIGN0LmFscGhhT2Zmc2V0KSAmIDB4ZmY7XG4gICAgfVxuICAgIGlmIChhIDwgMHhmZikge1xuICAgICAgICByZXR1cm4gYHJnYmEoJHtyfSwgJHtnfSwgJHtifSwgJHthIC8gMHhmZn0pYDtcbiAgICB9XG4gICAgcmV0dXJuIGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xufVxuIiwiaW1wb3J0IHsgU3VwcG9ydCB9IGZyb20gJ0BlMmQvZW5naW5lJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhc1N1cHBvcnQgZXh0ZW5kcyBTdXBwb3J0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5jb250ZXh0MmQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIH1cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgY29uc3QgeyBjYW52YXMgfSA9IHRoaXM7XG4gICAgICAgIHRoaXMuY29udGV4dDJkLnNldFRyYW5zZm9ybSgpO1xuICAgICAgICB0aGlzLmNvbnRleHQyZC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICB9XG4gICAgc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0LCBwaXhlbFJhdGlvKSB7XG4gICAgICAgIGNvbnN0IHZpZXdXaWR0aCA9IE1hdGguZmxvb3Iod2lkdGggKiBwaXhlbFJhdGlvKTtcbiAgICAgICAgY29uc3Qgdmlld0hlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHsgY2FudmFzIH0gPSB0aGlzO1xuICAgICAgICBpZiAoY2FudmFzLndpZHRoICE9PSB2aWV3V2lkdGggfHwgY2FudmFzLmhlaWdodCAhPT0gdmlld0hlaWdodCkge1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gdmlld1dpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHZpZXdIZWlnaHQ7XG4gICAgICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCB2YXIgQ29tcG9uZW50O1xuKGZ1bmN0aW9uIChDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBpc0VuYWJsZWQoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuZW5hYmxlZCA/PyB0cnVlO1xuICAgIH1cbiAgICBDb21wb25lbnQuaXNFbmFibGVkID0gaXNFbmFibGVkO1xuICAgIGZ1bmN0aW9uIGlzVmlzaWJsZShjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC52aXNpYmxlID8/IHRydWU7XG4gICAgfVxuICAgIENvbXBvbmVudC5pc1Zpc2libGUgPSBpc1Zpc2libGU7XG59KShDb21wb25lbnQgfHwgKENvbXBvbmVudCA9IHt9KSk7XG4iLCJleHBvcnQgY29uc3QgQ09OVEFJTkVSID0gJ2NvbnRhaW5lcic7XG5leHBvcnQgdmFyIENvbnRhaW5lcjtcbihmdW5jdGlvbiAoQ29udGFpbmVyKSB7XG4gICAgZnVuY3Rpb24gbnVtQ2hpbGRyZW4oY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGQsIGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGNvdW50ICs9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgY291bnQgKz0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cbiAgICBDb250YWluZXIubnVtQ2hpbGRyZW4gPSBudW1DaGlsZHJlbjtcbn0pKENvbnRhaW5lciB8fCAoQ29udGFpbmVyID0ge30pKTtcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoY29udGFpbmVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBjaGlsZCwgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICBjb25zdCB7IHN1cHBvcnQgfSA9IGNvbnRleHQ7XG4gICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHN1cHBvcnQuZ2V0UmVuZGVyQ29udGV4dChjaGlsZCwgY29udGV4dCk7XG4gICAgICAgIHN1cHBvcnQucmVuZGVyKGNoaWxkLCBjaGlsZENvbnRleHQpO1xuICAgIH1cbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IHN1cHBvcnQuZ2V0UmVuZGVyQ29udGV4dChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHN1cHBvcnQucmVuZGVyKGNvbXBvbmVudCwgY29tcG9uZW50Q29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY2hpbGRyZW4pO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5ba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IHN1cHBvcnQuZ2V0UmVuZGVyQ29udGV4dChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHN1cHBvcnQucmVuZGVyKGNvbXBvbmVudCwgY29tcG9uZW50Q29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlKGNvbnRhaW5lciwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgY2hpbGQsIGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgY29uc3QgeyBzdXBwb3J0IH0gPSBjb250ZXh0O1xuICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjb25zdCBjaGlsZENvbnRleHQgPSBzdXBwb3J0LmdldFVwZGF0ZUNvbnRleHQoY2hpbGQsIGNvbnRleHQpO1xuICAgICAgICBzdXBwb3J0LnVwZGF0ZShjaGlsZCwgY2hpbGRDb250ZXh0KTtcbiAgICB9XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBzdXBwb3J0LmdldFVwZGF0ZUNvbnRleHQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBzdXBwb3J0LnVwZGF0ZShjb21wb25lbnQsIGNvbXBvbmVudENvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBzdXBwb3J0LmdldFVwZGF0ZUNvbnRleHQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBzdXBwb3J0LnVwZGF0ZShjb21wb25lbnQsIGNvbXBvbmVudENvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGhpdFRlc3QoY29udGFpbmVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBjaGlsZCwgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICBjb25zdCB7IHN1cHBvcnQgfSA9IGNvbnRleHQ7XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IHN1cHBvcnQuZ2V0UG9pbnRlckNvbnRleHQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBwb3J0LmhpdFRlc3QoY29tcG9uZW50LCBjb21wb25lbnRDb250ZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0ga2V5cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBzdXBwb3J0LmdldFBvaW50ZXJDb250ZXh0KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwcG9ydC5oaXRUZXN0KGNvbXBvbmVudCwgY29tcG9uZW50Q29udGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHN1cHBvcnQuZ2V0UG9pbnRlckNvbnRleHQoY2hpbGQsIGNvbnRleHQpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBwb3J0LmhpdFRlc3QoY2hpbGQsIGNoaWxkQ29udGV4dCk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUNvbnRhaW5lckV4dGVuc2lvbihzdXBwb3J0KSB7XG4gICAgc3VwcG9ydC51cGRhdGVIYW5kbGVycy5zZXQoQ09OVEFJTkVSLCB1cGRhdGUpO1xuICAgIHN1cHBvcnQucmVuZGVySGFuZGxlcnMuc2V0KENPTlRBSU5FUiwgcmVuZGVyKTtcbiAgICBzdXBwb3J0LmhpdFRlc3RIYW5kbGVycy5zZXQoQ09OVEFJTkVSLCBoaXRUZXN0KTtcbn1cbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXggfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgYXBwbHlDb250YWluZXJFeHRlbnNpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5jb25zdCBFTVBUWV9NQVRSSVggPSBNYXRyaXguZW1wdHkoKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZ2luZSB7XG4gICAgY29uc3RydWN0b3Ioc3VwcG9ydCkge1xuICAgICAgICB0aGlzLndpZHRoID0gNDAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDMwMDtcbiAgICAgICAgdGhpcy5mdWxsc2NyZWVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXJFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb2ludGVyRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aW1lID0gLTE7XG4gICAgICAgIHRoaXMubWF0cml4ID0gTWF0cml4LmVtcHR5KCk7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxVcGRhdGUgPSAodGltZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gdGhpcy50aW1lID09PSAtMSA/IDAgOiB0aW1lIC0gdGhpcy50aW1lO1xuICAgICAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRnJhbWUoZGVsdGFUaW1lIC8gMTAwMCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3VwcG9ydCA9IHN1cHBvcnQ7XG4gICAgICAgIGFwcGx5Q29udGFpbmVyRXh0ZW5zaW9uKHRoaXMuc3VwcG9ydCk7XG4gICAgfVxuICAgIHVwZGF0ZSh0aW1lID0gMCkge1xuICAgICAgICBpZiAoIXRoaXMucm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJhc2UgPSB7XG4gICAgICAgICAgICBzdXBwb3J0OiB0aGlzLnN1cHBvcnQsXG4gICAgICAgICAgICB0aW1lLFxuICAgICAgICAgICAgZGVwdGg6IDAsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLnN1cHBvcnQuZ2V0VXBkYXRlQ29udGV4dCh0aGlzLnJvb3QsIGJhc2UpO1xuICAgICAgICB0aGlzLnN1cHBvcnQudXBkYXRlKHRoaXMucm9vdCwgY29udGV4dCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1cHBvcnQuY2xlYXIoKTtcbiAgICAgICAgY29uc3QgYmFzZSA9IHtcbiAgICAgICAgICAgIHN1cHBvcnQ6IHRoaXMuc3VwcG9ydCxcbiAgICAgICAgICAgIGRlcHRoOiAwLFxuICAgICAgICAgICAgbWF0cml4OiB0aGlzLm1hdHJpeCxcbiAgICAgICAgICAgIGNvbG9yVHJhbnNmb3JtOiBDb2xvclRyYW5zZm9ybS5lbXB0eSgpLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5zdXBwb3J0LmdldFJlbmRlckNvbnRleHQodGhpcy5yb290LCBiYXNlKTtcbiAgICAgICAgdGhpcy5zdXBwb3J0LnJlbmRlcih0aGlzLnJvb3QsIGNvbnRleHQpO1xuICAgIH1cbiAgICB1cGRhdGVTaXplKCkge1xuICAgICAgICBjb25zdCBwaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZnVsbHNjcmVlbiB9ID0gdGhpcztcbiAgICAgICAgbGV0IHRhcmdldFdpZHRoID0gTWF0aC5mbG9vcih3aWR0aCk7XG4gICAgICAgIGxldCB0YXJnZXRIZWlnaHQgPSBNYXRoLmZsb29yKGhlaWdodCk7XG4gICAgICAgIGlmIChmdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICB0YXJnZXRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgdGFyZ2V0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF0cml4LmEgPSBwaXhlbFJhdGlvO1xuICAgICAgICB0aGlzLm1hdHJpeC5kID0gcGl4ZWxSYXRpbztcbiAgICAgICAgdGhpcy5zdXBwb3J0LnNldFNpemUodGFyZ2V0V2lkdGgsIHRhcmdldEhlaWdodCwgcGl4ZWxSYXRpbyk7XG4gICAgfVxuICAgIHVwZGF0ZUZyYW1lKHRpbWUgPSAwKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICBpZiAodGhpcy51cGRhdGVFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZW5kZXJFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTmV4dEZyYW1lKCk7XG4gICAgfVxuICAgIHVwZGF0ZU5leHRGcmFtZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuaW50ZXJuYWxVcGRhdGUpO1xuICAgIH1cbiAgICBkaXNwYXRjaFBvaW50ZXJFdmVudChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucG9pbnRlckVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgaWQsIHgsIHksIH0gPSBldmVudDtcbiAgICAgICAgY29uc3QgYmFzZSA9IHtcbiAgICAgICAgICAgIHN1cHBvcnQ6IHRoaXMuc3VwcG9ydCxcbiAgICAgICAgICAgIGRlcHRoOiAwLFxuICAgICAgICAgICAgbWF0cml4OiBFTVBUWV9NQVRSSVgsXG4gICAgICAgICAgICBsb2NhbDogeyB4LCB5IH0sXG4gICAgICAgICAgICBnbG9iYWw6IHsgeCwgeSB9LFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5zdXBwb3J0LmdldFBvaW50ZXJDb250ZXh0KHRoaXMucm9vdCwgYmFzZSk7XG4gICAgICAgIHRoaXMuc3VwcG9ydC5oaXRUZXN0KHRoaXMucm9vdCwgY29udGV4dCk7XG4gICAgfVxuICAgIHBsYXkoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5Jyk7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lID0gLTE7XG4gICAgICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOZXh0RnJhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BhdXNlJyk7XG4gICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgRGVidWcgZnJvbSAnLi4vdXRpbHMvZGVidWcnO1xuZXhwb3J0IGNsYXNzIFJlc291cmNlcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlc29sdmVycyA9IG5ldyBTZXQoKTtcbiAgICB9XG4gICAgZ2V0KGFzc2V0KSB7XG4gICAgICAgIGlmICghYXNzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2VzLmdldChhc3NldCk7XG4gICAgICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHJlc291cmNlID0gdGhpcy5yZXNvbHZlKGFzc2V0KTtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzLnNldChhc3NldCwgcmVzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICB9XG4gICAgYWRkKGFzc2V0LCByZXNvdXJjZSkge1xuICAgICAgICB0aGlzLnJlc291cmNlcy5zZXQoYXNzZXQsIHJlc291cmNlKTtcbiAgICB9XG4gICAgcmVtb3ZlKGFzc2V0KSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzLmRlbGV0ZShhc3NldCk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnJlc291cmNlcy5jbGVhcigpO1xuICAgIH1cbiAgICByZXNvbHZlKGFzc2V0KSB7XG4gICAgICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gcmVzb2x2ZXIoYXNzZXQpO1xuICAgICAgICAgICAgaWYgKHJlc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIERlYnVnLndhcm5pbmcoYFJlc291cmNlIG5vdCByZXNvbHZlZDogJHthc3NldH1gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0sIE1hdHJpeCB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBQb2ludGVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wb2ludGVyJztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHJhbnNmb3JtJztcbmltcG9ydCB7IFJlc291cmNlcyB9IGZyb20gJy4vcmVzb3VyY2VzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1cHBvcnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZURlcHRoID0gNjQ7XG4gICAgICAgIHRoaXMudXBkYXRlSGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVuZGVySGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuaGl0VGVzdEhhbmRsZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnByb3BlcnR5SGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IFJlc291cmNlcygpO1xuICAgIH1cbiAgICB1cGRhdGUoY29tcG9uZW50LCBjb250ZXh0KSB7XG4gICAgICAgIGlmIChjb250ZXh0LmRlcHRoID4gdGhpcy51cGRhdGVEZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQ29tcG9uZW50LmlzRW5hYmxlZChjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wZXJ0eUhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIsIHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50W3Byb3BlcnR5XSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb21wb25lbnQub25VcGRhdGUpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5vblVwZGF0ZShjb250ZXh0LnRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZXJzLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKGNvbXBvbmVudCwgY29udGV4dCkge1xuICAgICAgICBpZiAoY29udGV4dC5kZXB0aCA+IHRoaXMudXBkYXRlRGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUNvbXBvbmVudC5pc1Zpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLnJlbmRlckhhbmRsZXJzLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGl0VGVzdChjb21wb25lbnQsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuZGVwdGggPiB0aGlzLnVwZGF0ZURlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFDb21wb25lbnQuaXNWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVBvaW50ZXIuaXNQb2ludGVyRW5hYmxlZChjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGl0VGVzdEhhbmRsZXJzLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGNvbnRleHQubG9jYWw7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBoYW5kbGVyKGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgY29udGV4dC50eXBlLCB4LCB5LCBjb250ZXh0LmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb250ZXh0LnR5cGUgPT09ICdwb2ludGVyTW92ZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmICFjb21wb25lbnQucG9pbnRlck92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdmVyJywgeCwgeSwgY29udGV4dC5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFyZXN1bHQgJiYgY29tcG9uZW50LnBvaW50ZXJPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3V0JywgeCwgeSwgY29udGV4dC5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wb2ludGVyT3ZlciA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBnZXRVcGRhdGVDb250ZXh0KGNvbXBvbmVudCwgcGFyZW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aW1lOiBwYXJlbnQudGltZSxcbiAgICAgICAgICAgIGRlcHRoOiBwYXJlbnQuZGVwdGggKyAxLFxuICAgICAgICAgICAgc3VwcG9ydDogcGFyZW50LnN1cHBvcnQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFJlbmRlckNvbnRleHQoY29tcG9uZW50LCBwYXJlbnQpIHtcbiAgICAgICAgY29uc3QgbWF0cml4ID0gVHJhbnNmb3JtLmdldE1hdHJpeChjb21wb25lbnQpO1xuICAgICAgICBjb25zdCBjb2xvclRyYW5zZm9ybSA9IFRyYW5zZm9ybS5nZXRDb2xvclRyYW5zZm9ybShjb21wb25lbnQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVwdGg6IHBhcmVudC5kZXB0aCArIDEsXG4gICAgICAgICAgICBzdXBwb3J0OiBwYXJlbnQuc3VwcG9ydCxcbiAgICAgICAgICAgIG1hdHJpeDogTWF0cml4LmNvbmNhdChwYXJlbnQubWF0cml4LCBtYXRyaXgpLFxuICAgICAgICAgICAgY29sb3JUcmFuc2Zvcm06IENvbG9yVHJhbnNmb3JtLmNvbmNhdChwYXJlbnQuY29sb3JUcmFuc2Zvcm0sIGNvbG9yVHJhbnNmb3JtKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UG9pbnRlckNvbnRleHQoY29tcG9uZW50LCBwYXJlbnQpIHtcbiAgICAgICAgY29uc3QgbWF0cml4ID0gVHJhbnNmb3JtLmdldE1hdHJpeChjb21wb25lbnQpO1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm1lZE1hdHJpeCA9IE1hdHJpeC5jb25jYXQocGFyZW50Lm1hdHJpeCwgbWF0cml4KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlcHRoOiBwYXJlbnQuZGVwdGggKyAxLFxuICAgICAgICAgICAgdHlwZTogcGFyZW50LnR5cGUsXG4gICAgICAgICAgICBzdXBwb3J0OiBwYXJlbnQuc3VwcG9ydCxcbiAgICAgICAgICAgIGdsb2JhbDogcGFyZW50Lmdsb2JhbCxcbiAgICAgICAgICAgIG1hdHJpeDogdHJhbnNmb3JtZWRNYXRyaXgsXG4gICAgICAgICAgICBsb2NhbDogTWF0cml4LnRyYW5zZm9ybUludmVyc2VQb2ludCh0cmFuc2Zvcm1lZE1hdHJpeCwgcGFyZW50Lmdsb2JhbCksXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IFN1cHBvcnQgZnJvbSAnLi9lbmdpbmUvc3VwcG9ydCc7XG5pbXBvcnQgRW5naW5lIGZyb20gJy4vZW5naW5lL2VuZ2luZSc7XG5pbXBvcnQgRGVidWcgZnJvbSAnLi91dGlscy9kZWJ1Zyc7XG5leHBvcnQgKiBmcm9tICcuL2VuZ2luZS9jb250ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vZW5naW5lL3Jlc291cmNlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvcG9pbnRlcic7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvdHJhbnNmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy9zb3VyY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3Bpdm90JztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5leHBvcnQgKiBmcm9tICcuL2lucHV0L2tleWJvYXJkJztcbmV4cG9ydCAqIGZyb20gJy4vaW5wdXQvbW91c2UnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnB1dC90b3VjaCc7XG5leHBvcnQgeyBTdXBwb3J0LCBFbmdpbmUsIERlYnVnLCB9O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5S2V5Ym9hcmRTdXBwb3J0RXh0ZW5zaW9uKGVuZ2luZSkge1xufVxuIiwiZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCB0eXBlKSB7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSBlbmdpbmUuc3VwcG9ydDtcbiAgICBjb25zdCBjbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIGNsaWVudFJlY3QubGVmdCAtIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIGNsaWVudFJlY3QudG9wIC0gZWxlbWVudC5jbGllbnRUb3A7XG4gICAgZW5naW5lLmRpc3BhdGNoUG9pbnRlckV2ZW50KHtcbiAgICAgICAgdHlwZSwgeCwgeSxcbiAgICB9KTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TW91c2VTdXBwb3J0RXh0ZW5zaW9uKGVuZ2luZSkge1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gZW5naW5lLnN1cHBvcnQ7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckRvd24nKTtcbiAgICB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlclVwJyk7XG4gICAgfSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlck1vdmUnKTtcbiAgICB9KTtcbn1cbiIsImZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgdHlwZSkge1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gZW5naW5lLnN1cHBvcnQ7XG4gICAgY29uc3QgY2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzW2ldO1xuICAgICAgICBjb25zdCB4ID0gdG91Y2guY2xpZW50WCAtIGNsaWVudFJlY3QubGVmdCAtIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgICAgICAgY29uc3QgeSA9IHRvdWNoLmNsaWVudFkgLSBjbGllbnRSZWN0LnRvcCAtIGVsZW1lbnQuY2xpZW50VG9wO1xuICAgICAgICBjb25zdCBpZCA9IHRvdWNoLmlkZW50aWZpZXI7XG4gICAgICAgIGVuZ2luZS5kaXNwYXRjaFBvaW50ZXJFdmVudCh7XG4gICAgICAgICAgICB0eXBlLCB4LCB5LCBpZCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlUb3VjaFN1cHBvcnRFeHRlbnNpb24oZW5naW5lKSB7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSBlbmdpbmUuc3VwcG9ydDtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckRvd24nKTtcbiAgICB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJVcCcpO1xuICAgIH0pO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJNb3ZlJyk7XG4gICAgfSk7XG59XG4iLCJleHBvcnQgdmFyIFBpdm90O1xuKGZ1bmN0aW9uIChQaXZvdCkge1xuICAgIGZ1bmN0aW9uIGdldFgocGl2b3QsIHdpZHRoKSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RYIH0gPSBwaXZvdDtcbiAgICAgICAgaWYgKHBpdm90WCkge1xuICAgICAgICAgICAgcmV0dXJuIC1waXZvdFggKiB3aWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgUGl2b3QuZ2V0WCA9IGdldFg7XG4gICAgZnVuY3Rpb24gZ2V0WShwaXZvdCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RZIH0gPSBwaXZvdDtcbiAgICAgICAgaWYgKHBpdm90WSkge1xuICAgICAgICAgICAgcmV0dXJuIC1waXZvdFkgKiBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFBpdm90LmdldFkgPSBnZXRZO1xufSkoUGl2b3QgfHwgKFBpdm90ID0ge30pKTtcbiIsImltcG9ydCBEZWJ1ZyBmcm9tICcuLi91dGlscy9kZWJ1Zyc7XG5leHBvcnQgdmFyIFBvaW50ZXI7XG4oZnVuY3Rpb24gKFBvaW50ZXIpIHtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJPdmVyKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuICEhcG9pbnRlci5wb2ludGVyT3ZlcjtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJPdmVyID0gaXNQb2ludGVyT3ZlcjtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJFbmFibGVkKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50ZXIucG9pbnRlckVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJFbmFibGVkID0gaXNQb2ludGVyRW5hYmxlZDtcbiAgICBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KHBvaW50ZXIsIHR5cGUsIHgsIHksIGlkKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJOYW1lID0gYG9uJHt0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7dHlwZS5zbGljZSgxKX1gO1xuICAgICAgICBpZiAoaGFuZGxlck5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBwb2ludGVyW2hhbmRsZXJOYW1lXTtcbiAgICAgICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUsIHgsIHksIGlkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaGFuZGxlcihldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBEZWJ1Zy53YXJuaW5nKGBQb2ludGVyIGV2ZW50IHdpdGggdHlwZTogJHt0eXBlfSBub3QgZm91bmRgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xufSkoUG9pbnRlciB8fCAoUG9pbnRlciA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFNvdXJjZTtcbihmdW5jdGlvbiAoU291cmNlKSB7XG4gICAgZnVuY3Rpb24gZ2V0UmVzb3VyY2Uoc291cmNlLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBzb3VyY2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dC5zdXBwb3J0LnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICB9XG4gICAgU291cmNlLmdldFJlc291cmNlID0gZ2V0UmVzb3VyY2U7XG4gICAgZnVuY3Rpb24gaXNMb2FkZWQoc291cmNlLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gZ2V0UmVzb3VyY2Uoc291cmNlLCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuICEhcmVzb3VyY2U/LmxvYWRlZDtcbiAgICB9XG4gICAgU291cmNlLmlzTG9hZGVkID0gaXNMb2FkZWQ7XG59KShTb3VyY2UgfHwgKFNvdXJjZSA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFRyYW5zZm9ybTtcbihmdW5jdGlvbiAoVHJhbnNmb3JtKSB7XG4gICAgZnVuY3Rpb24gZ2V0TWF0cml4KHRyYW5zZm9ybSkge1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAobWF0cml4KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGE6IG1hdHJpeC5hID8/IDEsXG4gICAgICAgICAgICAgICAgYjogbWF0cml4LmIgPz8gMCxcbiAgICAgICAgICAgICAgICBjOiBtYXRyaXguYyA/PyAwLFxuICAgICAgICAgICAgICAgIGQ6IG1hdHJpeC5kID8/IDEsXG4gICAgICAgICAgICAgICAgdHg6IG1hdHJpeC50eCA/PyAwLFxuICAgICAgICAgICAgICAgIHR5OiBtYXRyaXgudHkgPz8gMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb3RhdGlvbiB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBjb25zdCBzY2FsZVggPSB0cmFuc2Zvcm0uc2NhbGVYID8/IHRyYW5zZm9ybS5zY2FsZSA/PyAxO1xuICAgICAgICBjb25zdCBzY2FsZVkgPSB0cmFuc2Zvcm0uc2NhbGVZID8/IHRyYW5zZm9ybS5zY2FsZSA/PyAxO1xuICAgICAgICBjb25zdCB0eCA9IHRyYW5zZm9ybS54ID8/IDA7XG4gICAgICAgIGNvbnN0IHR5ID0gdHJhbnNmb3JtLnkgPz8gMDtcbiAgICAgICAgaWYgKHJvdGF0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gICAgICAgICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihyb3RhdGlvbik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGE6IGNvcyAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBiOiBzaW4gKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgYzogLXNpbiAqIHNjYWxlWSxcbiAgICAgICAgICAgICAgICBkOiBjb3MgKiBzY2FsZVksXG4gICAgICAgICAgICAgICAgdHgsXG4gICAgICAgICAgICAgICAgdHksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiBzY2FsZVgsXG4gICAgICAgICAgICBiOiAwLFxuICAgICAgICAgICAgYzogMCxcbiAgICAgICAgICAgIGQ6IHNjYWxlWSxcbiAgICAgICAgICAgIHR4LFxuICAgICAgICAgICAgdHksXG4gICAgICAgIH07XG4gICAgfVxuICAgIFRyYW5zZm9ybS5nZXRNYXRyaXggPSBnZXRNYXRyaXg7XG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFscGhhTXVsdGlwbGllcjogY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyID8/IDEsXG4gICAgICAgICAgICAgICAgcmVkTXVsdGlwbGllcjogY29sb3JUcmFuc2Zvcm0ucmVkTXVsdGlwbGllciA/PyAxLFxuICAgICAgICAgICAgICAgIGdyZWVuTXVsdGlwbGllcjogY29sb3JUcmFuc2Zvcm0uZ3JlZW5NdWx0aXBsaWVyID8/IDEsXG4gICAgICAgICAgICAgICAgYmx1ZU11bHRpcGxpZXI6IGNvbG9yVHJhbnNmb3JtLmJsdWVNdWx0aXBsaWVyID8/IDEsXG4gICAgICAgICAgICAgICAgYWxwaGFPZmZzZXQ6IGNvbG9yVHJhbnNmb3JtLmFscGhhT2Zmc2V0ID8/IDAsXG4gICAgICAgICAgICAgICAgcmVkT2Zmc2V0OiBjb2xvclRyYW5zZm9ybS5yZWRPZmZzZXQgPz8gMCxcbiAgICAgICAgICAgICAgICBncmVlbk9mZnNldDogY29sb3JUcmFuc2Zvcm0uZ3JlZW5PZmZzZXQgPz8gMCxcbiAgICAgICAgICAgICAgICBibHVlT2Zmc2V0OiBjb2xvclRyYW5zZm9ybS5ibHVlT2Zmc2V0ID8/IDAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgdGludCB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAodGludCkge1xuICAgICAgICAgICAgY29uc3QgeyBjb2xvciA9IDAsIHZhbHVlID0gMSB9ID0gdGludDtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlSW52ZXJ0ZWQgPSAxIC0gdmFsdWU7XG4gICAgICAgICAgICBjb25zdCByID0gKGNvbG9yID4+IDE2KSAmIDB4ZmY7XG4gICAgICAgICAgICBjb25zdCBnID0gKGNvbG9yID4+IDgpICYgMHhmZjtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBjb2xvciAmIDB4ZmY7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFscGhhTXVsdGlwbGllcjogdHJhbnNmb3JtLmFscGhhID8/IDEsXG4gICAgICAgICAgICAgICAgcmVkTXVsdGlwbGllcjogdmFsdWVJbnZlcnRlZCxcbiAgICAgICAgICAgICAgICBncmVlbk11bHRpcGxpZXI6IHZhbHVlSW52ZXJ0ZWQsXG4gICAgICAgICAgICAgICAgYmx1ZU11bHRpcGxpZXI6IHZhbHVlSW52ZXJ0ZWQsXG4gICAgICAgICAgICAgICAgYWxwaGFPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgcmVkT2Zmc2V0OiByICogdmFsdWUsXG4gICAgICAgICAgICAgICAgZ3JlZW5PZmZzZXQ6IGcgKiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBibHVlT2Zmc2V0OiBiICogdmFsdWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbHBoYU11bHRpcGxpZXI6IHRyYW5zZm9ybS5hbHBoYSA/PyAxLFxuICAgICAgICAgICAgcmVkTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGdyZWVuTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGJsdWVNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgYWxwaGFPZmZzZXQ6IDAsXG4gICAgICAgICAgICByZWRPZmZzZXQ6IDAsXG4gICAgICAgICAgICBncmVlbk9mZnNldDogMCxcbiAgICAgICAgICAgIGJsdWVPZmZzZXQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFRyYW5zZm9ybS5nZXRDb2xvclRyYW5zZm9ybSA9IGdldENvbG9yVHJhbnNmb3JtO1xufSkoVHJhbnNmb3JtIHx8IChUcmFuc2Zvcm0gPSB7fSkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVidWcge1xuICAgIHN0YXRpYyBsb2coLi4uYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICB9XG4gICAgc3RhdGljIGVycm9yKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoYXJncyk7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuZXJyb3JzLmdldChpZCk7XG4gICAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgdGhpcy5lcnJvcnMuc2V0KGlkLCBjb3VudCk7XG4gICAgfVxuICAgIHN0YXRpYyB3YXJuaW5nKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoYXJncyk7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMud2FybmluZ3MuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMud2FybmluZ3Muc2V0KGlkLCBjb3VudCk7XG4gICAgfVxufVxuRGVidWcuZXJyb3JzID0gbmV3IE1hcCgpO1xuRGVidWcud2FybmluZ3MgPSBuZXcgTWFwKCk7XG4iLCJleHBvcnQgdmFyIEJvdW5kcztcbihmdW5jdGlvbiAoQm91bmRzKSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtaW5YOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWluWTogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG1heFg6IE51bWJlci5NSU5fVkFMVUUsXG4gICAgICAgICAgICBtYXhZOiBOdW1iZXIuTUlOX1ZBTFVFLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBCb3VuZHMuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IG1pblgsIG1pblksIG1heFgsIG1heFksIH0gPSBib3VuZHM7XG4gICAgICAgIHJldHVybiBtaW5YID09PSBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgICAgICAgICAmJiBtaW5ZID09PSBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgICAgICAgICAmJiBtYXhYID09PSBOdW1iZXIuTUlOX1ZBTFVFXG4gICAgICAgICAgICAmJiBtYXhZID09PSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgIH1cbiAgICBCb3VuZHMuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gdG9SZWN0YW5nbGUoYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgfSA9IGJvdW5kcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IG1pblgsXG4gICAgICAgICAgICB5OiBtaW5ZLFxuICAgICAgICAgICAgd2lkdGg6IG1heFggLSBtaW5YLFxuICAgICAgICAgICAgaGVpZ2h0OiBtYXhZIC0gbWluWSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgQm91bmRzLnRvUmVjdGFuZ2xlID0gdG9SZWN0YW5nbGU7XG4gICAgZnVuY3Rpb24gdGVzdFgoYm91bmRzLCB4KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWCA+IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WCA8IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhYID0geDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFggPSB0ZXN0WDtcbiAgICBmdW5jdGlvbiB0ZXN0WShib3VuZHMsIHkpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0WSA9IHRlc3RZO1xuICAgIGZ1bmN0aW9uIHRlc3QoYm91bmRzLCB4LCB5KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWCA+IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WCA8IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhYID0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3QgPSB0ZXN0O1xuICAgIGZ1bmN0aW9uIHRlc3RQb2ludChib3VuZHMsIHBvaW50KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIGlmIChib3VuZHMubWluWCA+IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WCA8IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhYID0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RQb2ludCA9IHRlc3RQb2ludDtcbn0pKEJvdW5kcyB8fCAoQm91bmRzID0ge30pKTtcbiIsImV4cG9ydCB2YXIgQ29sb3JUcmFuc2Zvcm07XG4oZnVuY3Rpb24gKENvbG9yVHJhbnNmb3JtKSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbHBoYU11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICByZWRNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgZ3JlZW5NdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgYmx1ZU11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBhbHBoYU9mZnNldDogMCxcbiAgICAgICAgICAgIHJlZE9mZnNldDogMCxcbiAgICAgICAgICAgIGdyZWVuT2Zmc2V0OiAwLFxuICAgICAgICAgICAgYmx1ZU9mZnNldDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBjb25jYXQoY3QxLCBjdDApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFscGhhTXVsdGlwbGllcjogY3QxLmFscGhhTXVsdGlwbGllciAqIGN0MC5hbHBoYU11bHRpcGxpZXIsXG4gICAgICAgICAgICByZWRNdWx0aXBsaWVyOiBjdDEucmVkTXVsdGlwbGllciAqIGN0MC5yZWRNdWx0aXBsaWVyLFxuICAgICAgICAgICAgZ3JlZW5NdWx0aXBsaWVyOiBjdDEuZ3JlZW5NdWx0aXBsaWVyICogY3QwLmdyZWVuTXVsdGlwbGllcixcbiAgICAgICAgICAgIGJsdWVNdWx0aXBsaWVyOiBjdDEuYmx1ZU11bHRpcGxpZXIgKiBjdDAuYmx1ZU11bHRpcGxpZXIsXG4gICAgICAgICAgICBhbHBoYU9mZnNldDogY3QxLmFscGhhTXVsdGlwbGllciAqIGN0MC5hbHBoYU9mZnNldCArIGN0MC5hbHBoYU9mZnNldCxcbiAgICAgICAgICAgIHJlZE9mZnNldDogY3QxLnJlZE11bHRpcGxpZXIgKiBjdDAucmVkT2Zmc2V0ICsgY3QwLnJlZE9mZnNldCxcbiAgICAgICAgICAgIGdyZWVuT2Zmc2V0OiBjdDEuZ3JlZW5NdWx0aXBsaWVyICogY3QwLmdyZWVuT2Zmc2V0ICsgY3QwLmdyZWVuT2Zmc2V0LFxuICAgICAgICAgICAgYmx1ZU9mZnNldDogY3QxLmJsdWVNdWx0aXBsaWVyICogY3QwLmJsdWVPZmZzZXQgKyBjdDAuYmx1ZU9mZnNldCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uY29uY2F0ID0gY29uY2F0O1xuICAgIGZ1bmN0aW9uIGlzRGVmYXVsdChjdCkge1xuICAgICAgICByZXR1cm4gY3QucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5NdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ibHVlTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYWxwaGFNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5yZWRPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmdyZWVuT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ibHVlT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU9mZnNldCA9PT0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uaXNEZWZhdWx0ID0gaXNEZWZhdWx0O1xufSkoQ29sb3JUcmFuc2Zvcm0gfHwgKENvbG9yVHJhbnNmb3JtID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vY29sb3ItdHJhbnNmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vYm91bmRzJztcbmV4cG9ydCAqIGZyb20gJy4vbWF0cml4JztcbmV4cG9ydCAqIGZyb20gJy4vcG9pbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWN0YW5nbGUnO1xuIiwiZXhwb3J0IHZhciBNYXRyaXg7XG4oZnVuY3Rpb24gKE1hdHJpeCkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTogMSxcbiAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICBjOiAwLFxuICAgICAgICAgICAgZDogMSxcbiAgICAgICAgICAgIHR4OiAwLFxuICAgICAgICAgICAgdHk6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIE1hdHJpeC5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvbmNhdChtYXRyaXgwLCBtYXRyaXgxKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiBtYXRyaXgxLmEgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmMsXG4gICAgICAgICAgICBiOiBtYXRyaXgxLmEgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmQsXG4gICAgICAgICAgICBjOiBtYXRyaXgxLmMgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmMsXG4gICAgICAgICAgICBkOiBtYXRyaXgxLmMgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmQsXG4gICAgICAgICAgICB0eDogbWF0cml4MS50eCAqIG1hdHJpeDAuYSArIG1hdHJpeDEudHkgKiBtYXRyaXgwLmMgKyBtYXRyaXgwLnR4LFxuICAgICAgICAgICAgdHk6IG1hdHJpeDEudHggKiBtYXRyaXgwLmIgKyBtYXRyaXgxLnR5ICogbWF0cml4MC5kICsgbWF0cml4MC50eSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgTWF0cml4LmNvbmNhdCA9IGNvbmNhdDtcbiAgICBmdW5jdGlvbiBnZXREZXRlcm1pbmFudChtYXRyaXgpIHtcbiAgICAgICAgcmV0dXJuIG1hdHJpeC5hICogbWF0cml4LmQgLSBtYXRyaXguYiAqIG1hdHJpeC5jO1xuICAgIH1cbiAgICBNYXRyaXguZ2V0RGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudDtcbiAgICBmdW5jdGlvbiBpbnZlcnQobWF0cml4KSB7XG4gICAgICAgIGxldCBkZXRlcm1pbmFudCA9IGdldERldGVybWluYW50KG1hdHJpeCk7XG4gICAgICAgIGlmIChkZXRlcm1pbmFudCA9PT0gMCkge1xuICAgICAgICAgICAgbWF0cml4LmEgPSAwO1xuICAgICAgICAgICAgbWF0cml4LmIgPSAwO1xuICAgICAgICAgICAgbWF0cml4LmMgPSAwO1xuICAgICAgICAgICAgbWF0cml4LmQgPSAwO1xuICAgICAgICAgICAgbWF0cml4LnR4ID0gLW1hdHJpeC50eDtcbiAgICAgICAgICAgIG1hdHJpeC50eSA9IC1tYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXRlcm1pbmFudCA9IDEuMCAvIGRldGVybWluYW50O1xuICAgICAgICAgICAgY29uc3QgZCA9IG1hdHJpeC5kICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICBjb25zdCBhID0gbWF0cml4LmEgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIG1hdHJpeC5hID0gZDtcbiAgICAgICAgICAgIG1hdHJpeC5iICo9IC1kZXRlcm1pbmFudDtcbiAgICAgICAgICAgIG1hdHJpeC5jICo9IC1kZXRlcm1pbmFudDtcbiAgICAgICAgICAgIG1hdHJpeC5kID0gYTtcbiAgICAgICAgICAgIGNvbnN0IHR4ID0gLW1hdHJpeC5hICogbWF0cml4LnR4IC0gbWF0cml4LmMgKiBtYXRyaXgudHk7XG4gICAgICAgICAgICBjb25zdCB0eSA9IC1tYXRyaXguYiAqIG1hdHJpeC50eCAtIG1hdHJpeC5kICogbWF0cml4LnR5O1xuICAgICAgICAgICAgbWF0cml4LnR4ID0gdHg7XG4gICAgICAgICAgICBtYXRyaXgudHkgPSB0eTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBNYXRyaXguaW52ZXJ0ID0gaW52ZXJ0O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50KG1hdHJpeCwgcG9pbnQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHggKiBtYXRyaXguYSArIHkgKiBtYXRyaXguYyArIG1hdHJpeC50eCxcbiAgICAgICAgICAgIHk6IHggKiBtYXRyaXguYiArIHkgKiBtYXRyaXguZCArIG1hdHJpeC50eSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybVBvaW50ID0gdHJhbnNmb3JtUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtSW52ZXJzZVBvaW50KG1hdHJpeCwgcG9pbnQpIHtcbiAgICAgICAgbGV0IGRldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KTtcbiAgICAgICAgaWYgKGRldGVybWluYW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IC1tYXRyaXgudHgsXG4gICAgICAgICAgICAgICAgeTogLW1hdHJpeC50eSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSAxIC8gZGV0ZXJtaW5hbnQ7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBkZXRlcm1pbmFudCAqIChtYXRyaXguYyAqIChtYXRyaXgudHkgLSB5KSArIG1hdHJpeC5kICogKHggLSBtYXRyaXgudHgpKSxcbiAgICAgICAgICAgIHk6IGRldGVybWluYW50ICogKG1hdHJpeC5hICogKHkgLSBtYXRyaXgudHkpICsgbWF0cml4LmIgKiAobWF0cml4LnR4IC0geCkpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVBvaW50ID0gdHJhbnNmb3JtSW52ZXJzZVBvaW50O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybUJvdW5kcyhtYXRyaXgsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IGEsIGIsIGMsIGQsIHR4LCB0eSwgfSA9IG1hdHJpeDtcbiAgICAgICAgY29uc3QgcnggPSBib3VuZHMueDtcbiAgICAgICAgY29uc3QgcnkgPSBib3VuZHMueTtcbiAgICAgICAgY29uc3QgcnIgPSByeCArIGJvdW5kcy53aWR0aDtcbiAgICAgICAgY29uc3QgcmIgPSByeSArIGJvdW5kcy5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IG54MSA9IHJ4ICogYSArIHJ5ICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTEgPSByeCAqIGIgKyByeSAqIGQgKyB0eTtcbiAgICAgICAgY29uc3QgbngyID0gcnIgKiBhICsgcnkgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MiA9IHJyICogYiArIHJ5ICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDMgPSByciAqIGEgKyByYiAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkzID0gcnIgKiBiICsgcmIgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54NCA9IHJ4ICogYSArIHJiICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTQgPSByeCAqIGIgKyByYiAqIGQgKyB0eTtcbiAgICAgICAgbGV0IGxlZnQgPSBueDE7XG4gICAgICAgIGlmIChsZWZ0ID4gbngyKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbngyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0ID4gbngzKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbngzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0ID4gbng0KSB7XG4gICAgICAgICAgICBsZWZ0ID0gbng0O1xuICAgICAgICB9XG4gICAgICAgIGxldCB0b3AgPSBueTE7XG4gICAgICAgIGlmICh0b3AgPiBueTIpIHtcbiAgICAgICAgICAgIHRvcCA9IG55MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9wID4gbnkzKSB7XG4gICAgICAgICAgICB0b3AgPSBueTM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcCA+IG55NCkge1xuICAgICAgICAgICAgdG9wID0gbnk0O1xuICAgICAgICB9XG4gICAgICAgIGxldCByaWdodCA9IG54MTtcbiAgICAgICAgaWYgKHJpZ2h0IDwgbngyKSB7XG4gICAgICAgICAgICByaWdodCA9IG54MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgPCBueDMpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbngzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodCA8IG54NCkge1xuICAgICAgICAgICAgcmlnaHQgPSBueDQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJvdHRvbSA9IG55MTtcbiAgICAgICAgaWYgKGJvdHRvbSA8IG55Mikge1xuICAgICAgICAgICAgYm90dG9tID0gbnkyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3R0b20gPCBueTMpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55MztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tIDwgbnk0KSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IGxlZnQsXG4gICAgICAgICAgICB5OiB0b3AsXG4gICAgICAgICAgICB3aWR0aDogcmlnaHQgLSBsZWZ0LFxuICAgICAgICAgICAgaGVpZ2h0OiBib3R0b20gLSB0b3AsXG4gICAgICAgIH07XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Cb3VuZHMgPSB0cmFuc2Zvcm1Cb3VuZHM7XG59KShNYXRyaXggfHwgKE1hdHJpeCA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFBvaW50O1xuKGZ1bmN0aW9uIChQb2ludCkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuICAgIFBvaW50LmVtcHR5ID0gZW1wdHk7XG59KShQb2ludCB8fCAoUG9pbnQgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBSZWN0YW5nbGU7XG4oZnVuY3Rpb24gKFJlY3RhbmdsZSkge1xuICAgIGZ1bmN0aW9uIGNvbnRhaW5zKHJlY3RhbmdsZSwgcG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZS54IDwgcG9pbnQueFxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnggKyByZWN0YW5nbGUud2lkdGggPiBwb2ludC54XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueSA8IHBvaW50LnlcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS55ICsgcmVjdGFuZ2xlLmhlaWdodCA+IHBvaW50Lnk7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5jb250YWlucyA9IGNvbnRhaW5zO1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiAhcmVjdGFuZ2xlLndpZHRoIHx8ICFyZWN0YW5nbGUuaGVpZ2h0O1xuICAgIH1cbiAgICBSZWN0YW5nbGUuaXNFbXB0eSA9IGlzRW1wdHk7XG59KShSZWN0YW5nbGUgfHwgKFJlY3RhbmdsZSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCwgU291cmNlLCB9IGZyb20gJ0BlMmQvZW5naW5lJztcbmltcG9ydCB7IE1hdHJpeCwgUmVjdGFuZ2xlIH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IGFwcGx5SW1hZ2VFeHRlbnNpb24sIElNQUdFIH0gZnJvbSAnLi9pbWFnZSc7XG5sZXQgdGVtcENvbnRleHQ7XG5mdW5jdGlvbiBpc0RlZmF1bHRDb2xvclRyYW5zZm9ybShjdCkge1xuICAgIHJldHVybiBjdC5yZWRNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICYmIGN0LmdyZWVuTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAmJiBjdC5ibHVlTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAmJiBjdC5yZWRPZmZzZXQgPT09IDBcbiAgICAgICAgJiYgY3QuZ3JlZW5PZmZzZXQgPT09IDBcbiAgICAgICAgJiYgY3QuYmx1ZU9mZnNldCA9PT0gMFxuICAgICAgICAmJiBjdC5hbHBoYU9mZnNldCA9PT0gMDtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVRlbXBDb250ZXh0KGNvbnRleHQpIHtcbiAgICBpZiAoIXRlbXBDb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0ZW1wQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIH1cbiAgICBpZiAodGVtcENvbnRleHQuY2FudmFzLndpZHRoICE9PSBjb250ZXh0LmNhbnZhcy53aWR0aCkge1xuICAgICAgICB0ZW1wQ29udGV4dC5jYW52YXMud2lkdGggPSBjb250ZXh0LmNhbnZhcy53aWR0aDtcbiAgICB9XG4gICAgaWYgKHRlbXBDb250ZXh0LmNhbnZhcy5oZWlnaHQgIT09IGNvbnRleHQuY2FudmFzLmhlaWdodCkge1xuICAgICAgICB0ZW1wQ29udGV4dC5jYW52YXMuaGVpZ2h0ID0gY29udGV4dC5jYW52YXMuaGVpZ2h0O1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDYW52YXNDb2xvcihpbWFnZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlc291cmNlID0gU291cmNlLmdldFJlc291cmNlKGltYWdlLCBjb250ZXh0KTtcbiAgICBpZiAoIXJlc291cmNlPy5sb2FkZWQgfHwgIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBzdXBwb3J0LCBtYXRyaXggfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgeyBjb250ZXh0MmQgfSA9IHN1cHBvcnQ7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuICAgIGlmIChpc0RlZmF1bHRDb2xvclRyYW5zZm9ybShjb2xvclRyYW5zZm9ybSkpIHtcbiAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdXBkYXRlVGVtcENvbnRleHQoY29udGV4dDJkKTtcbiAgICAgICAgY29uc3QgYm91bmRzID0gTWF0cml4LnRyYW5zZm9ybUJvdW5kcyhtYXRyaXgsIHtcbiAgICAgICAgICAgIHgsIHksIHdpZHRoLCBoZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoUmVjdGFuZ2xlLmlzRW1wdHkoYm91bmRzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRlbXBDb250ZXh0LmNsZWFyUmVjdChib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgIHRlbXBDb250ZXh0LnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICB0ZW1wQ29udGV4dC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgICAgICBjb25zdCBpbWFnZURhdGEgPSB0ZW1wQ29udGV4dC5nZXRJbWFnZURhdGEoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICBjb25zdCBybSA9IGNvbG9yVHJhbnNmb3JtLnJlZE11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGdtID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBibSA9IGNvbG9yVHJhbnNmb3JtLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBhbSA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3Qgcm8gPSBjb2xvclRyYW5zZm9ybS5yZWRPZmZzZXQ7XG4gICAgICAgIGNvbnN0IGdvID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5PZmZzZXQ7XG4gICAgICAgIGNvbnN0IGJvID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU9mZnNldDtcbiAgICAgICAgY29uc3QgYW8gPSBjb2xvclRyYW5zZm9ybS5hbHBoYU9mZnNldDtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBpbWFnZURhdGE7XG4gICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBkYXRhO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDspIHtcbiAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBybSArIHJvO1xuICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGdtICsgZ287XG4gICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogYm0gKyBibztcbiAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBhbSArIGFvO1xuICAgICAgICB9XG4gICAgICAgIHRlbXBDb250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIGJvdW5kcy54LCBib3VuZHMueSk7XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZSh0ZW1wQ29udGV4dC5jYW52YXMsIGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0LCBib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbihzdXBwb3J0KSB7XG4gICAgYXBwbHlJbWFnZUV4dGVuc2lvbihzdXBwb3J0KTtcbiAgICBzdXBwb3J0LnJlbmRlckhhbmRsZXJzLnNldChJTUFHRSwgcmVuZGVyQ2FudmFzQ29sb3IpO1xufVxuIiwiaW1wb3J0IHsgUGl2b3QsIFNvdXJjZSwgfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5pbXBvcnQgeyBhcHBseUltYWdlRXh0ZW5zaW9uLCBJTUFHRSB9IGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNhbnZhcyhpbWFnZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlc291cmNlID0gU291cmNlLmdldFJlc291cmNlKGltYWdlLCBjb250ZXh0KTtcbiAgICBpZiAoIXJlc291cmNlPy5sb2FkZWQgfHwgIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBzdXBwb3J0IH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IHsgY29udGV4dDJkIH0gPSBzdXBwb3J0O1xuICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q2FudmFzSW1hZ2VFeHRlbnNpb24oc3VwcG9ydCkge1xuICAgIGFwcGx5SW1hZ2VFeHRlbnNpb24oc3VwcG9ydCk7XG4gICAgc3VwcG9ydC5yZW5kZXJIYW5kbGVycy5zZXQoSU1BR0UsIHJlbmRlckNhbnZhcyk7XG59XG4iLCJpbXBvcnQgeyBQaXZvdCwgfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgcmVzb2x2ZUltYWdlIH0gZnJvbSAnQGUyZC9yZXNvdXJjZXMnO1xuZXhwb3J0IGNvbnN0IElNQUdFID0gJ2ltYWdlJztcbmV4cG9ydCB2YXIgSW1hZ2U7XG4oZnVuY3Rpb24gKEltYWdlKSB7XG4gICAgZnVuY3Rpb24gZ2V0Qm91bmRzKGltYWdlLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBpbWFnZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzdXBwb3J0IH0gPSBjb250ZXh0O1xuICAgICAgICBjb25zdCByZXNvdXJjZSA9IHN1cHBvcnQucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5sb2FkZWQgfHwgIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHgsIHksIHdpZHRoLCBoZWlnaHQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIEltYWdlLmdldEJvdW5kcyA9IGdldEJvdW5kcztcbn0pKEltYWdlIHx8IChJbWFnZSA9IHt9KSk7XG5leHBvcnQgZnVuY3Rpb24gaGl0VGVzdChpbWFnZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbG9jYWwgfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYm91bmRzID0gSW1hZ2UuZ2V0Qm91bmRzKGltYWdlLCBjb250ZXh0KTtcbiAgICByZXR1cm4gISFib3VuZHMgJiYgUmVjdGFuZ2xlLmNvbnRhaW5zKGJvdW5kcywgbG9jYWwpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5SW1hZ2VFeHRlbnNpb24oc3VwcG9ydCkge1xuICAgIHN1cHBvcnQuaGl0VGVzdEhhbmRsZXJzLnNldChJTUFHRSwgaGl0VGVzdCk7XG4gICAgc3VwcG9ydC5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvbHZlSW1hZ2UpO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2ltYWdlLWNhbnZhcyc7XG5leHBvcnQgKiBmcm9tICcuL2ltYWdlLWNhbnZhcy1jb2xvcic7XG4iLCJpbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJ0BlMmQvZW5naW5lJztcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSW1hZ2UoYXNzZXQpIHtcbiAgICBjb25zdCBleHRlbnNpb24gPSBhc3NldC5zcGxpdCgnLicpLnBvcCgpO1xuICAgIHN3aXRjaCAoZXh0ZW5zaW9uKSB7XG4gICAgICAgIGNhc2UgJ3BuZyc6XG4gICAgICAgIGNhc2UgJ2pwZyc6XG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHtcbiAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBhc3NldDtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaW1hZ2UgbG9hZGVkOiAke2Fzc2V0fWApO1xuICAgICAgICAgICAgICAgIHJlc291cmNlLmltYWdlID0gaW1hZ2U7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gKGUpID0+IERlYnVnLndhcm5pbmcoJ2ltYWdlIGxvYWQgZXJyb3InLCBlKTtcbiAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbiIsImltcG9ydCB7IEJvdW5kcyB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBQYXRoQ29tbWFuZCB9IGZyb20gJy4vcGF0aCc7XG5pbXBvcnQgeyBHcmFwaGljc1N0cmluZyB9IGZyb20gJy4vc3RyaW5nJztcbmV4cG9ydCB2YXIgUmVjdGFuZ2xlRGF0YTtcbihmdW5jdGlvbiAoUmVjdGFuZ2xlRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHdpZHRoID0gMCwgaGVpZ2h0ID0gMCwgfSA9IGRhdGE7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCwgeSk7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShSZWN0YW5nbGVEYXRhIHx8IChSZWN0YW5nbGVEYXRhID0ge30pKTtcbmV4cG9ydCB2YXIgRWxsaXBzZURhdGE7XG4oZnVuY3Rpb24gKEVsbGlwc2VEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgcmFkaXVzLCByYWRpdXNYID0gMCwgcmFkaXVzWSA9IDAsIH0gPSBkYXRhO1xuICAgICAgICBjb25zdCByeCA9IHJhZGl1cyA/PyByYWRpdXNYO1xuICAgICAgICBjb25zdCByeSA9IHJhZGl1cyA/PyByYWRpdXNZO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHggLSByeCwgeSAtIHJ5KTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4ICsgcngsIHkgKyByeSk7XG4gICAgfVxuICAgIEVsbGlwc2VEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEVsbGlwc2VEYXRhIHx8IChFbGxpcHNlRGF0YSA9IHt9KSk7XG5leHBvcnQgdmFyIFBhdGhEYXRhO1xuKGZ1bmN0aW9uIChQYXRoRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoRGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcGF0aERhdGE7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIEdyYXBoaWNzU3RyaW5nLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBkYXRhW2ldO1xuICAgICAgICAgICAgICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyhjb21tYW5kLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFBhdGhEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFBhdGhEYXRhIHx8IChQYXRoRGF0YSA9IHt9KSk7XG5leHBvcnQgdmFyIEdyYXBoaWNzRGF0YTtcbihmdW5jdGlvbiAoR3JhcGhpY3NEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IGRhdGE7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAncmVjdGFuZ2xlJzpcbiAgICAgICAgICAgICAgICBSZWN0YW5nbGVEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZWxsaXBzZSc6XG4gICAgICAgICAgICAgICAgRWxsaXBzZURhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwYXRoJzpcbiAgICAgICAgICAgICAgICBQYXRoRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEdyYXBoaWNzRGF0YSB8fCAoR3JhcGhpY3NEYXRhID0ge30pKTtcbiIsImltcG9ydCB7IEJvdW5kcyB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5leHBvcnQgdmFyIFBhdGhDb21tYW5kO1xuKGZ1bmN0aW9uIChQYXRoQ29tbWFuZCkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBwYXRoO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ21vdmVUbyc6XG4gICAgICAgICAgICBjYXNlICdsaW5lVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBtb3ZlVG8ueCA/PyAwLCBtb3ZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1cnZlVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3VydmVUby5jeCA/PyAwLCBjdXJ2ZVRvLmN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3VydmVUby54ID8/IDAsIGN1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1YmljQ3VydmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby5jeCA/PyAwLCBjdWJpY0N1cnZlVG8uY3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8uc3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLnN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLnggPz8gMCwgY3ViaWNDdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFBhdGhDb21tYW5kIHx8IChQYXRoQ29tbWFuZCA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQYXRoQ29tbWFuZCwgfSBmcm9tICcuL3BhdGgnO1xuY29uc3QgVEVTVF9DT01NQU5EID0gL1tNbUxsSGhWdkNjU3NRcVR0QWFael0vO1xuY29uc3QgVEVTVF9TUEFDRSA9IC9bXFxzLF0vO1xuY29uc3QgVEVTVF9OVU1CRVIgPSAvWy0rLlxcZF0vO1xuZXhwb3J0IGNsYXNzIEdyYXBoaWNzU3RyaW5nU3RyZWFtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gJyc7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAwO1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgIH1cbiAgICBzZXRQYXRoKHBhdGgpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgfVxuICAgIGhhc0RhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uIDwgdGhpcy5wYXRoLmxlbmd0aDtcbiAgICB9XG4gICAgZ2V0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZDtcbiAgICB9XG4gICAgZ2V0U2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTtcbiAgICB9XG4gICAgZ2V0QnVmZmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWZmZXI7XG4gICAgfVxuICAgIHJlYWROZXh0KCkge1xuICAgICAgICB0aGlzLnJlYWRDb21tYW5kKCk7XG4gICAgICAgIHRoaXMucmVhZE51bWJlcnMoKTtcbiAgICB9XG4gICAgcmVhZENvbW1hbmQoKSB7XG4gICAgICAgIHRoaXMuY29tbWFuZCA9IG51bGw7XG4gICAgICAgIHdoaWxlICh0aGlzLnBvc2l0aW9uIDwgdGhpcy5wYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMucGF0aFt0aGlzLnBvc2l0aW9uXTtcbiAgICAgICAgICAgIGlmIChURVNUX0NPTU1BTkQudGVzdChjb21tYW5kKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZCA9IGNvbW1hbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVhZE51bWJlcnMoKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgICAgIGxldCBudW1iZXIgPSAnJztcbiAgICAgICAgd2hpbGUgKHRoaXMucG9zaXRpb24gPCB0aGlzLnBhdGgubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFyID0gdGhpcy5wYXRoW3RoaXMucG9zaXRpb25dO1xuICAgICAgICAgICAgaWYgKFRFU1RfTlVNQkVSLnRlc3QoY2hhcikpIHtcbiAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2hhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKFRFU1RfU1BBQ0UudGVzdChjaGFyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyW3RoaXMuc2l6ZSsrXSA9IHBhcnNlRmxvYXQobnVtYmVyKTtcbiAgICAgICAgICAgICAgICBudW1iZXIgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKFRFU1RfQ09NTUFORC50ZXN0KGNoYXIpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bWJlcikge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJbdGhpcy5zaXplKytdID0gcGFyc2VGbG9hdChudW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEdyYXBoaWNzU3RyaW5nUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBuZXcgR3JhcGhpY3NTdHJpbmdTdHJlYW0oKTtcbiAgICAgICAgdGhpcy5jb21tYW5kID0geyB0eXBlOiAnbW92ZVRvJyB9O1xuICAgICAgICB0aGlzLmNvbW1hbmRFeGlzdHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0WCA9IDA7XG4gICAgICAgIHRoaXMubGFzdFkgPSAwO1xuICAgIH1cbiAgICBzZXRQYXRoKHBhdGgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0uc2V0UGF0aChwYXRoKTtcbiAgICAgICAgdGhpcy5sYXN0WCA9IDA7XG4gICAgICAgIHRoaXMubGFzdFkgPSAwO1xuICAgICAgICB0aGlzLmNvbW1hbmRFeGlzdHMgPSBmYWxzZTtcbiAgICB9XG4gICAgaGFzRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLmhhc0RhdGEoKTtcbiAgICB9XG4gICAgZ2V0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZEV4aXN0cyA/IHRoaXMuY29tbWFuZCA6IG51bGw7XG4gICAgfVxuICAgIHJlYWROZXh0KCkge1xuICAgICAgICB0aGlzLnN0cmVhbS5yZWFkTmV4dCgpO1xuICAgICAgICB0aGlzLnBhcnNlKCk7XG4gICAgfVxuICAgIHBhcnNlKCkge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gdGhpcy5zdHJlYW0uZ2V0Q29tbWFuZCgpO1xuICAgICAgICB0aGlzLmNvbW1hbmRFeGlzdHMgPSAhIWNvbW1hbmQ7XG4gICAgICAgIGlmICghdGhpcy5jb21tYW5kRXhpc3RzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnVmZmVyID0gdGhpcy5zdHJlYW0uZ2V0QnVmZmVyKCk7XG4gICAgICAgIGNvbnN0IFt4MCwgeTAsIHgxLCB5MSwgeDIsIHkyLF0gPSBidWZmZXI7XG4gICAgICAgIGxldCBjeCA9IDA7XG4gICAgICAgIGxldCBjeSA9IDA7XG4gICAgICAgIHN3aXRjaCAoY29tbWFuZCkge1xuICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdtb3ZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby54ID0geDA7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby55ID0geTA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBtb3ZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IG1vdmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbW92ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueCA9IHgwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnkgPSB5MCArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBtb3ZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IG1vdmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHgwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IHkwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSB4MCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0geTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0geDAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBsaW5lVG8ueDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdWJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IHgwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndic6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB4MCArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0geDA7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IHkwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSB4MTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0geTE7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0geDI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0geTI7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IHgwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0geTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSB4MSArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IHkxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSB4MiArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0geTIgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSBjeDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0gY3k7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeCA9IHgwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSB5MDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSB4MTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnkgPSB5MTtcbiAgICAgICAgICAgICAgICAgICAgY3ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIGN5ID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gY3g7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IGN5O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSB4MCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IHkwICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSB4MSArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0geTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IHkwO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSB4MTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0geTE7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0geDAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0geTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSB4MSArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IHkxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ggPSBjdXJ2ZVRvLnggLSAoY3VydmVUby5jeCAtIGN1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIGN5ID0gY3VydmVUby55IC0gKGN1cnZlVG8uY3kgLSBjdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSBjeDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IGN5O1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0geTA7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gY3g7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSBjeTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0geDAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSB5MCArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuY29uc3QgcmVhZGVyID0gbmV3IEdyYXBoaWNzU3RyaW5nUmVhZGVyKCk7XG5leHBvcnQgdmFyIEdyYXBoaWNzU3RyaW5nO1xuKGZ1bmN0aW9uIChHcmFwaGljc1N0cmluZykge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoLCBib3VuZHMpIHtcbiAgICAgICAgcmVhZGVyLnNldFBhdGgocGF0aCk7XG4gICAgICAgIHdoaWxlIChyZWFkZXIuaGFzRGF0YSgpKSB7XG4gICAgICAgICAgICByZWFkZXIucmVhZE5leHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSByZWFkZXIuZ2V0Q29tbWFuZCgpO1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc1N0cmluZyB8fCAoR3JhcGhpY3NTdHJpbmcgPSB7fSkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhpY3Mge1xuICAgIGNvbnN0cnVjdG9yKHNoYXBlKSB7XG4gICAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZTtcbiAgICB9XG4gICAgYmVnaW5GaWxsKGNvbG9yID0gMCwgYWxwaGEgPSAxKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBiZWdpbkJpdG1hcEZpbGwoc3JjLCBtYXRyaXgsIHJlcGVhdCA9IHRydWUsIHNtb290aCA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdiaXRtYXAnLFxuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgcmVwZWF0LFxuICAgICAgICAgICAgc21vb3RoLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBiZWdpbkdyYWRpZW50RmlsbCh0eXBlLCBjb2xvciwgYWxwaGEsIHJhdGlvLCBtYXRyaXgsIHNwcmVhZCA9ICdyZXBlYXQnLCBpbnRlcnBvbGF0aW9uID0gJ3JnYicsIGZvY2FsUG9pbnRSYXRpbyA9IDApIHtcbiAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHNwcmVhZCxcbiAgICAgICAgICAgIGludGVycG9sYXRpb24sXG4gICAgICAgICAgICBmb2NhbFBvaW50UmF0aW8sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxpbmVTdHlsZSh0aGlja25lc3MgPSAwLCBjb2xvciA9IDAsIGFscGhhID0gMSwgcGl4ZWxIaW50aW5nID0gZmFsc2UsIHNjYWxlTW9kZSA9ICdub25lJywgY2FwcyA9ICdyb3VuZCcsIGpvaW50cyA9ICdyb3VuZCcsIG1pdGVyTGltaXQgPSAzKSB7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0ge1xuICAgICAgICAgICAgdGhpY2tuZXNzLFxuICAgICAgICAgICAgcGl4ZWxIaW50aW5nLFxuICAgICAgICAgICAgc2NhbGVNb2RlLFxuICAgICAgICAgICAgY2FwcyxcbiAgICAgICAgICAgIGpvaW50cyxcbiAgICAgICAgICAgIG1pdGVyTGltaXQsXG4gICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxpbmVHcmFkaWVudFN0eWxlKHR5cGUsIGNvbG9yLCBhbHBoYSwgcmF0aW8sIG1hdHJpeCwgc3ByZWFkID0gJ3JlcGVhdCcsIGludGVycG9sYXRpb24gPSAncmdiJywgZm9jYWxQb2ludFJhdGlvID0gMCkge1xuICAgICAgICBpZiAoIXRoaXMuc3Ryb2tlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHJva2UuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICBzcHJlYWQsXG4gICAgICAgICAgICBpbnRlcnBvbGF0aW9uLFxuICAgICAgICAgICAgZm9jYWxQb2ludFJhdGlvLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsaW5lQml0bWFwU3R5bGUoc3JjLCBtYXRyaXgsIHJlcGVhdCA9IHRydWUsIHNtb290aCA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdGhpcy5zdHJva2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0cm9rZS5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ2JpdG1hcCcsXG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICBzbW9vdGgsXG4gICAgICAgIH07XG4gICAgfVxuICAgIG1vdmVUbyh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICBwYXRoLnB1c2goeyB0eXBlOiAnbW92ZVRvJywgeCwgeSB9KTtcbiAgICB9XG4gICAgbGluZVRvKHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goeyB0eXBlOiAnbGluZVRvJywgeCwgeSB9KTtcbiAgICB9XG4gICAgY3VydmVUbyhjeCwgY3ksIHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1cnZlVG8nLCBjeCwgY3ksIHgsIHksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjdWJpY0N1cnZlVG8oY3gsIGN5LCBzeCwgc3ksIHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1cnZlVG8nLCBjeCwgY3ksIHN4LCBzeSwgeCwgeSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdSb3VuZFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgZWxsaXBzZVdpZHRoID0gMCwgZWxsaXBzZUhlaWdodCA9IDApIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnN0IHcgPSBlbGxpcHNlV2lkdGg7XG4gICAgICAgIGNvbnN0IGggPSBlbGxpcHNlSGVpZ2h0O1xuICAgICAgICBjb25zdCBrID0gMC41NTIyODQ4O1xuICAgICAgICBjb25zdCBveCA9ICh3IC8gMikgKiBrO1xuICAgICAgICBjb25zdCBveSA9IChoIC8gMikgKiBrO1xuICAgICAgICBjb25zdCB4ZSA9IHggKyB3O1xuICAgICAgICBjb25zdCB5ZSA9IHkgKyBoO1xuICAgICAgICBjb25zdCB4bSA9IHggKyB3IC8gMjtcbiAgICAgICAgY29uc3QgeW0gPSB5ICsgaCAvIDI7XG4gICAgICAgIGNvbnN0IGR4ID0gd2lkdGggLSB3O1xuICAgICAgICBjb25zdCBkeSA9IGhlaWdodCAtIGg7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbW92ZVRvJyxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5OiB5bSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4LFxuICAgICAgICAgICAgY3k6IHltIC0gb3ksXG4gICAgICAgICAgICBzeDogeG0gLSBveCxcbiAgICAgICAgICAgIHN5OiB5LFxuICAgICAgICAgICAgeDogeG0sXG4gICAgICAgICAgICB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeG0gKyBkeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeG0gKyBveCArIGR4LFxuICAgICAgICAgICAgY3k6IHksXG4gICAgICAgICAgICBzeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHN5OiB5bSAtIG95LFxuICAgICAgICAgICAgeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHk6IHltLFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHk6IHltICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeGUgKyBkeCxcbiAgICAgICAgICAgIGN5OiB5bSArIG95ICsgZHksXG4gICAgICAgICAgICBzeDogeG0gKyBveCArIGR4LFxuICAgICAgICAgICAgc3k6IHllICsgZHksXG4gICAgICAgICAgICB4OiB4bSArIGR4LFxuICAgICAgICAgICAgeTogeWUgKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhtLFxuICAgICAgICAgICAgeTogeWUgKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4bSAtIG94LFxuICAgICAgICAgICAgY3k6IHllICsgZHksXG4gICAgICAgICAgICBzeDogeCxcbiAgICAgICAgICAgIHN5OiB5bSArIG95ICsgZHksXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeTogeW0gKyBkeSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAncmVjdGFuZ2xlJztcbiAgICAgICAgZGF0YS54ID0geDtcbiAgICAgICAgZGF0YS55ID0geTtcbiAgICAgICAgZGF0YS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBkYXRhLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgZHJhd0NpcmNsZSh4LCB5LCByYWRpdXMpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAnZWxsaXBzZSc7XG4gICAgICAgIGRhdGEueCA9IHg7XG4gICAgICAgIGRhdGEueSA9IHk7XG4gICAgICAgIGRhdGEucmFkaXVzID0gcmFkaXVzO1xuICAgIH1cbiAgICBkcmF3RWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ2VsbGlwc2UnO1xuICAgICAgICBkYXRhLnJhZGl1c1ggPSB3aWR0aCAvIDI7XG4gICAgICAgIGRhdGEucmFkaXVzWSA9IGhlaWdodCAvIDI7XG4gICAgICAgIGRhdGEueCA9IHggLSBkYXRhLnJhZGl1c1g7XG4gICAgICAgIGRhdGEueSA9IHkgLSBkYXRhLnJhZGl1c1k7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5zaGFwZS5kYXRhO1xuICAgIH1cbiAgICBjcmVhdGVEYXRhKCkge1xuICAgICAgICBjb25zdCB7IHNoYXBlLCBmaWxsLCBzdHJva2UgfSA9IHRoaXM7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNoYXBlLmRhdGEpKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHNoYXBlLmRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBzaGFwZS5kYXRhID0gW3NoYXBlLmRhdGFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2hhcGUuZGF0YSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdyYXBoaWNzRGF0YSA9IHsgdHlwZTogJ3BhdGgnLCBmaWxsLCBzdHJva2UgfTtcbiAgICAgICAgc2hhcGUuZGF0YS5wdXNoKGdyYXBoaWNzRGF0YSk7XG4gICAgICAgIHJldHVybiBncmFwaGljc0RhdGE7XG4gICAgfVxuICAgIGJlZ2luUGF0aCgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLmRhdGEgPSBbXTtcbiAgICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcbiAgICB9XG4gICAgZ2V0UGF0aCgpIHtcbiAgICAgICAgY29uc3QgeyBzaGFwZSB9ID0gdGhpcztcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNoYXBlLmRhdGEpIHx8ICFzaGFwZS5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gc2hhcGUuZGF0YVtzaGFwZS5kYXRhLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5kYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YS5kYXRhO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vZGF0YS9kYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9wYXRoJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9zdHJpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL3N0eWxlJztcbmV4cG9ydCAqIGZyb20gJy4vZ3JhcGhpY3MnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGFwZSc7XG5leHBvcnQgKiBmcm9tICcuL3NoYXBlLWNhbnZhcyc7XG4iLCJpbXBvcnQgeyBhcHBseVNoYXBlRXh0ZW5zaW9uLCBTSEFQRSB9IGZyb20gJy4vc2hhcGUnO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNoYXBlKHNoYXBlLCBjb250ZXh0KSB7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlDYW52YXNTaGFwZUV4dGVuc2lvbihzdXBwb3J0KSB7XG4gICAgYXBwbHlTaGFwZUV4dGVuc2lvbihzdXBwb3J0KTtcbiAgICBzdXBwb3J0LnJlbmRlckhhbmRsZXJzLnNldChTSEFQRSwgcmVuZGVyU2hhcGUpO1xufVxuIiwiaW1wb3J0IHsgUGl2b3QsIH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuaW1wb3J0IHsgQm91bmRzLCBSZWN0YW5nbGUgfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgcmVzb2x2ZUltYWdlIH0gZnJvbSAnQGUyZC9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgR3JhcGhpY3NEYXRhIH0gZnJvbSAnLi9kYXRhL2RhdGEnO1xuaW1wb3J0IEdyYXBoaWNzIGZyb20gJy4vZ3JhcGhpY3MnO1xuZXhwb3J0IGNvbnN0IFNIQVBFID0gJ3NoYXBlJztcbmV4cG9ydCB2YXIgU2hhcGU7XG4oZnVuY3Rpb24gKFNoYXBlKSB7XG4gICAgZnVuY3Rpb24gZ2V0R3JhcGhpY3Moc2hhcGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaGljcyhzaGFwZSk7XG4gICAgfVxuICAgIFNoYXBlLmdldEdyYXBoaWNzID0gZ2V0R3JhcGhpY3M7XG4gICAgZnVuY3Rpb24gZ2V0Qm91bmRzKHNoYXBlKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gc2hhcGU7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBib3VuZHMgPSBCb3VuZHMuZW1wdHkoKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YVtpXSwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJvdW5kcy5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgd2lkdGggPSBib3VuZHMubWF4WCAtIGJvdW5kcy5taW5YO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBib3VuZHMubWF4WSAtIGJvdW5kcy5taW5ZO1xuICAgICAgICBjb25zdCB4ID0gYm91bmRzLm1pblggKyBQaXZvdC5nZXRYKHNoYXBlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBib3VuZHMubWluWSArIFBpdm90LmdldFkoc2hhcGUsIGhlaWdodCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4LCB5LCB3aWR0aCwgaGVpZ2h0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBTaGFwZS5nZXRCb3VuZHMgPSBnZXRCb3VuZHM7XG59KShTaGFwZSB8fCAoU2hhcGUgPSB7fSkpO1xuZXhwb3J0IGZ1bmN0aW9uIGhpdFRlc3Qoc2hhcGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGxvY2FsIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGJvdW5kcyA9IFNoYXBlLmdldEJvdW5kcyhzaGFwZSk7XG4gICAgcmV0dXJuICEhYm91bmRzICYmIFJlY3RhbmdsZS5jb250YWlucyhib3VuZHMsIGxvY2FsKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVNoYXBlRXh0ZW5zaW9uKHN1cHBvcnQpIHtcbiAgICBzdXBwb3J0LmhpdFRlc3RIYW5kbGVycy5zZXQoU0hBUEUsIGhpdFRlc3QpO1xuICAgIHN1cHBvcnQucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb2x2ZUltYWdlKTtcbn1cbiIsImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuZXhwb3J0IGNvbnN0IEVNID0gMTAyNDtcbmNvbnN0IGZvbnRzID0gbmV3IE1hcCgpO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlRm9udChmb250LCBzaXplKSB7XG4gICAgcmV0dXJuIGAke3NpemV9cHggJHtmb250fWA7XG59XG5leHBvcnQgZnVuY3Rpb24gbWVhc3VyZVRleHQoZm9udCwgc2l6ZSwgdGV4dCkge1xuICAgIGNvbnRleHQuZm9udCA9IGdldFN0eWxlRm9udChmb250LCBzaXplKTtcbiAgICByZXR1cm4gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFyV2lkdGgoZm9udCwgY2hhcikge1xuICAgIGxldCB3aWR0aCA9IGZvbnQud2lkdGhzLmdldChjaGFyKTtcbiAgICBpZiAoIXdpZHRoKSB7XG4gICAgICAgIHdpZHRoID0gbWVhc3VyZVRleHQoZm9udC5uYW1lLCBFTSwgY2hhcik7XG4gICAgICAgIGZvbnQud2lkdGhzLnNldChjaGFyLCB3aWR0aCk7XG4gICAgfVxuICAgIHJldHVybiB3aWR0aDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXJuaW5nKGZvbnQsIGZpcnN0LCBzZWNvbmQpIHtcbiAgICBjb25zdCBwYWlyID0gZmlyc3QgKyBzZWNvbmQ7XG4gICAgbGV0IGtlcm5pbmcgPSBmb250Lmtlcm5pbmdzLmdldChwYWlyKTtcbiAgICBpZiAoIWtlcm5pbmcpIHtcbiAgICAgICAgY29uc3Qgd2lkdGhTZWNvbmQgPSBnZXRDaGFyV2lkdGgoZm9udCwgc2Vjb25kKTtcbiAgICAgICAgY29uc3Qgd2lkdGhUb3RhbCA9IG1lYXN1cmVUZXh0KGZvbnQubmFtZSwgRU0sIGZpcnN0ICsgc2Vjb25kKTtcbiAgICAgICAga2VybmluZyA9IHdpZHRoVG90YWwgLSB3aWR0aFNlY29uZDtcbiAgICAgICAgZm9udC5rZXJuaW5ncy5zZXQocGFpciwga2VybmluZyk7XG4gICAgfVxuICAgIHJldHVybiBrZXJuaW5nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEFkdmFuY2UoZm9udCwgc2l6ZSwgZmlyc3QsIHNlY29uZCkge1xuICAgIGNvbnN0IHNjYWxlID0gc2l6ZSAvIEVNO1xuICAgIGNvbnN0IHdpZHRoID0gZ2V0Q2hhcldpZHRoKGZvbnQsIGZpcnN0KTtcbiAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICByZXR1cm4gd2lkdGggKiBzY2FsZTtcbiAgICB9XG4gICAgY29uc3Qga2VybmluZyA9IGdldEtlcm5pbmcoZm9udCwgZmlyc3QsIHNlY29uZCk7XG4gICAgcmV0dXJuIGtlcm5pbmcgKiBzY2FsZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb250KG5hbWUpIHtcbiAgICBsZXQgZm9udCA9IGZvbnRzLmdldChuYW1lKTtcbiAgICBpZiAoIWZvbnQpIHtcbiAgICAgICAgZm9udCA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB3aWR0aHM6IG5ldyBNYXAoKSxcbiAgICAgICAgICAgIGtlcm5pbmdzOiBuZXcgTWFwKCksXG4gICAgICAgIH07XG4gICAgICAgIGZvbnRzLnNldChuYW1lLCBmb250KTtcbiAgICB9XG4gICAgcmV0dXJuIGZvbnQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TGluZVdpZHRoKGZvbnQsIGZvcm1hdCwgbGluZSkge1xuICAgIGxldCB3aWR0aCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0ID0gbGluZS5jaGFyQXQoaSk7XG4gICAgICAgIGNvbnN0IHNlY29uZCA9IGxpbmUuY2hhckF0KGkgKyAxKTtcbiAgICAgICAgY29uc3QgYWR2YW5jZSA9IGdldEFkdmFuY2UoZm9udCwgZm9ybWF0LnNpemUsIGZpcnN0LCBzZWNvbmQpO1xuICAgICAgICB3aWR0aCArPSBhZHZhbmNlO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0LmxldHRlclNwYWNpbmcgJiYgbGluZS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHdpZHRoICs9IGZvcm1hdC5sZXR0ZXJTcGFjaW5nICogKGxpbmUubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIHJldHVybiB3aWR0aDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0V2lkdGgoZm9udCwgZm9ybWF0LCBsaW5lcykge1xuICAgIGxldCB3aWR0aCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IGdldExpbmVXaWR0aChmb250LCBmb3JtYXQsIGxpbmUpO1xuICAgICAgICBpZiAod2lkdGggPCBsaW5lV2lkdGgpIHtcbiAgICAgICAgICAgIHdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB3aWR0aDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0SGVpZ2h0KGZvcm1hdCwgbGluZXMpIHtcbiAgICBsZXQgaGVpZ2h0ID0gZm9ybWF0LnNpemUgKiBsaW5lcy5sZW5ndGg7XG4gICAgaWYgKGZvcm1hdC5sZWFkaW5nICYmIGxpbmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaGVpZ2h0ICs9IGZvcm1hdC5sZWFkaW5nICogKGxpbmVzLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgICByZXR1cm4gaGVpZ2h0O1xufVxuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRUZXh0Rm9ybWF0ID0ge1xuICAgIGZvbnQ6ICdhcmlhbCcsXG4gICAgc2l6ZTogMTUsXG4gICAgY29sb3I6IDAsXG4gICAgYWxwaGE6IDEsXG4gICAgYm9sZDogZmFsc2UsXG4gICAgaXRhbGljOiBmYWxzZSxcbiAgICB1bmRlcmxpbmU6IGZhbHNlLFxuICAgIGxldHRlclNwYWNpbmc6IDAsXG4gICAgbGVhZGluZzogMCxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxufTtcbmNvbnN0IGZvcm1hdCA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbGlkVGV4dEZvcm1hdCh0ZXh0Rm9ybWF0KSB7XG4gICAgZm9ybWF0LmZvbnQgPSB0ZXh0Rm9ybWF0Py5mb250ID8/IGRlZmF1bHRUZXh0Rm9ybWF0LmZvbnQ7XG4gICAgZm9ybWF0LnNpemUgPSB0ZXh0Rm9ybWF0Py5zaXplID8/IGRlZmF1bHRUZXh0Rm9ybWF0LnNpemU7XG4gICAgZm9ybWF0LmNvbG9yID0gdGV4dEZvcm1hdD8uY29sb3IgPz8gZGVmYXVsdFRleHRGb3JtYXQuY29sb3I7XG4gICAgZm9ybWF0LmFscGhhID0gdGV4dEZvcm1hdD8uYWxwaGEgPz8gZGVmYXVsdFRleHRGb3JtYXQuYWxwaGE7XG4gICAgZm9ybWF0LmJvbGQgPSB0ZXh0Rm9ybWF0Py5ib2xkID8/IGRlZmF1bHRUZXh0Rm9ybWF0LmJvbGQ7XG4gICAgZm9ybWF0Lml0YWxpYyA9IHRleHRGb3JtYXQ/Lml0YWxpYyA/PyBkZWZhdWx0VGV4dEZvcm1hdC5pdGFsaWM7XG4gICAgZm9ybWF0LnVuZGVybGluZSA9IHRleHRGb3JtYXQ/LnVuZGVybGluZSA/PyBkZWZhdWx0VGV4dEZvcm1hdC51bmRlcmxpbmU7XG4gICAgZm9ybWF0LmxldHRlclNwYWNpbmcgPSB0ZXh0Rm9ybWF0Py5sZXR0ZXJTcGFjaW5nID8/IGRlZmF1bHRUZXh0Rm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgZm9ybWF0LmxlYWRpbmcgPSB0ZXh0Rm9ybWF0Py5sZWFkaW5nID8/IGRlZmF1bHRUZXh0Rm9ybWF0LmxlYWRpbmc7XG4gICAgZm9ybWF0LmFsaWduID0gdGV4dEZvcm1hdD8uYWxpZ24gPz8gZGVmYXVsdFRleHRGb3JtYXQuYWxpZ247XG4gICAgZm9ybWF0LnZlcnRpY2FsQWxpZ24gPSB0ZXh0Rm9ybWF0Py52ZXJ0aWNhbEFsaWduID8/IGRlZmF1bHRUZXh0Rm9ybWF0LnZlcnRpY2FsQWxpZ247XG4gICAgcmV0dXJuIGZvcm1hdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGluZ1ZhbHVlKGFsaWduKSB7XG4gICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgICBjYXNlICdsZWZ0JzogcmV0dXJuIDA7XG4gICAgICAgIGNhc2UgJ2NlbnRlcic6IHJldHVybiAwLjU7XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzogcmV0dXJuIDE7XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAwO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRWZXJ0aWNhbEFsaW5nVmFsdWUoYWxpZ24pIHtcbiAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICAgIGNhc2UgJ3RvcCc6IHJldHVybiAwO1xuICAgICAgICBjYXNlICdtaWRkbGUnOiByZXR1cm4gMC41O1xuICAgICAgICBjYXNlICdib3R0b20nOiByZXR1cm4gMTtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIDA7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi90ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vZm9ybWF0JztcbmV4cG9ydCAqIGZyb20gJy4vZm9udCc7XG5leHBvcnQgKiBmcm9tICcuL3RleHQtY2FudmFzJztcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuaW1wb3J0IHsgY3JlYXRlQ29sb3JQYXR0ZXJuIH0gZnJvbSAnQGUyZC9jYW52YXMtc3VwcG9ydCc7XG5pbXBvcnQgeyBnZXRBZHZhbmNlLCBnZXRGb250LCBnZXRMaW5lV2lkdGgsIGdldFN0eWxlRm9udCwgZ2V0VGV4dEhlaWdodCwgZ2V0VGV4dFdpZHRoLCB9IGZyb20gJy4vZm9udCc7XG5pbXBvcnQgeyBhcHBseVRleHRFeHRlbnNpb24sIFRFWFQgfSBmcm9tICcuL3RleHQnO1xuaW1wb3J0IHsgZ2V0QWxpbmdWYWx1ZSwgZ2V0VmVydGljYWxBbGluZ1ZhbHVlLCBnZXRWYWxpZFRleHRGb3JtYXQgfSBmcm9tICcuL2Zvcm1hdCc7XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ2FudmFzVGV4dChjb21wb25lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRleHQgfSA9IGNvbXBvbmVudDtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IG1hdHJpeCwgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRleHRGb3JtYXQsIGJvcmRlciwgYmFja2dyb3VuZCwgfSA9IGNvbXBvbmVudDtcbiAgICBjb25zdCBmb3JtYXQgPSBnZXRWYWxpZFRleHRGb3JtYXQodGV4dEZvcm1hdCk7XG4gICAgY29uc3QgZm9ybWF0U2l6ZSA9IGZvcm1hdC5zaXplO1xuICAgIGNvbnN0IGZvcm1hdExldHRlclNwYWNpbmcgPSBmb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICBjb25zdCBmb3JtYXRMZWFkaW5nID0gZm9ybWF0LmxlYWRpbmc7XG4gICAgY29uc3QgZm9udCA9IGdldEZvbnQoZm9ybWF0LmZvbnQpO1xuICAgIGNvbnN0IHsgc3VwcG9ydCB9ID0gY29udGV4dDtcbiAgICBjb25zdCB7IGNvbnRleHQyZCB9ID0gc3VwcG9ydDtcbiAgICBjb25zdCB0ZXh0V2lkdGggPSBnZXRUZXh0V2lkdGgoZm9udCwgZm9ybWF0LCBsaW5lcyk7XG4gICAgY29uc3QgdGV4dEhlaWdodCA9IGdldFRleHRIZWlnaHQoZm9ybWF0LCBsaW5lcyk7XG4gICAgY29uc3QgcmVhbFdpZHRoID0gd2lkdGggPz8gdGV4dFdpZHRoO1xuICAgIGNvbnN0IHJlYWxIZWlnaHQgPSBoZWlnaHQgPz8gdGV4dEhlaWdodDtcbiAgICBjb25zdCBvZmZzZXRYID0gUGl2b3QuZ2V0WChjb21wb25lbnQsIHJlYWxXaWR0aCk7XG4gICAgY29uc3Qgb2Zmc2V0WSA9IFBpdm90LmdldFkoY29tcG9uZW50LCByZWFsSGVpZ2h0KTtcbiAgICBsZXQgeSA9IDA7XG4gICAgaWYgKGhlaWdodCkge1xuICAgICAgICBjb25zdCBhbGlnblZlcnRpY2FsVmFsdWUgPSBnZXRWZXJ0aWNhbEFsaW5nVmFsdWUoZm9ybWF0LnZlcnRpY2FsQWxpZ24pO1xuICAgICAgICB5ID0gKGhlaWdodCAtIHRleHRIZWlnaHQpICogYWxpZ25WZXJ0aWNhbFZhbHVlO1xuICAgICAgICBpZiAoeSA8IDApIHtcbiAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgIGlmIChiYWNrZ3JvdW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gJyc7XG4gICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBjcmVhdGVDb2xvclBhdHRlcm4oYmFja2dyb3VuZCwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBjb250ZXh0MmQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQyZC5yZWN0KG9mZnNldFgsIG9mZnNldFksIHJlYWxXaWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICAgIGNvbnRleHQyZC5maWxsKCk7XG4gICAgfVxuICAgIGlmIChib3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSBjcmVhdGVDb2xvclBhdHRlcm4oYm9yZGVyLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcbiAgICAgICAgY29udGV4dDJkLmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0MmQucmVjdChvZmZzZXRYLCBvZmZzZXRZLCByZWFsV2lkdGgsIHJlYWxIZWlnaHQpO1xuICAgICAgICBjb250ZXh0MmQuc3Ryb2tlKCk7XG4gICAgfVxuICAgIGNvbnRleHQyZC5mb250ID0gZ2V0U3R5bGVGb250KGZvcm1hdC5mb250LCBmb3JtYXRTaXplKTtcbiAgICBjb250ZXh0MmQudGV4dEJhc2VsaW5lID0gJ2FscGhhYmV0aWMnO1xuICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICcnO1xuICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBjcmVhdGVDb2xvclBhdHRlcm4oZm9ybWF0LmNvbG9yLCBmb3JtYXQuYWxwaGEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICB5ICs9IG9mZnNldFk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IGdldExpbmVXaWR0aChmb250LCBmb3JtYXQsIGxpbmUpO1xuICAgICAgICBjb25zdCBhbGlnblZhbHVlID0gZ2V0QWxpbmdWYWx1ZShmb3JtYXQuYWxpZ24pO1xuICAgICAgICBsZXQgeCA9IChyZWFsV2lkdGggLSBsaW5lV2lkdGgpICogYWxpZ25WYWx1ZTtcbiAgICAgICAgaWYgKHggPCAwKSB7XG4gICAgICAgICAgICB4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB4ICs9IG9mZnNldFg7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGluZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgZmlyc3QgPSBsaW5lLmNoYXJBdChqKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZCA9IGxpbmUuY2hhckF0KGogKyAxKTtcbiAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBnZXRBZHZhbmNlKGZvbnQsIGZvcm1hdFNpemUsIGZpcnN0LCBzZWNvbmQpO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGxUZXh0KGZpcnN0LCB4LCB5ICsgZm9ybWF0U2l6ZSk7XG4gICAgICAgICAgICB4ICs9IGFkdmFuY2UgKyBmb3JtYXRMZXR0ZXJTcGFjaW5nO1xuICAgICAgICB9XG4gICAgICAgIHkgKz0gZm9ybWF0U2l6ZSArIGZvcm1hdExlYWRpbmc7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q2FudmFzVGV4dEV4dGVuc2lvbihzdXBwb3J0KSB7XG4gICAgYXBwbHlUZXh0RXh0ZW5zaW9uKHN1cHBvcnQpO1xuICAgIHN1cHBvcnQucmVuZGVySGFuZGxlcnMuc2V0KFRFWFQsIHJlbmRlckNhbnZhc1RleHQpO1xufVxuIiwiaW1wb3J0IHsgUGl2b3QsIH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IGdldFZhbGlkVGV4dEZvcm1hdCB9IGZyb20gJy4vZm9ybWF0JztcbmltcG9ydCB7IGdldEZvbnQsIGdldFRleHRXaWR0aCwgZ2V0VGV4dEhlaWdodCB9IGZyb20gJy4vZm9udCc7XG5leHBvcnQgY29uc3QgVEVYVCA9ICd0ZXh0JztcbmV4cG9ydCB2YXIgVGV4dDtcbihmdW5jdGlvbiAoVGV4dCkge1xuICAgIGZ1bmN0aW9uIGdldEJvdW5kcyhjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghdGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBsZXQgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IHsgdGV4dEZvcm1hdCB9ID0gY29tcG9uZW50O1xuICAgICAgICBjb25zdCBmb3JtYXQgPSBnZXRWYWxpZFRleHRGb3JtYXQodGV4dEZvcm1hdCk7XG4gICAgICAgIGlmICghd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvbnQgPSBnZXRGb250KGZvcm1hdC5mb250KTtcbiAgICAgICAgICAgIHdpZHRoID0gZ2V0VGV4dFdpZHRoKGZvbnQsIGZvcm1hdCwgbGluZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaGVpZ2h0KSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBnZXRUZXh0SGVpZ2h0KGZvcm1hdCwgbGluZXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGNvbXBvbmVudCwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShjb21wb25lbnQsIGhlaWdodCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4LCB5LCB3aWR0aCwgaGVpZ2h0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBUZXh0LmdldEJvdW5kcyA9IGdldEJvdW5kcztcbn0pKFRleHQgfHwgKFRleHQgPSB7fSkpO1xuZXhwb3J0IGZ1bmN0aW9uIGhpdFRlc3QodGV4dCwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbG9jYWwgfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYm91bmRzID0gVGV4dC5nZXRCb3VuZHModGV4dCk7XG4gICAgcmV0dXJuICEhYm91bmRzICYmIFJlY3RhbmdsZS5jb250YWlucyhib3VuZHMsIGxvY2FsKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVRleHRFeHRlbnNpb24oc3VwcG9ydCkge1xuICAgIHN1cHBvcnQuaGl0VGVzdEhhbmRsZXJzLnNldChURVhULCBoaXRUZXN0KTtcbn1cbiIsImV4cG9ydCBjb25zdCBMSU5FQVIgPSAnbGluZWFyJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUMgPSAncXVhZHJhdGljJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUNfSU4gPSAncXVhZHJhdGljaW4nO1xuZXhwb3J0IGNvbnN0IFFVQURSQVRJQ19PVVQgPSAncXVhZHJhdGljb3V0JztcbmV4cG9ydCBjb25zdCBDVUJJQyA9ICdjdWJpYyc7XG5leHBvcnQgY29uc3QgQ1VCSUNfSU4gPSAnY3ViaWNpbic7XG5leHBvcnQgY29uc3QgQ1VCSUNfT1VUID0gJ2N1Ymljb3V0JztcbmV4cG9ydCBjb25zdCBRVUFSVElDID0gJ3F1YXJ0aWMnO1xuZXhwb3J0IGNvbnN0IFFVQVJUSUNfSU4gPSAncXVhcnRpY2luJztcbmV4cG9ydCBjb25zdCBRVUFSVElDX09VVCA9ICdxdWFydGljb3V0JztcbmV4cG9ydCBjb25zdCBRVUlOVElDID0gJ3F1aW50aWMnO1xuZXhwb3J0IGNvbnN0IFFVSU5USUNfSU4gPSAncXVpbnRpY2luJztcbmV4cG9ydCBjb25zdCBRVUlOVElDX09VVCA9ICdxdWludGljb3V0JztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMID0gJ3F1aW50aWMnO1xuZXhwb3J0IGNvbnN0IFNJTlVTT0lEQUxfSU4gPSAncXVpbnRpY2luJztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMX09VVCA9ICdxdWludGljb3V0JztcbmV4cG9ydCBjb25zdCBFWFBPTkVOVElBTCA9ICdleHBvbmVudGlhbCc7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUxfSU4gPSAnZXhwb25lbnRpYWxpbic7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUxfT1VUID0gJ2V4cG9uZW50aWFsb3V0JztcbmV4cG9ydCBjb25zdCBDSVJDVUxBUiA9ICdjaXJjdWxhcic7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVJfSU4gPSAnY2lyY3VsYXJpbic7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVJfT1VUID0gJ2NpcmN1bGFyb3V0JztcbmV4cG9ydCBjb25zdCBFTEFTVElDID0gJ2VsYXN0aWMnO1xuZXhwb3J0IGNvbnN0IEVMQVNUSUNfSU4gPSAnZWxhc3RpY2luJztcbmV4cG9ydCBjb25zdCBFTEFTVElDX09VVCA9ICdlbGFzdGljb3V0JztcbmV4cG9ydCBjb25zdCBCQUNLID0gJ2JhY2snO1xuZXhwb3J0IGNvbnN0IEJBQ0tfSU4gPSAnYmFja2luJztcbmV4cG9ydCBjb25zdCBCQUNLX09VVCA9ICdiYWNrb3V0JztcbmV4cG9ydCBjb25zdCBCT1VOQ0UgPSAnYm91bmNlJztcbmV4cG9ydCBjb25zdCBCT1VOQ0VfSU4gPSAnYm91bmNlaW4nO1xuZXhwb3J0IGNvbnN0IEJPVU5DRV9PVVQgPSAnYm91bmNlb3V0JztcbmV4cG9ydCBjb25zdCBlYXNpbmcgPSB7XG4gICAgW0xJTkVBUl06ICh2YWx1ZSkgPT4gdmFsdWUsXG4gICAgW1FVQURSQVRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoLS12YWx1ZSAqICh2YWx1ZSAtIDIpIC0gMSk7XG4gICAgfSxcbiAgICBbUVVBRFJBVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVQURSQVRJQ19PVVRdOiAodmFsdWUpID0+ICh2YWx1ZSAqICgyIC0gdmFsdWUpKSxcbiAgICBbQ1VCSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqIHZhbHVlICsgMik7XG4gICAgfSxcbiAgICBbQ1VCSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtDVUJJQ19PVVRdOiAodmFsdWUpID0+ICgtLXZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDEpLFxuICAgIFtRVUFSVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlIC0gMik7XG4gICAgfSxcbiAgICBbUVVBUlRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVBUlRJQ19PVVRdOiAodmFsdWUpID0+ICgxIC0gLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVSU5USUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAyKTtcbiAgICB9LFxuICAgIFtRVUlOVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVSU5USUNfT1VUXTogKHZhbHVlKSA9PiAoLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMSksXG4gICAgW1NJTlVTT0lEQUxdOiAodmFsdWUpID0+ICgwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiB2YWx1ZSkpKSxcbiAgICBbU0lOVVNPSURBTF9JTl06ICh2YWx1ZSkgPT4gKDEgLSBNYXRoLmNvcygodmFsdWUgKiBNYXRoLlBJKSAvIDIpKSxcbiAgICBbU0lOVVNPSURBTF9PVVRdOiAodmFsdWUpID0+IChNYXRoLnNpbigodmFsdWUgKiBNYXRoLlBJKSAvIDIpKSxcbiAgICBbRVhQT05FTlRJQUxdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogTWF0aC5wb3coMTAyNCwgdmFsdWUgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKC1NYXRoLnBvdygyLCAtMTAgKiAodmFsdWUgLSAxKSkgKyAyKTtcbiAgICB9LFxuICAgIFtFWFBPTkVOVElBTF9JTl06ICh2YWx1ZSkgPT4gKHZhbHVlID09PSAwID8gMCA6IE1hdGgucG93KDEwMjQsIHZhbHVlIC0gMSkpLFxuICAgIFtFWFBPTkVOVElBTF9PVVRdOiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gMSA/IDEgOiAxIC0gTWF0aC5wb3coMiwgLTEwICogdmFsdWUpKSxcbiAgICBbQ0lSQ1VMQVJdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHZhbHVlIC09IDIpICogdmFsdWUpICsgMSk7XG4gICAgfSxcbiAgICBbQ0lSQ1VMQVJfSU5dOiAodmFsdWUpID0+ICgxIC0gTWF0aC5zcXJ0KDEgLSB2YWx1ZSAqIHZhbHVlKSksXG4gICAgW0NJUkNVTEFSX09VVF06ICh2YWx1ZSkgPT4gTWF0aC5zcXJ0KDEgLSAtLXZhbHVlICogdmFsdWUpLFxuICAgIFtFTEFTVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSAqPSAyO1xuICAgICAgICBpZiAodmFsdWUgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gLTAuNSAqIE1hdGgucG93KDIsIDEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogTWF0aC5wb3coMiwgLTEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG4gICAgfSxcbiAgICBbRUxBU1RJQ19JTl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC1NYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG4gICAgfSxcbiAgICBbRUxBU1RJQ19PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLnBvdygyLCAtMTAgKiB2YWx1ZSkgKiBNYXRoLnNpbigodmFsdWUgLSAwLjEpICogNSAqIE1hdGguUEkpICsgMTtcbiAgICB9LFxuICAgIFtCQUNLXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4ICogMS41MjU7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogKHZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlIC0gcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlICsgcykgKyAyKTtcbiAgICB9LFxuICAgIFtCQUNLX0lOXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4O1xuICAgICAgICByZXR1cm4gdmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgLSBzKTtcbiAgICB9LFxuICAgIFtCQUNLX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1ODtcbiAgICAgICAgcmV0dXJuIC0tdmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgKyBzKSArIDE7XG4gICAgfSxcbiAgICBbQk9VTkNFXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDAuNSkge1xuICAgICAgICAgICAgcmV0dXJuIGVhc2luZ1tCT1VOQ0VfSU5dKHZhbHVlICogMikgKiAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVhc2luZ1tCT1VOQ0VfT1VUXSh2YWx1ZSAqIDIgLSAxKSAqIDAuNSArIDAuNTtcbiAgICB9LFxuICAgIFtCT1VOQ0VfSU5dOiAodmFsdWUpID0+ICgxIC0gZWFzaW5nW0JPVU5DRV9PVVRdKDEgLSB2YWx1ZSkpLFxuICAgIFtCT1VOQ0VfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDEgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPCAyIC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAxLjUgLyAyLjc1KSAqIHZhbHVlICsgMC43NTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPCAyLjUgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDIuMjUgLyAyLjc1KSAqIHZhbHVlICsgMC45Mzc1O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMi42MjUgLyAyLjc1KSAqIHZhbHVlICsgMC45ODQzNzU7XG4gICAgfSxcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3R3ZWVuJztcbmV4cG9ydCAqIGZyb20gJy4vZWFzaW5nJztcbiIsImltcG9ydCB7IGVhc2luZywgTElORUFSIH0gZnJvbSAnLi9lYXNpbmcnO1xuZXhwb3J0IGNvbnN0IFRXRUVOID0gJ3R3ZWVuJztcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUd2VlbShjb21wb25lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHR3ZWVuIH0gPSBjb21wb25lbnQ7XG4gICAgY29uc3QgeyBwaGFzZXMgfSA9IHR3ZWVuO1xuICAgIGlmICghcGhhc2VzPy5sZW5ndGgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdBbmltYXRpb24gcGFydHMgbm90IGZvdW5kJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR3ZWVuLnRpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICB9XG4gICAgdHdlZW4udGltZSArPSBjb250ZXh0LnRpbWU7XG4gICAgY29uc3QgeyB0aW1lIH0gPSB0d2VlbjtcbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBwaGFzZXMuZm9yRWFjaCgocGhhc2UpID0+IHtcbiAgICAgICAgaWYgKCFwaGFzZS50aW1lKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuaW1hdGlvbiB0aW1lIG5vdCBzZXQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGhhc2Uub2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IHBoYXNlLm9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlYXNpbmdOYW1lID0gcGhhc2U/LmVhc2luZz8udG9Mb3dlckNhc2UoKSA/PyBMSU5FQVI7XG4gICAgICAgIGNvbnN0IGVhc2luZ01ldGhvZCA9IGVhc2luZ1tlYXNpbmdOYW1lXTtcbiAgICAgICAgaWYgKCFlYXNpbmdNZXRob2QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBlYXNpbmcgdHlwZTogJHtlYXNpbmd9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSAodGltZSAtIG9mZnNldCkgLyBwaGFzZS50aW1lO1xuICAgICAgICBvZmZzZXQgKz0gcGhhc2UudGltZTtcbiAgICAgICAgaWYgKHZhbHVlIDwgMCB8fCB2YWx1ZSA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlYXNpbmdWYWx1ZSA9IGVhc2luZ01ldGhvZCh2YWx1ZSk7XG4gICAgICAgIGlmICghcGhhc2UudG8pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQW5pbWF0aW9uIFwidG9cIiBzdGF0ZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBoYXNlLmZyb20pIHtcbiAgICAgICAgICAgIHBoYXNlLmZyb20gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHRvLCBmcm9tIH0gPSBwaGFzZTtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBjb21wb25lbnQ7XG4gICAgICAgIE9iamVjdC5rZXlzKHRvKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChmcm9tW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGZyb21ba2V5XSA9IHN0YXRlW2tleV0gPz8gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZyb21WYWx1ZSA9IGZyb21ba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHRvVmFsdWUgPSB0b1trZXldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmcm9tVmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiB0b1ZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlVmFsdWUgPSBmcm9tVmFsdWUgKyBlYXNpbmdWYWx1ZSAqICh0b1ZhbHVlIC0gZnJvbVZhbHVlKTtcbiAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gc3RhdGVWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHR3ZWVuLmxvb3AgJiYgdHdlZW4udGltZSA+IG9mZnNldCkge1xuICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlUd2VlbkV4dGVuc2lvbihzdXBwb3J0KSB7XG4gICAgc3VwcG9ydC5wcm9wZXJ0eUhhbmRsZXJzLnNldChUV0VFTiwgdXBkYXRlVHdlZW0pO1xufVxuIiwiaW1wb3J0IHsgQUJJTElUWV9XT0xGIH0gZnJvbSAnLi9hc3NldHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWN1cnNpdmUoKSB7XG5cdGNvbnN0IGNvbnRhaW5lciA9IHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRjaGlsZDoge1xuXHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHR4OiAzMCxcblx0XHRcdHk6IDMwLFxuXHRcdFx0c2NhbGVYOiAwLjksXG5cdFx0XHRzY2FsZVk6IDAuOSxcblx0XHRcdHJvdGF0aW9uOiAwLjIsXG5cdFx0XHRhbHBoYTogMC45LFxuXHRcdFx0Y2hpbGRyZW46IFt7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQUJJTElUWV9XT0xGLFxuXHRcdFx0XHRzY2FsZTogMC4zLFxuXHRcdFx0fV0sXG5cdFx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdFx0dGhpcy5yb3RhdGlvbiArPSB0aW1lICogMC4wNTtcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblxuXHRjb250YWluZXIuY2hpbGQuY2hpbGRyZW4ucHVzaChjb250YWluZXIgYXMgbmV2ZXIpO1xuXG5cdHJldHVybiBjb250YWluZXI7XG59XG4iLCJjb25zdCBJTUFHRV9BU1NFVFMgPSAnYXNzZXRzLyc7XG5cbmV4cG9ydCBjb25zdCBBTklNQUxJU1QgPSAnaWQ6YW5pbWFsaXN0JztcbmV4cG9ydCBjb25zdCBBUkNIRVIgPSAnaWQ6YXJjaGVyJztcblxuZXhwb3J0IGNvbnN0IEFOSU1BTElTVF9JTUFHRSA9IGAke0lNQUdFX0FTU0VUU31BbmltYWxpc3RGb3gxX2ltYWdlLnBuZ2A7XG5leHBvcnQgY29uc3QgQVJDSEVSX0lNQUdFID0gYCR7SU1BR0VfQVNTRVRTfUFyY2hlcjJfaHVudGVyX2ltYWdlLnBuZ2A7XG5cbmV4cG9ydCBjb25zdCBBQklMSVRZX0ZPWCA9IGAke0lNQUdFX0FTU0VUU31BbmltYWxpc3RBYmlsaXR5X0ZveC5wbmdgO1xuZXhwb3J0IGNvbnN0IEFCSUxJVFlfV09MRiA9IGAke0lNQUdFX0FTU0VUU31BbmltYWxpc3RBYmlsaXR5X1dvbGYucG5nYDtcblxuZXhwb3J0IGNvbnN0IEJBQ0tHUk9VTkQgPSBgJHtJTUFHRV9BU1NFVFN9anVuZ2xlX2JhY2tncm91bmQuanBnYDtcblxuZXhwb3J0IGNvbnN0IFRFU1RfQ0FOVkFTID0gJ3Rlc3QuY2FudmFzJztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IENhbnZhc1N1cHBvcnQgfSBmcm9tICdAZTJkL2NhbnZhcy1zdXBwb3J0JztcbmltcG9ydCB7IFBpdm90LCBSZW5kZXJDb250ZXh0LCBTdXBwb3J0IH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuaW1wb3J0IHtcblx0YXBwbHlJbWFnZUV4dGVuc2lvbiwgSU1BR0UsIEltYWdlLFxufSBmcm9tICdAZTJkL2ltYWdlJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAZTJkL3Jlc291cmNlcyc7XG5cbmZ1bmN0aW9uIHJlbmRlckltYWdlKGltYWdlOiBJbWFnZSwgY29udGV4dDogUmVuZGVyQ29udGV4dCk6IHZvaWQge1xuXHRpZiAoIWltYWdlLnNyYykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHsgbWF0cml4LCBjb2xvclRyYW5zZm9ybSB9ID0gY29udGV4dDtcblxuXHRpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7IHN1cHBvcnQgfSA9IGNvbnRleHQ7XG5cblx0Y29uc3QgcmVzb3VyY2UgPSBzdXBwb3J0LnJlc291cmNlcy5nZXQoaW1hZ2Uuc3JjKSBhcyBJbWFnZVJlc291cmNlIHwgbnVsbDtcblxuXHRpZiAoIXJlc291cmNlPy5sb2FkZWQgfHwgIXJlc291cmNlPy5pbWFnZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHsgY29udGV4dDJkIH0gPSBzdXBwb3J0IGFzIENhbnZhc1N1cHBvcnQ7XG5cblx0Y29udGV4dDJkLnNldFRyYW5zZm9ybShcblx0XHRtYXRyaXguYSxcblx0XHRtYXRyaXguYixcblx0XHRtYXRyaXguYyxcblx0XHRtYXRyaXguZCxcblx0XHRtYXRyaXgudHgsXG5cdFx0bWF0cml4LnR5LFxuXHQpO1xuXG5cdGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG5cdGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG5cdGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuXG5cdGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG5cdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcblx0Y29udGV4dDJkLnN0cm9rZVN0eWxlID0gJ2dyYXknO1xuXHRjb250ZXh0MmQuc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q3VzdG9tSW1hZ2VFeHRlbnNpb24oc3VwcG9ydDogU3VwcG9ydCkge1xuXHRhcHBseUltYWdlRXh0ZW5zaW9uKHN1cHBvcnQpO1xuXHRzdXBwb3J0LnJlbmRlckhhbmRsZXJzLnNldChJTUFHRSwgcmVuZGVySW1hZ2UpO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IHsgRGVidWcgfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlLCByZXNvbHZlSW1hZ2UgfSBmcm9tICdAZTJkL3Jlc291cmNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVJlc291cmNlTWFuYWdlciB7XG5cdHJlYWRvbmx5IGFsaWFzZXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXHRyZWFkb25seSByZXNvdXJjZXMgPSBuZXcgTWFwPHN0cmluZywgSW1hZ2VSZXNvdXJjZT4oKTtcblxuXHRyZXNvbHZlID0gKGFzc2V0OiBzdHJpbmcpOiBJbWFnZVJlc291cmNlIHwgbnVsbCA9PiB7XG5cdFx0aWYgKGFzc2V0LmluZGV4T2YoJ2lkOicpID09PSAwKSB7XG5cdFx0XHRjb25zdCBpZCA9IGFzc2V0LnNsaWNlKDMpO1xuXHRcdFx0bGV0IHJlc291cmNlID0gdGhpcy5yZXNvdXJjZXMuZ2V0KGlkKSBhcyBJbWFnZVJlc291cmNlO1xuXHRcdFx0aWYgKCFyZXNvdXJjZSkge1xuXHRcdFx0XHRjb25zdCB1cmwgPSB0aGlzLmFsaWFzZXMuZ2V0KGlkKTtcblx0XHRcdFx0aWYgKHVybCkge1xuXHRcdFx0XHRcdHJlc291cmNlID0gcmVzb2x2ZUltYWdlKHVybCkgYXMgSW1hZ2VSZXNvdXJjZTtcblx0XHRcdFx0XHR0aGlzLnJlc291cmNlcy5zZXQoaWQsIHJlc291cmNlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHREZWJ1Zy53YXJuaW5nKGBSZXNvdXJjZSB3aXRoIGlkOiAke2Fzc2V0fSBub3QgZm91bmRgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc291cmNlO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ2FudmFzU3VwcG9ydCB9IGZyb20gJ0BlMmQvY2FudmFzLXN1cHBvcnQnO1xuaW1wb3J0IHsgYXBwbHlDYW52YXNUZXh0RXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC90ZXh0JztcbmltcG9ydCB7IGFwcGx5Q3VzdG9tSW1hZ2VFeHRlbnNpb24gfSBmcm9tICcuL2ltYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tU3VwcG9ydCBleHRlbmRzIENhbnZhc1N1cHBvcnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdGFwcGx5Q2FudmFzVGV4dEV4dGVuc2lvbih0aGlzKTtcblx0XHRhcHBseUN1c3RvbUltYWdlRXh0ZW5zaW9uKHRoaXMpO1xuXHR9XG5cblx0Y2xlYXIoKSB7XG5cdFx0Y29uc3QgeyBjb250ZXh0MmQgfSA9IHRoaXM7XG5cdFx0Y29udGV4dDJkLmZpbGxTdHlsZSA9ICdibGFjayc7XG5cdFx0Y29udGV4dDJkLnNldFRyYW5zZm9ybSgpO1xuXHRcdGNvbnRleHQyZC5maWxsUmVjdCgwLCAwLCBjb250ZXh0MmQuY2FudmFzLndpZHRoLCBjb250ZXh0MmQuY2FudmFzLmhlaWdodCk7XG5cdFx0Y29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuXHR9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQge1xuXHRBQklMSVRZX0ZPWCwgQUJJTElUWV9XT0xGLCBBTklNQUxJU1QsIEFSQ0hFUiwgQkFDS0dST1VORCxcbn0gZnJvbSAnLi9hc3NldHMnO1xuaW1wb3J0IGFydGlmYWN0IGZyb20gJy4vYXJ0aWZhY3QnO1xuaW1wb3J0IHsgdW5pdCwgVW5pdFByb3BlcnRpZXMgfSBmcm9tICcuL3VuaXQnO1xuXG5pbnRlcmZhY2UgTWFpbiB7XG5cdHN0YXJ0KCk6IHZvaWQ7XG5cdFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbigpOiBNYWluIHtcblx0ZnVuY3Rpb24gb25Vbml0Q2xpY2soZGF0YTogVW5pdFByb3BlcnRpZXMpIHtcblx0XHRkYXRhLmhlYWx0aCA9IE1hdGgucmFuZG9tKCk7XG5cdFx0Y29uc29sZS5sb2coJ29uVW5pdENsaWNrJywgZGF0YS5uYW1lKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdGJhY2tncm91bmQ6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBCQUNLR1JPVU5ELFxuXHRcdFx0XHRzY2FsZVg6IDEsXG5cdFx0XHRcdHNjYWxlWTogMSxcblx0XHRcdH0sXG5cdFx0XHRmaWd1cmU6IHtcblx0XHRcdFx0dHlwZTogJ3NoYXBlJyxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdHR5cGU6ICdyZWN0Jyxcblx0XHRcdFx0XHR4OiAwLFxuXHRcdFx0XHRcdHk6IDAsXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCxcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMCxcblx0XHRcdFx0XHRmaWxsOiAweGZmMDBmZixcblx0XHRcdFx0XHRzdHJva2U6IHtcblx0XHRcdFx0XHRcdHRoaWNrbmVzczogMixcblx0XHRcdFx0XHRcdGZpbGw6IDB4MDBmZjAwLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0c2hhcGVzOiB7XG5cdFx0XHRcdHR5cGU6ICdzaGFwZScsXG5cdFx0XHRcdGRhdGE6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAnY2lyY2xlJyxcblx0XHRcdFx0XHRcdHg6IDEwMCxcblx0XHRcdFx0XHRcdHk6IDEwMCxcblx0XHRcdFx0XHRcdHJhZGl1czogNTAsXG5cdFx0XHRcdFx0XHRmaWxsOiB7IHR5cGU6ICdzb2xpZCcsIGNvbG9yOiAweGZmZmYwMCwgYWxwaGE6IDAuNSB9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ3BhdGgnLFxuXHRcdFx0XHRcdFx0ZGF0YTogJ00gMTAgMTAgSCA5MCBWIDkwIEggMTAgWicsXG5cdFx0XHRcdFx0XHRmaWxsOiAweGZmMDBmZixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdwYXRoJyxcblx0XHRcdFx0XHRcdGRhdGE6IFtcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbW92ZVRvJywgeDogMCwgeTogMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAxMDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMTAwLCB5OiAxMDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMCwgeTogMTAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRmaWxsOiAweGZmMDBmZixcblx0XHRcdFx0XHRcdHN0cm9rZTogMHgwMDAwMDAsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHR1bml0czoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHR1bml0KHtcblx0XHRcdFx0XHRcdG5hbWU6ICdBcmNoZXInLCBoZWFsdGg6IDEsIGltYWdlOiBBUkNIRVIsIG9uQ2xpY2s6IG9uVW5pdENsaWNrLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdHVuaXQoe1xuXHRcdFx0XHRcdFx0bmFtZTogJ0FuaW1hbGlzdCcsIGhlYWx0aDogMSwgaW1hZ2U6IEFOSU1BTElTVCwgb25DbGljazogb25Vbml0Q2xpY2ssXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0YXJ0aWZhY3Q6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdHg6IDMwMCxcblx0XHRcdFx0eTogMzUwLFxuXHRcdFx0XHRjaGlsZHJlbjogW2FydGlmYWN0KCldLFxuXHRcdFx0fSxcblx0XHRcdG1hcDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHR5OiA0NTAsXG5cdFx0XHRcdHNjYWxlWDogMC4yLFxuXHRcdFx0XHRzY2FsZVk6IDAuMixcblx0XHRcdFx0YWxwaGE6IDAuNSxcblx0XHRcdFx0c3JjOiAndGVzdC5jYW52YXMnLFxuXHRcdFx0XHRvblBvaW50ZXJPdmVyKCkge1xuXHRcdFx0XHRcdHRoaXMuYWxwaGEgPSAxO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblBvaW50ZXJPdXQoKSB7XG5cdFx0XHRcdFx0dGhpcy5hbHBoYSA9IDAuNTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRhYmlsaXR5Rm94OiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQUJJTElUWV9GT1gsXG5cdFx0XHRcdHg6IDQ1MCxcblx0XHRcdFx0eTogNTAwLFxuXHRcdFx0XHRzY2FsZTogMC41LFxuXHRcdFx0XHR0aW50OiB7XG5cdFx0XHRcdFx0Y29sb3I6IDB4MDBmZjAwLFxuXHRcdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdFx0XHR0aGlzLnRpbnQudmFsdWUgKz0gdGltZTtcblx0XHRcdFx0XHRpZiAodGhpcy50aW50LnZhbHVlID49IDEpIHtcblx0XHRcdFx0XHRcdHRoaXMudGludC52YWx1ZSA9IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duKGU6IGFueSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmb3gnLCBlKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRhYmlsaXR5V29sZjoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0eDogMzUwLFxuXHRcdFx0XHR5OiA0MDAsXG5cdFx0XHRcdGNoaWxkOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0XHRzcmM6IEFCSUxJVFlfV09MRixcblx0XHRcdFx0XHRzY2FsZTogMC41LFxuXHRcdFx0XHRcdGFscGhhOiAxLFxuXHRcdFx0XHRcdHR3ZWVuOiB7XG5cdFx0XHRcdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0XHRcdFx0cGhhc2VzOiBbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHg6IDIwMCB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAnY3ViaWNvdXQnLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeTogMjAwLCBhbHBoYTogMC41IH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6ICdxdWFkcmF0aWNJbicsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB4OiAwLCBhbHBoYTogMSB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAncXVhZHJhdGljT3V0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRzdGFydCgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdzdGFydCcpO1xuXHRcdH0sXG5cdH07XG59XG4iLCJjb25zdCBTUEVFRCA9IDEwMDtcblxuaW50ZXJmYWNlIFVuaXQge1xuXHRba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdFByb3BlcnRpZXMge1xuXHRuYW1lOiBzdHJpbmcsXG5cdGhlYWx0aDogbnVtYmVyLFxuXHRpbWFnZTogc3RyaW5nLFxuXHRvbkNsaWNrOiAoZGF0YTogVW5pdFByb3BlcnRpZXMpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bml0KHByb3BzOiBVbml0UHJvcGVydGllcyk6IFVuaXQge1xuXHRmdW5jdGlvbiBnZXRUaXRsZSgpIHtcblx0XHRyZXR1cm4gYCR7cHJvcHMubmFtZX06ICR7TWF0aC5yb3VuZChwcm9wcy5oZWFsdGggKiAxMDApfSVgO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHR4OiA1MCArIE1hdGgucmFuZG9tKCkgKiA0MDAsXG5cdFx0eTogMjAwLFxuXHRcdHJvdGF0aW9uOiAwLFxuXHRcdHVwZGF0ZU1vdmUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLnggKz0gdGhpcy5jaGlsZHJlbi5pbWFnZS5zY2FsZVggKiB0aW1lICogU1BFRUQ7XG5cdFx0XHRpZiAodGhpcy54IDwgNTApIHtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbi5pbWFnZS5zY2FsZVggPSAxO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnggPiA0MDApIHtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbi5pbWFnZS5zY2FsZVggPSAtMTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0dGhpcy51cGRhdGVNb3ZlKHRpbWUpO1xuXHRcdH0sXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdHRleHQ6IHtcblx0XHRcdFx0dHlwZTogJ3RleHQnLFxuXHRcdFx0XHR0ZXh0OiBnZXRUaXRsZSgpLFxuXHRcdFx0XHR0ZXh0Rm9ybWF0OiB7XG5cdFx0XHRcdFx0c2l6ZTogMTUsXG5cdFx0XHRcdFx0Y29sb3I6IDB4ZmZkZGRkLFxuXHRcdFx0XHRcdGFsaWduOiAnY2VudGVyJyxcblx0XHRcdFx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0Ym9yZGVyOiAweDAwZmYwMCxcblx0XHRcdFx0eTogLTMwLFxuXHRcdFx0XHRoZWlnaHQ6IDM1LFxuXHRcdFx0XHRwaXZvdFg6IDAuNSxcblx0XHRcdFx0b25Qb2ludGVyRG93bjogKCkgPT4ge1xuXHRcdFx0XHRcdHByb3BzLm9uQ2xpY2socHJvcHMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblVwZGF0ZSgpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQgPSBnZXRUaXRsZSgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogcHJvcHMuaW1hZ2UsXG5cdFx0XHRcdHNjYWxlWDogTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSxcblx0XHRcdFx0cGl2b3RYOiAwLjUsXG5cdFx0XHRcdG9uUG9pbnRlckRvd246ICgpID0+IHtcblx0XHRcdFx0XHRwcm9wcy5vbkNsaWNrKHByb3BzKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbmdpbmUsIGFwcGx5TW91c2VTdXBwb3J0RXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuaW1wb3J0IHsgYXBwbHlUd2VlbkV4dGVuc2lvbiB9IGZyb20gJ0BlMmQvdHdlZW4nO1xuaW1wb3J0IHsgYXBwbHlDYW52YXNUZXh0RXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC90ZXh0JztcbmltcG9ydCB7IGFwcGx5Q2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiB9IGZyb20gJ0BlMmQvaW1hZ2UnO1xuaW1wb3J0IHsgYXBwbHlDYW52YXNTaGFwZUV4dGVuc2lvbiB9IGZyb20gJ0BlMmQvc2hhcGUnO1xuaW1wb3J0IHsgQ2FudmFzU3VwcG9ydCB9IGZyb20gJ0BlMmQvY2FudmFzLXN1cHBvcnQnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BlMmQvcmVzb3VyY2VzJztcbmltcG9ydCBDdXN0b21SZXNvdXJjZU1hbmFnZXIgZnJvbSAnLi9lbmdpbmUvcmVzb3VyY2VzJztcbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbic7XG5pbXBvcnQgQ3VzdG9tU3VwcG9ydCBmcm9tICcuL2VuZ2luZS9zdXBwb3J0JztcbmltcG9ydCB7XG5cdEFOSU1BTElTVCwgQU5JTUFMSVNUX0lNQUdFLCBBUkNIRVIsIEFSQ0hFUl9JTUFHRSwgVEVTVF9DQU5WQVMsXG59IGZyb20gJy4vYXNzZXRzJztcblxuLy8gYXBwbGljYXRpb25cbmNvbnN0IGFwcCA9IG1haW4oKTtcbmFwcC5zdGFydCgpO1xuXG4vLyBiYXNpYyBlbmdpbmVcbmNvbnN0IGVuZ2luZSA9IG5ldyBFbmdpbmUobmV3IENhbnZhc1N1cHBvcnQoKSk7XG5hcHBseUNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24oZW5naW5lLnN1cHBvcnQpO1xuYXBwbHlDYW52YXNUZXh0RXh0ZW5zaW9uKGVuZ2luZS5zdXBwb3J0KTtcbmFwcGx5Q2FudmFzU2hhcGVFeHRlbnNpb24oZW5naW5lLnN1cHBvcnQpO1xuYXBwbHlUd2VlbkV4dGVuc2lvbihlbmdpbmUuc3VwcG9ydCk7XG5hcHBseU1vdXNlU3VwcG9ydEV4dGVuc2lvbihlbmdpbmUpO1xuZW5naW5lLnJvb3QgPSBhcHAgYXMgYW55IGFzIENvbXBvbmVudDtcbmVuZ2luZS5wbGF5KCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVuZ2luZS5zdXBwb3J0LmVsZW1lbnQpO1xuXG4vLyBjdXN0b20gZW5naW5lXG5jb25zdCBjdXN0b21FbmdpbmUgPSBuZXcgRW5naW5lKG5ldyBDdXN0b21TdXBwb3J0KCkpO1xuY3VzdG9tRW5naW5lLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbmN1c3RvbUVuZ2luZS5oZWlnaHQgPSA2MDA7XG5jdXN0b21FbmdpbmUudXBkYXRlRW5hYmxlZCA9IGZhbHNlO1xuY3VzdG9tRW5naW5lLnJvb3QgPSBlbmdpbmUucm9vdDtcbmN1c3RvbUVuZ2luZS5wbGF5KCk7XG5jdXN0b21FbmdpbmUuc3VwcG9ydC5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbmN1c3RvbUVuZ2luZS5zdXBwb3J0LmVsZW1lbnQuc3R5bGUudG9wID0gJzBweCc7XG5jdXN0b21FbmdpbmUuc3VwcG9ydC5lbGVtZW50LnN0eWxlLmxlZnQgPSAnNjAwcHgnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjdXN0b21FbmdpbmUuc3VwcG9ydC5lbGVtZW50KTtcblxuLy8gcGFnZVxuZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSAnMCc7XG5kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSAnMCc7XG5cbi8vIHRlc3QgcGF1c2VcbnNldFRpbWVvdXQoKCkgPT4gZW5naW5lLnBhdXNlKCksIDUwMDApO1xuc2V0VGltZW91dCgoKSA9PiBlbmdpbmUucGxheSgpLCAxMDAwMCk7XG5cbi8vIHNldCBjdXN0b20gcmVzb3VyY2VcbmVuZ2luZS5zdXBwb3J0LnJlc291cmNlcy5hZGQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBjdXN0b21FbmdpbmUuc3VwcG9ydC5lbGVtZW50LFxuXHRcdGxvYWRlZDogdHJ1ZSxcblx0fSBhcyBJbWFnZVJlc291cmNlLFxuKTtcbmN1c3RvbUVuZ2luZS5zdXBwb3J0LnJlc291cmNlcy5hZGQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBlbmdpbmUuc3VwcG9ydC5lbGVtZW50LFxuXHRcdGxvYWRlZDogdHJ1ZSxcblx0fSBhcyBJbWFnZVJlc291cmNlLFxuKTtcblxuLy8gY3VzdG9tIHJlc291cmNlIHJlc29sdmVyXG5jb25zdCByZXNvdXJjZU1hbmFnZXIgPSBuZXcgQ3VzdG9tUmVzb3VyY2VNYW5hZ2VyKCk7XG5yZXNvdXJjZU1hbmFnZXIuYWxpYXNlcy5zZXQoQVJDSEVSLnJlcGxhY2UoJ2lkOicsICcnKSwgQVJDSEVSX0lNQUdFKTtcbnJlc291cmNlTWFuYWdlci5hbGlhc2VzLnNldChBTklNQUxJU1QucmVwbGFjZSgnaWQ6JywgJycpLCBBTklNQUxJU1RfSU1BR0UpO1xuZW5naW5lLnN1cHBvcnQucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb3VyY2VNYW5hZ2VyLnJlc29sdmUpO1xuY3VzdG9tRW5naW5lLnN1cHBvcnQucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb3VyY2VNYW5hZ2VyLnJlc29sdmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==