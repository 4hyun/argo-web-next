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
  "borderRadius": "0.5rem",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem"
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
      className: "heading leading-tight whitespace-pre-line w-full",
      children: specialHeadingParser(heading)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: featureList.map(function (featureItem) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "feature-item text-center leading-none",
          children: featureItem
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "desc-list font-bold",
      children: desc_list.map(function (desc_item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: desc_item
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this), cta_text && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "cta-container flex flex-col flex-grow align-items-end",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InquireButton, {
        children: cta_text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
        lineNumber: 76,
        columnNumber: 18
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljaW5nQ2FyZHMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiZmVhdHVyZVBhcnNlciIsImZlYXR1cmUiLCJzcGxpdCIsInNwZWNpYWxIZWFkaW5nUGFyc2VyIiwiaGVhZGluZyIsImluY2x1ZGVzIiwicmVwbGFjZSIsIkNhcmRXcmFwcGVyIiwiSW5xdWlyZUJ1dHRvbiIsIlJvdW5kZWRCbHVlQnV0dG9uIiwiQ2FyZCIsInByaWNlRGF0YSIsInByaWNlIiwicHJpY2VfdW5pdCIsImN0YV90ZXh0IiwiY3RhX2xpbmsiLCJkZXNjX2xpc3QiLCJmZWF0dXJlTGlzdCIsIm1hcCIsImZlYXR1cmVJdGVtIiwiZGVzY19pdGVtIiwiUHJpY2luZ0NhcmRzIiwicHJpY2VNb2RlbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBFQUFmO0FBT0E7O0tBUE1GLFM7O0FBUU4sSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxPQUFELEVBQWE7QUFDakM7QUFDQSxTQUFPQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxHQUFkLENBQVA7QUFDRCxDQUhEOztBQUtBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsT0FBRDtBQUFBLFNBQzNCQSxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsTUFBakIsSUFBMkJELE9BQU8sQ0FBQ0UsT0FBUixDQUFnQixHQUFoQixFQUFxQixJQUFyQixDQUEzQixHQUF3REYsT0FEN0I7QUFBQSxDQUE3Qjs7QUFHQSxJQUFNRyxXQUFXLEdBQUdULHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseURBQ1g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FEVyxDQUFqQjtNQUFNUSxXO0FBT04sSUFBTUMsYUFBYSxHQUFHVixpRUFBTSxDQUFDVyx5REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGFBQ2I7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQURhLENBQW5CO01BQU1ELGE7O0FBSU4sSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBbUI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQUEsTUFFNUJDLEtBRjRCLEdBUzFCRCxTQVQwQixDQUU1QkMsS0FGNEI7QUFBQSxNQUc1QkMsVUFINEIsR0FTMUJGLFNBVDBCLENBRzVCRSxVQUg0QjtBQUFBLE1BSTVCVCxPQUo0QixHQVMxQk8sU0FUMEIsQ0FJNUJQLE9BSjRCO0FBQUEsTUFLNUJILE9BTDRCLEdBUzFCVSxTQVQwQixDQUs1QlYsT0FMNEI7QUFBQSxNQU01QmEsUUFONEIsR0FTMUJILFNBVDBCLENBTTVCRyxRQU40QjtBQUFBLE1BTzVCQyxRQVA0QixHQVMxQkosU0FUMEIsQ0FPNUJJLFFBUDRCO0FBQUEsTUFRNUJDLFNBUjRCLEdBUzFCTCxTQVQwQixDQVE1QkssU0FSNEI7QUFVOUIsTUFBTUMsV0FBVyxHQUFHaEIsT0FBTyxHQUFHRCxhQUFhLENBQUNDLE9BQUQsQ0FBaEIsR0FBNEIsSUFBdkQ7QUFDQSxzQkFDRSxxRUFBQyxXQUFEO0FBQUEsNEJBRUU7QUFBSSxlQUFTLEVBQUMsa0RBQWQ7QUFBQSxnQkFDR0Usb0JBQW9CLENBQUNDLE9BQUQ7QUFEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBS0U7QUFBQSxnQkFDR2EsV0FBVyxDQUFDQyxHQUFaLENBQWdCLFVBQUNDLFdBQUQ7QUFBQSw0QkFDZjtBQUFJLG1CQUFTLEVBQUMsdUNBQWQ7QUFBQSxvQkFDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURlO0FBQUEsT0FBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFZRTtBQUFJLGVBQVMsRUFBQyxxQkFBZDtBQUFBLGdCQUNHSCxTQUFTLENBQUNFLEdBQVYsQ0FBYyxVQUFDRSxTQUFEO0FBQUEsNEJBQ2I7QUFBQSxvQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRixFQWlCR04sUUFBUSxpQkFDUDtBQUFLLGVBQVMsRUFBQyx1REFBZjtBQUFBLDZCQUNFLHFFQUFDLGFBQUQ7QUFBQSxrQkFBZ0JBO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUJELENBcENEOztNQUFNSixJOztBQXNDTixJQUFNVyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxRQUFxQjtBQUFBLE1BQWxCQyxXQUFrQixTQUFsQkEsV0FBa0I7QUFDeEMsc0JBQ0UscUVBQUMsU0FBRDtBQUFXLGFBQVMsRUFBQyxnQkFBckI7QUFBQSxjQUNHQSxXQUFXLElBQ1ZBLFdBQVcsQ0FBQ0osR0FBWixDQUFnQixVQUFDUCxTQUFELEVBQWU7QUFDN0IsMEJBQU8scUVBQUMsSUFBRDtBQUFNLGlCQUFTLEVBQUVBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELEtBRkQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQVREOztNQUFNVSxZO0FBV04iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjcyMWFkZmJlNDEwYWI4ZDY0NzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJvdW5kZWRCbHVlQnV0dG9uIGZyb20gXCJjb21wb25lbnRzL0J1dHRvblwiO1xyXG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuYDtcclxuXHJcbi8qIFV0aWxzICovXHJcbmNvbnN0IGZlYXR1cmVQYXJzZXIgPSAoZmVhdHVyZSkgPT4ge1xyXG4gIC8vIFRPRE86IGRlc3RydWN0dXJlIGZlYXR1cmUgYnkgZGVsaW1pdGVyIChjb2xvbilcclxuICByZXR1cm4gZmVhdHVyZS5zcGxpdChcIjpcIik7XHJcbn07XHJcblxyXG5jb25zdCBzcGVjaWFsSGVhZGluZ1BhcnNlciA9IChoZWFkaW5nKSA9PlxyXG4gIGhlYWRpbmcuaW5jbHVkZXMoXCJGbGV4XCIpID8gaGVhZGluZy5yZXBsYWNlKFwiIFwiLCBcIlxcblwiKSA6IGhlYWRpbmc7XHJcblxyXG5jb25zdCBDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2BmbGV4IGZsZXgtY29sIHNoYWRvdy1sZyBzcGFjZS15LTUgcC0xMCByb3VuZGVkLXhsYH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBtaW4td2lkdGg6IDIyNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IElucXVpcmVCdXR0b24gPSBzdHlsZWQoUm91bmRlZEJsdWVCdXR0b24pYFxyXG4gICR7dHdgcm91bmRlZC1sZyBweS0yYH1cclxuYDtcclxuXHJcbmNvbnN0IENhcmQgPSAoeyBwcmljZURhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHByaWNlLFxyXG4gICAgcHJpY2VfdW5pdCxcclxuICAgIGhlYWRpbmcsXHJcbiAgICBmZWF0dXJlLFxyXG4gICAgY3RhX3RleHQsXHJcbiAgICBjdGFfbGluayxcclxuICAgIGRlc2NfbGlzdCxcclxuICB9ID0gcHJpY2VEYXRhO1xyXG4gIGNvbnN0IGZlYXR1cmVMaXN0ID0gZmVhdHVyZSA/IGZlYXR1cmVQYXJzZXIoZmVhdHVyZSkgOiBudWxsO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZFdyYXBwZXI+XHJcbiAgICAgIHsvKiA8aDYgY2xhc3NOYW1lPVwidHlwZVwiPkF3ZXNvbWU8L2g2PiAqL31cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cImhlYWRpbmcgbGVhZGluZy10aWdodCB3aGl0ZXNwYWNlLXByZS1saW5lIHctZnVsbFwiPlxyXG4gICAgICAgIHtzcGVjaWFsSGVhZGluZ1BhcnNlcihoZWFkaW5nKX1cclxuICAgICAgPC9oMz5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtmZWF0dXJlTGlzdC5tYXAoKGZlYXR1cmVJdGVtKSA9PiAoXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdHVyZS1pdGVtIHRleHQtY2VudGVyIGxlYWRpbmctbm9uZVwiPlxyXG4gICAgICAgICAgICB7ZmVhdHVyZUl0ZW19XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZGVzYy1saXN0IGZvbnQtYm9sZFwiPlxyXG4gICAgICAgIHtkZXNjX2xpc3QubWFwKChkZXNjX2l0ZW0pID0+IChcclxuICAgICAgICAgIDxsaT57ZGVzY19pdGVtfTwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIHtjdGFfdGV4dCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGEtY29udGFpbmVyIGZsZXggZmxleC1jb2wgZmxleC1ncm93IGFsaWduLWl0ZW1zLWVuZFwiPlxyXG4gICAgICAgICAgPElucXVpcmVCdXR0b24+e2N0YV90ZXh0fTwvSW5xdWlyZUJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvQ2FyZFdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFByaWNpbmdDYXJkcyA9ICh7IHByaWNlTW9kZWxzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtOFwiPlxyXG4gICAgICB7cHJpY2VNb2RlbHMgJiZcclxuICAgICAgICBwcmljZU1vZGVscy5tYXAoKHByaWNlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxDYXJkIHByaWNlRGF0YT17cHJpY2VEYXRhfSAvPjtcclxuICAgICAgICB9KX1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBQcmljaW5nQ2FyZHMgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==