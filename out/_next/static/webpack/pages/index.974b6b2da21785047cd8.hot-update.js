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
/* harmony import */ var C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Icons */ "./components/Icons/index.js");
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Button */ "./components/Button.js");



var _jsxFileName = "C:\\Users\\4hyun\\Documents\\argo-web-next\\components\\PricingCards.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PricingCards__Container",
  componentId: "sc-15u2yf1-0"
})(["", ""], {
  "display": "flex",
  "flexDirection": "column",
  "paddingLeft": "1.5rem",
  "paddingRight": "1.5rem",
  "> :not([hidden]) ~ :not([hidden])": {
    "--tw-space-y-reverse": 0,
    "marginTop": "calc(2rem * calc(1 - var(--tw-space-y-reverse)))",
    "marginBottom": "calc(2rem * var(--tw-space-y-reverse))"
  },
  "@media (min-width: 1280px)": {
    "paddingLeft": "0px",
    "paddingRight": "0px",
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

var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
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
var InquireButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(components_Button__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
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
var DesktopInquireButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PricingCards__DesktopInquireButtonWrapper",
  componentId: "sc-15u2yf1-3"
})(["", ""], {
  "display": "none",
  "flexDirection": "column",
  "flexGrow": "1",
  "alignItems": "flex-end",
  "@media (min-width: 1280px)": {
    "display": "flex"
  }
});
_c3 = DesktopInquireButtonWrapper;
var DesktopPriceInquireButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(InquireButton).withConfig({
  displayName: "PricingCards__DesktopPriceInquireButton",
  componentId: "sc-15u2yf1-4"
})(["", ""], {
  "display": "flex",
  "width": "100%",
  "justifyContent": "center",
  "paddingTop": "0.75rem",
  "paddingBottom": "0.75rem"
});
_c4 = DesktopPriceInquireButton;
var MobilePriceInquireButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(InquireButton).withConfig({
  displayName: "PricingCards__MobilePriceInquireButton",
  componentId: "sc-15u2yf1-5"
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
_c5 = MobilePriceInquireButton;
var CardHeadingContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PricingCards__CardHeadingContainer",
  componentId: "sc-15u2yf1-6"
})(["", ""], {
  "display": "flex",
  "flexDirection": "column",
  "flexGrow": "1",
  "> :not([hidden]) ~ :not([hidden])": {
    "--tw-space-y-reverse": 0,
    "marginTop": "calc(1rem * calc(1 - var(--tw-space-y-reverse)))",
    "marginBottom": "calc(1rem * var(--tw-space-y-reverse))"
  },
  "@media (min-width: 1280px)": {
    "flexGrow": "0",
    "display": "block"
  }
});
_c6 = CardHeadingContainer;
var CardHeading = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h3.withConfig({
  displayName: "PricingCards__CardHeading",
  componentId: "sc-15u2yf1-7"
})(["", ""], {
  "lineHeight": "2.25rem",
  "width": "100%",
  "fontSize": "1.875rem",
  "fontWeight": "900",
  "whiteSpace": "pre-line"
});
_c7 = CardHeading;

var LicenseFeatureList = function LicenseFeatureList(_ref) {
  var featureList = _ref.featureList,
      twClasses = _ref.twClasses;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
    className: "space-y-0.5 ".concat(twClasses),
    children: featureList.map(function (featureItem) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
        className: "text-center whitespace-pre",
        children: featureItem
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 3
  }, _this);
};

_c8 = LicenseFeatureList;

var DesktopLicenseFeatureList = function DesktopLicenseFeatureList(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(LicenseFeatureList, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 46
  }, _this);
};

_c9 = DesktopLicenseFeatureList;

