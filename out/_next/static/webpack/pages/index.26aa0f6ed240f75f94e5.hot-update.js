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
  "borderRadius": "1rem"
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
    className: "flex space-x-8",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljaW5nQ2FyZHMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiZmVhdHVyZVBhcnNlciIsImZlYXR1cmUiLCJzcGxpdCIsInNwZWNpYWxIZWFkaW5nUGFyc2VyIiwiaGVhZGluZyIsImluY2x1ZGVzIiwicmVwbGFjZSIsIkNhcmRXcmFwcGVyIiwiQ2FyZCIsInByaWNlRGF0YSIsInByaWNlIiwicHJpY2VfdW5pdCIsImN0YV90ZXh0IiwiY3RhX2xpbmsiLCJkZXNjX2xpc3QiLCJmZWF0dXJlTGlzdCIsIm1hcCIsImZlYXR1cmVJdGVtIiwiZGVzY19pdGVtIiwiUHJpY2luZ0NhcmRzIiwicHJpY2VNb2RlbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBFQUFmO0FBT0E7O0tBUE1GLFM7O0FBUU4sSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxPQUFELEVBQWE7QUFDakM7QUFDQSxTQUFPQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxHQUFkLENBQVA7QUFDRCxDQUhEOztBQUtBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsT0FBRDtBQUFBLFNBQzNCQSxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsTUFBakIsSUFBMkJELE9BQU8sQ0FBQ0UsT0FBUixDQUFnQixHQUFoQixFQUFxQixJQUFyQixDQUEzQixHQUF3REYsT0FEN0I7QUFBQSxDQUE3Qjs7QUFHQSxJQUFNRyxXQUFXLEdBQUdULHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseURBQ1g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FEVyxDQUFqQjtNQUFNUSxXOztBQU9OLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQW1CO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUFBLE1BRTVCQyxLQUY0QixHQVMxQkQsU0FUMEIsQ0FFNUJDLEtBRjRCO0FBQUEsTUFHNUJDLFVBSDRCLEdBUzFCRixTQVQwQixDQUc1QkUsVUFINEI7QUFBQSxNQUk1QlAsT0FKNEIsR0FTMUJLLFNBVDBCLENBSTVCTCxPQUo0QjtBQUFBLE1BSzVCSCxPQUw0QixHQVMxQlEsU0FUMEIsQ0FLNUJSLE9BTDRCO0FBQUEsTUFNNUJXLFFBTjRCLEdBUzFCSCxTQVQwQixDQU01QkcsUUFONEI7QUFBQSxNQU81QkMsUUFQNEIsR0FTMUJKLFNBVDBCLENBTzVCSSxRQVA0QjtBQUFBLE1BUTVCQyxTQVI0QixHQVMxQkwsU0FUMEIsQ0FRNUJLLFNBUjRCO0FBVTlCLE1BQU1DLFdBQVcsR0FBR2QsT0FBTyxHQUFHRCxhQUFhLENBQUNDLE9BQUQsQ0FBaEIsR0FBNEIsSUFBdkQ7QUFDQSxzQkFDRSxxRUFBQyxXQUFEO0FBQUEsNEJBRUU7QUFBSSxlQUFTLEVBQUMsa0RBQWQ7QUFBQSxnQkFDR0Usb0JBQW9CLENBQUNDLE9BQUQ7QUFEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBS0U7QUFBQSxnQkFDR1csV0FBVyxDQUFDQyxHQUFaLENBQWdCLFVBQUNDLFdBQUQ7QUFBQSw0QkFDZjtBQUFJLG1CQUFTLEVBQUMsdUNBQWQ7QUFBQSxvQkFDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURlO0FBQUEsT0FBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFZRTtBQUFJLGVBQVMsRUFBQyxxQkFBZDtBQUFBLGdCQUNHSCxTQUFTLENBQUNFLEdBQVYsQ0FBYyxVQUFDRSxTQUFEO0FBQUEsNEJBQ2I7QUFBQSxvQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRixFQWlCR04sUUFBUSxpQkFDUDtBQUFLLGVBQVMsRUFBQyx1REFBZjtBQUFBLDZCQUNFLHFFQUFDLHlEQUFEO0FBQUEsa0JBQW9CQTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlCRCxDQXBDRDs7TUFBTUosSTs7QUFzQ04sSUFBTVcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsUUFBcUI7QUFBQSxNQUFsQkMsV0FBa0IsU0FBbEJBLFdBQWtCO0FBQ3hDLHNCQUNFLHFFQUFDLFNBQUQ7QUFBVyxhQUFTLEVBQUMsZ0JBQXJCO0FBQUEsY0FDR0EsV0FBVyxJQUNWQSxXQUFXLENBQUNKLEdBQVosQ0FBZ0IsVUFBQ1AsU0FBRCxFQUFlO0FBQzdCLDBCQUFPLHFFQUFDLElBQUQ7QUFBTSxpQkFBUyxFQUFFQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxLQUZEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0FURDs7TUFBTVUsWTtBQVdOIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI2YWEwZjZlZDI0MGY3NWY5NGU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSb3VuZGVkQmx1ZUJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9CdXR0b25cIjtcclxuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbmA7XHJcblxyXG4vKiBVdGlscyAqL1xyXG5jb25zdCBmZWF0dXJlUGFyc2VyID0gKGZlYXR1cmUpID0+IHtcclxuICAvLyBUT0RPOiBkZXN0cnVjdHVyZSBmZWF0dXJlIGJ5IGRlbGltaXRlciAoY29sb24pXHJcbiAgcmV0dXJuIGZlYXR1cmUuc3BsaXQoXCI6XCIpO1xyXG59O1xyXG5cclxuY29uc3Qgc3BlY2lhbEhlYWRpbmdQYXJzZXIgPSAoaGVhZGluZykgPT5cclxuICBoZWFkaW5nLmluY2x1ZGVzKFwiRmxleFwiKSA/IGhlYWRpbmcucmVwbGFjZShcIiBcIiwgXCJcXG5cIikgOiBoZWFkaW5nO1xyXG5cclxuY29uc3QgQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICR7dHdgIGZsZXggZmxleC1jb2wgc2hhZG93LWxnIHNwYWNlLXktNSBwLTEwIHJvdW5kZWQtMnhsYH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBtaW4td2lkdGg6IDIyNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENhcmQgPSAoeyBwcmljZURhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHByaWNlLFxyXG4gICAgcHJpY2VfdW5pdCxcclxuICAgIGhlYWRpbmcsXHJcbiAgICBmZWF0dXJlLFxyXG4gICAgY3RhX3RleHQsXHJcbiAgICBjdGFfbGluayxcclxuICAgIGRlc2NfbGlzdCxcclxuICB9ID0gcHJpY2VEYXRhO1xyXG4gIGNvbnN0IGZlYXR1cmVMaXN0ID0gZmVhdHVyZSA/IGZlYXR1cmVQYXJzZXIoZmVhdHVyZSkgOiBudWxsO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZFdyYXBwZXI+XHJcbiAgICAgIHsvKiA8aDYgY2xhc3NOYW1lPVwidHlwZVwiPkF3ZXNvbWU8L2g2PiAqL31cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cImhlYWRpbmcgbGVhZGluZy10aWdodCB3aGl0ZXNwYWNlLXByZS1saW5lIHctZnVsbFwiPlxyXG4gICAgICAgIHtzcGVjaWFsSGVhZGluZ1BhcnNlcihoZWFkaW5nKX1cclxuICAgICAgPC9oMz5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtmZWF0dXJlTGlzdC5tYXAoKGZlYXR1cmVJdGVtKSA9PiAoXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdHVyZS1pdGVtIHRleHQtY2VudGVyIGxlYWRpbmctbm9uZVwiPlxyXG4gICAgICAgICAgICB7ZmVhdHVyZUl0ZW19XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZGVzYy1saXN0IGZvbnQtYm9sZFwiPlxyXG4gICAgICAgIHtkZXNjX2xpc3QubWFwKChkZXNjX2l0ZW0pID0+IChcclxuICAgICAgICAgIDxsaT57ZGVzY19pdGVtfTwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIHtjdGFfdGV4dCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGEtY29udGFpbmVyIGZsZXggZmxleC1jb2wgZmxleC1ncm93IGFsaWduLWl0ZW1zLWVuZFwiPlxyXG4gICAgICAgICAgPFJvdW5kZWRCbHVlQnV0dG9uPntjdGFfdGV4dH08L1JvdW5kZWRCbHVlQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9DYXJkV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJpY2luZ0NhcmRzID0gKHsgcHJpY2VNb2RlbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC04XCI+XHJcbiAgICAgIHtwcmljZU1vZGVscyAmJlxyXG4gICAgICAgIHByaWNlTW9kZWxzLm1hcCgocHJpY2VEYXRhKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPENhcmQgcHJpY2VEYXRhPXtwcmljZURhdGF9IC8+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFByaWNpbmdDYXJkcyB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9