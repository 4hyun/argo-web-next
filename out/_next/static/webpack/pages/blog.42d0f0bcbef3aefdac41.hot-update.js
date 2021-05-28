self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./components/Blog/Card.js":
/*!*********************************!*\
  !*** ./components/Blog/Card.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\4hyun\\Documents\\1-Argo\\web\\argo-web-next\\components\\Blog\\Card.js",
    _this = undefined,
    _s = $RefreshSig$();




var H2 = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.h2.withConfig({
  displayName: "Card__H2",
  componentId: "sc-1vp3j96-0"
})(["", ""], {
  "fontSize": "1.25rem",
  "lineHeight": "1.5",
  "fontWeight": "900",
  "marginBottom": "0.75rem",
  "borderBottomWidth": "2px",
  "borderColor": "transparent",
  ":hover": {
    "borderColor": "var(--argo-blue)"
  }
});
_c = H2;
var AuthorLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.p.withConfig({
  displayName: "Card__AuthorLabel",
  componentId: "sc-1vp3j96-1"
})(["", ""], {
  "fontSize": "0.75rem",
  "lineHeight": "1rem"
});
_c2 = AuthorLabel;
var PublishedAt = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.span.withConfig({
  displayName: "Card__PublishedAt",
  componentId: "sc-1vp3j96-2"
})(["", ""], {
  "fontSize": "0.75rem",
  "lineHeight": "1rem"
});
_c3 = PublishedAt;
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.article.withConfig({
  displayName: "Card__Wrapper",
  componentId: "sc-1vp3j96-3"
})(["", " ", ",", "{", "}&.hovered{", "}"], {
  "borderRadius": "0.5rem",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
  "padding": "1.5rem",
  "--tw-shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 0px 6px -2px rgba(0, 0, 0, 0.05)",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  ":hover": {
    "--tw-shadow": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
  }
}, AuthorLabel, PublishedAt, {
  "lineHeight": "1"
}, {
  "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
  "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
  "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
  "--tw-ring-opacity": "1",
  "--tw-ring-color": "var(--argo-blue)"
});
_c4 = Wrapper;

var Card = function Card(_ref) {
  _s();

  var id = _ref.id,
      title = _ref.title,
      content = _ref.content,
      firstname = _ref.firstname,
      lastname = _ref.lastname,
      email = _ref.email,
      published_at = _ref.published_at,
      slug = _ref.slug;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      cardHoverClass = _useState[0],
      setCardHoverClass = _useState[1];

  var handleCardHover = function handleCardHover() {
    return setCardHoverClass("hovered");
  };

  var handleCardMouseLeave = function handleCardMouseLeave() {
    return setCardHoverClass(null);
  };

  var postDate = new Date(published_at);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
    className: "".concat(cardHoverClass && cardHoverClass),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(H2, {
      onMouseEnter: handleCardHover,
      onMouseLeave: handleCardMouseLeave,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "blog/post/".concat(slug),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthorLabel, {
      children: "by ".concat(firstname, " ").concat(lastname)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PublishedAt, {
      children: postDate.toLocaleDateString("ko-KR").slice(0, -1)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, _this);
};

_s(Card, "PlxpKk5gOS4Yg5Jl6IQoo4Zri4U=");

_c5 = Card;
/* harmony default export */ __webpack_exports__["default"] = (Card);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "H2");
$RefreshReg$(_c2, "AuthorLabel");
$RefreshReg$(_c3, "PublishedAt");
$RefreshReg$(_c4, "Wrapper");
$RefreshReg$(_c5, "Card");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nL0NhcmQuanMiXSwibmFtZXMiOlsiSDIiLCJzdHlsZWQiLCJBdXRob3JMYWJlbCIsIlB1Ymxpc2hlZEF0IiwiV3JhcHBlciIsIkNhcmQiLCJpZCIsInRpdGxlIiwiY29udGVudCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZW1haWwiLCJwdWJsaXNoZWRfYXQiLCJzbHVnIiwidXNlU3RhdGUiLCJjYXJkSG92ZXJDbGFzcyIsInNldENhcmRIb3ZlckNsYXNzIiwiaGFuZGxlQ2FyZEhvdmVyIiwiaGFuZGxlQ2FyZE1vdXNlTGVhdmUiLCJwb3N0RGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0EsSUFBTUEsRUFBRSxHQUFHQyxvRUFBSDtBQUFBO0FBQUE7QUFBQSxhQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FERSxDQUFSO0tBQU1ELEU7QUFJTixJQUFNRSxXQUFXLEdBQUdELG1FQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ1g7QUFBQTtBQUFBO0FBQUEsQ0FEVyxDQUFqQjtNQUFNQyxXO0FBR04sSUFBTUMsV0FBVyxHQUFHRixzRUFBSDtBQUFBO0FBQUE7QUFBQSxhQUNYO0FBQUE7QUFBQTtBQUFBLENBRFcsQ0FBakI7TUFBTUUsVztBQUlOLElBQU1DLE9BQU8sR0FBR0gseUVBQUg7QUFBQTtBQUFBO0FBQUEsNENBQ1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBRE8sRUFFVEMsV0FGUyxFQUVNQyxXQUZOLEVBR0w7QUFBQTtBQUFBLENBSEssRUFNTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQU5LLENBQWI7TUFBTUMsTzs7QUFVTixJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUE0RTtBQUFBOztBQUFBLE1BQXpFQyxFQUF5RSxRQUF6RUEsRUFBeUU7QUFBQSxNQUFyRUMsS0FBcUUsUUFBckVBLEtBQXFFO0FBQUEsTUFBOURDLE9BQThELFFBQTlEQSxPQUE4RDtBQUFBLE1BQXJEQyxTQUFxRCxRQUFyREEsU0FBcUQ7QUFBQSxNQUExQ0MsUUFBMEMsUUFBMUNBLFFBQTBDO0FBQUEsTUFBaENDLEtBQWdDLFFBQWhDQSxLQUFnQztBQUFBLE1BQXpCQyxZQUF5QixRQUF6QkEsWUFBeUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQzNDQywrQ0FBUSxDQUFDLElBQUQsQ0FEbUM7QUFBQSxNQUNoRkMsY0FEZ0Y7QUFBQSxNQUNoRUMsaUJBRGdFOztBQUV2RixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsV0FBTUQsaUJBQWlCLENBQUMsU0FBRCxDQUF2QjtBQUFBLEdBQXhCOztBQUNBLE1BQU1FLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUI7QUFBQSxXQUFNRixpQkFBaUIsQ0FBQyxJQUFELENBQXZCO0FBQUEsR0FBN0I7O0FBQ0EsTUFBTUcsUUFBUSxHQUFHLElBQUlDLElBQUosQ0FBU1IsWUFBVCxDQUFqQjtBQUNBLHNCQUNFLDhEQUFDLE9BQUQ7QUFBUyxhQUFTLFlBQUtHLGNBQWMsSUFBSUEsY0FBdkIsQ0FBbEI7QUFBQSw0QkFDRSw4REFBQyxFQUFEO0FBQUksa0JBQVksRUFBRUUsZUFBbEI7QUFBbUMsa0JBQVksRUFBRUMsb0JBQWpEO0FBQUEsNkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLHNCQUFlTCxJQUFmLENBQVY7QUFBQSwrQkFDRTtBQUFBLG9CQUFJTjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBT0UsOERBQUMsV0FBRDtBQUFBLDZCQUFvQkUsU0FBcEIsY0FBaUNDLFFBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBUUUsOERBQUMsV0FBRDtBQUFBLGdCQUFjUyxRQUFRLENBQUNFLGtCQUFULENBQTRCLE9BQTVCLEVBQXFDQyxLQUFyQyxDQUEyQyxDQUEzQyxFQUE4QyxDQUFDLENBQS9DO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0FqQkQ7O0dBQU1qQixJOztNQUFBQSxJO0FBbUJOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuNDJkMGYwYmNiZWYzYWVmZGFjNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiXHJcblxyXG5jb25zdCBIMiA9IHN0eWxlZC5oMmBcclxuICAke3R3YHRleHQteGwgZm9udC1ibGFjayBtYi0zIGxlYWRpbmctbm9ybWFsIGJvcmRlci1iLTIgIGJvcmRlci10cmFuc3BhcmVudCBob3ZlcjooYm9yZGVyLWFyZ28tYmx1ZS00MDApYH1cclxuYFxyXG5cclxuY29uc3QgQXV0aG9yTGFiZWwgPSBzdHlsZWQucGBcclxuICAke3R3YHRleHQteHNgfVxyXG5gXHJcbmNvbnN0IFB1Ymxpc2hlZEF0ID0gc3R5bGVkLnNwYW5gXHJcbiAgJHt0d2B0ZXh0LXhzYH1cclxuYFxyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5hcnRpY2xlYFxyXG4gICR7dHdgcm91bmRlZC1sZyBiZy13aGl0ZSBwLTYgc2hhZG93LWxnIGhvdmVyOnNoYWRvdy14bGB9XHJcbiAgJHtBdXRob3JMYWJlbH0sJHtQdWJsaXNoZWRBdH0ge1xyXG4gICAgJHt0d2BsZWFkaW5nLW5vbmVgfVxyXG4gIH1cclxuICAmLmhvdmVyZWQge1xyXG4gICAgJHt0d2ByaW5nLTQgcmluZy1hcmdvLWJsdWUtNDAwYH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IENhcmQgPSAoeyBpZCwgdGl0bGUsIGNvbnRlbnQsIGZpcnN0bmFtZSwgbGFzdG5hbWUsIGVtYWlsLCBwdWJsaXNoZWRfYXQsIHNsdWcgfSkgPT4ge1xyXG4gIGNvbnN0IFtjYXJkSG92ZXJDbGFzcywgc2V0Q2FyZEhvdmVyQ2xhc3NdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBoYW5kbGVDYXJkSG92ZXIgPSAoKSA9PiBzZXRDYXJkSG92ZXJDbGFzcyhcImhvdmVyZWRcIilcclxuICBjb25zdCBoYW5kbGVDYXJkTW91c2VMZWF2ZSA9ICgpID0+IHNldENhcmRIb3ZlckNsYXNzKG51bGwpXHJcbiAgY29uc3QgcG9zdERhdGUgPSBuZXcgRGF0ZShwdWJsaXNoZWRfYXQpXHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyIGNsYXNzTmFtZT17YCR7Y2FyZEhvdmVyQ2xhc3MgJiYgY2FyZEhvdmVyQ2xhc3N9YH0+XHJcbiAgICAgIDxIMiBvbk1vdXNlRW50ZXI9e2hhbmRsZUNhcmRIb3Zlcn0gb25Nb3VzZUxlYXZlPXtoYW5kbGVDYXJkTW91c2VMZWF2ZX0+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YGJsb2cvcG9zdC8ke3NsdWd9YH0+XHJcbiAgICAgICAgICA8YT57dGl0bGV9PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9IMj5cclxuICAgICAgey8qIDxkaXY+e2NvbnRlbnR9PC9kaXY+ICovfVxyXG4gICAgICA8QXV0aG9yTGFiZWw+e2BieSAke2ZpcnN0bmFtZX0gJHtsYXN0bmFtZX1gfTwvQXV0aG9yTGFiZWw+XHJcbiAgICAgIDxQdWJsaXNoZWRBdD57cG9zdERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwia28tS1JcIikuc2xpY2UoMCwgLTEpfTwvUHVibGlzaGVkQXQ+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=