(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Services_jsx"],{

/***/ "./resources/js/Components/FormAndButton/Input.js":
/*!********************************************************!*\
  !*** ./resources/js/Components/FormAndButton/Input.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileInput": () => (/* binding */ FileInput),
/* harmony export */   "SearchForm": () => (/* binding */ SearchForm),
/* harmony export */   "TextAreaInput": () => (/* binding */ TextAreaInput),
/* harmony export */   "TextInput": () => (/* binding */ TextInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon */ "./resources/js/Components/Icon.jsx");
/* harmony import */ var _HOOKS_useFormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HOOKS/useFormField */ "./resources/js/Components/HOOKS/useFormField.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["label", "name", "className", "errors", "placeholder", "showError", "value"],
    _excluded2 = ["label", "name", "className", "errors", "value"];

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var TextInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref) {
  var label = _ref.label,
      name = _ref.name,
      className = _ref.className,
      _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? [] : _ref$errors,
      placeholder = _ref.placeholder,
      _ref$showError = _ref.showError,
      showError = _ref$showError === void 0 ? true : _ref$showError,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, _excluded);

  var inputClass = classnames__WEBPACK_IMPORTED_MODULE_3___default()('form-input', {
    'error': errors.length > 0 && showError
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: className,
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
      className: "form-label",
      htmlFor: name,
      children: [label, " :"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", _objectSpread(_objectSpread({
      id: name,
      name: name,
      value: value
    }, props), {}, {
      className: inputClass,
      placeholder: placeholder // className={`form-input ${errors.length ? "error" : ""}`}

    })), showError && errors && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "form-error",
      children: errors
    })]
  });
});
var TextAreaInput = function TextAreaInput(_ref2) {
  var label = _ref2.label,
      name = _ref2.name,
      className = _ref2.className,
      _ref2$errors = _ref2.errors,
      errors = _ref2$errors === void 0 ? [] : _ref2$errors,
      value = _ref2.value,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: className,
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
      className: "form-label",
      htmlFor: name,
      children: [label, " :"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("textarea", _objectSpread(_objectSpread({
      id: name,
      name: name,
      value: value,
      rows: 4
    }, props), {}, {
      className: "form-textarea ".concat(errors.length ? "error" : "", " resize-none")
    })), errors && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "form-error",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        children: errors
      })
    })]
  });
};
var SearchForm = function SearchForm(_ref3) {
  var children = _ref3.children,
      onSearch = _ref3.onSearch;

  var _useFormInput = (0,_HOOKS_useFormField__WEBPACK_IMPORTED_MODULE_2__.useFormInput)({
    search: ""
  }),
      _useFormInput2 = _slicedToArray(_useFormInput, 2),
      searchText = _useFormInput2[0],
      handleSearchChange = _useFormInput2[1];

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    onSearch(searchText.search);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("form", {
    className: "w-full",
    onSubmit: handleSubmit,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex border border-gray-300 rounded p-2 items-center overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
        htmlFor: "search",
        className: "text-my-neutral",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
          name: "search",
          className: "w-5 h-5 fill-current"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
        type: "search",
        id: "search",
        name: "search",
        value: searchText.search,
        onChange: handleSearchChange,
        className: "text-dark placeholder:font-light focus:outline-none ml-2 text-sm bg-transparent w-full",
        placeholder: children
      })]
    })
  });
};
var FileInput = function FileInput(_ref4) {
  var className = _ref4.className,
      text = _ref4.text,
      name = _ref4.name,
      file = _ref4.file,
      handleChange = _ref4.handleChange,
      clearFile = _ref4.clearFile,
      errors = _ref4.errors;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "my-6",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex items-center text-sm ".concat(className),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
        className: "flex flex-none justify-center items-center px-3 py-2 gap-x-2 hover:bg-primary hover:text-gray-100 bg-secondary duration-300 text-white rounded-sm cursor-pointer",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "text-sm",
          children: text
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
          className: "hidden",
          type: "file",
          name: name,
          onChange: handleChange,
          accept: "image/*"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "flex w-full justify-between items-center gap-x-2 px-3 py-2 border text-gray-600 truncate",
        children: file ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "truncate",
            children: file.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
            name: "x-close",
            className: "w-4 h-4",
            onClick: clearFile
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "overflow-hidden whitespace-nowrap",
          children: "No file selected"
        })
      })]
    }), errors && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "form-error",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        children: errors
      })
    })]
  });
};

/***/ }),

/***/ "./resources/js/Components/HOOKS/useFormField.js":
/*!*******************************************************!*\
  !*** ./resources/js/Components/HOOKS/useFormField.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFormInput": () => (/* binding */ useFormInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useFormInput(initialState) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      fields = _useState2[0],
      setValues = _useState2[1];

  return [fields, function (event) {
    var name = event.target.name;
    var value;
    if (event.target.type === "checkbox") value = event.target.checked;else if (event.target.type === "file") value = event.target.files[0];else value = event.target.value;
    setValues(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, value));
    });
  }];
}

/***/ }),

/***/ "./resources/js/Components/Home/Offer/illustrationSrc.js":
/*!***************************************************************!*\
  !*** ./resources/js/Components/Home/Offer/illustrationSrc.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultOfferIllustrationSrc": () => (/* binding */ defaultOfferIllustrationSrc),
