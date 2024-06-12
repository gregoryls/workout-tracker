/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background-color: #1d201f;
  color: white;
}

body div {
  border: 1px solid white;
  margin: 10px;
}

#squatOptions {
  visibility: hidden;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["body {\r\n  background-color: #1d201f;\r\n  color: white;\r\n}\r\n\r\nbody div {\r\n  border: 1px solid white;\r\n  margin: 10px;\r\n}\r\n\r\n#squatOptions {\r\n  visibility: hidden;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/exercises.js":
/*!**************************!*\
  !*** ./src/exercises.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exerciseList: () => (/* binding */ exerciseList),
/* harmony export */   sampleWorkout: () => (/* binding */ sampleWorkout)
/* harmony export */ });
function sampleWorkout() {
  const obj = {
    date: new Date(),
    exercise1: {
      squat: {
        variation: "pause",
        set1: {
          weight: 135,
          reps: 5,
        },
        set2: {
          weight: 135,
          reps: 10,
        },
      },
    },
    exercise2: {
      bench_press: {
        variation: "none",
        set1: {
          weight: 135,
          reps: 5,
        },
        set2: {
          weight: 135,
          reps: 10,
        },
      },
    },
  };
  return obj;
}

const exerciseList = {
  squat: {
    variation: {
      none: true,
      pause: true,
      tempo: {
        concentric: 1,
        eccentric: 3,
      },
    },
  },
  benchPress: {
    variation: {
      none: true,
      pause: true,
      tempo:{
        concentric: 1,
        eccentric: 3,
      }
    },
  },
  inclineBenchPress: {
    variation: {
      none: true,
      pause: true,
      tempo:{
        concentric: 1,
        eccentric: 3,
      }
    },
  },
  overheadPress: {
    variation: {
      none: true,
      pause: true,
      tempo:{
        concentric: 1,
        eccentric: 3,
      }
    },
  },
  deadlift: {
    variation: {
      none: true,
      pause: true,
      tempo:{
        concentric: 1,
        eccentric: 3,
      }
    },
  },
  pullup: {
    variation: {
      chinup: true,
      neutral: true,
      none: true,
      pause: true,
      tempo:{
        concentric: 1,
        eccentric: 3,
      }
    },
  },
};


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInput: () => (/* binding */ createInput),
/* harmony export */   displayObject: () => (/* binding */ displayObject),
/* harmony export */   displayWorkoutInProgress: () => (/* binding */ displayWorkoutInProgress),
/* harmony export */   fillDatalist: () => (/* binding */ fillDatalist),
/* harmony export */   generateMovementObj: () => (/* binding */ generateMovementObj),
/* harmony export */   generateSetObj: () => (/* binding */ generateSetObj),
/* harmony export */   generateWorkoutObj: () => (/* binding */ generateWorkoutObj),
/* harmony export */   getDate: () => (/* binding */ getDate),
/* harmony export */   getEndTime: () => (/* binding */ getEndTime),
/* harmony export */   getInputValue: () => (/* binding */ getInputValue),
/* harmony export */   getMesocycleInput: () => (/* binding */ getMesocycleInput),
/* harmony export */   getMicrocycleInput: () => (/* binding */ getMicrocycleInput),
/* harmony export */   getMovementInput: () => (/* binding */ getMovementInput),
/* harmony export */   getRIRInput: () => (/* binding */ getRIRInput),
/* harmony export */   getRepsInput: () => (/* binding */ getRepsInput),
/* harmony export */   getSetNumber: () => (/* binding */ getSetNumber),
/* harmony export */   getStartTime: () => (/* binding */ getStartTime),
/* harmony export */   getTempoValues: () => (/* binding */ getTempoValues),
/* harmony export */   getVariationInput: () => (/* binding */ getVariationInput),
/* harmony export */   getWeightInput: () => (/* binding */ getWeightInput),
/* harmony export */   getWeightUnit: () => (/* binding */ getWeightUnit),
/* harmony export */   getWorkoutNameInput: () => (/* binding */ getWorkoutNameInput),
/* harmony export */   incrementSetNumber: () => (/* binding */ incrementSetNumber),
/* harmony export */   removeCamelCase: () => (/* binding */ removeCamelCase),
/* harmony export */   resetSetNumber: () => (/* binding */ resetSetNumber),
/* harmony export */   setAttributes: () => (/* binding */ setAttributes),
/* harmony export */   setDateInputToday: () => (/* binding */ setDateInputToday),
/* harmony export */   setWorkoutDateStart: () => (/* binding */ setWorkoutDateStart),
/* harmony export */   setWorkoutTime: () => (/* binding */ setWorkoutTime),
/* harmony export */   toCamelCase: () => (/* binding */ toCamelCase)
/* harmony export */ });
function toCamelCase(string) {
  // arrow function uses throwaway variable for the regex match,
  // capture group 0, as per replace() format
  return string.replace(/[-_\s](.)/g, (_, char) => char.toUpperCase());
}

function removeCamelCase(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
}

function setDateInputToday() {
  const dateInput = document.getElementById("dateInput");

  // Split at 'T' to remove time info after calendar date;
  const today = new Date().toISOString().split("T")[0];
  dateInput.value = today;
}

function setAttributes(element, attributes) {
  Object.keys(attributes).forEach((key) =>
    element.setAttribute(key, attributes[key]),
  );
}

function createInput(inputType, inputID, wrapperID) {
  const input = document.createElement("input");
  const label = document.createElement("label");
  const div = document.createElement("div");

  setAttributes(input, {
    type: inputType,
    name: inputID,
    id: inputID,
    value: inputID,
  });
  setAttributes(label, { for: inputID });
  setAttributes(div, { id: `${inputID}${wrapperID}` });
  label.textContent = inputID;
  div.append(label, input);

  return div;
}

function fillDatalist(listID, obj) {
  const list = document.getElementById(listID);

  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i += 1) {
    const option = document.createElement("option");
    option.value = removeCamelCase(keys[i]);
    list.append(option);
  }
}

function getMovementInput() {
  const input = document.getElementById("exerciseInput");
  return input.value;
}

function getMesocycleInput() {
  const input = document.getElementById("mesocycleInput");
  if (input.value === "other") {
    const inputOther = document.getElementById("mesocycleInputOther");
    return inputOther.value;
  }
  return input.value;
}

function getMicrocycleInput() {
  const input = document.getElementById("microcycleInput");
  return input.value;
}

function getWorkoutNameInput() {
  const input = document.getElementById("workoutNameInput");
  return input.value;
}

function getWeightInput() {
  const input = document.getElementById("weight");
  return input.value;
}
function getWeightUnit() {
  const checkedRadio = document.querySelector(
    'input[name="poundKilo"]:checked',
  );
  return checkedRadio.value;
}
function getRepsInput() {
  const input = document.getElementById("reps");
  return input.value;
}
function getRIRInput() {
  const input = document.getElementById("RIR");
  return input.value;
}
function getInputValue(inputID) {
  const input = document.getElementById(inputID);
  return input.value;
}
function getTempoValues() {
  const eccentric = document.getElementById("eccentric");
  const concentric = document.getElementById("concentric");
  return [eccentric.value, concentric.value];
}
function getDate() {
  const datetime = document.getElementById("dateInput");
  return datetime.value;
}
function getStartTime() {
  const startTime = document.getElementById("startTime");
  return startTime.value;
}

function getEndTime() {
  const endTime = document.getElementById("endTime");
  return endTime.value;
}

function getVariationInput() {
  const variationInputs = document.getElementById("variationInputs");
  const variations = variationInputs.childNodes;
  // rename x
  const variationArray = [];

  variations.forEach((variant) => {
    if (variant.children[1].checked) {
      // console.log(variant.children[1].value);
      variationArray.push(variant.children[1].value);
      // console.log(x);
    }
  });
  return variationArray;
}

