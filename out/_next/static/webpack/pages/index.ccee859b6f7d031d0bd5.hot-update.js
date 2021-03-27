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
})(["width:20px;color:green;"]);
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
        lineNumber: 60,
        columnNumber: 7
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 3
  }, _this);
};

_c9 = LicenseFeatureList;

var DesktopLicenseFeatureList = function DesktopLicenseFeatureList(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(LicenseFeatureList, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
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
        lineNumber: 81,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(MobilePriceInquireButton, {
        children: cta_text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DesktopLicenseFeatureList, {
      featureList: featureList,
      twClasses: "hidden xl:block"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
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
            lineNumber: 91,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: desc_item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, _this), cta_text && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DesktopInquireButtonWrapper, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DesktopPriceInquireButton, {
        children: cta_text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
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
        lineNumber: 110,
        columnNumber: 18
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 107,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljaW5nQ2FyZHMuanMiXSwibmFtZXMiOlsiZmVhdHVyZVBhcnNlciIsImZlYXR1cmUiLCJzcGxpdCIsInNwZWNpYWxIZWFkaW5nUGFyc2VyIiwiaGVhZGluZyIsInJlcGxhY2UiLCJHcmVlbkNoZWNrIiwic3R5bGVkIiwiQ2hlY2siLCJDb250YWluZXIiLCJkaXYiLCJDYXJkV3JhcHBlciIsIklucXVpcmVCdXR0b24iLCJSb3VuZGVkQmx1ZUJ1dHRvbiIsIkRlc2t0b3BJbnF1aXJlQnV0dG9uV3JhcHBlciIsIkRlc2t0b3BQcmljZUlucXVpcmVCdXR0b24iLCJNb2JpbGVQcmljZUlucXVpcmVCdXR0b24iLCJDYXJkSGVhZGluZ0NvbnRhaW5lciIsIkNhcmRIZWFkaW5nIiwiaDMiLCJMaWNlbnNlRmVhdHVyZUxpc3QiLCJmZWF0dXJlTGlzdCIsInR3Q2xhc3NlcyIsIm1hcCIsImZlYXR1cmVJdGVtIiwiRGVza3RvcExpY2Vuc2VGZWF0dXJlTGlzdCIsInByb3BzIiwiQ2FyZCIsInByaWNlRGF0YSIsInByaWNlIiwicHJpY2VfdW5pdCIsImN0YV90ZXh0IiwiY3RhX2xpbmsiLCJkZXNjX2xpc3QiLCJkZXNjX2l0ZW0iLCJQcmljaW5nQ2FyZHMiLCJwcmljZU1vZGVscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLE9BQUQsRUFBYTtBQUNqQztBQUNBLFNBQU9BLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLEdBQWQsQ0FBUDtBQUNELENBSEQ7O0FBS0EsSUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxPQUFEO0FBQUEsU0FBYUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCLElBQWhCLEVBQXNCLElBQXRCLENBQWI7QUFBQSxDQUE3Qjs7QUFFQSxJ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QSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLEVBa0JHSCxRQUFRLGlCQUNQLHFFQUFDLDJCQUFEO0FBQUEsNkJBQ0UscUVBQUMseUJBQUQ7QUFBQSxrQkFBNEJBO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEJELENBckNEOztPQUFNSixJOztBQXVDTixJQUFNUSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxRQUFxQjtBQUFBLE1BQWxCQyxXQUFrQixTQUFsQkEsV0FBa0I7QUFDeEMsc0JBQ0UscUVBQUMsU0FBRDtBQUFBLGNBQ0dBLFdBQVcsSUFDVkEsV0FBVyxDQUFDYixHQUFaLENBQWdCLFVBQUNLLFNBQUQsRUFBZTtBQUM3QiwwQkFBTyxxRUFBQyxJQUFEO0FBQU0saUJBQVMsRUFBRUE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsS0FGRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBVEQ7O09BQU1PLFk7QUFXTiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jY2VlODU5YjZmN2QwMzFkMGJkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBDaGVjayB9IGZyb20gXCJjb21wb25lbnRzL0ljb25zXCI7XHJcbmltcG9ydCBSb3VuZGVkQmx1ZUJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9CdXR0b25cIjtcclxuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XHJcblxyXG4vKiBVdGlscyAqL1xyXG5jb25zdCBmZWF0dXJlUGFyc2VyID0gKGZlYXR1cmUpID0+IHtcclxuICAvLyBUT0RPOiBkZXN0cnVjdHVyZSBmZWF0dXJlIGJ5IGRlbGltaXRlciAoY29sb24pXHJcbiAgcmV0dXJuIGZlYXR1cmUuc3BsaXQoXCI6XCIpO1xyXG59O1xyXG5cclxuY29uc3Qgc3BlY2lhbEhlYWRpbmdQYXJzZXIgPSAoaGVhZGluZykgPT4gaGVhZGluZy5yZXBsYWNlKC8gL2csIFwiXFxuXCIpO1xyXG5cclxuY29uc3QgR3JlZW5DaGVjayA9IHN0eWxlZChDaGVjaylgXHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG5gO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAke3R3YGZsZXggZmxleC1jb2wgcHgtNiB4bDpweC0wIHhsOmZsZXgtcm93IHNwYWNlLXktOCB4bDpzcGFjZS15LTAgeGw6c3BhY2UteC04YH1cclxuYDtcclxuXHJcbmNvbnN0IENhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAke3R3YGZsZXggZmxleC1yb3cgeGw6ZmxleC1jb2wgZmxleC1ncm93IHNoYWRvdy1sZyB4bDpzcGFjZS15LTUgcC0xMCByb3VuZGVkLXhsIGZvY3VzOm91dGxpbmUtbm9uZWB9XHJcbiAgJiB7XHJcbiAgICBmbGV4LWJhc2lzOiAwO1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBtaW4td2lkdGg6IDIyNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IElucXVpcmVCdXR0b24gPSBzdHlsZWQoUm91bmRlZEJsdWVCdXR0b24pYFxyXG4gICR7dHdgcm91bmRlZC1mdWxsIHRleHQtYmFzZSBmb2N1czpvdXRsaW5lLW5vbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIGFjdGl2ZTp0cmFuc2xhdGUteC0xIGFjdGl2ZTp0cmFuc2xhdGUteS0xYH1cclxuYDtcclxuXHJcbmNvbnN0IERlc2t0b3BJbnF1aXJlQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2BoaWRkZW4geGw6ZmxleCBmbGV4LWNvbCBmbGV4LWdyb3cgaXRlbXMtZW5kYH1cclxuYDtcclxuXHJcbmNvbnN0IERlc2t0b3BQcmljZUlucXVpcmVCdXR0b24gPSBzdHlsZWQoSW5xdWlyZUJ1dHRvbilgXHJcbiAgJHt0d2BmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBweS0zYH1cclxuYDtcclxuXHJcbmNvbnN0IE1vYmlsZVByaWNlSW5xdWlyZUJ1dHRvbiA9IHN0eWxlZChJbnF1aXJlQnV0dG9uKWBcclxuICAke3R3YHhsOmhpZGRlbiBmbGV4LWdyb3ctMCB3LW1pbiBweC00IHB5LTJgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZEhlYWRpbmdDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICR7dHdgZmxleCBmbGV4LWNvbCBmbGV4LWdyb3cgeGw6ZmxleC1ncm93LTAgeGw6YmxvY2sgc3BhY2UteS00YH1cclxuYDtcclxuY29uc3QgQ2FyZEhlYWRpbmcgPSBzdHlsZWQuaDNgXHJcbiAgJHt0d2BsZWFkaW5nLXRpZ2h0IHctZnVsbCB0ZXh0LTN4bCBmb250LWJsYWNrIHdoaXRlc3BhY2UtcHJlLWxpbmVgfVxyXG5gO1xyXG5cclxuY29uc3QgTGljZW5zZUZlYXR1cmVMaXN0ID0gKHsgZmVhdHVyZUxpc3QsIHR3Q2xhc3NlcyB9KSA9PiAoXHJcbiAgPHVsIGNsYXNzTmFtZT17YHNwYWNlLXktMC41ICR7dHdDbGFzc2VzfWB9PlxyXG4gICAge2ZlYXR1cmVMaXN0Lm1hcCgoZmVhdHVyZUl0ZW0pID0+IChcclxuICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHdoaXRlc3BhY2UtcHJlXCI+e2ZlYXR1cmVJdGVtfTwvbGk+XHJcbiAgICApKX1cclxuICA8L3VsPlxyXG4pO1xyXG5jb25zdCBEZXNrdG9wTGljZW5zZUZlYXR1cmVMaXN0ID0gKHByb3BzKSA9PiA8TGljZW5zZUZlYXR1cmVMaXN0IHsuLi5wcm9wc30gLz47XHJcblxyXG5jb25zdCBDYXJkID0gKHsgcHJpY2VEYXRhIH0pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBwcmljZSxcclxuICAgIHByaWNlX3VuaXQsXHJcbiAgICBoZWFkaW5nLFxyXG4gICAgZmVhdHVyZSxcclxuICAgIGN0YV90ZXh0LFxyXG4gICAgY3RhX2xpbmssXHJcbiAgICBkZXNjX2xpc3QsXHJcbiAgfSA9IHByaWNlRGF0YTtcclxuICBjb25zdCBmZWF0dXJlTGlzdCA9IGZlYXR1cmUgPyBmZWF0dXJlUGFyc2VyKGZlYXR1cmUpIDogbnVsbDtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRXcmFwcGVyPlxyXG4gICAgICB7LyogPGg2IGNsYXNzTmFtZT1cInR5cGVcIj5Bd2Vzb21lPC9oNj4gKi99XHJcbiAgICAgIDxDYXJkSGVhZGluZ0NvbnRhaW5lcj5cclxuICAgICAgICA8Q2FyZEhlYWRpbmc+e2hlYWRpbmcgJiYgc3BlY2lhbEhlYWRpbmdQYXJzZXIoaGVhZGluZyl9PC9DYXJkSGVhZGluZz5cclxuICAgICAgICA8TW9iaWxlUHJpY2VJbnF1aXJlQnV0dG9uPntjdGFfdGV4dH08L01vYmlsZVByaWNlSW5xdWlyZUJ1dHRvbj5cclxuICAgICAgPC9DYXJkSGVhZGluZ0NvbnRhaW5lcj5cclxuICAgICAgPERlc2t0b3BMaWNlbnNlRmVhdHVyZUxpc3RcclxuICAgICAgICBmZWF0dXJlTGlzdD17ZmVhdHVyZUxpc3R9XHJcbiAgICAgICAgdHdDbGFzc2VzPVwiaGlkZGVuIHhsOmJsb2NrXCJcclxuICAgICAgLz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImRlc2MtbGlzdCBmb250LWJvbGQgbWwtMiB4bDptbC0wXCI+XHJcbiAgICAgICAge2Rlc2NfbGlzdC5tYXAoKGRlc2NfaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTIgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgIDxHcmVlbkNoZWNrIHNpemU9XCIyMFwiIC8+XHJcbiAgICAgICAgICAgIDxzcGFuPntkZXNjX2l0ZW19PC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAge2N0YV90ZXh0ICYmIChcclxuICAgICAgICA8RGVza3RvcElucXVpcmVCdXR0b25XcmFwcGVyPlxyXG4gICAgICAgICAgPERlc2t0b3BQcmljZUlucXVpcmVCdXR0b24+e2N0YV90ZXh0fTwvRGVza3RvcFByaWNlSW5xdWlyZUJ1dHRvbj5cclxuICAgICAgICA8L0Rlc2t0b3BJbnF1aXJlQnV0dG9uV3JhcHBlcj5cclxuICAgICAgKX1cclxuICAgIDwvQ2FyZFdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFByaWNpbmdDYXJkcyA9ICh7IHByaWNlTW9kZWxzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAge3ByaWNlTW9kZWxzICYmXHJcbiAgICAgICAgcHJpY2VNb2RlbHMubWFwKChwcmljZURhdGEpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8Q2FyZCBwcmljZURhdGE9e3ByaWNlRGF0YX0gLz47XHJcbiAgICAgICAgfSl9XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgUHJpY2luZ0NhcmRzIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=