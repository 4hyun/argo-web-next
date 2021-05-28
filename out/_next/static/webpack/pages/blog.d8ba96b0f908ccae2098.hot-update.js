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
})(["", " ", ",", "{", "}"], {
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
      onHover: handleCardHover,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "blog/post/".concat(slug),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthorLabel, {
      children: "by ".concat(firstname, " ").concat(lastname)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PublishedAt, {
      children: postDate.toLocaleDateString("ko-KR").slice(0, -1)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nL0NhcmQuanMiXSwibmFtZXMiOlsiSDIiLCJzdHlsZWQiLCJBdXRob3JMYWJlbCIsIlB1Ymxpc2hlZEF0IiwiV3JhcHBlciIsIkNhcmQiLCJpZCIsInRpdGxlIiwiY29udGVudCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZW1haWwiLCJwdWJsaXNoZWRfYXQiLCJzbHVnIiwidXNlU3RhdGUiLCJjYXJkSG92ZXJDbGFzcyIsInNldENhcmRIb3ZlckNsYXNzIiwiaGFuZGxlQ2FyZEhvdmVyIiwiaGFuZGxlQ2FyZE1vdXNlTGVhdmUiLCJwb3N0RGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0EsSUFBTUEsRUFBRSxHQUFHQyxvRUFBSDtBQUFBO0FBQUE7QUFBQSxhQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FERSxDQUFSO0tBQU1ELEU7QUFJTixJQUFNRSxXQUFXLEdBQUdELG1FQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ1g7QUFBQTtBQUFBO0FBQUEsQ0FEVyxDQUFqQjtNQUFNQyxXO0FBR04sSUFBTUMsV0FBVyxHQUFHRixzRUFBSDtBQUFBO0FBQUE7QUFBQSxhQUNYO0FBQUE7QUFBQTtBQUFBLENBRFcsQ0FBakI7TUFBTUUsVztBQUlOLElBQU1DLE9BQU8sR0FBR0gseUVBQUg7QUFBQTtBQUFBO0FBQUEsNkJBQ1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBRE8sRUFFVEMsV0FGUyxFQUVNQyxXQUZOLEVBR0w7QUFBQTtBQUFBLENBSEssQ0FBYjtNQUFNQyxPOztBQU9OLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTRFO0FBQUE7O0FBQUEsTUFBekVDLEVBQXlFLFFBQXpFQSxFQUF5RTtBQUFBLE1BQXJFQyxLQUFxRSxRQUFyRUEsS0FBcUU7QUFBQSxNQUE5REMsT0FBOEQsUUFBOURBLE9BQThEO0FBQUEsTUFBckRDLFNBQXFELFFBQXJEQSxTQUFxRDtBQUFBLE1BQTFDQyxRQUEwQyxRQUExQ0EsUUFBMEM7QUFBQSxNQUFoQ0MsS0FBZ0MsUUFBaENBLEtBQWdDO0FBQUEsTUFBekJDLFlBQXlCLFFBQXpCQSxZQUF5QjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDM0NDLCtDQUFRLENBQUMsSUFBRCxDQURtQztBQUFBLE1BQ2hGQyxjQURnRjtBQUFBLE1BQ2hFQyxpQkFEZ0U7O0FBRXZGLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxXQUFNRCxpQkFBaUIsQ0FBQyxTQUFELENBQXZCO0FBQUEsR0FBeEI7O0FBQ0EsTUFBTUUsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QjtBQUFBLFdBQU1GLGlCQUFpQixDQUFDLElBQUQsQ0FBdkI7QUFBQSxHQUE3Qjs7QUFDQSxNQUFNRyxRQUFRLEdBQUcsSUFBSUMsSUFBSixDQUFTUixZQUFULENBQWpCO0FBQ0Esc0JBQ0UsOERBQUMsT0FBRDtBQUFTLGFBQVMsWUFBS0csY0FBYyxJQUFJQSxjQUF2QixDQUFsQjtBQUFBLDRCQUNFLDhEQUFDLEVBQUQ7QUFBSSxhQUFPLEVBQUVFLGVBQWI7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksc0JBQWVKLElBQWYsQ0FBVjtBQUFBLCtCQUNFO0FBQUEsb0JBQUlOO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRSw4REFBQyxXQUFEO0FBQUEsNkJBQW9CRSxTQUFwQixjQUFpQ0MsUUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFRRSw4REFBQyxXQUFEO0FBQUEsZ0JBQWNTLFFBQVEsQ0FBQ0Usa0JBQVQsQ0FBNEIsT0FBNUIsRUFBcUNDLEtBQXJDLENBQTJDLENBQTNDLEVBQThDLENBQUMsQ0FBL0M7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQWpCRDs7R0FBTWpCLEk7O01BQUFBLEk7QUFtQk4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy5kOGJhOTZiMGY5MDhjY2FlMjA5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCJcclxuXHJcbmNvbnN0IEgyID0gc3R5bGVkLmgyYFxyXG4gICR7dHdgdGV4dC14bCBmb250LWJsYWNrIG1iLTMgbGVhZGluZy1ub3JtYWwgYm9yZGVyLWItMiAgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOihib3JkZXItYXJnby1ibHVlLTQwMClgfVxyXG5gXHJcblxyXG5jb25zdCBBdXRob3JMYWJlbCA9IHN0eWxlZC5wYFxyXG4gICR7dHdgdGV4dC14c2B9XHJcbmBcclxuY29uc3QgUHVibGlzaGVkQXQgPSBzdHlsZWQuc3BhbmBcclxuICAke3R3YHRleHQteHNgfVxyXG5gXHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmFydGljbGVgXHJcbiAgJHt0d2Byb3VuZGVkLWxnIGJnLXdoaXRlIHAtNiBzaGFkb3ctbGcgaG92ZXI6c2hhZG93LXhsYH1cclxuICAke0F1dGhvckxhYmVsfSwke1B1Ymxpc2hlZEF0fSB7XHJcbiAgICAke3R3YGxlYWRpbmctbm9uZWB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBDYXJkID0gKHsgaWQsIHRpdGxlLCBjb250ZW50LCBmaXJzdG5hbWUsIGxhc3RuYW1lLCBlbWFpbCwgcHVibGlzaGVkX2F0LCBzbHVnIH0pID0+IHtcclxuICBjb25zdCBbY2FyZEhvdmVyQ2xhc3MsIHNldENhcmRIb3ZlckNsYXNzXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgaGFuZGxlQ2FyZEhvdmVyID0gKCkgPT4gc2V0Q2FyZEhvdmVyQ2xhc3MoXCJob3ZlcmVkXCIpXHJcbiAgY29uc3QgaGFuZGxlQ2FyZE1vdXNlTGVhdmUgPSAoKSA9PiBzZXRDYXJkSG92ZXJDbGFzcyhudWxsKVxyXG4gIGNvbnN0IHBvc3REYXRlID0gbmV3IERhdGUocHVibGlzaGVkX2F0KVxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlciBjbGFzc05hbWU9e2Ake2NhcmRIb3ZlckNsYXNzICYmIGNhcmRIb3ZlckNsYXNzfWB9PlxyXG4gICAgICA8SDIgb25Ib3Zlcj17aGFuZGxlQ2FyZEhvdmVyfT5cclxuICAgICAgICA8TGluayBocmVmPXtgYmxvZy9wb3N0LyR7c2x1Z31gfT5cclxuICAgICAgICAgIDxhPnt0aXRsZX08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L0gyPlxyXG4gICAgICB7LyogPGRpdj57Y29udGVudH08L2Rpdj4gKi99XHJcbiAgICAgIDxBdXRob3JMYWJlbD57YGJ5ICR7Zmlyc3RuYW1lfSAke2xhc3RuYW1lfWB9PC9BdXRob3JMYWJlbD5cclxuICAgICAgPFB1Ymxpc2hlZEF0Pntwb3N0RGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJrby1LUlwiKS5zbGljZSgwLCAtMSl9PC9QdWJsaXNoZWRBdD5cclxuICAgIDwvV3JhcHBlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==