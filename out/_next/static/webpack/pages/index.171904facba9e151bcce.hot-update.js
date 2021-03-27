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
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);



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

var GreenCheckWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PricingCards__GreenCheckWrapper",
  componentId: "sc-15u2yf1-0"
})(["width:22px;height:22px;max-width:22px;max-height:22px;"]);
_c = GreenCheckWrapper;
var GreenCheck = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(components_Icons__WEBPACK_IMPORTED_MODULE_4__["Check"]).withConfig({
  displayName: "PricingCards__GreenCheck",
  componentId: "sc-15u2yf1-1"
})(["color:#04cdb8;"]);
_c2 = GreenCheck;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PricingCards__Container",
  componentId: "sc-15u2yf1-2"
})(["", " @media (max-width:1024px){&{justify-content:space-between;}}"], {
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
_c3 = Container;
var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PricingCards__CardWrapper",
  componentId: "sc-15u2yf1-3"
})(["", " &{flex-basis:0;}@media (min-width:1024px){min-width:225px;}"], {
  "display": "flex",
  "flexDirection": "row",
  "flexGrow": "1",
  "--tw-shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 0px 6px -2px rgba(0, 0, 0, 0.05)",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "paddingLeft": "2rem",
  "paddingRight": "2rem",
  "paddingTop": "2.5rem",
  "paddingBottom": "2.5rem",
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
    },
    "paddingLeft": "2.5rem",
    "paddingRight": "2.5rem"
  }
});
_c4 = CardWrapper;
var InquireButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(components_Button__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "PricingCards__InquireButton",
  componentId: "sc-15u2yf1-4"
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
  componentId: "sc-15u2yf1-5"
})(["", ""], {
  "display": "none",
  "flexDirection": "column",
  "flexGrow": "1",
  "alignItems": "flex-end",
  "@media (min-width: 1280px)": {
    "display": "flex"
  }
});
_c5 = DesktopInquireButtonWrapper;
var DesktopPriceInquireButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(InquireButton).withConfig({
  displayName: "PricingCards__DesktopPriceInquireButton",
  componentId: "sc-15u2yf1-6"
})(["", ""], {
  "display": "flex",
  "width": "100%",
  "justifyContent": "center",
  "paddingTop": "0.75rem",
  "paddingBottom": "0.75rem"
});
_c6 = DesktopPriceInquireButton;
var MobilePriceInquireButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(InquireButton).withConfig({
  displayName: "PricingCards__MobilePriceInquireButton",
  componentId: "sc-15u2yf1-7"
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
_c7 = MobilePriceInquireButton;
var CardHeadingContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PricingCards__CardHeadingContainer",
  componentId: "sc-15u2yf1-8"
})(["", ""], {
  "display": "flex",
  "flexDirection": "column",
  "flexGrow": "1",
  "> :not([hidden]) ~ :not([hidden])": {
    "--tw-space-y-reverse": 0,
    "marginTop": "calc(0.75rem * calc(1 - var(--tw-space-y-reverse)))",
    "marginBottom": "calc(0.75rem * var(--tw-space-y-reverse))"
  },
  "@media (min-width: 1280px)": {
    "flexGrow": "0",
    "display": "block"
  }
});
_c8 = CardHeadingContainer;
var CardHeading = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h3.withConfig({
  displayName: "PricingCards__CardHeading",
  componentId: "sc-15u2yf1-9"
})(["", ""], {
  "lineHeight": "2.25rem",
  "width": "100%",
  "fontSize": "1.875rem",
  "fontWeight": "900",
  "whiteSpace": "pre-line"
});
_c9 = CardHeading;

var LicenseFeatureHighlightList = function LicenseFeatureHighlightList(_ref) {
  var featureList = _ref.featureList,
      twClasses = _ref.twClasses;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
    className: "space-y-0.5 ".concat(twClasses, " ff-open-sans text-base"),
    children: featureList.map(function (featureItem, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
        className: "text-center whitespace-pre",
        children: featureItem
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 7
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 3
  }, _this);
};