var Card = function Card(_ref2) {
  var priceData = _ref2.priceData;
  var price = priceData.price,
      price_unit = priceData.price_unit,
      heading = priceData.heading,
      feature = priceData.feature,
      cta_text = priceData.cta_text,
      cta_link = priceData.cta_link,
      desc_list = priceData.desc_list;
  var featureList = feature ? featureParser(feature) : null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(CardWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(CardHeadingContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(CardHeading, {
        children: heading && specialHeadingParser(heading)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(MobilePriceInquireButton, {
        children: cta_text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DesktopLicenseFeatureList, {
      featureList: featureList,
      twClasses: "hidden xl:block"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
      className: "desc-list font-bold ml-2 xl:ml-0",
      children: desc_list.map(function (desc_item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          className: "mb-2 flex items-center space-x-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Icons__WEBPACK_IMPORTED_MODULE_4__["Check"], {
            size: "20"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: desc_item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, _this), cta_text && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DesktopInquireButtonWrapper, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DesktopPriceInquireButton, {
        children: cta_text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, _this);
};

_c10 = Card;

var PricingCards = function PricingCards(_ref3) {
  var priceModels = _ref3.priceModels;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    children: priceModels && priceModels.map(function (priceData) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Card, {
        priceData: priceData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 18
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 5
  }, _this);
};

_c11 = PricingCards;


var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "CardWrapper");
$RefreshReg$(_c3, "DesktopInquireButtonWrapper");
$RefreshReg$(_c4, "DesktopPriceInquireButton");
$RefreshReg$(_c5, "MobilePriceInquireButton");
$RefreshReg$(_c6, "CardHeadingContainer");
$RefreshReg$(_c7, "CardHeading");
$RefreshReg$(_c8, "LicenseFeatureList");
$RefreshReg$(_c9, "DesktopLicenseFeatureList");
$RefreshReg$(_c10, "Card");
$RefreshReg$(_c11, "PricingCards");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljaW5nQ2FyZHMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiZmVhdHVyZVBhcnNlciIsImZlYXR1cmUiLCJzcGxpdCIsInNwZWNpYWxIZWFkaW5nUGFyc2VyIiwiaGVhZGluZyIsInJlcGxhY2UiLCJDYXJkV3JhcHBlciIsIklucXVpcmVCdXR0b24iLCJSb3VuZGVkQmx1ZUJ1dHRvbiIsIkRlc2t0b3BJbnF1aXJlQnV0dG9uV3JhcHBlciIsIkRlc2t0b3BQcmljZUlucXVpcmVCdXR0b24iLCJNb2JpbGVQcmljZUlucXVpcmVCdXR0b24iLCJDYXJkSGVhZGluZ0NvbnRhaW5lciIsIkNhcmRIZWFkaW5nIiwiaDMiLCJMaWNlbnNlRmVhdHVyZUxpc3QiLCJmZWF0dXJlTGlzdCIsInR3Q2xhc3NlcyIsIm1hcCIsImZlYXR1cmVJdGVtIiwiRGVza3RvcExpY2Vuc2VGZWF0dXJlTGlzdCIsInByb3BzIiwiQ2FyZCIsInByaWNlRGF0YSIsInByaWNlIiwicHJpY2VfdW5pdCIsImN0YV90ZXh0IiwiY3RhX2xpbmsiLCJkZXNjX2xpc3QiLCJkZXNjX2l0ZW0iLCJQcmljaW5nQ2FyZHMiLCJwcmljZU1vZGVscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsYUFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FEUyxDQUFmO0FBSUE7O0tBSk1GLFM7O0FBS04sSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxPQUFELEVBQWE7QUFDakM7QUFD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UCxxRUFBQywyQkFBRDtBQUFBLDZCQUNFLHFFQUFDLHlCQUFEO0FBQUEsa0JBQTRCQTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQXJDRDs7T0FBTUosSTs7QUF1Q04sSUFBTVEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsUUFBcUI7QUFBQSxNQUFsQkMsV0FBa0IsU0FBbEJBLFdBQWtCO0FBQ3hDLHNCQUNFLHFFQUFDLFNBQUQ7QUFBQSxjQUNHQSxXQUFXLElBQ1ZBLFdBQVcsQ0FBQ2IsR0FBWixDQUFnQixVQUFDSyxTQUFELEVBQWU7QUFDN0IsMEJBQU8scUVBQUMsSUFBRDtBQUFNLGlCQUFTLEVBQUVBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELEtBRkQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQVREOztPQUFNTyxZO0FBV04iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTc0YjZiMmRhMjE3ODUwNDdjZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQ2hlY2sgfSBmcm9tIFwiY29tcG9uZW50cy9JY29uc1wiO1xyXG5pbXBvcnQgUm91bmRlZEJsdWVCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvQnV0dG9uXCI7XHJcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAke3R3YGZsZXggZmxleC1jb2wgcHgtNiB4bDpweC0wIHhsOmZsZXgtcm93IHNwYWNlLXktOCB4bDpzcGFjZS15LTAgeGw6c3BhY2UteC04YH1cclxuYDtcclxuXHJcbi8qIFV0aWxzICovXHJcbmNvbnN0IGZlYXR1cmVQYXJzZXIgPSAoZmVhdHVyZSkgPT4ge1xyXG4gIC8vIFRPRE86IGRlc3RydWN0dXJlIGZlYXR1cmUgYnkgZGVsaW1pdGVyIChjb2xvbilcclxuICByZXR1cm4gZmVhdHVyZS5zcGxpdChcIjpcIik7XHJcbn07XHJcblxyXG5jb25zdCBzcGVjaWFsSGVhZGluZ1BhcnNlciA9IChoZWFkaW5nKSA9PiBoZWFkaW5nLnJlcGxhY2UoLyAvZywgXCJcXG5cIik7XHJcblxyXG5jb25zdCBDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2BmbGV4IGZsZXgtcm93IHhsOmZsZXgtY29sIGZsZXgtZ3JvdyBzaGFkb3ctbGcgeGw6c3BhY2UteS01IHAtMTAgcm91bmRlZC14bCBmb2N1czpvdXRsaW5lLW5vbmVgfVxyXG4gICYge1xyXG4gICAgZmxleC1iYXNpczogMDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgbWluLXdpZHRoOiAyMjVweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbnF1aXJlQnV0dG9uID0gc3R5bGVkKFJvdW5kZWRCbHVlQnV0dG9uKWBcclxuICAke3R3YHJvdW5kZWQtZnVsbCB0ZXh0LWJhc2UgZm9jdXM6b3V0bGluZS1ub25lIHRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCBhY3RpdmU6dHJhbnNsYXRlLXgtMSBhY3RpdmU6dHJhbnNsYXRlLXktMWB9XHJcbmA7XHJcblxyXG5jb25zdCBEZXNrdG9wSW5xdWlyZUJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICR7dHdgaGlkZGVuIHhsOmZsZXggZmxleC1jb2wgZmxleC1ncm93IGl0ZW1zLWVuZGB9XHJcbmA7XHJcblxyXG5jb25zdCBEZXNrdG9wUHJpY2VJbnF1aXJlQnV0dG9uID0gc3R5bGVkKElucXVpcmVCdXR0b24pYFxyXG4gICR7dHdgZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgcHktM2B9XHJcbmA7XHJcblxyXG5jb25zdCBNb2JpbGVQcmljZUlucXVpcmVCdXR0b24gPSBzdHlsZWQoSW5xdWlyZUJ1dHRvbilgXHJcbiAgJHt0d2B4bDpoaWRkZW4gZmxleC1ncm93LTAgdy1taW4gcHgtNCBweS0yYH1cclxuYDtcclxuXHJcbmNvbnN0IENhcmRIZWFkaW5nQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAke3R3YGZsZXggZmxleC1jb2wgZmxleC1ncm93IHhsOmZsZXgtZ3Jvdy0wIHhsOmJsb2NrIHNwYWNlLXktNGB9XHJcbmA7XHJcbmNvbnN0IENhcmRIZWFkaW5nID0gc3R5bGVkLmgzYFxyXG4gICR7dHdgbGVhZGluZy10aWdodCB3LWZ1bGwgdGV4dC0zeGwgZm9udC1ibGFjayB3aGl0ZXNwYWNlLXByZS1saW5lYH1cclxuYDtcclxuXHJcbmNvbnN0IExpY2Vuc2VGZWF0dXJlTGlzdCA9ICh7IGZlYXR1cmVMaXN0LCB0d0NsYXNzZXMgfSkgPT4gKFxyXG4gIDx1bCBjbGFzc05hbWU9e2BzcGFjZS15LTAuNSAke3R3Q2xhc3Nlc31gfT5cclxuICAgIHtmZWF0dXJlTGlzdC5tYXAoKGZlYXR1cmVJdGVtKSA9PiAoXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3aGl0ZXNwYWNlLXByZVwiPntmZWF0dXJlSXRlbX08L2xpPlxyXG4gICAgKSl9XHJcbiAgPC91bD5cclxuKTtcclxuY29uc3QgRGVza3RvcExpY2Vuc2VGZWF0dXJlTGlzdCA9IChwcm9wcykgPT4gPExpY2Vuc2VGZWF0dXJlTGlzdCB7Li4ucHJvcHN9IC8+O1xyXG5cclxuY29uc3QgQ2FyZCA9ICh7IHByaWNlRGF0YSB9KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcHJpY2UsXHJcbiAgICBwcmljZV91bml0LFxyXG4gICAgaGVhZGluZyxcclxuICAgIGZlYXR1cmUsXHJcbiAgICBjdGFfdGV4dCxcclxuICAgIGN0YV9saW5rLFxyXG4gICAgZGVzY19saXN0LFxyXG4gIH0gPSBwcmljZURhdGE7XHJcbiAgY29uc3QgZmVhdHVyZUxpc3QgPSBmZWF0dXJlID8gZmVhdHVyZVBhcnNlcihmZWF0dXJlKSA6IG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkV3JhcHBlcj5cclxuICAgICAgey8qIDxoNiBjbGFzc05hbWU9XCJ0eXBlXCI+QXdlc29tZTwvaDY+ICovfVxyXG4gICAgICA8Q2FyZEhlYWRpbmdDb250YWluZXI+XHJcbiAgICAgICAgPENhcmRIZWFkaW5nPntoZWFkaW5nICYmIHNwZWNpYWxIZWFkaW5nUGFyc2VyKGhlYWRpbmcpfTwvQ2FyZEhlYWRpbmc+XHJcbiAgICAgICAgPE1vYmlsZVByaWNlSW5xdWlyZUJ1dHRvbj57Y3RhX3RleHR9PC9Nb2JpbGVQcmljZUlucXVpcmVCdXR0b24+XHJcbiAgICAgIDwvQ2FyZEhlYWRpbmdDb250YWluZXI+XHJcbiAgICAgIDxEZXNrdG9wTGljZW5zZUZlYXR1cmVMaXN0XHJcbiAgICAgICAgZmVhdHVyZUxpc3Q9e2ZlYXR1cmVMaXN0fVxyXG4gICAgICAgIHR3Q2xhc3Nlcz1cImhpZGRlbiB4bDpibG9ja1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJkZXNjLWxpc3QgZm9udC1ib2xkIG1sLTIgeGw6bWwtMFwiPlxyXG4gICAgICAgIHtkZXNjX2xpc3QubWFwKChkZXNjX2l0ZW0pID0+IChcclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0yIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICA8Q2hlY2sgc2l6ZT1cIjIwXCIgLz5cclxuICAgICAgICAgICAgPHNwYW4+e2Rlc2NfaXRlbX08L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICB7Y3RhX3RleHQgJiYgKFxyXG4gICAgICAgIDxEZXNrdG9wSW5xdWlyZUJ1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgICA8RGVza3RvcFByaWNlSW5xdWlyZUJ1dHRvbj57Y3RhX3RleHR9PC9EZXNrdG9wUHJpY2VJbnF1aXJlQnV0dG9uPlxyXG4gICAgICAgIDwvRGVza3RvcElucXVpcmVCdXR0b25XcmFwcGVyPlxyXG4gICAgICApfVxyXG4gICAgPC9DYXJkV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJpY2luZ0NhcmRzID0gKHsgcHJpY2VNb2RlbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICB7cHJpY2VNb2RlbHMgJiZcclxuICAgICAgICBwcmljZU1vZGVscy5tYXAoKHByaWNlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxDYXJkIHByaWNlRGF0YT17cHJpY2VEYXRhfSAvPjtcclxuICAgICAgICB9KX1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBQcmljaW5nQ2FyZHMgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==