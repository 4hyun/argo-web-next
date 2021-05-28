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
  "marginBottom": "0.75rem"
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
})(["", " ", ",", "{", "}&.hovered{", "}&.hovered-active{", "}"], {
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
  "--tw-ring-color": "rgba(10, 41, 202, var(--tw-ring-opacity))"
}, {
  "--tw-translate-x": "0",
  "--tw-translate-y": "0.5rem",
  "--tw-rotate": "0",
  "--tw-skew-x": "0",
  "--tw-skew-y": "0",
  "--tw-scale-x": "1",
  "--tw-scale-y": "1",
  "transform": "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
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

  var handleCardHovered = function handleCardHovered() {
    return setCardHoverClass("hovered");
  };

  var handleCardMouseLeave = function handleCardMouseLeave() {
    return setCardHoverClass(null);
  };

  var handleCardHoverActive = function handleCardHoverActive() {
    return setCardHoverClass("hovered-active");
  };

  var postDate = new Date(published_at);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
    className: "".concat(cardHoverClass && cardHoverClass),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(H2, {
      onMouseEnter: handleCardHovered,
      onMouseLeave: handleCardMouseLeave,
      onMouseDown: handleCardHoverActive,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "blog/post/".concat(slug),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthorLabel, {
      children: "by ".concat(firstname, " ").concat(lastname)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PublishedAt, {
      children: postDate.toLocaleDateString("ko-KR").slice(0, -1)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nL0NhcmQuanMiXSwibmFtZXMiOlsiSDIiLCJzdHlsZWQiLCJBdXRob3JMYWJlbCIsIlB1Ymxpc2hlZEF0IiwiV3JhcHBlciIsIkNhcmQiLCJpZCIsInRpdGxlIiwiY29udGVudCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZW1haWwiLCJwdWJsaXNoZWRfYXQiLCJzbHVnIiwidXNlU3RhdGUiLCJjYXJkSG92ZXJDbGFzcyIsInNldENhcmRIb3ZlckNsYXNzIiwiaGFuZGxlQ2FyZEhvdmVyZWQiLCJoYW5kbGVDYXJkTW91c2VMZWF2ZSIsImhhbmRsZUNhcmRIb3ZlckFjdGl2ZSIsInBvc3REYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxFQUFFLEdBQUdDLG9FQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBREUsQ0FBUjtLQUFNRCxFO0FBSU4sSUFBTUUsV0FBVyxHQUFHRCxtRUFBSDtBQUFBO0FBQUE7QUFBQSxhQUNYO0FBQUE7QUFBQTtBQUFBLENBRFcsQ0FBakI7TUFBTUMsVztBQUdOLElBQU1DLFdBQVcsR0FBR0Ysc0VBQUg7QUFBQTtBQUFBO0FBQUEsYUFDWDtBQUFBO0FBQUE7QUFBQSxDQURXLENBQWpCO01BQU1FLFc7QUFJTixJQUFNQyxPQUFPLEdBQUdILHlFQUFIO0FBQUE7QUFBQTtBQUFBLGtFQUNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQURPLEVBRVRDLFdBRlMsRUFFTUMsV0FGTixFQUdMO0FBQUE7QUFBQSxDQUhLLEVBTUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FOSyxFQVNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBVEssQ0FBYjtNQUFNQyxPOztBQWFOLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTRFO0FBQUE7O0FBQUEsTUFBekVDLEVBQXlFLFFBQXpFQSxFQUF5RTtBQUFBLE1BQXJFQyxLQUFxRSxRQUFyRUEsS0FBcUU7QUFBQSxNQUE5REMsT0FBOEQsUUFBOURBLE9BQThEO0FBQUEsTUFBckRDLFNBQXFELFFBQXJEQSxTQUFxRDtBQUFBLE1BQTFDQyxRQUEwQyxRQUExQ0EsUUFBMEM7QUFBQSxNQUFoQ0MsS0FBZ0MsUUFBaENBLEtBQWdDO0FBQUEsTUFBekJDLFlBQXlCLFFBQXpCQSxZQUF5QjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDM0NDLCtDQUFRLENBQUMsSUFBRCxDQURtQztBQUFBLE1BQ2hGQyxjQURnRjtBQUFBLE1BQ2hFQyxpQkFEZ0U7O0FBRXZGLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxXQUFNRCxpQkFBaUIsQ0FBQyxTQUFELENBQXZCO0FBQUEsR0FBMUI7O0FBQ0EsTUFBTUUsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QjtBQUFBLFdBQU1GLGlCQUFpQixDQUFDLElBQUQsQ0FBdkI7QUFBQSxHQUE3Qjs7QUFDQSxNQUFNRyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCO0FBQUEsV0FBTUgsaUJBQWlCLENBQUMsZ0JBQUQsQ0FBdkI7QUFBQSxHQUE5Qjs7QUFDQSxNQUFNSSxRQUFRLEdBQUcsSUFBSUMsSUFBSixDQUFTVCxZQUFULENBQWpCO0FBQ0Esc0JBQ0UsOERBQUMsT0FBRDtBQUFTLGFBQVMsWUFBS0csY0FBYyxJQUFJQSxjQUF2QixDQUFsQjtBQUFBLDRCQUNFLDhEQUFDLEVBQUQ7QUFBSSxrQkFBWSxFQUFFRSxpQkFBbEI7QUFBcUMsa0JBQVksRUFBRUMsb0JBQW5EO0FBQXlFLGlCQUFXLEVBQUVDLHFCQUF0RjtBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxzQkFBZU4sSUFBZixDQUFWO0FBQUEsK0JBQ0U7QUFBQSxvQkFBSU47QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU9FLDhEQUFDLFdBQUQ7QUFBQSw2QkFBb0JFLFNBQXBCLGNBQWlDQyxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQVFFLDhEQUFDLFdBQUQ7QUFBQSxnQkFBY1UsUUFBUSxDQUFDRSxrQkFBVCxDQUE0QixPQUE1QixFQUFxQ0MsS0FBckMsQ0FBMkMsQ0FBM0MsRUFBOEMsQ0FBQyxDQUEvQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBbEJEOztHQUFNbEIsSTs7TUFBQUEsSTtBQW9CTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLmZhN2MyNzEwY2ZiODVhNWEzMzM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIlxyXG5cclxuY29uc3QgSDIgPSBzdHlsZWQuaDJgXHJcbiAgJHt0d2B0ZXh0LXhsIGZvbnQtYmxhY2sgbWItMyBsZWFkaW5nLW5vcm1hbGB9XHJcbmBcclxuXHJcbmNvbnN0IEF1dGhvckxhYmVsID0gc3R5bGVkLnBgXHJcbiAgJHt0d2B0ZXh0LXhzYH1cclxuYFxyXG5jb25zdCBQdWJsaXNoZWRBdCA9IHN0eWxlZC5zcGFuYFxyXG4gICR7dHdgdGV4dC14c2B9XHJcbmBcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuYXJ0aWNsZWBcclxuICAke3R3YHJvdW5kZWQtbGcgYmctd2hpdGUgcC02IHNoYWRvdy1sZyBob3ZlcjpzaGFkb3cteGxgfVxyXG4gICR7QXV0aG9yTGFiZWx9LCR7UHVibGlzaGVkQXR9IHtcclxuICAgICR7dHdgbGVhZGluZy1ub25lYH1cclxuICB9XHJcbiAgJi5ob3ZlcmVkIHtcclxuICAgICR7dHdgcmluZy00IHJpbmctYXJnby1ibHVlLTQwMGB9XHJcbiAgfVxyXG4gICYuaG92ZXJlZC1hY3RpdmUge1xyXG4gICAgJHt0d2B0cmFuc2Zvcm0gdHJhbnNsYXRlLXktMmB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBDYXJkID0gKHsgaWQsIHRpdGxlLCBjb250ZW50LCBmaXJzdG5hbWUsIGxhc3RuYW1lLCBlbWFpbCwgcHVibGlzaGVkX2F0LCBzbHVnIH0pID0+IHtcclxuICBjb25zdCBbY2FyZEhvdmVyQ2xhc3MsIHNldENhcmRIb3ZlckNsYXNzXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgaGFuZGxlQ2FyZEhvdmVyZWQgPSAoKSA9PiBzZXRDYXJkSG92ZXJDbGFzcyhcImhvdmVyZWRcIilcclxuICBjb25zdCBoYW5kbGVDYXJkTW91c2VMZWF2ZSA9ICgpID0+IHNldENhcmRIb3ZlckNsYXNzKG51bGwpXHJcbiAgY29uc3QgaGFuZGxlQ2FyZEhvdmVyQWN0aXZlID0gKCkgPT4gc2V0Q2FyZEhvdmVyQ2xhc3MoXCJob3ZlcmVkLWFjdGl2ZVwiKVxyXG4gIGNvbnN0IHBvc3REYXRlID0gbmV3IERhdGUocHVibGlzaGVkX2F0KVxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlciBjbGFzc05hbWU9e2Ake2NhcmRIb3ZlckNsYXNzICYmIGNhcmRIb3ZlckNsYXNzfWB9PlxyXG4gICAgICA8SDIgb25Nb3VzZUVudGVyPXtoYW5kbGVDYXJkSG92ZXJlZH0gb25Nb3VzZUxlYXZlPXtoYW5kbGVDYXJkTW91c2VMZWF2ZX0gb25Nb3VzZURvd249e2hhbmRsZUNhcmRIb3ZlckFjdGl2ZX0+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YGJsb2cvcG9zdC8ke3NsdWd9YH0+XHJcbiAgICAgICAgICA8YT57dGl0bGV9PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9IMj5cclxuICAgICAgey8qIDxkaXY+e2NvbnRlbnR9PC9kaXY+ICovfVxyXG4gICAgICA8QXV0aG9yTGFiZWw+e2BieSAke2ZpcnN0bmFtZX0gJHtsYXN0bmFtZX1gfTwvQXV0aG9yTGFiZWw+XHJcbiAgICAgIDxQdWJsaXNoZWRBdD57cG9zdERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwia28tS1JcIikuc2xpY2UoMCwgLTEpfTwvUHVibGlzaGVkQXQ+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=