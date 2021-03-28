webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Icons */ "./components/Icons/index.js");
/* harmony import */ var hooks_useDeviceDetect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hooks/useDeviceDetect */ "./hooks/useDeviceDetect.js");






var _jsxFileName = "C:\\Users\\4hyun\\Documents\\argo-web-next\\components\\Form.js",
    _this = undefined,
    _s = $RefreshSig$();





var InquiryItemsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Form__InquiryItemsContainer",
  componentId: "yiwmi5-0"
})(["", ""], {
  "display": "flex",
  "flexDirection": "column",
  "paddingTop": "1rem",
  "paddingLeft": "1rem",
  "paddingRight": "1rem",
  "> :not([hidden]) ~ :not([hidden])": {
    "--tw-space-y-reverse": 0,
    "marginTop": "calc(0.5rem * calc(1 - var(--tw-space-y-reverse)))",
    "marginBottom": "calc(0.5rem * var(--tw-space-y-reverse))"
  }
});
var InquiryItem = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Form__InquiryItem",
  componentId: "yiwmi5-1"
})(["", " max-width:fit-content;box-shadow:0px 1px 4px 0px rgba(5,217,187,1);height:27px;background:#05d9bb;"], {
  "display": "flex",
  "paddingTop": "1rem",
  "paddingBottom": "1rem",
  "paddingLeft": "0.75rem",
  "paddingRight": "0.5rem",
  "flexGrow": "0",
  "alignItems": "center",
  "borderRadius": "0.5rem",
  "--tw-text-opacity": "1",
  "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
  "fontWeight": "700",
  "> :not([hidden]) ~ :not([hidden])": {
    "--tw-space-x-reverse": 0,
    "marginRight": "calc(0.5rem * var(--tw-space-x-reverse))",
    "marginLeft": "calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))"
  }
});

var Label = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].label({
  "display": "block",
  "fontSize": "0.875rem",
  "lineHeight": "1.25rem",
  "fontWeight": "500",
  "--tw-text-opacity": "1",
  "color": "rgba(55, 65, 81, var(--tw-text-opacity))"
});

_c = Label;

var HiddenLabel = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(Label)({});

var HiddenInput = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input({});

_c2 = HiddenInput;

var Input = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input({
  "marginTop": "0.25rem",
  "display": "block",
  "width": "100%",
  "--tw-shadow": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "borderWidth": "1px",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(209, 213, 219, var(--tw-border-opacity))",
  "borderRadius": "0.375rem",
  "paddingLeft": "0.5rem",
  "paddingRight": "0.5rem",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  ":focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px",
    "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
    "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
    "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
    "--tw-ring-opacity": "1",
    "--tw-ring-color": "rgba(99, 102, 241, var(--tw-ring-opacity))",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(99, 102, 241, var(--tw-border-opacity))"
  },
  "@media (min-width: 640px)": {
    "fontSize": "0.875rem",
    "lineHeight": "1.25rem"
  }
});

_c3 = Input;

var Textarea = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].textarea({
  "--tw-shadow": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "marginTop": "0.25rem",
  "display": "block",
  "width": "100%",
  "borderWidth": "1px",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(209, 213, 219, var(--tw-border-opacity))",
  "borderRadius": "0.375rem",
  "paddingLeft": "0.5rem",
  "paddingRight": "0.5rem",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  ":focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px",
    "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
    "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
    "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
    "--tw-ring-opacity": "1",
    "--tw-ring-color": "rgba(99, 102, 241, var(--tw-ring-opacity))",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(99, 102, 241, var(--tw-border-opacity))"
  },
  "@media (min-width: 640px)": {
    "fontSize": "0.875rem",
    "lineHeight": "1.25rem"
  }
});

_c4 = Textarea;

var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button({
  "display": "inline-flex",
  "justifyContent": "center",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "paddingLeft": "1rem",
  "paddingRight": "1rem",
  "borderWidth": "1px",
  "borderColor": "transparent",
  "--tw-shadow": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "fontSize": "1rem",
  "lineHeight": "1.5rem",
  "fontWeight": "500",
  "--tw-text-opacity": "1",
  "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
  "backgroundColor": "var(--argo-blue)",
  ":hover": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(67, 56, 202, var(--tw-bg-opacity))"
  },
  ":focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px",
    "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
    "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
    "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
    "--tw-ring-offset-width": "2px",
    "--tw-ring-opacity": "1",
    "--tw-ring-color": "rgba(99, 102, 241, var(--tw-ring-opacity))"
  },
  "borderRadius": "9999px",
  "position": "relative"
});

