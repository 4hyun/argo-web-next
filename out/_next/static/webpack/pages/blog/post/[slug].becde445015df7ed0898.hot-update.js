self["webpackHotUpdate_N_E"]("pages/blog/post/[slug]",{

/***/ "./pages/blog/post/[slug].js":
/*!***********************************!*\
  !*** ./pages/blog/post/[slug].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Icons */ "./components/Icons/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\4hyun\\Documents\\1-Argo\\web\\argo-web-next\\pages\\blog\\post\\[slug].js",
    _this = undefined;






var FallbackContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "slug__FallbackContainer",
  componentId: "oaeoaf-0"
})(["", ""], {
  "width": "100%",
  "paddingTop": "6rem",
  "minHeight": "100vh",
  "display": "flex",
  "justifyContent": "center",
  "alignItems": "center",
  "@media (min-width: 1024px)": {
    "paddingTop": "10rem"
  }
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "slug__Container",
  componentId: "oaeoaf-1"
})(["", ""], {
  "width": "100%",
  "paddingTop": "6rem",
  "minHeight": "100vh",
  "@media (min-width: 1024px)": {
    "paddingTop": "10rem"
  }
});
_c = Container;
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "slug__ContentWrapper",
  componentId: "oaeoaf-2"
})(["max-width:800px;", ""], {
  "marginLeft": "auto",
  "marginRight": "auto",
  "paddingLeft": "1.5rem",
  "paddingRight": "1.5rem"
});
_c2 = ContentWrapper;
var ContentBody = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.p.withConfig({
  displayName: "slug__ContentBody",
  componentId: "oaeoaf-3"
})(["", ""], {
  "fontSize": "1rem",
  "lineHeight": "2"
});
_c3 = ContentBody;
var BlogTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.h1.withConfig({
  displayName: "slug__BlogTitle",
  componentId: "oaeoaf-4"
})(["", ""], {
  "fontSize": "2.25rem",
  "lineHeight": "2.5rem",
  "fontWeight": "700",
  "marginBottom": "1.5rem"
});
_c4 = BlogTitle;
var MainHeadingFooter = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "slug__MainHeadingFooter",
  componentId: "oaeoaf-5"
})(["", ""], {
  "display": "flex",
  "> :not([hidden]) ~ :not([hidden])": {
    "--tw-space-x-reverse": 0,
    "marginRight": "calc(1rem * var(--tw-space-x-reverse))",
    "marginLeft": "calc(1rem * calc(1 - var(--tw-space-x-reverse)))"
  }
});
_c5 = MainHeadingFooter;
var PostDate = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "slug__PostDate",
  componentId: "oaeoaf-6"
})(["font-weight:500;", ":after{margin-left:1rem;content:\"\u2022\";}"], {
  "fontSize": "1.125rem",
  "lineHeight": "1.75rem"
});
_c6 = PostDate;
var Author = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "slug__Author",
  componentId: "oaeoaf-7"
})(["", ""], {
  "fontSize": "1.125rem",
  "lineHeight": "1.75rem"
});
_c7 = Author;
var BackButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.default)(components_Icons__WEBPACK_IMPORTED_MODULE_4__.ArrowLeftCircle).withConfig({
  displayName: "slug__BackButton",
  componentId: "oaeoaf-8"
})(["", ""], {
  "color": "var(--argo-blue)",
  "marginBottom": "1rem"
});
_c8 = BackButton;
var MainHeading = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "slug__MainHeading",
  componentId: "oaeoaf-9"
})(["", ""], {
  "display": "flex",
  "flexDirection": "column",
  "paddingTop": "1rem",
  "paddingBottom": "1rem"
});
_c9 = MainHeading;

