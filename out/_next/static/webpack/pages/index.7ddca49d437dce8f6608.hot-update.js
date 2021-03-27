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
})(["", ""], {
  "display": "flex",
  "flexDirection": "column",
  "> :not([hidden]) ~ :not([hidden])": {
    "--tw-space-y-reverse": 0,
    "marginTop": "calc(2rem * calc(1 - var(--tw-space-y-reverse)))",
    "marginBottom": "calc(2rem * var(--tw-space-y-reverse))"
  },
  "@media (min-width: 1280px)": {
    "flexDirection": "row",
    "> :not([hidden]) ~ :not([hidden])": {
      "--tw-space-y-reverse": 0,
      "marginTop": "calc(0px * calc(1 - var(--tw-space-y-reverse)))",
      "marginBottom": "calc(0px * var(--tw-space-y-reverse))",
      "--tw-space-x-reverse": 0,
      "marginRight": "calc(2rem * var(--tw-space-x-reverse))",
      "marginLeft": "calc(2rem * calc(1 - var(--tw-space-x-reverse)))"
    }
  }
});
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
  "display": "flex",
  "justifyContent": "center",
  "paddingTop": "0.75rem",
  "paddingBottom": "0.75rem",
  "marginLeft": "1rem",
  "marginRight": "1rem"
});
_c3 = DesktopPriceInquireButton;
var MobilePriceInquireButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(InquireButton).withConfig({
  displayName: "PricingCards__MobilePriceInquireButton",
  componentId: "sc-15u2yf1-4"
})(["", ""], {
  "flexGrow": "0",
  "width": "min-content",
  "paddingLeft": "1rem",
  "paddingRight": "1rem",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
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
        lineNumber: 62,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MobilePriceInquireButton, {
        children: cta_text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "feature-list space-y-0.5",
      children: featureList.map(function (featureItem) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "feature-item text-center whitespace-pre",
          children: featureItem
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "desc-list font-bold",
      children: desc_list.map(function (desc_item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "mb-2",
          children: desc_item
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this), cta_text && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "cta-container hidden xl:flex flex-col flex-grow align-items-end",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DesktopPriceInquireButton, {
        children: cta_text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, _this);
};

_c7 = Card;

var PricingCards = function PricingCards(_ref2) {
  var priceModels = _ref2.priceModels;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: priceModels && priceModels.map(function (priceData) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
        priceData: priceData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 18
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljaW5nQ2FyZHMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiZmVhdHVyZVBhcnNlciIsImZlYXR1cmUiLCJzcGxpdCIsInNwZWNpYWxIZWFkaW5nUGFyc2VyIiwiaGVhZGluZyIsInJlcGxhY2UiLCJDYXJkV3JhcHBlciIsIklucXVpcmVCdXR0b24iLCJSb3VuZGVkQmx1ZUJ1dHRvbiIsIkRlc2t0b3BQcmljZUlucXVpcmVCdXR0b24iLCJNb2JpbGVQcmljZUlucXVpcmVCdXR0b24iLCJDYXJkSGVhZGluZ0NvbnRhaW5lciIsIkNhcmRIZWFkaW5nIiwiaDMiLCJDYXJkIiwicHJpY2VEYXRhIiwicHJpY2UiLCJwcmljZV91bml0IiwiY3RhX3RleHQiLCJjdGFfbGluayIsImRlc2NfbGlzdCIsImZlYXR1cmVMaXN0IiwibWFwIiwiZmVhdHVyZUl0ZW0iLCJkZXNjX2l0ZW0iLCJQcmljaW5nQ2FyZHMiLCJwcmljZU1vZGVscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsYUFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBRFMsQ0FBZjtBQUlBOztLQUpNRixTOztBQUtOLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsT0FBRCxFQUFhO0FBQ2pDO0FBQ0EsU0FBT0EsT0FBTyxDQUFDQyxLQUFSLENBQWMsR0FBZCxDQUFQO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLE9BQUQ7QUFBQSxTQUFhQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0Is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LENBQUNFLEdBQVYsQ0FBYyxVQUFDRSxTQUFEO0FBQUEsNEJBQ2I7QUFBSSxtQkFBUyxFQUFDLE1BQWQ7QUFBQSxvQkFBc0JBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGLEVBa0JHTixRQUFRLGlCQUNQO0FBQUssZUFBUyxFQUFDLGlFQUFmO0FBQUEsNkJBQ0UscUVBQUMseUJBQUQ7QUFBQSxrQkFBNEJBO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEJELENBckNEOztNQUFNSixJOztBQXVDTixJQUFNVyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxRQUFxQjtBQUFBLE1BQWxCQyxXQUFrQixTQUFsQkEsV0FBa0I7QUFDeEMsc0JBQ0UscUVBQUMsU0FBRDtBQUFBLGNBQ0dBLFdBQVcsSUFDVkEsV0FBVyxDQUFDSixHQUFaLENBQWdCLFVBQUNQLFNBQUQsRUFBZTtBQUM3QiwwQkFBTyxxRUFBQyxJQUFEO0FBQU0saUJBQVMsRUFBRUE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsS0FGRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBVEQ7O01BQU1VLFk7QUFXTiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZGRjYTQ5ZDQzN2RjZThmNjYwOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUm91bmRlZEJsdWVCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvQnV0dG9uXCI7XHJcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAke3R3YGZsZXggZmxleC1jb2wgeGw6ZmxleC1yb3cgc3BhY2UteS04IHhsOnNwYWNlLXktMCB4bDpzcGFjZS14LThgfVxyXG5gO1xyXG5cclxuLyogVXRpbHMgKi9cclxuY29uc3QgZmVhdHVyZVBhcnNlciA9IChmZWF0dXJlKSA9PiB7XHJcbiAgLy8gVE9ETzogZGVzdHJ1Y3R1cmUgZmVhdHVyZSBieSBkZWxpbWl0ZXIgKGNvbG9uKVxyXG4gIHJldHVybiBmZWF0dXJlLnNwbGl0KFwiOlwiKTtcclxufTtcclxuXHJcbmNvbnN0IHNwZWNpYWxIZWFkaW5nUGFyc2VyID0gKGhlYWRpbmcpID0+IGhlYWRpbmcucmVwbGFjZSgvIC9nLCBcIlxcblwiKTtcclxuXHJcbmNvbnN0IENhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAke3R3YGZsZXggZmxleC1yb3cgeGw6ZmxleC1jb2wgZmxleC1ncm93IHNoYWRvdy1sZyB4bDpzcGFjZS15LTUgcC0xMCByb3VuZGVkLXhsIGZvY3VzOm91dGxpbmUtbm9uZWB9XHJcbiAgJiB7XHJcbiAgICBmbGV4LWJhc2lzOiAwO1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBtaW4td2lkdGg6IDIyNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IElucXVpcmVCdXR0b24gPSBzdHlsZWQoUm91bmRlZEJsdWVCdXR0b24pYFxyXG4gICR7dHdgcm91bmRlZC1mdWxsIHRleHQtYmFzZSBmb2N1czpvdXRsaW5lLW5vbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIGFjdGl2ZTp0cmFuc2xhdGUteC0xIGFjdGl2ZTp0cmFuc2xhdGUteS0xYH1cclxuYDtcclxuXHJcbmNvbnN0IERlc2t0b3BQcmljZUlucXVpcmVCdXR0b24gPSBzdHlsZWQoSW5xdWlyZUJ1dHRvbilgXHJcbiAgJHt0d2BmbGV4IGp1c3RpZnktY2VudGVyIHB5LTMgbXgtNGB9XHJcbmA7XHJcblxyXG5jb25zdCBNb2JpbGVQcmljZUlucXVpcmVCdXR0b24gPSBzdHlsZWQoSW5xdWlyZUJ1dHRvbilgXHJcbiAgJHt0d2B4bDpoaWRkZW4gZmxleC1ncm93LTAgdy1taW4gcHgtNCBweS0yYH1cclxuYDtcclxuXHJcbmNvbnN0IENhcmRIZWFkaW5nQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAke3R3YGZsZXggZmxleC1jb2wgZmxleC1ncm93IHhsOmJsb2NrYH1cclxuYDtcclxuY29uc3QgQ2FyZEhlYWRpbmcgPSBzdHlsZWQuaDNgXHJcbiAgJHt0d2BsZWFkaW5nLXRpZ2h0IHctZnVsbCB0ZXh0LTN4bCBmb250LWJsYWNrIHdoaXRlc3BhY2UtcHJlLWxpbmVgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZCA9ICh7IHByaWNlRGF0YSB9KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcHJpY2UsXHJcbiAgICBwcmljZV91bml0LFxyXG4gICAgaGVhZGluZyxcclxuICAgIGZlYXR1cmUsXHJcbiAgICBjdGFfdGV4dCxcclxuICAgIGN0YV9saW5rLFxyXG4gICAgZGVzY19saXN0LFxyXG4gIH0gPSBwcmljZURhdGE7XHJcbiAgY29uc3QgZmVhdHVyZUxpc3QgPSBmZWF0dXJlID8gZmVhdHVyZVBhcnNlcihmZWF0dXJlKSA6IG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkV3JhcHBlcj5cclxuICAgICAgey8qIDxoNiBjbGFzc05hbWU9XCJ0eXBlXCI+QXdlc29tZTwvaDY+ICovfVxyXG4gICAgICA8Q2FyZEhlYWRpbmdDb250YWluZXI+XHJcbiAgICAgICAgPENhcmRIZWFkaW5nPntoZWFkaW5nICYmIHNwZWNpYWxIZWFkaW5nUGFyc2VyKGhlYWRpbmcpfTwvQ2FyZEhlYWRpbmc+XHJcbiAgICAgICAgPE1vYmlsZVByaWNlSW5xdWlyZUJ1dHRvbj57Y3RhX3RleHR9PC9Nb2JpbGVQcmljZUlucXVpcmVCdXR0b24+XHJcbiAgICAgIDwvQ2FyZEhlYWRpbmdDb250YWluZXI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJmZWF0dXJlLWxpc3Qgc3BhY2UteS0wLjVcIj5cclxuICAgICAgICB7ZmVhdHVyZUxpc3QubWFwKChmZWF0dXJlSXRlbSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXR1cmUtaXRlbSB0ZXh0LWNlbnRlciB3aGl0ZXNwYWNlLXByZVwiPlxyXG4gICAgICAgICAgICB7ZmVhdHVyZUl0ZW19XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZGVzYy1saXN0IGZvbnQtYm9sZFwiPlxyXG4gICAgICAgIHtkZXNjX2xpc3QubWFwKChkZXNjX2l0ZW0pID0+IChcclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0yXCI+e2Rlc2NfaXRlbX08L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICB7Y3RhX3RleHQgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3RhLWNvbnRhaW5lciBoaWRkZW4geGw6ZmxleCBmbGV4LWNvbCBmbGV4LWdyb3cgYWxpZ24taXRlbXMtZW5kXCI+XHJcbiAgICAgICAgICA8RGVza3RvcFByaWNlSW5xdWlyZUJ1dHRvbj57Y3RhX3RleHR9PC9EZXNrdG9wUHJpY2VJbnF1aXJlQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9DYXJkV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJpY2luZ0NhcmRzID0gKHsgcHJpY2VNb2RlbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICB7cHJpY2VNb2RlbHMgJiZcclxuICAgICAgICBwcmljZU1vZGVscy5tYXAoKHByaWNlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxDYXJkIHByaWNlRGF0YT17cHJpY2VEYXRhfSAvPjtcclxuICAgICAgICB9KX1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBQcmljaW5nQ2FyZHMgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==