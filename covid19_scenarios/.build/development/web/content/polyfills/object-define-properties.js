(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["polyfills/object-define-properties"],{

/***/ "./node_modules/core-js/es/object/define-properties.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js");
var path = __webpack_require__("./node_modules/core-js/internals/path.js");

var Object = path.Object;

var defineProperties = module.exports = function defineProperties(T, D) {
  return Object.defineProperties(T, D);
};

if (Object.defineProperties.sham) defineProperties.sham = true;


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-properties.js":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");
var defineProperties = __webpack_require__("./node_modules/core-js/internals/object-define-properties.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ })

}]);
//# sourceMappingURL=/sourcemaps/object-define-properties.js.map