_c5 = SubmitButton;

var Ping = function Ping(_ref) {
  var on = _ref.on;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    "class": "flex absolute h-3 w-3 top-1 right-1 -mt-1 -mr-1 ".concat(on ? "opacity-100" : "opacity-0"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      "class": "animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      "class": "relative inline-flex rounded-full h-3 w-3 bg-purple-500"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 3
  }, _this);
};

_c6 = Ping;
var SUBMIT_DEFAULT_MESSAGE = "Send";
var SUBMIT_SUCCESS_MESSAGE = "Message Sent!";
var SUBMIT_ERROR_MESSAGE = "Please click to retry.";
var PING_ON = true;
var PING_OFF = false;

var Form = function Form(_ref2) {
  _s();

  var inquiryItems = _ref2.inquiryItems,
      priceModelsMap = _ref2.priceModelsMap,
      removeInquiryItem = _ref2.removeInquiryItem,
      closeForm = _ref2.closeForm;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();

  var _useDeviceDetect = Object(hooks_useDeviceDetect__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      isMobile = _useDeviceDetect.isMobile;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(PING_OFF),
      pingOn = _useState[0],
      setPing = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(SUBMIT_DEFAULT_MESSAGE),
      submitButtonMessage = _useState2[0],
      setSubmitButtonMessage = _useState2[1];

  var handleFormSubmitStatus = function handleFormSubmitStatus(statusMessage) {
    setSubmitButtonMessage(statusMessage);

    if (isMobile) {
      setPing(PING_ON);
    }
  };

  var netlifyFormSubmit = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var formData;
      return C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

              if (isMobile && submitButtonMessage === SUBMIT_SUCCESS_MESSAGE) {
                setPing(PING_OFF);
                closeForm();
              }

              if (!(submitButtonMessage === SUBMIT_SUCCESS_MESSAGE)) {
                _context.next = 7;
                break;
              }

              ref.current.reset();
              removeInquiryItem("all");
              setSubmitButtonMessage(SUBMIT_DEFAULT_MESSAGE);
              return _context.abrupt("return");

            case 7:
              if (!(submitButtonMessage === SUBMIT_ERROR_MESSAGE)) {
                _context.next = 10;
                break;
              }

              setSubmitButtonMessage(SUBMIT_DEFAULT_MESSAGE);
              return _context.abrupt("return");

            case 10:
              formData = new FormData(ref.current);
              console.log(">>DEBUG : ", new URLSearchParams(formData).toString());
              _context.prev = 12;
              _context.next = 15;
              return fetch("/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(formData).toString()
              });

            case 15:
              handleFormSubmitStatus(SUBMIT_SUCCESS_MESSAGE); // isMobile && setTimeout(() => {
              //   closeForm()
              // }, 1000);

              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](12);
              handleFormSubmitStatus(SUBMIT_ERROR_MESSAGE);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[12, 18]]);
    }));

    return function netlifyFormSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    name: "contact",
    method: "POST",
    className: "bg-white shadow-md overflow-hidden rounded-md lg:my-auto select-none",
    "data-netlify": "true",
    onSubmit: netlifyFormSubmit,
    ref: ref,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "hidden",
      name: "form-name",
      value: "contact"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InquiryItemsContainer, {
      children: [inquiryItems.map(function (inquiryItemId) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InquiryItem, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: priceModelsMap[inquiryItemId]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Icons__WEBPACK_IMPORTED_MODULE_5__["Close"], {
            size: "20",
            onClick: function onClick() {
              return removeInquiryItem(inquiryItemId);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, _this)]
        }, inquiryItemId, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, _this);
      }), ["6052083fcc2ae60d2498da6c"].map(function (inquiryItemId) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HiddenLabel, {
            htmlFor: inquiryItemId,
            children: priceModelsMap[inquiryItemId]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HiddenInput, {
            name: inquiryItemId,
            id: inquiryItemId,
            value: "inquiring"
          }, "".concat(inquiryItemId, "_h"), false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, _this)]
        }, void 0, true);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "outer bg-white",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-body__wrapper px-4 md:px-3 py-4 bg-white",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "grid lg:grid-cols-6 grid-cols-12 gap-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-span-8",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Label, {
              htmlFor: "full_name",
              children: "Full name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
              type: "text",
              name: "full_name",
              id: "full_name",
              autoComplete: "on",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-span-12",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Label, {
              htmlFor: "email_address",
              children: "Email address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
              type: "text",
              name: "email_address",
              id: "email_address",
              autoComplete: "on",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-span-12",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Label, {
              htmlFor: "message",
              children: "Drop us a line"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Textarea, {
              id: "message",
              name: "message",
              rows: "3",
              placeholder: "for Tyk inquiries and others"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-footer px-4 py-3 bg-gray-50 text-right sm:px-6 ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-button-wrapper relative",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SubmitButton, {
            type: "submit",
            "aria-label": "submit",
            children: submitButtonMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Ping, {
            on: pingOn
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, _this);
};

