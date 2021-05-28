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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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
_c = Wrapper;
var Spacer = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({
  displayName: "Header__Spacer",
  componentId: "u1g7fc-1"
})(["", ""], {
  "height": "100%",
  "width": "0.5rem"
});
_c2 = Spacer;
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
              icon = _ref$item.icon,
              target = _ref$item.target;
          var Icon = icons[icon];
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "".concat(slug),
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_4__.MenuItemA, {
              onClick: closeMenu,
              target: target,
              children: [title, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 19
              }, _this), Icon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {
                size: 28
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJTcGFjZXIiLCJpY29ucyIsIm9wZW5MaW5rQXJyb3ciLCJPcGVuTGlua0Fycm93IiwiSGVhZGVyIiwidXNlU3RhdGUiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwidG9nZ2xlTWVudSIsImNsb3NlTWVudSIsIm1lbnVEYXRhIiwiaXRlbSIsIm1pZCIsInRpdGxlIiwic2x1ZyIsImljb24iLCJ0YXJnZXQiLCJJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLFFBQWI7S0FBTUQsTztBQUVOLElBQU1FLE1BQU0sR0FBR0QscUVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDTjtBQUFBO0FBQUE7QUFBQSxDQURNLENBQVo7TUFBTUMsTTtBQUdOLElBQU1DLEtBQUssR0FBRztBQUFFQyxlQUFhLEVBQUVDLDJEQUFhQTtBQUE5QixDQUFkOztBQUVBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDYUMsK0NBQVEsQ0FBQyxJQUFELENBRHJCO0FBQUEsTUFDWkMsUUFEWTtBQUFBLE1BQ0ZDLFdBREU7O0FBR25CLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsV0FBTUQsV0FBVyxDQUFDLENBQUNELFFBQUYsQ0FBakI7QUFBQSxHQUFuQjs7QUFDQSxNQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFdBQU1GLFdBQVcsQ0FBQyxJQUFELENBQWpCO0FBQUEsR0FBbEI7O0FBQ0Esc0JBQ0UsOERBQUMsT0FBRDtBQUFTLE1BQUUsRUFBQyxtQkFBWjtBQUFBLDRCQUNFLDhEQUFDLHVDQUFEO0FBQU0sWUFBTSxFQUFFRCxRQUFkO0FBQXdCLGFBQU8sRUFBRUcsU0FBakM7QUFBQSw2QkFDRSw4REFBQywyQ0FBRDtBQUFBLGtCQUVHQywrQ0FBQSxDQUFhLGdCQUFrRDtBQUFBLCtCQUEvQ0MsSUFBK0M7QUFBQSxjQUF2Q0MsR0FBdUMsYUFBdkNBLEdBQXVDO0FBQUEsY0FBbENDLEtBQWtDLGFBQWxDQSxLQUFrQztBQUFBLGNBQTNCQyxJQUEyQixhQUEzQkEsSUFBMkI7QUFBQSxjQUFyQkMsSUFBcUIsYUFBckJBLElBQXFCO0FBQUEsY0FBZkMsTUFBZSxhQUFmQSxNQUFlO0FBQzlELGNBQUlDLElBQUksR0FBR2hCLEtBQUssQ0FBQ2MsSUFBRCxDQUFoQjtBQUNBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQWdCLGdCQUFJLFlBQUtELElBQUwsQ0FBcEI7QUFBaUMsb0JBQVEsTUFBekM7QUFBQSxtQ0FDRSw4REFBQyw0Q0FBRDtBQUFXLHFCQUFPLEVBQUVMLFNBQXBCO0FBQStCLG9CQUFNLEVBQUVPLE1BQXZDO0FBQUEseUJBQ0dILEtBREgsZUFFRSw4REFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsRUFHR0ksSUFBSSxpQkFBSSw4REFBQyxJQUFEO0FBQU0sb0JBQUksRUFBRTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBV0wsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBU0QsU0FYQTtBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFrQkUsOERBQUMsc0RBQUQ7QUFBUSxjQUFRLEVBQUVOLFFBQWxCO0FBQTRCLGdCQUFVLEVBQUVFO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0EzQkQ7O0dBQU1KLE07O01BQUFBLE07QUE2Qk4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zMDNiZGNmMzc1OTM2ZGM1NTFjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIlxyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJjb21wb25lbnRzL05hdmJhclwiXHJcbmltcG9ydCB7IE1lbnUsIE1lbnVJdGVtQSwgTWVudUxpc3QsIG1lbnVEYXRhIH0gZnJvbSBcIi4uL01lbnVcIlxyXG5pbXBvcnQgeyBPcGVuTGlua0Fycm93IH0gZnJvbSBcImNvbXBvbmVudHMvSWNvbnNcIlxyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgYFxyXG5cclxuY29uc3QgU3BhY2VyID0gc3R5bGVkLmRpdmBcclxuICAke3R3YGgtZnVsbCB3LTJgfVxyXG5gXHJcbmNvbnN0IGljb25zID0geyBvcGVuTGlua0Fycm93OiBPcGVuTGlua0Fycm93IH1cclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiBzZXRNZW51T3BlbighbWVudU9wZW4pXHJcbiAgY29uc3QgY2xvc2VNZW51ID0gKCkgPT4gc2V0TWVudU9wZW4obnVsbClcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXIgaWQ9XCJhcmdvLWVsYXN0aWMtbWVudVwiPlxyXG4gICAgICA8TWVudSBpc09wZW49e21lbnVPcGVufSBvbkNsb3NlPXtjbG9zZU1lbnV9PlxyXG4gICAgICAgIDxNZW51TGlzdD5cclxuICAgICAgICAgIHsvKiA8TG9nbyAvPiAqL31cclxuICAgICAgICAgIHttZW51RGF0YS5tYXAoKHsgaXRlbTogeyBtaWQsIHRpdGxlLCBzbHVnLCBpY29uLCB0YXJnZXQgfSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBJY29uID0gaWNvbnNbaWNvbl1cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8TGluayBrZXk9e21pZH0gaHJlZj17YCR7c2x1Z31gfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbUEgb25DbGljaz17Y2xvc2VNZW51fSB0YXJnZXQ9e3RhcmdldH0+XHJcbiAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgPFNwYWNlciAvPlxyXG4gICAgICAgICAgICAgICAgICB7SWNvbiAmJiA8SWNvbiBzaXplPXsyOH0gLz59XHJcbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtQT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvTWVudUxpc3Q+XHJcbiAgICAgIDwvTWVudT5cclxuICAgICAgPE5hdmJhciBtZW51T3Blbj17bWVudU9wZW59IHRvZ2dsZU1lbnU9e3RvZ2dsZU1lbnV9IC8+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==