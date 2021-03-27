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
  "paddingTop": "0.75rem",
  "paddingBottom": "0.75rem",
  "marginLeft": "1rem",
  "marginRight": "1rem"
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
    className: "space-y-0.5 ".concat(twClasses, "}"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljaW5nQ2FyZHMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiZmVhdHVyZVBhcnNlciIsImZlYXR1cmUiLCJzcGxpdCIsInNwZWNpYWxIZWFkaW5nUGFyc2VyIiwiaGVhZGluZyIsInJlcGxhY2UiLCJDYXJkV3JhcHBlciIsIklucXVpcmVCdXR0b24iLCJSb3VuZGVkQmx1ZUJ1dHRvbiIsIkRlc2t0b3BJbnF1aXJlQnV0dG9uV3JhcHBlciIsIkRlc2t0b3BQcmljZUlucXVpcmVCdXR0b24iLCJNb2JpbGVQcmljZUlucXVpcmVCdXR0b24iLCJDYXJkSGVhZGluZ0NvbnRhaW5lciIsIkNhcmRIZWFkaW5nIiwiaDMiLCJMaWNlbnNlRmVhdHVyZUxpc3QiLCJmZWF0dXJlTGlzdCIsInR3Q2xhc3NlcyIsIm1hcCIsImZlYXR1cmVJdGVtIiwiRGVza3RvcExpY2Vuc2VGZWF0dXJlTGlzdCIsInByb3BzIiwiQ2FyZCIsInByaWNlRGF0YSIsInByaWNlIiwicHJpY2VfdW5pdCIsImN0YV90ZXh0IiwiY3RhX2xpbmsiLCJkZXNjX2xpc3QiLCJkZXNjX2l0ZW0iLCJQcmljaW5nQ2FyZHMiLCJwcmljZU1vZGVscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsYUFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FEUyxDQUFmO0FBSUE7O0tBSk1GLFM7O0FBS04sSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxPQUFELEVBQWE7QUFDakM7QUFD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QUFEO0FBQUEsNkJBQ0UscUVBQUMseUJBQUQ7QUFBQSxrQkFBNEJBO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEJELENBckNEOztPQUFNSixJOztBQXVDTixJQUFNUSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxRQUFxQjtBQUFBLE1BQWxCQyxXQUFrQixTQUFsQkEsV0FBa0I7QUFDeEMsc0JBQ0UscUVBQUMsU0FBRDtBQUFBLGNBQ0dBLFdBQVcsSUFDVkEsV0FBVyxDQUFDYixHQUFaLENBQWdCLFVBQUNLLFNBQUQsRUFBZTtBQUM3QiwwQkFBTyxxRUFBQyxJQUFEO0FBQU0saUJBQVMsRUFBRUE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsS0FGRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBVEQ7O09BQU1PLFk7QUFXTiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44YWJmZTlkZWIzNjc5MWRmMWY5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gXCJjb21wb25lbnRzL0ljb25zXCI7XHJcbmltcG9ydCBSb3VuZGVkQmx1ZUJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9CdXR0b25cIjtcclxuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICR7dHdgZmxleCBmbGV4LWNvbCBweC02IHhsOnB4LTAgeGw6ZmxleC1yb3cgc3BhY2UteS04IHhsOnNwYWNlLXktMCB4bDpzcGFjZS14LThgfVxyXG5gO1xyXG5cclxuLyogVXRpbHMgKi9cclxuY29uc3QgZmVhdHVyZVBhcnNlciA9IChmZWF0dXJlKSA9PiB7XHJcbiAgLy8gVE9ETzogZGVzdHJ1Y3R1cmUgZmVhdHVyZSBieSBkZWxpbWl0ZXIgKGNvbG9uKVxyXG4gIHJldHVybiBmZWF0dXJlLnNwbGl0KFwiOlwiKTtcclxufTtcclxuXHJcbmNvbnN0IHNwZWNpYWxIZWFkaW5nUGFyc2VyID0gKGhlYWRpbmcpID0+IGhlYWRpbmcucmVwbGFjZSgvIC9nLCBcIlxcblwiKTtcclxuXHJcbmNvbnN0IENhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAke3R3YGZsZXggZmxleC1yb3cgeGw6ZmxleC1jb2wgZmxleC1ncm93IHNoYWRvdy1sZyB4bDpzcGFjZS15LTUgcC0xMCByb3VuZGVkLXhsIGZvY3VzOm91dGxpbmUtbm9uZWB9XHJcbiAgJiB7XHJcbiAgICBmbGV4LWJhc2lzOiAwO1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBtaW4td2lkdGg6IDIyNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IElucXVpcmVCdXR0b24gPSBzdHlsZWQoUm91bmRlZEJsdWVCdXR0b24pYFxyXG4gICR7dHdgcm91bmRlZC1mdWxsIHRleHQtYmFzZSBmb2N1czpvdXRsaW5lLW5vbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIGFjdGl2ZTp0cmFuc2xhdGUteC0xIGFjdGl2ZTp0cmFuc2xhdGUteS0xYH1cclxuYDtcclxuXHJcbmNvbnN0IERlc2t0b3BJbnF1aXJlQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2BoaWRkZW4geGw6ZmxleCBmbGV4LWNvbCBmbGV4LWdyb3cgaXRlbXMtZW5kYH1cclxuYDtcclxuXHJcbmNvbnN0IERlc2t0b3BQcmljZUlucXVpcmVCdXR0b24gPSBzdHlsZWQoSW5xdWlyZUJ1dHRvbilgXHJcbiAgJHt0d2BweS0zIG14LTRgfVxyXG5gO1xyXG5cclxuY29uc3QgTW9iaWxlUHJpY2VJbnF1aXJlQnV0dG9uID0gc3R5bGVkKElucXVpcmVCdXR0b24pYFxyXG4gICR7dHdgeGw6aGlkZGVuIGZsZXgtZ3Jvdy0wIHctbWluIHB4LTQgcHktMmB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkSGVhZGluZ0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2BmbGV4IGZsZXgtY29sIGZsZXgtZ3JvdyB4bDpibG9jayBzcGFjZS15LTRgfVxyXG5gO1xyXG5jb25zdCBDYXJkSGVhZGluZyA9IHN0eWxlZC5oM2BcclxuICAke3R3YGxlYWRpbmctdGlnaHQgdy1mdWxsIHRleHQtM3hsIGZvbnQtYmxhY2sgd2hpdGVzcGFjZS1wcmUtbGluZWB9XHJcbmA7XHJcblxyXG5jb25zdCBMaWNlbnNlRmVhdHVyZUxpc3QgPSAoeyBmZWF0dXJlTGlzdCwgdHdDbGFzc2VzIH0pID0+IChcclxuICA8dWwgY2xhc3NOYW1lPXtgc3BhY2UteS0wLjUgJHt0d0NsYXNzZXN9fWB9PlxyXG4gICAge2ZlYXR1cmVMaXN0Lm1hcCgoZmVhdHVyZUl0ZW0pID0+IChcclxuICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHdoaXRlc3BhY2UtcHJlXCI+e2ZlYXR1cmVJdGVtfTwvbGk+XHJcbiAgICApKX1cclxuICA8L3VsPlxyXG4pO1xyXG5jb25zdCBEZXNrdG9wTGljZW5zZUZlYXR1cmVMaXN0ID0gKHByb3BzKSA9PiA8TGljZW5zZUZlYXR1cmVMaXN0IHsuLi5wcm9wc30gLz47XHJcblxyXG5jb25zdCBDYXJkID0gKHsgcHJpY2VEYXRhIH0pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBwcmljZSxcclxuICAgIHByaWNlX3VuaXQsXHJcbiAgICBoZWFkaW5nLFxyXG4gICAgZmVhdHVyZSxcclxuICAgIGN0YV90ZXh0LFxyXG4gICAgY3RhX2xpbmssXHJcbiAgICBkZXNjX2xpc3QsXHJcbiAgfSA9IHByaWNlRGF0YTtcclxuICBjb25zdCBmZWF0dXJlTGlzdCA9IGZlYXR1cmUgPyBmZWF0dXJlUGFyc2VyKGZlYXR1cmUpIDogbnVsbDtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRXcmFwcGVyPlxyXG4gICAgICB7LyogPGg2IGNsYXNzTmFtZT1cInR5cGVcIj5Bd2Vzb21lPC9oNj4gKi99XHJcbiAgICAgIDxDYXJkSGVhZGluZ0NvbnRhaW5lcj5cclxuICAgICAgICA8Q2FyZEhlYWRpbmc+e2hlYWRpbmcgJiYgc3BlY2lhbEhlYWRpbmdQYXJzZXIoaGVhZGluZyl9PC9DYXJkSGVhZGluZz5cclxuICAgICAgICA8TW9iaWxlUHJpY2VJbnF1aXJlQnV0dG9uPntjdGFfdGV4dH08L01vYmlsZVByaWNlSW5xdWlyZUJ1dHRvbj5cclxuICAgICAgPC9DYXJkSGVhZGluZ0NvbnRhaW5lcj5cclxuICAgICAgPERlc2t0b3BMaWNlbnNlRmVhdHVyZUxpc3RcclxuICAgICAgICBmZWF0dXJlTGlzdD17ZmVhdHVyZUxpc3R9XHJcbiAgICAgICAgdHdDbGFzc2VzPVwiaGlkZGVuIHhsOmJsb2NrXCJcclxuICAgICAgLz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImRlc2MtbGlzdCBmb250LWJvbGQgbWwtMiB4bDptbC0wXCI+XHJcbiAgICAgICAge2Rlc2NfbGlzdC5tYXAoKGRlc2NfaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTIgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgIDxDaGVjayBzaXplPVwiMjBcIiAvPlxyXG4gICAgICAgICAgICA8c3Bhbj57ZGVzY19pdGVtfTwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIHtjdGFfdGV4dCAmJiAoXHJcbiAgICAgICAgPERlc2t0b3BJbnF1aXJlQnV0dG9uV3JhcHBlcj5cclxuICAgICAgICAgIDxEZXNrdG9wUHJpY2VJbnF1aXJlQnV0dG9uPntjdGFfdGV4dH08L0Rlc2t0b3BQcmljZUlucXVpcmVCdXR0b24+XHJcbiAgICAgICAgPC9EZXNrdG9wSW5xdWlyZUJ1dHRvbldyYXBwZXI+XHJcbiAgICAgICl9XHJcbiAgICA8L0NhcmRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQcmljaW5nQ2FyZHMgPSAoeyBwcmljZU1vZGVscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIHtwcmljZU1vZGVscyAmJlxyXG4gICAgICAgIHByaWNlTW9kZWxzLm1hcCgocHJpY2VEYXRhKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPENhcmQgcHJpY2VEYXRhPXtwcmljZURhdGF9IC8+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFByaWNpbmdDYXJkcyB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9