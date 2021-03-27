webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/useDeviceDetect.js":
/*!**********************************!*\
  !*** ./hooks/useDeviceDetect.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();



function useDeviceDetect() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isMobile = _useState[0],
      setMobile = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    var mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
    setMobile(mobile);
  }, []);
  return {
    isMobile: isMobile
  };
}

_s(useDeviceDetect, "t16WQSIOuy6+Fjd/L0EA91hwk9Y=");

/* harmony default export */ __webpack_exports__["default"] = (useDeviceDetect);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlRGV2aWNlRGV0ZWN0LmpzIl0sIm5hbWVzIjpbInVzZURldmljZURldGVjdCIsInVzZVN0YXRlIiwiaXNNb2JpbGUiLCJzZXRNb2JpbGUiLCJ1c2VFZmZlY3QiLCJ1c2VyQWdlbnQiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtb2JpbGUiLCJCb29sZWFuIiwibWF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLGVBQVQsR0FBMkI7QUFBQTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxLQUFELENBRGI7QUFBQSxNQUNsQkMsUUFEa0I7QUFBQSxNQUNSQyxTQURROztBQUd6QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsU0FBUyxHQUNiLE9BQU9DLE1BQU0sQ0FBQ0MsU0FBZCxLQUE0QixXQUE1QixHQUEwQyxFQUExQyxHQUErQ0EsU0FBUyxDQUFDRixTQUQzRDtBQUVBLFFBQU1HLE1BQU0sR0FBR0MsT0FBTyxDQUNwQkosU0FBUyxDQUFDSyxLQUFWLENBQ0Usb0VBREYsQ0FEb0IsQ0FBdEI7QUFLQVAsYUFBUyxDQUFDSyxNQUFELENBQVQ7QUFDRCxHQVRRLEVBU04sRUFUTSxDQUFUO0FBV0EsU0FBTztBQUFFTixZQUFRLEVBQVJBO0FBQUYsR0FBUDtBQUNEOztHQWZRRixlOztBQWlCTUEsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTlmYjRlYjNlOGQyMTA2MWMwZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHVzZURldmljZURldGVjdCgpIHtcclxuICBjb25zdCBbaXNNb2JpbGUsIHNldE1vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyQWdlbnQgPVxyXG4gICAgICB0eXBlb2Ygd2luZG93Lm5hdmlnYXRvciA9PT0gXCJ1bmRlZmluZWRcIiA/IFwiXCIgOiBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgY29uc3QgbW9iaWxlID0gQm9vbGVhbihcclxuICAgICAgdXNlckFnZW50Lm1hdGNoKFxyXG4gICAgICAgIC9BbmRyb2lkfEJsYWNrQmVycnl8aVBob25lfGlQYWR8aVBvZHxPcGVyYSBNaW5pfElFTW9iaWxlfFdQRGVza3RvcC9pXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgICBzZXRNb2JpbGUobW9iaWxlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiB7IGlzTW9iaWxlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZURldmljZURldGVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==