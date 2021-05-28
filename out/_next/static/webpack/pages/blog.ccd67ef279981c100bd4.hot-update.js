self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog/index.js":
/*!*****************************!*\
  !*** ./pages/blog/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var C_Users_4hyun_Documents_1_Argo_web_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var components_Blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Blog */ "./components/Blog/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\4hyun\\Documents\\1-Argo\\web\\argo-web-next\\pages\\blog\\index.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_4hyun_Documents_1_Argo_web_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "blog__Container",
  componentId: "sc-10r19gs-0"
})(["max-width:1200px;", ""], {
  "width": "100%",
  "paddingTop": "6rem",
  "minHeight": "100vh",
  "paddingLeft": "1.5rem",
  "paddingRight": "1.5rem",
  "marginLeft": "auto",
  "marginRight": "auto",
  "@media (min-width: 1024px)": {
    "paddingTop": "10rem"
  }
});

var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "blog__ContentWrapper",
  componentId: "sc-10r19gs-1"
})(["", ""], {
  "width": "100%",
  "marginLeft": "auto",
  "marginRight": "auto",
  "@media (min-width: 640px)": {
    "maxWidth": "640px"
  },
  "@media (min-width: 768px)": {
    "maxWidth": "768px"
  },
  "@media (min-width: 1024px)": {
    "maxWidth": "1024px"
  },
  "@media (min-width: 1280px)": {
    "maxWidth": "1280px"
  },
  "@media (min-width: 1536px)": {
    "maxWidth": "1536px"
  }
});

var PageHeading = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.h1.withConfig({
  displayName: "blog__PageHeading",
  componentId: "sc-10r19gs-2"
})(["", ""], {
  "width": "100%",
  "marginLeft": "auto",
  "marginRight": "auto",
  "@media (min-width: 640px)": {
    "maxWidth": "640px"
  },
  "@media (min-width: 768px)": {
    "maxWidth": "768px"
  },
  "@media (min-width: 1024px)": {
    "maxWidth": "1024px"
  },
  "@media (min-width: 1280px)": {
    "maxWidth": "1280px"
  },
  "@media (min-width: 1536px)": {
    "maxWidth": "1536px"
  },
  "fontSize": "1.875rem",
  "lineHeight": "2.25rem",
  "fontWeight": "700"
});

var List = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.ul.withConfig({
  displayName: "blog__List",
  componentId: "sc-10r19gs-3"
})(["", ""], {
  "display": "flex",
  "flexDirection": "column",
  "marginTop": "1rem",
  "@media (min-width: 768px)": {
    "flexDirection": "row"
  }
});

var BlogMainPage = function BlogMainPage(_ref) {
  var posts = _ref.posts;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(PageHeading, {
      children: "Blog"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ContentWrapper, {
      children: posts.map(function (blogProps) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(List, {
          children: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(components_Blog__WEBPACK_IMPORTED_MODULE_3__.BlogCard, _objectSpread(_objectSpread({}, blogProps), {}, {
            key: blogProps.id,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 13
            }
          }))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, _this);
};

_c = BlogMainPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (BlogMainPage); // revalidation is enabled and a new request comes in

var _c;

$RefreshReg$(_c, "BlogMainPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJDb250ZW50V3JhcHBlciIsIlBhZ2VIZWFkaW5nIiwiTGlzdCIsIkJsb2dNYWluUGFnZSIsInBvc3RzIiwibWFwIiwiYmxvZ1Byb3BzIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSw4QkFFVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FGUyxDQUFmOztBQUtBLElBQU1DLGNBQWMsR0FBR0QscUVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBRGMsQ0FBcEI7O0FBSUEsSUFBTUUsV0FBVyxHQUFHRixvRUFBSDtBQUFBO0FBQUE7QUFBQSxhQUNYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FEVyxDQUFqQjs7QUFHQSxJQUFNRyxJQUFJLEdBQUdILG9FQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQURJLENBQVY7O0FBSUEsSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNsQyxzQkFDRSw4REFBQyxTQUFEO0FBQUEsNEJBQ0UsOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsY0FBRDtBQUFBLGdCQUNHQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxTQUFEO0FBQUEsNEJBQ1QsOERBQUMsSUFBRDtBQUFBLGlDQUNFLHFEQUFDLHFEQUFELGtDQUFjQSxTQUFkO0FBQXlCLGVBQUcsRUFBRUEsU0FBUyxDQUFDQyxFQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQWJEOztLQUFNSixZOztBQWVOLCtEQUFlQSxZQUFmLEUsQ0FFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLmNjZDY3ZWYyNzk5ODFjMTAwYmQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHR3LCB7IHN0eWxlZCB9IGZyb20gXCJ0d2luLm1hY3JvXCJcclxuaW1wb3J0IHsgZmV0Y2hTdHJhcGkgfSBmcm9tIFwibGliL2FwaVwiXHJcbmltcG9ydCB7IEJsb2dDYXJkIH0gZnJvbSBcImNvbXBvbmVudHMvQmxvZ1wiXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICR7dHdgdy1mdWxsIHB0LTI0IGxnOihwdC00MCkgbWluLWgtc2NyZWVuIHB4LTYgbXgtYXV0b2B9XHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAke3R3YGNvbnRhaW5lciBteC1hdXRvYH1cclxuYFxyXG5cclxuY29uc3QgUGFnZUhlYWRpbmcgPSBzdHlsZWQuaDFgXHJcbiAgJHt0d2Bjb250YWluZXIgbXgtYXV0byB0ZXh0LTN4bCBmb250LWJvbGRgfVxyXG5gXHJcbmNvbnN0IExpc3QgPSBzdHlsZWQudWxgXHJcbiAgJHt0d2BmbGV4IGZsZXgtY29sIG1kOihmbGV4LXJvdykgbXQtNGB9XHJcbmBcclxuXHJcbmNvbnN0IEJsb2dNYWluUGFnZSA9ICh7IHBvc3RzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFBhZ2VIZWFkaW5nPkJsb2c8L1BhZ2VIZWFkaW5nPlxyXG4gICAgICA8Q29udGVudFdyYXBwZXI+XHJcbiAgICAgICAge3Bvc3RzLm1hcCgoYmxvZ1Byb3BzKSA9PiAoXHJcbiAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgPEJsb2dDYXJkIHsuLi5ibG9nUHJvcHN9IGtleT17YmxvZ1Byb3BzLmlkfSAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nTWFpblBhZ2VcclxuXHJcbi8vIHJldmFsaWRhdGlvbiBpcyBlbmFibGVkIGFuZCBhIG5ldyByZXF1ZXN0IGNvbWVzIGluXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBwYXRoID0gXCIvYmxvZy1wb3N0c1wiXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hTdHJhcGkocGF0aClcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3RzLFxyXG4gICAgfSxcclxuICAgIC8vIE5leHQuanMgd2lsbCBhdHRlbXB0IHRvIHJlLWdlbmVyYXRlIHRoZSBwYWdlOlxyXG4gICAgLy8gLSBXaGVuIGEgcmVxdWVzdCBjb21lcyBpblxyXG4gICAgLy8gLSBBdCBtb3N0IG9uY2UgZXZlcnkgMTAgc2Vjb25kc1xyXG4gICAgcmV2YWxpZGF0ZTogMTAsIC8vIEluIHNlY29uZHNcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==