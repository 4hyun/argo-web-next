self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout/Header.js":
/*!*************************************!*\
  !*** ./components/Layout/Header.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Navbar */ "./components/Navbar/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Menu */ "./components/Menu/index.js");
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Icons */ "./components/Icons/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\4hyun\\Documents\\1-Argo\\web\\argo-web-next\\components\\Layout\\Header.js",
    _this = undefined,
    _s = $RefreshSig$();







var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({
  displayName: "Header__Wrapper",
  componentId: "u1g7fc-0"
})([""]);

var icons = {
  openLinkArrow: components_Icons__WEBPACK_IMPORTED_MODULE_5__.OpenLinkArrow
};

var Header = function Header() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      menuOpen = _useState[0],
      setMenuOpen = _useState[1];

  var toggleMenu = function toggleMenu() {
    return setMenuOpen(!menuOpen);
  };

  var closeMenu = function closeMenu() {
    return setMenuOpen(null);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
    id: "argo-elastic-menu",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_4__.Menu, {
      isOpen: menuOpen,
      onClose: closeMenu,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_4__.MenuList, {
        children: _Menu__WEBPACK_IMPORTED_MODULE_4__.menuData.map(function (_ref) {
          var _ref$item = _ref.item,
              mid = _ref$item.mid,
              title = _ref$item.title,
              slug = _ref$item.slug,
              icon = _ref$item.icon;
          var Icon = icons[icon];
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "".concat(slug),
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_4__.MenuItemA, {
              onClick: closeMenu,
              children: [title, " ", Icon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {
                size: 32
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 36
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 17
            }, _this)
          }, mid, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, {
      menuOpen: menuOpen,
      toggleMenu: toggleMenu
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);
};

_s(Header, "u3B5o4jLaxSJSiAffhOYYQzMIHQ=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJpY29ucyIsIm9wZW5MaW5rQXJyb3ciLCJPcGVuTGlua0Fycm93IiwiSGVhZGVyIiwidXNlU3RhdGUiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwidG9nZ2xlTWVudSIsImNsb3NlTWVudSIsIm1lbnVEYXRhIiwiaXRlbSIsIm1pZCIsInRpdGxlIiwic2x1ZyIsImljb24iLCJJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLFFBQWI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHO0FBQUVDLGVBQWEsRUFBRUMsMkRBQWFBO0FBQTlCLENBQWQ7O0FBRUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNhQywrQ0FBUSxDQUFDLElBQUQsQ0FEckI7QUFBQSxNQUNaQyxRQURZO0FBQUEsTUFDRkMsV0FERTs7QUFHbkIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxXQUFNRCxXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFqQjtBQUFBLEdBQW5COztBQUNBLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsV0FBTUYsV0FBVyxDQUFDLElBQUQsQ0FBakI7QUFBQSxHQUFsQjs7QUFDQSxzQkFDRSw4REFBQyxPQUFEO0FBQVMsTUFBRSxFQUFDLG1CQUFaO0FBQUEsNEJBQ0UsOERBQUMsdUNBQUQ7QUFBTSxZQUFNLEVBQUVELFFBQWQ7QUFBd0IsYUFBTyxFQUFFRyxTQUFqQztBQUFBLDZCQUNFLDhEQUFDLDJDQUFEO0FBQUEsa0JBRUdDLCtDQUFBLENBQWEsZ0JBQTBDO0FBQUEsK0JBQXZDQyxJQUF1QztBQUFBLGNBQS9CQyxHQUErQixhQUEvQkEsR0FBK0I7QUFBQSxjQUExQkMsS0FBMEIsYUFBMUJBLEtBQTBCO0FBQUEsY0FBbkJDLElBQW1CLGFBQW5CQSxJQUFtQjtBQUFBLGNBQWJDLElBQWEsYUFBYkEsSUFBYTtBQUN0RCxjQUFJQyxJQUFJLEdBQUdmLEtBQUssQ0FBQ2MsSUFBRCxDQUFoQjtBQUNBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQWdCLGdCQUFJLFlBQUtELElBQUwsQ0FBcEI7QUFBaUMsb0JBQVEsTUFBekM7QUFBQSxtQ0FDRSw4REFBQyw0Q0FBRDtBQUFXLHFCQUFPLEVBQUVMLFNBQXBCO0FBQUEseUJBQ0dJLEtBREgsT0FDV0csSUFBSSxpQkFBSSw4REFBQyxJQUFEO0FBQU0sb0JBQUksRUFBRTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQVdKLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQU9ELFNBVEE7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBZ0JFLDhEQUFDLHNEQUFEO0FBQVEsY0FBUSxFQUFFTixRQUFsQjtBQUE0QixnQkFBVSxFQUFFRTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0JELENBekJEOztHQUFNSixNOztLQUFBQSxNO0FBMkJOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDc5ZDViMjM2Yjk3M2UyZWMxZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJ0d2luLm1hY3JvXCJcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiY29tcG9uZW50cy9OYXZiYXJcIlxyXG5pbXBvcnQgeyBNZW51LCBNZW51SXRlbUEsIE1lbnVMaXN0LCBtZW51RGF0YSB9IGZyb20gXCIuLi9NZW51XCJcclxuaW1wb3J0IHsgT3BlbkxpbmtBcnJvdyB9IGZyb20gXCJjb21wb25lbnRzL0ljb25zXCJcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YGBcclxuXHJcbmNvbnN0IGljb25zID0geyBvcGVuTGlua0Fycm93OiBPcGVuTGlua0Fycm93IH1cclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiBzZXRNZW51T3BlbighbWVudU9wZW4pXHJcbiAgY29uc3QgY2xvc2VNZW51ID0gKCkgPT4gc2V0TWVudU9wZW4obnVsbClcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXIgaWQ9XCJhcmdvLWVsYXN0aWMtbWVudVwiPlxyXG4gICAgICA8TWVudSBpc09wZW49e21lbnVPcGVufSBvbkNsb3NlPXtjbG9zZU1lbnV9PlxyXG4gICAgICAgIDxNZW51TGlzdD5cclxuICAgICAgICAgIHsvKiA8TG9nbyAvPiAqL31cclxuICAgICAgICAgIHttZW51RGF0YS5tYXAoKHsgaXRlbTogeyBtaWQsIHRpdGxlLCBzbHVnLCBpY29uIH0gfSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgSWNvbiA9IGljb25zW2ljb25dXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPExpbmsga2V5PXttaWR9IGhyZWY9e2Ake3NsdWd9YH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW1BIG9uQ2xpY2s9e2Nsb3NlTWVudX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0aXRsZX0ge0ljb24gJiYgPEljb24gc2l6ZT17MzJ9IC8+fVxyXG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbUE+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L01lbnVMaXN0PlxyXG4gICAgICA8L01lbnU+XHJcbiAgICAgIDxOYXZiYXIgbWVudU9wZW49e21lbnVPcGVufSB0b2dnbGVNZW51PXt0b2dnbGVNZW51fSAvPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=