/* harmony export */   "defaultServiceIllustrationSrc": () => (/* binding */ defaultServiceIllustrationSrc)
/* harmony export */ });
var defaultOfferIllustrationSrc = ["./images/illustrations/sale_12_12bro.svg", "./images/illustrations/valentine_s_bouquet.svg", "./images/illustrations/retail_markdown_amico.svg", "./images/illustrations/retail_markdown_bro.svg", "./images/illustrations/happy_birthday_gift.svg"];
var defaultServiceIllustrationSrc = ["./images/illustrations/delivry_bro.svg", "./images/illustrations/qa_engineers.svg", "./images/illustrations/one_service_24_7.svg", "./images/illustrations/privacy_policy.svg"];

/***/ }),

/***/ "./resources/js/Components/Icon.jsx":
/*!******************************************!*\
  !*** ./resources/js/Components/Icon.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["name", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Icon = function Icon(_ref) {
  var name = _ref.name,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "h-5 w-5" : _ref$className,
      props = _objectWithoutProperties(_ref, _excluded);

  if (name === 'cart') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      })
    }));
  }

  if (name === 'chevron-down') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        fillRule: "evenodd",
        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
        clipRule: "evenodd"
      })
    }));
  }

  if (name === 'chevron-left') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        fillRule: "evenodd",
        d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
        clipRule: "evenodd"
      })
    }));
  }

  if (name === 'chevron-right') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        fillRule: "evenodd",
        d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
        clipRule: "evenodd"
      })
    }));
  }

  if (name === 'chevron-up') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        fillRule: "evenodd",
        d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
        clipRule: "evenodd"
      })
    }));
  }

  if (name === 'search') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      viewBox: "0 0 20 20"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      })
    }));
  }

  if (name === 'user') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      })
    }));
  }

  if (name === 'burger') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M4 6h16M4 12h16M4 18h16"
      })
    }));
  }

  if (name === 'heart') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      })
    }));
  }

  if (name === 'shopping-cart') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      })
    }));
  }

  if (name === 'x-close') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        fillRule: "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        clipRule: "evenodd"
      })
    }));
  }

  if (name === 'check') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      })
    }));
  }

  if (name === 'check-circle') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      })
    }));
  }

  if (name === 'simple-check') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M5 13l4 4L19 7"
      })
    }));
  }

  if (name === 'shield-exclamation') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
      })
    }));
  }

  if (name === 'x-circle') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      })
    }));
  }

  if (name === 'plus-circle') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      })
    }));
  }

  if (name === 'minus-circle') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      })
    }));
  }

  if (name === 'collection') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      })
    }));
  }

  if (name === 'view-board') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
      })
    }));
  }

  if (name === 'ticket') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
      })
    }));
  }

  if (name === 'receipt-tax') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
      })
    }));
  }

  if (name === 'template') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
      })
    }));
  }

  if (name === 'facebook-square') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      stroke: "currentColor",
      className: className,
      fill: "currentColor",
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        fillRule: "evenodd",
        d: "M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,23.00025 C0,23.55225 0.44775,24 1.0005,24 L12.75,24 L12.75,15 L9.75,15 L9.75,11.25 L12.75,11.25 L12.75,8.25 C12.75,5.15025 14.71275,3.62475 17.478,3.62475 C18.8025,3.62475 19.941,3.72375 20.2725,3.76725 L20.2725,7.00725 L18.35475,7.008 C16.851,7.008 16.5,7.72275 16.5,8.77125 L16.5,11.25 L20.25,11.25 L19.5,15 L16.5,15 L16.56,24 L23.00025,24 C23.55225,24 24,23.55225 24,23.00025 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0"
      })
    }));
  }

  if (name === 'facebook') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      stroke: "currentColor",
      fill: "currentColor",
      className: className,
      strokeWidth: "0",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        fillRule: "evenodd",
        d: "M9.94474914,22 L9.94474914,13.1657526 L7,13.1657526 L7,9.48481614 L9.94474914,9.48481614 L9.94474914,6.54006699 C9.94474914,3.49740494 11.8713513,2 14.5856738,2 C15.8857805,2 17.0033128,2.09717672 17.3287076,2.13987558 L17.3287076,5.32020466 L15.4462767,5.32094085 C13.9702212,5.32094085 13.6256856,6.02252733 13.6256856,7.05171716 L13.6256856,9.48481614 L17.306622,9.48481614 L16.5704347,13.1657526 L13.6256856,13.1657526 L13.6845806,22"
      })
    }));
  }

  if (name === 'twitter') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      stroke: "currentColor",
      fill: "currentColor",
      className: className,
      strokeWidth: 0,
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        fillRule: "evenodd",
        d: "M24,4.3086 C23.117,4.7006 22.168,4.9646 21.172,5.0836 C22.188,4.4746 22.969,3.5096 23.337,2.3596 C22.386,2.9246 21.332,3.3336 20.21,3.5556 C19.312,2.5976 18.032,1.9996 16.616,1.9996 C13.897,1.9996 11.692,4.2046 11.692,6.9236 C11.692,7.3096 11.736,7.6856 11.82,8.0456 C7.728,7.8406 4.099,5.8806 1.671,2.9006 C1.247,3.6286 1.004,4.4736 1.004,5.3766 C1.004,7.0846 1.873,8.5926 3.195,9.4756 C2.388,9.4486 1.628,9.2276 0.964,8.8596 L0.964,8.9206 C0.964,11.3066 2.661,13.2966 4.914,13.7486 C4.501,13.8626 4.065,13.9216 3.617,13.9216 C3.299,13.9216 2.991,13.8906 2.69,13.8336 C3.317,15.7896 5.135,17.2136 7.29,17.2536 C5.604,18.5736 3.481,19.3606 1.175,19.3606 C0.777,19.3606 0.385,19.3376 0,19.2926 C2.179,20.6886 4.767,21.5046 7.548,21.5046 C16.605,21.5046 21.557,14.0016 21.557,7.4946 C21.557,7.2816 21.552,7.0696 21.543,6.8586 C22.505,6.1636 23.34,5.2966 24,4.3086"
      })
    }));
  }

  if (name === 'mail') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      stroke: "currentColor",
      fill: "currentColor",
      className: className,
      strokeWidth: "0",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        fillRule: "evenodd",
        d: "M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z"
      })
    }));
  }

  if (name === 'trash') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      })
    }));
  }

  if (name === 'chevron-double-right') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M13 5l7 7-7 7M5 5l7 7-7 7"
      })
    }));
  }

  if (name === 'setting') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      })]
    }));
  }

  if (name === 'logout') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      })
    }));
  }

  if (name === 'login') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
      })
    }));
  }

  if (name === 'pencil-alt') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      })
    }));
  }

  if (name === 'switch-vertical') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
      })
    }));
  }

  if (name === 'library') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
      })
    }));
  }

  if (name === 'mobile-phone') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      })
    }));
  }

  if (name === 'phone') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      })
    }));
  }

  if (name === 'location-marker') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      })]
    }));
  }

  if (name === 'credit-card') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      })
    }));
  }

  if (name === 'lightning-bolt') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M13 10V3L4 14h7v7l9-11h-7z"
      })
    }));
  }

  if (name === 'color-swatch') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      })
    }));
  }

  if (name === 'sparkles') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      })
    }));
  }

  if (name === 'plus') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M12 4v16m8-8H4"
      })
    }));
  }

  if (name === 'plus-sm') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
      })
    }));
  }

  if (name === 'minus') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M20 12H4"
      })
    }));
  }

  if (name === 'minus-sm') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M18 12H6"
      })
    }));
  }

  if (name === 'cash') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
      })
    }));
  }

  if (name === 'truck') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      className: className
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
      })
    }));
  }

  if (name === 'banknotes') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      className: className
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
      })
    }));
  }

  if (name === 'gift') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      className: className,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
      })
    }));
  }

  return null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./resources/js/Components/Logo.jsx":
/*!******************************************!*\
  !*** ./resources/js/Components/Logo.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
      className: "flex items-center justify-center before:content-[\"\\2AD3\"] before:inline-block before:text-accent before:text-[2.2rem]",
      children: "E-commerce"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Logo));

/***/ }),

