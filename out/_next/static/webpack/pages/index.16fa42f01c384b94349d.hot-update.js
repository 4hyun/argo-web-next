webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Icons */ "./components/Icons/index.js");
/* harmony import */ var hooks_useDeviceDetect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hooks/useDeviceDetect */ "./hooks/useDeviceDetect.js");






var _jsxFileName = "C:\\Users\\4hyun\\Documents\\argo-web-next\\components\\Form.js",
    _this = undefined,
    _s = $RefreshSig$();





var InquiryItemsContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
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
var InquiryItem = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
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

var Label = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].label({
  "display": "block",
  "fontSize": "0.875rem",
  "lineHeight": "1.25rem",
  "fontWeight": "500",
  "--tw-text-opacity": "1",
  "color": "rgba(55, 65, 81, var(--tw-text-opacity))"
});

_c = Label;

var Input = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].input({
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

_c2 = Input;

var Textarea = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].textarea({
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

_c3 = Textarea;

var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button({
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

_c4 = SubmitButton;

var Ping = function Ping(_ref) {
  var on = _ref.on;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
    "class": "flex absolute h-3 w-3 top-1 right-1 -mt-1 -mr-1 ".concat(on ? "opacity-100" : "opacity-0"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
      "class": "animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
      "class": "relative inline-flex rounded-full h-3 w-3 bg-purple-500"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 3
  }, _this);
};

_c5 = Ping;
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
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();

  var _useDeviceDetect = Object(hooks_useDeviceDetect__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      isMobile = _useDeviceDetect.isMobile;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(PING_OFF),
      pingOn = _useState[0],
      setPing = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(SUBMIT_DEFAULT_MESSAGE),
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
    name: "contact",
    method: "POST",
    className: "bg-white shadow-md overflow-hidden rounded-md lg:my-auto select-none",
    "data-netlify": "true",
    onSubmit: netlifyFormSubmit,
    ref: ref,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
      type: "hidden",
      name: "form-name",
      value: "contact"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(InquiryItemsContainer, {
      children: [inquiryItems.map(function (inquiryItemId) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(InquiryItem, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            children: priceModelsMap[inquiryItemId]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(components_Icons__WEBPACK_IMPORTED_MODULE_6__["Close"], {
            size: "20",
            onClick: function onClick() {
              return removeInquiryItem(inquiryItemId);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, _this)]
        }, inquiryItemId, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, _this);
      }), Object.entries(priceModelsMap).map(function (_ref4) {
        var _ref5 = Object(C_Users_4hyun_Documents_argo_web_next_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, 2),
            inquiryItemId = _ref5[0],
            heading = _ref5[1];

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "hidden",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Label, {
            htmlFor: inquiryItemId,
            children: heading
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Input, {
            type: "hidden",
            name: inquiryItemId,
            id: inquiryItemId,
            value: inquiryItems.includes(inquiryItemId) ? "inquiry" : ""
          }, "".concat(inquiryItemId, "_h"), false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "outer bg-white",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "form-body__wrapper px-4 md:px-3 py-4 bg-white",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "grid lg:grid-cols-6 grid-cols-12 gap-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "col-span-8",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Label, {
              htmlFor: "full_name",
              children: "Full name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Input, {
              type: "text",
              name: "full_name",
              id: "full_name",
              autoComplete: "on",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "col-span-12",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Label, {
              htmlFor: "email_address",
              children: "Email address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Input, {
              type: "text",
              name: "email_address",
              id: "email_address",
              autoComplete: "on",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "col-span-12",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Label, {
              htmlFor: "message",
              children: "Drop us a line"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Textarea, {
              id: "message",
              name: "message",
              rows: "3",
              placeholder: "for Tyk inquiries and others"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "form-footer px-4 py-3 bg-gray-50 text-right sm:px-6 ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "form-button-wrapper relative",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(SubmitButton, {
            type: "submit",
            "aria-label": "submit",
            children: submitButtonMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Ping, {
            on: pingOn
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 5
  }, _this);
};

_s(Form, "mPri7oFdWOhdLJd20No3dh4k21A=", false, function () {
  return [hooks_useDeviceDetect__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c6 = Form;
/* harmony default export */ __webpack_exports__["default"] = (Form);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Label");
$RefreshReg$(_c2, "Input");
$RefreshReg$(_c3, "Textarea");
$RefreshReg$(_c4, "SubmitButton");
$RefreshReg$(_c5, "Ping");
$RefreshReg$(_c6, "Form");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbIklucXVpcnlJdGVtc0NvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIklucXVpcnlJdGVtIiwiTGFiZWwiLCJ0dyIsImxhYmVsIiwiSW5wdXQiLCJpbnB1dCIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJTdWJtaXRCdXR0b24iLCJidXR0b24iLCJQaW5nIiwib24iLCJTVUJNSVRfREVGQVVMVF9NRVNTQUdFIiwiU1VCTUlUX1NVQ0NFU1NfTUVTU0FHRSIsIlNVQk1JVF9FUlJPUl9NRVNTQUdFIiwiUElOR19PTiIsIlBJTkdfT0ZGIiwiRm9ybSIsImlucXVpcnlJdGVtcyIsInByaWNlTW9kZWxzTWFwIiwicmVtb3ZlSW5xdWlyeUl0ZW0iLCJjbG9zZUZvcm0iLCJyZWYiLCJ1c2VSZWYiLCJ1c2VEZXZpY2VEZXRlY3QiLCJpc01vYmlsZSIsInVzZVN0YXRlIiwicGluZ09uIiwic2V0UGluZyIsInN1Ym1pdEJ1dHRvbk1lc3NhZ2UiLCJzZXRTdWJtaXRCdXR0b25NZXNzYWdlIiwiaGFuZGxlRm9ybVN1Ym1pdFN0YXR1cyIsInN0YXR1c01lc3NhZ2UiLCJuZXRsaWZ5Rm9ybVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJyZXNldCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJjb25zb2xlIiwibG9nIiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwibWFwIiwiaW5xdWlyeUl0ZW1JZCIsIk9iamVjdCIsImVudHJpZXMiLCJoZWFkaW5nIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxxQkFBcUIsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxhQUNyQjtBQUFB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dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDbG9zZSB9IGZyb20gXCJjb21wb25lbnRzL0ljb25zXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xyXG5pbXBvcnQgdXNlRGV2aWNlRGV0ZWN0IGZyb20gXCJob29rcy91c2VEZXZpY2VEZXRlY3RcIjtcclxuXHJcbmNvbnN0IElucXVpcnlJdGVtc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2BmbGV4IGZsZXgtY29sIHB0LTQgcHgtNCBzcGFjZS15LTJgfVxyXG5gO1xyXG5jb25zdCBJbnF1aXJ5SXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgJHt0d2BmbGV4IHB5LTQgcGwtMyBwci0yIGZsZXgtZ3Jvdy0wIGl0ZW1zLWNlbnRlciByb3VuZGVkLWxnIHRleHQtd2hpdGUgZm9udC1ib2xkIHNwYWNlLXgtMmB9XHJcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDRweCAwcHggcmdiYSg1LCAyMTcsIDE4NywgMSk7XHJcbiAgaGVpZ2h0OiAyN3B4O1xyXG4gIGJhY2tncm91bmQ6ICMwNWQ5YmI7XHJcbmA7XHJcbmNvbnN0IExhYmVsID0gdHcubGFiZWxgYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwYDtcclxuXHJcbmNvbnN0IElucHV0ID0gdHcuaW5wdXRgbXQtMSBibG9jayB3LWZ1bGwgc2hhZG93LXNtIHNtOnRleHQtc20gYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB4LTIgcHktMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMGA7XHJcblxyXG5jb25zdCBUZXh0YXJlYSA9IHR3LnRleHRhcmVhYHNoYWRvdy1zbSBtdC0xIGJsb2NrIHctZnVsbCBzbTp0ZXh0LXNtIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBweC0yIHB5LTIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDBgO1xyXG5cclxuY29uc3QgU3VibWl0QnV0dG9uID0gdHcuYnV0dG9uYGlubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHNoYWRvdy1zbSB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBiZy1hcmdvLWJsdWUtNDAwIGhvdmVyOmJnLWluZGlnby03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCByb3VuZGVkLWZ1bGwgcmVsYXRpdmVgO1xyXG5cclxuY29uc3QgUGluZyA9ICh7IG9uIH0pID0+IChcclxuICA8c3BhblxyXG4gICAgY2xhc3M9e2BmbGV4IGFic29sdXRlIGgtMyB3LTMgdG9wLTEgcmlnaHQtMSAtbXQtMSAtbXItMSAke1xyXG4gICAgICBvbiA/IFwib3BhY2l0eS0xMDBcIiA6IFwib3BhY2l0eS0wXCJcclxuICAgIH1gfVxyXG4gID5cclxuICAgIDxzcGFuIGNsYXNzPVwiYW5pbWF0ZS1waW5nIGFic29sdXRlIGlubGluZS1mbGV4IGgtZnVsbCB3LWZ1bGwgcm91bmRlZC1mdWxsIGJnLXB1cnBsZS00MDAgb3BhY2l0eS03NVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwicmVsYXRpdmUgaW5saW5lLWZsZXggcm91bmRlZC1mdWxsIGgtMyB3LTMgYmctcHVycGxlLTUwMFwiPjwvc3Bhbj5cclxuICA8L3NwYW4+XHJcbik7XHJcblxyXG5jb25zdCBTVUJNSVRfREVGQVVMVF9NRVNTQUdFID0gXCJTZW5kXCI7XHJcbmNvbnN0IFNVQk1JVF9TVUNDRVNTX01FU1NBR0UgPSBcIk1lc3NhZ2UgU2VudCFcIjtcclxuY29uc3QgU1VCTUlUX0VSUk9SX01FU1NBR0UgPSBcIlBsZWFzZSBjbGljayB0byByZXRyeS5cIjtcclxuY29uc3QgUElOR19PTiA9IHRydWU7XHJcbmNvbnN0IFBJTkdfT0ZGID0gZmFsc2U7XHJcblxyXG5jb25zdCBGb3JtID0gKHtcclxuICBpbnF1aXJ5SXRlbXMsXHJcbiAgcHJpY2VNb2RlbHNNYXAsXHJcbiAgcmVtb3ZlSW5xdWlyeUl0ZW0sXHJcbiAgY2xvc2VGb3JtLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgeyBpc01vYmlsZSB9ID0gdXNlRGV2aWNlRGV0ZWN0KCk7XHJcbiAgY29uc3QgW3BpbmdPbiwgc2V0UGluZ10gPSB1c2VTdGF0ZShQSU5HX09GRik7XHJcbiAgY29uc3QgW3N1Ym1pdEJ1dHRvbk1lc3NhZ2UsIHNldFN1Ym1pdEJ1dHRvbk1lc3NhZ2VdID0gdXNlU3RhdGUoXHJcbiAgICBTVUJNSVRfREVGQVVMVF9NRVNTQUdFXHJcbiAgKTtcclxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0U3RhdHVzID0gKHN0YXR1c01lc3NhZ2UpID0+IHtcclxuICAgIHNldFN1Ym1pdEJ1dHRvbk1lc3NhZ2Uoc3RhdHVzTWVzc2FnZSk7XHJcbiAgICBpZiAoaXNNb2JpbGUpIHtcclxuICAgICAgc2V0UGluZyhQSU5HX09OKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IG5ldGxpZnlGb3JtU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpc01vYmlsZSAmJiBzdWJtaXRCdXR0b25NZXNzYWdlID09PSBTVUJNSVRfU1VDQ0VTU19NRVNTQUdFKSB7XHJcbiAgICAgIHNldFBpbmcoUElOR19PRkYpO1xyXG4gICAgICBjbG9zZUZvcm0oKTtcclxuICAgIH1cclxuICAgIGlmIChzdWJtaXRCdXR0b25NZXNzYWdlID09PSBTVUJNSVRfU1VDQ0VTU19NRVNTQUdFKSB7XHJcbiAgICAgIHJlZi5jdXJyZW50LnJlc2V0KCk7XHJcbiAgICAgIHJlbW92ZUlucXVpcnlJdGVtKFwiYWxsXCIpO1xyXG4gICAgICBzZXRTdWJtaXRCdXR0b25NZXNzYWdlKFNVQk1JVF9ERUZBVUxUX01FU1NBR0UpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoc3VibWl0QnV0dG9uTWVzc2FnZSA9PT0gU1VCTUlUX0VSUk9SX01FU1NBR0UpIHtcclxuICAgICAgc2V0U3VibWl0QnV0dG9uTWVzc2FnZShTVUJNSVRfREVGQVVMVF9NRVNTQUdFKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHJlZi5jdXJyZW50KTtcclxuICAgIGNvbnNvbGUubG9nKFwiPj5ERUJVRyA6IFwiLCBuZXcgVVJMU2VhcmNoUGFyYW1zKGZvcm1EYXRhKS50b1N0cmluZygpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGZldGNoKFwiL1wiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfSxcclxuICAgICAgICBib2R5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKGZvcm1EYXRhKS50b1N0cmluZygpLFxyXG4gICAgICB9KTtcclxuICAgICAgaGFuZGxlRm9ybVN1Ym1pdFN0YXR1cyhTVUJNSVRfU1VDQ0VTU19NRVNTQUdFKTtcclxuICAgICAgLy8gaXNNb2JpbGUgJiYgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIC8vICAgY2xvc2VGb3JtKClcclxuICAgICAgLy8gfSwgMTAwMCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBoYW5kbGVGb3JtU3VibWl0U3RhdHVzKFNVQk1JVF9FUlJPUl9NRVNTQUdFKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm1cclxuICAgICAgbmFtZT1cImNvbnRhY3RcIlxyXG4gICAgICBtZXRob2Q9XCJQT1NUXCJcclxuICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LW1kIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGxnOm15LWF1dG8gc2VsZWN0LW5vbmVcIlxyXG4gICAgICBkYXRhLW5ldGxpZnk9XCJ0cnVlXCJcclxuICAgICAgb25TdWJtaXQ9e25ldGxpZnlGb3JtU3VibWl0fVxyXG4gICAgICByZWY9e3JlZn1cclxuICAgID5cclxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybS1uYW1lXCIgdmFsdWU9XCJjb250YWN0XCI+PC9pbnB1dD5cclxuICAgICAgPElucXVpcnlJdGVtc0NvbnRhaW5lcj5cclxuICAgICAgICB7aW5xdWlyeUl0ZW1zLm1hcCgoaW5xdWlyeUl0ZW1JZCkgPT4gKFxyXG4gICAgICAgICAgPElucXVpcnlJdGVtIGtleT17aW5xdWlyeUl0ZW1JZH0+XHJcbiAgICAgICAgICAgIDxzcGFuPntwcmljZU1vZGVsc01hcFtpbnF1aXJ5SXRlbUlkXX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxDbG9zZSBzaXplPVwiMjBcIiBvbkNsaWNrPXsoKSA9PiByZW1vdmVJbnF1aXJ5SXRlbShpbnF1aXJ5SXRlbUlkKX0gLz5cclxuICAgICAgICAgIDwvSW5xdWlyeUl0ZW0+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAge09iamVjdC5lbnRyaWVzKHByaWNlTW9kZWxzTWFwKS5tYXAoKFtpbnF1aXJ5SXRlbUlkLCBoZWFkaW5nXSkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW5cIj5cclxuICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9e2lucXVpcnlJdGVtSWR9PntoZWFkaW5nfTwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgIGtleT17YCR7aW5xdWlyeUl0ZW1JZH1faGB9XHJcbiAgICAgICAgICAgICAgbmFtZT17aW5xdWlyeUl0ZW1JZH1cclxuICAgICAgICAgICAgICBpZD17aW5xdWlyeUl0ZW1JZH1cclxuICAgICAgICAgICAgICB2YWx1ZT17aW5xdWlyeUl0ZW1zLmluY2x1ZGVzKGlucXVpcnlJdGVtSWQpID8gXCJpbnF1aXJ5XCIgOiBcIlwifVxyXG4gICAgICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0lucXVpcnlJdGVtc0NvbnRhaW5lcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlciBiZy13aGl0ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ib2R5X193cmFwcGVyIHB4LTQgbWQ6cHgtMyBweS00IGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTYgZ3JpZC1jb2xzLTEyIGdhcC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tOFwiPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZnVsbF9uYW1lXCI+RnVsbCBuYW1lPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJmdWxsX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJmdWxsX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib25cIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMlwiPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZW1haWxfYWRkcmVzc1wiPkVtYWlsIGFkZHJlc3M8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsX2FkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbF9hZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9uXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTJcIj5cclxuICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIj5Ecm9wIHVzIGEgbGluZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPFRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgcm93cz1cIjNcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJmb3IgVHlrIGlucXVpcmllcyBhbmQgb3RoZXJzXCJcclxuICAgICAgICAgICAgICA+PC9UZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZm9vdGVyIHB4LTQgcHktMyBiZy1ncmF5LTUwIHRleHQtcmlnaHQgc206cHgtNiBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1idXR0b24td3JhcHBlciByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICA8U3VibWl0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBhcmlhLWxhYmVsPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAge3N1Ym1pdEJ1dHRvbk1lc3NhZ2V9XHJcbiAgICAgICAgICAgIDwvU3VibWl0QnV0dG9uPlxyXG4gICAgICAgICAgICA8UGluZyBvbj17cGluZ09ufSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9