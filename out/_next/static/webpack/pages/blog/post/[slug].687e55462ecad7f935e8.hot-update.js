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
    _this = undefined,
    _s = $RefreshSig$();






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
_c = FallbackContainer;
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
_c2 = Container;
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "slug__ContentWrapper",
  componentId: "oaeoaf-2"
})(["max-width:800px;", ""], {
  "marginLeft": "auto",
  "marginRight": "auto",
  "paddingLeft": "1.5rem",
  "paddingRight": "1.5rem"
});
_c3 = ContentWrapper;
var ContentBody = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.p.withConfig({
  displayName: "slug__ContentBody",
  componentId: "oaeoaf-3"
})(["", ""], {
  "fontSize": "1rem",
  "lineHeight": "2"
});
_c4 = ContentBody;
var BlogTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.h1.withConfig({
  displayName: "slug__BlogTitle",
  componentId: "oaeoaf-4"
})(["", ""], {
  "fontSize": "2.25rem",
  "lineHeight": "2.5rem",
  "fontWeight": "700",
  "marginBottom": "1.5rem"
});
_c5 = BlogTitle;
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
_c6 = MainHeadingFooter;
var PostDate = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "slug__PostDate",
  componentId: "oaeoaf-6"
})(["font-weight:500;", ":after{margin-left:1rem;content:\"\u2022\";}"], {
  "fontSize": "1.125rem",
  "lineHeight": "1.75rem"
});
_c7 = PostDate;
var Author = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "slug__Author",
  componentId: "oaeoaf-7"
})(["", ""], {
  "fontSize": "1.125rem",
  "lineHeight": "1.75rem"
});
_c8 = Author;
var BackButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.default)(components_Icons__WEBPACK_IMPORTED_MODULE_4__.ArrowLeftCircle).withConfig({
  displayName: "slug__BackButton",
  componentId: "oaeoaf-8"
})(["", ""], {
  "color": "var(--argo-blue)",
  "marginBottom": "1rem"
});
_c9 = BackButton;
var MainHeading = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "slug__MainHeading",
  componentId: "oaeoaf-9"
})(["", ""], {
  "display": "flex",
  "flexDirection": "column",
  "paddingTop": "1rem",
  "paddingBottom": "1rem"
});
_c10 = MainHeading;

