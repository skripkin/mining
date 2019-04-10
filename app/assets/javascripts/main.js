/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/main.js":
/*!************************!*\
  !*** ./assets/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ \"./assets/modules/index.js\");\n\n\n//# sourceURL=webpack:///./assets/main.js?");

/***/ }),

/***/ "./assets/modules/dropdown/dropdown-list.js":
/*!**************************************************!*\
  !*** ./assets/modules/dropdown/dropdown-list.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown */ \"./assets/modules/dropdown/dropdown.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar DropdownList = function DropdownList() {\n    _classCallCheck(this, DropdownList);\n\n    this._elements = document.querySelectorAll('.dropdown');\n\n    this._dropdowns = Array.from(this._elements).map(function (element) {\n        return new _dropdown__WEBPACK_IMPORTED_MODULE_0__[\"default\"](element);\n    });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new DropdownList());\n\n//# sourceURL=webpack:///./assets/modules/dropdown/dropdown-list.js?");

/***/ }),

/***/ "./assets/modules/dropdown/dropdown.js":
/*!*********************************************!*\
  !*** ./assets/modules/dropdown/dropdown.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var util_dom_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util/dom-helpers */ \"./assets/util/dom-helpers.js\");\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Dropdown = function () {\n    function Dropdown(element) {\n        var _this = this;\n\n        _classCallCheck(this, Dropdown);\n\n        this._getFakeSelect = function (value) {\n            var button = document.createElement('button');\n            button.classList.add('dropdown__fake-select');\n            button.textContent = value;\n\n            return button;\n        };\n\n        this._getFakeOptions = function (options) {\n            var list = document.createElement('ul');\n            list.classList.add('dropdown__fake-list');\n\n            list.innerHTML = options.map(function (option) {\n                return '<li class=\"dropdown__fake-option' + (option.selected ? ' dropdown__fake-option--active' : '') + '\" data-value=\"' + option.value + '\">' + option.innerHTML + '</li>';\n            }).join('');\n\n            return list;\n        };\n\n        this._handleDocumentClicked = function (e) {\n            var _target = e.target;\n\n            if (Object(util_dom_helpers__WEBPACK_IMPORTED_MODULE_0__[\"findParent\"])(_target, 'dropdown') === _this._element) return;\n\n            _this._element.querySelectorAll('.dropdown__fake-list--opened').forEach(function (list) {\n                return list.classList.remove('dropdown__fake-list--opened');\n            });\n\n            document.removeEventListener('click', _this._handleDocumentClicked);\n        };\n\n        this._hanldeButtonClicked = function (e) {\n            e.preventDefault();\n\n            var _target = e.target;\n            var fakeList = _target.nextElementSibling;\n\n            document[!fakeList.classList.contains('dropdown__fake-list--opened') ? \"addEventListener\" : \"removeEventListener\"]('click', _this._handleDocumentClicked);\n            _target.nextElementSibling.classList.toggle('dropdown__fake-list--opened');\n        };\n\n        this._element = element;\n\n        this._setupDOM();\n    }\n\n    _createClass(Dropdown, [{\n        key: '_setupDOM',\n        value: function _setupDOM() {\n            var select = this._element.querySelector('select');\n            var selectedIndex = select.selectedIndex,\n                children = select.children;\n            var value = children[selectedIndex].textContent;\n\n\n            var fakeButton = this._getFakeSelect(value);\n            var fakeList = this._getFakeOptions(Array.from(children));\n\n            this._addListeners(fakeButton, fakeList);\n\n            var fake = document.createElement('div');\n            fake.classList.add('dropdown__fake');\n\n            fake.appendChild(fakeButton);\n            fake.appendChild(fakeList);\n\n            this._element.appendChild(fake);\n            this._element.classList.add('dropdown--initialized');\n        }\n    }, {\n        key: '_addListeners',\n        value: function _addListeners(button, list) {\n            button.addEventListener('click', this._hanldeButtonClicked);\n            list.addEventListener('click', this._handleListClicked);\n        }\n    }, {\n        key: '_handleListClicked',\n        value: function _handleListClicked(e) {\n            var _target = e.target;\n\n            if (_target.tagName !== 'LI') return;\n\n            this.querySelector('.dropdown__fake-option--active').classList.remove('dropdown__fake-option--active');\n            _target.classList.add('dropdown__fake-option--active');\n\n            var value = _target.getAttribute('data-value');\n            var title = _target.textContent;\n\n            var parent = this.parentNode;\n\n            var _parentNode$children = _slicedToArray(this.parentNode.children, 1),\n                button = _parentNode$children[0];\n\n            button.textContent = title;\n\n            parent.parentNode.querySelector('select').value = value;\n            this.classList.remove('dropdown__fake-list--opened');\n        }\n    }]);\n\n    return Dropdown;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown);\n\n//# sourceURL=webpack:///./assets/modules/dropdown/dropdown.js?");

/***/ }),

/***/ "./assets/modules/dropdown/index.js":
/*!******************************************!*\
  !*** ./assets/modules/dropdown/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dropdown_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-list */ \"./assets/modules/dropdown/dropdown-list.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _dropdown_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./assets/modules/dropdown/index.js?");

/***/ }),

/***/ "./assets/modules/index.js":
/*!*********************************!*\
  !*** ./assets/modules/index.js ***!
  \*********************************/
/*! exports provided: Dropdowns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown */ \"./assets/modules/dropdown/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Dropdowns\", function() { return _dropdown__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./assets/modules/index.js?");

/***/ }),

/***/ "./assets/util/dom-helpers.js":
/*!************************************!*\
  !*** ./assets/util/dom-helpers.js ***!
  \************************************/
/*! exports provided: findParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findParent\", function() { return findParent; });\nvar findParent = function findParent(el, className) {\n    var _this = el;\n\n    while (_this && !_this.classList.contains(className)) {\n        _this = _this.parentNode;\n\n        if (_this === document.body) {\n            _this = null;\n        }\n    }\n\n    return _this;\n};\n\n//# sourceURL=webpack:///./assets/util/dom-helpers.js?");

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./assets/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! D:\\Git-work\\Portfolio\\index\\mining\\assets\\main.js */\"./assets/main.js\");\n\n\n//# sourceURL=webpack:///multi_./assets/main.js?");

/***/ })

/******/ });