var PostPage = function PostPage(_ref) {
  var post = _ref.post;
  var id = post.id,
      title = post.title,
      content = post.content,
      firstname = post.firstname,
      lastname = post.lastname,
      email = post.email,
      published_at = post.published_at;
  var postDate = new Date(published_at);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainHeading, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/blog",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BackButton, {
              size: 32
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BlogTitle, {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainHeadingFooter, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostDate, {
            children: postDate.toLocaleDateString("ko-KR").slice(0, -1)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Author, {
            children: "".concat(firstname, " ").concat(lastname)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentBody, {
        children: content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, _this);
};

_c10 = PostPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (PostPage);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "ContentWrapper");
$RefreshReg$(_c3, "ContentBody");
$RefreshReg$(_c4, "BlogTitle");
$RefreshReg$(_c5, "MainHeadingFooter");
$RefreshReg$(_c6, "PostDate");
$RefreshReg$(_c7, "Author");
$RefreshReg$(_c8, "BackButton");
$RefreshReg$(_c9, "MainHeading");
$RefreshReg$(_c10, "PostPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9wb3N0L1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJGYWxsYmFja0NvbnRhaW5lciIsInN0eWxlZCIsIkNvbnRhaW5lciIsIkNvbnRlbnRXcmFwcGVyIiwiQ29udGVudEJvZHkiLCJCbG9nVGl0bGUiLCJNYWluSGVhZGluZ0Zvb3RlciIsIlBvc3REYXRlIiwiQXV0aG9yIiwiQmFja0J1dHRvbiIsIkFycm93TGVmdENpcmNsZSIsIk1haW5IZWFkaW5nIiwiUG9zdFBhZ2UiLCJwb3N0IiwiaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImVtYWlsIiwicHVibGlzaGVkX2F0IiwicG9zdERhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBLElBQU1BLGlCQUFpQixHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxhQUNqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBRGlCLENBQXZCO0FBSUEsSUFBTUMsU0FBUyxHQUFHRCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxhQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FEUyxDQUFmO0tBQU1DLFM7QUFHTixJQUFNQyxjQUFjLEdBQUdGLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDZCQUVkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUZjLENBQXBCO01BQU1FLGM7QUFLTixJQUFNQyxXQUFXLEdBQUdILG1FQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ1g7QUFBQTtBQUFBO0FBQUEsQ0FEVyxDQUFqQjtNQUFNRyxXO0FBSU4sSUFBTUMsU0FBUyxHQUFHSixvRUFBSDtBQUFBO0FBQUE7QUFBQSxhQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQURTLENBQWY7TUFBTUksUztBQUlOLElBQU1DLGlCQUFpQixHQUFHTCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxhQUNqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBRGlCLENBQXZCO01BQU1LLGlCO0FBSU4sSUFBTUMsUUFBUSxHQUFHTixzRUFBSDtBQUFBO0FBQUE7QUFBQSx5RUFFUjtBQUFBO0FBQUE7QUFBQSxDQUZRLENBQWQ7TUFBTU0sUTtBQVNOLElBQU1DLE1BQU0sR0FBR1Asc0VBQUg7QUFBQTtBQUFBO0FBQUEsYUFDTjtBQUFBO0FBQUE7QUFBQSxDQURNLENBQVo7TUFBTU8sTTtBQUlOLElBQU1DLFVBQVUsR0FBR1IsMERBQU0sQ0FBQ1MsNkRBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxhQUNWO0FBQUE7QUFBQTtBQUFBLENBRFUsQ0FBaEI7TUFBTUQsVTtBQUlOLElBQU1FLFdBQVcsR0FBR1YscUVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FEVyxDQUFqQjtNQUFNVSxXOztBQUlOLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFBQSxNQUNyQkMsRUFEcUIsR0FDNENELElBRDVDLENBQ3JCQyxFQURxQjtBQUFBLE1BQ2pCQyxLQURpQixHQUM0Q0YsSUFENUMsQ0FDakJFLEtBRGlCO0FBQUEsTUFDVkMsT0FEVSxHQUM0Q0gsSUFENUMsQ0FDVkcsT0FEVTtBQUFBLE1BQ0RDLFNBREMsR0FDNENKLElBRDVDLENBQ0RJLFNBREM7QUFBQSxNQUNVQyxRQURWLEdBQzRDTCxJQUQ1QyxDQUNVSyxRQURWO0FBQUEsTUFDb0JDLEtBRHBCLEdBQzRDTixJQUQ1QyxDQUNvQk0sS0FEcEI7QUFBQSxNQUMyQkMsWUFEM0IsR0FDNENQLElBRDVDLENBQzJCTyxZQUQzQjtBQUU3QixNQUFNQyxRQUFRLEdBQUcsSUFBSUMsSUFBSixDQUFTRixZQUFULENBQWpCO0FBQ0Esc0JBQ0UsOERBQUMsU0FBRDtBQUFBLDJCQUNFLDhEQUFDLGNBQUQ7QUFBQSw4QkFDRSw4REFBQyxXQUFEO0FBQUEsZ0NBQ0UsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsT0FBWDtBQUFBLGlDQUNFO0FBQUEsbUNBQ0UsOERBQUMsVUFBRDtBQUFZLGtCQUFJLEVBQUU7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUUsOERBQUMsU0FBRDtBQUFBLG9CQUFZTDtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUFPRSw4REFBQyxpQkFBRDtBQUFBLGtDQUNFLDhEQUFDLFFBQUQ7QUFBQSxzQkFBV00sUUFBUSxDQUFDRSxrQkFBVCxDQUE0QixPQUE1QixFQUFxQ0MsS0FBckMsQ0FBMkMsQ0FBM0MsRUFBOEMsQ0FBQyxDQUEvQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyxNQUFEO0FBQUEsZ0NBQVlQLFNBQVosY0FBeUJDLFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFhRSw4REFBQyxXQUFEO0FBQUEsa0JBQWNGO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1CRCxDQXRCRDs7T0FBTUosUTs7QUF3Qk4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy9wb3N0L1tzbHVnXS5iZWNkZTQ0NTAxNWRmN2VkMDg5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7IGZldGNoU3RyYXBpIH0gZnJvbSBcImxpYi9hcGlcIlxyXG5pbXBvcnQgeyBBcnJvd0xlZnRDaXJjbGUgfSBmcm9tIFwiY29tcG9uZW50cy9JY29uc1wiXHJcblxyXG5jb25zdCBGYWxsYmFja0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2B3LWZ1bGwgcHQtMjQgbGc6KHB0LTQwKSBtaW4taC1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJgfVxyXG5gXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICR7dHdgdy1mdWxsIHB0LTI0IGxnOihwdC00MCkgbWluLWgtc2NyZWVuYH1cclxuYFxyXG5jb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAke3R3YG14LWF1dG8gcHgtNmB9XHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnRCb2R5ID0gc3R5bGVkLnBgXHJcbiAgJHt0d2B0ZXh0LWJhc2UgbGVhZGluZy1sb29zZWB9XHJcbmBcclxuXHJcbmNvbnN0IEJsb2dUaXRsZSA9IHN0eWxlZC5oMWBcclxuICAke3R3YHRleHQtNHhsIGZvbnQtYm9sZCBtYi02YH1cclxuYFxyXG5cclxuY29uc3QgTWFpbkhlYWRpbmdGb290ZXIgPSBzdHlsZWQuZGl2YFxyXG4gICR7dHdgZmxleCBzcGFjZS14LTRgfVxyXG5gXHJcblxyXG5jb25zdCBQb3N0RGF0ZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgJHt0d2B0ZXh0LWxnYH1cclxuICA6YWZ0ZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBjb250ZW50OiBcIuKAolwiO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgQXV0aG9yID0gc3R5bGVkLnNwYW5gXHJcbiAgJHt0d2B0ZXh0LWxnYH1cclxuYFxyXG5cclxuY29uc3QgQmFja0J1dHRvbiA9IHN0eWxlZChBcnJvd0xlZnRDaXJjbGUpYFxyXG4gICR7dHdgdGV4dC1hcmdvLWJsdWUtNDAwIG1iLTRgfVxyXG5gXHJcblxyXG5jb25zdCBNYWluSGVhZGluZyA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2BmbGV4IGZsZXgtY29sIHB5LTRgfVxyXG5gXHJcblxyXG5jb25zdCBQb3N0UGFnZSA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IHsgaWQsIHRpdGxlLCBjb250ZW50LCBmaXJzdG5hbWUsIGxhc3RuYW1lLCBlbWFpbCwgcHVibGlzaGVkX2F0IH0gPSBwb3N0XHJcbiAgY29uc3QgcG9zdERhdGUgPSBuZXcgRGF0ZShwdWJsaXNoZWRfYXQpXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxDb250ZW50V3JhcHBlcj5cclxuICAgICAgICA8TWFpbkhlYWRpbmc+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPEJhY2tCdXR0b24gc2l6ZT17MzJ9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxCbG9nVGl0bGU+e3RpdGxlfTwvQmxvZ1RpdGxlPlxyXG4gICAgICAgICAgPE1haW5IZWFkaW5nRm9vdGVyPlxyXG4gICAgICAgICAgICA8UG9zdERhdGU+e3Bvc3REYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImtvLUtSXCIpLnNsaWNlKDAsIC0xKX08L1Bvc3REYXRlPlxyXG4gICAgICAgICAgICA8QXV0aG9yPntgJHtmaXJzdG5hbWV9ICR7bGFzdG5hbWV9YH08L0F1dGhvcj5cclxuICAgICAgICAgIDwvTWFpbkhlYWRpbmdGb290ZXI+XHJcbiAgICAgICAgPC9NYWluSGVhZGluZz5cclxuICAgICAgICA8Q29udGVudEJvZHk+e2NvbnRlbnR9PC9Db250ZW50Qm9keT5cclxuICAgICAgPC9Db250ZW50V3JhcHBlcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFBhZ2VcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcywgcXVlcnkgfSkge1xyXG4gIGNvbnN0IHsgc2x1ZyB9ID0gcGFyYW1zXHJcbiAgY29uc3QgcGF0aCA9IGAvYmxvZy1wb3N0cz9zbHVnPSR7c2x1Z31gXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hTdHJhcGkocGF0aClcclxuICBjb25zdCBwb3N0ID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdDogcG9zdFswXSxcclxuICAgIH0sXHJcbiAgICAvLyBOZXh0LmpzIHdpbGwgYXR0ZW1wdCB0byByZS1nZW5lcmF0ZSB0aGUgcGFnZTpcclxuICAgIC8vIC0gV2hlbiBhIHJlcXVlc3QgY29tZXMgaW5cclxuICAgIC8vIC0gQXQgbW9zdCBvbmNlIGV2ZXJ5IDEwIHNlY29uZHNcclxuICAgIC8vIHJldmFsaWRhdGU6IDM2MDAsIC8vIEluIHNlY29uZHNcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBjb250ZW50VVJMID0gYC9ibG9nLXBvc3RzYFxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoU3RyYXBpKGNvbnRlbnRVUkwpXHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHsgc2x1ZyB9KSA9PiAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pKVxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==