var PostPage = function PostPage(_ref) {
  _s();

  var post = _ref.post;
  console.log("post: ", post);
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(); // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running

  if (router.isFallback) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FallbackContainer, {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 12
    }, _this);
  } else {
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
                lineNumber: 71,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BlogTitle, {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainHeadingFooter, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostDate, {
              children: postDate.toLocaleDateString("ko-KR").slice(0, -1)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Author, {
              children: "".concat(firstname, " ").concat(lastname)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentBody, {
          children: content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this);
  }
};

_s(PostPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c11 = PostPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (PostPage);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "FallbackContainer");
$RefreshReg$(_c2, "Container");
$RefreshReg$(_c3, "ContentWrapper");
$RefreshReg$(_c4, "ContentBody");
$RefreshReg$(_c5, "BlogTitle");
$RefreshReg$(_c6, "MainHeadingFooter");
$RefreshReg$(_c7, "PostDate");
$RefreshReg$(_c8, "Author");
$RefreshReg$(_c9, "BackButton");
$RefreshReg$(_c10, "MainHeading");
$RefreshReg$(_c11, "PostPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9wb3N0L1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJGYWxsYmFja0NvbnRhaW5lciIsInN0eWxlZCIsIkNvbnRhaW5lciIsIkNvbnRlbnRXcmFwcGVyIiwiQ29udGVudEJvZHkiLCJCbG9nVGl0bGUiLCJNYWluSGVhZGluZ0Zvb3RlciIsIlBvc3REYXRlIiwiQXV0aG9yIiwiQmFja0J1dHRvbiIsIkFycm93TGVmdENpcmNsZSIsIk1haW5IZWFkaW5nIiwiUG9zdFBhZ2UiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJpZCIsInRpdGxlIiwiY29udGVudCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZW1haWwiLCJwdWJsaXNoZWRfYXQiLCJwb3N0RGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBLElBQU1BLGlCQUFpQixHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxhQUNqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBRGlCLENBQXZCO0tBQU1ELGlCO0FBSU4sSUFBTUUsU0FBUyxHQUFHRCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxhQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FEUyxDQUFmO01BQU1DLFM7QUFHTixJQUFNQyxjQUFjLEdBQUdGLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDZCQUVkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUZjLENBQXBCO01BQU1FLGM7QUFLTixJQUFNQyxXQUFXLEdBQUdILG1FQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ1g7QUFBQTtBQUFBO0FBQUEsQ0FEVyxDQUFqQjtNQUFNRyxXO0FB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O0FBQUE7QUFBQTtBQUFBLGlCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQW1CRDtBQUNGLENBL0JEOztHQUFNVCxRO1VBRVdLLGtEOzs7T0FGWEwsUTs7QUFpQ04sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy9wb3N0L1tzbHVnXS42ODdlNTU0NjJlY2FkN2Y5MzVlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7IGZldGNoU3RyYXBpIH0gZnJvbSBcImxpYi9hcGlcIlxyXG5pbXBvcnQgeyBBcnJvd0xlZnRDaXJjbGUgfSBmcm9tIFwiY29tcG9uZW50cy9JY29uc1wiXHJcblxyXG5jb25zdCBGYWxsYmFja0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2B3LWZ1bGwgcHQtMjQgbGc6KHB0LTQwKSBtaW4taC1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJgfVxyXG5gXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICR7dHdgdy1mdWxsIHB0LTI0IGxnOihwdC00MCkgbWluLWgtc2NyZWVuYH1cclxuYFxyXG5jb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAke3R3YG14LWF1dG8gcHgtNmB9XHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnRCb2R5ID0gc3R5bGVkLnBgXHJcbiAgJHt0d2B0ZXh0LWJhc2UgbGVhZGluZy1sb29zZWB9XHJcbmBcclxuXHJcbmNvbnN0IEJsb2dUaXRsZSA9IHN0eWxlZC5oMWBcclxuICAke3R3YHRleHQtNHhsIGZvbnQtYm9sZCBtYi02YH1cclxuYFxyXG5cclxuY29uc3QgTWFpbkhlYWRpbmdGb290ZXIgPSBzdHlsZWQuZGl2YFxyXG4gICR7dHdgZmxleCBzcGFjZS14LTRgfVxyXG5gXHJcblxyXG5jb25zdCBQb3N0RGF0ZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgJHt0d2B0ZXh0LWxnYH1cclxuICA6YWZ0ZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBjb250ZW50OiBcIuKAolwiO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgQXV0aG9yID0gc3R5bGVkLnNwYW5gXHJcbiAgJHt0d2B0ZXh0LWxnYH1cclxuYFxyXG5cclxuY29uc3QgQmFja0J1dHRvbiA9IHN0eWxlZChBcnJvd0xlZnRDaXJjbGUpYFxyXG4gICR7dHdgdGV4dC1hcmdvLWJsdWUtNDAwIG1iLTRgfVxyXG5gXHJcblxyXG5jb25zdCBNYWluSGVhZGluZyA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2BmbGV4IGZsZXgtY29sIHB5LTRgfVxyXG5gXHJcblxyXG5jb25zdCBQb3N0UGFnZSA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwicG9zdDogXCIsIHBvc3QpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgLy8gSWYgdGhlIHBhZ2UgaXMgbm90IHlldCBnZW5lcmF0ZWQsIHRoaXMgd2lsbCBiZSBkaXNwbGF5ZWRcclxuICAvLyBpbml0aWFsbHkgdW50aWwgZ2V0U3RhdGljUHJvcHMoKSBmaW5pc2hlcyBydW5uaW5nXHJcbiAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gPEZhbGxiYWNrQ29udGFpbmVyPkxvYWRpbmcuLi48L0ZhbGxiYWNrQ29udGFpbmVyPlxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB7IGlkLCB0aXRsZSwgY29udGVudCwgZmlyc3RuYW1lLCBsYXN0bmFtZSwgZW1haWwsIHB1Ymxpc2hlZF9hdCB9ID0gcG9zdFxyXG4gICAgY29uc3QgcG9zdERhdGUgPSBuZXcgRGF0ZShwdWJsaXNoZWRfYXQpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxDb250ZW50V3JhcHBlcj5cclxuICAgICAgICAgIDxNYWluSGVhZGluZz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8QmFja0J1dHRvbiBzaXplPXszMn0gLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPEJsb2dUaXRsZT57dGl0bGV9PC9CbG9nVGl0bGU+XHJcbiAgICAgICAgICAgIDxNYWluSGVhZGluZ0Zvb3Rlcj5cclxuICAgICAgICAgICAgICA8UG9zdERhdGU+e3Bvc3REYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImtvLUtSXCIpLnNsaWNlKDAsIC0xKX08L1Bvc3REYXRlPlxyXG4gICAgICAgICAgICAgIDxBdXRob3I+e2Ake2ZpcnN0bmFtZX0gJHtsYXN0bmFtZX1gfTwvQXV0aG9yPlxyXG4gICAgICAgICAgICA8L01haW5IZWFkaW5nRm9vdGVyPlxyXG4gICAgICAgICAgPC9NYWluSGVhZGluZz5cclxuICAgICAgICAgIDxDb250ZW50Qm9keT57Y29udGVudH08L0NvbnRlbnRCb2R5PlxyXG4gICAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFBhZ2VcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcywgcXVlcnkgfSkge1xyXG4gIGNvbnN0IHsgc2x1ZyB9ID0gcGFyYW1zXHJcbiAgY29uc3QgcGF0aCA9IGAvYmxvZy1wb3N0cz9zbHVnPSR7c2x1Z31gXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hTdHJhcGkocGF0aClcclxuICBjb25zdCBwb3N0ID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdDogcG9zdFswXSxcclxuICAgIH0sXHJcbiAgICAvLyBOZXh0LmpzIHdpbGwgYXR0ZW1wdCB0byByZS1nZW5lcmF0ZSB0aGUgcGFnZTpcclxuICAgIC8vIC0gV2hlbiBhIHJlcXVlc3QgY29tZXMgaW5cclxuICAgIC8vIC0gQXQgbW9zdCBvbmNlIGV2ZXJ5IDEwIHNlY29uZHNcclxuICAgIC8vIHJldmFsaWRhdGU6IDM2MDAsIC8vIEluIHNlY29uZHNcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBjb250ZW50VVJMID0gYC9ibG9nLXBvc3RzYFxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoU3RyYXBpKGNvbnRlbnRVUkwpXHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHsgc2x1ZyB9KSA9PiAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pKVxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==