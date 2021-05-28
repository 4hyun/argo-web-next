self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/WaveAnimBg.js":
/*!**********************************!*\
  !*** ./components/WaveAnimBg.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var C_Users_4hyun_Documents_1_Argo_web_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_4hyun_Documents_1_Argo_web_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Form */ "./components/Form.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var components_ScrollTopButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/ScrollTopButton */ "./components/ScrollTopButton/index.js");
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Icons */ "./components/Icons/index.js");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../translations */ "./translations/index.js");
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Button */ "./components/Button.js");
/* harmony import */ var components_WaveAnimBg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/WaveAnimBg */ "./components/WaveAnimBg.js");
/* harmony import */ var components_WaveAnimBg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(components_WaveAnimBg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lib_delay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lib/delay */ "./lib/delay.js");
/* harmony import */ var contexts_Translations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! contexts/Translations */ "./contexts/Translations/index.js");
/* harmony import */ var components_PricingCards__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/PricingCards */ "./components/PricingCards.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\4hyun\\Documents\\1-Argo\\web\\argo-web-next\\pages\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_4hyun_Documents_1_Argo_web_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var ArgoComingSoon = function ArgoComingSoon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M17.782.209L.822 85.851h14.666l10.084-56.174 10.083 56.175h14.667L33.342.209h-15.56zM57.655.209v85.642h14.667V14.943h11s4.584.46 4.584 4.604c0 4.145-10.542 17.497-10.542 17.497l10.084 48.807h14.666L91.573 38.425s10.541-9.208 10.541-19.338S94.734.582 85.155.21h-27.5zM131.042 85.904c-7.257 0-12.791-1.785-16.601-5.356-3.81-3.65-5.715-8.847-5.715-15.592v-43.8c0-6.744 1.905-11.901 5.715-15.472 3.81-3.65 9.344-5.475 16.601-5.475s12.791 1.825 16.601 5.475c3.81 3.57 5.715 8.728 5.715 15.473v7.141h-14.151V23.15c0-5.475-2.586-8.212-7.757-8.212-5.171 0-7.756 2.737-7.756 8.212v39.932c0 5.396 2.585 8.093 7.756 8.093s7.757-2.697 7.757-8.093v-13.48h-7.485V37.702h21.636v27.255c0 6.745-1.905 11.942-5.715 15.592-3.81 3.57-9.344 5.356-16.601 5.356zM183.5 85.904c-7.114 0-12.559-1.825-16.335-5.475-3.777-3.65-5.665-8.807-5.665-15.472v-43.8c0-6.665 1.888-11.823 5.665-15.473 3.776-3.65 9.221-5.475 16.335-5.475 7.114 0 12.559 1.825 16.335 5.475 3.777 3.65 5.665 8.807 5.665 15.473v43.8c0 6.665-1.888 11.822-5.665 15.472-3.776 3.65-9.221 5.475-16.335 5.475zm0-14.729c5.006 0 7.509-2.737 7.509-8.212V23.15c0-5.475-2.503-8.212-7.509-8.212s-7.509 2.737-7.509 8.212v39.813c0 5.475 2.503 8.212 7.509 8.212z",
      fill: "#0A29CA"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

_c13 = ArgoComingSoon;
ArgoComingSoon.defaultProps = {
  width: "206",
  height: "86",
  viewBox: "0 0 206 86",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};








var CloseButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_16__.default)(components_Icons__WEBPACK_IMPORTED_MODULE_9__.Close).withConfig({
  displayName: "pages__CloseButton",
  componentId: "sc-16jmhiq-0"
})(["", ""], {
  "--tw-translate-x": "0",
  "--tw-translate-y": "0",
  "--tw-rotate": "0",
  "--tw-skew-x": "0",
  "--tw-skew-y": "0",
  "--tw-scale-x": "1",
  "--tw-scale-y": "1",
  "transform": "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
  "width": "2rem",
  "height": "2rem",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
  "float": "right",
  "cursor": "pointer",
  "borderRadius": "0.375rem",
  "transitionProperty": "all",
  "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
  "transitionDuration": "150ms",
  ":active": {
    "--tw-translate-x": "0.25rem",
    "--tw-translate-y": "0.25rem"
  }
});
_c = CloseButton;
var ComingSoonMessageContainer = styled_components__WEBPACK_IMPORTED_MODULE_16__.default.div.withConfig({
  displayName: "pages__ComingSoonMessageContainer",
  componentId: "sc-16jmhiq-1"
})(["", " width:90%;padding:0 1rem;margin:0 auto;@media (min-width:400px){width:85%;}@media (min-width:1200px){padding:unset;height:338px;}"], {
  "userSelect": "none",
  "display": "flex",
  "flexDirection": "column",
  "justifyContent": "center",
  "@media (min-width: 1280px)": {
    "marginLeft": "2.5rem",
    "justifyContent": "flex-start",
    "marginRight": "1rem"
  }
});
_c2 = ComingSoonMessageContainer;
var Slogan = styled_components__WEBPACK_IMPORTED_MODULE_16__.default.p.withConfig({
  displayName: "pages__Slogan",
  componentId: "sc-16jmhiq-2"
})(["font-family:\"Open Sans\",sans-serif;font-style:normal;font-size:1rem;display:flex;align-items:center;color:#111;", " @media (min-width:1200px){line-height:57px;margin-top:2rem;margin-bottom:0;font-size:24px;}"], {
  "lineHeight": "1",
  "fontWeight": "400",
  "marginTop": "1rem"
});
_c3 = Slogan;
var CtaMessage = (0,styled_components__WEBPACK_IMPORTED_MODULE_16__.default)(Slogan).withConfig({
  displayName: "pages__CtaMessage",
  componentId: "sc-16jmhiq-3"
})(["@media (min-width:1200px){margin-top:0;}"]);
_c4 = CtaMessage;
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_16__.default.h2.withConfig({
  displayName: "pages__Heading",
  componentId: "sc-16jmhiq-4"
})(["", " font-family:Poppins;font-style:normal;font-weight:bold;font-size:1.75rem;line-height:1;display:flex;align-items:center;letter-spacing:-0.01em;text-shadow:0px 0px 20px white;color:#111;@media (min-width:1200px){font-size:48px;margin:0;line-height:56px;}"], {
  "marginTop": "1rem"
});
_c5 = Heading;
var StyledButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_16__.default)(components_Button__WEBPACK_IMPORTED_MODULE_11__.default).withConfig({
  displayName: "pages__StyledButton",
  componentId: "sc-16jmhiq-5"
})(["", " @media (min-width:401px){font-size:1rem;}"], {
  "--tw-translate-x": "0",
  "--tw-translate-y": "0",
  "--tw-rotate": "0",
  "--tw-skew-x": "0",
  "--tw-skew-y": "0",
  "--tw-scale-x": "1",
  "--tw-scale-y": "1",
  "transform": "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
  "display": "flex",
  "borderRadius": "9999px",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "paddingLeft": "1rem",
  "paddingRight": "1rem",
  ":hover": {
    "borderStyle": "solid"
  },
  "borderWidth": "2px",
  "borderColor": "transparent",
  ":focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  },
  "whiteSpace": "nowrap",
  "transitionProperty": "all",
  "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
  "transitionDuration": "150ms",
  ":active": {
    "--tw-translate-x": "0.25rem",
    "--tw-translate-y": "0.25rem"
  },
  "@media (min-width: 768px)": {
    "paddingLeft": "1.5rem",
    "paddingRight": "1.5rem",
    "marginLeft": "0px"
  }
});
var GetInTouchButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_16__.default)(StyledButton).withConfig({
  displayName: "pages__GetInTouchButton",
  componentId: "sc-16jmhiq-6"
})(["", ""], {
  "@media (min-width: 1024px)": {
    "display": "none"
  }
});
_c6 = GetInTouchButton;
var LearnMoreButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_16__.default)(StyledButton).withConfig({
  displayName: "pages__LearnMoreButton",
  componentId: "sc-16jmhiq-7"
})([""]);
_c7 = LearnMoreButton;
var MobileFormCloseBar = styled_components__WEBPACK_IMPORTED_MODULE_16__.default.div.withConfig({
  displayName: "pages__MobileFormCloseBar",
  componentId: "sc-16jmhiq-8"
})(["", " height:62px;"], {
  "display": "flex",
  "justifyContent": "space-between",
  "backgroundColor": "var(--argo-blue)",
  "paddingTop": "0.75rem",
  "paddingBottom": "0.75rem",
  "paddingLeft": "1rem",
  "paddingRight": "1rem",
  "@media (min-width: 1024px)": {
    "display": "none"
  }
});
_c8 = MobileFormCloseBar;
var PricingSection = styled_components__WEBPACK_IMPORTED_MODULE_16__.default.div.withConfig({
  displayName: "pages__PricingSection",
  componentId: "sc-16jmhiq-9"
})(["", " min-height:500px;margin-bottom:200px;"], {
  "display": "flex",
  "marginTop": "0px",
  "marginBottom": "0px",
  "marginLeft": "auto",
  "marginRight": "auto",
  "justifyContent": "center",
  "position": "relative",
  "height": "50%",
  "@media (min-width: 768px)": {
    "paddingLeft": "3rem",
    "paddingRight": "3rem",
    "maxWidth": "100%"
  }
});
_c9 = PricingSection;
var FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_16__.default.div.withConfig({
  displayName: "pages__FormWrapper",
  componentId: "sc-16jmhiq-10"
})(_c10 = function _c10(_ref) {
  var formOpen = _ref.formOpen;
  return [{
    "@media (min-width: 1024px)": {
      "position": "relative",
      "display": "flex",
      "backgroundColor": "transparent",
      "width": "41.666667%"
    }
  }, {
    "position": "fixed",
    "top": "0px",
    "right": "0px",
    "bottom": "0px",
    "left": "0px",
    "width": "100vw",
    "height": "100%",
    "display": "flex",
    "justifyContent": "center",
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "flexDirection": "column",
    "backgroundColor": "var(--argo-blue)"
  }, formOpen && {
    "display": "flex"
  }, !formOpen && {
    "display": "none"
  }];
});
_c11 = FormWrapper;
var __N_SSG = true;
function Home(props) {
  _s();

  var priceModels = props.priceModels;
  var priceModelsMap = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    return priceModels.reduce(function (acc, cur) {
      return (acc[cur.id] = cur.heading) && acc;
    }, {});
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      inquiryItems = _useState[0],
      setInquiryItems = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      formOpen = _useState2[0],
      openForm = _useState2[1]; // const [bgCanvasLoaded, setBgCanvasLoaded] = useState();


  var _useTranslationsConte = (0,contexts_Translations__WEBPACK_IMPORTED_MODULE_14__.useTranslationsContext)(),
      locale = _useTranslationsConte.lang.locale;

  var closeForm = function closeForm() {
    openForm(false);
  };

  var showForm = function showForm() {
    openForm(true);
  };

  var removeInquiryItem = function removeInquiryItem(inquiryItemId) {
    if (inquiryItemId === "all") {
      setInquiryItems([]);
      return;
    }

    inquiryItems.includes(inquiryItemId) && setInquiryItems(function (prevState) {
      prevState.splice(inquiryItemId.indexOf(inquiryItemId, 1));
      console.log("prevState after delete : ", prevState);
      return (0,C_Users_4hyun_Documents_1_Argo_web_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(prevState);
    });
  };

  var addInquiryItem = function addInquiryItem(inquiryItemId) {
    console.log(!!inquiryItems.includes(inquiryItemId));
    if (inquiryItems.includes(inquiryItemId)) return;
    setInquiryItems(function (prevState) {
      return [].concat((0,C_Users_4hyun_Documents_1_Argo_web_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(prevState), [inquiryItemId]);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_17___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("main", {
        className: "absolute flex items-center w-screen h-full z-10",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "flex my-0 mx-auto md:px-8 md:max-w-full justify-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ComingSoonMessageContainer, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Slogan, {
              children: _translations__WEBPACK_IMPORTED_MODULE_10__.default[locale]["comingsoon.components.Slogan.tyk"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Heading, {
              children: _translations__WEBPACK_IMPORTED_MODULE_10__.default[locale]["comingsoon.components.Heading.main"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CtaMessage, {
              className: "leading-none font-normal mt-4",
              children: _translations__WEBPACK_IMPORTED_MODULE_10__.default[locale]["comingsoon.components.Slogan.ctamessage"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "coming-soon-action-button-container flex space-x-4 lg:space-x-0 mt-5",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GetInTouchButton, {
                onClick: (0,lib_delay__WEBPACK_IMPORTED_MODULE_13__.delay)(showForm, 800),
                "aria-label": "Inquire about Tyk API Gateway",
                children: _translations__WEBPACK_IMPORTED_MODULE_10__.default[locale]["comingsoon.components.EmailInputContainer.button.getintouch"]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                href: "https://tyk.io/docs/getting-started/tyk-components/gateway/",
                target: "_blank",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LearnMoreButton, {
                  "aria-label": "Learn More about Tyk API Gateway",
                  children: _translations__WEBPACK_IMPORTED_MODULE_10__.default[locale]["comingsoon.components.EmailInputContainer.button.learnmoreaboutyk"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FormWrapper, {
            formOpen: formOpen,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MobileFormCloseBar, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "text-white text-lg ff-open-sans font-bold ",
                children: "Let's get in touch"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CloseButton, {
                onClick: (0,lib_delay__WEBPACK_IMPORTED_MODULE_13__.delay)(closeForm, 800)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_Form__WEBPACK_IMPORTED_MODULE_7__.default, {
              inquiryItems: inquiryItems,
              removeInquiryItem: removeInquiryItem,
              priceModelsMap: priceModelsMap,
              closeForm: closeForm
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((components_WaveAnimBg__WEBPACK_IMPORTED_MODULE_12___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PricingSection, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_PricingCards__WEBPACK_IMPORTED_MODULE_15__.PricingCards, {
        priceModels: priceModels,
        addInquiryItem: addInquiryItem,
        removeInquiryItem: removeInquiryItem,
        showForm: showForm
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_ScrollTopButton__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "yCjlZ15z93m0agiKS4wsRm5lz80=", false, function () {
  return [contexts_Translations__WEBPACK_IMPORTED_MODULE_14__.useTranslationsContext];
});

_c12 = Home;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;

$RefreshReg$(_c, "CloseButton");
$RefreshReg$(_c2, "ComingSoonMessageContainer");
$RefreshReg$(_c3, "Slogan");
$RefreshReg$(_c4, "CtaMessage");
$RefreshReg$(_c5, "Heading");
$RefreshReg$(_c6, "GetInTouchButton");
$RefreshReg$(_c7, "LearnMoreButton");
$RefreshReg$(_c8, "MobileFormCloseBar");
$RefreshReg$(_c9, "PricingSection");
$RefreshReg$(_c10, "FormWrapper$styled.div");
$RefreshReg$(_c11, "FormWrapper");
$RefreshReg$(_c12, "Home");
$RefreshReg$(_c13, "ArgoComingSoon");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXJnb0NvbWluZ1Nvb24iLCJDbG9zZUJ1dHRvbiIsInN0eWxlZCIsIkNsb3NlIiwiQ29taW5nU29vbk1lc3NhZ2VDb250YWluZXIiLCJTbG9nYW4iLCJDdGFNZXNzYWdlIiwiSGVhZGluZyIsIlN0eWxlZEJ1dHRvbiIsIkJ1dHRvbiIsIkdldEluVG91Y2hCdXR0b24iLCJMZWFybk1vcmVCdXR0b24iLCJNb2JpbGVGb3JtQ2xvc2VCYXIiLCJQcmljaW5nU2VjdGlvbiIsIkZvcm1XcmFwcGVyIiwiZm9ybU9wZW4iLCJIb21lIiwicHJvcHMiLCJwcmljZU1vZGVscyIsInByaWNlTW9kZWxzTWFwIiwidXNlTWVtbyIsInJlZHVjZSIsImFjYyIsImN1ciIsImlkIiwiaGVhZGluZyIsInVzZVN0YXRlIiwiaW5xdWlyeUl0ZW1zIiwic2V0SW5xdWlyeUl0ZW1zIiwib3BlbkZvcm0iLCJ1c2VUcmFuc2xhdGlvbnNDb250ZXh0IiwibG9jYWxlIiwibGFuZyIsImNsb3NlRm9ybSIsInNob3dGb3JtIiwicmVtb3ZlSW5xdWlyeUl0ZW0iLCJpbnF1aXJ5SXRlbUlkIiwiaW5jbHVkZXMiLCJwcmV2U3RhdGUiLCJzcGxpY2UiLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsImFkZElucXVpcnlJdGVtIiwic3R5bGVzIiwidHJhZHMiLCJkZWxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBQ09BLGMsWUFBQUEsYzs7Ozs7Ozs7O09BQUFBLGM7QUFBQUEsYzs7Ozs7OztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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OERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVDRjtBQUFBLGtCQURGO0FBZ0REOztHQXJGdUJsQixJO1VBUWxCYywwRTs7O09BUmtCZCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZlMjZkY2Q5ZjJkY2ZkOGRiYTc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IEdldEluVG91Y2hGb3JtIGZyb20gXCJjb21wb25lbnRzL0Zvcm1cIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgQXJnb0NvbWluZ1Nvb24gZnJvbSBcIi4uL3B1YmxpYy9sb2dvcy9sZXR0ZXJtYXJrL2Rhcmsuc3ZnXCJcclxuaW1wb3J0IFNjcm9sbFRvcEJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9TY3JvbGxUb3BCdXR0b25cIlxyXG5pbXBvcnQgeyBBdCwgQ2xvc2UgfSBmcm9tIFwiY29tcG9uZW50cy9JY29uc1wiXHJcbmltcG9ydCB0cmFkcyBmcm9tIFwiLi4vdHJhbnNsYXRpb25zXCJcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9CdXR0b25cIlxyXG5pbXBvcnQgV2F2ZUFuaW1CZyBmcm9tIFwiY29tcG9uZW50cy9XYXZlQW5pbUJnXCJcclxuaW1wb3J0IHsgZGVsYXksIGRlbGF5ZWQgfSBmcm9tIFwibGliL2RlbGF5XCJcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb25zQ29udGV4dCB9IGZyb20gXCJjb250ZXh0cy9UcmFuc2xhdGlvbnNcIlxyXG5pbXBvcnQgeyBQcmljaW5nQ2FyZHMgfSBmcm9tIFwiY29tcG9uZW50cy9QcmljaW5nQ2FyZHNcIlxyXG5pbXBvcnQgeyBmZXRjaFN0cmFwaSB9IGZyb20gXCJsaWIvYXBpXCJcclxuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCJcclxuXHJcbmNvbnN0IENsb3NlQnV0dG9uID0gc3R5bGVkKENsb3NlKWBcclxuICAke3R3YHctOCBoLTggYmctd2hpdGUgZmxvYXQtcmlnaHQgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1tZCB0cmFuc2l0aW9uLWFsbCB0cmFuc2Zvcm0gYWN0aXZlOnRyYW5zbGF0ZS14LTEgYWN0aXZlOnRyYW5zbGF0ZS15LTFgfVxyXG5gXHJcblxyXG5jb25zdCBDb21pbmdTb29uTWVzc2FnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2B4bDptbC0xMCBzZWxlY3Qtbm9uZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHhsOmp1c3RpZnktc3RhcnQgeGw6bXItNGB9XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBwYWRkaW5nOiB1bnNldDtcclxuICAgIGhlaWdodDogMzM4cHg7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBTbG9nYW4gPSBzdHlsZWQucGBcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogIzExMTtcclxuICAke3R3YGxlYWRpbmctbm9uZSBmb250LW5vcm1hbCBtdC00YH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBsaW5lLWhlaWdodDogNTdweDtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgQ3RhTWVzc2FnZSA9IHN0eWxlZChTbG9nYW4pYFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBIZWFkaW5nID0gc3R5bGVkLmgyYFxyXG4gICR7dHdgbXQtNGB9XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICAvKiBvciAxMTAlICovXHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAyMHB4IHdoaXRlO1xyXG5cclxuICBjb2xvcjogIzExMTtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsaW5lLWhlaWdodDogNTZweDtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG4gICR7dHdgZmxleCByb3VuZGVkLWZ1bGwgcHktMiBweC00IG1kOnB4LTYgbWQ6bWwtMCBob3Zlcjpib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLXRyYW5zcGFyZW50IGZvY3VzOm91dGxpbmUtbm9uZSB3aGl0ZXNwYWNlLW5vd3JhcCB0cmFuc2l0aW9uLWFsbCB0cmFuc2Zvcm0gYWN0aXZlOnRyYW5zbGF0ZS14LTEgYWN0aXZlOnRyYW5zbGF0ZS15LTFgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MDFweCkge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgR2V0SW5Ub3VjaEJ1dHRvbiA9IHN0eWxlZChTdHlsZWRCdXR0b24pYFxyXG4gICR7dHdgbGc6aGlkZGVuYH1cclxuYFxyXG5cclxuY29uc3QgTGVhcm5Nb3JlQnV0dG9uID0gc3R5bGVkKFN0eWxlZEJ1dHRvbilgYFxyXG5cclxuY29uc3QgTW9iaWxlRm9ybUNsb3NlQmFyID0gc3R5bGVkLmRpdmBcclxuICAke3R3YGZsZXgganVzdGlmeS1iZXR3ZWVuIGJnLWFyZ28tYmx1ZS00MDAgbGc6aGlkZGVuIHB5LTMgcHgtNGB9XHJcbiAgaGVpZ2h0OiA2MnB4O1xyXG5gXHJcblxyXG5jb25zdCBQcmljaW5nU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2BmbGV4IG15LTAgbXgtYXV0byBtZDpweC0xMiBtZDptYXgtdy1mdWxsIGp1c3RpZnktY2VudGVyIHJlbGF0aXZlIGgtMy82YH1cclxuICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMDBweDtcclxuYFxyXG5cclxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQuZGl2KCh7IGZvcm1PcGVuIH0pID0+IFtcclxuICB0d2BsZzpyZWxhdGl2ZSBsZzpmbGV4IGxnOmJnLXRyYW5zcGFyZW50IGxnOnctNS8xMiBgLFxyXG4gIHR3YGZpeGVkIGluc2V0LTAgdy1zY3JlZW4gaC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgcHgtNCBmbGV4LWNvbCBiZy1hcmdvLWJsdWUtNDAwYCxcclxuICBmb3JtT3BlbiAmJiB0d2BmbGV4YCxcclxuICAhZm9ybU9wZW4gJiYgdHdgaGlkZGVuYCxcclxuXSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICBjb25zdCB7IHByaWNlTW9kZWxzIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHByaWNlTW9kZWxzTWFwID0gdXNlTWVtbygoKSA9PiBwcmljZU1vZGVscy5yZWR1Y2UoKGFjYywgY3VyKSA9PiAoYWNjW2N1ci5pZF0gPSBjdXIuaGVhZGluZykgJiYgYWNjLCB7fSkpXHJcbiAgY29uc3QgW2lucXVpcnlJdGVtcywgc2V0SW5xdWlyeUl0ZW1zXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtmb3JtT3Blbiwgb3BlbkZvcm1dID0gdXNlU3RhdGUoKVxyXG4gIC8vIGNvbnN0IFtiZ0NhbnZhc0xvYWRlZCwgc2V0QmdDYW52YXNMb2FkZWRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCB7XHJcbiAgICBsYW5nOiB7IGxvY2FsZSB9LFxyXG4gIH0gPSB1c2VUcmFuc2xhdGlvbnNDb250ZXh0KClcclxuXHJcbiAgY29uc3QgY2xvc2VGb3JtID0gKCkgPT4ge1xyXG4gICAgb3BlbkZvcm0oZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBzaG93Rm9ybSA9ICgpID0+IHtcclxuICAgIG9wZW5Gb3JtKHRydWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVJbnF1aXJ5SXRlbSA9IChpbnF1aXJ5SXRlbUlkKSA9PiB7XHJcbiAgICBpZiAoaW5xdWlyeUl0ZW1JZCA9PT0gXCJhbGxcIikge1xyXG4gICAgICBzZXRJbnF1aXJ5SXRlbXMoW10pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaW5xdWlyeUl0ZW1zLmluY2x1ZGVzKGlucXVpcnlJdGVtSWQpICYmXHJcbiAgICAgIHNldElucXVpcnlJdGVtcygocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgcHJldlN0YXRlLnNwbGljZShpbnF1aXJ5SXRlbUlkLmluZGV4T2YoaW5xdWlyeUl0ZW1JZCwgMSkpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwcmV2U3RhdGUgYWZ0ZXIgZGVsZXRlIDogXCIsIHByZXZTdGF0ZSlcclxuICAgICAgICByZXR1cm4gWy4uLnByZXZTdGF0ZV1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZElucXVpcnlJdGVtID0gKGlucXVpcnlJdGVtSWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCEhaW5xdWlyeUl0ZW1zLmluY2x1ZGVzKGlucXVpcnlJdGVtSWQpKVxyXG4gICAgaWYgKGlucXVpcnlJdGVtcy5pbmNsdWRlcyhpbnF1aXJ5SXRlbUlkKSkgcmV0dXJuXHJcbiAgICBzZXRJbnF1aXJ5SXRlbXMoKHByZXZTdGF0ZSkgPT4gWy4uLnByZXZTdGF0ZSwgaW5xdWlyeUl0ZW1JZF0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17YGFic29sdXRlIGZsZXggaXRlbXMtY2VudGVyIHctc2NyZWVuIGgtZnVsbCB6LTEwYH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggbXktMCBteC1hdXRvIG1kOnB4LTggbWQ6bWF4LXctZnVsbCBqdXN0aWZ5LWNlbnRlcmB9PlxyXG4gICAgICAgICAgICA8Q29taW5nU29vbk1lc3NhZ2VDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPFNsb2dhbj57dHJhZHNbbG9jYWxlXVtcImNvbWluZ3Nvb24uY29tcG9uZW50cy5TbG9nYW4udHlrXCJdfTwvU2xvZ2FuPlxyXG4gICAgICAgICAgICAgIDxIZWFkaW5nPnt0cmFkc1tsb2NhbGVdW1wiY29taW5nc29vbi5jb21wb25lbnRzLkhlYWRpbmcubWFpblwiXX08L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgPEN0YU1lc3NhZ2UgY2xhc3NOYW1lPVwibGVhZGluZy1ub25lIGZvbnQtbm9ybWFsIG10LTRcIj57dHJhZHNbbG9jYWxlXVtcImNvbWluZ3Nvb24uY29tcG9uZW50cy5TbG9nYW4uY3RhbWVzc2FnZVwiXX08L0N0YU1lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21pbmctc29vbi1hY3Rpb24tYnV0dG9uLWNvbnRhaW5lciBmbGV4IHNwYWNlLXgtNCBsZzpzcGFjZS14LTAgbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgPEdldEluVG91Y2hCdXR0b24gb25DbGljaz17ZGVsYXkoc2hvd0Zvcm0sIDgwMCl9IGFyaWEtbGFiZWw9XCJJbnF1aXJlIGFib3V0IFR5ayBBUEkgR2F0ZXdheVwiPlxyXG4gICAgICAgICAgICAgICAgICB7dHJhZHNbbG9jYWxlXVtcImNvbWluZ3Nvb24uY29tcG9uZW50cy5FbWFpbElucHV0Q29udGFpbmVyLmJ1dHRvbi5nZXRpbnRvdWNoXCJdfVxyXG4gICAgICAgICAgICAgICAgPC9HZXRJblRvdWNoQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHlrLmlvL2RvY3MvZ2V0dGluZy1zdGFydGVkL3R5ay1jb21wb25lbnRzL2dhdGV3YXkvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMZWFybk1vcmVCdXR0b24gYXJpYS1sYWJlbD1cIkxlYXJuIE1vcmUgYWJvdXQgVHlrIEFQSSBHYXRld2F5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYWRzW2xvY2FsZV1bXCJjb21pbmdzb29uLmNvbXBvbmVudHMuRW1haWxJbnB1dENvbnRhaW5lci5idXR0b24ubGVhcm5tb3JlYWJvdXR5a1wiXX1cclxuICAgICAgICAgICAgICAgICAgPC9MZWFybk1vcmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29taW5nU29vbk1lc3NhZ2VDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxGb3JtV3JhcHBlciBmb3JtT3Blbj17Zm9ybU9wZW59PlxyXG4gICAgICAgICAgICAgIDxNb2JpbGVGb3JtQ2xvc2VCYXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1sZyBmZi1vcGVuLXNhbnMgZm9udC1ib2xkIFwiPkxldCdzIGdldCBpbiB0b3VjaDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPENsb3NlQnV0dG9uIG9uQ2xpY2s9e2RlbGF5KGNsb3NlRm9ybSwgODAwKX0+PC9DbG9zZUJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L01vYmlsZUZvcm1DbG9zZUJhcj5cclxuICAgICAgICAgICAgICA8R2V0SW5Ub3VjaEZvcm1cclxuICAgICAgICAgICAgICAgIGlucXVpcnlJdGVtcz17aW5xdWlyeUl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlSW5xdWlyeUl0ZW09e3JlbW92ZUlucXVpcnlJdGVtfVxyXG4gICAgICAgICAgICAgICAgcHJpY2VNb2RlbHNNYXA9e3ByaWNlTW9kZWxzTWFwfVxyXG4gICAgICAgICAgICAgICAgY2xvc2VGb3JtPXtjbG9zZUZvcm19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtV3JhcHBlcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICB7Lyoge2JnQ2FudmFzTG9hZGVkICYmIDxXYXZlQW5pbUJnIC8+fSAqL31cclxuICAgICAgICA8V2F2ZUFuaW1CZyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFByaWNpbmdTZWN0aW9uPlxyXG4gICAgICAgIDxQcmljaW5nQ2FyZHNcclxuICAgICAgICAgIHByaWNlTW9kZWxzPXtwcmljZU1vZGVsc31cclxuICAgICAgICAgIGFkZElucXVpcnlJdGVtPXthZGRJbnF1aXJ5SXRlbX1cclxuICAgICAgICAgIHJlbW92ZUlucXVpcnlJdGVtPXtyZW1vdmVJbnF1aXJ5SXRlbX1cclxuICAgICAgICAgIHNob3dGb3JtPXtzaG93Rm9ybX1cclxuICAgICAgICA+PC9QcmljaW5nQ2FyZHM+XHJcbiAgICAgIDwvUHJpY2luZ1NlY3Rpb24+XHJcbiAgICAgIDxTY3JvbGxUb3BCdXR0b24gLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IHBhdGggPSBcIi9wcmljZS1tb2RlbHNcIlxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoU3RyYXBpKHBhdGgpXHJcbiAgY29uc3QgcHJpY2VNb2RlbHMgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcmljZU1vZGVscyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=