_s(Form, "mPri7oFdWOhdLJd20No3dh4k21A=", false, function () {
  return [hooks_useDeviceDetect__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c7 = Form;
/* harmony default export */ __webpack_exports__["default"] = (Form);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Label");
$RefreshReg$(_c2, "HiddenInput");
$RefreshReg$(_c3, "Input");
$RefreshReg$(_c4, "Textarea");
$RefreshReg$(_c5, "SubmitButton");
$RefreshReg$(_c6, "Ping");
$RefreshReg$(_c7, "Form");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbIklucXVpcnlJdGVtc0NvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIklucXVpcnlJdGVtIiwiTGFiZWwiLCJ0dyIsImxhYmVsIiwiSGlkZGVuTGFiZWwiLCJIaWRkZW5JbnB1dCIsImlucHV0IiwiSW5wdXQiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwiUGluZyIsIm9uIiwiU1VCTUlUX0RFRkFVTFRfTUVTU0FHRSIsIlNVQk1JVF9TVUNDRVNTX01FU1NBR0UiLCJTVUJNSVRfRVJST1JfTUVTU0FHRSIsIlBJTkdfT04iLCJQSU5HX09GRiIsIkZvcm0iLCJpbnF1aXJ5SXRlbXMiLCJwcmljZU1vZGVsc01hcCIsInJlbW92ZUlucXVpcnlJdGVtIiwiY2xvc2VGb3JtIiwicmVmIiwidXNlUmVmIiwidXNlRGV2aWNlRGV0ZWN0IiwiaXNNb2JpbGUiLCJ1c2VTdGF0ZSIsInBpbmdPbiIsInNldFBpbmciLCJzdWJtaXRCdXR0b25NZXNzYWdlIiwic2V0U3VibWl0QnV0dG9uTWVzc2FnZSIsImhhbmRsZUZvcm1TdWJtaXRTdGF0dXMiLCJzdGF0dXNNZXNzYWdlIiwibmV0bGlmeUZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwicmVzZXQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiY29uc29sZSIsImxvZyIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIm1hcCIsImlucXVpcnlJdGVtSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLHFCQUFxQixHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGFBQ3JCO0FBQUE7QUFBQTtBQUFBO0FB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RUFBQyxJQUpmO0FBS0Usc0JBQVE7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRixlQXFCRTtBQUFLLHFCQUFTLEVBQUMsYUFBZjtBQUFBLG9DQUNFLHFFQUFDLEtBQUQ7QUFBTyxxQkFBTyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSxxRUFBQyxRQUFEO0FBQ0UsZ0JBQUUsRUFBQyxTQURMO0FBRUUsa0JBQUksRUFBQyxTQUZQO0FBR0Usa0JBQUksRUFBQyxHQUhQO0FBSUUseUJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFrQ0U7QUFBSyxpQkFBUyxFQUFDLHNEQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLDhCQUFmO0FBQUEsa0NBQ0UscUVBQUMsWUFBRDtBQUFjLGdCQUFJLEVBQUMsUUFBbkI7QUFBNEIsMEJBQVcsUUFBdkM7QUFBQSxzQkFDR3BCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFLHFFQUFDLElBQUQ7QUFBTSxjQUFFLEVBQUVGO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTlCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRFRCxDQS9IRDs7R0FBTVYsSTtVQU9pQk8sNkQ7OztNQVBqQlAsSTtBQWlJU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTZlZTZlNjBjZWYwNjMyZTZlNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENsb3NlIH0gZnJvbSBcImNvbXBvbmVudHMvSWNvbnNcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XHJcbmltcG9ydCB1c2VEZXZpY2VEZXRlY3QgZnJvbSBcImhvb2tzL3VzZURldmljZURldGVjdFwiO1xyXG5cclxuY29uc3QgSW5xdWlyeUl0ZW1zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAke3R3YGZsZXggZmxleC1jb2wgcHQtNCBweC00IHNwYWNlLXktMmB9XHJcbmA7XHJcbmNvbnN0IElucXVpcnlJdGVtID0gc3R5bGVkLmRpdmBcclxuICAke3R3YGZsZXggcHktNCBwbC0zIHByLTIgZmxleC1ncm93LTAgaXRlbXMtY2VudGVyIHJvdW5kZWQtbGcgdGV4dC13aGl0ZSBmb250LWJvbGQgc3BhY2UteC0yYH1cclxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggNHB4IDBweCByZ2JhKDUsIDIxNywgMTg3LCAxKTtcclxuICBoZWlnaHQ6IDI3cHg7XHJcbiAgYmFja2dyb3VuZDogIzA1ZDliYjtcclxuYDtcclxuY29uc3QgTGFiZWwgPSB0dy5sYWJlbGBibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBgO1xyXG5jb25zdCBIaWRkZW5MYWJlbCA9IHR3KExhYmVsKWBgO1xyXG5cclxuY29uc3QgSGlkZGVuSW5wdXQgPSB0dy5pbnB1dGBgO1xyXG5cclxuY29uc3QgSW5wdXQgPSB0dy5pbnB1dGBtdC0xIGJsb2NrIHctZnVsbCBzaGFkb3ctc20gc206dGV4dC1zbSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcHgtMiBweS0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwYDtcclxuXHJcbmNvbnN0IFRleHRhcmVhID0gdHcudGV4dGFyZWFgc2hhZG93LXNtIG10LTEgYmxvY2sgdy1mdWxsIHNtOnRleHQtc20gYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB4LTIgcHktMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMGA7XHJcblxyXG5jb25zdCBTdWJtaXRCdXR0b24gPSB0dy5idXR0b25gaW5saW5lLWZsZXgganVzdGlmeS1jZW50ZXIgcHktMiBweC00IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgc2hhZG93LXNtIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJnLWFyZ28tYmx1ZS00MDAgaG92ZXI6YmctaW5kaWdvLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwIHJvdW5kZWQtZnVsbCByZWxhdGl2ZWA7XHJcblxyXG5jb25zdCBQaW5nID0gKHsgb24gfSkgPT4gKFxyXG4gIDxzcGFuXHJcbiAgICBjbGFzcz17YGZsZXggYWJzb2x1dGUgaC0zIHctMyB0b3AtMSByaWdodC0xIC1tdC0xIC1tci0xICR7XHJcbiAgICAgIG9uID8gXCJvcGFjaXR5LTEwMFwiIDogXCJvcGFjaXR5LTBcIlxyXG4gICAgfWB9XHJcbiAgPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJhbmltYXRlLXBpbmcgYWJzb2x1dGUgaW5saW5lLWZsZXggaC1mdWxsIHctZnVsbCByb3VuZGVkLWZ1bGwgYmctcHVycGxlLTQwMCBvcGFjaXR5LTc1XCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZWxhdGl2ZSBpbmxpbmUtZmxleCByb3VuZGVkLWZ1bGwgaC0zIHctMyBiZy1wdXJwbGUtNTAwXCI+PC9zcGFuPlxyXG4gIDwvc3Bhbj5cclxuKTtcclxuXHJcbmNvbnN0IFNVQk1JVF9ERUZBVUxUX01FU1NBR0UgPSBcIlNlbmRcIjtcclxuY29uc3QgU1VCTUlUX1NVQ0NFU1NfTUVTU0FHRSA9IFwiTWVzc2FnZSBTZW50IVwiO1xyXG5jb25zdCBTVUJNSVRfRVJST1JfTUVTU0FHRSA9IFwiUGxlYXNlIGNsaWNrIHRvIHJldHJ5LlwiO1xyXG5jb25zdCBQSU5HX09OID0gdHJ1ZTtcclxuY29uc3QgUElOR19PRkYgPSBmYWxzZTtcclxuXHJcbmNvbnN0IEZvcm0gPSAoe1xyXG4gIGlucXVpcnlJdGVtcyxcclxuICBwcmljZU1vZGVsc01hcCxcclxuICByZW1vdmVJbnF1aXJ5SXRlbSxcclxuICBjbG9zZUZvcm0sXHJcbn0pID0+IHtcclxuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCB7IGlzTW9iaWxlIH0gPSB1c2VEZXZpY2VEZXRlY3QoKTtcclxuICBjb25zdCBbcGluZ09uLCBzZXRQaW5nXSA9IHVzZVN0YXRlKFBJTkdfT0ZGKTtcclxuICBjb25zdCBbc3VibWl0QnV0dG9uTWVzc2FnZSwgc2V0U3VibWl0QnV0dG9uTWVzc2FnZV0gPSB1c2VTdGF0ZShcclxuICAgIFNVQk1JVF9ERUZBVUxUX01FU1NBR0VcclxuICApO1xyXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXRTdGF0dXMgPSAoc3RhdHVzTWVzc2FnZSkgPT4ge1xyXG4gICAgc2V0U3VibWl0QnV0dG9uTWVzc2FnZShzdGF0dXNNZXNzYWdlKTtcclxuICAgIGlmIChpc01vYmlsZSkge1xyXG4gICAgICBzZXRQaW5nKFBJTkdfT04pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgbmV0bGlmeUZvcm1TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGlzTW9iaWxlICYmIHN1Ym1pdEJ1dHRvbk1lc3NhZ2UgPT09IFNVQk1JVF9TVUNDRVNTX01FU1NBR0UpIHtcclxuICAgICAgc2V0UGluZyhQSU5HX09GRik7XHJcbiAgICAgIGNsb3NlRm9ybSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHN1Ym1pdEJ1dHRvbk1lc3NhZ2UgPT09IFNVQk1JVF9TVUNDRVNTX01FU1NBR0UpIHtcclxuICAgICAgcmVmLmN1cnJlbnQucmVzZXQoKTtcclxuICAgICAgcmVtb3ZlSW5xdWlyeUl0ZW0oXCJhbGxcIik7XHJcbiAgICAgIHNldFN1Ym1pdEJ1dHRvbk1lc3NhZ2UoU1VCTUlUX0RFRkFVTFRfTUVTU0FHRSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChzdWJtaXRCdXR0b25NZXNzYWdlID09PSBTVUJNSVRfRVJST1JfTUVTU0FHRSkge1xyXG4gICAgICBzZXRTdWJtaXRCdXR0b25NZXNzYWdlKFNVQk1JVF9ERUZBVUxUX01FU1NBR0UpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEocmVmLmN1cnJlbnQpO1xyXG4gICAgY29uc29sZS5sb2coXCI+PkRFQlVHIDogXCIsIG5ldyBVUkxTZWFyY2hQYXJhbXMoZm9ybURhdGEpLnRvU3RyaW5nKCkpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZmV0Y2goXCIvXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB9LFxyXG4gICAgICAgIGJvZHk6IG5ldyBVUkxTZWFyY2hQYXJhbXMoZm9ybURhdGEpLnRvU3RyaW5nKCksXHJcbiAgICAgIH0pO1xyXG4gICAgICBoYW5kbGVGb3JtU3VibWl0U3RhdHVzKFNVQk1JVF9TVUNDRVNTX01FU1NBR0UpO1xyXG4gICAgICAvLyBpc01vYmlsZSAmJiBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgLy8gICBjbG9zZUZvcm0oKVxyXG4gICAgICAvLyB9LCAxMDAwKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGhhbmRsZUZvcm1TdWJtaXRTdGF0dXMoU1VCTUlUX0VSUk9SX01FU1NBR0UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybVxyXG4gICAgICBuYW1lPVwiY29udGFjdFwiXHJcbiAgICAgIG1ldGhvZD1cIlBPU1RcIlxyXG4gICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctbWQgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgbGc6bXktYXV0byBzZWxlY3Qtbm9uZVwiXHJcbiAgICAgIGRhdGEtbmV0bGlmeT1cInRydWVcIlxyXG4gICAgICBvblN1Ym1pdD17bmV0bGlmeUZvcm1TdWJtaXR9XHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmb3JtLW5hbWVcIiB2YWx1ZT1cImNvbnRhY3RcIj48L2lucHV0PlxyXG4gICAgICA8SW5xdWlyeUl0ZW1zQ29udGFpbmVyPlxyXG4gICAgICAgIHtpbnF1aXJ5SXRlbXMubWFwKChpbnF1aXJ5SXRlbUlkKSA9PiAoXHJcbiAgICAgICAgICA8SW5xdWlyeUl0ZW0ga2V5PXtpbnF1aXJ5SXRlbUlkfT5cclxuICAgICAgICAgICAgPHNwYW4+e3ByaWNlTW9kZWxzTWFwW2lucXVpcnlJdGVtSWRdfTwvc3Bhbj5cclxuICAgICAgICAgICAgPENsb3NlIHNpemU9XCIyMFwiIG9uQ2xpY2s9eygpID0+IHJlbW92ZUlucXVpcnlJdGVtKGlucXVpcnlJdGVtSWQpfSAvPlxyXG4gICAgICAgICAgPC9JbnF1aXJ5SXRlbT5cclxuICAgICAgICApKX1cclxuICAgICAgICB7W1wiNjA1MjA4M2ZjYzJhZTYwZDI0OThkYTZjXCJdLm1hcCgoaW5xdWlyeUl0ZW1JZCkgPT4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhpZGRlbkxhYmVsIGh0bWxGb3I9e2lucXVpcnlJdGVtSWR9PlxyXG4gICAgICAgICAgICAgIHtwcmljZU1vZGVsc01hcFtpbnF1aXJ5SXRlbUlkXX1cclxuICAgICAgICAgICAgPC9IaWRkZW5MYWJlbD5cclxuICAgICAgICAgICAgPEhpZGRlbklucHV0XHJcbiAgICAgICAgICAgICAga2V5PXtgJHtpbnF1aXJ5SXRlbUlkfV9oYH1cclxuICAgICAgICAgICAgICBuYW1lPXtpbnF1aXJ5SXRlbUlkfVxyXG4gICAgICAgICAgICAgIGlkPXtpbnF1aXJ5SXRlbUlkfVxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiaW5xdWlyaW5nXCJcclxuICAgICAgICAgICAgPjwvSGlkZGVuSW5wdXQ+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9JbnF1aXJ5SXRlbXNDb250YWluZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXIgYmctd2hpdGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tYm9keV9fd3JhcHBlciBweC00IG1kOnB4LTMgcHktNCBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy02IGdyaWQtY29scy0xMiBnYXAtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLThcIj5cclxuICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImZ1bGxfbmFtZVwiPkZ1bGwgbmFtZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZnVsbF9uYW1lXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZnVsbF9uYW1lXCJcclxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9uXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTJcIj5cclxuICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImVtYWlsX2FkZHJlc3NcIj5FbWFpbCBhZGRyZXNzPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbF9hZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxfYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvblwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyXCI+XHJcbiAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCI+RHJvcCB1cyBhIGxpbmU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDxUZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIHJvd3M9XCIzXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZm9yIFR5ayBpbnF1aXJpZXMgYW5kIG90aGVyc1wiXHJcbiAgICAgICAgICAgICAgPjwvVGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZvb3RlciBweC00IHB5LTMgYmctZ3JheS01MCB0ZXh0LXJpZ2h0IHNtOnB4LTYgXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tYnV0dG9uLXdyYXBwZXIgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgPFN1Ym1pdEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgYXJpYS1sYWJlbD1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIHtzdWJtaXRCdXR0b25NZXNzYWdlfVxyXG4gICAgICAgICAgICA8L1N1Ym1pdEJ1dHRvbj5cclxuICAgICAgICAgICAgPFBpbmcgb249e3BpbmdPbn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==