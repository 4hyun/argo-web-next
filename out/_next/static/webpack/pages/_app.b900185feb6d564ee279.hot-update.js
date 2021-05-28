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








var StyledMenu = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.default)(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__.slide).withConfig({
  displayName: "Menu__StyledMenu",
  componentId: "sc-1yicai4-0"
})(["", " background:center / 100% 130% linear-gradient( 161deg,hsl(255deg 100% 27%) 17%,hsl(218deg 100% 34%) 36%,hsl(224deg 97% 36% / 88%) 66%,hsl(177deg 100% 50%) 100% );"], {
  "width": "100vw !important",
  "@media (min-width: 768px)": {
    "width": "25% !important"
  }
});
_c = StyledMenu;
var MenuHeader = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "Menu__MenuHeader",
  componentId: "sc-1yicai4-1"
})(["", ""], {
  "display": "flex !important",
  "width": "100%",
  "justifyContent": "space-between"
});
_c2 = MenuHeader;
var LogoCircleDark = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "Menu__LogoCircleDark",
  componentId: "sc-1yicai4-2"
})(["", ":after{display:block;content:\"\";padding-bottom:100%;}background:center / contain no-repeat url(", ");"], {
  "width": "4rem",
  "marginBottom": "2rem"
}, components_Brand__WEBPACK_IMPORTED_MODULE_6__.logoCircleDarkUrl));
_c3 = LogoCircleDark;
var CloseButton = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((0,styled_components__WEBPACK_IMPORTED_MODULE_7__.default)(components_Icons__WEBPACK_IMPORTED_MODULE_3__.Close).withConfig({
  displayName: "Menu__CloseButton",
  componentId: "sc-1yicai4-3"
})(["", ""], {
  "cursor": "pointer"
}));
_c4 = CloseButton;
var MenuList = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.ul.withConfig({
  displayName: "Menu__MenuList",
  componentId: "sc-1yicai4-4"
})(["", ""], {
  "display": "flex !important",
  "flexDirection": "column",
  "paddingTop": "0.25rem"
});
var MenuItemA = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.a.withConfig({
  displayName: "Menu__MenuItemA",
  componentId: "sc-1yicai4-5"
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
    "lineHeight": "2.25rem",
    "paddingLeft": "2rem",
    "paddingRight": "2rem",
    "paddingTop": "1.5rem",
    "paddingBottom": "1.5rem"
  }
});

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

