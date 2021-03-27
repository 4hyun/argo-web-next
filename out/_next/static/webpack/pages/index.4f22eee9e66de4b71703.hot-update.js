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






/* Utils */
var featureParser = function featureParser(feature) {
  // TODO: destructure feature by delimiter (colon)
  return feature.split(":");
};

var specialHeadingParser = function specialHeadingParser(heading) {
  return heading.replace(/ /g, "\n");
};

var GreenCheck = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(components_Icons__WEBPACK_IMPORTED_MODULE_4__["Check"]).withConfig({
  displayName: "PricingCards__GreenCheck",
  componentId: "sc-15u2yf1-0"
})(["width:22px;color:green;", ""], {
  "marginBottom": "auto"
});
_c = GreenCheck;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PricingCards__Container",
  componentId: "sc-15u2yf1-1"
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
_c2 = Container;
var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PricingCards__CardWrapper",
  componentId: "sc-15u2yf1-2"
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
_c3 = CardWrapper;
var InquireButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(components_Button__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "PricingCards__InquireButton",
  componentId: "sc-15u2yf1-3"
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
  componentId: "sc-15u2yf1-4"
})(["", ""], {
  "display": "none",
  "flexDirection": "column",
  "flexGrow": "1",
  "alignItems": "flex-end",
  "@media (min-width: 1280px)": {
    "display": "flex"
  }
});
_c4 = DesktopInquireButtonWrapper;
var DesktopPriceInquireButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(InquireButton).withConfig({
  displayName: "PricingCards__DesktopPriceInquireButton",
  componentId: "sc-15u2yf1-5"
})(["", ""], {
  "display": "flex",
  "width": "100%",
  "justifyContent": "center",
  "paddingTop": "0.75rem",
  "paddingBottom": "0.75rem"
});
_c5 = DesktopPriceInquireButton;
var MobilePriceInquireButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(InquireButton).withConfig({
  displayName: "PricingCards__MobilePriceInquireButton",
  componentId: "sc-15u2yf1-6"
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
_c6 = MobilePriceInquireButton;
var CardHeadingContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PricingCards__CardHeadingContainer",
  componentId: "sc-15u2yf1-7"
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
_c7 = CardHeadingContainer;
var CardHeading = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h3.withConfig({
  displayName: "PricingCards__CardHeading",
  componentId: "sc-15u2yf1-8"
})(["", ""], {
  "lineHeight": "2.25rem",
  "width": "100%",
  "fontSize": "1.875rem",
  "fontWeight": "900",
  "whiteSpace": "pre-line"
});
_c8 = CardHeading;

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
        lineNumber: 61,
        columnNumber: 7
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 3
  }, _this);
};

_c9 = LicenseFeatureList;

var DesktopLicenseFeatureList = function DesktopLicenseFeatureList(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(LicenseFeatureList, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 46
  }, _this);
};