function setWorkoutDateStart(obj) {
  const workoutHistoryObj = obj;
  if (workoutHistoryObj[`${getDate()}|${getStartTime()}`] === undefined) {
    workoutHistoryObj[`${getDate()}|${getStartTime()}`] = {};
    // console.log(workoutHistoryObj);
  }
}

function setWorkoutTime(obj) {
  const workoutHistoryObj = obj;
  workoutHistoryObj.time = {
    start: getStartTime(),
    end: getEndTime(),
  };
}

function getSetNumber() {
  const setCounter = document.getElementById("setNumber");
  const setNumber = Number(setCounter.textContent);
  return setNumber;
}

const setNumber = document.getElementById("setNumber");
function incrementSetNumber() {
  let number = Number(setNumber.textContent);
  number += 1;
  setNumber.textContent = number;
}

function resetSetNumber() {
  setNumber.textContent = 1;
}

function generateSetObj(obj) {
  // does obj need to be defined as it is here
  const movement = getMovementInput();
  const set = getSetNumber();
  const weight = getWeightInput();
  const weightUnit = getWeightUnit();
  const reps = getRepsInput();
  const RIR = getRIRInput();
  const variationInput = getVariationInput();

  const movementObj = obj;
  const setObj = {
    variations: {},
    weight,
    weightUnit,
    reps,
    RIR,
  };

  if (variationInput.length < 1) {
    setObj.variations.none = true;
  }
  for (let i = 0; i < variationInput.length; i += 1) {
    // TODO check this if, doesn't look needed
    if (variationInput.length < 1) console.log("none");
    setObj.variations[variationInput[i]] = true;
  }

  movementObj[movement][`set${set}`] = setObj;
  // return currently not needed
  // return movementObj;
}

function generateMovementObj() {
  const movement = getMovementInput();
  const mesocycle = getMesocycleInput();
  const microcycle = getMicrocycleInput();
  const workoutName = getWorkoutNameInput();

  const obj = {
    mesocycle,
    microcycle,
    workoutName,
    [movement]: {},
  };

  return obj;
}

// accepts an array of movement objects as a parameter
function generateWorkoutObj(movements) {
  const obj = {};
  obj.date = getDate();

  for (let i = 0; i < movements.length; i += 1) {
    const movement = movements[i];
    obj[`exercise${i + 1}`] = movement;
  }
  return obj;
}

function displayObject(obj) {
  const display = document.getElementById("currentWorkoutDisplay");
  const movement = Object.keys(obj);

  const p = document.createElement("p");
  // Object.keys() returns an array
  p.textContent = movement[0];
  display.append(p);
}

function displayWorkoutInProgress(workout) {}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _exercises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercises */ "./src/exercises.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");




// TODO
// big list of exercise full names, e.g. flat barbell bench, incline dumbell bench etc.
// maybe select options to narrow down a populated list of every exercise
// which is also filterable by a search field.
// read more on destructuring
// instead of directly adding new exercise, have some kind of dialogue
// toggle to switch between RPE or RiR
// write function to add entry to exercise list
// consider displaying movements as capital first letter vs all lower
// consider a number hidden from user for ordering movements in a workout
// new variation js
// change variation button to something like clickable text
// work on new variation logic
// add movements to workout array, display array contents in some collapsible form
// iterate through the workout array to build the final workout object
// merit to simply storing workout data as array of objects, first array item is date?
// ^^^, build as obj from start, apply user date during final submit
// set input starts at 1 and increments itself outside user control (can edit later)
// different listeners for movement and set objects
// work on building workout 1 set at a time
// keep set info greyed out until movement added to workout
// why does movement name come out with a space
// sanitize getmovementinput
// rethink how workout objects are built
// functions to get time inputs
// revisit Object.assign() for repeat sets
// find way to track order of exercises
// fix blank movement field
// local storage for new unique movement
// make sure you can add new tempo times in variations
// mesocycle select other bring up a text input
// mesocycle make sure default selection stays constant for a given workout
// link new cycle inputs into obj
// package exercise event listener into function

// console.log(exercises.sampleWorkout());

const exerciseInput = document.getElementById("exerciseInput");
// const exerciseListElement = document.getElementById("exerciseList");
const submitExercise = document.getElementById("submitExercise");
// const option = document.createElement("option");
const variations = document.getElementById("variationInputs");
const newVariationButton = document.getElementById("submitNewVariation");
const newMovementButton = document.getElementById("newMovementButton");
// const userDate = document.getElementById('dateInput');
const dateButton = document.getElementById("dateButton");
const addMovement = document.getElementById("addMovement");
const mesocycleInput = document.getElementById("mesocycleInput");

let newMovement;

const workoutArray = [];

const exerciseListObj =
  JSON.parse(localStorage.getItem("exerciseListObj")) || _exercises__WEBPACK_IMPORTED_MODULE_1__.exerciseList;
// retrieve saved object or initialize a blank object
const workoutHistoryObj =
  JSON.parse(localStorage.getItem("workoutHistoryObj")) || {};
console.log(workoutHistoryObj);
console.log(exerciseListObj);
const movementObj = {};
const workoutObj = {};

_utils__WEBPACK_IMPORTED_MODULE_2__.setDateInputToday();

dateButton.addEventListener("click", () => {
  // put user date input into workout array

  const temp = _utils__WEBPACK_IMPORTED_MODULE_2__.generateMovementObj();
  _utils__WEBPACK_IMPORTED_MODULE_2__.generateSetObj(temp);
  console.log(temp);
});

function generateMesocycleInputOther() {
  const wrap = document.getElementById("mesocycleWrap");
  if (mesocycleInput.value === "other") {
    const input = document.createElement("input");
    _utils__WEBPACK_IMPORTED_MODULE_2__.setAttributes(input, {
      type: "text",
      name: "mesocycleInputOther",
      id: "mesocycleInputOther",
      placeholder: "Custom",
    });
    wrap.append(input);
    // element creation, think about setattributes()
  }
}

mesocycleInput.addEventListener("change", () => {
  generateMesocycleInputOther();

  // remove custom text input when selecting a different option
  if (mesocycleInput.value !== "other") {
    // check if the custom mesocycle input exists, if so, remove it for other select options
    const mesocycleInputOther = document.getElementById("mesocycleInputOther");
    if (mesocycleInputOther) mesocycleInputOther.remove();
  }
});

_utils__WEBPACK_IMPORTED_MODULE_2__.fillDatalist("exerciseInputOptions", exerciseListObj);

let value = _utils__WEBPACK_IMPORTED_MODULE_2__.getMovementInput();
let valueCamelCase = _utils__WEBPACK_IMPORTED_MODULE_2__.toCamelCase(value.toLowerCase());
// console.log(valueCamelCase);
function movementTextMatch() {
  if (exerciseListObj[valueCamelCase]) {
    // hide add movement button for existing movements
    addMovement.style.display = "none";
    variations.innerHTML = "";
    console.log("sucess");
    const keys = Object.keys(exerciseListObj[valueCamelCase].variation);
    for (let i = 0; i < keys.length; i += 1) {
      if (exerciseListObj[valueCamelCase].variation[keys[i]]) {
        const createCheckboxInput = _utils__WEBPACK_IMPORTED_MODULE_2__.createInput(
          "checkbox",
          keys[i],
          "VariationCheck",
        );
        variations.append(createCheckboxInput);

        // pre-check the 'none variation after it's div is appended
        if (keys[i] === "none") document.getElementById("none").checked = true;

        // expand the tempo checkbox if selected for eccentric/concentric inputs
        if (keys[i] === "tempo") {
          createCheckboxInput.addEventListener("change", (event) => {
            if (event.target.checked) {
              const tempoWrap = document.createElement("div");
              tempoWrap.id = "tempoVariationWrap";
              const eccentric = _utils__WEBPACK_IMPORTED_MODULE_2__.createInput(
                "number",
                "eccentric",
                "Wrap",
              );
              const concentric = _utils__WEBPACK_IMPORTED_MODULE_2__.createInput(
                "number",
                "concentric",
                "Wrap",
              );
              tempoWrap.append(eccentric, concentric);
              variations.append(tempoWrap);
            }
            if (!event.target.checked) {
              const tempoWrap = document.getElementById("tempoVariationWrap");
              tempoWrap.remove();
            }
          });
        }
      }
    }
  }
}
movementTextMatch();
exerciseInput.addEventListener("input", () => {
  // show add movement button to catch new unique movement names
  addMovement.style.display = "inline-block";
  value = _utils__WEBPACK_IMPORTED_MODULE_2__.getMovementInput();
  valueCamelCase = _utils__WEBPACK_IMPORTED_MODULE_2__.toCamelCase(value.toLowerCase());

  // clear variations so they don't get stuck when changing between known movements
  variations.innerHTML = "";
  movementTextMatch();
});