$RefreshReg$(_c, "StyledMenu");
$RefreshReg$(_c2, "MenuHeader");
$RefreshReg$(_c3, "LogoCircleDark");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51L2luZGV4LmpzIl0sIm5hbWVzIjpbIlN0eWxlZE1lbnUiLCJzdHlsZWQiLCJTbGlkaW5nTWVudSIsIk1lbnVIZWFkZXIiLCJMb2dvQ2lyY2xlRGFyayIsIm1lbW8iLCJsb2dvQ2lyY2xlRGFya1VybCIsIkNsb3NlQnV0dG9uIiwiQ2xvc2UiLCJNZW51TGlzdCIsIk1lbnVJdGVtQSIsIk1lbnUiLCJjaGlsZHJlbiIsImlzT3BlbiIsIm9uQ2xvc2UiLCJNRU5VX0VJRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLDBEQUFNLENBQUNDLG9EQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsZ0xBQ1Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBRFUsQ0FBaEI7S0FBTUYsVTtBQUtOLElBQU1HLFVBQVUsR0FBR0YscUVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDVjtBQUFBO0FBQUE7QUFBQTtBQUFBLENBRFUsQ0FBaEI7TUFBTUUsVTtBQUlOLElBQU1DLGNBQWMsZ0JBQUdDLDJDQUFJLENBQUNKLHFFQUFEO0FBQUE7QUFBQTtBQUFBLG9IQUNyQjtBQUFBO0FBQUE7QUFBQSxDQURxQixFQU9vQkssK0RBUHBCLEVBQTNCO01BQU1GLGM7QUFVTixJQUFNRyxXQUFXLGdCQUFHRiwyQ0FBSSxDQUN0QkosMERBQU0sQ0FBQ08sbURBQUQsQ0FEZ0I7QUFBQTtBQUFBO0FBQUEsYUFFaEI7QUFBQTtBQUFBLENBRmdCLEVBQXhCO01BQU1ELFc7QUFNTixJQUFNRSxRQUFRLEdBQUdSLG9FQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQURRLENBQWQ7QUFJQSxJQUFNUyxTQUFTLEdBQUdULG1FQUFIO0FBQUE7QUFBQTtBQUFBLHNHQUlUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBSlMsQ0FBZjs7QUFPQSxJQUFNVSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFtQztBQUFBLE1BQWhDQyxRQUFnQyxRQUFoQ0EsUUFBZ0M7QUFBQSxNQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzlDLHNCQUNFLDhEQUFDLFVBQUQ7QUFBWSxTQUFLLE1BQWpCO0FBQWtCLFVBQU0sRUFBRUQsTUFBMUI7QUFBa0Msb0JBQWdCLEVBQUVFLDZDQUFwRDtBQUE4RCxXQUFPLEVBQUVELE9BQXZFO0FBQUEsNEJBQ0UsOERBQUMsVUFBRDtBQUFBLDhCQUNFLDhEQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsV0FBRDtBQUFhLFlBQUksRUFBRSxFQUFuQjtBQUF1QixhQUFLLEVBQUMsTUFBN0I7QUFBb0MsZUFBTyxFQUFFQTtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFLR0YsUUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBVkQ7O01BQU1ELEk7QUFZTiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmI5MDAxODVmZWI2ZDU2NGVlMjc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIlxyXG5pbXBvcnQgeyBzbGlkZSBhcyBTbGlkaW5nTWVudSB9IGZyb20gXCJyZWFjdC1idXJnZXItbWVudVwiXHJcbmltcG9ydCB7IENsb3NlIH0gZnJvbSBcImNvbXBvbmVudHMvSWNvbnNcIlxyXG5pbXBvcnQgeyBNRU5VX0VJRCB9IGZyb20gXCJjb25maWdzXCJcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZW51RGF0YSB9IGZyb20gXCIuL2RhdGFcIlxyXG5pbXBvcnQgeyBsb2dvQ2lyY2xlRGFya1VybCB9IGZyb20gXCJjb21wb25lbnRzL0JyYW5kXCJcclxuXHJcbmNvbnN0IFN0eWxlZE1lbnUgPSBzdHlsZWQoU2xpZGluZ01lbnUpYFxyXG4gICR7dHdgdy1zY3JlZW4hIG1kOih3LTMvMTIpIWB9XHJcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gMTAwJSAxMzAlIGxpbmVhci1ncmFkaWVudCggMTYxZGVnLGhzbCgyNTVkZWcgMTAwJSAyNyUpIDE3JSxoc2woMjE4ZGVnIDEwMCUgMzQlKSAzNiUsaHNsKDIyNGRlZyA5NyUgMzYlIC8gODglKSA2NiUsaHNsKDE3N2RlZyAxMDAlIDUwJSkgMTAwJSApO1xyXG5gXHJcblxyXG5jb25zdCBNZW51SGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICAke3R3YGZsZXghIHctZnVsbCBqdXN0aWZ5LWJldHdlZW5gfVxyXG5gXHJcblxyXG5jb25zdCBMb2dvQ2lyY2xlRGFyayA9IG1lbW8oc3R5bGVkLmRpdmBcclxuICAke3R3YHctMTYgbWItOGB9XHJcbiAgOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xyXG4gIH1cclxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoJHtsb2dvQ2lyY2xlRGFya1VybH0pO1xyXG5gKVxyXG5cclxuY29uc3QgQ2xvc2VCdXR0b24gPSBtZW1vKFxyXG4gIHN0eWxlZChDbG9zZSlgXHJcbiAgICAke3R3YGN1cnNvci1wb2ludGVyYH1cclxuICBgXHJcbilcclxuXHJcbmNvbnN0IE1lbnVMaXN0ID0gc3R5bGVkLnVsYFxyXG4gICR7dHdgZmxleCEgZmxleC1jb2wgcHQtMWB9XHJcbmBcclxuXHJcbmNvbnN0IE1lbnVJdGVtQSA9IHN0eWxlZC5hYFxyXG4gIC0tbWFyZ2luLW9mZnNldDogLTJyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpbi1vZmZzZXQpO1xyXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tbWFyZ2luLW9mZnNldCk7XHJcbiAgJHt0d2BmbGV4IHRleHQtMnhsIGxnOih0ZXh0LTN4bCBweC04IHB5LTYpIHRleHQtd2hpdGUgZm9udC1ib2xkIGhvdmVyOihiZy1hcmdvLWJsdWUtNDAwKWB9XHJcbmBcclxuXHJcbmNvbnN0IE1lbnUgPSAoeyBjaGlsZHJlbiwgaXNPcGVuLCBvbkNsb3NlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZE1lbnUgcmlnaHQgaXNPcGVuPXtpc09wZW59IG91dGVyQ29udGFpbmVySWQ9e01FTlVfRUlEfSBvbkNsb3NlPXtvbkNsb3NlfT5cclxuICAgICAgPE1lbnVIZWFkZXI+XHJcbiAgICAgICAgPExvZ29DaXJjbGVEYXJrIC8+XHJcbiAgICAgICAgPENsb3NlQnV0dG9uIHNpemU9ezMyfSBjb2xvcj1cIiNmZmZcIiBvbkNsaWNrPXtvbkNsb3NlfSAvPlxyXG4gICAgICA8L01lbnVIZWFkZXI+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU3R5bGVkTWVudT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCB7IE1lbnUsIE1lbnVJdGVtQSwgTWVudUxpc3QsIG1lbnVEYXRhIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==