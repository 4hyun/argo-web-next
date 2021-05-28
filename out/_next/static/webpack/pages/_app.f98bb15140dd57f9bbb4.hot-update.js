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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Navbar */ "./components/Navbar/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Menu */ "./components/Menu/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\4hyun\\Documents\\1-Argo\\web\\argo-web-next\\components\\Layout\\Header.js",
    _this = undefined,
    _s = $RefreshSig$();






var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "Header__Wrapper",
  componentId: "u1g7fc-0"
})([""]);

var icon = {
  openLinkArrow: "OpenLinkArrow"
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
              slug = _ref$item.slug;
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/".concat(slug),
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_4__.MenuItemA, {
              onClick: closeMenu,
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, _this)
          }, mid, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, {
      menuOpen: menuOpen,
      toggleMenu: toggleMenu
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJpY29uIiwib3BlbkxpbmtBcnJvdyIsIkhlYWRlciIsInVzZVN0YXRlIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsInRvZ2dsZU1lbnUiLCJjbG9zZU1lbnUiLCJtZW51RGF0YSIsIml0ZW0iLCJtaWQiLCJ0aXRsZSIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsUUFBYjs7QUFFQSxJQUFNQyxJQUFJLEdBQUc7QUFBRUMsZUFBYSxFQUFFO0FBQWpCLENBQWI7O0FBRUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNhQywrQ0FBUSxDQUFDLElBQUQsQ0FEckI7QUFBQSxNQUNaQyxRQURZO0FBQUEsTUFDRkMsV0FERTs7QUFHbkIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxXQUFNRCxXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFqQjtBQUFBLEdBQW5COztBQUNBLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsV0FBTUYsV0FBVyxDQUFDLElBQUQsQ0FBakI7QUFBQSxHQUFsQjs7QUFDQSxzQkFDRSw4REFBQyxPQUFEO0FBQVMsTUFBRSxFQUFDLG1CQUFaO0FBQUEsNEJBQ0UsOERBQUMsdUNBQUQ7QUFBTSxZQUFNLEVBQUVELFFBQWQ7QUFBd0IsYUFBTyxFQUFFRyxTQUFqQztBQUFBLDZCQUNFLDhEQUFDLDJDQUFEO0FBQUEsa0JBRUdDLCtDQUFBLENBQWE7QUFBQSwrQkFBR0MsSUFBSDtBQUFBLGNBQVdDLEdBQVgsYUFBV0EsR0FBWDtBQUFBLGNBQWdCQyxLQUFoQixhQUFnQkEsS0FBaEI7QUFBQSxjQUF1QkMsSUFBdkIsYUFBdUJBLElBQXZCO0FBQUEsOEJBQ1osOERBQUMsa0RBQUQ7QUFBZ0IsZ0JBQUksYUFBTUEsSUFBTixDQUFwQjtBQUFrQyxvQkFBUSxNQUExQztBQUFBLG1DQUNFLDhEQUFDLDRDQUFEO0FBQVcscUJBQU8sRUFBRUwsU0FBcEI7QUFBQSx3QkFBZ0NJO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFXRCxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFk7QUFBQSxTQUFiO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVdFLDhEQUFDLHNEQUFEO0FBQVEsY0FBUSxFQUFFTixRQUFsQjtBQUE0QixnQkFBVSxFQUFFRTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQXBCRDs7R0FBTUosTTs7S0FBQUEsTTtBQXNCTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmY5OGJiMTUxNDBkZDU3ZjliYmI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwidHdpbi5tYWNyb1wiXHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcImNvbXBvbmVudHMvTmF2YmFyXCJcclxuaW1wb3J0IHsgTWVudSwgTWVudUl0ZW1BLCBNZW51TGlzdCwgbWVudURhdGEgfSBmcm9tIFwiLi4vTWVudVwiXHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBgXHJcblxyXG5jb25zdCBpY29uID0geyBvcGVuTGlua0Fycm93OiBcIk9wZW5MaW5rQXJyb3dcIiB9XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4gc2V0TWVudU9wZW4oIW1lbnVPcGVuKVxyXG4gIGNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHNldE1lbnVPcGVuKG51bGwpXHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyIGlkPVwiYXJnby1lbGFzdGljLW1lbnVcIj5cclxuICAgICAgPE1lbnUgaXNPcGVuPXttZW51T3Blbn0gb25DbG9zZT17Y2xvc2VNZW51fT5cclxuICAgICAgICA8TWVudUxpc3Q+XHJcbiAgICAgICAgICB7LyogPExvZ28gLz4gKi99XHJcbiAgICAgICAgICB7bWVudURhdGEubWFwKCh7IGl0ZW06IHsgbWlkLCB0aXRsZSwgc2x1ZyB9IH0pID0+IChcclxuICAgICAgICAgICAgPExpbmsga2V5PXttaWR9IGhyZWY9e2AvJHtzbHVnfWB9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbUEgb25DbGljaz17Y2xvc2VNZW51fT57dGl0bGV9PC9NZW51SXRlbUE+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvTWVudUxpc3Q+XHJcbiAgICAgIDwvTWVudT5cclxuICAgICAgPE5hdmJhciBtZW51T3Blbj17bWVudU9wZW59IHRvZ2dsZU1lbnU9e3RvZ2dsZU1lbnV9IC8+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==