newMovementButton.addEventListener("click", () => {
  const dateStartTime = `${_utils__WEBPACK_IMPORTED_MODULE_2__.getDate()}|${_utils__WEBPACK_IMPORTED_MODULE_2__.getStartTime()}`;
  // run this if block for the first set only
  if (Number(document.getElementById("setNumber").textContent) === 1) {
    // TODO dateblock only needs to run once, check for content first

    _utils__WEBPACK_IMPORTED_MODULE_2__.setWorkoutDateStart(workoutHistoryObj);

    _utils__WEBPACK_IMPORTED_MODULE_2__.setWorkoutTime(workoutHistoryObj[dateStartTime]);
    // console.log(workoutHistoryObj);

    newMovement = _utils__WEBPACK_IMPORTED_MODULE_2__.generateMovementObj();
    // console.log(newMovement);

    _utils__WEBPACK_IMPORTED_MODULE_2__.generateSetObj(newMovement);
    // console.log(newMovement);
    Object.assign(workoutHistoryObj[dateStartTime], newMovement);
    console.log(workoutHistoryObj);

    _utils__WEBPACK_IMPORTED_MODULE_2__.incrementSetNumber();
  } else {
    _utils__WEBPACK_IMPORTED_MODULE_2__.generateSetObj(newMovement);
    // console.log(newMovement);
    Object.assign(workoutHistoryObj[dateStartTime], newMovement);
    console.log(workoutHistoryObj);
    _utils__WEBPACK_IMPORTED_MODULE_2__.incrementSetNumber();
  }

  localStorage.setItem("workoutHistoryObj", JSON.stringify(workoutHistoryObj));
});

addMovement.addEventListener("click", () => {
  value = _utils__WEBPACK_IMPORTED_MODULE_2__.getMovementInput();
  valueCamelCase = _utils__WEBPACK_IMPORTED_MODULE_2__.toCamelCase(value.toLowerCase());
  exerciseListObj[valueCamelCase] = {
    variation: {
      none: true,
      pause: true,
      tempo: {
        concentric: 1,
        eccentric: 3,
      },
    },
  };
  console.log(exerciseListObj);
  localStorage.setItem("exerciseListObj", JSON.stringify(exerciseListObj));
});

newVariationButton.addEventListener("click", () => {
  const newVariationInput = document.getElementById("newVariationInput");
  const newVariationValue = newVariationInput.value;

  // break if no value is entered in the input
  if (newVariationValue === "") return;
  exerciseListObj[valueCamelCase].variation[newVariationValue] = true;
  console.log(exerciseListObj[valueCamelCase]);
  localStorage.setItem("exerciseListObj", JSON.stringify(exerciseListObj));
});

