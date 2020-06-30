(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["polyfills/string-include"],{

/***/ "./node_modules/core-js/es/string/includes.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/es.string.includes.js");
var entryUnbind = __webpack_require__("./node_modules/core-js/internals/entry-unbind.js");

module.exports = entryUnbind('String', 'includes');


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

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var notARegExp = __webpack_require__("./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__("./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__("./node_modules/core-js/internals/correct-is-regexp-logic.js");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ })

}]);
//# sourceMappingURL=/sourcemaps/string-include.js.map