_c10 = LicenseFeatureHighlightList;

var DesktopLicenseFeatureHighlightList = function DesktopLicenseFeatureHighlightList(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(LicenseFeatureHighlightList, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 3
  }, _this);
};

_c11 = DesktopLicenseFeatureHighlightList;
var AllFeatureList = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul.withConfig({
  displayName: "PricingCards__AllFeatureList",
  componentId: "sc-15u2yf1-10"
})(["", ""], {
  "fontWeight": "700",
  "marginLeft": "0.5rem",
  "@media (min-width: 1280px)": {
    "marginLeft": "0px"
  }
});
_c12 = AllFeatureList;
var FeatureItem = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li.withConfig({
  displayName: "PricingCards__FeatureItem",
  componentId: "sc-15u2yf1-11"
})(["", ""], {
  "marginBottom": "0.5rem",
  "display": "flex",
  "alignItems": "center",
  "> :not([hidden]) ~ :not([hidden])": {
    "--tw-space-x-reverse": 0,
    "marginRight": "calc(0.5rem * var(--tw-space-x-reverse))",
    "marginLeft": "calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))"
  }
});
_c13 = FeatureItem;

var scrollToTop = function scrollToTop() {
  return react_scroll__WEBPACK_IMPORTED_MODULE_6__["animateScroll"].scrollToTop();
};

