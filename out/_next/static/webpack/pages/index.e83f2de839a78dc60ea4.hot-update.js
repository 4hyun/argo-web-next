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
      children: inquiryItems.map(function (inquiryItemId) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InquiryItem, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: priceModelsMap[inquiryItemId]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Icons__WEBPACK_IMPORTED_MODULE_5__["Close"], {
              size: "20",
              onClick: function onClick() {
                return removeInquiryItem(inquiryItemId);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, _this)]
          }, inquiryItemId, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HiddenLabel, {
            htmlFor: inquiryItemId,
            children: priceModelsMap[inquiryItemId]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HiddenInput, {
            name: inquiryItemId,
            id: inquiryItemId,
            value: "inquiring"
          }, "".concat(inquiryItemId, "_h"), false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, _this)]
        }, void 0, true);
      })
    }, void 0, false, {
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
              lineNumber: 132,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
              type: "text",
              name: "full_name",
              id: "full_name",
              autoComplete: "on",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-span-12",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Label, {
              htmlFor: "email_address",
              children: "Email address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
              type: "text",
              name: "email_address",
              id: "email_address",
              autoComplete: "on",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-span-12",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Label, {
              htmlFor: "message",
              children: "Drop us a line"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Textarea, {
              id: "message",
              name: "message",
              rows: "3",
              placeholder: "for Tyk inquiries and others"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
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
            lineNumber: 164,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Ping, {
            on: pingOn
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbIklucXVpcnlJdGVtc0NvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIklucXVpcnlJdGVtIiwiTGFiZWwiLCJ0dyIsImxhYmVsIiwiSGlkZGVuTGFiZWwiLCJIaWRkZW5JbnB1dCIsImlucHV0IiwiSW5wdXQiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwiUGluZyIsIm9uIiwiU1VCTUlUX0RFRkFVTFRfTUVTU0FHRSIsIlNVQk1JVF9TVUNDRVNTX01FU1NBR0UiLCJTVUJNSVRfRVJST1JfTUVTU0FHRSIsIlBJTkdfT04iLCJQSU5HX09GRiIsIkZvcm0iLCJpbnF1aXJ5SXRlbXMiLCJwcmljZU1vZGVsc01hcCIsInJlbW92ZUlucXVpcnlJdGVtIiwiY2xvc2VGb3JtIiwicmVmIiwidXNlUmVmIiwidXNlRGV2aWNlRGV0ZWN0IiwiaXNNb2JpbGUiLCJ1c2VTdGF0ZSIsInBpbmdPbiIsInNldFBpbmciLCJzdWJtaXRCdXR0b25NZXNzYWdlIiwic2V0U3VibWl0QnV0dG9uTWVzc2FnZSIsImhhbmRsZUZvcm1TdWJtaXRTdGF0dXMiLCJzdGF0dXNNZXNzYWdlIiwibmV0bGlmeUZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwicmVzZXQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiY29uc29sZSIsImxvZyIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIm1hcCIsImlucXVpcnlJdGVtSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLHFCQUFxQixHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGFBQ3JCO0FBQUE7QUFBQTtBQUFBO0FB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bUJBWEYsZUFxQkU7QUFBSyxxQkFBUyxFQUFDLGFBQWY7QUFBQSxvQ0FDRSxxRUFBQyxLQUFEO0FBQU8scUJBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUscUVBQUMsUUFBRDtBQUNFLGdCQUFFLEVBQUMsU0FETDtBQUVFLGtCQUFJLEVBQUMsU0FGUDtBQUdFLGtCQUFJLEVBQUMsR0FIUDtBQUlFLHlCQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBa0NFO0FBQUssaUJBQVMsRUFBQyxzREFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyw4QkFBZjtBQUFBLGtDQUNFLHFFQUFDLFlBQUQ7QUFBYyxnQkFBSSxFQUFDLFFBQW5CO0FBQTRCLDBCQUFXLFFBQXZDO0FBQUEsc0JBQ0dwQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRSxxRUFBQyxJQUFEO0FBQU0sY0FBRSxFQUFFRjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2RUQsQ0FoSUQ7O0dBQU1WLEk7VUFPaUJPLDZEOzs7TUFQakJQLEk7QUFrSVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU4M2YyZGU4MzlhNzhkYzYwZWE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDbG9zZSB9IGZyb20gXCJjb21wb25lbnRzL0ljb25zXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xyXG5pbXBvcnQgdXNlRGV2aWNlRGV0ZWN0IGZyb20gXCJob29rcy91c2VEZXZpY2VEZXRlY3RcIjtcclxuXHJcbmNvbnN0IElucXVpcnlJdGVtc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2BmbGV4IGZsZXgtY29sIHB0LTQgcHgtNCBzcGFjZS15LTJgfVxyXG5gO1xyXG5jb25zdCBJbnF1aXJ5SXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2BmbGV4IHB5LTQgcGwtMyBwci0yIGZsZXgtZ3Jvdy0wIGl0ZW1zLWNlbnRlciByb3VuZGVkLWxnIHRleHQtd2hpdGUgZm9udC1ib2xkIHNwYWNlLXgtMmB9XHJcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDRweCAwcHggcmdiYSg1LCAyMTcsIDE4NywgMSk7XHJcbiAgaGVpZ2h0OiAyN3B4O1xyXG4gIGJhY2tncm91bmQ6ICMwNWQ5YmI7XHJcbmA7XHJcbmNvbnN0IExhYmVsID0gdHcubGFiZWxgYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwYDtcclxuY29uc3QgSGlkZGVuTGFiZWwgPSB0dyhMYWJlbClgYDtcclxuXHJcbmNvbnN0IEhpZGRlbklucHV0ID0gdHcuaW5wdXRgYDtcclxuXHJcbmNvbnN0IElucHV0ID0gdHcuaW5wdXRgbXQtMSBibG9jayB3LWZ1bGwgc2hhZG93LXNtIHNtOnRleHQtc20gYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB4LTIgcHktMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMGA7XHJcblxyXG5jb25zdCBUZXh0YXJlYSA9IHR3LnRleHRhcmVhYHNoYWRvdy1zbSBtdC0xIGJsb2NrIHctZnVsbCBzbTp0ZXh0LXNtIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBweC0yIHB5LTIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDBgO1xyXG5cclxuY29uc3QgU3VibWl0QnV0dG9uID0gdHcuYnV0dG9uYGlubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHNoYWRvdy1zbSB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBiZy1hcmdvLWJsdWUtNDAwIGhvdmVyOmJnLWluZGlnby03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCByb3VuZGVkLWZ1bGwgcmVsYXRpdmVgO1xyXG5cclxuY29uc3QgUGluZyA9ICh7IG9uIH0pID0+IChcclxuICA8c3BhblxyXG4gICAgY2xhc3M9e2BmbGV4IGFic29sdXRlIGgtMyB3LTMgdG9wLTEgcmlnaHQtMSAtbXQtMSAtbXItMSAke1xyXG4gICAgICBvbiA/IFwib3BhY2l0eS0xMDBcIiA6IFwib3BhY2l0eS0wXCJcclxuICAgIH1gfVxyXG4gID5cclxuICAgIDxzcGFuIGNsYXNzPVwiYW5pbWF0ZS1waW5nIGFic29sdXRlIGlubGluZS1mbGV4IGgtZnVsbCB3LWZ1bGwgcm91bmRlZC1mdWxsIGJnLXB1cnBsZS00MDAgb3BhY2l0eS03NVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwicmVsYXRpdmUgaW5saW5lLWZsZXggcm91bmRlZC1mdWxsIGgtMyB3LTMgYmctcHVycGxlLTUwMFwiPjwvc3Bhbj5cclxuICA8L3NwYW4+XHJcbik7XHJcblxyXG5jb25zdCBTVUJNSVRfREVGQVVMVF9NRVNTQUdFID0gXCJTZW5kXCI7XHJcbmNvbnN0IFNVQk1JVF9TVUNDRVNTX01FU1NBR0UgPSBcIk1lc3NhZ2UgU2VudCFcIjtcclxuY29uc3QgU1VCTUlUX0VSUk9SX01FU1NBR0UgPSBcIlBsZWFzZSBjbGljayB0byByZXRyeS5cIjtcclxuY29uc3QgUElOR19PTiA9IHRydWU7XHJcbmNvbnN0IFBJTkdfT0ZGID0gZmFsc2U7XHJcblxyXG5jb25zdCBGb3JtID0gKHtcclxuICBpbnF1aXJ5SXRlbXMsXHJcbiAgcHJpY2VNb2RlbHNNYXAsXHJcbiAgcmVtb3ZlSW5xdWlyeUl0ZW0sXHJcbiAgY2xvc2VGb3JtLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgeyBpc01vYmlsZSB9ID0gdXNlRGV2aWNlRGV0ZWN0KCk7XHJcbiAgY29uc3QgW3BpbmdPbiwgc2V0UGluZ10gPSB1c2VTdGF0ZShQSU5HX09GRik7XHJcbiAgY29uc3QgW3N1Ym1pdEJ1dHRvbk1lc3NhZ2UsIHNldFN1Ym1pdEJ1dHRvbk1lc3NhZ2VdID0gdXNlU3RhdGUoXHJcbiAgICBTVUJNSVRfREVGQVVMVF9NRVNTQUdFXHJcbiAgKTtcclxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0U3RhdHVzID0gKHN0YXR1c01lc3NhZ2UpID0+IHtcclxuICAgIHNldFN1Ym1pdEJ1dHRvbk1lc3NhZ2Uoc3RhdHVzTWVzc2FnZSk7XHJcbiAgICBpZiAoaXNNb2JpbGUpIHtcclxuICAgICAgc2V0UGluZyhQSU5HX09OKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IG5ldGxpZnlGb3JtU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpc01vYmlsZSAmJiBzdWJtaXRCdXR0b25NZXNzYWdlID09PSBTVUJNSVRfU1VDQ0VTU19NRVNTQUdFKSB7XHJcbiAgICAgIHNldFBpbmcoUElOR19PRkYpO1xyXG4gICAgICBjbG9zZUZvcm0oKTtcclxuICAgIH1cclxuICAgIGlmIChzdWJtaXRCdXR0b25NZXNzYWdlID09PSBTVUJNSVRfU1VDQ0VTU19NRVNTQUdFKSB7XHJcbiAgICAgIHJlZi5jdXJyZW50LnJlc2V0KCk7XHJcbiAgICAgIHJlbW92ZUlucXVpcnlJdGVtKFwiYWxsXCIpO1xyXG4gICAgICBzZXRTdWJtaXRCdXR0b25NZXNzYWdlKFNVQk1JVF9ERUZBVUxUX01FU1NBR0UpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoc3VibWl0QnV0dG9uTWVzc2FnZSA9PT0gU1VCTUlUX0VSUk9SX01FU1NBR0UpIHtcclxuICAgICAgc2V0U3VibWl0QnV0dG9uTWVzc2FnZShTVUJNSVRfREVGQVVMVF9NRVNTQUdFKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHJlZi5jdXJyZW50KTtcclxuICAgIGNvbnNvbGUubG9nKFwiPj5ERUJVRyA6IFwiLCBuZXcgVVJMU2VhcmNoUGFyYW1zKGZvcm1EYXRhKS50b1N0cmluZygpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGZldGNoKFwiL1wiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfSxcclxuICAgICAgICBib2R5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKGZvcm1EYXRhKS50b1N0cmluZygpLFxyXG4gICAgICB9KTtcclxuICAgICAgaGFuZGxlRm9ybVN1Ym1pdFN0YXR1cyhTVUJNSVRfU1VDQ0VTU19NRVNTQUdFKTtcclxuICAgICAgLy8gaXNNb2JpbGUgJiYgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIC8vICAgY2xvc2VGb3JtKClcclxuICAgICAgLy8gfSwgMTAwMCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBoYW5kbGVGb3JtU3VibWl0U3RhdHVzKFNVQk1JVF9FUlJPUl9NRVNTQUdFKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm1cclxuICAgICAgbmFtZT1cImNvbnRhY3RcIlxyXG4gICAgICBtZXRob2Q9XCJQT1NUXCJcclxuICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LW1kIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGxnOm15LWF1dG8gc2VsZWN0LW5vbmVcIlxyXG4gICAgICBkYXRhLW5ldGxpZnk9XCJ0cnVlXCJcclxuICAgICAgb25TdWJtaXQ9e25ldGxpZnlGb3JtU3VibWl0fVxyXG4gICAgICByZWY9e3JlZn1cclxuICAgID5cclxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybS1uYW1lXCIgdmFsdWU9XCJjb250YWN0XCI+PC9pbnB1dD5cclxuICAgICAgPElucXVpcnlJdGVtc0NvbnRhaW5lcj5cclxuICAgICAgICB7aW5xdWlyeUl0ZW1zLm1hcCgoaW5xdWlyeUl0ZW1JZCkgPT4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPElucXVpcnlJdGVtIGtleT17aW5xdWlyeUl0ZW1JZH0+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3ByaWNlTW9kZWxzTWFwW2lucXVpcnlJdGVtSWRdfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8Q2xvc2VcclxuICAgICAgICAgICAgICAgIHNpemU9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVJbnF1aXJ5SXRlbShpbnF1aXJ5SXRlbUlkKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0lucXVpcnlJdGVtPlxyXG4gICAgICAgICAgICA8SGlkZGVuTGFiZWwgaHRtbEZvcj17aW5xdWlyeUl0ZW1JZH0+XHJcbiAgICAgICAgICAgICAge3ByaWNlTW9kZWxzTWFwW2lucXVpcnlJdGVtSWRdfVxyXG4gICAgICAgICAgICA8L0hpZGRlbkxhYmVsPlxyXG4gICAgICAgICAgICA8SGlkZGVuSW5wdXRcclxuICAgICAgICAgICAgICBrZXk9e2Ake2lucXVpcnlJdGVtSWR9X2hgfVxyXG4gICAgICAgICAgICAgIG5hbWU9e2lucXVpcnlJdGVtSWR9XHJcbiAgICAgICAgICAgICAgaWQ9e2lucXVpcnlJdGVtSWR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9XCJpbnF1aXJpbmdcIlxyXG4gICAgICAgICAgICA+PC9IaWRkZW5JbnB1dD5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0lucXVpcnlJdGVtc0NvbnRhaW5lcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlciBiZy13aGl0ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ib2R5X193cmFwcGVyIHB4LTQgbWQ6cHgtMyBweS00IGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTYgZ3JpZC1jb2xzLTEyIGdhcC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tOFwiPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZnVsbF9uYW1lXCI+RnVsbCBuYW1lPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJmdWxsX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJmdWxsX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib25cIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMlwiPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZW1haWxfYWRkcmVzc1wiPkVtYWlsIGFkZHJlc3M8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsX2FkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbF9hZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9uXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTJcIj5cclxuICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIj5Ecm9wIHVzIGEgbGluZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPFRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgcm93cz1cIjNcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJmb3IgVHlrIGlucXVpcmllcyBhbmQgb3RoZXJzXCJcclxuICAgICAgICAgICAgICA+PC9UZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZm9vdGVyIHB4LTQgcHktMyBiZy1ncmF5LTUwIHRleHQtcmlnaHQgc206cHgtNiBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1idXR0b24td3JhcHBlciByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICA8U3VibWl0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBhcmlhLWxhYmVsPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAge3N1Ym1pdEJ1dHRvbk1lc3NhZ2V9XHJcbiAgICAgICAgICAgIDwvU3VibWl0QnV0dG9uPlxyXG4gICAgICAgICAgICA8UGluZyBvbj17cGluZ09ufSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9