_c10 = DesktopLicenseFeatureList;

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
        lineNumber: 82,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(MobilePriceInquireButton, {
        children: cta_text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DesktopLicenseFeatureList, {
      featureList: featureList,
      twClasses: "hidden xl:block"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
      className: "desc-list font-bold ml-2 xl:ml-0",
      children: desc_list.map(function (desc_item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          className: "mb-2 flex items-center space-x-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(GreenCheck, {
            size: "20"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: desc_item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, _this), cta_text && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DesktopInquireButtonWrapper, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DesktopPriceInquireButton, {
        children: cta_text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, _this);
};

_c11 = Card;

var PricingCards = function PricingCards(_ref3) {
  var priceModels = _ref3.priceModels;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    children: priceModels && priceModels.map(function (priceData) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Card, {
        priceData: priceData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 18
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 5
  }, _this);
};

_c12 = PricingCards;


var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

$RefreshReg$(_c, "GreenCheck");
$RefreshReg$(_c2, "Container");
$RefreshReg$(_c3, "CardWrapper");
$RefreshReg$(_c4, "DesktopInquireButtonWrapper");
$RefreshReg$(_c5, "DesktopPriceInquireButton");
$RefreshReg$(_c6, "MobilePriceInquireButton");
$RefreshReg$(_c7, "CardHeadingContainer");
$RefreshReg$(_c8, "CardHeading");
$RefreshReg$(_c9, "LicenseFeatureList");
$RefreshReg$(_c10, "DesktopLicenseFeatureList");
$RefreshReg$(_c11, "Card");
$RefreshReg$(_c12, "PricingCards");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljaW5nQ2FyZHMuanMiXSwibmFtZXMiOlsiZmVhdHVyZVBhcnNlciIsImZlYXR1cmUiLCJzcGxpdCIsInNwZWNpYWxIZWFkaW5nUGFyc2VyIiwiaGVhZGluZyIsInJlcGxhY2UiLCJHcmVlbkNoZWNrIiwic3R5bGVkIiwiQ2hlY2siLCJDb250YWluZXIiLCJkaXYiLCJDYXJkV3JhcHBlciIsIklucXVpcmVCdXR0b24iLCJSb3VuZGVkQmx1ZUJ1dHRvbiIsIkRlc2t0b3BJbnF1aXJlQnV0dG9uV3JhcHBlciIsIkRlc2t0b3BQcmljZUlucXVpcmVCdXR0b24iLCJNb2JpbGVQcmljZUlucXVpcmVCdXR0b24iLCJDYXJkSGVhZGluZ0NvbnRhaW5lciIsIkNhcmRIZWFkaW5nIiwiaDMiLCJMaWNlbnNlRmVhdHVyZUxpc3QiLCJmZWF0dXJlTGlzdCIsInR3Q2xhc3NlcyIsIm1hcCIsImZlYXR1cmVJdGVtIiwiRGVza3RvcExpY2Vuc2VGZWF0dXJlTGlzdCIsInByb3BzIiwiQ2FyZCIsInByaWNlRGF0YSIsInByaWNlIiwicHJpY2VfdW5pdCIsImN0YV90ZXh0IiwiY3RhX2xpbmsiLCJkZXNjX2xpc3QiLCJkZXNjX2l0ZW0iLCJQcmljaW5nQ2FyZHMiLCJwcmljZU1vZGVscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLE9BQUQsRUFBYTtBQUNqQztBQUNBLFNBQU9BLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLEdBQWQsQ0FBUDtBQUNELENBSEQ7O0FBS0EsSUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxPQUFEO0FBQUEsU0FBYUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCLElBQWhCLEVBQXNCLElBQXRCLENBQWI7QUFBQSxDQUE3Qjs7QUFFQSxJ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UDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkYsRUFrQkdILFFBQVEsaUJBQ1AscUVBQUMsMkJBQUQ7QUFBQSw2QkFDRSxxRUFBQyx5QkFBRDtBQUFBLGtCQUE0QkE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0FyQ0Q7O09BQU1KLEk7O0FBdUNOLElBQU1RLFlBQVksR0FBRyxTQUFmQSxZQUFlLFFBQXFCO0FBQUEsTUFBbEJDLFdBQWtCLFNBQWxCQSxXQUFrQjtBQUN4QyxzQkFDRSxxRUFBQyxTQUFEO0FBQUEsY0FDR0EsV0FBVyxJQUNWQSxXQUFXLENBQUNiLEdBQVosQ0FBZ0IsVUFBQ0ssU0FBRCxFQUFlO0FBQzdCLDBCQUFPLHFFQUFDLElBQUQ7QUFBTSxpQkFBUyxFQUFFQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxLQUZEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0FURDs7T0FBTU8sWTtBQVdOIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRmMjJlZWU5ZTY2ZGU0YjcxNzAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IENoZWNrIH0gZnJvbSBcImNvbXBvbmVudHMvSWNvbnNcIjtcclxuaW1wb3J0IFJvdW5kZWRCbHVlQnV0dG9uIGZyb20gXCJjb21wb25lbnRzL0J1dHRvblwiO1xyXG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcclxuXHJcbi8qIFV0aWxzICovXHJcbmNvbnN0IGZlYXR1cmVQYXJzZXIgPSAoZmVhdHVyZSkgPT4ge1xyXG4gIC8vIFRPRE86IGRlc3RydWN0dXJlIGZlYXR1cmUgYnkgZGVsaW1pdGVyIChjb2xvbilcclxuICByZXR1cm4gZmVhdHVyZS5zcGxpdChcIjpcIik7XHJcbn07XHJcblxyXG5jb25zdCBzcGVjaWFsSGVhZGluZ1BhcnNlciA9IChoZWFkaW5nKSA9PiBoZWFkaW5nLnJlcGxhY2UoLyAvZywgXCJcXG5cIik7XHJcblxyXG5jb25zdCBHcmVlbkNoZWNrID0gc3R5bGVkKENoZWNrKWBcclxuICB3aWR0aDogMjJweDtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgJHt0d2BtYi1hdXRvYH1cclxuYDtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2BmbGV4IGZsZXgtY29sIHB4LTYgeGw6cHgtMCB4bDpmbGV4LXJvdyBzcGFjZS15LTggeGw6c3BhY2UteS0wIHhsOnNwYWNlLXgtOGB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2BmbGV4IGZsZXgtcm93IHhsOmZsZXgtY29sIGZsZXgtZ3JvdyBzaGFkb3ctbGcgeGw6c3BhY2UteS01IHAtMTAgcm91bmRlZC14bCBmb2N1czpvdXRsaW5lLW5vbmVgfVxyXG4gICYge1xyXG4gICAgZmxleC1iYXNpczogMDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgbWluLXdpZHRoOiAyMjVweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbnF1aXJlQnV0dG9uID0gc3R5bGVkKFJvdW5kZWRCbHVlQnV0dG9uKWBcclxuICAke3R3YHJvdW5kZWQtZnVsbCB0ZXh0LWJhc2UgZm9jdXM6b3V0bGluZS1ub25lIHRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCBhY3RpdmU6dHJhbnNsYXRlLXgtMSBhY3RpdmU6dHJhbnNsYXRlLXktMWB9XHJcbmA7XHJcblxyXG5jb25zdCBEZXNrdG9wSW5xdWlyZUJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICR7dHdgaGlkZGVuIHhsOmZsZXggZmxleC1jb2wgZmxleC1ncm93IGl0ZW1zLWVuZGB9XHJcbmA7XHJcblxyXG5jb25zdCBEZXNrdG9wUHJpY2VJbnF1aXJlQnV0dG9uID0gc3R5bGVkKElucXVpcmVCdXR0b24pYFxyXG4gICR7dHdgZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgcHktM2B9XHJcbmA7XHJcblxyXG5jb25zdCBNb2JpbGVQcmljZUlucXVpcmVCdXR0b24gPSBzdHlsZWQoSW5xdWlyZUJ1dHRvbilgXHJcbiAgJHt0d2B4bDpoaWRkZW4gZmxleC1ncm93LTAgdy1taW4gcHgtNCBweS0yYH1cclxuYDtcclxuXHJcbmNvbnN0IENhcmRIZWFkaW5nQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAke3R3YGZsZXggZmxleC1jb2wgZmxleC1ncm93IHhsOmZsZXgtZ3Jvdy0wIHhsOmJsb2NrIHNwYWNlLXktNGB9XHJcbmA7XHJcbmNvbnN0IENhcmRIZWFkaW5nID0gc3R5bGVkLmgzYFxyXG4gICR7dHdgbGVhZGluZy10aWdodCB3LWZ1bGwgdGV4dC0zeGwgZm9udC1ibGFjayB3aGl0ZXNwYWNlLXByZS1saW5lYH1cclxuYDtcclxuXHJcbmNvbnN0IExpY2Vuc2VGZWF0dXJlTGlzdCA9ICh7IGZlYXR1cmVMaXN0LCB0d0NsYXNzZXMgfSkgPT4gKFxyXG4gIDx1bCBjbGFzc05hbWU9e2BzcGFjZS15LTAuNSAke3R3Q2xhc3Nlc31gfT5cclxuICAgIHtmZWF0dXJlTGlzdC5tYXAoKGZlYXR1cmVJdGVtKSA9PiAoXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3aGl0ZXNwYWNlLXByZVwiPntmZWF0dXJlSXRlbX08L2xpPlxyXG4gICAgKSl9XHJcbiAgPC91bD5cclxuKTtcclxuY29uc3QgRGVza3RvcExpY2Vuc2VGZWF0dXJlTGlzdCA9IChwcm9wcykgPT4gPExpY2Vuc2VGZWF0dXJlTGlzdCB7Li4ucHJvcHN9IC8+O1xyXG5cclxuY29uc3QgQ2FyZCA9ICh7IHByaWNlRGF0YSB9KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcHJpY2UsXHJcbiAgICBwcmljZV91bml0LFxyXG4gICAgaGVhZGluZyxcclxuICAgIGZlYXR1cmUsXHJcbiAgICBjdGFfdGV4dCxcclxuICAgIGN0YV9saW5rLFxyXG4gICAgZGVzY19saXN0LFxyXG4gIH0gPSBwcmljZURhdGE7XHJcbiAgY29uc3QgZmVhdHVyZUxpc3QgPSBmZWF0dXJlID8gZmVhdHVyZVBhcnNlcihmZWF0dXJlKSA6IG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkV3JhcHBlcj5cclxuICAgICAgey8qIDxoNiBjbGFzc05hbWU9XCJ0eXBlXCI+QXdlc29tZTwvaDY+ICovfVxyXG4gICAgICA8Q2FyZEhlYWRpbmdDb250YWluZXI+XHJcbiAgICAgICAgPENhcmRIZWFkaW5nPntoZWFkaW5nICYmIHNwZWNpYWxIZWFkaW5nUGFyc2VyKGhlYWRpbmcpfTwvQ2FyZEhlYWRpbmc+XHJcbiAgICAgICAgPE1vYmlsZVByaWNlSW5xdWlyZUJ1dHRvbj57Y3RhX3RleHR9PC9Nb2JpbGVQcmljZUlucXVpcmVCdXR0b24+XHJcbiAgICAgIDwvQ2FyZEhlYWRpbmdDb250YWluZXI+XHJcbiAgICAgIDxEZXNrdG9wTGljZW5zZUZlYXR1cmVMaXN0XHJcbiAgICAgICAgZmVhdHVyZUxpc3Q9e2ZlYXR1cmVMaXN0fVxyXG4gICAgICAgIHR3Q2xhc3Nlcz1cImhpZGRlbiB4bDpibG9ja1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJkZXNjLWxpc3QgZm9udC1ib2xkIG1sLTIgeGw6bWwtMFwiPlxyXG4gICAgICAgIHtkZXNjX2xpc3QubWFwKChkZXNjX2l0ZW0pID0+IChcclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0yIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICA8R3JlZW5DaGVjayBzaXplPVwiMjBcIiAvPlxyXG4gICAgICAgICAgICA8c3Bhbj57ZGVzY19pdGVtfTwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIHtjdGFfdGV4dCAmJiAoXHJcbiAgICAgICAgPERlc2t0b3BJbnF1aXJlQnV0dG9uV3JhcHBlcj5cclxuICAgICAgICAgIDxEZXNrdG9wUHJpY2VJbnF1aXJlQnV0dG9uPntjdGFfdGV4dH08L0Rlc2t0b3BQcmljZUlucXVpcmVCdXR0b24+XHJcbiAgICAgICAgPC9EZXNrdG9wSW5xdWlyZUJ1dHRvbldyYXBwZXI+XHJcbiAgICAgICl9XHJcbiAgICA8L0NhcmRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQcmljaW5nQ2FyZHMgPSAoeyBwcmljZU1vZGVscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIHtwcmljZU1vZGVscyAmJlxyXG4gICAgICAgIHByaWNlTW9kZWxzLm1hcCgocHJpY2VEYXRhKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPENhcmQgcHJpY2VEYXRhPXtwcmljZURhdGF9IC8+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFByaWNpbmdDYXJkcyB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9