var Card = function Card(_ref2) {
  var priceData = _ref2.priceData,
      addInquiryItem = _ref2.addInquiryItem,
      showForm = _ref2.showForm;
  var id = priceData.id,
      price = priceData.price,
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
        lineNumber: 105,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(MobilePriceInquireButton, {
        onClick: function onClick() {
          addInquiryItem(id);
          showForm();
        },
        children: cta_text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DesktopLicenseFeatureHighlightList, {
      featureList: featureList,
      twClasses: "hidden xl:block"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(AllFeatureList, {
      children: desc_list.map(function (desc_item, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(FeatureItem, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(GreenCheckWrapper, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(GreenCheck, {
              size: 20
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: desc_item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, _this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, _this), cta_text && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DesktopInquireButtonWrapper, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DesktopPriceInquireButton, {
        onClick: function onClick() {
          addInquiryItem(id);
          scrollToTop();
        },
        children: cta_text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 5
  }, _this);
};

_c14 = Card;

var PricingCards = function PricingCards(_ref3) {
  var priceModels = _ref3.priceModels,
      addInquiryItem = _ref3.addInquiryItem,
      removeInquiryItem = _ref3.removeInquiryItem,
      showForm = _ref3.showForm;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    children: priceModels && priceModels.map(function (priceData, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Card, {
        priceData: priceData,
        addInquiryItem: addInquiryItem,
        removeInquiryItem: removeInquiryItem,
        showForm: showForm
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 13
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 152,
    columnNumber: 5
  }, _this);
};

_c15 = PricingCards;


var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;

$RefreshReg$(_c, "GreenCheckWrapper");
$RefreshReg$(_c2, "GreenCheck");
$RefreshReg$(_c3, "Container");
$RefreshReg$(_c4, "CardWrapper");
$RefreshReg$(_c5, "DesktopInquireButtonWrapper");
$RefreshReg$(_c6, "DesktopPriceInquireButton");
$RefreshReg$(_c7, "MobilePriceInquireButton");
$RefreshReg$(_c8, "CardHeadingContainer");
$RefreshReg$(_c9, "CardHeading");
$RefreshReg$(_c10, "LicenseFeatureHighlightList");
$RefreshReg$(_c11, "DesktopLicenseFeatureHighlightList");
$RefreshReg$(_c12, "AllFeatureList");
$RefreshReg$(_c13, "FeatureItem");
$RefreshReg$(_c14, "Card");
$RefreshReg$(_c15, "PricingCards");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljaW5nQ2FyZHMuanMiXSwibmFtZXMiOlsiZmVhdHVyZVBhcnNlciIsImZlYXR1cmUiLCJzcGxpdCIsInNwZWNpYWxIZWFkaW5nUGFyc2VyIiwiaGVhZGluZyIsInJlcGxhY2UiLCJHcmVlbkNoZWNrV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkdyZWVuQ2hlY2siLCJDaGVjayIsIkNvbnRhaW5lciIsIkNhcmRXcmFwcGVyIiwiSW5xdWlyZUJ1dHRvbiIsIlJvdW5kZWRCbHVlQnV0dG9uIiwiRGVza3RvcElucXVpcmVCdXR0b25XcmFwcGVyIiwiRGVza3RvcFByaWNlSW5xdWlyZUJ1dHRvbiIsIk1vYmlsZVByaWNlSW5xdWlyZUJ1dHRvbiIsIkNhcmRIZWFkaW5nQ29udGFpbmVyIiwiQ2FyZEhlYWRpbmciLCJoMyIsIkxpY2Vuc2VGZWF0dXJlSGlnaGxpZ2h0TGlzdCIsImZlYXR1cmVMaXN0IiwidHdDbGFzc2VzIiwibWFwIiwiZmVhdHVyZUl0ZW0iLCJpIiwiRGVza3RvcExpY2Vuc2VGZWF0dXJlSGlnaGxpZ2h0TGlzdCIsInByb3BzIiwiQWxsRmVhdHVyZUxpc3QiLCJ1bCIsIkZlYXR1cmVJdGVtIiwibGkiLCJzY3JvbGxUb1RvcCIsImFuaW1hdGVTY3JvbGwiLCJDYXJkIiwicHJpY2VEYXRhIiwiYWRkSW5xdWlyeUl0ZW0iLCJzaG93Rm9ybSIsImlkIiwicHJpY2UiLCJwcmljZV91bml0IiwiY3RhX3RleHQiLCJjdGFfbGluayIsImRlc2NfbGlzdCIsImRlc2NfaXRlbSIsIlByaWNpbmdDYXJkcyIsInByaWNlTW9kZWxzIiwicmVtb3ZlSW5xdWlyeUl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUNBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsT0FBRCxFQUFhO0FBQ2pDO0FB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QUE7QUFBQTtBQUFBLGFBakJGLEVBMkJHZ0IsUUFBUSxpQkFDUCxxRUFBQywyQkFBRDtBQUFBLDZCQUNFLHFFQUFDLHlCQUFEO0FBQ0UsZUFBTyxFQUFFLG1CQUFNO0FBQ2JMLHdCQUFjLENBQUNFLEVBQUQsQ0FBZDtBQUNBTixxQkFBVztBQUNaLFNBSkg7QUFBQSxrQkFNR1M7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBDRCxDQXZERDs7T0FBTVAsSTs7QUF5RE4sSUFBTVcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsUUFLZjtBQUFBLE1BSkpDLFdBSUksU0FKSkEsV0FJSTtBQUFBLE1BSEpWLGNBR0ksU0FISkEsY0FHSTtBQUFBLE1BRkpXLGlCQUVJLFNBRkpBLGlCQUVJO0FBQUEsTUFESlYsUUFDSSxTQURKQSxRQUNJO0FBQ0osc0JBQ0UscUVBQUMsU0FBRDtBQUFBLGNBQ0dTLFdBQVcsSUFDVkEsV0FBVyxDQUFDdkIsR0FBWixDQUFnQixVQUFDWSxTQUFELEVBQVlWLENBQVosRUFBa0I7QUFDaEMsMEJBQ0UscUVBQUMsSUFBRDtBQUVFLGlCQUFTLEVBQUVVLFNBRmI7QUFHRSxzQkFBYyxFQUFFQyxjQUhsQjtBQUlFLHlCQUFpQixFQUFFVyxpQkFKckI7QUFLRSxnQkFBUSxFQUFFVjtBQUxaLFNBQ09aLENBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBU0QsS0FWRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQXRCRDs7T0FBTW9CLFk7QUF3Qk4iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTcxOTA0ZmFjYmE5ZTE1MWJjY2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQ2hlY2sgfSBmcm9tIFwiY29tcG9uZW50cy9JY29uc1wiO1xyXG5pbXBvcnQgUm91bmRlZEJsdWVCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvQnV0dG9uXCI7XHJcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xyXG5pbXBvcnQgeyBzY3JvbGwsIGFuaW1hdGVTY3JvbGwgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcblxyXG4vKiBVdGlscyAqL1xyXG5jb25zdCBmZWF0dXJlUGFyc2VyID0gKGZlYXR1cmUpID0+IHtcclxuICAvLyBUT0RPOiBkZXN0cnVjdHVyZSBmZWF0dXJlIGJ5IGRlbGltaXRlciAoY29sb24pXHJcbiAgcmV0dXJuIGZlYXR1cmUuc3BsaXQoXCI6XCIpO1xyXG59O1xyXG5cclxuY29uc3Qgc3BlY2lhbEhlYWRpbmdQYXJzZXIgPSAoaGVhZGluZykgPT4gaGVhZGluZy5yZXBsYWNlKC8gL2csIFwiXFxuXCIpO1xyXG5cclxuY29uc3QgR3JlZW5DaGVja1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAyMnB4O1xyXG4gIGhlaWdodDogMjJweDtcclxuICBtYXgtd2lkdGg6IDIycHg7XHJcbiAgbWF4LWhlaWdodDogMjJweDtcclxuYDtcclxuY29uc3QgR3JlZW5DaGVjayA9IHN0eWxlZChDaGVjaylgXHJcbiAgY29sb3I6ICMwNGNkYjg7XHJcbmA7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICR7dHdgZmxleCBmbGV4LWNvbCBweC02IHhsOnB4LTAgeGw6ZmxleC1yb3cgc3BhY2UteS04IHhsOnNwYWNlLXktMCB4bDpzcGFjZS14LThgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICYge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICR7dHdgZmxleCBmbGV4LXJvdyB4bDpmbGV4LWNvbCBmbGV4LWdyb3cgc2hhZG93LWxnIHhsOnNwYWNlLXktNSBweC04IHhsOnB4LTEwIHB5LTEwIHJvdW5kZWQteGwgZm9jdXM6b3V0bGluZS1ub25lYH1cclxuICAmIHtcclxuICAgIGZsZXgtYmFzaXM6IDA7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIG1pbi13aWR0aDogMjI1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW5xdWlyZUJ1dHRvbiA9IHN0eWxlZChSb3VuZGVkQmx1ZUJ1dHRvbilgXHJcbiAgJHt0d2Byb3VuZGVkLWZ1bGwgdGV4dC1iYXNlIGZvY3VzOm91dGxpbmUtbm9uZSB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgYWN0aXZlOnRyYW5zbGF0ZS14LTEgYWN0aXZlOnRyYW5zbGF0ZS15LTFgfVxyXG5gO1xyXG5cclxuY29uc3QgRGVza3RvcElucXVpcmVCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAke3R3YGhpZGRlbiB4bDpmbGV4IGZsZXgtY29sIGZsZXgtZ3JvdyBpdGVtcy1lbmRgfVxyXG5gO1xyXG5cclxuY29uc3QgRGVza3RvcFByaWNlSW5xdWlyZUJ1dHRvbiA9IHN0eWxlZChJbnF1aXJlQnV0dG9uKWBcclxuICAke3R3YGZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIHB5LTNgfVxyXG5gO1xyXG5cclxuY29uc3QgTW9iaWxlUHJpY2VJbnF1aXJlQnV0dG9uID0gc3R5bGVkKElucXVpcmVCdXR0b24pYFxyXG4gICR7dHdgeGw6aGlkZGVuIGZsZXgtZ3Jvdy0wIHctbWluIHB4LTQgcHktMmB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkSGVhZGluZ0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2BmbGV4IGZsZXgtY29sIGZsZXgtZ3JvdyB4bDpmbGV4LWdyb3ctMCB4bDpibG9jayBzcGFjZS15LTNgfVxyXG5gO1xyXG5jb25zdCBDYXJkSGVhZGluZyA9IHN0eWxlZC5oM2BcclxuICAke3R3YGxlYWRpbmctdGlnaHQgdy1mdWxsIHRleHQtM3hsIGZvbnQtYmxhY2sgd2hpdGVzcGFjZS1wcmUtbGluZWB9XHJcbmA7XHJcblxyXG5jb25zdCBMaWNlbnNlRmVhdHVyZUhpZ2hsaWdodExpc3QgPSAoeyBmZWF0dXJlTGlzdCwgdHdDbGFzc2VzIH0pID0+IChcclxuICA8dWwgY2xhc3NOYW1lPXtgc3BhY2UteS0wLjUgJHt0d0NsYXNzZXN9IGZmLW9wZW4tc2FucyB0ZXh0LWJhc2VgfT5cclxuICAgIHtmZWF0dXJlTGlzdC5tYXAoKGZlYXR1cmVJdGVtLCBpKSA9PiAoXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3aGl0ZXNwYWNlLXByZVwiIGtleT17aX0+XHJcbiAgICAgICAge2ZlYXR1cmVJdGVtfVxyXG4gICAgICA8L2xpPlxyXG4gICAgKSl9XHJcbiAgPC91bD5cclxuKTtcclxuY29uc3QgRGVza3RvcExpY2Vuc2VGZWF0dXJlSGlnaGxpZ2h0TGlzdCA9IChwcm9wcykgPT4gKFxyXG4gIDxMaWNlbnNlRmVhdHVyZUhpZ2hsaWdodExpc3Qgey4uLnByb3BzfSAvPlxyXG4pO1xyXG5cclxuY29uc3QgQWxsRmVhdHVyZUxpc3QgPSBzdHlsZWQudWxgXHJcbiAgJHt0d2Bmb250LWJvbGQgbWwtMiB4bDptbC0wYH1cclxuYDtcclxuY29uc3QgRmVhdHVyZUl0ZW0gPSBzdHlsZWQubGlgXHJcbiAgJHt0d2BtYi0yIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMmB9XHJcbmA7XHJcbmNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4gYW5pbWF0ZVNjcm9sbC5zY3JvbGxUb1RvcCgpO1xyXG5jb25zdCBDYXJkID0gKHsgcHJpY2VEYXRhLCBhZGRJbnF1aXJ5SXRlbSwgc2hvd0Zvcm0gfSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGlkLFxyXG4gICAgcHJpY2UsXHJcbiAgICBwcmljZV91bml0LFxyXG4gICAgaGVhZGluZyxcclxuICAgIGZlYXR1cmUsXHJcbiAgICBjdGFfdGV4dCxcclxuICAgIGN0YV9saW5rLFxyXG4gICAgZGVzY19saXN0LFxyXG4gIH0gPSBwcmljZURhdGE7XHJcbiAgY29uc3QgZmVhdHVyZUxpc3QgPSBmZWF0dXJlID8gZmVhdHVyZVBhcnNlcihmZWF0dXJlKSA6IG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZFdyYXBwZXI+XHJcbiAgICAgIHsvKiA8aDYgY2xhc3NOYW1lPVwidHlwZVwiPkF3ZXNvbWU8L2g2PiAqL31cclxuICAgICAgPENhcmRIZWFkaW5nQ29udGFpbmVyPlxyXG4gICAgICAgIDxDYXJkSGVhZGluZz57aGVhZGluZyAmJiBzcGVjaWFsSGVhZGluZ1BhcnNlcihoZWFkaW5nKX08L0NhcmRIZWFkaW5nPlxyXG4gICAgICAgIDxNb2JpbGVQcmljZUlucXVpcmVCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgYWRkSW5xdWlyeUl0ZW0oaWQpO1xyXG4gICAgICAgICAgICBzaG93Rm9ybSgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Y3RhX3RleHR9XHJcbiAgICAgICAgPC9Nb2JpbGVQcmljZUlucXVpcmVCdXR0b24+XHJcbiAgICAgIDwvQ2FyZEhlYWRpbmdDb250YWluZXI+XHJcbiAgICAgIDxEZXNrdG9wTGljZW5zZUZlYXR1cmVIaWdobGlnaHRMaXN0XHJcbiAgICAgICAgZmVhdHVyZUxpc3Q9e2ZlYXR1cmVMaXN0fVxyXG4gICAgICAgIHR3Q2xhc3Nlcz1cImhpZGRlbiB4bDpibG9ja1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxBbGxGZWF0dXJlTGlzdD5cclxuICAgICAgICB7ZGVzY19saXN0Lm1hcCgoZGVzY19pdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICA8RmVhdHVyZUl0ZW0ga2V5PXtpfT5cclxuICAgICAgICAgICAgPEdyZWVuQ2hlY2tXcmFwcGVyPlxyXG4gICAgICAgICAgICAgIDxHcmVlbkNoZWNrIHNpemU9ezIwfSAvPlxyXG4gICAgICAgICAgICA8L0dyZWVuQ2hlY2tXcmFwcGVyPlxyXG4gICAgICAgICAgICA8c3Bhbj57ZGVzY19pdGVtfTwvc3Bhbj5cclxuICAgICAgICAgIDwvRmVhdHVyZUl0ZW0+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQWxsRmVhdHVyZUxpc3Q+XHJcbiAgICAgIHtjdGFfdGV4dCAmJiAoXHJcbiAgICAgICAgPERlc2t0b3BJbnF1aXJlQnV0dG9uV3JhcHBlcj5cclxuICAgICAgICAgIDxEZXNrdG9wUHJpY2VJbnF1aXJlQnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBhZGRJbnF1aXJ5SXRlbShpZCk7XHJcbiAgICAgICAgICAgICAgc2Nyb2xsVG9Ub3AoKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2N0YV90ZXh0fVxyXG4gICAgICAgICAgPC9EZXNrdG9wUHJpY2VJbnF1aXJlQnV0dG9uPlxyXG4gICAgICAgIDwvRGVza3RvcElucXVpcmVCdXR0b25XcmFwcGVyPlxyXG4gICAgICApfVxyXG4gICAgPC9DYXJkV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJpY2luZ0NhcmRzID0gKHtcclxuICBwcmljZU1vZGVscyxcclxuICBhZGRJbnF1aXJ5SXRlbSxcclxuICByZW1vdmVJbnF1aXJ5SXRlbSxcclxuICBzaG93Rm9ybSxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICB7cHJpY2VNb2RlbHMgJiZcclxuICAgICAgICBwcmljZU1vZGVscy5tYXAoKHByaWNlRGF0YSwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgcHJpY2VEYXRhPXtwcmljZURhdGF9XHJcbiAgICAgICAgICAgICAgYWRkSW5xdWlyeUl0ZW09e2FkZElucXVpcnlJdGVtfVxyXG4gICAgICAgICAgICAgIHJlbW92ZUlucXVpcnlJdGVtPXtyZW1vdmVJbnF1aXJ5SXRlbX1cclxuICAgICAgICAgICAgICBzaG93Rm9ybT17c2hvd0Zvcm19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFByaWNpbmdDYXJkcyB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9