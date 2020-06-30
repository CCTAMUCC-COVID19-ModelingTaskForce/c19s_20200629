(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["polyfills/object-define-property"],{

/***/ "./node_modules/core-js/es/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");
var path = __webpack_require__("./node_modules/core-js/internals/path.js");

var Object = path.Object;

var defineProperty = module.exports = function defineProperty(it, key, desc) {
  return Object.defineProperty(it, key, desc);
};

if (Object.defineProperty.sham) defineProperty.sham = true;


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-property.js":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");
var objectDefinePropertyModile = __webpack_require__("./node_modules/core-js/internals/object-define-property.js");

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ })

}]);
//# sourceMappingURL=/sourcemaps/object-define-property.js.map