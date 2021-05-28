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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Navbar */ "./components/Navbar/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Menu */ "./components/Menu/index.js");
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Icons */ "./components/Icons/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\4hyun\\Documents\\1-Argo\\web\\argo-web-next\\components\\Layout\\Header.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_Users_4hyun_Documents_1_Argo_web_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["h-full w-4"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Spacer = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "Header__Spacer",
  componentId: "u1g7fc-0"
})(["", ""], tw(_templateObject()));

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "Header__Wrapper",
  componentId: "u1g7fc-1"
})([""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlNwYWNlciIsInN0eWxlZCIsInR3IiwiV3JhcHBlciIsImljb25zIiwib3BlbkxpbmtBcnJvdyIsIk9wZW5MaW5rQXJyb3ciLCJIZWFkZXIiLCJ1c2VTdGF0ZSIsIm1lbnVPcGVuIiwic2V0TWVudU9wZW4iLCJ0b2dnbGVNZW51IiwiY2xvc2VNZW51IiwibWVudURhdGEiLCJpdGVtIiwibWlkIiwidGl0bGUiLCJzbHVnIiwiaWNvbiIsIkljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDUkMsRUFEUSxvQkFBWjs7QUFJQSxJQUFNQyxPQUFPLEdBQUdGLHFFQUFIO0FBQUE7QUFBQTtBQUFBLFFBQWI7O0FBRUEsSUFBTUcsS0FBSyxHQUFHO0FBQUVDLGVBQWEsRUFBRUMsMkRBQWFBO0FBQTlCLENBQWQ7O0FBRUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNhQywrQ0FBUSxDQUFDLElBQUQsQ0FEckI7QUFBQSxNQUNaQyxRQURZO0FBQUEsTUFDRkMsV0FERTs7QUFHbkIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxXQUFNRCxXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFqQjtBQUFBLEdBQW5COztBQUNBLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsV0FBTUYsV0FBVyxDQUFDLElBQUQsQ0FBakI7QUFBQSxHQUFsQjs7QUFDQSxzQkFDRSw4REFBQyxPQUFEO0FBQVMsTUFBRSxFQUFDLG1CQUFaO0FBQUEsNEJBQ0UsOERBQUMsdUNBQUQ7QUFBTSxZQUFNLEVBQUVELFFBQWQ7QUFBd0IsYUFBTyxFQUFFRyxTQUFqQztBQUFBLDZCQUNFLDhEQUFDLDJDQUFEO0FBQUEsa0JBRUdDLCtDQUFBLENBQWEsZ0JBQTBDO0FBQUEsK0JBQXZDQyxJQUF1QztBQUFBLGNBQS9CQyxHQUErQixhQUEvQkEsR0FBK0I7QUFBQSxjQUExQkMsS0FBMEIsYUFBMUJBLEtBQTBCO0FBQUEsY0FBbkJDLElBQW1CLGFBQW5CQSxJQUFtQjtBQUFBLGNBQWJDLElBQWEsYUFBYkEsSUFBYTtBQUN0RCxjQUFJQyxJQUFJLEdBQUdmLEtBQUssQ0FBQ2MsSUFBRCxDQUFoQjtBQUNBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQWdCLGdCQUFJLFlBQUtELElBQUwsQ0FBcEI7QUFBaUMsb0JBQVEsTUFBekM7QUFBQSxtQ0FDRSw4REFBQyw0Q0FBRDtBQUFXLHFCQUFPLEVBQUVMLFNBQXBCO0FBQUEseUJBQ0dJLEtBREgsZUFFRSw4REFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsRUFHR0csSUFBSSxpQkFBSSw4REFBQyxJQUFEO0FBQU0sb0JBQUksRUFBRTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBV0osR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBU0QsU0FYQTtBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFrQkUsOERBQUMsc0RBQUQ7QUFBUSxjQUFRLEVBQUVOLFFBQWxCO0FBQTRCLGdCQUFVLEVBQUVFO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0EzQkQ7O0dBQU1KLE07O0tBQUFBLE07QUE2Qk4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lNDcyZWI0OTY5OGU3ZjgxNTk4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcInR3aW4ubWFjcm9cIlxyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJjb21wb25lbnRzL05hdmJhclwiXHJcbmltcG9ydCB7IE1lbnUsIE1lbnVJdGVtQSwgTWVudUxpc3QsIG1lbnVEYXRhIH0gZnJvbSBcIi4uL01lbnVcIlxyXG5pbXBvcnQgeyBPcGVuTGlua0Fycm93IH0gZnJvbSBcImNvbXBvbmVudHMvSWNvbnNcIlxyXG5cclxuY29uc3QgU3BhY2VyID0gc3R5bGVkLmRpdmBcclxuICAke3R3YGgtZnVsbCB3LTRgfVxyXG5gXHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBgXHJcblxyXG5jb25zdCBpY29ucyA9IHsgb3BlbkxpbmtBcnJvdzogT3BlbkxpbmtBcnJvdyB9XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4gc2V0TWVudU9wZW4oIW1lbnVPcGVuKVxyXG4gIGNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHNldE1lbnVPcGVuKG51bGwpXHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyIGlkPVwiYXJnby1lbGFzdGljLW1lbnVcIj5cclxuICAgICAgPE1lbnUgaXNPcGVuPXttZW51T3Blbn0gb25DbG9zZT17Y2xvc2VNZW51fT5cclxuICAgICAgICA8TWVudUxpc3Q+XHJcbiAgICAgICAgICB7LyogPExvZ28gLz4gKi99XHJcbiAgICAgICAgICB7bWVudURhdGEubWFwKCh7IGl0ZW06IHsgbWlkLCB0aXRsZSwgc2x1ZywgaWNvbiB9IH0pID0+IHtcclxuICAgICAgICAgICAgbGV0IEljb24gPSBpY29uc1tpY29uXVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rIGtleT17bWlkfSBocmVmPXtgJHtzbHVnfWB9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtQSBvbkNsaWNrPXtjbG9zZU1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgICAgICAgICAgICAge0ljb24gJiYgPEljb24gc2l6ZT17MzJ9IC8+fVxyXG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbUE+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L01lbnVMaXN0PlxyXG4gICAgICA8L01lbnU+XHJcbiAgICAgIDxOYXZiYXIgbWVudU9wZW49e21lbnVPcGVufSB0b2dnbGVNZW51PXt0b2dnbGVNZW51fSAvPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=