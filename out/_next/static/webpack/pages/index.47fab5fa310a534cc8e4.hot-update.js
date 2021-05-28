self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ScrollTopButton/index.js":
/*!*********************************************!*\
  !*** ./components/ScrollTopButton/index.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Icons */ "./components/Icons/index.js");
/* harmony import */ var _hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useScrollPosition */ "./hooks/useScrollPosition.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\4hyun\\Documents\\1-Argo\\web\\argo-web-next\\components\\ScrollTopButton\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

/* components */

/* hook */


/* utils */



var Button = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.button.withConfig({
  displayName: "ScrollTopButton__Button",
  componentId: "i0w7st-0"
})(["", " ", ""], {
  "--tw-translate-x": "0",
  "--tw-translate-y": "0",
  "--tw-rotate": "0",
  "--tw-skew-x": "0",
  "--tw-skew-y": "0",
  "--tw-scale-x": "1",
  "--tw-scale-y": "1",
  "transform": "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
  "borderRadius": "9999px",
  "backgroundColor": "var(--argo-blue)",
  "--tw-text-opacity": "1",
  "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
  "position": "fixed",
  "right": "1.75rem",
  "bottom": "1.5rem",
  "display": "flex",
  "justifyContent": "center",
  "alignItems": "center",
  ":focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  },
  "--tw-shadow": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  ":active": {
    "--tw-translate-x": "0.25rem",
    "--tw-translate-y": "0.25rem"
  },
  "transitionProperty": "opacity",
  "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
  "transitionDuration": "150ms",
  "@media (min-width: 768px)": {
    "right": "6rem",
    "bottom": "7rem"
  },
  "@media (min-width: 1024px)": {
    "right": "1.75rem",
    "bottom": "1.5rem"
  }
}, function (_ref) {
  var scrollY = _ref.scrollY;
  return scrollY > 500 ? {
    "opacity": "0.8"
  } : {
    "opacity": "0"
  };
});

var scrollOptions = {
  duration: 250
};

var scrollToTop = function scrollToTop() {
  return react_scroll__WEBPACK_IMPORTED_MODULE_3__.animateScroll.scrollToTop(scrollOptions);
};

var ScrollTopButton = function ScrollTopButton() {
  _s();

  var scrollY = (0,_hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_2__.useScrollPosition)(60);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {
    onClick: scrollToTop,
    scrollY: scrollY,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Icons__WEBPACK_IMPORTED_MODULE_1__.UpArrowCircle, {
      size: 60
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_s(ScrollTopButton, "vvmCIKHpcYgj2gtd0NvxfyUbaUQ=", false, function () {
  return [_hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_2__.useScrollPosition];
});

_c = ScrollTopButton;
/* harmony default export */ __webpack_exports__["default"] = (ScrollTopButton);

var _c;

$RefreshReg$(_c, "ScrollTopButton");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TY3JvbGxUb3BCdXR0b24vaW5kZXguanMiXSwibmFtZXMiOlsiQnV0dG9uIiwic3R5bGVkIiwic2Nyb2xsWSIsInNjcm9sbE9wdGlvbnMiLCJkdXJhdGlvbiIsInNjcm9sbFRvVG9wIiwiYW5pbWF0ZVNjcm9sbCIsIlNjcm9sbFRvcEJ1dHRvbiIsInVzZVNjcm9sbFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLHdFQUFIO0FBQUE7QUFBQTtBQUFBLGtCQUNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FETSxFQUVSO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsU0FBa0JBLE9BQU8sR0FBRyxHQUFWLEdBQWtCO0FBQUE7QUFBQSxHQUFsQixHQUFtQztBQUFBO0FBQUEsR0FBckQ7QUFBQSxDQUZRLENBQVo7O0FBS0EsSUFBTUMsYUFBYSxHQUFHO0FBQUVDLFVBQVEsRUFBRTtBQUFaLENBQXRCOztBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsU0FBTUMsbUVBQUEsQ0FBMEJILGFBQTFCLENBQU47QUFBQSxDQUFwQjs7QUFFQSxJQUFNSSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFDNUIsTUFBTUwsT0FBTyxHQUFHTSwyRUFBaUIsQ0FBQyxFQUFELENBQWpDO0FBQ0Esc0JBQ0UsOERBQUMsTUFBRDtBQUFRLFdBQU8sRUFBRUgsV0FBakI7QUFBOEIsV0FBTyxFQUFFSCxPQUF2QztBQUFBLDJCQUNFLDhEQUFDLDJEQUFEO0FBQWUsVUFBSSxFQUFFO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQVBEOztHQUFNSyxlO1VBQ1lDLHVFOzs7S0FEWkQsZTtBQVNOLCtEQUFlQSxlQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ3ZmFiNWZhMzEwYTUzNGNjOGU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHcsIHsgc3R5bGVkIH0gZnJvbSBcInR3aW4ubWFjcm9cIlxyXG4vKiBjb21wb25lbnRzICovXHJcbmltcG9ydCB7IFVwQXJyb3dDaXJjbGUgfSBmcm9tIFwiY29tcG9uZW50cy9JY29uc1wiXHJcbi8qIGhvb2sgKi9cclxuaW1wb3J0IHsgdXNlU2Nyb2xsUG9zaXRpb24gfSBmcm9tIFwiQC9ob29rcy91c2VTY3JvbGxQb3NpdGlvblwiXHJcbi8qIHV0aWxzICovXHJcbmltcG9ydCB7IGFuaW1hdGVTY3JvbGwgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCJcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgJHt0d2Byb3VuZGVkLWZ1bGwgYmctYXJnby1ibHVlLTQwMCB0ZXh0LXdoaXRlIGZpeGVkIHJpZ2h0LTcgYm90dG9tLTYgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWQ6KHJpZ2h0LTI0IGJvdHRvbS0yOCkgbGc6KHJpZ2h0LTcgYm90dG9tLTYpIGZvY3VzOm91dGxpbmUtbm9uZSBzaGFkb3cteGwgdHJhbnNmb3JtIGFjdGl2ZToodHJhbnNsYXRlLXgtMSB0cmFuc2xhdGUteS0xKSB0cmFuc2l0aW9uLW9wYWNpdHlgfVxyXG4gICR7KHsgc2Nyb2xsWSB9KSA9PiAoc2Nyb2xsWSA+IDUwMCA/IHR3YG9wYWNpdHktODBgIDogdHdgb3BhY2l0eS0wYCl9XHJcbmBcclxuXHJcbmNvbnN0IHNjcm9sbE9wdGlvbnMgPSB7IGR1cmF0aW9uOiAyNTAgfVxyXG5jb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IGFuaW1hdGVTY3JvbGwuc2Nyb2xsVG9Ub3Aoc2Nyb2xsT3B0aW9ucylcclxuXHJcbmNvbnN0IFNjcm9sbFRvcEJ1dHRvbiA9ICgpID0+IHtcclxuICBjb25zdCBzY3JvbGxZID0gdXNlU2Nyb2xsUG9zaXRpb24oNjApXHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b24gb25DbGljaz17c2Nyb2xsVG9Ub3B9IHNjcm9sbFk9e3Njcm9sbFl9PlxyXG4gICAgICA8VXBBcnJvd0NpcmNsZSBzaXplPXs2MH0gLz5cclxuICAgIDwvQnV0dG9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsVG9wQnV0dG9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=