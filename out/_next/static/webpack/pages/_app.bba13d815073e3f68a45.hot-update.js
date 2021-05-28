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
/* harmony import */ var C_Users_4hyun_Documents_1_Argo_web_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Navbar */ "./components/Navbar/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Menu */ "./components/Menu/index.js");
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Icons */ "./components/Icons/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\4hyun\\Documents\\1-Argo\\web\\argo-web-next\\components\\Layout\\Header.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject2() {
  var data = (0,C_Users_4hyun_Documents_1_Argo_web_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_4hyun_Documents_1_Argo_web_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div(_templateObject());
_c = Wrapper;
var Spacer = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div(_templateObject2(), {
  "height": "100%",
  "width": "0.5rem"
});
_c2 = Spacer;
var icons = {
  openLinkArrow: components_Icons__WEBPACK_IMPORTED_MODULE_6__.OpenLinkArrow
};

var Header = function Header() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_5__.Menu, {
      isOpen: menuOpen,
      onClose: closeMenu,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_5__.MenuList, {
        children: _Menu__WEBPACK_IMPORTED_MODULE_5__.menuData.map(function (_ref) {
          var _ref$item = _ref.item,
              mid = _ref$item.mid,
              title = _ref$item.title,
              slug = _ref$item.slug,
              icon = _ref$item.icon;
          var Icon = icons[icon];
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "".concat(slug),
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_5__.MenuItemA, {
              onClick: closeMenu,
              children: [title, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 19
              }, _this), Icon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {
                size: 32
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 28
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 17
            }, _this)
          }, mid, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Navbar__WEBPACK_IMPORTED_MODULE_4__.default, {
      menuOpen: menuOpen,
      toggleMenu: toggleMenu
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_s(Header, "u3B5o4jLaxSJSiAffhOYYQzMIHQ=");

_c3 = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c, _c2, _c3;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "Spacer");
$RefreshReg$(_c3, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJTcGFjZXIiLCJpY29ucyIsIm9wZW5MaW5rQXJyb3ciLCJPcGVuTGlua0Fycm93IiwiSGVhZGVyIiwidXNlU3RhdGUiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwidG9nZ2xlTWVudSIsImNsb3NlTWVudSIsIm1lbnVEYXRhIiwiaXRlbSIsIm1pZCIsInRpdGxlIiwic2x1ZyIsImljb24iLCJJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQywwREFBSCxtQkFBYjtLQUFNRCxPO0FBRU4sSUFBTUUsTUFBTSxHQUFHRCwwREFBSCxxQkFDTjtBQUFBO0FBQUE7QUFBQSxDQURNLENBQVo7TUFBTUMsTTtBQUdOLElBQU1DLEtBQUssR0FBRztBQUFFQyxlQUFhLEVBQUVDLDJEQUFhQTtBQUE5QixDQUFkOztBQUVBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDYUMsK0NBQVEsQ0FBQyxJQUFELENBRHJCO0FBQUEsTUFDWkMsUUFEWTtBQUFBLE1BQ0ZDLFdBREU7O0FBR25CLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsV0FBTUQsV0FBVyxDQUFDLENBQUNELFFBQUYsQ0FBakI7QUFBQSxHQUFuQjs7QUFDQSxNQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFdBQU1GLFdBQVcsQ0FBQyxJQUFELENBQWpCO0FBQUEsR0FBbEI7O0FBQ0Esc0JBQ0UsOERBQUMsT0FBRDtBQUFTLE1BQUUsRUFBQyxtQkFBWjtBQUFBLDRCQUNFLDhEQUFDLHVDQUFEO0FBQU0sWUFBTSxFQUFFRCxRQUFkO0FBQXdCLGFBQU8sRUFBRUcsU0FBakM7QUFBQSw2QkFDRSw4REFBQywyQ0FBRDtBQUFBLGtCQUVHQywrQ0FBQSxDQUFhLGdCQUEwQztBQUFBLCtCQUF2Q0MsSUFBdUM7QUFBQSxjQUEvQkMsR0FBK0IsYUFBL0JBLEdBQStCO0FBQUEsY0FBMUJDLEtBQTBCLGFBQTFCQSxLQUEwQjtBQUFBLGNBQW5CQyxJQUFtQixhQUFuQkEsSUFBbUI7QUFBQSxjQUFiQyxJQUFhLGFBQWJBLElBQWE7QUFDdEQsY0FBSUMsSUFBSSxHQUFHZixLQUFLLENBQUNjLElBQUQsQ0FBaEI7QUFDQSw4QkFDRSw4REFBQyxrREFBRDtBQUFnQixnQkFBSSxZQUFLRCxJQUFMLENBQXBCO0FBQWlDLG9CQUFRLE1BQXpDO0FBQUEsbUNBQ0UsOERBQUMsNENBQUQ7QUFBVyxxQkFBTyxFQUFFTCxTQUFwQjtBQUFBLHlCQUNHSSxLQURILGVBRUUsOERBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLEVBR0dHLElBQUksaUJBQUksOERBQUMsSUFBRDtBQUFNLG9CQUFJLEVBQUU7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQVdKLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQVNELFNBWEE7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBa0JFLDhEQUFDLHNEQUFEO0FBQVEsY0FBUSxFQUFFTixRQUFsQjtBQUE0QixnQkFBVSxFQUFFRTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0JELENBM0JEOztHQUFNSixNOztNQUFBQSxNO0FBNkJOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYmJhMTNkODE1MDczZTNmNjhhNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCJcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiY29tcG9uZW50cy9OYXZiYXJcIlxyXG5pbXBvcnQgeyBNZW51LCBNZW51SXRlbUEsIE1lbnVMaXN0LCBtZW51RGF0YSB9IGZyb20gXCIuLi9NZW51XCJcclxuaW1wb3J0IHsgT3BlbkxpbmtBcnJvdyB9IGZyb20gXCJjb21wb25lbnRzL0ljb25zXCJcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YGBcclxuXHJcbmNvbnN0IFNwYWNlciA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2BoLWZ1bGwgdy0yYH1cclxuYFxyXG5jb25zdCBpY29ucyA9IHsgb3BlbkxpbmtBcnJvdzogT3BlbkxpbmtBcnJvdyB9XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4gc2V0TWVudU9wZW4oIW1lbnVPcGVuKVxyXG4gIGNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHNldE1lbnVPcGVuKG51bGwpXHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyIGlkPVwiYXJnby1lbGFzdGljLW1lbnVcIj5cclxuICAgICAgPE1lbnUgaXNPcGVuPXttZW51T3Blbn0gb25DbG9zZT17Y2xvc2VNZW51fT5cclxuICAgICAgICA8TWVudUxpc3Q+XHJcbiAgICAgICAgICB7LyogPExvZ28gLz4gKi99XHJcbiAgICAgICAgICB7bWVudURhdGEubWFwKCh7IGl0ZW06IHsgbWlkLCB0aXRsZSwgc2x1ZywgaWNvbiB9IH0pID0+IHtcclxuICAgICAgICAgICAgbGV0IEljb24gPSBpY29uc1tpY29uXVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rIGtleT17bWlkfSBocmVmPXtgJHtzbHVnfWB9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtQSBvbkNsaWNrPXtjbG9zZU1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgICAgICAgICAgICAge0ljb24gJiYgPEljb24gc2l6ZT17MzJ9IC8+fVxyXG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbUE+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L01lbnVMaXN0PlxyXG4gICAgICA8L01lbnU+XHJcbiAgICAgIDxOYXZiYXIgbWVudU9wZW49e21lbnVPcGVufSB0b2dnbGVNZW51PXt0b2dnbGVNZW51fSAvPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=