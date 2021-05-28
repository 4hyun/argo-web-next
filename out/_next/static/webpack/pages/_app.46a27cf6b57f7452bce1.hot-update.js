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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
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

var MenuItemA = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.a({
  "display": "flex",
  "fontSize": "1.5rem",
  "lineHeight": "2rem",
  "--tw-text-opacity": "1",
  "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
  "fontWeight": "700",
  ":hover": {
    "opacity": "0.8"
  },
  "@media (min-width: 1024px)": {
    "fontSize": "1.25rem",
    "lineHeight": "1.75rem"
  }
});

var MenuList = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.ul.withConfig({
  displayName: "Menu__MenuList",
  componentId: "sc-1yicai4-2"
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
  componentId: "sc-1yicai4-3"
})(["", ""], {
  "display": "flex !important",
  "width": "100%",
  "justifyContent": "space-between"
});
var CloseButton = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((0,styled_components__WEBPACK_IMPORTED_MODULE_7__.default)(components_Icons__WEBPACK_IMPORTED_MODULE_3__.Close).withConfig({
  displayName: "Menu__CloseButton",
  componentId: "sc-1yicai4-4"
})(["", ""], {
  "cursor": "pointer"
}));
_c2 = CloseButton;

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
        lineNumber: 45,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CloseButton, {
        size: 32,
        color: "#fff",
        onClick: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, _this);
};

_c3 = Menu;


var _c, _c2, _c3;

