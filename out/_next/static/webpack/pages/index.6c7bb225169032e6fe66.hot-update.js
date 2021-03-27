webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PricingCards.js":
/*!************************************!*\
  !*** ./components/PricingCards.js ***!
  \************************************/
/*! exports provided: PricingCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingCards", function() { return PricingCards; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Button */ "./components/Button.js");


var _jsxFileName = "C:\\Users\\4hyun\\Documents\\argo-web-next\\components\\PricingCards.js",
    _this = undefined;




var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PricingCards__Container",
  componentId: "sc-15u2yf1-0"
})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"]);
/* Utils */

_c = Container;

var featureParser = function featureParser(feature) {
  // TODO: destructure feature by delimiter (colon)
  return feature.split(":");
};

var specialHeadingParser = function specialHeadingParser(heading) {
  return heading.includes("Flex") ? heading.replace(" ", "\n") : heading;
};

var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PricingCards__CardWrapper",
  componentId: "sc-15u2yf1-1"
})(["", " @media (min-width:1024px){min-width:225px;}"], {
  "display": "flex",
  "flexDirection": "column",
  "--tw-shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "> :not([hidden]) ~ :not([hidden])": {
    "--tw-space-y-reverse": 0,
    "marginTop": "calc(1.25rem * calc(1 - var(--tw-space-y-reverse)))",
    "marginBottom": "calc(1.25rem * var(--tw-space-y-reverse))"
  },
  "padding": "2.5rem"
});
_c2 = CardWrapper;

