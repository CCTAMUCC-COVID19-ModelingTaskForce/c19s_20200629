(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["polyfills/string-ends-with"],{

/***/ "./node_modules/core-js/es/string/ends-with.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/es.string.ends-with.js");
var entryUnbind = __webpack_require__("./node_modules/core-js/internals/entry-unbind.js");

module.exports = entryUnbind('String', 'endsWith');


/***/ }),

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "./node_modules/core-js/internals/entry-unbind.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/internals/global.js");
var bind = __webpack_require__("./node_modules/core-js/internals/function-bind-context.js");

var call = Function.call;

module.exports = function (CONSTRUCTOR, METHOD, length) {
  return bind(call, global[CONSTRUCTOR].prototype[METHOD], length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("./node_modules/core-js/internals/is-regexp.js");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.ends-with.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var getOwnPropertyDescriptor = __webpack_require__("./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var toLength = __webpack_require__("./node_modules/core-js/internals/to-length.js");
var notARegExp = __webpack_require__("./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__("./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__("./node_modules/core-js/internals/correct-is-regexp-logic.js");
var IS_PURE = __webpack_require__("./node_modules/core-js/internals/is-pure.js");

var nativeEndsWith = ''.endsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = String(searchString);
    return nativeEndsWith
      ? nativeEndsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ })

}]);
//# sourceMappingURL=/sourcemaps/string-ends-with.js.map