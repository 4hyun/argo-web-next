self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Menu/index.js":
/*!**********************************!*\
  !*** ./components/Menu/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": function() { return /* binding */ Menu; },
/* harmony export */   "MenuItemA": function() { return /* binding */ MenuItemA; },
/* harmony export */   "MenuList": function() { return /* binding */ MenuList; },
/* harmony export */   "menuData": function() { return /* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_5__.default; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Icons */ "./components/Icons/index.js");
/* harmony import */ var configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! configs */ "./configs/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./components/Menu/data.js");
/* harmony import */ var components_Brand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Brand */ "./components/Brand/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\4hyun\\Documents\\1-Argo\\web\\argo-web-next\\components\\Menu\\index.js",
    _this = undefined;








var LogoCircleDark = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "Menu__LogoCircleDark",
  componentId: "sc-1yicai4-0"
})(["", ":after{display:block;content:\"\";padding-bottom:100%;}background:center / contain no-repeat url(", ");"], {
  "width": "4rem",
  "marginBottom": "2rem"
}, components_Brand__WEBPACK_IMPORTED_MODULE_6__.logoCircleDarkUrl));
_c = LogoCircleDark;
var StyledMenu = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.default)(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__.slide).withConfig({
  displayName: "Menu__StyledMenu",
  componentId: "sc-1yicai4-1"
})(["", " background:center / 100% 130% linear-gradient( 161deg,hsl(255deg 100% 27%) 17%,hsl(218deg 100% 34%) 36%,hsl(224deg 97% 36% / 88%) 66%,hsl(177deg 100% 50%) 100% );"], {
  "width": "100vw !important",
  "@media (min-width: 768px)": {
    "width": "25% !important"
  }
});
_c2 = StyledMenu;
var MenuItemA = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.a.withConfig({
  displayName: "Menu__MenuItemA",
  componentId: "sc-1yicai4-2"
})(["--margin-offset:-2rem;margin-left:var(--margin-offset);margin-right:var(--margin-offset);", ""], {
  "display": "flex",
  "fontSize": "1.5rem",
  "lineHeight": "2rem",
  "--tw-text-opacity": "1",
  "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
  "fontWeight": "700",
  ":hover": {
    "backgroundColor": "var(--argo-blue)"
  },
  "@media (min-width: 1024px)": {
    "fontSize": "1.875rem",
    "lineHeight": "2.25rem"
  }
});
var MenuList = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.ul.withConfig({
  displayName: "Menu__MenuList",
  componentId: "sc-1yicai4-3"
})(["", ""], {
  "display": "flex !important",
  "flexDirection": "column",
  "> :not([hidden]) ~ :not([hidden])": {
    "--tw-space-y-reverse": 0,
    "marginTop": "calc(1.5rem * calc(1 - var(--tw-space-y-reverse)))",
    "marginBottom": "calc(1.5rem * var(--tw-space-y-reverse))"
  },
  "paddingTop": "0.25rem"
});
var MenuHeader = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "Menu__MenuHeader",
  componentId: "sc-1yicai4-4"
})(["", ""], {
  "display": "flex !important",
  "width": "100%",
  "justifyContent": "space-between"
});
_c3 = MenuHeader;
var CloseButton = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((0,styled_components__WEBPACK_IMPORTED_MODULE_7__.default)(components_Icons__WEBPACK_IMPORTED_MODULE_3__.Close).withConfig({
  displayName: "Menu__CloseButton",
  componentId: "sc-1yicai4-5"
})(["", ""], {
  "cursor": "pointer"
}));
_c4 = CloseButton;