/***/ "./resources/js/Components/MemoLink.jsx":
/*!**********************************************!*\
  !*** ./resources/js/Components/MemoLink.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var MemoLink = function MemoLink(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(MemoLink));

/***/ }),

/***/ "./resources/js/Components/NavigationAndMenu/Footer.jsx":
/*!**************************************************************!*\
  !*** ./resources/js/Components/NavigationAndMenu/Footer.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logo */ "./resources/js/Components/Logo.jsx");
/* harmony import */ var _MemoLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MemoLink */ "./resources/js/Components/MemoLink.jsx");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon */ "./resources/js/Components/Icon.jsx");
/* harmony import */ var _navigationMenus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigationMenus */ "./resources/js/Components/NavigationAndMenu/navigationMenus.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var Footer = function Footer() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "w-full bg-secondary p-4  text-white gap-x-6",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex items-center jusitfy-items-center sm:justify-between flex-col sm:flex-row gap-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Logo__WEBPACK_IMPORTED_MODULE_1__["default"], {
        textColor: "text-white"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul", {
        className: "flex flex-wrap justify-center items-center mb-3 gap-8 text-sm font-light text-white sm:mb-0",
        children: _navigationMenus__WEBPACK_IMPORTED_MODULE_4__.menus.length > 0 && _navigationMenus__WEBPACK_IMPORTED_MODULE_4__.menus.map(function (menu) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_MemoLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
              href: menu.link,
              className: "hover:underline hover:text-gray-100",
              children: menu.text
            })
          }, menu.text);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "mt-4 mb-2 border-b border-gray-50 border-opacity-20 sm:mx-auto"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex items-center justify-center gap-x-6 py-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        className: "text-xs text-neutral-200 sm:text-center",
        children: "\xA9 2022 - ArisD"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex space-x-6 justify-center items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
          href: "#",
          className: "text-gray-200 hover:text-white",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "w-5 h-5",
            name: "facebook"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "sr-only",
            children: "Page Facebook"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
          href: "#",
          className: "text-gray-200 hover:text-white",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
            name: "twitter",
            className: "w-5 h-5"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "sr-only",
            children: "Page Twitter"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
          href: "#",
          className: "text-gray-200 hover:text-white",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
            name: "mail",
            className: "w-5 h-5"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "sr-only",
            children: "Contact email"
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Footer));

/***/ }),

