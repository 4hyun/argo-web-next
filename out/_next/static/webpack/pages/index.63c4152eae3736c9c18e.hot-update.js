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


var _s = $RefreshSig$();

function useDeviceDetect() {
  _s();

  var _useState = useState(false),
      _useState2 = Object(C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isMobile = _useState2[0],
      setMobile = _useState2[1];

  useEffect(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlRGV2aWNlRGV0ZWN0LmpzIl0sIm5hbWVzIjpbInVzZURldmljZURldGVjdCIsInVzZVN0YXRlIiwiaXNNb2JpbGUiLCJzZXRNb2JpbGUiLCJ1c2VFZmZlY3QiLCJ1c2VyQWdlbnQiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtb2JpbGUiLCJCb29sZWFuIiwibWF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxlQUFULEdBQTJCO0FBQUE7O0FBQUEsa0JBQ0tDLFFBQVEsQ0FBQyxLQUFELENBRGI7QUFBQTtBQUFBLE1BQ2xCQyxRQURrQjtBQUFBLE1BQ1JDLFNBRFE7O0FBR3pCQyxXQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFNBQVMsR0FDYixPQUFPQyxNQUFNLENBQUNDLFNBQWQsS0FBNEIsV0FBNUIsR0FBMEMsRUFBMUMsR0FBK0NBLFNBQVMsQ0FBQ0YsU0FEM0Q7QUFFQSxRQUFNRyxNQUFNLEdBQUdDLE9BQU8sQ0FDcEJKLFNBQVMsQ0FBQ0ssS0FBVixDQUNFLG9FQURGLENBRG9CLENBQXRCO0FBS0FQLGFBQVMsQ0FBQ0ssTUFBRCxDQUFUO0FBQ0QsR0FUUSxFQVNOLEVBVE0sQ0FBVDtBQVdBLFNBQU87QUFBRU4sWUFBUSxFQUFSQTtBQUFGLEdBQVA7QUFDRDs7R0FmUUYsZTs7QUFpQk1BLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYzYzQxNTJlYWUzNzM2YzljMThlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB1c2VEZXZpY2VEZXRlY3QoKSB7XHJcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlckFnZW50ID1cclxuICAgICAgdHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IgPT09IFwidW5kZWZpbmVkXCIgPyBcIlwiIDogbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgIGNvbnN0IG1vYmlsZSA9IEJvb2xlYW4oXHJcbiAgICAgIHVzZXJBZ2VudC5tYXRjaChcclxuICAgICAgICAvQW5kcm9pZHxCbGFja0JlcnJ5fGlQaG9uZXxpUGFkfGlQb2R8T3BlcmEgTWluaXxJRU1vYmlsZXxXUERlc2t0b3AvaVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gICAgc2V0TW9iaWxlKG1vYmlsZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4geyBpc01vYmlsZSB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VEZXZpY2VEZXRlY3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=