webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
    "class": "flex absolute h-3 w-3 top-1 right-1 -mt-1 -mr-1 ".concat(on ? "opacity-100" : "opacity-0"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
      "class": "animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
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
    var _ref3 = Object(C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var formData;
      return C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
    name: "contact",
    method: "POST",
    className: "bg-white shadow-md overflow-hidden rounded-md lg:my-auto select-none",
    "data-netlify": "true",
    onSubmit: netlifyFormSubmit,
    ref: ref,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
      type: "hidden",
      name: "form-name",
      value: "contact"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(InquiryItemsContainer, {
      children: [inquiryItems.map(function (inquiryItemId) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(InquiryItem, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            children: priceModelsMap[inquiryItemId]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_Icons__WEBPACK_IMPORTED_MODULE_5__["Close"], {
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
      }), inquiryItems.map(function (inquiryItemId) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "hidden",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HiddenLabel, {
            htmlFor: inquiryItemId,
            children: priceModelsMap[inquiryItemId]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HiddenInput, {
            name: inquiryItemId,
            id: inquiryItemId,
            value: "inquiring"
          }, "".concat(inquiryItemId, "_h"), false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "outer bg-white",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "form-body__wrapper px-4 md:px-3 py-4 bg-white",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "grid lg:grid-cols-6 grid-cols-12 gap-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "col-span-8",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Label, {
              htmlFor: "full_name",
              children: "Full name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Input, {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "col-span-12",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Label, {
              htmlFor: "email_address",
              children: "Email address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Input, {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "col-span-12",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Label, {
              htmlFor: "message",
              children: "Drop us a line"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Textarea, {
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "form-footer px-4 py-3 bg-gray-50 text-right sm:px-6 ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "form-button-wrapper relative",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(SubmitButton, {
            type: "submit",
            "aria-label": "submit",
            children: submitButtonMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Ping, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbIklucXVpcnlJdGVtc0NvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIklucXVpcnlJdGVtIiwiTGFiZWwiLCJ0dyIsImxhYmVsIiwiSGlkZGVuTGFiZWwiLCJIaWRkZW5JbnB1dCIsImlucHV0IiwiSW5wdXQiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwiUGluZyIsIm9uIiwiU1VCTUlUX0RFRkFVTFRfTUVTU0FHRSIsIlNVQk1JVF9TVUNDRVNTX01FU1NBR0UiLCJTVUJNSVRfRVJST1JfTUVTU0FHRSIsIlBJTkdfT04iLCJQSU5HX09GRiIsIkZvcm0iLCJpbnF1aXJ5SXRlbXMiLCJwcmljZU1vZGVsc01hcCIsInJlbW92ZUlucXVpcnlJdGVtIiwiY2xvc2VGb3JtIiwicmVmIiwidXNlUmVmIiwidXNlRGV2aWNlRGV0ZWN0IiwiaXNNb2JpbGUiLCJ1c2VTdGF0ZSIsInBpbmdPbiIsInNldFBpbmciLCJzdWJtaXRCdXR0b25NZXNzYWdlIiwic2V0U3VibWl0QnV0dG9uTWVzc2FnZSIsImhhbmRsZUZvcm1TdWJtaXRTdGF0dXMiLCJzdGF0dXNNZXNzYWdlIiwibmV0bGlmeUZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwicmVzZXQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiY29uc29sZSIsImxvZyIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIm1hcCIsImlucXVpcnlJdGVtSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEscUJBQXFCLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsYUFDckI7QUFBQTtBQUFBO0FBQUE7QUFB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dXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2xvc2UgfSBmcm9tIFwiY29tcG9uZW50cy9JY29uc1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcclxuaW1wb3J0IHVzZURldmljZURldGVjdCBmcm9tIFwiaG9va3MvdXNlRGV2aWNlRGV0ZWN0XCI7XHJcblxyXG5jb25zdCBJbnF1aXJ5SXRlbXNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICR7dHdgZmxleCBmbGV4LWNvbCBwdC00IHB4LTQgc3BhY2UteS0yYH1cclxuYDtcclxuY29uc3QgSW5xdWlyeUl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gICR7dHdgZmxleCBweS00IHBsLTMgcHItMiBmbGV4LWdyb3ctMCBpdGVtcy1jZW50ZXIgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBzcGFjZS14LTJgfVxyXG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCA0cHggMHB4IHJnYmEoNSwgMjE3LCAxODcsIDEpO1xyXG4gIGhlaWdodDogMjdweDtcclxuICBiYWNrZ3JvdW5kOiAjMDVkOWJiO1xyXG5gO1xyXG5jb25zdCBMYWJlbCA9IHR3LmxhYmVsYGJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMGA7XHJcbmNvbnN0IEhpZGRlbkxhYmVsID0gdHcoTGFiZWwpYGA7XHJcblxyXG5jb25zdCBIaWRkZW5JbnB1dCA9IHR3LmlucHV0YGA7XHJcblxyXG5jb25zdCBJbnB1dCA9IHR3LmlucHV0YG10LTEgYmxvY2sgdy1mdWxsIHNoYWRvdy1zbSBzbTp0ZXh0LXNtIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBweC0yIHB5LTIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDBgO1xyXG5cclxuY29uc3QgVGV4dGFyZWEgPSB0dy50ZXh0YXJlYWBzaGFkb3ctc20gbXQtMSBibG9jayB3LWZ1bGwgc206dGV4dC1zbSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcHgtMiBweS0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwYDtcclxuXHJcbmNvbnN0IFN1Ym1pdEJ1dHRvbiA9IHR3LmJ1dHRvbmBpbmxpbmUtZmxleCBqdXN0aWZ5LWNlbnRlciBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBzaGFkb3ctc20gdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYmctYXJnby1ibHVlLTQwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDAgcm91bmRlZC1mdWxsIHJlbGF0aXZlYDtcclxuXHJcbmNvbnN0IFBpbmcgPSAoeyBvbiB9KSA9PiAoXHJcbiAgPHNwYW5cclxuICAgIGNsYXNzPXtgZmxleCBhYnNvbHV0ZSBoLTMgdy0zIHRvcC0xIHJpZ2h0LTEgLW10LTEgLW1yLTEgJHtcclxuICAgICAgb24gPyBcIm9wYWNpdHktMTAwXCIgOiBcIm9wYWNpdHktMFwiXHJcbiAgICB9YH1cclxuICA+XHJcbiAgICA8c3BhbiBjbGFzcz1cImFuaW1hdGUtcGluZyBhYnNvbHV0ZSBpbmxpbmUtZmxleCBoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtZnVsbCBiZy1wdXJwbGUtNDAwIG9wYWNpdHktNzVcIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlbGF0aXZlIGlubGluZS1mbGV4IHJvdW5kZWQtZnVsbCBoLTMgdy0zIGJnLXB1cnBsZS01MDBcIj48L3NwYW4+XHJcbiAgPC9zcGFuPlxyXG4pO1xyXG5cclxuY29uc3QgU1VCTUlUX0RFRkFVTFRfTUVTU0FHRSA9IFwiU2VuZFwiO1xyXG5jb25zdCBTVUJNSVRfU1VDQ0VTU19NRVNTQUdFID0gXCJNZXNzYWdlIFNlbnQhXCI7XHJcbmNvbnN0IFNVQk1JVF9FUlJPUl9NRVNTQUdFID0gXCJQbGVhc2UgY2xpY2sgdG8gcmV0cnkuXCI7XHJcbmNvbnN0IFBJTkdfT04gPSB0cnVlO1xyXG5jb25zdCBQSU5HX09GRiA9IGZhbHNlO1xyXG5cclxuY29uc3QgRm9ybSA9ICh7XHJcbiAgaW5xdWlyeUl0ZW1zLFxyXG4gIHByaWNlTW9kZWxzTWFwLFxyXG4gIHJlbW92ZUlucXVpcnlJdGVtLFxyXG4gIGNsb3NlRm9ybSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHsgaXNNb2JpbGUgfSA9IHVzZURldmljZURldGVjdCgpO1xyXG4gIGNvbnN0IFtwaW5nT24sIHNldFBpbmddID0gdXNlU3RhdGUoUElOR19PRkYpO1xyXG4gIGNvbnN0IFtzdWJtaXRCdXR0b25NZXNzYWdlLCBzZXRTdWJtaXRCdXR0b25NZXNzYWdlXSA9IHVzZVN0YXRlKFxyXG4gICAgU1VCTUlUX0RFRkFVTFRfTUVTU0FHRVxyXG4gICk7XHJcbiAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdFN0YXR1cyA9IChzdGF0dXNNZXNzYWdlKSA9PiB7XHJcbiAgICBzZXRTdWJtaXRCdXR0b25NZXNzYWdlKHN0YXR1c01lc3NhZ2UpO1xyXG4gICAgaWYgKGlzTW9iaWxlKSB7XHJcbiAgICAgIHNldFBpbmcoUElOR19PTik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBuZXRsaWZ5Rm9ybVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoaXNNb2JpbGUgJiYgc3VibWl0QnV0dG9uTWVzc2FnZSA9PT0gU1VCTUlUX1NVQ0NFU1NfTUVTU0FHRSkge1xyXG4gICAgICBzZXRQaW5nKFBJTkdfT0ZGKTtcclxuICAgICAgY2xvc2VGb3JtKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3VibWl0QnV0dG9uTWVzc2FnZSA9PT0gU1VCTUlUX1NVQ0NFU1NfTUVTU0FHRSkge1xyXG4gICAgICByZWYuY3VycmVudC5yZXNldCgpO1xyXG4gICAgICByZW1vdmVJbnF1aXJ5SXRlbShcImFsbFwiKTtcclxuICAgICAgc2V0U3VibWl0QnV0dG9uTWVzc2FnZShTVUJNSVRfREVGQVVMVF9NRVNTQUdFKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHN1Ym1pdEJ1dHRvbk1lc3NhZ2UgPT09IFNVQk1JVF9FUlJPUl9NRVNTQUdFKSB7XHJcbiAgICAgIHNldFN1Ym1pdEJ1dHRvbk1lc3NhZ2UoU1VCTUlUX0RFRkFVTFRfTUVTU0FHRSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShyZWYuY3VycmVudCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIj4+REVCVUcgOiBcIiwgbmV3IFVSTFNlYXJjaFBhcmFtcyhmb3JtRGF0YSkudG9TdHJpbmcoKSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBmZXRjaChcIi9cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIH0sXHJcbiAgICAgICAgYm9keTogbmV3IFVSTFNlYXJjaFBhcmFtcyhmb3JtRGF0YSkudG9TdHJpbmcoKSxcclxuICAgICAgfSk7XHJcbiAgICAgIGhhbmRsZUZvcm1TdWJtaXRTdGF0dXMoU1VCTUlUX1NVQ0NFU1NfTUVTU0FHRSk7XHJcbiAgICAgIC8vIGlzTW9iaWxlICYmIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAvLyAgIGNsb3NlRm9ybSgpXHJcbiAgICAgIC8vIH0sIDEwMDApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaGFuZGxlRm9ybVN1Ym1pdFN0YXR1cyhTVUJNSVRfRVJST1JfTUVTU0FHRSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtXHJcbiAgICAgIG5hbWU9XCJjb250YWN0XCJcclxuICAgICAgbWV0aG9kPVwiUE9TVFwiXHJcbiAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1tZCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBsZzpteS1hdXRvIHNlbGVjdC1ub25lXCJcclxuICAgICAgZGF0YS1uZXRsaWZ5PVwidHJ1ZVwiXHJcbiAgICAgIG9uU3VibWl0PXtuZXRsaWZ5Rm9ybVN1Ym1pdH1cclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICA+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZvcm0tbmFtZVwiIHZhbHVlPVwiY29udGFjdFwiPjwvaW5wdXQ+XHJcbiAgICAgIDxJbnF1aXJ5SXRlbXNDb250YWluZXI+XHJcbiAgICAgICAge2lucXVpcnlJdGVtcy5tYXAoKGlucXVpcnlJdGVtSWQpID0+IChcclxuICAgICAgICAgIDxJbnF1aXJ5SXRlbSBrZXk9e2lucXVpcnlJdGVtSWR9PlxyXG4gICAgICAgICAgICA8c3Bhbj57cHJpY2VNb2RlbHNNYXBbaW5xdWlyeUl0ZW1JZF19PC9zcGFuPlxyXG4gICAgICAgICAgICA8Q2xvc2Ugc2l6ZT1cIjIwXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlSW5xdWlyeUl0ZW0oaW5xdWlyeUl0ZW1JZCl9IC8+XHJcbiAgICAgICAgICA8L0lucXVpcnlJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHtpbnF1aXJ5SXRlbXMubWFwKChpbnF1aXJ5SXRlbUlkKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlblwiPlxyXG4gICAgICAgICAgICA8SGlkZGVuTGFiZWwgaHRtbEZvcj17aW5xdWlyeUl0ZW1JZH0+XHJcbiAgICAgICAgICAgICAge3ByaWNlTW9kZWxzTWFwW2lucXVpcnlJdGVtSWRdfVxyXG4gICAgICAgICAgICA8L0hpZGRlbkxhYmVsPlxyXG4gICAgICAgICAgICA8SGlkZGVuSW5wdXRcclxuICAgICAgICAgICAgICBrZXk9e2Ake2lucXVpcnlJdGVtSWR9X2hgfVxyXG4gICAgICAgICAgICAgIG5hbWU9e2lucXVpcnlJdGVtSWR9XHJcbiAgICAgICAgICAgICAgaWQ9e2lucXVpcnlJdGVtSWR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9XCJpbnF1aXJpbmdcIlxyXG4gICAgICAgICAgICA+PC9IaWRkZW5JbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0lucXVpcnlJdGVtc0NvbnRhaW5lcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlciBiZy13aGl0ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ib2R5X193cmFwcGVyIHB4LTQgbWQ6cHgtMyBweS00IGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTYgZ3JpZC1jb2xzLTEyIGdhcC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tOFwiPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZnVsbF9uYW1lXCI+RnVsbCBuYW1lPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJmdWxsX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJmdWxsX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib25cIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMlwiPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZW1haWxfYWRkcmVzc1wiPkVtYWlsIGFkZHJlc3M8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsX2FkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbF9hZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9uXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTJcIj5cclxuICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIj5Ecm9wIHVzIGEgbGluZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPFRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgcm93cz1cIjNcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJmb3IgVHlrIGlucXVpcmllcyBhbmQgb3RoZXJzXCJcclxuICAgICAgICAgICAgICA+PC9UZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZm9vdGVyIHB4LTQgcHktMyBiZy1ncmF5LTUwIHRleHQtcmlnaHQgc206cHgtNiBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1idXR0b24td3JhcHBlciByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICA8U3VibWl0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBhcmlhLWxhYmVsPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAge3N1Ym1pdEJ1dHRvbk1lc3NhZ2V9XHJcbiAgICAgICAgICAgIDwvU3VibWl0QnV0dG9uPlxyXG4gICAgICAgICAgICA8UGluZyBvbj17cGluZ09ufSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9