/***/ "./resources/js/Components/NavigationAndMenu/MiddleNavigationBar.jsx":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/NavigationAndMenu/MiddleNavigationBar.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MiddleNavigationMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MiddleNavigationMenuItem */ "./resources/js/Components/NavigationAndMenu/MiddleNavigationMenuItem.jsx");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon */ "./resources/js/Components/Icon.jsx");
/* harmony import */ var _FormAndButton_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FormAndButton/Input */ "./resources/js/Components/FormAndButton/Input.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var MiddleNavigationBar = function MiddleNavigationBar(_ref) {
  var menus = _ref.menus;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      openMenu = _useState2[0],
      setOpenMenu = _useState2[1];

  var toggleMenu = function toggleMenu() {
    setOpenMenu(!openMenu);
  };

  var hanldeSearch = function hanldeSearch(search) {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__.Inertia.get(route('products'), {
      search: search
    }, {
      only: ['products'],
      preserveScroll: true
    });
  };

  var menuView = menus.length > 0 && menus.map(function (menu) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_MiddleNavigationMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      text: menu.text,
      link: menu.link,
      active: menu.active
    }, menu.text);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex justify-between items-center text-sm mx-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "md:flex hidden gap-x-8 lg:gap-x-10 items-center",
        children: menuView
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "max-w-sm lg:max-w-md flex-1",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FormAndButton_Input__WEBPACK_IMPORTED_MODULE_3__.SearchForm, {
          onSearch: hanldeSearch,
          children: "Find your product..."
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "md:hidden flex items-center cursor-pointer p-1 border rounded-sm ml-3 text-my-neutral border-my-neutral",
        onClick: toggleMenu,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "sr-only",
          children: "Menu"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          name: "burger",
          className: "w-6 h-6 fill-current cursor-pointer"
        })]
      })]
    }), openMenu && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "p-3 flex flex-col md:hidden gap-y-5 ",
      children: menuView
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(MiddleNavigationBar));

/***/ }),

/***/ "./resources/js/Components/NavigationAndMenu/MiddleNavigationMenuItem.jsx":
/*!********************************************************************************!*\
  !*** ./resources/js/Components/NavigationAndMenu/MiddleNavigationMenuItem.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MemoLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MemoLink */ "./resources/js/Components/MemoLink.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var MiddleNavigationMenuItem = function MiddleNavigationMenuItem(_ref) {
  var active = _ref.active,
      link = _ref.link,
      text = _ref.text;
  var className = active ? 'text-accent ' : 'text-dark';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
    className: "inline-block",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_MemoLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: link,
      className: "flex items-center hover:text-accent ".concat(className),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: "text-sm font-medium first-letter:uppercase",
        children: text
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(MiddleNavigationMenuItem, function (prev, next) {
  if (prev.active === next.active && prev.link === next.link && prev.text === next.text) return true;
  return false;
}));

/***/ }),

/***/ "./resources/js/Components/NavigationAndMenu/NavigationBar.jsx":
/*!*********************************************************************!*\
  !*** ./resources/js/Components/NavigationAndMenu/NavigationBar.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TopNavigationBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNavigationBar */ "./resources/js/Components/NavigationAndMenu/TopNavigationBar.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _navigationMenus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigationMenus */ "./resources/js/Components/NavigationAndMenu/navigationMenus.js");
/* harmony import */ var _MiddleNavigationBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MiddleNavigationBar */ "./resources/js/Components/NavigationAndMenu/MiddleNavigationBar.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var NavigationBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (props, ref) {
  var url = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.usePage)().url;

  var isMenuActive = function isMenuActive(link) {
    return url.startsWith(link);
  };

  var menuNavList = _navigationMenus__WEBPACK_IMPORTED_MODULE_3__.menus.length > 0 && _navigationMenus__WEBPACK_IMPORTED_MODULE_3__.menus.map(function (menu) {
    return _objectSpread({
      active: isMenuActive(menu.rawRoute)
    }, menu);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("nav", {
      ref: ref,
      className: "fixed top-0 inset-x-0 bg-light px-1 sm:px-3 py-3 text-dark shadow-indigo-100 shadow-md border-b z-20",
      id: "navigation_bar",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_TopNavigationBar__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("hr", {
        className: "border-neutral-200 border-t m-4"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_MiddleNavigationBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        menus: menuNavList
      })]
    })
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationBar);

/***/ }),

/***/ "./resources/js/Components/NavigationAndMenu/TopNavigationBar.jsx":
/*!************************************************************************!*\
  !*** ./resources/js/Components/NavigationAndMenu/TopNavigationBar.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logo */ "./resources/js/Components/Logo.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _TopNavigationMenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopNavigationMenuItem */ "./resources/js/Components/NavigationAndMenu/TopNavigationMenuItem.jsx");
/* harmony import */ var _UserMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserMenu */ "./resources/js/Components/NavigationAndMenu/UserMenu.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var TopNavigationBar = function TopNavigationBar(_ref) {
  var _ref$totalCart = _ref.totalCart,
      totalCart = _ref$totalCart === void 0 ? 0 : _ref$totalCart;
  var auth = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.usePage)().props.auth;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "flex flex-col md:flex-row justify-between items-center gap-y-3",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Logo__WEBPACK_IMPORTED_MODULE_1__["default"], {
      textColor: "text-dark"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex gap-x-3 md:gap-x-8 px-4",
      children: [auth.user ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_UserMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_TopNavigationMenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Sign in",
        icon: "login",
        link: route('login')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_TopNavigationMenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: "Cart",
          icon: "cart",
          link: route('user.cart')
        }), auth.user && totalCart > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "inline-flex absolute -top-2 -left-3 justify-center items-center w-5 h-5 text-[0.65em] font-medium text-white bg-red-500 rounded-full",
          children: totalCart
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(TopNavigationBar));

