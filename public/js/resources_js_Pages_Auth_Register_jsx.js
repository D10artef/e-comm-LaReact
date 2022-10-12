"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_Register_jsx"],{

/***/ "./resources/js/Components/Auth/Form.jsx":
/*!***********************************************!*\
  !*** ./resources/js/Components/Auth/Form.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormFooter": () => (/* binding */ FormFooter),
/* harmony export */   "FormHeader": () => (/* binding */ FormHeader),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var Form = function Form(_ref) {
  var header = _ref.header,
      children = _ref.children,
      footer = _ref.footer,
      handleSubmit = _ref.handleSubmit;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "overflow-hidden bg-white border-t-2 rounded shadow-xl px-10 py-8",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
      onSubmit: handleSubmit,
      children: [header, children, footer]
    })
  });
};

var FormHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref2) {
  var _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? 'Welcome' : _ref2$title,
      description = _ref2.description;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("header", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
      className: "text-2xl font-semibold text-center text-secondary",
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "text-center text-xs font-light mb-2 tracking-wide",
      children: description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "w-24 mx-auto mt-4 border-b-2 border-primary"
    })]
  });
});
var FormFooter = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("footer", {
    className: "flex items-center flex-col  justify-center mt-5",
    children: children && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "text-center text-xs text-gray-600 mt-3",
      children: children
    })
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./resources/js/Components/Logo.jsx":
/*!******************************************!*\
  !*** ./resources/js/Components/Logo.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var Logo = function Logo(_ref) {
  var _ref$textColor = _ref.textColor,
      textColor = _ref$textColor === void 0 ? 'text-primary' : _ref$textColor;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "px-4 font-semibold text-xl ".concat(textColor),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
      href: "/",
      className: "flex items-center justify-center before:content-[\"\\2AD3\"] before:inline-block before:text-accent",
      children: "E-commerce"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Logo));

/***/ }),

/***/ "./resources/js/Layout/AuthLayout.jsx":
/*!********************************************!*\
  !*** ./resources/js/Layout/AuthLayout.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Logo */ "./resources/js/Components/Logo.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var AuthLayout = function AuthLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "flex min-h-screen w-full justify-center items-center relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "absolute bottom-0 inset-x-0 blur-[0.5px] z-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1440 320",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
          fill: "#455569",
          fillOpacity: "1",
          d: "M0,224L0,64L36.9,64L36.9,96L73.8,96L73.8,320L110.8,320L110.8,96L147.7,96L147.7,160L184.6,160L184.6,96L221.5,96L221.5,96L258.5,96L258.5,128L295.4,128L295.4,160L332.3,160L332.3,224L369.2,224L369.2,224L406.2,224L406.2,128L443.1,128L443.1,256L480,256L480,192L516.9,192L516.9,224L553.8,224L553.8,64L590.8,64L590.8,64L627.7,64L627.7,32L664.6,32L664.6,288L701.5,288L701.5,32L738.5,32L738.5,64L775.4,64L775.4,128L812.3,128L812.3,160L849.2,160L849.2,288L886.2,288L886.2,96L923.1,96L923.1,128L960,128L960,224L996.9,224L996.9,256L1033.8,256L1033.8,96L1070.8,96L1070.8,192L1107.7,192L1107.7,0L1144.6,0L1144.6,64L1181.5,64L1181.5,224L1218.5,224L1218.5,288L1255.4,288L1255.4,160L1292.3,160L1292.3,160L1329.2,160L1329.2,192L1366.2,192L1366.2,32L1403.1,32L1403.1,256L1440,256L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "w-full max-w-sm mx-4 z-20",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("header", {
        className: "p-4 text-center text-gray-600 uppercase text-xl font-bold",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Components_Logo__WEBPACK_IMPORTED_MODULE_1__["default"], {
          color: "text-secondary"
        })
      }), children]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthLayout);

/***/ }),

/***/ "./resources/js/Pages/Auth/Register.jsx":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Auth/Register.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_AuthLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Layout/AuthLayout */ "./resources/js/Layout/AuthLayout.jsx");
/* harmony import */ var _Components_Auth_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Auth/Form */ "./resources/js/Components/Auth/Form.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var Register = function Register() {
  var header = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_Auth_Form__WEBPACK_IMPORTED_MODULE_2__.FormHeader, {
    description: "Join our community"
  });

  var footer = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Components_Auth_Form__WEBPACK_IMPORTED_MODULE_2__.FormFooter, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      className: "mr-1 inline-block",
      children: "Already have an account?"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.Link, {
      href: route('register'),
      className: "font-semibold cursor-pointer",
      children: "Sign in"
    })]
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.Head, {
      title: "Sign up"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Layout_AuthLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_Auth_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
        header: header,
        footer: footer,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("main", {})
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

/***/ })

}]);