var Card = function Card(_ref) {
  var priceData = _ref.priceData;
  var price = priceData.price,
      price_unit = priceData.price_unit,
      heading = priceData.heading,
      feature = priceData.feature,
      cta_text = priceData.cta_text,
      cta_link = priceData.cta_link,
      desc_list = priceData.desc_list;
  var featureList = feature ? featureParser(feature) : null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: "heading leading-tight whitespace-pre-line w-full",
      children: specialHeadingParser(heading)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: featureList.map(function (featureItem) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "feature-item text-center leading-none",
          children: featureItem
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "desc-list font-bold",
      children: desc_list.map(function (desc_item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: desc_item
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this), cta_text && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "cta-container flex flex-col flex-grow align-items-end",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: cta_text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, _this);
};

_c3 = Card;

var PricingCards = function PricingCards(_ref2) {
  var priceModels = _ref2.priceModels;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    className: "flex space-x-8 rounded-lg",
    children: priceModels && priceModels.map(function (priceData) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
        priceData: priceData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 18
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, _this);
};

_c4 = PricingCards;


var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "CardWrapper");
$RefreshReg$(_c3, "Card");
$RefreshReg$(_c4, "PricingCards");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljaW5nQ2FyZHMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiZmVhdHVyZVBhcnNlciIsImZlYXR1cmUiLCJzcGxpdCIsInNwZWNpYWxIZWFkaW5nUGFyc2VyIiwiaGVhZGluZyIsImluY2x1ZGVzIiwicmVwbGFjZSIsIkNhcmRXcmFwcGVyIiwiQ2FyZCIsInByaWNlRGF0YSIsInByaWNlIiwicHJpY2VfdW5pdCIsImN0YV90ZXh0IiwiY3RhX2xpbmsiLCJkZXNjX2xpc3QiLCJmZWF0dXJlTGlzdCIsIm1hcCIsImZlYXR1cmVJdGVtIiwiZGVzY19pdGVtIiwiUHJpY2luZ0NhcmRzIiwicHJpY2VNb2RlbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBFQUFmO0FBT0E7O0tBUE1GLFM7O0FBUU4sSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxPQUFELEVBQWE7QUFDakM7QUFDQSxTQUFPQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxHQUFkLENBQVA7QUFDRCxDQUhEOztBQUtBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsT0FBRDtBQUFBLFNBQzNCQSxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsTUFBakIsSUFBMkJELE9BQU8sQ0FBQ0UsT0FBUixDQUFnQixHQUFoQixFQUFxQixJQUFyQixDQUEzQixHQUF3REYsT0FEN0I7QUFBQSxDQUE3Qjs7QUFHQSxJQUFNRyxXQUFXLEdBQUdULHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseURBQ1g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBRFcsQ0FBakI7TUFBTVEsVzs7QUFPTixJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFtQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFBQSxNQUU1QkMsS0FGNEIsR0FTMUJELFNBVDBCLENBRTVCQyxLQUY0QjtBQUFBLE1BRzVCQyxVQUg0QixHQVMxQkYsU0FUMEIsQ0FHNUJFLFVBSDRCO0FBQUEsTUFJNUJQLE9BSjRCLEdBUzFCSyxTQVQwQixDQUk1QkwsT0FKNEI7QUFBQSxNQUs1QkgsT0FMNEIsR0FTMUJRLFNBVDBCLENBSzVCUixPQUw0QjtBQUFBLE1BTTVCVyxRQU40QixHQVMxQkgsU0FUMEIsQ0FNNUJHLFFBTjRCO0FBQUEsTUFPNUJDLFFBUDRCLEdBUzFCSixTQVQwQixDQU81QkksUUFQNEI7QUFBQSxNQVE1QkMsU0FSNEIsR0FTMUJMLFNBVDBCLENBUTVCSyxTQVI0QjtBQVU5QixNQUFNQyxXQUFXLEdBQUdkLE9BQU8sR0FBR0QsYUFBYSxDQUFDQyxPQUFELENBQWhCLEdBQTRCLElBQXZEO0FBQ0Esc0JBQ0UscUVBQUMsV0FBRDtBQUFBLDRCQUVFO0FBQUksZUFBUyxFQUFDLGtEQUFkO0FBQUEsZ0JBQ0dFLG9CQUFvQixDQUFDQyxPQUFEO0FBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUtFO0FBQUEsZ0JBQ0dXLFdBQVcsQ0FBQ0MsR0FBWixDQUFnQixVQUFDQyxXQUFEO0FBQUEsNEJBQ2Y7QUFBSSxtQkFBUyxFQUFDLHVDQUFkO0FBQUEsb0JBQ0dBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZTtBQUFBLE9BQWhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBWUU7QUFBSSxlQUFTLEVBQUMscUJBQWQ7QUFBQSxnQkFDR0gsU0FBUyxDQUFDRSxHQUFWLENBQWMsVUFBQ0UsU0FBRDtBQUFBLDRCQUNiO0FBQUEsb0JBQUtBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkYsRUFpQkdOLFFBQVEsaUJBQ1A7QUFBSyxlQUFTLEVBQUMsdURBQWY7QUFBQSw2QkFDRSxxRUFBQyx5REFBRDtBQUFBLGtCQUFvQkE7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5QkQsQ0FwQ0Q7O01BQU1KLEk7O0FBc0NOLElBQU1XLFlBQVksR0FBRyxTQUFmQSxZQUFlLFFBQXFCO0FBQUEsTUFBbEJDLFdBQWtCLFNBQWxCQSxXQUFrQjtBQUN4QyxzQkFDRSxxRUFBQyxTQUFEO0FBQVcsYUFBUyxFQUFDLDJCQUFyQjtBQUFBLGNBQ0dBLFdBQVcsSUFDVkEsV0FBVyxDQUFDSixHQUFaLENBQWdCLFVBQUNQLFNBQUQsRUFBZTtBQUM3QiwwQkFBTyxxRUFBQyxJQUFEO0FBQU0saUJBQVMsRUFBRUE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsS0FGRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBVEQ7O01BQU1VLFk7QUFXTiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YzdiYjIyNTE2OTAzMmU2ZmU2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUm91bmRlZEJsdWVCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvQnV0dG9uXCI7XHJcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5gO1xyXG5cclxuLyogVXRpbHMgKi9cclxuY29uc3QgZmVhdHVyZVBhcnNlciA9IChmZWF0dXJlKSA9PiB7XHJcbiAgLy8gVE9ETzogZGVzdHJ1Y3R1cmUgZmVhdHVyZSBieSBkZWxpbWl0ZXIgKGNvbG9uKVxyXG4gIHJldHVybiBmZWF0dXJlLnNwbGl0KFwiOlwiKTtcclxufTtcclxuXHJcbmNvbnN0IHNwZWNpYWxIZWFkaW5nUGFyc2VyID0gKGhlYWRpbmcpID0+XHJcbiAgaGVhZGluZy5pbmNsdWRlcyhcIkZsZXhcIikgPyBoZWFkaW5nLnJlcGxhY2UoXCIgXCIsIFwiXFxuXCIpIDogaGVhZGluZztcclxuXHJcbmNvbnN0IENhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAke3R3YCBmbGV4IGZsZXgtY29sIHNoYWRvdy1sZyBzcGFjZS15LTUgcC0xMGB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgbWluLXdpZHRoOiAyMjVweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkID0gKHsgcHJpY2VEYXRhIH0pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBwcmljZSxcclxuICAgIHByaWNlX3VuaXQsXHJcbiAgICBoZWFkaW5nLFxyXG4gICAgZmVhdHVyZSxcclxuICAgIGN0YV90ZXh0LFxyXG4gICAgY3RhX2xpbmssXHJcbiAgICBkZXNjX2xpc3QsXHJcbiAgfSA9IHByaWNlRGF0YTtcclxuICBjb25zdCBmZWF0dXJlTGlzdCA9IGZlYXR1cmUgPyBmZWF0dXJlUGFyc2VyKGZlYXR1cmUpIDogbnVsbDtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRXcmFwcGVyPlxyXG4gICAgICB7LyogPGg2IGNsYXNzTmFtZT1cInR5cGVcIj5Bd2Vzb21lPC9oNj4gKi99XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJoZWFkaW5nIGxlYWRpbmctdGlnaHQgd2hpdGVzcGFjZS1wcmUtbGluZSB3LWZ1bGxcIj5cclxuICAgICAgICB7c3BlY2lhbEhlYWRpbmdQYXJzZXIoaGVhZGluZyl9XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7ZmVhdHVyZUxpc3QubWFwKChmZWF0dXJlSXRlbSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXR1cmUtaXRlbSB0ZXh0LWNlbnRlciBsZWFkaW5nLW5vbmVcIj5cclxuICAgICAgICAgICAge2ZlYXR1cmVJdGVtfVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImRlc2MtbGlzdCBmb250LWJvbGRcIj5cclxuICAgICAgICB7ZGVzY19saXN0Lm1hcCgoZGVzY19pdGVtKSA9PiAoXHJcbiAgICAgICAgICA8bGk+e2Rlc2NfaXRlbX08L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICB7Y3RhX3RleHQgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3RhLWNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGZsZXgtZ3JvdyBhbGlnbi1pdGVtcy1lbmRcIj5cclxuICAgICAgICAgIDxSb3VuZGVkQmx1ZUJ1dHRvbj57Y3RhX3RleHR9PC9Sb3VuZGVkQmx1ZUJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvQ2FyZFdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFByaWNpbmdDYXJkcyA9ICh7IHByaWNlTW9kZWxzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtOCByb3VuZGVkLWxnXCI+XHJcbiAgICAgIHtwcmljZU1vZGVscyAmJlxyXG4gICAgICAgIHByaWNlTW9kZWxzLm1hcCgocHJpY2VEYXRhKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPENhcmQgcHJpY2VEYXRhPXtwcmljZURhdGF9IC8+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFByaWNpbmdDYXJkcyB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9