/***/ }),

/***/ "./resources/js/Components/NavigationAndMenu/TopNavigationMenuItem.jsx":
/*!*****************************************************************************!*\
  !*** ./resources/js/Components/NavigationAndMenu/TopNavigationMenuItem.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MemoLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MemoLink */ "./resources/js/Components/MemoLink.jsx");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon */ "./resources/js/Components/Icon.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var TopNavigationMenuItem = function TopNavigationMenuItem(_ref) {
  var icon = _ref.icon,
      text = _ref.text,
      link = _ref.link;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_MemoLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: link,
      className: "hover:text-dark/80 flex items-center",
      preserveState: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: icon,
        className: "w-6 h-6 sm:w-5 sm:h-5"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "hidden sm:inline-block ml-2 text-sm font-medium",
        children: text
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(TopNavigationMenuItem, function (prev, next) {
  if (prev.icon === next.icon && prev.text === next.text && prev.link === next.link) return true;
  return false;
}));

/***/ }),

/***/ "./resources/js/Components/NavigationAndMenu/UserMenu.jsx":
/*!****************************************************************!*\
  !*** ./resources/js/Components/NavigationAndMenu/UserMenu.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon */ "./resources/js/Components/Icon.jsx");
/* harmony import */ var _UTULITIES_userFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UTULITIES/userFunction */ "./resources/js/UTULITIES/userFunction.js");
/* harmony import */ var _userMenuList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userMenuList */ "./resources/js/Components/NavigationAndMenu/userMenuList.js");
/* harmony import */ var _UserMenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserMenuItem */ "./resources/js/Components/NavigationAndMenu/UserMenuItem.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var UserMenu = function UserMenu() {
  var auth = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props.auth;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      menuOpened = _useState2[0],
      setMenuOpened = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "flex items-center justify-between w-full text-sm relative",
    children: [auth.user ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      onClick: function onClick() {
        return setMenuOpened(true);
      },
      className: "flex items-center gap-1 cursor-pointer",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "w-5 h-5 overflow-hidden rounded bg-gray-200 mr-1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
        className: "font-semibold hover:text-dark/80 duration-500",
        children: (0,_UTULITIES_userFunction__WEBPACK_IMPORTED_MODULE_3__.getUsernameInEmail)(auth.user.data.email)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "chevron-down",
        className: "w-5 h-5"
      })]
    }) : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "absolute top-0 right-0 left-auto z-40 py-1 mt-8 text-sm whitespace-nowrap bg-light rounded shadow-xl text-secondary",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "min-w-[150px] ".concat(menuOpened ? '' : 'hidden'),
        children: _userMenuList__WEBPACK_IMPORTED_MODULE_4__.USER_MENU_LIST.map(function (menu) {
          if (menu.text.toLowerCase() === 'logout') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_UserMenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              menu: menu,
              method: "post",
              as: "button",
              type: "button",
              onMenuItemClick: setMenuOpened
            }, menu.text);
          }

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_UserMenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
            menu: menu,
            onMenuItemClick: setMenuOpened
          }, menu.text);
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      onClick: function onClick() {
        setMenuOpened(false);
      },
      className: "fixed inset-0 z-20 bg-black opacity-10 ".concat(menuOpened ? '' : 'hidden')
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserMenu);

/***/ }),

/***/ "./resources/js/Components/NavigationAndMenu/UserMenuItem.jsx":
/*!********************************************************************!*\
  !*** ./resources/js/Components/NavigationAndMenu/UserMenuItem.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MemoLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MemoLink */ "./resources/js/Components/MemoLink.jsx");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon */ "./resources/js/Components/Icon.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["menu", "onMenuItemClick"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var UserMenuItem = function UserMenuItem(_ref) {
  var menu = _ref.menu,
      onMenuItemClick = _ref.onMenuItemClick,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_MemoLink__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread(_objectSpread({
    className: "px-3 py-2.5 w-full flex items-center gap-x-6 hover:bg-primary hover:text-white duration-500",
    href: menu.link,
    onClick: function onClick() {
      return onMenuItemClick(false);
    }
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: menu.icon,
      className: "w-5 h-5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      children: menu.text
    })]
  }), menu.text);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserMenuItem);

/***/ }),

/***/ "./resources/js/Components/NavigationAndMenu/navigationMenus.js":
/*!**********************************************************************!*\
  !*** ./resources/js/Components/NavigationAndMenu/navigationMenus.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menus": () => (/* binding */ menus)
/* harmony export */ });
var menus = [{
  text: "Home",
  link: route("home"),
  rawRoute: "/home"
}, {
  text: "Products",
  link: route("products"),
  rawRoute: "/products"
}, {
  text: "Services",
  link: route("services"),
  rawRoute: "/services"
} // {
//     text: "Contact us",
//     link: route("contacts"),
//     rawRoute: "/contacts",
// },
];

