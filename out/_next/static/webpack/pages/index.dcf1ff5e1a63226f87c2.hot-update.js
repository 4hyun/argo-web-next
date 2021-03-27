webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/useDeviceDetect.js":
/*!**********************************!*\
  !*** ./hooks/useDeviceDetect.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _s = $RefreshSig$();



function useDeviceDetect() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isMobile = _React$useState2[0],
      setMobile = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlRGV2aWNlRGV0ZWN0LmpzIl0sIm5hbWVzIjpbInVzZURldmljZURldGVjdCIsIlJlYWN0IiwidXNlU3RhdGUiLCJpc01vYmlsZSIsInNldE1vYmlsZSIsInVzZUVmZmVjdCIsInVzZXJBZ2VudCIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1vYmlsZSIsIkJvb2xlYW4iLCJtYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsZUFBVCxHQUEyQjtBQUFBOztBQUFBLHdCQUNLQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQURMO0FBQUE7QUFBQSxNQUNsQkMsUUFEa0I7QUFBQSxNQUNSQyxTQURROztBQUd6QkgsOENBQUssQ0FBQ0ksU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQU1DLFNBQVMsR0FDYixPQUFPQyxNQUFNLENBQUNDLFNBQWQsS0FBNEIsV0FBNUIsR0FBMEMsRUFBMUMsR0FBK0NBLFNBQVMsQ0FBQ0YsU0FEM0Q7QUFFQSxRQUFNRyxNQUFNLEdBQUdDLE9BQU8sQ0FDcEJKLFNBQVMsQ0FBQ0ssS0FBVixDQUNFLG9FQURGLENBRG9CLENBQXRCO0FBS0FQLGFBQVMsQ0FBQ0ssTUFBRCxDQUFUO0FBQ0QsR0FURCxFQVNHLEVBVEg7QUFXQSxTQUFPO0FBQUVOLFlBQVEsRUFBUkE7QUFBRixHQUFQO0FBQ0Q7O0dBZlFILGU7O0FBaUJNQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kY2YxZmY1ZTFhNjMyMjZmODdjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gdXNlRGV2aWNlRGV0ZWN0KCkge1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0TW9iaWxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJBZ2VudCA9XHJcbiAgICAgIHR5cGVvZiB3aW5kb3cubmF2aWdhdG9yID09PSBcInVuZGVmaW5lZFwiID8gXCJcIiA6IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICBjb25zdCBtb2JpbGUgPSBCb29sZWFuKFxyXG4gICAgICB1c2VyQWdlbnQubWF0Y2goXHJcbiAgICAgICAgL0FuZHJvaWR8QmxhY2tCZXJyeXxpUGhvbmV8aVBhZHxpUG9kfE9wZXJhIE1pbml8SUVNb2JpbGV8V1BEZXNrdG9wL2lcclxuICAgICAgKVxyXG4gICAgKTtcclxuICAgIHNldE1vYmlsZShtb2JpbGUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIHsgaXNNb2JpbGUgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlRGV2aWNlRGV0ZWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9