var Menu = function Menu(_ref) {
  var children = _ref.children,
      isOpen = _ref.isOpen,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledMenu, {
    right: true,
    isOpen: isOpen,
    outerContainerId: configs__WEBPACK_IMPORTED_MODULE_4__.MENU_EID,
    onClose: onClose,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuHeader, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogoCircleDark, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CloseButton, {
        size: 32,
        color: "#fff",
        onClick: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, _this);
};

_c5 = Menu;


var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "LogoCircleDark");
$RefreshReg$(_c2, "StyledMenu");
$RefreshReg$(_c3, "MenuHeader");
$RefreshReg$(_c4, "CloseButton");
$RefreshReg$(_c5, "Menu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51L2luZGV4LmpzIl0sIm5hbWVzIjpbIkxvZ29DaXJjbGVEYXJrIiwibWVtbyIsInN0eWxlZCIsImxvZ29DaXJjbGVEYXJrVXJsIiwiU3R5bGVkTWVudSIsIlNsaWRpbmdNZW51IiwiTWVudUl0ZW1BIiwiTWVudUxpc3QiLCJNZW51SGVhZGVyIiwiQ2xvc2VCdXR0b24iLCJDbG9zZSIsIk1lbnUiLCJjaGlsZHJlbiIsImlzT3BlbiIsIm9uQ2xvc2UiLCJNRU5VX0VJRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLGdCQUFHQywyQ0FBSSxDQUFDQyxxRUFBRDtBQUFBO0FBQUE7QUFBQSxvSEFDckI7QUFBQTtBQUFBO0FBQUEsQ0FEcUIsRUFPb0JDLCtEQVBwQixFQUEzQjtLQUFNSCxjO0FBVU4sSUFBTUksVUFBVSxHQUFHRiwwREFBTSxDQUFDRyxvREFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGdMQUNWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQURVLENBQWhCO01BQU1ELFU7QUFLTixJQUFNRSxTQUFTLEdBQUdKLG1FQUFIO0FBQUE7QUFBQTtBQUFBLHNHQUlUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUpTLENBQWY7QUFPQSxJQUFNSyxRQUFRLEdBQUdMLG9FQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FEUSxDQUFkO0FBSUEsSUFBTU0sVUFBVSxHQUFHTixxRUFBSDtBQUFBO0FBQUE7QUFBQSxhQUNWO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FEVSxDQUFoQjtNQUFNTSxVO0FBSU4sSUFBTUMsV0FBVyxnQkFBR1IsMkNBQUksQ0FDdEJDLDBEQUFNLENBQUNRLG1EQUFELENBRGdCO0FBQUE7QUFBQTtBQUFBLGFBRWhCO0FBQUE7QUFBQSxDQUZnQixFQUF4QjtNQUFNRCxXOztBQU1OLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQW1DO0FBQUEsTUFBaENDLFFBQWdDLFFBQWhDQSxRQUFnQztBQUFBLE1BQXRCQyxNQUFzQixRQUF0QkEsTUFBc0I7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDOUMsc0JBQ0UsOERBQUMsVUFBRDtBQUFZLFNBQUssTUFBakI7QUFBa0IsVUFBTSxFQUFFRCxNQUExQjtBQUFrQyxvQkFBZ0IsRUFBRUUsNkNBQXBEO0FBQThELFdBQU8sRUFBRUQsT0FBdkU7QUFBQSw0QkFDRSw4REFBQyxVQUFEO0FBQUEsOEJBQ0UsOERBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxXQUFEO0FBQWEsWUFBSSxFQUFFLEVBQW5CO0FBQXVCLGFBQUssRUFBQyxNQUE3QjtBQUFvQyxlQUFPLEVBQUVBO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUtHRixRQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FWRDs7TUFBTUQsSTtBQVlOIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNWJjYzIzNmVhZTlmYmVmNDcxN2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiXHJcbmltcG9ydCB7IHNsaWRlIGFzIFNsaWRpbmdNZW51IH0gZnJvbSBcInJlYWN0LWJ1cmdlci1tZW51XCJcclxuaW1wb3J0IHsgQ2xvc2UgfSBmcm9tIFwiY29tcG9uZW50cy9JY29uc1wiXHJcbmltcG9ydCB7IE1FTlVfRUlEIH0gZnJvbSBcImNvbmZpZ3NcIlxyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lbnVEYXRhIH0gZnJvbSBcIi4vZGF0YVwiXHJcbmltcG9ydCB7IGxvZ29DaXJjbGVEYXJrVXJsIH0gZnJvbSBcImNvbXBvbmVudHMvQnJhbmRcIlxyXG5cclxuY29uc3QgTG9nb0NpcmNsZURhcmsgPSBtZW1vKHN0eWxlZC5kaXZgXHJcbiAgJHt0d2B3LTE2IG1iLThgfVxyXG4gIDphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcclxuICB9XHJcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKCR7bG9nb0NpcmNsZURhcmtVcmx9KTtcclxuYClcclxuXHJcbmNvbnN0IFN0eWxlZE1lbnUgPSBzdHlsZWQoU2xpZGluZ01lbnUpYFxyXG4gICR7dHdgdy1zY3JlZW4hIG1kOih3LTMvMTIpIWB9XHJcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gMTAwJSAxMzAlIGxpbmVhci1ncmFkaWVudCggMTYxZGVnLGhzbCgyNTVkZWcgMTAwJSAyNyUpIDE3JSxoc2woMjE4ZGVnIDEwMCUgMzQlKSAzNiUsaHNsKDIyNGRlZyA5NyUgMzYlIC8gODglKSA2NiUsaHNsKDE3N2RlZyAxMDAlIDUwJSkgMTAwJSApO1xyXG5gXHJcblxyXG5jb25zdCBNZW51SXRlbUEgPSBzdHlsZWQuYWBcclxuICAtLW1hcmdpbi1vZmZzZXQ6IC0ycmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYXJnaW4tb2Zmc2V0KTtcclxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLW1hcmdpbi1vZmZzZXQpO1xyXG4gICR7dHdgZmxleCB0ZXh0LTJ4bCBsZzp0ZXh0LTN4bCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBob3ZlcjooYmctYXJnby1ibHVlLTQwMClgfVxyXG5gXHJcblxyXG5jb25zdCBNZW51TGlzdCA9IHN0eWxlZC51bGBcclxuICAke3R3YGZsZXghIGZsZXgtY29sIHNwYWNlLXktNiBwdC0xYH1cclxuYFxyXG5cclxuY29uc3QgTWVudUhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2BmbGV4ISB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuYH1cclxuYFxyXG5cclxuY29uc3QgQ2xvc2VCdXR0b24gPSBtZW1vKFxyXG4gIHN0eWxlZChDbG9zZSlgXHJcbiAgICAke3R3YGN1cnNvci1wb2ludGVyYH1cclxuICBgXHJcbilcclxuXHJcbmNvbnN0IE1lbnUgPSAoeyBjaGlsZHJlbiwgaXNPcGVuLCBvbkNsb3NlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZE1lbnUgcmlnaHQgaXNPcGVuPXtpc09wZW59IG91dGVyQ29udGFpbmVySWQ9e01FTlVfRUlEfSBvbkNsb3NlPXtvbkNsb3NlfT5cclxuICAgICAgPE1lbnVIZWFkZXI+XHJcbiAgICAgICAgPExvZ29DaXJjbGVEYXJrIC8+XHJcbiAgICAgICAgPENsb3NlQnV0dG9uIHNpemU9ezMyfSBjb2xvcj1cIiNmZmZcIiBvbkNsaWNrPXtvbkNsb3NlfSAvPlxyXG4gICAgICA8L01lbnVIZWFkZXI+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU3R5bGVkTWVudT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCB7IE1lbnUsIE1lbnVJdGVtQSwgTWVudUxpc3QsIG1lbnVEYXRhIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==