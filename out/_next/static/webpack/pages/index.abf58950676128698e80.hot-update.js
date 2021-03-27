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
  return heading.replaceAll(" ", "\n");
};

var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PricingCards__CardWrapper",
  componentId: "sc-15u2yf1-1"
})(["", " @media (min-width:1024px){min-width:225px;}"], {
  "display": "flex",
  "flexDirection": "column",
  "--tw-shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 0px 6px -2px rgba(0, 0, 0, 0.05)",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "> :not([hidden]) ~ :not([hidden])": {
    "--tw-space-y-reverse": 0,
    "marginTop": "calc(1.25rem * calc(1 - var(--tw-space-y-reverse)))",
    "marginBottom": "calc(1.25rem * var(--tw-space-y-reverse))"
  },
  "padding": "2.5rem",
  "borderRadius": "0.75rem"
});
_c2 = CardWrapper;
var InquireButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(components_Button__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "PricingCards__InquireButton",
  componentId: "sc-15u2yf1-2"
})(["", ""], {
  "borderRadius": "9999px",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "fontSize": "1rem",
  "lineHeight": "1.5rem"
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
      children: specialHeadingParser(heading)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: featureList.map(function (featureItem) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "feature-item text-center leading-none",
          children: featureItem
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "desc-list font-bold",
      children: desc_list.map(function (desc_item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: desc_item
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), cta_text && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "cta-container flex flex-col flex-grow align-items-end",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InquireButton, {
        children: cta_text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, _this);
};

_c4 = Card;

var PricingCards = function PricingCards(_ref2) {
  var priceModels = _ref2.priceModels;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    className: "flex space-x-8",
    children: priceModels && priceModels.map(function (priceData) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
        priceData: priceData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 18
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljaW5nQ2FyZHMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiZmVhdHVyZVBhcnNlciIsImZlYXR1cmUiLCJzcGxpdCIsInNwZWNpYWxIZWFkaW5nUGFyc2VyIiwiaGVhZGluZyIsInJlcGxhY2VBbGwiLCJDYXJkV3JhcHBlciIsIklucXVpcmVCdXR0b24iLCJSb3VuZGVkQmx1ZUJ1dHRvbiIsIkNhcmQiLCJwcmljZURhdGEiLCJwcmljZSIsInByaWNlX3VuaXQiLCJjdGFfdGV4dCIsImN0YV9saW5rIiwiZGVzY19saXN0IiwiZmVhdHVyZUxpc3QiLCJtYXAiLCJmZWF0dXJlSXRlbSIsImRlc2NfaXRlbSIsIlByaWNpbmdDYXJkcyIsInByaWNlTW9kZWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxRQUFmO0FBRUE7O0tBRk1GLFM7O0FBR04sSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxPQUFELEVBQWE7QUFDakM7QUFDQSxTQUFPQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxHQUFkLENBQVA7QUFDRCxDQUhEOztBQUtBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsT0FBRDtBQUFBLFNBQWFBLE9BQU8sQ0FBQ0MsVUFBUixDQUFtQixHQUFuQixFQUF3QixJQUF4QixDQUFiO0FBQUEsQ0FBN0I7O0FBRUEsSUFBTUMsV0FBVyxHQUFHUix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlEQUNYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBRFcsQ0FBakI7TUFBTU8sVztBQU9OLElBQU1DLGFBQWEsR0FBR1QsaUVBQU0sQ0FBQ1UseURBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxhQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBRGEsQ0FBbkI7TUFBTUQsYTs7QUFJTixJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFtQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFBQSxNQUU1QkMsS0FGNEIsR0FTMUJELFNBVDBCLENBRTVCQyxLQUY0QjtBQUFBLE1BRzVCQyxVQUg0QixHQVMxQkYsU0FUMEIsQ0FHNUJFLFVBSDRCO0FBQUEsTUFJNUJSLE9BSjRCLEdBUzFCTSxTQVQwQixDQUk1Qk4sT0FKNEI7QUFBQSxNQUs1QkgsT0FMNEIsR0FTMUJTLFNBVDBCLENBSzVCVCxPQUw0QjtBQUFBLE1BTTVCWSxRQU40QixHQVMxQkgsU0FUMEIsQ0FNNUJHLFFBTjRCO0FBQUEsTUFPNUJDLFFBUDRCLEdBUzFCSixTQVQwQixDQU81QkksUUFQNEI7QUFBQSxNQVE1QkMsU0FSNEIsR0FTMUJMLFNBVDBCLENBUTVCSyxTQVI0QjtBQVU5QixNQUFNQyxXQUFXLEdBQUdmLE9BQU8sR0FBR0QsYUFBYSxDQUFDQyxPQUFELENBQWhCLEdBQTRCLElBQXZEO0FBQ0Esc0JBQ0UscUVBQUMsV0FBRDtBQUFBLDRCQUVFO0FBQUksZUFBUyxFQUFDLDJFQUFkO0FBQUEsZ0JBQ0dFLG9CQUFvQixDQUFDQyxPQUFEO0FBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUtFO0FBQUEsZ0JBQ0dZLFdBQVcsQ0FBQ0MsR0FBWixDQUFnQixVQUFDQyxXQUFEO0FBQUEsNEJBQ2Y7QUFBSSxtQkFBUyxFQUFDLHVDQUFkO0FBQUEsb0JBQ0dBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZTtBQUFBLE9BQWhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBWUU7QUFBSSxlQUFTLEVBQUMscUJBQWQ7QUFBQSxnQkFDR0gsU0FBUyxDQUFDRSxHQUFWLENBQWMsVUFBQ0UsU0FBRDtBQUFBLDRCQUNiO0FBQUEsb0JBQUtBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkYsRUFpQkdOLFFBQVEsaUJBQ1A7QUFBSyxlQUFTLEVBQUMsdURBQWY7QUFBQSw2QkFDRSxxRUFBQyxhQUFEO0FBQUEsa0JBQWdCQTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlCRCxDQXBDRDs7TUFBTUosSTs7QUFzQ04sSUFBTVcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsUUFBcUI7QUFBQSxNQUFsQkMsV0FBa0IsU0FBbEJBLFdBQWtCO0FBQ3hDLHNCQUNFLHFFQUFDLFNBQUQ7QUFBVyxhQUFTLEVBQUMsZ0JBQXJCO0FBQUEsY0FDR0EsV0FBVyxJQUNWQSxXQUFXLENBQUNKLEdBQVosQ0FBZ0IsVUFBQ1AsU0FBRCxFQUFlO0FBQzdCLDBCQUFPLHFFQUFDLElBQUQ7QUFBTSxpQkFBUyxFQUFFQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxLQUZEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0FURDs7TUFBTVUsWTtBQVdOIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFiZjU4OTUwNjc2MTI4Njk4ZTgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSb3VuZGVkQmx1ZUJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9CdXR0b25cIjtcclxuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG4vKiBVdGlscyAqL1xyXG5jb25zdCBmZWF0dXJlUGFyc2VyID0gKGZlYXR1cmUpID0+IHtcclxuICAvLyBUT0RPOiBkZXN0cnVjdHVyZSBmZWF0dXJlIGJ5IGRlbGltaXRlciAoY29sb24pXHJcbiAgcmV0dXJuIGZlYXR1cmUuc3BsaXQoXCI6XCIpO1xyXG59O1xyXG5cclxuY29uc3Qgc3BlY2lhbEhlYWRpbmdQYXJzZXIgPSAoaGVhZGluZykgPT4gaGVhZGluZy5yZXBsYWNlQWxsKFwiIFwiLCBcIlxcblwiKTtcclxuXHJcbmNvbnN0IENhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAke3R3YGZsZXggZmxleC1jb2wgc2hhZG93LWxnIHNwYWNlLXktNSBwLTEwIHJvdW5kZWQteGxgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIG1pbi13aWR0aDogMjI1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW5xdWlyZUJ1dHRvbiA9IHN0eWxlZChSb3VuZGVkQmx1ZUJ1dHRvbilgXHJcbiAgJHt0d2Byb3VuZGVkLWZ1bGwgcHktMiB0ZXh0LWJhc2VgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZCA9ICh7IHByaWNlRGF0YSB9KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcHJpY2UsXHJcbiAgICBwcmljZV91bml0LFxyXG4gICAgaGVhZGluZyxcclxuICAgIGZlYXR1cmUsXHJcbiAgICBjdGFfdGV4dCxcclxuICAgIGN0YV9saW5rLFxyXG4gICAgZGVzY19saXN0LFxyXG4gIH0gPSBwcmljZURhdGE7XHJcbiAgY29uc3QgZmVhdHVyZUxpc3QgPSBmZWF0dXJlID8gZmVhdHVyZVBhcnNlcihmZWF0dXJlKSA6IG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkV3JhcHBlcj5cclxuICAgICAgey8qIDxoNiBjbGFzc05hbWU9XCJ0eXBlXCI+QXdlc29tZTwvaDY+ICovfVxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwibGljZW5zZS1uYW1lIGxlYWRpbmctdGlnaHQgdy1mdWxsIHRleHQtM3hsIGZvbnQtYmxhY2sgd2hpdGVzcGFjZS1wcmUtbGluZVwiPlxyXG4gICAgICAgIHtzcGVjaWFsSGVhZGluZ1BhcnNlcihoZWFkaW5nKX1cclxuICAgICAgPC9oMz5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtmZWF0dXJlTGlzdC5tYXAoKGZlYXR1cmVJdGVtKSA9PiAoXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdHVyZS1pdGVtIHRleHQtY2VudGVyIGxlYWRpbmctbm9uZVwiPlxyXG4gICAgICAgICAgICB7ZmVhdHVyZUl0ZW19XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZGVzYy1saXN0IGZvbnQtYm9sZFwiPlxyXG4gICAgICAgIHtkZXNjX2xpc3QubWFwKChkZXNjX2l0ZW0pID0+IChcclxuICAgICAgICAgIDxsaT57ZGVzY19pdGVtfTwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIHtjdGFfdGV4dCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGEtY29udGFpbmVyIGZsZXggZmxleC1jb2wgZmxleC1ncm93IGFsaWduLWl0ZW1zLWVuZFwiPlxyXG4gICAgICAgICAgPElucXVpcmVCdXR0b24+e2N0YV90ZXh0fTwvSW5xdWlyZUJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvQ2FyZFdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFByaWNpbmdDYXJkcyA9ICh7IHByaWNlTW9kZWxzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtOFwiPlxyXG4gICAgICB7cHJpY2VNb2RlbHMgJiZcclxuICAgICAgICBwcmljZU1vZGVscy5tYXAoKHByaWNlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxDYXJkIHByaWNlRGF0YT17cHJpY2VEYXRhfSAvPjtcclxuICAgICAgICB9KX1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBQcmljaW5nQ2FyZHMgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==