/***/ }),

/***/ "./resources/js/Components/NavigationAndMenu/userMenuList.js":
/*!*******************************************************************!*\
  !*** ./resources/js/Components/NavigationAndMenu/userMenuList.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USER_MENU_LIST": () => (/* binding */ USER_MENU_LIST)
/* harmony export */ });
var USER_MENU_LIST = [{
  text: "My profile",
  icon: "user",
  link: route("user.profil")
}, {
  text: "Setting",
  icon: "setting",
  link: route("user.setting")
}, {
  text: "Logout",
  icon: "logout",
  link: route("logout")
}];

/***/ }),

/***/ "./resources/js/Components/Service/ServiceSection.jsx":
/*!************************************************************!*\
  !*** ./resources/js/Components/Service/ServiceSection.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home_Offer_illustrationSrc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Home/Offer/illustrationSrc */ "./resources/js/Components/Home/Offer/illustrationSrc.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var ServiceSection = function ServiceSection(_ref) {
  var service = _ref.service,
      index = _ref.index,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === void 0 ? false : _ref$reverse;
  var src = service.illustration ? service.illustration : _Home_Offer_illustrationSrc__WEBPACK_IMPORTED_MODULE_1__.defaultServiceIllustrationSrc[index % _Home_Offer_illustrationSrc__WEBPACK_IMPORTED_MODULE_1__.defaultServiceIllustrationSrc.length];
  console.log(src);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "flex flex-row gap-14 max-w-4xl mx-auto py-2 border-b border-accent/10  px-8 ".concat(reverse ? 'flex-row-reverse' : ''),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex flex-1 flex-col items-center justify-center gap-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
        className: "my-2 py-1 text-xl text-primary text-center first-letter:uppercase",
        children: service.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "text-my-neutral text-sm max-w-lg text-center first-letter:uppercase",
        children: service.description
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "h-64 justify-center items-center hidden sm:flex",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: src,
        className: "h-full",
        alt: "Service Illustration"
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceSection);

/***/ }),

/***/ "./resources/js/Layout/UserLayout.jsx":
/*!********************************************!*\
  !*** ./resources/js/Layout/UserLayout.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_NavigationAndMenu_NavigationBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/NavigationAndMenu/NavigationBar */ "./resources/js/Components/NavigationAndMenu/NavigationBar.jsx");
/* harmony import */ var _Components_NavigationAndMenu_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/NavigationAndMenu/Footer */ "./resources/js/Components/NavigationAndMenu/Footer.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.mjs");
/* harmony import */ var _Components_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Icon */ "./resources/js/Components/Icon.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var UserLayout = function UserLayout(_ref) {
  var children = _ref.children;
  var auth = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.usePage)().props.auth;
  var navRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('124px'),
      _useState2 = _slicedToArray(_useState, 2),
      marginTop = _useState2[0],
      setMarginTop = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var offsetHeight = navRef.current.offsetHeight;
    setMarginTop("".concat(offsetHeight, "px"));
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_NavigationAndMenu_NavigationBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref: navRef,
      auth: auth
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "min-h-screen w-full pb-4 bg-background overflow-x-hidden",
      style: {
        marginTop: marginTop
      },
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_NavigationAndMenu_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {
      toastOptions: {
        position: "bottom-right",
        style: {
          fontSize: '0.75em',
          padding: '0.75rem 1.2rem'
        },
        success: {
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
            name: "check-circle",
            className: "w-5 h-5 md:w-6 md:h-6 text-[#14B8A6]"
          }),
          style: {
            borderBottom: '2px solid #14B8A6',
            borderLeft: '1px solid #14B8A6',
            borderRadius: '0.5rem'
          }
        },
        error: {
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
            name: "x-circle",
            className: "w-5 h-5 md:w-6 md:h-6 text-accent-secondary"
          }),
          style: {
            borderBottom: '2px solid #E11D48',
            borderRight: '1px solid #E11D48',
            borderRadius: '0.5rem'
          }
        }
      }
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserLayout);

/***/ }),

/***/ "./resources/js/Pages/Services.jsx":
/*!*****************************************!*\
  !*** ./resources/js/Pages/Services.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_UserLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout/UserLayout */ "./resources/js/Layout/UserLayout.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _Components_Service_ServiceSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Service/ServiceSection */ "./resources/js/Components/Service/ServiceSection.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var Services = function Services() {
  var services = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.usePage)().props.services;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.Head, {
      title: "Services"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Layout_UserLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "p-8 space-y-12",
        children: services && (services === null || services === void 0 ? void 0 : services.data.map(function (service, index) {
          var reverse = index % 2 == 0 ? false : true;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_Service_ServiceSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
            service: service,
            index: index,
            reverse: reverse
          }, service.id);
        }))
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);

/***/ }),

/***/ "./resources/js/UTULITIES/userFunction.js":
/*!************************************************!*\
  !*** ./resources/js/UTULITIES/userFunction.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUsernameInEmail": () => (/* binding */ getUsernameInEmail),
