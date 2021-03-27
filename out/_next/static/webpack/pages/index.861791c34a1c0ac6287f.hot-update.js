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
  return heading.replaceAll(" ", "\n");
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
  "borderRadius": "9999px",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "fontSize": "1rem",
  "lineHeight": "1.5rem"
});
_c3 = InquireButton;

var Card = function Card(_ref) {
  var priceModel = _ref.priceModel;
  var price = priceModel.price,
      price_unit = priceModel.price_unit,
      heading = priceModel.heading,
      feature = priceModel.feature,
      cta_text = priceModel.cta_text,
      cta_link = priceModel.cta_link,
      desc_list = priceModel.desc_list;
  var featureList = feature ? featureParser(feature) : null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: "license-name leading-tight w-full text-3xl font-black whitespace-pre-line",
      children: heading && specialHeadingParser(heading)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "feature-list space-y-0.5",
      children: featureList.map(function (featureItem) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "feature-item text-center whitespace-pre",
          children: featureItem
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "desc-list font-bold",
      children: desc_list.map(function (desc_item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "mb-2",
          children: desc_item
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), cta_text && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "cta-container flex flex-col flex-grow align-items-end",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InquireButton, {
        children: cta_text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, _this);
};

_c4 = Card;

var PricingCards = function PricingCards(_ref2) {
  var priceModels = _ref2.priceModels;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    className: "flex space-x-8",
    children: priceModels && priceModels.map(function (priceModel) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
        priceModel: priceModel
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 18
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljaW5nQ2FyZHMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiZmVhdHVyZVBhcnNlciIsImZlYXR1cmUiLCJzcGxpdCIsInNwZWNpYWxIZWFkaW5nUGFyc2VyIiwiaGVhZGluZyIsInJlcGxhY2VBbGwiLCJDYXJkV3JhcHBlciIsIklucXVpcmVCdXR0b24iLCJSb3VuZGVkQmx1ZUJ1dHRvbiIsIkNhcmQiLCJwcmljZU1vZGVsIiwicHJpY2UiLCJwcmljZV91bml0IiwiY3RhX3RleHQiLCJjdGFfbGluayIsImRlc2NfbGlzdCIsImZlYXR1cmVMaXN0IiwibWFwIiwiZmVhdHVyZUl0ZW0iLCJkZXNjX2l0ZW0iLCJQcmljaW5nQ2FyZHMiLCJwcmljZU1vZGVscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsUUFBZjtBQUVBOztLQUZNRixTOztBQUdOLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsT0FBRCxFQUFhO0FBQ2pDO0FBQ0EsU0FBT0EsT0FBTyxDQUFDQyxLQUFSLENBQWMsR0FBZCxDQUFQO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLE9BQUQ7QUFBQSxTQUFhQSxPQUFPLENBQUNDLFVBQVIsQ0FBbUIsR0FBbkIsRUFBd0IsSUFBeEIsQ0FBYjtBQUFBLENBQTdCOztBQUVBLElBQU1DLFdBQVcsR0FBR1IseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5REFDWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQURXLENBQWpCO01BQU1PLFc7QUFPTixJQUFNQyxhQUFhLEdBQUdULGlFQUFNLENBQUNVLHlEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsYUFDYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQURhLENBQW5CO01BQU1ELGE7O0FBSU4sSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBb0I7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBQUEsTUFFN0JDLEtBRjZCLEdBUzNCRCxVQVQyQixDQUU3QkMsS0FGNkI7QUFBQSxNQUc3QkMsVUFINkIsR0FTM0JGLFVBVDJCLENBRzdCRSxVQUg2QjtBQUFBLE1BSTdCUixPQUo2QixHQVMzQk0sVUFUMkIsQ0FJN0JOLE9BSjZCO0FBQUEsTUFLN0JILE9BTDZCLEdBUzNCUyxVQVQyQixDQUs3QlQsT0FMNkI7QUFBQSxNQU03QlksUUFONkIsR0FTM0JILFVBVDJCLENBTTdCRyxRQU42QjtBQUFBLE1BTzdCQyxRQVA2QixHQVMzQkosVUFUMkIsQ0FPN0JJLFFBUDZCO0FBQUEsTUFRN0JDLFNBUjZCLEdBUzNCTCxVQVQyQixDQVE3QkssU0FSNkI7QUFVL0IsTUFBTUMsV0FBVyxHQUFHZixPQUFPLEdBQUdELGFBQWEsQ0FBQ0MsT0FBRCxDQUFoQixHQUE0QixJQUF2RDtBQUNBLHNCQUNFLHFFQUFDLFdBQUQ7QUFBQSw0QkFFRTtBQUFJLGVBQVMsRUFBQywyRUFBZDtBQUFBLGdCQUNHRyxPQUFPLElBQUlELG9CQUFvQixDQUFDQyxPQUFEO0FBRGxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUtFO0FBQUksZUFBUyxFQUFDLDBCQUFkO0FBQUEsZ0JBQ0dZLFdBQVcsQ0FBQ0MsR0FBWixDQUFnQixVQUFDQyxXQUFEO0FBQUEsNEJBQ2Y7QUFBSSxtQkFBUyxFQUFDLHlDQUFkO0FBQUEsb0JBQ0dBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZTtBQUFBLE9BQWhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBWUU7QUFBSSxlQUFTLEVBQUMscUJBQWQ7QUFBQSxnQkFDR0gsU0FBUyxDQUFDRSxHQUFWLENBQWMsVUFBQ0UsU0FBRDtBQUFBLDRCQUNiO0FBQUksbUJBQVMsRUFBQyxNQUFkO0FBQUEsb0JBQXNCQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRixFQWlCR04sUUFBUSxpQkFDUDtBQUFLLGVBQVMsRUFBQyx1REFBZjtBQUFBLDZCQUNFLHFFQUFDLGFBQUQ7QUFBQSxrQkFBZ0JBO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUJELENBcENEOztNQUFNSixJOztBQXNDTixJQUFNVyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxRQUFxQjtBQUFBLE1BQWxCQyxXQUFrQixTQUFsQkEsV0FBa0I7QUFDeEMsc0JBQ0UscUVBQUMsU0FBRDtBQUFXLGFBQVMsRUFBQyxnQkFBckI7QUFBQSxjQUNHQSxXQUFXLElBQ1ZBLFdBQVcsQ0FBQ0osR0FBWixDQUFnQixVQUFDUCxVQUFELEVBQWdCO0FBQzlCLDBCQUFPLHFFQUFDLElBQUQ7QUFBTSxrQkFBVSxFQUFFQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxLQUZEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0FURDs7TUFBTVUsWTtBQVdOIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg2MTc5MWMzNGExYzBhYzYyODdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSb3VuZGVkQmx1ZUJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9CdXR0b25cIjtcclxuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG4vKiBVdGlscyAqL1xyXG5jb25zdCBmZWF0dXJlUGFyc2VyID0gKGZlYXR1cmUpID0+IHtcclxuICAvLyBUT0RPOiBkZXN0cnVjdHVyZSBmZWF0dXJlIGJ5IGRlbGltaXRlciAoY29sb24pXHJcbiAgcmV0dXJuIGZlYXR1cmUuc3BsaXQoXCI6XCIpO1xyXG59O1xyXG5cclxuY29uc3Qgc3BlY2lhbEhlYWRpbmdQYXJzZXIgPSAoaGVhZGluZykgPT4gaGVhZGluZy5yZXBsYWNlQWxsKFwiIFwiLCBcIlxcblwiKTtcclxuXHJcbmNvbnN0IENhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAke3R3YGZsZXggZmxleC1jb2wgc2hhZG93LWxnIHNwYWNlLXktNSBwLTEwIHJvdW5kZWQteGxgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIG1pbi13aWR0aDogMjI1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW5xdWlyZUJ1dHRvbiA9IHN0eWxlZChSb3VuZGVkQmx1ZUJ1dHRvbilgXHJcbiAgJHt0d2Byb3VuZGVkLWZ1bGwgcHktMiB0ZXh0LWJhc2VgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZCA9ICh7IHByaWNlTW9kZWwgfSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHByaWNlLFxyXG4gICAgcHJpY2VfdW5pdCxcclxuICAgIGhlYWRpbmcsXHJcbiAgICBmZWF0dXJlLFxyXG4gICAgY3RhX3RleHQsXHJcbiAgICBjdGFfbGluayxcclxuICAgIGRlc2NfbGlzdCxcclxuICB9ID0gcHJpY2VNb2RlbDtcclxuICBjb25zdCBmZWF0dXJlTGlzdCA9IGZlYXR1cmUgPyBmZWF0dXJlUGFyc2VyKGZlYXR1cmUpIDogbnVsbDtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRXcmFwcGVyPlxyXG4gICAgICB7LyogPGg2IGNsYXNzTmFtZT1cInR5cGVcIj5Bd2Vzb21lPC9oNj4gKi99XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJsaWNlbnNlLW5hbWUgbGVhZGluZy10aWdodCB3LWZ1bGwgdGV4dC0zeGwgZm9udC1ibGFjayB3aGl0ZXNwYWNlLXByZS1saW5lXCI+XHJcbiAgICAgICAge2hlYWRpbmcgJiYgc3BlY2lhbEhlYWRpbmdQYXJzZXIoaGVhZGluZyl9XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJmZWF0dXJlLWxpc3Qgc3BhY2UteS0wLjVcIj5cclxuICAgICAgICB7ZmVhdHVyZUxpc3QubWFwKChmZWF0dXJlSXRlbSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZlYXR1cmUtaXRlbSB0ZXh0LWNlbnRlciB3aGl0ZXNwYWNlLXByZVwiPlxyXG4gICAgICAgICAgICB7ZmVhdHVyZUl0ZW19XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZGVzYy1saXN0IGZvbnQtYm9sZFwiPlxyXG4gICAgICAgIHtkZXNjX2xpc3QubWFwKChkZXNjX2l0ZW0pID0+IChcclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0yXCI+e2Rlc2NfaXRlbX08L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICB7Y3RhX3RleHQgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3RhLWNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGZsZXgtZ3JvdyBhbGlnbi1pdGVtcy1lbmRcIj5cclxuICAgICAgICAgIDxJbnF1aXJlQnV0dG9uPntjdGFfdGV4dH08L0lucXVpcmVCdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L0NhcmRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQcmljaW5nQ2FyZHMgPSAoeyBwcmljZU1vZGVscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LThcIj5cclxuICAgICAge3ByaWNlTW9kZWxzICYmXHJcbiAgICAgICAgcHJpY2VNb2RlbHMubWFwKChwcmljZU1vZGVsKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPENhcmQgcHJpY2VNb2RlbD17cHJpY2VNb2RlbH0gLz47XHJcbiAgICAgICAgfSl9XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgUHJpY2luZ0NhcmRzIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=