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
})([""]);
/* Utils */

_c = Container;

var featureParser = function featureParser(feature) {
  // TODO: destructure feature by delimiter (colon)
  return feature.split(":");
};

var specialHeadingParser = function specialHeadingParser(heading) {
  return heading.replace(/ /g, "\n");
};

var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PricingCards__CardWrapper",
  componentId: "sc-15u2yf1-1"
})(["", " &{flex-basis:0;}@media (min-width:1024px){min-width:225px;}"], {
  "display": "flex",
  "flexDirection": "row",
  "flexGrow": "1",
  "--tw-shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 0px 6px -2px rgba(0, 0, 0, 0.05)",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "> :not([hidden]) ~ :not([hidden])": {
    "--tw-space-y-reverse": 0,
    "marginTop": "calc(1.25rem * calc(1 - var(--tw-space-y-reverse)))",
    "marginBottom": "calc(1.25rem * var(--tw-space-y-reverse))"
  },
  "padding": "2.5rem",
  "borderRadius": "0.75rem",
  ":focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  },
  "@media (min-width: 1280px)": {
    "flexDirection": "column"
  }
});
_c2 = CardWrapper;
var InquireButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(components_Button__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "PricingCards__InquireButton",
  componentId: "sc-15u2yf1-2"
})(["", ""], {
  "--tw-translate-x": "0",
  "--tw-translate-y": "0",
  "--tw-rotate": "0",
  "--tw-skew-x": "0",
  "--tw-skew-y": "0",
  "--tw-scale-x": "1",
  "--tw-scale-y": "1",
  "transform": "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
  "borderRadius": "9999px",
  "paddingTop": "0.75rem",
  "paddingBottom": "0.75rem",
  "fontSize": "1rem",
  "lineHeight": "1.5rem",
  ":focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  },
  "transitionProperty": "all",
  "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
  "transitionDuration": "150ms",
  ":active": {
    "--tw-translate-x": "0.25rem",
    "--tw-translate-y": "0.25rem"
  },
  "marginLeft": "1rem",
  "marginRight": "1rem"
});
_c3 = InquireButton;

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
      className: "license-name leading-tight w-full text-3xl font-black whitespace-pre-line",
      children: heading && specialHeadingParser(heading)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "feature-list space-y-0.5",
      children: featureList.map(function (featureItem) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "feature-item text-center whitespace-pre",
          children: featureItem
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "desc-list font-bold",
      children: desc_list.map(function (desc_item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "mb-2",
          children: desc_item
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this), cta_text && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "cta-container flex flex-col flex-grow align-items-end",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InquireButton, {
        children: cta_text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, _this);
};

_c4 = Card;

var PricingCards = function PricingCards(_ref2) {
  var priceModels = _ref2.priceModels;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    className: "flex flex-col xl:flex-row space-x-8",
    children: priceModels && priceModels.map(function (priceData) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
        priceData: priceData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 18
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, _this);
};

_c5 = PricingCards;


var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "CardWrapper");
$RefreshReg$(_c3, "InquireButton");
$RefreshReg$(_c4, "Card");
$RefreshReg$(_c5, "PricingCards");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljaW5nQ2FyZHMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiZmVhdHVyZVBhcnNlciIsImZlYXR1cmUiLCJzcGxpdCIsInNwZWNpYWxIZWFkaW5nUGFyc2VyIiwiaGVhZGluZyIsInJlcGxhY2UiLCJDYXJkV3JhcHBlciIsIklucXVpcmVCdXR0b24iLCJSb3VuZGVkQmx1ZUJ1dHRvbiIsIkNhcmQiLCJwcmljZURhdGEiLCJwcmljZSIsInByaWNlX3VuaXQiLCJjdGFfdGV4dCIsImN0YV9saW5rIiwiZGVzY19saXN0IiwiZmVhdHVyZUxpc3QiLCJtYXAiLCJmZWF0dXJlSXRlbSIsImRlc2NfaXRlbSIsIlByaWNpbmdDYXJkcyIsInByaWNlTW9kZWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxRQUFmO0FBRUE7O0tBRk1GLFM7O0FBR04sSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxPQUFELEVBQWE7QUFDakM7QUFDQSxTQUFPQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxHQUFkLENBQVA7QUFDRCxDQUhEOztBQUtBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsT0FBRDtBQUFBLFNBQWFBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixJQUFoQixFQUFzQixJQUF0QixDQUFiO0FBQUEsQ0FBN0I7O0FBRUEsSUFBTUMsV0FBVyxHQUFHUix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlFQUNYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQURXLENBQWpCO01BQU1PLFc7QUFVTixJQUFNQyxhQUFhLEdBQUdULGlFQUFNLENBQUNVLHlEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsYUFDYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQURhLENBQW5CO01BQU1ELGE7O0FBSU4sSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBbUI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQUEsTUFFNUJDLEtBRjRCLEdBUzFCRCxTQVQwQixDQUU1QkMsS0FGNEI7QUFBQSxNQUc1QkMsVUFINEIsR0FTMUJGLFNBVDBCLENBRzVCRSxVQUg0QjtBQUFBLE1BSTVCUixPQUo0QixHQVMxQk0sU0FUMEIsQ0FJNUJOLE9BSjRCO0FBQUEsTUFLNUJILE9BTDRCLEdBUzFCUyxTQVQwQixDQUs1QlQsT0FMNEI7QUFBQSxNQU01QlksUUFONEIsR0FTMUJILFNBVDBCLENBTTVCRyxRQU40QjtBQUFBLE1BTzVCQyxRQVA0QixHQVMxQkosU0FUMEIsQ0FPNUJJLFFBUDRCO0FBQUEsTUFRNUJDLFNBUjRCLEdBUzFCTCxTQVQwQixDQVE1QkssU0FSNEI7QUFVOUIsTUFBTUMsV0FBVyxHQUFHZixPQUFPLEdBQUdELGFBQWEsQ0FBQ0MsT0FBRCxDQUFoQixHQUE0QixJQUF2RDtBQUNBLHNCQUNFLHFFQUFDLFdBQUQ7QUFBQSw0QkFFRTtBQUFJLGVBQVMsRUFBQywyRUFBZDtBQUFBLGdCQUNHRyxPQUFPLElBQUlELG9CQUFvQixDQUFDQyxPQUFEO0FBRGxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUtFO0FBQUksZUFBUyxFQUFDLDBCQUFkO0FBQUEsZ0JBQ0dZLFdBQVcsQ0FBQ0MsR0FBWixDQUFnQixVQUFDQyxXQUFEO0FBQUEsNEJBQ2Y7QUFBSSxtQkFBUyxFQUFDLHlDQUFkO0FBQUEsb0JBQ0dBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZTtBQUFBLE9BQWhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBWUU7QUFBSSxlQUFTLEVBQUMscUJBQWQ7QUFBQSxnQkFDR0gsU0FBUyxDQUFDRSxHQUFWLENBQWMsVUFBQ0UsU0FBRDtBQUFBLDRCQUNiO0FBQUksbUJBQVMsRUFBQyxNQUFkO0FBQUEsb0JBQXNCQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRixFQWlCR04sUUFBUSxpQkFDUDtBQUFLLGVBQVMsRUFBQyx1REFBZjtBQUFBLDZCQUNFLHFFQUFDLGFBQUQ7QUFBQSxrQkFBZ0JBO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUJELENBcENEOztNQUFNSixJOztBQXNDTixJQUFNVyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxRQUFxQjtBQUFBLE1BQWxCQyxXQUFrQixTQUFsQkEsV0FBa0I7QUFDeEMsc0JBQ0UscUVBQUMsU0FBRDtBQUFXLGFBQVMsRUFBQyxxQ0FBckI7QUFBQSxjQUNHQSxXQUFXLElBQ1ZBLFdBQVcsQ0FBQ0osR0FBWixDQUFnQixVQUFDUCxTQUFELEVBQWU7QUFDN0IsMEJBQU8scUVBQUMsSUFBRDtBQUFNLGlCQUFTLEVBQUVBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELEtBRkQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQVREOztNQUFNVSxZO0FBV04iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTU5Y2I1ZGYxZjgzYjgyY2MwMmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJvdW5kZWRCbHVlQnV0dG9uIGZyb20gXCJjb21wb25lbnRzL0J1dHRvblwiO1xyXG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgYDtcclxuXHJcbi8qIFV0aWxzICovXHJcbmNvbnN0IGZlYXR1cmVQYXJzZXIgPSAoZmVhdHVyZSkgPT4ge1xyXG4gIC8vIFRPRE86IGRlc3RydWN0dXJlIGZlYXR1cmUgYnkgZGVsaW1pdGVyIChjb2xvbilcclxuICByZXR1cm4gZmVhdHVyZS5zcGxpdChcIjpcIik7XHJcbn07XHJcblxyXG5jb25zdCBzcGVjaWFsSGVhZGluZ1BhcnNlciA9IChoZWFkaW5nKSA9PiBoZWFkaW5nLnJlcGxhY2UoLyAvZywgXCJcXG5cIik7XHJcblxyXG5jb25zdCBDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2BmbGV4IGZsZXgtcm93IHhsOmZsZXgtY29sIGZsZXgtZ3JvdyBzaGFkb3ctbGcgc3BhY2UteS01IHAtMTAgcm91bmRlZC14bCBmb2N1czpvdXRsaW5lLW5vbmVgfVxyXG4gICYge1xyXG4gICAgZmxleC1iYXNpczogMDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgbWluLXdpZHRoOiAyMjVweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbnF1aXJlQnV0dG9uID0gc3R5bGVkKFJvdW5kZWRCbHVlQnV0dG9uKWBcclxuICAke3R3YHJvdW5kZWQtZnVsbCBweS0zIHRleHQtYmFzZSBmb2N1czpvdXRsaW5lLW5vbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIGFjdGl2ZTp0cmFuc2xhdGUteC0xIGFjdGl2ZTp0cmFuc2xhdGUteS0xIG14LTRgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZCA9ICh7IHByaWNlRGF0YSB9KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcHJpY2UsXHJcbiAgICBwcmljZV91bml0LFxyXG4gICAgaGVhZGluZyxcclxuICAgIGZlYXR1cmUsXHJcbiAgICBjdGFfdGV4dCxcclxuICAgIGN0YV9saW5rLFxyXG4gICAgZGVzY19saXN0LFxyXG4gIH0gPSBwcmljZURhdGE7XHJcbiAgY29uc3QgZmVhdHVyZUxpc3QgPSBmZWF0dXJlID8gZmVhdHVyZVBhcnNlcihmZWF0dXJlKSA6IG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkV3JhcHBlcj5cclxuICAgICAgey8qIDxoNiBjbGFzc05hbWU9XCJ0eXBlXCI+QXdlc29tZTwvaDY+ICovfVxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwibGljZW5zZS1uYW1lIGxlYWRpbmctdGlnaHQgdy1mdWxsIHRleHQtM3hsIGZvbnQtYmxhY2sgd2hpdGVzcGFjZS1wcmUtbGluZVwiPlxyXG4gICAgICAgIHtoZWFkaW5nICYmIHNwZWNpYWxIZWFkaW5nUGFyc2VyKGhlYWRpbmcpfVxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZmVhdHVyZS1saXN0IHNwYWNlLXktMC41XCI+XHJcbiAgICAgICAge2ZlYXR1cmVMaXN0Lm1hcCgoZmVhdHVyZUl0ZW0pID0+IChcclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmZWF0dXJlLWl0ZW0gdGV4dC1jZW50ZXIgd2hpdGVzcGFjZS1wcmVcIj5cclxuICAgICAgICAgICAge2ZlYXR1cmVJdGVtfVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImRlc2MtbGlzdCBmb250LWJvbGRcIj5cclxuICAgICAgICB7ZGVzY19saXN0Lm1hcCgoZGVzY19pdGVtKSA9PiAoXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItMlwiPntkZXNjX2l0ZW19PC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAge2N0YV90ZXh0ICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YS1jb250YWluZXIgZmxleCBmbGV4LWNvbCBmbGV4LWdyb3cgYWxpZ24taXRlbXMtZW5kXCI+XHJcbiAgICAgICAgICA8SW5xdWlyZUJ1dHRvbj57Y3RhX3RleHR9PC9JbnF1aXJlQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9DYXJkV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJpY2luZ0NhcmRzID0gKHsgcHJpY2VNb2RlbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgeGw6ZmxleC1yb3cgc3BhY2UteC04XCI+XHJcbiAgICAgIHtwcmljZU1vZGVscyAmJlxyXG4gICAgICAgIHByaWNlTW9kZWxzLm1hcCgocHJpY2VEYXRhKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPENhcmQgcHJpY2VEYXRhPXtwcmljZURhdGF9IC8+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFByaWNpbmdDYXJkcyB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9