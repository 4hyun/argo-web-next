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
  "padding": "2.5rem",
  "borderRadius": "0.75rem",
  ":focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  },
  "@media (min-width: 1280px)": {
    "flexDirection": "column",
    "> :not([hidden]) ~ :not([hidden])": {
      "--tw-space-y-reverse": 0,
      "marginTop": "calc(1.25rem * calc(1 - var(--tw-space-y-reverse)))",
      "marginBottom": "calc(1.25rem * var(--tw-space-y-reverse))"
    }
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
  }
});
var DesktopPriceInquireButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(InquireButton).withConfig({
  displayName: "PricingCards__DesktopPriceInquireButton",
  componentId: "sc-15u2yf1-3"
})(["", ""], {
  "marginLeft": "1rem",
  "marginRight": "1rem"
});
_c3 = DesktopPriceInquireButton;
var MobilePriceInquireButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(InquireButton).withConfig({
  displayName: "PricingCards__MobilePriceInquireButton",
  componentId: "sc-15u2yf1-4"
})(["", ""], {
  "flexGrow": "0",
  "@media (min-width: 1280px)": {
    "display": "none"
  }
});
_c4 = MobilePriceInquireButton;
var CardHeadingContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PricingCards__CardHeadingContainer",
  componentId: "sc-15u2yf1-5"
})(["", ""], {
  "display": "flex",
  "flexDirection": "column",
  "flexGrow": "1",
  "@media (min-width: 1280px)": {
    "display": "block"
  }
});
_c5 = CardHeadingContainer;
var CardHeading = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "PricingCards__CardHeading",
  componentId: "sc-15u2yf1-6"
})(["", ""], {
  "lineHeight": "2.25rem",
  "width": "100%",
  "fontSize": "1.875rem",
  "fontWeight": "900",
  "whiteSpace": "pre-line"
});
_c6 = CardHeading;

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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardHeadingContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardHeading, {
        children: heading && specialHeadingParser(heading)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MobilePriceInquireButton, {
        children: cta_text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "feature-list space-y-0.5",
      children: featureList.map(function (featureItem) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "feature-item text-center whitespace-pre",
          children: featureItem
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "desc-list font-bold",
      children: desc_list.map(function (desc_item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "mb-2",
          children: desc_item
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this), cta_text && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "cta-container hidden xl:flex flex-col flex-grow align-items-end",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DesktopPriceInquireButton, {
        children: cta_text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, _this);
};

_c7 = Card;

var PricingCards = function PricingCards(_ref2) {
  var priceModels = _ref2.priceModels;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    className: "flex flex-col xl:flex-row space-y-8 xl:space-y-0 xl:space-x-8",
    children: priceModels && priceModels.map(function (priceData) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
        priceData: priceData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 18
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }, _this);
};

_c8 = PricingCards;


var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "CardWrapper");
$RefreshReg$(_c3, "DesktopPriceInquireButton");
$RefreshReg$(_c4, "MobilePriceInquireButton");
$RefreshReg$(_c5, "CardHeadingContainer");
$RefreshReg$(_c6, "CardHeading");
$RefreshReg$(_c7, "Card");
$RefreshReg$(_c8, "PricingCards");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljaW5nQ2FyZHMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiZmVhdHVyZVBhcnNlciIsImZlYXR1cmUiLCJzcGxpdCIsInNwZWNpYWxIZWFkaW5nUGFyc2VyIiwiaGVhZGluZyIsInJlcGxhY2UiLCJDYXJkV3JhcHBlciIsIklucXVpcmVCdXR0b24iLCJSb3VuZGVkQmx1ZUJ1dHRvbiIsIkRlc2t0b3BQcmljZUlucXVpcmVCdXR0b24iLCJNb2JpbGVQcmljZUlucXVpcmVCdXR0b24iLCJDYXJkSGVhZGluZ0NvbnRhaW5lciIsIkNhcmRIZWFkaW5nIiwiaDMiLCJDYXJkIiwicHJpY2VEYXRhIiwicHJpY2UiLCJwcmljZV91bml0IiwiY3RhX3RleHQiLCJjdGFfbGluayIsImRlc2NfbGlzdCIsImZlYXR1cmVMaXN0IiwibWFwIiwiZmVhdHVyZUl0ZW0iLCJkZXNjX2l0ZW0iLCJQcmljaW5nQ2FyZHMiLCJwcmljZU1vZGVscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsUUFBZjtBQUVBOztLQUZNRixTOztBQUdOLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsT0FBRCxFQUFhO0FBQ2pDO0FBQ0EsU0FBT0EsT0FBTyxDQUFDQyxLQUFSLENBQWMsR0FBZCxDQUFQO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLE9BQUQ7QUFBQSxTQUFhQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsSUFBaEIsRUFBc0IsSUFBdEIsQ0FBYjtBQUFBLENBQTdCOztBQUVBLElBQU1DLFdBQVcsR0FBR1IseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5RUFDWDtBQUFBO0FBQUE7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YUFiRixFQWtCR04sUUFBUSxpQkFDUDtBQUFLLGVBQVMsRUFBQyxpRUFBZjtBQUFBLDZCQUNFLHFFQUFDLHlCQUFEO0FBQUEsa0JBQTRCQTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQXJDRDs7TUFBTUosSTs7QUF1Q04sSUFBTVcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsUUFBcUI7QUFBQSxNQUFsQkMsV0FBa0IsU0FBbEJBLFdBQWtCO0FBQ3hDLHNCQUNFLHFFQUFDLFNBQUQ7QUFBVyxhQUFTLEVBQUMsK0RBQXJCO0FBQUEsY0FDR0EsV0FBVyxJQUNWQSxXQUFXLENBQUNKLEdBQVosQ0FBZ0IsVUFBQ1AsU0FBRCxFQUFlO0FBQzdCLDBCQUFPLHFFQUFDLElBQUQ7QUFBTSxpQkFBUyxFQUFFQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxLQUZEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0FURDs7TUFBTVUsWTtBQVdOIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYyNTFmNjkxYmY0YTQzNzQ0YzNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSb3VuZGVkQmx1ZUJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9CdXR0b25cIjtcclxuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG4vKiBVdGlscyAqL1xyXG5jb25zdCBmZWF0dXJlUGFyc2VyID0gKGZlYXR1cmUpID0+IHtcclxuICAvLyBUT0RPOiBkZXN0cnVjdHVyZSBmZWF0dXJlIGJ5IGRlbGltaXRlciAoY29sb24pXHJcbiAgcmV0dXJuIGZlYXR1cmUuc3BsaXQoXCI6XCIpO1xyXG59O1xyXG5cclxuY29uc3Qgc3BlY2lhbEhlYWRpbmdQYXJzZXIgPSAoaGVhZGluZykgPT4gaGVhZGluZy5yZXBsYWNlKC8gL2csIFwiXFxuXCIpO1xyXG5cclxuY29uc3QgQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICR7dHdgZmxleCBmbGV4LXJvdyB4bDpmbGV4LWNvbCBmbGV4LWdyb3cgc2hhZG93LWxnIHhsOnNwYWNlLXktNSBwLTEwIHJvdW5kZWQteGwgZm9jdXM6b3V0bGluZS1ub25lYH1cclxuICAmIHtcclxuICAgIGZsZXgtYmFzaXM6IDA7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIG1pbi13aWR0aDogMjI1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW5xdWlyZUJ1dHRvbiA9IHN0eWxlZChSb3VuZGVkQmx1ZUJ1dHRvbilgXHJcbiAgJHt0d2Byb3VuZGVkLWZ1bGwgcHktMyB0ZXh0LWJhc2UgZm9jdXM6b3V0bGluZS1ub25lIHRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCBhY3RpdmU6dHJhbnNsYXRlLXgtMSBhY3RpdmU6dHJhbnNsYXRlLXktMWB9XHJcbmA7XHJcblxyXG5jb25zdCBEZXNrdG9wUHJpY2VJbnF1aXJlQnV0dG9uID0gc3R5bGVkKElucXVpcmVCdXR0b24pYFxyXG4gICR7dHdgbXgtNGB9XHJcbmA7XHJcblxyXG5jb25zdCBNb2JpbGVQcmljZUlucXVpcmVCdXR0b24gPSBzdHlsZWQoSW5xdWlyZUJ1dHRvbilgXHJcbiAgJHt0d2B4bDpoaWRkZW4gZmxleC1ncm93LTBgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZEhlYWRpbmdDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICR7dHdgZmxleCBmbGV4LWNvbCBmbGV4LWdyb3cgeGw6YmxvY2tgfVxyXG5gO1xyXG5jb25zdCBDYXJkSGVhZGluZyA9IHN0eWxlZC5oM2BcclxuICAke3R3YGxlYWRpbmctdGlnaHQgdy1mdWxsIHRleHQtM3hsIGZvbnQtYmxhY2sgd2hpdGVzcGFjZS1wcmUtbGluZWB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkID0gKHsgcHJpY2VEYXRhIH0pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBwcmljZSxcclxuICAgIHByaWNlX3VuaXQsXHJcbiAgICBoZWFkaW5nLFxyXG4gICAgZmVhdHVyZSxcclxuICAgIGN0YV90ZXh0LFxyXG4gICAgY3RhX2xpbmssXHJcbiAgICBkZXNjX2xpc3QsXHJcbiAgfSA9IHByaWNlRGF0YTtcclxuICBjb25zdCBmZWF0dXJlTGlzdCA9IGZlYXR1cmUgPyBmZWF0dXJlUGFyc2VyKGZlYXR1cmUpIDogbnVsbDtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRXcmFwcGVyPlxyXG4gICAgICB7LyogPGg2IGNsYXNzTmFtZT1cInR5cGVcIj5Bd2Vzb21lPC9oNj4gKi99XHJcbiAgICAgIDxDYXJkSGVhZGluZ0NvbnRhaW5lcj5cclxuICAgICAgICA8Q2FyZEhlYWRpbmc+e2hlYWRpbmcgJiYgc3BlY2lhbEhlYWRpbmdQYXJzZXIoaGVhZGluZyl9PC9DYXJkSGVhZGluZz5cclxuICAgICAgICA8TW9iaWxlUHJpY2VJbnF1aXJlQnV0dG9uPntjdGFfdGV4dH08L01vYmlsZVByaWNlSW5xdWlyZUJ1dHRvbj5cclxuICAgICAgPC9DYXJkSGVhZGluZ0NvbnRhaW5lcj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImZlYXR1cmUtbGlzdCBzcGFjZS15LTAuNVwiPlxyXG4gICAgICAgIHtmZWF0dXJlTGlzdC5tYXAoKGZlYXR1cmVJdGVtKSA9PiAoXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmVhdHVyZS1pdGVtIHRleHQtY2VudGVyIHdoaXRlc3BhY2UtcHJlXCI+XHJcbiAgICAgICAgICAgIHtmZWF0dXJlSXRlbX1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJkZXNjLWxpc3QgZm9udC1ib2xkXCI+XHJcbiAgICAgICAge2Rlc2NfbGlzdC5tYXAoKGRlc2NfaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTJcIj57ZGVzY19pdGVtfTwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIHtjdGFfdGV4dCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGEtY29udGFpbmVyIGhpZGRlbiB4bDpmbGV4IGZsZXgtY29sIGZsZXgtZ3JvdyBhbGlnbi1pdGVtcy1lbmRcIj5cclxuICAgICAgICAgIDxEZXNrdG9wUHJpY2VJbnF1aXJlQnV0dG9uPntjdGFfdGV4dH08L0Rlc2t0b3BQcmljZUlucXVpcmVCdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L0NhcmRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQcmljaW5nQ2FyZHMgPSAoeyBwcmljZU1vZGVscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB4bDpmbGV4LXJvdyBzcGFjZS15LTggeGw6c3BhY2UteS0wIHhsOnNwYWNlLXgtOFwiPlxyXG4gICAgICB7cHJpY2VNb2RlbHMgJiZcclxuICAgICAgICBwcmljZU1vZGVscy5tYXAoKHByaWNlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxDYXJkIHByaWNlRGF0YT17cHJpY2VEYXRhfSAvPjtcclxuICAgICAgICB9KX1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBQcmljaW5nQ2FyZHMgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==