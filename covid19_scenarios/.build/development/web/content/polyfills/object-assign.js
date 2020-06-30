(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["polyfills/object-assign"],{

/***/ "./node_modules/core-js/es/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");
var path = __webpack_require__("./node_modules/core-js/internals/path.js");

module.exports = path.Object.assign;


/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__("./node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__("./node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__("./node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__("./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__("./node_modules/core-js/internals/indexed-object.js");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.assign.js":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var assign = __webpack_require__("./node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ })

}]);
//# sourceMappingURL=/sourcemaps/object-assign.js.map