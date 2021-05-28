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
/* harmony export */   "MenuList": function() { return /* binding */ MenuList; },
/* harmony export */   "MenuItemA": function() { return /* binding */ MenuItemA; },
/* harmony export */   "MenuItemWrapper": function() { return /* binding */ MenuItemWrapper; },
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
var MenuItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "Menu__MenuItemWrapper",
  componentId: "sc-1yicai4-5"
})(["", ""], {
  "width": "100%",
  "> :not([hidden]) ~ :not([hidden])": {
    "--tw-space-x-reverse": 0,
    "marginRight": "calc(1rem * var(--tw-space-x-reverse))",
    "marginLeft": "calc(1rem * calc(1 - var(--tw-space-x-reverse)))"
  }
});
var MenuItemA = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.a.withConfig({
  displayName: "Menu__MenuItemA",
  componentId: "sc-1yicai4-6"
})(["--margin-offset:-1rem;margin-left:var(--margin-offset);margin-right:var(--margin-offset);", " & >:first-child{", "}& >:nth-child(2){margin-left:1rem;}"], {
  ":active": {
    "--tw-translate-x": "0",
    "--tw-translate-y": "0.25rem",
    "--tw-rotate": "0",
    "--tw-skew-x": "0",
    "--tw-skew-y": "0",
    "--tw-scale-x": "1",
    "--tw-scale-y": "1",
    "transform": "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
  },
  "display": "flex",
  "fontSize": "1.5rem",
  "lineHeight": "2rem",
  "borderRadius": "0.375rem",
  "--tw-text-opacity": "1",
  "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
  "fontWeight": "700",
  ":hover": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(10, 41, 202, var(--tw-bg-opacity))"
  },
  "@media (min-width: 1024px)": {
    "fontSize": "1.875rem",
    "lineHeight": "2.25rem",
    "paddingLeft": "2rem",
    "paddingRight": "2rem",
    "paddingTop": "1.25rem",
    "paddingBottom": "1.25rem"
  }
}, {
  "display": "flex"
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
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CloseButton, {
        size: 32,
        color: "#fff",
        onClick: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51L2luZGV4LmpzIl0sIm5hbWVzIjpbIlN0eWxlZE1lbnUiLCJzdHlsZWQiLCJTbGlkaW5nTWVudSIsIk1lbnVIZWFkZXIiLCJMb2dvQ2lyY2xlRGFyayIsIm1lbW8iLCJsb2dvQ2lyY2xlRGFya1VybCIsIkNsb3NlQnV0dG9uIiwiQ2xvc2UiLCJNZW51TGlzdCIsIk1lbnVJdGVtV3JhcHBlciIsIk1lbnVJdGVtQSIsIk1lbnUiLCJjaGlsZHJlbiIsImlzT3BlbiIsIm9uQ2xvc2UiLCJNRU5VX0VJRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQywwREFBTSxDQUFDQyxvREFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGdMQUNWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQURVLENBQWhCO0tBQU1GLFU7QUFLTixJQUFNRyxVQUFVLEdBQUdGLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGFBQ1Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQURVLENBQWhCO01BQU1FLFU7QUFJTixJQUFNQyxjQUFjLGdCQUFHQywyQ0FBSSxDQUFDSixxRUFBRDtBQUFBO0FBQUE7QUFBQSxvSEFDckI7QUFBQTtBQUFBO0FBQUEsQ0FEcUIsRUFPb0JLLCtEQVBwQixFQUEzQjtNQUFNRixjO0FBVU4sSUFBTUcsV0FBVyxnQkFBR0YsMkNBQUksQ0FDdEJKLDBEQUFNLENBQUNPLG1EQUFELENBRGdCO0FBQUE7QUFBQTtBQUFBLGFBRWhCO0FBQUE7QUFBQSxDQUZnQixFQUF4QjtNQUFNRCxXO0FBTU4sSUFBTUUsUUFBUSxHQUFHUixvRUFBSDtBQUFBO0FBQUE7QUFBQSxhQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FEUSxDQUFkO0FBSUEsSUFBTVMsZUFBZSxHQUFHVCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxhQUNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FEZSxDQUFyQjtBQUlBLElBQU1VLFNBQVMsR0FBR1YsbUVBQUg7QUFBQTtBQUFBO0FBQUEsK0pBSVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FKUyxFQU1QO0FBQUE7QUFBQSxDQU5PLENBQWY7O0FBYUEsSUFBTVcsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBbUM7QUFBQSxNQUFoQ0MsUUFBZ0MsUUFBaENBLFFBQWdDO0FBQUEsTUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUM5QyxzQkFDRSw4REFBQyxVQUFEO0FBQVksU0FBSyxNQUFqQjtBQUFrQixVQUFNLEVBQUVELE1BQTFCO0FBQWtDLG9CQUFnQixFQUFFRSw2Q0FBcEQ7QUFBOEQsV0FBTyxFQUFFRCxPQUF2RTtBQUFBLDRCQUNFLDhEQUFDLFVBQUQ7QUFBQSw4QkFDRSw4REFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLFdBQUQ7QUFBYSxZQUFJLEVBQUUsRUFBbkI7QUFBdUIsYUFBSyxFQUFDLE1BQTdCO0FBQW9DLGVBQU8sRUFBRUE7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBS0dGLFFBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQVZEOztNQUFNRCxJO0FBWU4iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zMDRkNjY3MWVkZDhjNzI3M2Q2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCJcclxuaW1wb3J0IHsgc2xpZGUgYXMgU2xpZGluZ01lbnUgfSBmcm9tIFwicmVhY3QtYnVyZ2VyLW1lbnVcIlxyXG5pbXBvcnQgeyBDbG9zZSB9IGZyb20gXCJjb21wb25lbnRzL0ljb25zXCJcclxuaW1wb3J0IHsgTUVOVV9FSUQgfSBmcm9tIFwiY29uZmlnc1wiXHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVudURhdGEgfSBmcm9tIFwiLi9kYXRhXCJcclxuaW1wb3J0IHsgbG9nb0NpcmNsZURhcmtVcmwgfSBmcm9tIFwiY29tcG9uZW50cy9CcmFuZFwiXHJcblxyXG5jb25zdCBTdHlsZWRNZW51ID0gc3R5bGVkKFNsaWRpbmdNZW51KWBcclxuICAke3R3YHctc2NyZWVuISBtZDoody0zLzEyKSFgfVxyXG4gIGJhY2tncm91bmQ6IGNlbnRlciAvIDEwMCUgMTMwJSBsaW5lYXItZ3JhZGllbnQoIDE2MWRlZyxoc2woMjU1ZGVnIDEwMCUgMjclKSAxNyUsaHNsKDIxOGRlZyAxMDAlIDM0JSkgMzYlLGhzbCgyMjRkZWcgOTclIDM2JSAvIDg4JSkgNjYlLGhzbCgxNzdkZWcgMTAwJSA1MCUpIDEwMCUgKTtcclxuYFxyXG5cclxuY29uc3QgTWVudUhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2BmbGV4ISB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuYH1cclxuYFxyXG5cclxuY29uc3QgTG9nb0NpcmNsZURhcmsgPSBtZW1vKHN0eWxlZC5kaXZgXHJcbiAgJHt0d2B3LTE2IG1iLThgfVxyXG4gIDphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcclxuICB9XHJcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKCR7bG9nb0NpcmNsZURhcmtVcmx9KTtcclxuYClcclxuXHJcbmNvbnN0IENsb3NlQnV0dG9uID0gbWVtbyhcclxuICBzdHlsZWQoQ2xvc2UpYFxyXG4gICAgJHt0d2BjdXJzb3ItcG9pbnRlcmB9XHJcbiAgYFxyXG4pXHJcblxyXG5jb25zdCBNZW51TGlzdCA9IHN0eWxlZC51bGBcclxuICAke3R3YGZsZXghIGZsZXgtY29sIHB0LTFgfVxyXG5gXHJcblxyXG5jb25zdCBNZW51SXRlbVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICR7dHdgdy1mdWxsIHNwYWNlLXgtNGB9XHJcbmBcclxuXHJcbmNvbnN0IE1lbnVJdGVtQSA9IHN0eWxlZC5hYFxyXG4gIC0tbWFyZ2luLW9mZnNldDogLTFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpbi1vZmZzZXQpO1xyXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tbWFyZ2luLW9mZnNldCk7XHJcbiAgJHt0d2BmbGV4IHRleHQtMnhsIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBmb250LWJvbGQgaG92ZXI6KGJnLWFyZ28tYmx1ZS00MDApIGxnOih0ZXh0LTN4bCBweC04IHB5LTUpIGFjdGl2ZToodHJhbnNmb3JtIHRyYW5zbGF0ZS15LTEpYH1cclxuICAmID4gOmZpcnN0LWNoaWxkIHtcclxuICAgICR7dHdgZmxleGB9XHJcbiAgfVxyXG4gICYgPiA6bnRoLWNoaWxkKDIpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgTWVudSA9ICh7IGNoaWxkcmVuLCBpc09wZW4sIG9uQ2xvc2UgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkTWVudSByaWdodCBpc09wZW49e2lzT3Blbn0gb3V0ZXJDb250YWluZXJJZD17TUVOVV9FSUR9IG9uQ2xvc2U9e29uQ2xvc2V9PlxyXG4gICAgICA8TWVudUhlYWRlcj5cclxuICAgICAgICA8TG9nb0NpcmNsZURhcmsgLz5cclxuICAgICAgICA8Q2xvc2VCdXR0b24gc2l6ZT17MzJ9IGNvbG9yPVwiI2ZmZlwiIG9uQ2xpY2s9e29uQ2xvc2V9IC8+XHJcbiAgICAgIDwvTWVudUhlYWRlcj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TdHlsZWRNZW51PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHsgTWVudSwgTWVudUxpc3QsIE1lbnVJdGVtQSwgTWVudUl0ZW1XcmFwcGVyLCBtZW51RGF0YSB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=