submitExercise.addEventListener("click", () => {
  // // don't add empty entry to exercise list object
  // if (value === "") return;
  // const keys = Object.keys(exerciseListObj);
  // // console.log(keys);
  // // checks current list of movements; adds unique movements to exercise list
  // let isContained = false;
  // for (let i = 0; i < keys.length; i += 1) {
  //   const movement = exerciseListObj[valueCamelCase];
  //   if (movement) {
  //     isContained = true;
  //   }
  // }
  // if (!isContained) {
  //   exerciseListObj[valueCamelCase] = { variation: { none: true } };
  //   console.log(exerciseListObj);
  // }
  // //
  // utils.generateSetObj(newMovement);
  // console.log(workoutArray);
  // console.log(utils.displayObject(workoutArray[0]));
  // utils.incrementSetNumber();
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

// autoload custom meso input
generateMesocycleInputOther();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLFVBQVUsb0RBQXNCO0FBQ2hDLG1CQUFtQiwrQ0FBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxhQUFhO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci8uL3NyYy9leGVyY2lzZXMuanMiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjAxZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmJvZHkgZGl2IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbiNzcXVhdE9wdGlvbnMge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDIwMWY7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmJvZHkgZGl2IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3F1YXRPcHRpb25zIHtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBzYW1wbGVXb3Jrb3V0KCkge1xyXG4gIGNvbnN0IG9iaiA9IHtcclxuICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICBleGVyY2lzZTE6IHtcclxuICAgICAgc3F1YXQ6IHtcclxuICAgICAgICB2YXJpYXRpb246IFwicGF1c2VcIixcclxuICAgICAgICBzZXQxOiB7XHJcbiAgICAgICAgICB3ZWlnaHQ6IDEzNSxcclxuICAgICAgICAgIHJlcHM6IDUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQyOiB7XHJcbiAgICAgICAgICB3ZWlnaHQ6IDEzNSxcclxuICAgICAgICAgIHJlcHM6IDEwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXhlcmNpc2UyOiB7XHJcbiAgICAgIGJlbmNoX3ByZXNzOiB7XHJcbiAgICAgICAgdmFyaWF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICBzZXQxOiB7XHJcbiAgICAgICAgICB3ZWlnaHQ6IDEzNSxcclxuICAgICAgICAgIHJlcHM6IDUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQyOiB7XHJcbiAgICAgICAgICB3ZWlnaHQ6IDEzNSxcclxuICAgICAgICAgIHJlcHM6IDEwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4ZXJjaXNlTGlzdCA9IHtcclxuICBzcXVhdDoge1xyXG4gICAgdmFyaWF0aW9uOiB7XHJcbiAgICAgIG5vbmU6IHRydWUsXHJcbiAgICAgIHBhdXNlOiB0cnVlLFxyXG4gICAgICB0ZW1wbzoge1xyXG4gICAgICAgIGNvbmNlbnRyaWM6IDEsXHJcbiAgICAgICAgZWNjZW50cmljOiAzLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJlbmNoUHJlc3M6IHtcclxuICAgIHZhcmlhdGlvbjoge1xyXG4gICAgICBub25lOiB0cnVlLFxyXG4gICAgICBwYXVzZTogdHJ1ZSxcclxuICAgICAgdGVtcG86e1xyXG4gICAgICAgIGNvbmNlbnRyaWM6IDEsXHJcbiAgICAgICAgZWNjZW50cmljOiAzLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW5jbGluZUJlbmNoUHJlc3M6IHtcclxuICAgIHZhcmlhdGlvbjoge1xyXG4gICAgICBub25lOiB0cnVlLFxyXG4gICAgICBwYXVzZTogdHJ1ZSxcclxuICAgICAgdGVtcG86e1xyXG4gICAgICAgIGNvbmNlbnRyaWM6IDEsXHJcbiAgICAgICAgZWNjZW50cmljOiAzLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgb3ZlcmhlYWRQcmVzczoge1xyXG4gICAgdmFyaWF0aW9uOiB7XHJcbiAgICAgIG5vbmU6IHRydWUsXHJcbiAgICAgIHBhdXNlOiB0cnVlLFxyXG4gICAgICB0ZW1wbzp7XHJcbiAgICAgICAgY29uY2VudHJpYzogMSxcclxuICAgICAgICBlY2NlbnRyaWM6IDMsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICBkZWFkbGlmdDoge1xyXG4gICAgdmFyaWF0aW9uOiB7XHJcbiAgICAgIG5vbmU6IHRydWUsXHJcbiAgICAgIHBhdXNlOiB0cnVlLFxyXG4gICAgICB0ZW1wbzp7XHJcbiAgICAgICAgY29uY2VudHJpYzogMSxcclxuICAgICAgICBlY2NlbnRyaWM6IDMsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICBwdWxsdXA6IHtcclxuICAgIHZhcmlhdGlvbjoge1xyXG4gICAgICBjaGludXA6IHRydWUsXHJcbiAgICAgIG5ldXRyYWw6IHRydWUsXHJcbiAgICAgIG5vbmU6IHRydWUsXHJcbiAgICAgIHBhdXNlOiB0cnVlLFxyXG4gICAgICB0ZW1wbzp7XHJcbiAgICAgICAgY29uY2VudHJpYzogMSxcclxuICAgICAgICBlY2NlbnRyaWM6IDMsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvQ2FtZWxDYXNlKHN0cmluZykge1xyXG4gIC8vIGFycm93IGZ1bmN0aW9uIHVzZXMgdGhyb3dhd2F5IHZhcmlhYmxlIGZvciB0aGUgcmVnZXggbWF0Y2gsXHJcbiAgLy8gY2FwdHVyZSBncm91cCAwLCBhcyBwZXIgcmVwbGFjZSgpIGZvcm1hdFxyXG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy1fXFxzXSguKS9nLCAoXywgY2hhcikgPT4gY2hhci50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNhbWVsQ2FzZShzdHJpbmcpIHtcclxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIFwiJDEgJDJcIikudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldERhdGVJbnB1dFRvZGF5KCkge1xyXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUlucHV0XCIpO1xyXG5cclxuICAvLyBTcGxpdCBhdCAnVCcgdG8gcmVtb3ZlIHRpbWUgaW5mbyBhZnRlciBjYWxlbmRhciBkYXRlO1xyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcclxuICBkYXRlSW5wdXQudmFsdWUgPSB0b2RheTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xyXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGtleSkgPT5cclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKSxcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5wdXQoaW5wdXRUeXBlLCBpbnB1dElELCB3cmFwcGVySUQpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBzZXRBdHRyaWJ1dGVzKGlucHV0LCB7XHJcbiAgICB0eXBlOiBpbnB1dFR5cGUsXHJcbiAgICBuYW1lOiBpbnB1dElELFxyXG4gICAgaWQ6IGlucHV0SUQsXHJcbiAgICB2YWx1ZTogaW5wdXRJRCxcclxuICB9KTtcclxuICBzZXRBdHRyaWJ1dGVzKGxhYmVsLCB7IGZvcjogaW5wdXRJRCB9KTtcclxuICBzZXRBdHRyaWJ1dGVzKGRpdiwgeyBpZDogYCR7aW5wdXRJRH0ke3dyYXBwZXJJRH1gIH0pO1xyXG4gIGxhYmVsLnRleHRDb250ZW50ID0gaW5wdXRJRDtcclxuICBkaXYuYXBwZW5kKGxhYmVsLCBpbnB1dCk7XHJcblxyXG4gIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsRGF0YWxpc3QobGlzdElELCBvYmopIHtcclxuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdElEKTtcclxuXHJcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvbi52YWx1ZSA9IHJlbW92ZUNhbWVsQ2FzZShrZXlzW2ldKTtcclxuICAgIGxpc3QuYXBwZW5kKG9wdGlvbik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW92ZW1lbnRJbnB1dCgpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhlcmNpc2VJbnB1dFwiKTtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXNvY3ljbGVJbnB1dCgpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzb2N5Y2xlSW5wdXRcIik7XHJcbiAgaWYgKGlucHV0LnZhbHVlID09PSBcIm90aGVyXCIpIHtcclxuICAgIGNvbnN0IGlucHV0T3RoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc29jeWNsZUlucHV0T3RoZXJcIik7XHJcbiAgICByZXR1cm4gaW5wdXRPdGhlci52YWx1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWljcm9jeWNsZUlucHV0KCkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWNyb2N5Y2xlSW5wdXRcIik7XHJcbiAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V29ya291dE5hbWVJbnB1dCgpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya291dE5hbWVJbnB1dFwiKTtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWlnaHRJbnB1dCgpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VpZ2h0XCIpO1xyXG4gIHJldHVybiBpbnB1dC52YWx1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VpZ2h0VW5pdCgpIHtcclxuICBjb25zdCBjaGVja2VkUmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgJ2lucHV0W25hbWU9XCJwb3VuZEtpbG9cIl06Y2hlY2tlZCcsXHJcbiAgKTtcclxuICByZXR1cm4gY2hlY2tlZFJhZGlvLnZhbHVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXBzSW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcHNcIik7XHJcbiAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSSVJJbnB1dCgpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiUklSXCIpO1xyXG4gIHJldHVybiBpbnB1dC52YWx1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShpbnB1dElEKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElEKTtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlbXBvVmFsdWVzKCkge1xyXG4gIGNvbnN0IGVjY2VudHJpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWNjZW50cmljXCIpO1xyXG4gIGNvbnN0IGNvbmNlbnRyaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmNlbnRyaWNcIik7XHJcbiAgcmV0dXJuIFtlY2NlbnRyaWMudmFsdWUsIGNvbmNlbnRyaWMudmFsdWVdO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlKCkge1xyXG4gIGNvbnN0IGRhdGV0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlSW5wdXRcIik7XHJcbiAgcmV0dXJuIGRhdGV0aW1lLnZhbHVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGFydFRpbWUoKSB7XHJcbiAgY29uc3Qgc3RhcnRUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFRpbWVcIik7XHJcbiAgcmV0dXJuIHN0YXJ0VGltZS52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVuZFRpbWUoKSB7XHJcbiAgY29uc3QgZW5kVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kVGltZVwiKTtcclxuICByZXR1cm4gZW5kVGltZS52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhcmlhdGlvbklucHV0KCkge1xyXG4gIGNvbnN0IHZhcmlhdGlvbklucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFyaWF0aW9uSW5wdXRzXCIpO1xyXG4gIGNvbnN0IHZhcmlhdGlvbnMgPSB2YXJpYXRpb25JbnB1dHMuY2hpbGROb2RlcztcclxuICAvLyByZW5hbWUgeFxyXG4gIGNvbnN0IHZhcmlhdGlvbkFycmF5ID0gW107XHJcblxyXG4gIHZhcmlhdGlvbnMuZm9yRWFjaCgodmFyaWFudCkgPT4ge1xyXG4gICAgaWYgKHZhcmlhbnQuY2hpbGRyZW5bMV0uY2hlY2tlZCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh2YXJpYW50LmNoaWxkcmVuWzFdLnZhbHVlKTtcclxuICAgICAgdmFyaWF0aW9uQXJyYXkucHVzaCh2YXJpYW50LmNoaWxkcmVuWzFdLnZhbHVlKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coeCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHZhcmlhdGlvbkFycmF5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0V29ya291dERhdGVTdGFydChvYmopIHtcclxuICBjb25zdCB3b3Jrb3V0SGlzdG9yeU9iaiA9IG9iajtcclxuICBpZiAod29ya291dEhpc3RvcnlPYmpbYCR7Z2V0RGF0ZSgpfXwke2dldFN0YXJ0VGltZSgpfWBdID09PSB1bmRlZmluZWQpIHtcclxuICAgIHdvcmtvdXRIaXN0b3J5T2JqW2Ake2dldERhdGUoKX18JHtnZXRTdGFydFRpbWUoKX1gXSA9IHt9O1xyXG4gICAgLy8gY29uc29sZS5sb2cod29ya291dEhpc3RvcnlPYmopO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFdvcmtvdXRUaW1lKG9iaikge1xyXG4gIGNvbnN0IHdvcmtvdXRIaXN0b3J5T2JqID0gb2JqO1xyXG4gIHdvcmtvdXRIaXN0b3J5T2JqLnRpbWUgPSB7XHJcbiAgICBzdGFydDogZ2V0U3RhcnRUaW1lKCksXHJcbiAgICBlbmQ6IGdldEVuZFRpbWUoKSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0TnVtYmVyKCkge1xyXG4gIGNvbnN0IHNldENvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldE51bWJlclwiKTtcclxuICBjb25zdCBzZXROdW1iZXIgPSBOdW1iZXIoc2V0Q291bnRlci50ZXh0Q29udGVudCk7XHJcbiAgcmV0dXJuIHNldE51bWJlcjtcclxufVxyXG5cclxuY29uc3Qgc2V0TnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXROdW1iZXJcIik7XHJcbmV4cG9ydCBmdW5jdGlvbiBpbmNyZW1lbnRTZXROdW1iZXIoKSB7XHJcbiAgbGV0IG51bWJlciA9IE51bWJlcihzZXROdW1iZXIudGV4dENvbnRlbnQpO1xyXG4gIG51bWJlciArPSAxO1xyXG4gIHNldE51bWJlci50ZXh0Q29udGVudCA9IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0U2V0TnVtYmVyKCkge1xyXG4gIHNldE51bWJlci50ZXh0Q29udGVudCA9IDE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVNldE9iaihvYmopIHtcclxuICAvLyBkb2VzIG9iaiBuZWVkIHRvIGJlIGRlZmluZWQgYXMgaXQgaXMgaGVyZVxyXG4gIGNvbnN0IG1vdmVtZW50ID0gZ2V0TW92ZW1lbnRJbnB1dCgpO1xyXG4gIGNvbnN0IHNldCA9IGdldFNldE51bWJlcigpO1xyXG4gIGNvbnN0IHdlaWdodCA9IGdldFdlaWdodElucHV0KCk7XHJcbiAgY29uc3Qgd2VpZ2h0VW5pdCA9IGdldFdlaWdodFVuaXQoKTtcclxuICBjb25zdCByZXBzID0gZ2V0UmVwc0lucHV0KCk7XHJcbiAgY29uc3QgUklSID0gZ2V0UklSSW5wdXQoKTtcclxuICBjb25zdCB2YXJpYXRpb25JbnB1dCA9IGdldFZhcmlhdGlvbklucHV0KCk7XHJcblxyXG4gIGNvbnN0IG1vdmVtZW50T2JqID0gb2JqO1xyXG4gIGNvbnN0IHNldE9iaiA9IHtcclxuICAgIHZhcmlhdGlvbnM6IHt9LFxyXG4gICAgd2VpZ2h0LFxyXG4gICAgd2VpZ2h0VW5pdCxcclxuICAgIHJlcHMsXHJcbiAgICBSSVIsXHJcbiAgfTtcclxuXHJcbiAgaWYgKHZhcmlhdGlvbklucHV0Lmxlbmd0aCA8IDEpIHtcclxuICAgIHNldE9iai52YXJpYXRpb25zLm5vbmUgPSB0cnVlO1xyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhcmlhdGlvbklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAvLyBUT0RPIGNoZWNrIHRoaXMgaWYsIGRvZXNuJ3QgbG9vayBuZWVkZWRcclxuICAgIGlmICh2YXJpYXRpb25JbnB1dC5sZW5ndGggPCAxKSBjb25zb2xlLmxvZyhcIm5vbmVcIik7XHJcbiAgICBzZXRPYmoudmFyaWF0aW9uc1t2YXJpYXRpb25JbnB1dFtpXV0gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgbW92ZW1lbnRPYmpbbW92ZW1lbnRdW2BzZXQke3NldH1gXSA9IHNldE9iajtcclxuICAvLyByZXR1cm4gY3VycmVudGx5IG5vdCBuZWVkZWRcclxuICAvLyByZXR1cm4gbW92ZW1lbnRPYmo7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU1vdmVtZW50T2JqKCkge1xyXG4gIGNvbnN0IG1vdmVtZW50ID0gZ2V0TW92ZW1lbnRJbnB1dCgpO1xyXG4gIGNvbnN0IG1lc29jeWNsZSA9IGdldE1lc29jeWNsZUlucHV0KCk7XHJcbiAgY29uc3QgbWljcm9jeWNsZSA9IGdldE1pY3JvY3ljbGVJbnB1dCgpO1xyXG4gIGNvbnN0IHdvcmtvdXROYW1lID0gZ2V0V29ya291dE5hbWVJbnB1dCgpO1xyXG5cclxuICBjb25zdCBvYmogPSB7XHJcbiAgICBtZXNvY3ljbGUsXHJcbiAgICBtaWNyb2N5Y2xlLFxyXG4gICAgd29ya291dE5hbWUsXHJcbiAgICBbbW92ZW1lbnRdOiB7fSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG4vLyBhY2NlcHRzIGFuIGFycmF5IG9mIG1vdmVtZW50IG9iamVjdHMgYXMgYSBwYXJhbWV0ZXJcclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlV29ya291dE9iaihtb3ZlbWVudHMpIHtcclxuICBjb25zdCBvYmogPSB7fTtcclxuICBvYmouZGF0ZSA9IGdldERhdGUoKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3ZlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IG1vdmVtZW50ID0gbW92ZW1lbnRzW2ldO1xyXG4gICAgb2JqW2BleGVyY2lzZSR7aSArIDF9YF0gPSBtb3ZlbWVudDtcclxuICB9XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlPYmplY3Qob2JqKSB7XHJcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudFdvcmtvdXREaXNwbGF5XCIpO1xyXG4gIGNvbnN0IG1vdmVtZW50ID0gT2JqZWN0LmtleXMob2JqKTtcclxuXHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIC8vIE9iamVjdC5rZXlzKCkgcmV0dXJucyBhbiBhcnJheVxyXG4gIHAudGV4dENvbnRlbnQgPSBtb3ZlbWVudFswXTtcclxuICBkaXNwbGF5LmFwcGVuZChwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlXb3Jrb3V0SW5Qcm9ncmVzcyh3b3Jrb3V0KSB7fVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgKiBhcyBleGVyY2lzZXMgZnJvbSBcIi4vZXhlcmNpc2VzXCI7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG4vLyBUT0RPXHJcbi8vIGJpZyBsaXN0IG9mIGV4ZXJjaXNlIGZ1bGwgbmFtZXMsIGUuZy4gZmxhdCBiYXJiZWxsIGJlbmNoLCBpbmNsaW5lIGR1bWJlbGwgYmVuY2ggZXRjLlxyXG4vLyBtYXliZSBzZWxlY3Qgb3B0aW9ucyB0byBuYXJyb3cgZG93biBhIHBvcHVsYXRlZCBsaXN0IG9mIGV2ZXJ5IGV4ZXJjaXNlXHJcbi8vIHdoaWNoIGlzIGFsc28gZmlsdGVyYWJsZSBieSBhIHNlYXJjaCBmaWVsZC5cclxuLy8gcmVhZCBtb3JlIG9uIGRlc3RydWN0dXJpbmdcclxuLy8gaW5zdGVhZCBvZiBkaXJlY3RseSBhZGRpbmcgbmV3IGV4ZXJjaXNlLCBoYXZlIHNvbWUga2luZCBvZiBkaWFsb2d1ZVxyXG4vLyB0b2dnbGUgdG8gc3dpdGNoIGJldHdlZW4gUlBFIG9yIFJpUlxyXG4vLyB3cml0ZSBmdW5jdGlvbiB0byBhZGQgZW50cnkgdG8gZXhlcmNpc2UgbGlzdFxyXG4vLyBjb25zaWRlciBkaXNwbGF5aW5nIG1vdmVtZW50cyBhcyBjYXBpdGFsIGZpcnN0IGxldHRlciB2cyBhbGwgbG93ZXJcclxuLy8gY29uc2lkZXIgYSBudW1iZXIgaGlkZGVuIGZyb20gdXNlciBmb3Igb3JkZXJpbmcgbW92ZW1lbnRzIGluIGEgd29ya291dFxyXG4vLyBuZXcgdmFyaWF0aW9uIGpzXHJcbi8vIGNoYW5nZSB2YXJpYXRpb24gYnV0dG9uIHRvIHNvbWV0aGluZyBsaWtlIGNsaWNrYWJsZSB0ZXh0XHJcbi8vIHdvcmsgb24gbmV3IHZhcmlhdGlvbiBsb2dpY1xyXG4vLyBhZGQgbW92ZW1lbnRzIHRvIHdvcmtvdXQgYXJyYXksIGRpc3BsYXkgYXJyYXkgY29udGVudHMgaW4gc29tZSBjb2xsYXBzaWJsZSBmb3JtXHJcbi8vIGl0ZXJhdGUgdGhyb3VnaCB0aGUgd29ya291dCBhcnJheSB0byBidWlsZCB0aGUgZmluYWwgd29ya291dCBvYmplY3RcclxuLy8gbWVyaXQgdG8gc2ltcGx5IHN0b3Jpbmcgd29ya291dCBkYXRhIGFzIGFycmF5IG9mIG9iamVjdHMsIGZpcnN0IGFycmF5IGl0ZW0gaXMgZGF0ZT9cclxuLy8gXl5eLCBidWlsZCBhcyBvYmogZnJvbSBzdGFydCwgYXBwbHkgdXNlciBkYXRlIGR1cmluZyBmaW5hbCBzdWJtaXRcclxuLy8gc2V0IGlucHV0IHN0YXJ0cyBhdCAxIGFuZCBpbmNyZW1lbnRzIGl0c2VsZiBvdXRzaWRlIHVzZXIgY29udHJvbCAoY2FuIGVkaXQgbGF0ZXIpXHJcbi8vIGRpZmZlcmVudCBsaXN0ZW5lcnMgZm9yIG1vdmVtZW50IGFuZCBzZXQgb2JqZWN0c1xyXG4vLyB3b3JrIG9uIGJ1aWxkaW5nIHdvcmtvdXQgMSBzZXQgYXQgYSB0aW1lXHJcbi8vIGtlZXAgc2V0IGluZm8gZ3JleWVkIG91dCB1bnRpbCBtb3ZlbWVudCBhZGRlZCB0byB3b3Jrb3V0XHJcbi8vIHdoeSBkb2VzIG1vdmVtZW50IG5hbWUgY29tZSBvdXQgd2l0aCBhIHNwYWNlXHJcbi8vIHNhbml0aXplIGdldG1vdmVtZW50aW5wdXRcclxuLy8gcmV0aGluayBob3cgd29ya291dCBvYmplY3RzIGFyZSBidWlsdFxyXG4vLyBmdW5jdGlvbnMgdG8gZ2V0IHRpbWUgaW5wdXRzXHJcbi8vIHJldmlzaXQgT2JqZWN0LmFzc2lnbigpIGZvciByZXBlYXQgc2V0c1xyXG4vLyBmaW5kIHdheSB0byB0cmFjayBvcmRlciBvZiBleGVyY2lzZXNcclxuLy8gZml4IGJsYW5rIG1vdmVtZW50IGZpZWxkXHJcbi8vIGxvY2FsIHN0b3JhZ2UgZm9yIG5ldyB1bmlxdWUgbW92ZW1lbnRcclxuLy8gbWFrZSBzdXJlIHlvdSBjYW4gYWRkIG5ldyB0ZW1wbyB0aW1lcyBpbiB2YXJpYXRpb25zXHJcbi8vIG1lc29jeWNsZSBzZWxlY3Qgb3RoZXIgYnJpbmcgdXAgYSB0ZXh0IGlucHV0XHJcbi8vIG1lc29jeWNsZSBtYWtlIHN1cmUgZGVmYXVsdCBzZWxlY3Rpb24gc3RheXMgY29uc3RhbnQgZm9yIGEgZ2l2ZW4gd29ya291dFxyXG4vLyBsaW5rIG5ldyBjeWNsZSBpbnB1dHMgaW50byBvYmpcclxuLy8gcGFja2FnZSBleGVyY2lzZSBldmVudCBsaXN0ZW5lciBpbnRvIGZ1bmN0aW9uXHJcblxyXG4vLyBjb25zb2xlLmxvZyhleGVyY2lzZXMuc2FtcGxlV29ya291dCgpKTtcclxuXHJcbmNvbnN0IGV4ZXJjaXNlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4ZXJjaXNlSW5wdXRcIik7XHJcbi8vIGNvbnN0IGV4ZXJjaXNlTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4ZXJjaXNlTGlzdFwiKTtcclxuY29uc3Qgc3VibWl0RXhlcmNpc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdEV4ZXJjaXNlXCIpO1xyXG4vLyBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG5jb25zdCB2YXJpYXRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YXJpYXRpb25JbnB1dHNcIik7XHJcbmNvbnN0IG5ld1ZhcmlhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0TmV3VmFyaWF0aW9uXCIpO1xyXG5jb25zdCBuZXdNb3ZlbWVudEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3TW92ZW1lbnRCdXR0b25cIik7XHJcbi8vIGNvbnN0IHVzZXJEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVJbnB1dCcpO1xyXG5jb25zdCBkYXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlQnV0dG9uXCIpO1xyXG5jb25zdCBhZGRNb3ZlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkTW92ZW1lbnRcIik7XHJcbmNvbnN0IG1lc29jeWNsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNvY3ljbGVJbnB1dFwiKTtcclxuXHJcbmxldCBuZXdNb3ZlbWVudDtcclxuXHJcbmNvbnN0IHdvcmtvdXRBcnJheSA9IFtdO1xyXG5cclxuY29uc3QgZXhlcmNpc2VMaXN0T2JqID1cclxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhlcmNpc2VMaXN0T2JqXCIpKSB8fCBleGVyY2lzZXMuZXhlcmNpc2VMaXN0O1xyXG4vLyByZXRyaWV2ZSBzYXZlZCBvYmplY3Qgb3IgaW5pdGlhbGl6ZSBhIGJsYW5rIG9iamVjdFxyXG5jb25zdCB3b3Jrb3V0SGlzdG9yeU9iaiA9XHJcbiAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndvcmtvdXRIaXN0b3J5T2JqXCIpKSB8fCB7fTtcclxuY29uc29sZS5sb2cod29ya291dEhpc3RvcnlPYmopO1xyXG5jb25zb2xlLmxvZyhleGVyY2lzZUxpc3RPYmopO1xyXG5jb25zdCBtb3ZlbWVudE9iaiA9IHt9O1xyXG5jb25zdCB3b3Jrb3V0T2JqID0ge307XHJcblxyXG51dGlscy5zZXREYXRlSW5wdXRUb2RheSgpO1xyXG5cclxuZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIC8vIHB1dCB1c2VyIGRhdGUgaW5wdXQgaW50byB3b3Jrb3V0IGFycmF5XHJcblxyXG4gIGNvbnN0IHRlbXAgPSB1dGlscy5nZW5lcmF0ZU1vdmVtZW50T2JqKCk7XHJcbiAgdXRpbHMuZ2VuZXJhdGVTZXRPYmoodGVtcCk7XHJcbiAgY29uc29sZS5sb2codGVtcCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVNZXNvY3ljbGVJbnB1dE90aGVyKCkge1xyXG4gIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc29jeWNsZVdyYXBcIik7XHJcbiAgaWYgKG1lc29jeWNsZUlucHV0LnZhbHVlID09PSBcIm90aGVyXCIpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdXRpbHMuc2V0QXR0cmlidXRlcyhpbnB1dCwge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgbmFtZTogXCJtZXNvY3ljbGVJbnB1dE90aGVyXCIsXHJcbiAgICAgIGlkOiBcIm1lc29jeWNsZUlucHV0T3RoZXJcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ3VzdG9tXCIsXHJcbiAgICB9KTtcclxuICAgIHdyYXAuYXBwZW5kKGlucHV0KTtcclxuICAgIC8vIGVsZW1lbnQgY3JlYXRpb24sIHRoaW5rIGFib3V0IHNldGF0dHJpYnV0ZXMoKVxyXG4gIH1cclxufVxyXG5cclxubWVzb2N5Y2xlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgZ2VuZXJhdGVNZXNvY3ljbGVJbnB1dE90aGVyKCk7XHJcblxyXG4gIC8vIHJlbW92ZSBjdXN0b20gdGV4dCBpbnB1dCB3aGVuIHNlbGVjdGluZyBhIGRpZmZlcmVudCBvcHRpb25cclxuICBpZiAobWVzb2N5Y2xlSW5wdXQudmFsdWUgIT09IFwib3RoZXJcIikge1xyXG4gICAgLy8gY2hlY2sgaWYgdGhlIGN1c3RvbSBtZXNvY3ljbGUgaW5wdXQgZXhpc3RzLCBpZiBzbywgcmVtb3ZlIGl0IGZvciBvdGhlciBzZWxlY3Qgb3B0aW9uc1xyXG4gICAgY29uc3QgbWVzb2N5Y2xlSW5wdXRPdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzb2N5Y2xlSW5wdXRPdGhlclwiKTtcclxuICAgIGlmIChtZXNvY3ljbGVJbnB1dE90aGVyKSBtZXNvY3ljbGVJbnB1dE90aGVyLnJlbW92ZSgpO1xyXG4gIH1cclxufSk7XHJcblxyXG51dGlscy5maWxsRGF0YWxpc3QoXCJleGVyY2lzZUlucHV0T3B0aW9uc1wiLCBleGVyY2lzZUxpc3RPYmopO1xyXG5cclxubGV0IHZhbHVlID0gdXRpbHMuZ2V0TW92ZW1lbnRJbnB1dCgpO1xyXG5sZXQgdmFsdWVDYW1lbENhc2UgPSB1dGlscy50b0NhbWVsQ2FzZSh2YWx1ZS50b0xvd2VyQ2FzZSgpKTtcclxuLy8gY29uc29sZS5sb2codmFsdWVDYW1lbENhc2UpO1xyXG5mdW5jdGlvbiBtb3ZlbWVudFRleHRNYXRjaCgpIHtcclxuICBpZiAoZXhlcmNpc2VMaXN0T2JqW3ZhbHVlQ2FtZWxDYXNlXSkge1xyXG4gICAgLy8gaGlkZSBhZGQgbW92ZW1lbnQgYnV0dG9uIGZvciBleGlzdGluZyBtb3ZlbWVudHNcclxuICAgIGFkZE1vdmVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHZhcmlhdGlvbnMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnNvbGUubG9nKFwic3VjZXNzXCIpO1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGV4ZXJjaXNlTGlzdE9ialt2YWx1ZUNhbWVsQ2FzZV0udmFyaWF0aW9uKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAoZXhlcmNpc2VMaXN0T2JqW3ZhbHVlQ2FtZWxDYXNlXS52YXJpYXRpb25ba2V5c1tpXV0pIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVDaGVja2JveElucHV0ID0gdXRpbHMuY3JlYXRlSW5wdXQoXHJcbiAgICAgICAgICBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICBrZXlzW2ldLFxyXG4gICAgICAgICAgXCJWYXJpYXRpb25DaGVja1wiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyaWF0aW9ucy5hcHBlbmQoY3JlYXRlQ2hlY2tib3hJbnB1dCk7XHJcblxyXG4gICAgICAgIC8vIHByZS1jaGVjayB0aGUgJ25vbmUgdmFyaWF0aW9uIGFmdGVyIGl0J3MgZGl2IGlzIGFwcGVuZGVkXHJcbiAgICAgICAgaWYgKGtleXNbaV0gPT09IFwibm9uZVwiKSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbmVcIikuY2hlY2tlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIGV4cGFuZCB0aGUgdGVtcG8gY2hlY2tib3ggaWYgc2VsZWN0ZWQgZm9yIGVjY2VudHJpYy9jb25jZW50cmljIGlucHV0c1xyXG4gICAgICAgIGlmIChrZXlzW2ldID09PSBcInRlbXBvXCIpIHtcclxuICAgICAgICAgIGNyZWF0ZUNoZWNrYm94SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgdGVtcG9XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICB0ZW1wb1dyYXAuaWQgPSBcInRlbXBvVmFyaWF0aW9uV3JhcFwiO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGVjY2VudHJpYyA9IHV0aWxzLmNyZWF0ZUlucHV0KFxyXG4gICAgICAgICAgICAgICAgXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgIFwiZWNjZW50cmljXCIsXHJcbiAgICAgICAgICAgICAgICBcIldyYXBcIixcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGNvbmNlbnRyaWMgPSB1dGlscy5jcmVhdGVJbnB1dChcclxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbmNlbnRyaWNcIixcclxuICAgICAgICAgICAgICAgIFwiV3JhcFwiLFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgdGVtcG9XcmFwLmFwcGVuZChlY2NlbnRyaWMsIGNvbmNlbnRyaWMpO1xyXG4gICAgICAgICAgICAgIHZhcmlhdGlvbnMuYXBwZW5kKHRlbXBvV3JhcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFldmVudC50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRlbXBvV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcG9WYXJpYXRpb25XcmFwXCIpO1xyXG4gICAgICAgICAgICAgIHRlbXBvV3JhcC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbm1vdmVtZW50VGV4dE1hdGNoKCk7XHJcbmV4ZXJjaXNlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAvLyBzaG93IGFkZCBtb3ZlbWVudCBidXR0b24gdG8gY2F0Y2ggbmV3IHVuaXF1ZSBtb3ZlbWVudCBuYW1lc1xyXG4gIGFkZE1vdmVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gIHZhbHVlID0gdXRpbHMuZ2V0TW92ZW1lbnRJbnB1dCgpO1xyXG4gIHZhbHVlQ2FtZWxDYXNlID0gdXRpbHMudG9DYW1lbENhc2UodmFsdWUudG9Mb3dlckNhc2UoKSk7XHJcblxyXG4gIC8vIGNsZWFyIHZhcmlhdGlvbnMgc28gdGhleSBkb24ndCBnZXQgc3R1Y2sgd2hlbiBjaGFuZ2luZyBiZXR3ZWVuIGtub3duIG1vdmVtZW50c1xyXG4gIHZhcmlhdGlvbnMuaW5uZXJIVE1MID0gXCJcIjtcclxuICBtb3ZlbWVudFRleHRNYXRjaCgpO1xyXG59KTtcclxuXHJcbm5ld01vdmVtZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgZGF0ZVN0YXJ0VGltZSA9IGAke3V0aWxzLmdldERhdGUoKX18JHt1dGlscy5nZXRTdGFydFRpbWUoKX1gO1xyXG4gIC8vIHJ1biB0aGlzIGlmIGJsb2NrIGZvciB0aGUgZmlyc3Qgc2V0IG9ubHlcclxuICBpZiAoTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0TnVtYmVyXCIpLnRleHRDb250ZW50KSA9PT0gMSkge1xyXG4gICAgLy8gVE9ETyBkYXRlYmxvY2sgb25seSBuZWVkcyB0byBydW4gb25jZSwgY2hlY2sgZm9yIGNvbnRlbnQgZmlyc3RcclxuXHJcbiAgICB1dGlscy5zZXRXb3Jrb3V0RGF0ZVN0YXJ0KHdvcmtvdXRIaXN0b3J5T2JqKTtcclxuXHJcbiAgICB1dGlscy5zZXRXb3Jrb3V0VGltZSh3b3Jrb3V0SGlzdG9yeU9ialtkYXRlU3RhcnRUaW1lXSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh3b3Jrb3V0SGlzdG9yeU9iaik7XHJcblxyXG4gICAgbmV3TW92ZW1lbnQgPSB1dGlscy5nZW5lcmF0ZU1vdmVtZW50T2JqKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhuZXdNb3ZlbWVudCk7XHJcblxyXG4gICAgdXRpbHMuZ2VuZXJhdGVTZXRPYmoobmV3TW92ZW1lbnQpO1xyXG4gICAgLy8gY29uc29sZS5sb2cobmV3TW92ZW1lbnQpO1xyXG4gICAgT2JqZWN0LmFzc2lnbih3b3Jrb3V0SGlzdG9yeU9ialtkYXRlU3RhcnRUaW1lXSwgbmV3TW92ZW1lbnQpO1xyXG4gICAgY29uc29sZS5sb2cod29ya291dEhpc3RvcnlPYmopO1xyXG5cclxuICAgIHV0aWxzLmluY3JlbWVudFNldE51bWJlcigpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB1dGlscy5nZW5lcmF0ZVNldE9iaihuZXdNb3ZlbWVudCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhuZXdNb3ZlbWVudCk7XHJcbiAgICBPYmplY3QuYXNzaWduKHdvcmtvdXRIaXN0b3J5T2JqW2RhdGVTdGFydFRpbWVdLCBuZXdNb3ZlbWVudCk7XHJcbiAgICBjb25zb2xlLmxvZyh3b3Jrb3V0SGlzdG9yeU9iaik7XHJcbiAgICB1dGlscy5pbmNyZW1lbnRTZXROdW1iZXIoKTtcclxuICB9XHJcblxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid29ya291dEhpc3RvcnlPYmpcIiwgSlNPTi5zdHJpbmdpZnkod29ya291dEhpc3RvcnlPYmopKTtcclxufSk7XHJcblxyXG5hZGRNb3ZlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHZhbHVlID0gdXRpbHMuZ2V0TW92ZW1lbnRJbnB1dCgpO1xyXG4gIHZhbHVlQ2FtZWxDYXNlID0gdXRpbHMudG9DYW1lbENhc2UodmFsdWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgZXhlcmNpc2VMaXN0T2JqW3ZhbHVlQ2FtZWxDYXNlXSA9IHtcclxuICAgIHZhcmlhdGlvbjoge1xyXG4gICAgICBub25lOiB0cnVlLFxyXG4gICAgICBwYXVzZTogdHJ1ZSxcclxuICAgICAgdGVtcG86IHtcclxuICAgICAgICBjb25jZW50cmljOiAxLFxyXG4gICAgICAgIGVjY2VudHJpYzogMyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhleGVyY2lzZUxpc3RPYmopO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXhlcmNpc2VMaXN0T2JqXCIsIEpTT04uc3RyaW5naWZ5KGV4ZXJjaXNlTGlzdE9iaikpO1xyXG59KTtcclxuXHJcbm5ld1ZhcmlhdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IG5ld1ZhcmlhdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdWYXJpYXRpb25JbnB1dFwiKTtcclxuICBjb25zdCBuZXdWYXJpYXRpb25WYWx1ZSA9IG5ld1ZhcmlhdGlvbklucHV0LnZhbHVlO1xyXG5cclxuICAvLyBicmVhayBpZiBubyB2YWx1ZSBpcyBlbnRlcmVkIGluIHRoZSBpbnB1dFxyXG4gIGlmIChuZXdWYXJpYXRpb25WYWx1ZSA9PT0gXCJcIikgcmV0dXJuO1xyXG4gIGV4ZXJjaXNlTGlzdE9ialt2YWx1ZUNhbWVsQ2FzZV0udmFyaWF0aW9uW25ld1ZhcmlhdGlvblZhbHVlXSA9IHRydWU7XHJcbiAgY29uc29sZS5sb2coZXhlcmNpc2VMaXN0T2JqW3ZhbHVlQ2FtZWxDYXNlXSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJleGVyY2lzZUxpc3RPYmpcIiwgSlNPTi5zdHJpbmdpZnkoZXhlcmNpc2VMaXN0T2JqKSk7XHJcbn0pO1xyXG5cclxuc3VibWl0RXhlcmNpc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAvLyAvLyBkb24ndCBhZGQgZW1wdHkgZW50cnkgdG8gZXhlcmNpc2UgbGlzdCBvYmplY3RcclxuICAvLyBpZiAodmFsdWUgPT09IFwiXCIpIHJldHVybjtcclxuICAvLyBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZXhlcmNpc2VMaXN0T2JqKTtcclxuICAvLyAvLyBjb25zb2xlLmxvZyhrZXlzKTtcclxuICAvLyAvLyBjaGVja3MgY3VycmVudCBsaXN0IG9mIG1vdmVtZW50czsgYWRkcyB1bmlxdWUgbW92ZW1lbnRzIHRvIGV4ZXJjaXNlIGxpc3RcclxuICAvLyBsZXQgaXNDb250YWluZWQgPSBmYWxzZTtcclxuICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAvLyAgIGNvbnN0IG1vdmVtZW50ID0gZXhlcmNpc2VMaXN0T2JqW3ZhbHVlQ2FtZWxDYXNlXTtcclxuICAvLyAgIGlmIChtb3ZlbWVudCkge1xyXG4gIC8vICAgICBpc0NvbnRhaW5lZCA9IHRydWU7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG4gIC8vIGlmICghaXNDb250YWluZWQpIHtcclxuICAvLyAgIGV4ZXJjaXNlTGlzdE9ialt2YWx1ZUNhbWVsQ2FzZV0gPSB7IHZhcmlhdGlvbjogeyBub25lOiB0cnVlIH0gfTtcclxuICAvLyAgIGNvbnNvbGUubG9nKGV4ZXJjaXNlTGlzdE9iaik7XHJcbiAgLy8gfVxyXG4gIC8vIC8vXHJcbiAgLy8gdXRpbHMuZ2VuZXJhdGVTZXRPYmoobmV3TW92ZW1lbnQpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHdvcmtvdXRBcnJheSk7XHJcbiAgLy8gY29uc29sZS5sb2codXRpbHMuZGlzcGxheU9iamVjdCh3b3Jrb3V0QXJyYXlbMF0pKTtcclxuICAvLyB1dGlscy5pbmNyZW1lbnRTZXROdW1iZXIoKTtcclxufSk7XHJcblxyXG5jb25zdCBjbGVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xlYXJcIik7XHJcbmNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbn0pO1xyXG5cclxuLy8gYXV0b2xvYWQgY3VzdG9tIG1lc28gaW5wdXRcclxuZ2VuZXJhdGVNZXNvY3ljbGVJbnB1dE90aGVyKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==