$RefreshReg$(_c, "LogoCircleDark");
$RefreshReg$(_c2, "CloseButton");
$RefreshReg$(_c3, "Menu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51L2luZGV4LmpzIl0sIm5hbWVzIjpbIkxvZ29DaXJjbGVEYXJrIiwibWVtbyIsInN0eWxlZCIsImxvZ29DaXJjbGVEYXJrVXJsIiwiU3R5bGVkTWVudSIsIlNsaWRpbmdNZW51IiwiTWVudUl0ZW1BIiwidHciLCJNZW51TGlzdCIsIk1lbnVIZWFkZXIiLCJDbG9zZUJ1dHRvbiIsIkNsb3NlIiwiTWVudSIsImNoaWxkcmVuIiwiaXNPcGVuIiwib25DbG9zZSIsIk1FTlVfRUlEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLGdCQUFHQywyQ0FBSSxDQUFDQyxxRUFBRDtBQUFBO0FBQUE7QUFBQSxvSEFDckI7QUFBQTtBQUFBO0FBQUEsQ0FEcUIsRUFPb0JDLCtEQVBwQixFQUEzQjtLQUFNSCxjO0FBVU4sSUFBTUksVUFBVSxHQUFHRiwwREFBTSxDQUFDRyxvREFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGdMQUNWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQURVLENBQWhCOztBQUtBLElBQU1DLFNBQVMsR0FBR0Msd0RBQUEsQ0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBSixDQUFsQjs7QUFFQSxJQUFNQyxRQUFRLEdBQUdOLG9FQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FEUSxDQUFkO0FBSUEsSUFBTU8sVUFBVSxHQUFHUCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxhQUNWO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FEVSxDQUFoQjtBQUlBLElBQU1RLFdBQVcsZ0JBQUdULDJDQUFJLENBQ3RCQywwREFBTSxDQUFDUyxtREFBRCxDQURnQjtBQUFBO0FBQUE7QUFBQSxhQUVoQjtBQUFBO0FBQUEsQ0FGZ0IsRUFBeEI7TUFBTUQsVzs7QUFNTixJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFtQztBQUFBLE1BQWhDQyxRQUFnQyxRQUFoQ0EsUUFBZ0M7QUFBQSxNQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzlDLHNCQUNFLDhEQUFDLFVBQUQ7QUFBWSxTQUFLLE1BQWpCO0FBQWtCLFVBQU0sRUFBRUQsTUFBMUI7QUFBa0Msb0JBQWdCLEVBQUVFLDZDQUFwRDtBQUE4RCxXQUFPLEVBQUVELE9BQXZFO0FBQUEsNEJBQ0UsOERBQUMsVUFBRDtBQUFBLDhCQUNFLDhEQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsV0FBRDtBQUFhLFlBQUksRUFBRSxFQUFuQjtBQUF1QixhQUFLLEVBQUMsTUFBN0I7QUFBb0MsZUFBTyxFQUFFQTtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFLR0YsUUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBVkQ7O01BQU1ELEk7QUFZTiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQ2YTI3Y2Y2YjU3Zjc0NTJiY2UxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIlxyXG5pbXBvcnQgeyBzbGlkZSBhcyBTbGlkaW5nTWVudSB9IGZyb20gXCJyZWFjdC1idXJnZXItbWVudVwiXHJcbmltcG9ydCB7IENsb3NlIH0gZnJvbSBcImNvbXBvbmVudHMvSWNvbnNcIlxyXG5pbXBvcnQgeyBNRU5VX0VJRCB9IGZyb20gXCJjb25maWdzXCJcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZW51RGF0YSB9IGZyb20gXCIuL2RhdGFcIlxyXG5pbXBvcnQgeyBsb2dvQ2lyY2xlRGFya1VybCB9IGZyb20gXCJjb21wb25lbnRzL0JyYW5kXCJcclxuXHJcbmNvbnN0IExvZ29DaXJjbGVEYXJrID0gbWVtbyhzdHlsZWQuZGl2YFxyXG4gICR7dHdgdy0xNiBtYi04YH1cclxuICA6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMCU7XHJcbiAgfVxyXG4gIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCgke2xvZ29DaXJjbGVEYXJrVXJsfSk7XHJcbmApXHJcblxyXG5jb25zdCBTdHlsZWRNZW51ID0gc3R5bGVkKFNsaWRpbmdNZW51KWBcclxuICAke3R3YHctc2NyZWVuISBtZDoody0zLzEyKSFgfVxyXG4gIGJhY2tncm91bmQ6IGNlbnRlciAvIDEwMCUgMTMwJSBsaW5lYXItZ3JhZGllbnQoIDE2MWRlZyxoc2woMjU1ZGVnIDEwMCUgMjclKSAxNyUsaHNsKDIxOGRlZyAxMDAlIDM0JSkgMzYlLGhzbCgyMjRkZWcgOTclIDM2JSAvIDg4JSkgNjYlLGhzbCgxNzdkZWcgMTAwJSA1MCUpIDEwMCUgKTtcclxuYFxyXG5cclxuY29uc3QgTWVudUl0ZW1BID0gdHcuYWBmbGV4IHRleHQtMnhsIGxnOnRleHQteGwgdGV4dC13aGl0ZSBmb250LWJvbGQgaG92ZXI6b3BhY2l0eS04MGBcclxuXHJcbmNvbnN0IE1lbnVMaXN0ID0gc3R5bGVkLnVsYFxyXG4gICR7dHdgZmxleCEgZmxleC1jb2wgc3BhY2UteS02IHB0LTFgfVxyXG5gXHJcblxyXG5jb25zdCBNZW51SGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICAke3R3YGZsZXghIHctZnVsbCBqdXN0aWZ5LWJldHdlZW5gfVxyXG5gXHJcblxyXG5jb25zdCBDbG9zZUJ1dHRvbiA9IG1lbW8oXHJcbiAgc3R5bGVkKENsb3NlKWBcclxuICAgICR7dHdgY3Vyc29yLXBvaW50ZXJgfVxyXG4gIGBcclxuKVxyXG5cclxuY29uc3QgTWVudSA9ICh7IGNoaWxkcmVuLCBpc09wZW4sIG9uQ2xvc2UgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkTWVudSByaWdodCBpc09wZW49e2lzT3Blbn0gb3V0ZXJDb250YWluZXJJZD17TUVOVV9FSUR9IG9uQ2xvc2U9e29uQ2xvc2V9PlxyXG4gICAgICA8TWVudUhlYWRlcj5cclxuICAgICAgICA8TG9nb0NpcmNsZURhcmsgLz5cclxuICAgICAgICA8Q2xvc2VCdXR0b24gc2l6ZT17MzJ9IGNvbG9yPVwiI2ZmZlwiIG9uQ2xpY2s9e29uQ2xvc2V9IC8+XHJcbiAgICAgIDwvTWVudUhlYWRlcj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TdHlsZWRNZW51PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHsgTWVudSwgTWVudUl0ZW1BLCBNZW51TGlzdCwgbWVudURhdGEgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9