/* harmony export */   "replaceLastFour": () => (/* binding */ replaceLastFour)
/* harmony export */ });
function getUsernameInEmail(email) {
  var _email$split$;

  var username = (_email$split$ = email.split('@')[0]) !== null && _email$split$ !== void 0 ? _email$split$ : null;
  return username.charAt(0).toUpperCase() + username.slice(1);
}
var replaceLastFour = function replaceLastFour(s) {
  return s.replace(/.{4}$/, "****");
};

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/goober/dist/goober.modern.js":
/*!***************************************************!*\
  !*** ./node_modules/goober/dist/goober.modern.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "css": () => (/* binding */ u),
/* harmony export */   "extractCss": () => (/* binding */ r),
/* harmony export */   "glob": () => (/* binding */ b),
/* harmony export */   "keyframes": () => (/* binding */ h),
/* harmony export */   "setup": () => (/* binding */ m),
/* harmony export */   "styled": () => (/* binding */ j)
/* harmony export */ });
let e={data:""},t=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||e,r=e=>{let r=t(e),l=r.data;return r.data="",l},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,o=(e,t)=>{let r="",l="",a="";for(let n in e){let c=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+c+";":l+="f"==n[1]?o(c,n):n+"{"+o(c,"k"==n[1]?"":t)+"}":"object"==typeof c?l+=o(c,t?t.replace(/([^,])+/g,e=>n.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=c&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=o.p?o.p(n,c):n+":"+c+";")}return r+(t&&a?t+"{"+a+"}":a)+l},c={},s=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+s(e[r]);return t}return e},i=(e,t,r,i,p)=>{let u=s(e),d=c[u]||(c[u]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(u));if(!c[d]){let t=u!==e?e:(e=>{let t,r,o=[{}];for(;t=l.exec(e.replace(a,""));)t[4]?o.shift():t[3]?(r=t[3].replace(n," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(n," ").trim();return o[0]})(e);c[d]=o(p?{["@keyframes "+d]:t}:t,r?"":"."+d)}let f=r&&c.g?c.g:null;return r&&(c.g=c[d]),((e,t,r,l)=>{l?t.data=t.data.replace(l,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(c[d],t,i,f),d},p=(e,t,r)=>e.reduce((e,l,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==n?"":n)},"");function u(e){let r=this||{},l=e.call?e(r.p):e;return i(l.unshift?l.raw?p(l,[].slice.call(arguments,1),r.p):l.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):l,t(r.target),r.g,r.o,r.k)}let d,f,g,b=u.bind({g:1}),h=u.bind({k:1});function m(e,t,r,l){o.p=t,d=e,f=r,g=l}function j(e,t){let r=this||{};return function(){let l=arguments;function a(n,o){let c=Object.assign({},n),s=c.className||a.className;r.p=Object.assign({theme:f&&f()},c),r.o=/ *go\d+/.test(s),c.className=u.apply(r,l)+(s?" "+s:""),t&&(c.ref=o);let i=e;return e[0]&&(i=c.as||e,delete c.as),g&&i[0]&&g(c),d(i,c)}return t?t(a):a}}


/***/ }),

/***/ "./node_modules/react-hot-toast/dist/index.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/react-hot-toast/dist/index.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckmarkIcon": () => (/* binding */ w),
/* harmony export */   "ErrorIcon": () => (/* binding */ _),
/* harmony export */   "LoaderIcon": () => (/* binding */ V),
/* harmony export */   "ToastBar": () => (/* binding */ F),
/* harmony export */   "ToastIcon": () => (/* binding */ M),
/* harmony export */   "Toaster": () => (/* binding */ Ie),
/* harmony export */   "default": () => (/* binding */ _t),
/* harmony export */   "resolveValue": () => (/* binding */ T),
/* harmony export */   "toast": () => (/* binding */ n),
/* harmony export */   "useToaster": () => (/* binding */ D),
/* harmony export */   "useToasterStore": () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var goober__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! goober */ "./node_modules/goober/dist/goober.modern.js");
var W=e=>typeof e=="function",T=(e,t)=>W(e)?e(t):e;var U=(()=>{let e=0;return()=>(++e).toString()})(),b=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})();var Q=20;var S=new Map,X=1e3,$=e=>{if(S.has(e))return;let t=setTimeout(()=>{S.delete(e),u({type:4,toastId:e})},X);S.set(e,t)},J=e=>{let t=S.get(e);t&&clearTimeout(t)},v=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Q)};case 1:return t.toast.id&&J(t.toast.id),{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:o}=t;return e.toasts.find(r=>r.id===o.id)?v(e,{type:1,toast:o}):v(e,{type:0,toast:o});case 3:let{toastId:s}=t;return s?$(s):e.toasts.forEach(r=>{$(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===s||s===void 0?{...r,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+a}))}}},A=[],P={toasts:[],pausedAt:void 0},u=e=>{P=v(P,e),A.forEach(t=>{t(P)})},Y={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[t,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(P);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(A.push(o),()=>{let a=A.indexOf(o);a>-1&&A.splice(a,1)}),[t]);let s=t.toasts.map(a=>{var r,c;return{...e,...e[a.type],...a,duration:a.duration||((r=e[a.type])==null?void 0:r.duration)||(e==null?void 0:e.duration)||Y[a.type],style:{...e.style,...(c=e[a.type])==null?void 0:c.style,...a.style}}});return{...t,toasts:s}};var G=(e,t="blank",o)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(o==null?void 0:o.id)||U()}),h=e=>(t,o)=>{let s=G(t,e,o);return u({type:2,toast:s}),s.id},n=(e,t)=>h("blank")(e,t);n.error=h("error");n.success=h("success");n.loading=h("loading");n.custom=h("custom");n.dismiss=e=>{u({type:3,toastId:e})};n.remove=e=>u({type:4,toastId:e});n.promise=(e,t,o)=>{let s=n.loading(t.loading,{...o,...o==null?void 0:o.loading});return e.then(a=>(n.success(T(t.success,a),{id:s,...o,...o==null?void 0:o.success}),a)).catch(a=>{n.error(T(t.error,a),{id:s,...o,...o==null?void 0:o.error})}),e};var Z=(e,t)=>{u({type:1,toast:{id:e,height:t}})},ee=()=>{u({type:5,time:Date.now()})},D=e=>{let{toasts:t,pausedAt:o}=I(e);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(o)return;let r=Date.now(),c=t.map(i=>{if(i.duration===1/0)return;let d=(i.duration||0)+i.pauseDuration-(r-i.createdAt);if(d<0){i.visible&&n.dismiss(i.id);return}return setTimeout(()=>n.dismiss(i.id),d)});return()=>{c.forEach(i=>i&&clearTimeout(i))}},[t,o]);let s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{o&&u({type:6,time:Date.now()})},[o]),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((r,c)=>{let{reverseOrder:i=!1,gutter:d=8,defaultPosition:p}=c||{},g=t.filter(m=>(m.position||p)===(r.position||p)&&m.height),E=g.findIndex(m=>m.id===r.id),x=g.filter((m,R)=>R<E&&m.visible).length;return g.filter(m=>m.visible).slice(...i?[x+1]:[0,x]).reduce((m,R)=>m+(R.height||0)+d,0)},[t]);return{toasts:t,handlers:{updateHeight:Z,startPause:ee,endPause:s,calculateOffset:a}}};var oe=goober__WEBPACK_IMPORTED_MODULE_1__.keyframes`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,re=goober__WEBPACK_IMPORTED_MODULE_1__.keyframes`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,se=goober__WEBPACK_IMPORTED_MODULE_1__.keyframes`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,_=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${oe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${re} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${se} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;var ne=goober__WEBPACK_IMPORTED_MODULE_1__.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,V=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ne} 1s linear infinite;
`;var pe=goober__WEBPACK_IMPORTED_MODULE_1__.keyframes`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,de=goober__WEBPACK_IMPORTED_MODULE_1__.keyframes`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,w=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${de} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`;var ue=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  position: absolute;
`,le=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Te=goober__WEBPACK_IMPORTED_MODULE_1__.keyframes`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,fe=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Te} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:t,type:o,iconTheme:s}=e;return t!==void 0?typeof t=="string"?react__WEBPACK_IMPORTED_MODULE_0__.createElement(fe,null,t):t:o==="blank"?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(le,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(V,{...s}),o!=="loading"&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(ue,null,o==="error"?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_,{...s}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(w,{...s})))};var ye=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,he="0%{opacity:0;} 100%{opacity:1;}",xe="0%{opacity:1;} 100%{opacity:0;}",be=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Se=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,t)=>{let s=e.includes("top")?1:-1,[a,r]=b()?[he,xe]:[ye(s),ge(s)];return{animation:t?`${(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},F=react__WEBPACK_IMPORTED_MODULE_0__.memo(({toast:e,position:t,style:o,children:s})=>{let a=e.height?Ae(e.position||t||"top-center",e.visible):{opacity:0},r=react__WEBPACK_IMPORTED_MODULE_0__.createElement(M,{toast:e}),c=react__WEBPACK_IMPORTED_MODULE_0__.createElement(Se,{...e.ariaProps},T(e.message,e));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(be,{className:e.className,style:{...a,...o,...e.style}},typeof s=="function"?s({icon:r,message:c}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,r,c))});(0,goober__WEBPACK_IMPORTED_MODULE_1__.setup)(react__WEBPACK_IMPORTED_MODULE_0__.createElement);var Ee=({id:e,className:t,style:o,onHeightUpdate:s,children:a})=>{let r=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(c=>{if(c){let i=()=>{let d=c.getBoundingClientRect().height;s(e,d)};i(),new MutationObserver(i).observe(c,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:r,className:t,style:o},a)},Re=(e,t)=>{let o=e.includes("top"),s=o?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(o?1:-1)}px)`,...s,...a}},ve=goober__WEBPACK_IMPORTED_MODULE_1__.css`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,O=16,Ie=({reverseOrder:e,position:t="top-center",toastOptions:o,gutter:s,children:a,containerStyle:r,containerClassName:c})=>{let{toasts:i,handlers:d}=D(o);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"fixed",zIndex:9999,top:O,left:O,right:O,bottom:O,pointerEvents:"none",...r},className:c,onMouseEnter:d.startPause,onMouseLeave:d.endPause},i.map(p=>{let g=p.position||t,E=d.calculateOffset(p,{reverseOrder:e,gutter:s,defaultPosition:t}),x=Re(g,E);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ee,{id:p.id,key:p.id,onHeightUpdate:d.updateHeight,className:p.visible?ve:"",style:x},p.type==="custom"?T(p.message,p):a?a(p):react__WEBPACK_IMPORTED_MODULE_0__.createElement(F,{toast:p,position:g}))}))};var _t=n;
//# sourceMappingURL=index.mjs.map

/***/ })

}]);