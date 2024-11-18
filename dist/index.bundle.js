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
  background-color: #36393e;
  color: white;
}

body div {
  border: 1px solid white;
  margin: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd","sourcesContent":["body {\r\n  background-color: #36393e;\r\n  color: white;\r\n}\r\n\r\nbody div {\r\n  border: 1px solid white;\r\n  margin: 10px;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony export */   getTimeZone: () => (/* binding */ getTimeZone),
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
function getTimeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
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
  const variationArray = [];

  variations.forEach((variant) => {
    // children[1] accounts for the label element at the [0] spot
    if (variant.children[1].checked) {
      // console.log(variant.children[1]);
      variationArray.push(variant.children[1].value);
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
  const setNumber = Number(setCounter.value);
  return setNumber;
}

function incrementSetNumber() {
  const setNumber = document.getElementById("setNumber");

  setNumber.value = Number(setNumber.value) + 1;
}

function resetSetNumber() {
  const setNumber = document.getElementById("setNumber");
  setNumber.value = 1;
}

function generateSetObj(obj) {
  // TODO does obj need to be defined as it is here
  const movement = getMovementInput();
  const set = getSetNumber();
  const weight = getWeightInput();
  const weightUnit = getWeightUnit();
  const reps = getRepsInput();
  const RIR = getRIRInput();
  const variationInput = getVariationInput();
  console.log(obj);

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
  console.log(movementObj);
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
  obj.timeZone = getTimeZone();

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


/***/ }),

/***/ "./src/exercises.json":
/*!****************************!*\
  !*** ./src/exercises.json ***!
  \****************************/
/***/ ((module) => {

module.exports = JSON.parse('{"highBarSquat":{"muscleGroups":{"quad":1,"gluteMax":0.75,"hamstring":0.45,"erector":0.55,"adductor":0.2},"variation":{"pause":true,"barbell":true,"band":true,"tempo":{"concentric":1,"eccentric":3}}},"lowBarSquat":{"muscleGroups":{"gluteMax":1,"hamstring":0.75,"quad":0.65,"erector":0.65,"adductor":0.2},"variation":{"pause":true,"barbell":true,"band":true,"tempo":{"concentric":1,"eccentric":3}}},"frontSquat":{"muscleGroups":{"quad":1,"gluteMax":0.65,"erector":0.55,"hamstring":0.35},"variation":{"pause":true,"barbell":true,"band":true,"tempo":{"concentric":1,"eccentric":3}}},"safteySquatBarSquat":{"muscleGroups":{"quad":1,"erector":0.75,"gluteMax":0.65,"hamstring":0.45},"variation":{"pause":true,"band":true,"tempo":{"concentric":1,"eccentric":3}}},"gobletSquat":{"muscleGroups":{"quad":1,"gluteMax":0.65,"erector":0.45,"hamstring":0.45},"variation":{"pause":true,"dumbbell":true,"kettlebell":true,"tempo":{"concentric":1,"eccentric":3}}},"zercherSquat":{"muscleGroups":{"quad":1,"erector":0.75,"gluteMax":0.65,"trap":0.55,"rhomboid":0.55},"variation":{"pause":true,"barbell":true,"band":true,"tempo":{"concentric":1,"eccentric":3}}},"slantBoardSquat":{"muscleGroups":{"quad":1,"gluteMax":0.45,"calf":0.35,"hamstring":0.35},"variation":{"pause":true,"dumbbell":true,"barbell":true,"kettlebell":true,"tempo":{"concentric":1,"eccentric":3}}},"sumoSquat":{"muscleGroups":{"gluteMax":1,"adductor":0.85,"quad":0.6,"hamstring":0.45,"erector":0.35},"variation":{"pause":true,"barbell":true,"band":true,"tempo":{"concentric":1,"eccentric":3}}},"splitSquat":{"muscleGroups":{"quad":1,"gluteMax":0.75,"hamstring":0.45,"calf":0.35},"variation":{"pause":true,"dumbbell":true,"barbell":true,"tempo":{"concentric":1,"eccentric":3}}},"pistolSquat":{"muscleGroups":{"quad":1,"gluteMax":0.85,"hamstring":0.45,"calf":0.35},"variation":{"pause":true,"dumbbell":true,"kettlebell":true,"barbell":true,"tempo":{"concentric":1,"eccentric":3}}},"sissySquat":{"muscleGroups":{"quad":1,"hipFlexor":0.45,"calf":0.35},"variation":{"pause":true,"dumbbell":true,"kettlebell":true,"barbell":true,"tempo":{"concentric":1,"eccentric":3}}},"bulgarianSplitSquat":{"muscleGroups":{"quad":1,"gluteMax":0.85,"hamstring":0.45,"calf":0.35},"variation":{"pause":true,"dumbbell":true,"barbell":true,"tempo":{"concentric":1,"eccentric":3}}},"hackSquat":{"muscleGroups":{"quad":1,"gluteMax":0.65,"hamstring":0.45,"calf":0.45},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"pendulumSquat":{"muscleGroups":{"quad":1,"gluteMax":0.65,"hamstring":0.45,"calf":0.45},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"beltSquat":{"muscleGroups":{"quad":1,"gluteMax":0.75,"hamstring":0.55,"calf":0.35},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"legPress":{"muscleGroups":{"quad":1,"gluteMax":0.3,"hamstring":0.2},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"lunge":{"muscleGroups":{"quad":1,"gluteMax":0.65,"hamstring":0.45,"calf":0.35},"variation":{"pause":true,"dumbbell":true,"barbell":true,"tempo":{"concentric":1,"eccentric":3}}},"reverseLunge":{"muscleGroups":{"quad":1,"gluteMax":0.75,"hamstring":0.55,"calf":0.35},"variation":{"pause":true,"dumbbell":true,"barbell":true,"tempo":{"concentric":1,"eccentric":3}}},"walkingLunge":{"muscleGroups":{"quad":1,"gluteMax":0.75,"hamstring":0.45,"calf":0.35},"variation":{"pause":true,"dumbbell":true,"barbell":true,"tempo":{"concentric":1,"eccentric":3}}},"quadExtensionMachine":{"muscleGroups":{"quad":1},"variation":{"pause":true,"single":true,"tempo":{"concentric":1,"eccentric":3}}},"benchPress":{"muscleGroups":{"pec":1,"tricep":0.6,"antDelt":0.25},"variation":{"pause":true,"barbell":true,"dumbbell":true,"tempo":{"concentric":1,"eccentric":3}}},"declineBenchPress":{"muscleGroups":{"pec":1,"tricep":0.65,"serratus":0.35,"antDelt":0.25},"variation":{"pause":true,"barbell":true,"dumbbell":true,"tempo":{"concentric":1,"eccentric":3}}},"inclineBenchPress":{"muscleGroups":{"pec":1,"tricep":0.45,"antDelt":0.5},"variation":{"pause":true,"barbell":true,"dumbbell":true,"tempo":{"concentric":1,"eccentric":3}}},"swissBarBenchPress":{"muscleGroups":{"pec":1,"tricep":0.85,"antDelt":0.65,"serratus":0.35},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"hexPress":{"muscleGroups":{"pec":1,"tricep":0.85,"antDelt":0.55,"serratus":0.35},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"floorPress":{"muscleGroups":{"pec":1,"tricep":0.85,"antDelt":0.65,"serratus":0.35},"variation":{"pause":true,"barbell":true,"dumbbell":true,"tempo":{"concentric":1,"eccentric":3}}},"dip":{"muscleGroups":{"tricep":1,"pec":0.7,"antDelt":0.5},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"benchDip":{"muscleGroups":{"tricep":1,"antDelt":0.5,"pec":0.25},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"pushup":{"muscleGroups":{"pec":1,"tricep":0.65,"antDelt":0.55,"serratus":0.45},"variation":{"pause":true,"incline":true,"tempo":{"concentric":1,"eccentric":3}}},"declinePushup":{"muscleGroups":{"pec":1,"antDelt":0.85,"tricep":0.65},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"fly":{"muscleGroups":{"pec":1,"antDelt":0.55,"bicep":0.35,"serratus":0.25},"variation":{"pause":true,"cable":true,"dumbbell":true,"tempo":{"concentric":1,"eccentric":3}}},"flyMachine":{"muscleGroups":{"pec":1,"antDelt":0.45,"bicep":0.25,"serratus":0.25},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"chestPressMachine":{"muscleGroups":{"pec":1,"tricep":0.65,"antDelt":0.55,"serratus":0.45},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"overheadPress":{"muscleGroups":{"antDelt":1,"tricep":0.75,"trap":0.3,"pec":0.25},"variation":{"pause":true,"barbell":true,"dumbbell":true,"seated":true,"tempo":{"concentric":1,"eccentric":3}}},"shoulderPressMachine":{"muscleGroups":{"antDelt":1,"tricep":0.85,"trap":0.3,"pec":0.25},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"pushPress":{"muscleGroups":{"antDelt":1,"tricep":0.75,"core":0.3,"quad":0.3,"gluteMax":0.3,"trap":0.3,"pec":0.25},"variation":{"pause":true,"barbell":true,"dumbbell":true,"tempo":{"concentric":1,"eccentric":3}}},"logPress":{"muscleGroups":{"antDelt":1,"tricep":0.85,"trap":0.75,"pec":0.55,"forearm":0.55},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"logCleanAndPress":{"muscleGroups":{"antDelt":1,"gluteMax":1,"quad":0.85,"tricep":0.85,"upperBack":0.75,"erector":0.75,"hamstring":0.75,"core":0.75,"pec":0.55,"forearm":0.75},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"clean":{"muscleGroups":{"quad":1,"gluteMax":0.75,"trap":0.75,"erector":0.65,"hamstring":0.65,"calf":0.55},"variation":{"pause":true,"barbell":true,"tempo":{"concentric":1,"eccentric":3}}},"cleanAndJerk":{"muscleGroups":{"quad":1,"gluteMax":0.85,"trap":0.75,"erector":0.65,"hamstring":0.65,"antDelt":0.65,"calf":0.55,"tricep":0.55},"variation":{"pause":true,"barbell":true,"tempo":{"concentric":1,"eccentric":3}}},"snatch":{"muscleGroups":{"quad":1,"trap":0.85,"gluteMax":0.85,"erector":0.75,"hamstring":0.65,"antDelt":0.55,"calf":0.55},"variation":{"pause":true,"barbell":true,"tempo":{"concentric":1,"eccentric":3}}},"cableTricepExtension":{"muscleGroups":{"tricep":1,"anconeus":0.4,"forearm":0.15},"variation":{"pause":true,"rope":true,"bar":true,"vbar":true,"single":true,"tempo":{"concentric":1,"eccentric":3}}},"deadlift":{"muscleGroups":{"gluteMax":1,"erector":0.75,"hamstring":0.75,"trap":0.45,"quad":0.45},"variation":{"pause":true,"axle":true,"barbell":true,"band":true,"tempo":{"concentric":1,"eccentric":3}}},"deficitDeadlift":{"muscleGroups":{"gluteMax":1,"hamstring":0.85,"erector":0.75,"quad":0.65,"trap":0.45},"variation":{"pause":true,"axle":true,"barbell":true,"band":true,"tempo":{"concentric":1,"eccentric":3}}},"highTrapDeadlift":{"muscleGroups":{"gluteMax":1,"quad":0.55,"hamstring":0.55,"erector":0.45,"trap":0.35},"variation":{"pause":true,"band":true,"tempo":{"concentric":1,"eccentric":3}}},"lowTrapDeadlift":{"muscleGroups":{"gluteMax":1,"quad":0.75,"hamstring":0.65,"erector":0.55,"trap":0.45},"variation":{"pause":true,"band":true,"tempo":{"concentric":1,"eccentric":3}}},"sumoDeadlift":{"muscleGroups":{"gluteMax":1,"adductor":0.75,"hamstring":0.7,"quad":0.6,"erector":0.5},"variation":{"pause":true,"axle":true,"barbell":true,"band":true,"tempo":{"concentric":1,"eccentric":3}}},"romanianDeadlift":{"muscleGroups":{"hamstring":1,"gluteMax":0.7,"erector":0.6,"adductor":0.3},"variation":{"pause":true,"axle":true,"barbell":true,"dumbbell":true,"tempo":{"concentric":1,"eccentric":3}}},"stiffLegDeadlift":{"muscleGroups":{"hamstring":1,"gluteMax":0.6,"erector":0.6,"adductor":0.25},"variation":{"pause":true,"axle":true,"barbell":true,"band":true,"tempo":{"concentric":1,"eccentric":3}}},"singleLegDeadlift":{"muscleGroups":{"hamstring":1,"gluteMax":0.7,"erector":0.5,"gluteMed":0.45,"adductor":0.4,"quadratusLumborum":0.35},"variation":{"pause":true,"axle":true,"barbell":true,"dumbbell":true,"tempo":{"concentric":1,"eccentric":3}}},"snatchGripDeadlift":{"muscleGroups":{"gluteMax":1,"hamstring":0.75,"erector":0.75,"trap":0.65,"rhomboid":0.65,"quad":0.65,"lat":0.45},"variation":{"pause":true,"axle":true,"barbell":true,"band":true,"tempo":{"concentric":1,"eccentric":3}}},"zercherDeadlift":{"muscleGroups":{"gluteMax":1,"hamstring":0.75,"erector":0.75,"trap":0.65,"rhomboid":0.65,"quad":0.55},"variation":{"pause":true,"axle":true,"barbell":true,"band":true,"tempo":{"concentric":1,"eccentric":3}}},"nordicCurl":{"muscleGroups":{"hamstring":1,"gluteMax":0.45,"erector":0.35,"calf":0.25},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"goodMorning":{"muscleGroups":{"hamstring":1,"erector":0.85,"gluteMax":0.75,"adductor":0.45},"variation":{"pause":true,"barbell":true,"tempo":{"concentric":1,"eccentric":3}}},"hipThrust":{"muscleGroups":{"gluteMax":1,"hamstring":0.75,"erector":0.35},"variation":{"pause":true,"barbell":true,"bodyweight":true,"tempo":{"concentric":1,"eccentric":3}}},"backExtensionMachine":{"muscleGroups":{"erector":1,"gluteMax":0.75,"hamstring":0.65},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"reverseHyperMachine":{"muscleGroups":{"gluteMax":1,"hamstring":0.85,"erector":0.75},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"hamstringCurlMachine":{"muscleGroups":{"hamstring":1,"calf":0.25},"variation":{"pause":true,"single":true,"tempo":{"concentric":1,"eccentric":3}}},"hipAbductionMachine":{"muscleGroups":{"gluteMed":1,"gluteMin":0.75,"tensorFasciaeLatae":0.65,"gluteMax":0.55},"variation":{"pause":true,"single":true,"tempo":{"concentric":1,"eccentric":3}}},"hipAdductionMachine":{"muscleGroups":{"adductor":1,"gracilis":0.65,"pectineus":0.55},"variation":{"pause":true,"single":true,"tempo":{"concentric":1,"eccentric":3}}},"row":{"muscleGroups":{"lat":1,"rhomboid":0.75,"lowTrap":0.75,"postDelt":0.5,"bicep":0.5},"variation":{"pause":true,"barbell":true,"cableNarrow":true,"cableWide":true,"tBar":true,"trx":true,"tempo":{"concentric":1,"eccentric":3}}},"facePull":{"muscleGroups":{"postDelt":1,"rhomboid":0.85,"lowTrap":0.75},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"shrug":{"muscleGroups":{"trap":1,"rhomboid":0.45,"postDelt":0.35,"erector":0.35},"variation":{"barbell":true,"dumbbell":true,"trapBar":true,"kettlebell":true,"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"pullup":{"muscleGroups":{"lat":1,"bicep":0.65,"lowTrap":0.45,"rhomboid":0.45},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"muscleUp":{"muscleGroups":{"lat":1,"bicep":0.65,"tricep":0.5,"lowTrap":0.45,"rhomboid":0.45,"antDelt":0.35},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"chinup":{"muscleGroups":{"lat":1,"bicep":0.85,"pec":0.35,"rhomboid":0.45},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"neutralPullup":{"muscleGroups":{"lat":1,"bicep":0.75,"brachialis":0.65,"rhomboid":0.45},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"latPulldown":{"muscleGroups":{"lat":1,"bicep":0.75,"lowTrap":0.65,"rhomboid":0.55,"postDelt":0.45},"variation":{"pause":true,"neutralGrip":true,"tempo":{"concentric":1,"eccentric":3}}},"bicepCurl":{"muscleGroups":{"bicep":1,"brachialis":0.7,"brachioradialis":0.5},"variation":{"pause":true,"barbell":true,"dumbbell":true,"incline":true,"cable":true,"tempo":{"concentric":1,"eccentric":3}}},"spiderCurl":{"muscleGroups":{"bicep":1,"brachialis":0.5},"variation":{"pause":true,"barbell":true,"dumbbell":true,"cable":true,"tempo":{"concentric":1,"eccentric":3}}},"deadHang":{"muscleGroups":{"forearm":1},"variation":{"none":true}},"hangingLegRaise":{"muscleGroups":{"ab":1,"hipFlexor":0.75,"forearm":0.55,"oblique":0.55},"variation":{"pause":true,"abSling":true,"tempo":{"concentric":1,"eccentric":3}}},"abWheel":{"muscleGroups":{"ab":1,"oblique":0.75,"hipFlexor":0.45},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"russianTwist":{"muscleGroups":{"oblique":1,"ab":0.75,"hipFlexor":0.45},"variation":{"pause":true,"tempo":{"concentric":1,"eccentric":3}}},"farmerWalk":{"muscleGroups":{"forearm":1,"trap":0.85,"core":0.75,"erector":0.75,"quad":0.65,"gluteMax":0.55,"hamstring":0.45},"variation":{"frame":true,"dumbbell":true,"trapBar":true}},"farmerHold":{"muscleGroups":{"forearm":1,"trap":0.85},"variation":{"frame":true,"dumbbell":true,"trapBar":true}},"behindTheBackHold":{"muscleGroups":{"forearm":1,"trap":0.75},"variation":{"barbell":true}},"suitcaseCarry":{"muscleGroups":{"oblique":1,"forearm":0.95,"trap":0.75,"erector":0.65,"quad":0.55,"gluteMax":0.45,"hamstring":0.35},"variation":{"none":true}},"sandbagCarry":{"muscleGroups":{"core":1,"forearm":0.95,"quad":0.75,"gluteMax":0.65,"erector":0.65,"upperBack":0.55,"hamstring":0.55,"antDelt":0.45},"variation":{"none":true}},"sandbagToShoulder":{"muscleGroups":{"gluteMax":1,"quad":0.95,"hamstring":0.75,"erector":0.75,"core":0.75,"trap":0.55,"bicep":0.45,"upperBack":0.45},"variation":{"none":true}},"atlasStoneLoad":{"muscleGroups":{"gluteMax":1,"hamstring":0.95,"quad":0.85,"forearm":0.85,"erector":0.85,"core":0.75,"lat":0.65,"trap":0.55,"bicep":0.55},"variation":{"none":true}},"boxJump":{"muscleGroups":{"quad":1,"gluteMax":0.95,"calf":0.85,"hamstring":0.75},"variation":{"none":true}},"boxStepUp":{"muscleGroups":{"quad":1,"gluteMax":0.85,"hamstring":0.75,"calf":0.45},"variation":{"none":true}},"sledPush":{"muscleGroups":{"quad":1,"gluteMax":0.95,"hamstring":0.75,"calf":0.65},"variation":{"none":true}},"sledPull":{"muscleGroups":{"gluteMax":1,"hamstring":0.95,"quad":0.75,"calf":0.65,"forearm":0.5},"variation":{"none":true}},"turkishGetUp":{"muscleGroups":{"core":1,"rotCuff":0.85},"variation":{"dumbbell":true,"kettlebell":true}},"yokeWalk":{"muscleGroups":{"core":1,"quad":0.95,"gluteMax":0.85,"erector":0.85,"hamstring":0.75,"calf":0.65},"variation":{"none":true}}}');

/***/ }),

/***/ "./src/mesocycleAdditions.json":
/*!*************************************!*\
  !*** ./src/mesocycleAdditions.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"otherAdditions":[]}');

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
/* harmony import */ var _exercises_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercises.json */ "./src/exercises.json");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _mesocycleAdditions_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mesocycleAdditions.json */ "./src/mesocycleAdditions.json");





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
// check setNumber for string/num issues

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
const displayTestButton = document.getElementById("displayTest");

let newMovement;

const workoutArray = [];
console.log(_utils__WEBPACK_IMPORTED_MODULE_2__.getDate());

// const exerciseListObj =
//   JSON.parse(localStorage.getItem("exerciseListObj")) || exercises;

const exerciseListObj = _exercises_json__WEBPACK_IMPORTED_MODULE_1__;

// retrieve saved object or initialize a blank object
// const workoutHistoryObj =
//   JSON.parse(localStorage.getItem("workoutHistoryObj")) || {};
const workoutHistoryObj = {};
console.log(workoutHistoryObj);
console.log(exerciseListObj);
// const movementObj = {};
const workoutObj = {};

let value = _utils__WEBPACK_IMPORTED_MODULE_2__.getMovementInput();
let valueCamelCase = _utils__WEBPACK_IMPORTED_MODULE_2__.toCamelCase(value.toLowerCase());

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

        if (keys[i] !== "none") {
          createCheckboxInput.addEventListener("change", (event) => {
            if (event.target.checked)
              document.getElementById("none").checked = false;
          });
        }

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

mesocycleInput.addEventListener("change", () => {
  generateMesocycleInputOther();

  // remove custom text input when selecting a different option
  if (mesocycleInput.value !== "other") {
    // check if the custom mesocycle input exists, if so, remove it for other select options
    const mesocycleInputOther = document.getElementById("mesocycleInputOther");
    if (mesocycleInputOther) mesocycleInputOther.remove();
  }
});

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
  // don't proceed with blank movement field
  if (_utils__WEBPACK_IMPORTED_MODULE_2__.getMovementInput() === "") return;

  const dateStartTime = `${_utils__WEBPACK_IMPORTED_MODULE_2__.getDate()}|${_utils__WEBPACK_IMPORTED_MODULE_2__.getStartTime()}`;
  const setNumber = document.getElementById("setNumber");
  // run this if block for the first set only
  if (Number(setNumber.value) === 1) {
    // TODO dateblock only needs to run once, check for content first

    _utils__WEBPACK_IMPORTED_MODULE_2__.setWorkoutDateStart(workoutHistoryObj);

    _utils__WEBPACK_IMPORTED_MODULE_2__.setWorkoutTime(workoutHistoryObj[dateStartTime]);
    // console.log(workoutHistoryObj);

    newMovement = _utils__WEBPACK_IMPORTED_MODULE_2__.generateMovementObj();

    _utils__WEBPACK_IMPORTED_MODULE_2__.generateSetObj(newMovement);
    // console.log(newMovement);
    Object.assign(workoutHistoryObj[dateStartTime], newMovement);
    console.log(workoutHistoryObj);

    _utils__WEBPACK_IMPORTED_MODULE_2__.incrementSetNumber();
  } else {
    _utils__WEBPACK_IMPORTED_MODULE_2__.generateSetObj(newMovement);
    Object.assign(workoutHistoryObj[dateStartTime], newMovement);
    console.log(workoutHistoryObj);
    _utils__WEBPACK_IMPORTED_MODULE_2__.incrementSetNumber();
  }

  // localStorage.setItem("workoutHistoryObj", JSON.stringify(workoutHistoryObj));
});

addMovement.addEventListener("click", () => {
  value = _utils__WEBPACK_IMPORTED_MODULE_2__.getMovementInput();
  valueCamelCase = _utils__WEBPACK_IMPORTED_MODULE_2__.toCamelCase(value.toLowerCase());
  // TODO base this on a standard variation list from the json
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
  // localStorage.setItem("exerciseListObj", JSON.stringify(exerciseListObj));
});

newVariationButton.addEventListener("click", () => {
  const newVariationInput = document.getElementById("newVariationInput");
  const newVariationValue = newVariationInput.value;

  // break if no value is entered in the input
  if (newVariationValue === "") return;
  exerciseListObj[valueCamelCase].variation[newVariationValue] = true;
  console.log(exerciseListObj[valueCamelCase]);
  // localStorage.setItem("exerciseListObj", JSON.stringify(exerciseListObj));
});

dateButton.addEventListener("click", () => {
  // put user date input into workout array
  // const movementObj = utils.generateMovementObj();
  // utils.generateSetObj(movementObj);
  console.log(_utils__WEBPACK_IMPORTED_MODULE_2__.getDate());
  console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
});

submitExercise.addEventListener("click", async () => {
  const newMesocycleEntry = _utils__WEBPACK_IMPORTED_MODULE_2__.getMesocycleInput();
  console.log(newMesocycleEntry);
  // const testData = {
  //   exercise: "squat",
  //   reps: 30,
  //   variant: "worldRecord",
  // };

  // try {
  //   const response = await fetch("/save-data", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(testData),
  //   });

  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }

  //   const result = await response.json();
  //   alert(`Message: ${result.message}, File Name: ${result.fileName}`);
  // } catch (error) {
  //   console.error("Fetch error:", error);
  //   alert(`Error: ${error.message}`);
  // }
});

displayTestButton.addEventListener("click", () => {
  _utils__WEBPACK_IMPORTED_MODULE_2__.displayObject();
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

// page load
_utils__WEBPACK_IMPORTED_MODULE_2__.resetSetNumber();
_utils__WEBPACK_IMPORTED_MODULE_2__.setDateInputToday();

movementTextMatch();

_utils__WEBPACK_IMPORTED_MODULE_2__.fillDatalist("exerciseInputOptions", exerciseListObj);

// load custom meso input
generateMesocycleInputOther();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVywrQkFBK0IsZ0NBQWdDLG1CQUFtQixLQUFLLGtCQUFrQiw4QkFBOEIsbUJBQW1CLEtBQUssdUJBQXVCO0FBQ3RVO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDaEIxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx5QkFBeUIsY0FBYztBQUN2Qyx1QkFBdUIsT0FBTyxRQUFRLEVBQUUsVUFBVSxHQUFHO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSwyQkFBMkIsVUFBVSxHQUFHLGVBQWU7QUFDdkQseUJBQXlCLFVBQVUsR0FBRyxlQUFlO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsSUFBSTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0EsbUJBQW1CLE1BQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwUFA7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNvQjtBQUNSO0FBQzBCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyQ0FBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0Q0FBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQXNCO0FBQ2xDLHFCQUFxQiwrQ0FBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQW1CO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBLG9DQUFvQywrQ0FBaUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywrQ0FBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsK0NBQWlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxvREFBc0I7QUFDaEMsbUJBQW1CLCtDQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9EQUFzQjtBQUM1QjtBQUNBLDJCQUEyQiwyQ0FBYSxHQUFHLEdBQUcsZ0RBQWtCLEdBQUc7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQXlCO0FBQzdCO0FBQ0EsSUFBSSxrREFBb0I7QUFDeEI7QUFDQTtBQUNBLGtCQUFrQix1REFBeUI7QUFDM0M7QUFDQSxJQUFJLGtEQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQXdCO0FBQzVCLElBQUk7QUFDSixJQUFJLGtEQUFvQjtBQUN4QjtBQUNBO0FBQ0EsSUFBSSxzREFBd0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxVQUFVLG9EQUFzQjtBQUNoQyxtQkFBbUIsK0NBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywyQ0FBYTtBQUMzQjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsNEJBQTRCLHFEQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLGdEQUFnRCxnQkFBZ0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGVBQWUsZUFBZSxnQkFBZ0I7QUFDdkUsT0FBTztBQUNQO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUUsaURBQW1CO0FBQ3JCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxrREFBb0I7QUFDcEIscURBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLGdEQUFrQjtBQUNsQjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzkzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmJvZHkgZGl2IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTNlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IGRpdiB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiB0b0NhbWVsQ2FzZShzdHJpbmcpIHtcclxuICAvLyBhcnJvdyBmdW5jdGlvbiB1c2VzIHRocm93YXdheSB2YXJpYWJsZSBmb3IgdGhlIHJlZ2V4IG1hdGNoLFxyXG4gIC8vIGNhcHR1cmUgZ3JvdXAgMCwgYXMgcGVyIHJlcGxhY2UoKSBmb3JtYXRcclxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1stX1xcc10oLikvZywgKF8sIGNoYXIpID0+IGNoYXIudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDYW1lbENhc2Uoc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxICQyXCIpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREYXRlSW5wdXRUb2RheSgpIHtcclxuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbnB1dFwiKTtcclxuXHJcbiAgLy8gU3BsaXQgYXQgJ1QnIHRvIHJlbW92ZSB0aW1lIGluZm8gYWZ0ZXIgY2FsZW5kYXIgZGF0ZTtcclxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcbiAgZGF0ZUlucHV0LnZhbHVlID0gdG9kYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcclxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSksXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUlucHV0KGlucHV0VHlwZSwgaW5wdXRJRCwgd3JhcHBlcklEKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgc2V0QXR0cmlidXRlcyhpbnB1dCwge1xyXG4gICAgdHlwZTogaW5wdXRUeXBlLFxyXG4gICAgbmFtZTogaW5wdXRJRCxcclxuICAgIGlkOiBpbnB1dElELFxyXG4gICAgdmFsdWU6IGlucHV0SUQsXHJcbiAgfSk7XHJcbiAgc2V0QXR0cmlidXRlcyhsYWJlbCwgeyBmb3I6IGlucHV0SUQgfSk7XHJcbiAgc2V0QXR0cmlidXRlcyhkaXYsIHsgaWQ6IGAke2lucHV0SUR9JHt3cmFwcGVySUR9YCB9KTtcclxuICBsYWJlbC50ZXh0Q29udGVudCA9IGlucHV0SUQ7XHJcbiAgZGl2LmFwcGVuZChsYWJlbCwgaW5wdXQpO1xyXG5cclxuICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsbERhdGFsaXN0KGxpc3RJRCwgb2JqKSB7XHJcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3RJRCk7XHJcblxyXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBvcHRpb24udmFsdWUgPSByZW1vdmVDYW1lbENhc2Uoa2V5c1tpXSk7XHJcbiAgICBsaXN0LmFwcGVuZChvcHRpb24pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vdmVtZW50SW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4ZXJjaXNlSW5wdXRcIik7XHJcbiAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVzb2N5Y2xlSW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc29jeWNsZUlucHV0XCIpO1xyXG4gIGlmIChpbnB1dC52YWx1ZSA9PT0gXCJvdGhlclwiKSB7XHJcbiAgICBjb25zdCBpbnB1dE90aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNvY3ljbGVJbnB1dE90aGVyXCIpO1xyXG4gICAgcmV0dXJuIGlucHV0T3RoZXIudmFsdWU7XHJcbiAgfVxyXG4gIHJldHVybiBpbnB1dC52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1pY3JvY3ljbGVJbnB1dCgpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWljcm9jeWNsZUlucHV0XCIpO1xyXG4gIHJldHVybiBpbnB1dC52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdvcmtvdXROYW1lSW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtvdXROYW1lSW5wdXRcIik7XHJcbiAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VpZ2h0SW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlaWdodFwiKTtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlaWdodFVuaXQoKSB7XHJcbiAgY29uc3QgY2hlY2tlZFJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICdpbnB1dFtuYW1lPVwicG91bmRLaWxvXCJdOmNoZWNrZWQnLFxyXG4gICk7XHJcbiAgcmV0dXJuIGNoZWNrZWRSYWRpby52YWx1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVwc0lucHV0KCkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXBzXCIpO1xyXG4gIHJldHVybiBpbnB1dC52YWx1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UklSSW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlJJUlwiKTtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldElucHV0VmFsdWUoaW5wdXRJRCkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJRCk7XHJcbiAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZW1wb1ZhbHVlcygpIHtcclxuICBjb25zdCBlY2NlbnRyaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVjY2VudHJpY1wiKTtcclxuICBjb25zdCBjb25jZW50cmljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25jZW50cmljXCIpO1xyXG4gIHJldHVybiBbZWNjZW50cmljLnZhbHVlLCBjb25jZW50cmljLnZhbHVlXTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcclxuICBjb25zdCBkYXRldGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUlucHV0XCIpO1xyXG4gIHJldHVybiBkYXRldGltZS52YWx1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZVpvbmUoKSB7XHJcbiAgcmV0dXJuIEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhcnRUaW1lKCkge1xyXG4gIGNvbnN0IHN0YXJ0VGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRUaW1lXCIpO1xyXG4gIHJldHVybiBzdGFydFRpbWUudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbmRUaW1lKCkge1xyXG4gIGNvbnN0IGVuZFRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZFRpbWVcIik7XHJcbiAgcmV0dXJuIGVuZFRpbWUudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYXJpYXRpb25JbnB1dCgpIHtcclxuICBjb25zdCB2YXJpYXRpb25JbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhcmlhdGlvbklucHV0c1wiKTtcclxuICBjb25zdCB2YXJpYXRpb25zID0gdmFyaWF0aW9uSW5wdXRzLmNoaWxkTm9kZXM7XHJcbiAgY29uc3QgdmFyaWF0aW9uQXJyYXkgPSBbXTtcclxuXHJcbiAgdmFyaWF0aW9ucy5mb3JFYWNoKCh2YXJpYW50KSA9PiB7XHJcbiAgICAvLyBjaGlsZHJlblsxXSBhY2NvdW50cyBmb3IgdGhlIGxhYmVsIGVsZW1lbnQgYXQgdGhlIFswXSBzcG90XHJcbiAgICBpZiAodmFyaWFudC5jaGlsZHJlblsxXS5jaGVja2VkKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHZhcmlhbnQuY2hpbGRyZW5bMV0pO1xyXG4gICAgICB2YXJpYXRpb25BcnJheS5wdXNoKHZhcmlhbnQuY2hpbGRyZW5bMV0udmFsdWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiB2YXJpYXRpb25BcnJheTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFdvcmtvdXREYXRlU3RhcnQob2JqKSB7XHJcbiAgY29uc3Qgd29ya291dEhpc3RvcnlPYmogPSBvYmo7XHJcbiAgaWYgKHdvcmtvdXRIaXN0b3J5T2JqW2Ake2dldERhdGUoKX18JHtnZXRTdGFydFRpbWUoKX1gXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB3b3Jrb3V0SGlzdG9yeU9ialtgJHtnZXREYXRlKCl9fCR7Z2V0U3RhcnRUaW1lKCl9YF0gPSB7fTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHdvcmtvdXRIaXN0b3J5T2JqKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRXb3Jrb3V0VGltZShvYmopIHtcclxuICBjb25zdCB3b3Jrb3V0SGlzdG9yeU9iaiA9IG9iajtcclxuICB3b3Jrb3V0SGlzdG9yeU9iai50aW1lID0ge1xyXG4gICAgc3RhcnQ6IGdldFN0YXJ0VGltZSgpLFxyXG4gICAgZW5kOiBnZXRFbmRUaW1lKCksXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldE51bWJlcigpIHtcclxuICBjb25zdCBzZXRDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXROdW1iZXJcIik7XHJcbiAgY29uc3Qgc2V0TnVtYmVyID0gTnVtYmVyKHNldENvdW50ZXIudmFsdWUpO1xyXG4gIHJldHVybiBzZXROdW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmNyZW1lbnRTZXROdW1iZXIoKSB7XHJcbiAgY29uc3Qgc2V0TnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXROdW1iZXJcIik7XHJcblxyXG4gIHNldE51bWJlci52YWx1ZSA9IE51bWJlcihzZXROdW1iZXIudmFsdWUpICsgMTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0U2V0TnVtYmVyKCkge1xyXG4gIGNvbnN0IHNldE51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0TnVtYmVyXCIpO1xyXG4gIHNldE51bWJlci52YWx1ZSA9IDE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVNldE9iaihvYmopIHtcclxuICAvLyBUT0RPIGRvZXMgb2JqIG5lZWQgdG8gYmUgZGVmaW5lZCBhcyBpdCBpcyBoZXJlXHJcbiAgY29uc3QgbW92ZW1lbnQgPSBnZXRNb3ZlbWVudElucHV0KCk7XHJcbiAgY29uc3Qgc2V0ID0gZ2V0U2V0TnVtYmVyKCk7XHJcbiAgY29uc3Qgd2VpZ2h0ID0gZ2V0V2VpZ2h0SW5wdXQoKTtcclxuICBjb25zdCB3ZWlnaHRVbml0ID0gZ2V0V2VpZ2h0VW5pdCgpO1xyXG4gIGNvbnN0IHJlcHMgPSBnZXRSZXBzSW5wdXQoKTtcclxuICBjb25zdCBSSVIgPSBnZXRSSVJJbnB1dCgpO1xyXG4gIGNvbnN0IHZhcmlhdGlvbklucHV0ID0gZ2V0VmFyaWF0aW9uSW5wdXQoKTtcclxuICBjb25zb2xlLmxvZyhvYmopO1xyXG5cclxuICBjb25zdCBtb3ZlbWVudE9iaiA9IG9iajtcclxuICBjb25zdCBzZXRPYmogPSB7XHJcbiAgICB2YXJpYXRpb25zOiB7fSxcclxuICAgIHdlaWdodCxcclxuICAgIHdlaWdodFVuaXQsXHJcbiAgICByZXBzLFxyXG4gICAgUklSLFxyXG4gIH07XHJcblxyXG4gIGlmICh2YXJpYXRpb25JbnB1dC5sZW5ndGggPCAxKSB7XHJcbiAgICBzZXRPYmoudmFyaWF0aW9ucy5ub25lID0gdHJ1ZTtcclxuICB9XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YXJpYXRpb25JbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgLy8gVE9ETyBjaGVjayB0aGlzIGlmLCBkb2Vzbid0IGxvb2sgbmVlZGVkXHJcbiAgICBpZiAodmFyaWF0aW9uSW5wdXQubGVuZ3RoIDwgMSkgY29uc29sZS5sb2coXCJub25lXCIpO1xyXG4gICAgc2V0T2JqLnZhcmlhdGlvbnNbdmFyaWF0aW9uSW5wdXRbaV1dID0gdHJ1ZTtcclxuICB9XHJcbiAgY29uc29sZS5sb2cobW92ZW1lbnRPYmopO1xyXG4gIG1vdmVtZW50T2JqW21vdmVtZW50XVtgc2V0JHtzZXR9YF0gPSBzZXRPYmo7XHJcbiAgLy8gcmV0dXJuIGN1cnJlbnRseSBub3QgbmVlZGVkXHJcbiAgLy8gcmV0dXJuIG1vdmVtZW50T2JqO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVNb3ZlbWVudE9iaigpIHtcclxuICBjb25zdCBtb3ZlbWVudCA9IGdldE1vdmVtZW50SW5wdXQoKTtcclxuICBjb25zdCBtZXNvY3ljbGUgPSBnZXRNZXNvY3ljbGVJbnB1dCgpO1xyXG4gIGNvbnN0IG1pY3JvY3ljbGUgPSBnZXRNaWNyb2N5Y2xlSW5wdXQoKTtcclxuICBjb25zdCB3b3Jrb3V0TmFtZSA9IGdldFdvcmtvdXROYW1lSW5wdXQoKTtcclxuXHJcbiAgY29uc3Qgb2JqID0ge1xyXG4gICAgbWVzb2N5Y2xlLFxyXG4gICAgbWljcm9jeWNsZSxcclxuICAgIHdvcmtvdXROYW1lLFxyXG4gICAgW21vdmVtZW50XToge30sXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuLy8gYWNjZXB0cyBhbiBhcnJheSBvZiBtb3ZlbWVudCBvYmplY3RzIGFzIGEgcGFyYW1ldGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVdvcmtvdXRPYmoobW92ZW1lbnRzKSB7XHJcbiAgY29uc3Qgb2JqID0ge307XHJcbiAgb2JqLmRhdGUgPSBnZXREYXRlKCk7XHJcbiAgb2JqLnRpbWVab25lID0gZ2V0VGltZVpvbmUoKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3ZlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IG1vdmVtZW50ID0gbW92ZW1lbnRzW2ldO1xyXG4gICAgb2JqW2BleGVyY2lzZSR7aSArIDF9YF0gPSBtb3ZlbWVudDtcclxuICB9XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlPYmplY3Qob2JqKSB7XHJcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudFdvcmtvdXREaXNwbGF5XCIpO1xyXG4gIGNvbnN0IG1vdmVtZW50ID0gT2JqZWN0LmtleXMob2JqKTtcclxuXHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIC8vIE9iamVjdC5rZXlzKCkgcmV0dXJucyBhbiBhcnJheVxyXG4gIHAudGV4dENvbnRlbnQgPSBtb3ZlbWVudFswXTtcclxuICBkaXNwbGF5LmFwcGVuZChwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlXb3Jrb3V0SW5Qcm9ncmVzcyh3b3Jrb3V0KSB7fVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgZXhlcmNpc2VzIGZyb20gXCIuL2V4ZXJjaXNlcy5qc29uXCI7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCBtZXNvY3ljbGVBZGRpdGlvbnMgZnJvbSBcIi4vbWVzb2N5Y2xlQWRkaXRpb25zLmpzb25cIjtcclxuXHJcbi8vIFRPRE9cclxuLy8gYmlnIGxpc3Qgb2YgZXhlcmNpc2UgZnVsbCBuYW1lcywgZS5nLiBmbGF0IGJhcmJlbGwgYmVuY2gsIGluY2xpbmUgZHVtYmVsbCBiZW5jaCBldGMuXHJcbi8vIG1heWJlIHNlbGVjdCBvcHRpb25zIHRvIG5hcnJvdyBkb3duIGEgcG9wdWxhdGVkIGxpc3Qgb2YgZXZlcnkgZXhlcmNpc2VcclxuLy8gd2hpY2ggaXMgYWxzbyBmaWx0ZXJhYmxlIGJ5IGEgc2VhcmNoIGZpZWxkLlxyXG4vLyByZWFkIG1vcmUgb24gZGVzdHJ1Y3R1cmluZ1xyXG4vLyBpbnN0ZWFkIG9mIGRpcmVjdGx5IGFkZGluZyBuZXcgZXhlcmNpc2UsIGhhdmUgc29tZSBraW5kIG9mIGRpYWxvZ3VlXHJcbi8vIHRvZ2dsZSB0byBzd2l0Y2ggYmV0d2VlbiBSUEUgb3IgUmlSXHJcbi8vIHdyaXRlIGZ1bmN0aW9uIHRvIGFkZCBlbnRyeSB0byBleGVyY2lzZSBsaXN0XHJcbi8vIGNvbnNpZGVyIGRpc3BsYXlpbmcgbW92ZW1lbnRzIGFzIGNhcGl0YWwgZmlyc3QgbGV0dGVyIHZzIGFsbCBsb3dlclxyXG4vLyBjb25zaWRlciBhIG51bWJlciBoaWRkZW4gZnJvbSB1c2VyIGZvciBvcmRlcmluZyBtb3ZlbWVudHMgaW4gYSB3b3Jrb3V0XHJcbi8vIG5ldyB2YXJpYXRpb24ganNcclxuLy8gY2hhbmdlIHZhcmlhdGlvbiBidXR0b24gdG8gc29tZXRoaW5nIGxpa2UgY2xpY2thYmxlIHRleHRcclxuLy8gd29yayBvbiBuZXcgdmFyaWF0aW9uIGxvZ2ljXHJcbi8vIGFkZCBtb3ZlbWVudHMgdG8gd29ya291dCBhcnJheSwgZGlzcGxheSBhcnJheSBjb250ZW50cyBpbiBzb21lIGNvbGxhcHNpYmxlIGZvcm1cclxuLy8gaXRlcmF0ZSB0aHJvdWdoIHRoZSB3b3Jrb3V0IGFycmF5IHRvIGJ1aWxkIHRoZSBmaW5hbCB3b3Jrb3V0IG9iamVjdFxyXG4vLyBtZXJpdCB0byBzaW1wbHkgc3RvcmluZyB3b3Jrb3V0IGRhdGEgYXMgYXJyYXkgb2Ygb2JqZWN0cywgZmlyc3QgYXJyYXkgaXRlbSBpcyBkYXRlP1xyXG4vLyBeXl4sIGJ1aWxkIGFzIG9iaiBmcm9tIHN0YXJ0LCBhcHBseSB1c2VyIGRhdGUgZHVyaW5nIGZpbmFsIHN1Ym1pdFxyXG4vLyBzZXQgaW5wdXQgc3RhcnRzIGF0IDEgYW5kIGluY3JlbWVudHMgaXRzZWxmIG91dHNpZGUgdXNlciBjb250cm9sIChjYW4gZWRpdCBsYXRlcilcclxuLy8gZGlmZmVyZW50IGxpc3RlbmVycyBmb3IgbW92ZW1lbnQgYW5kIHNldCBvYmplY3RzXHJcbi8vIHdvcmsgb24gYnVpbGRpbmcgd29ya291dCAxIHNldCBhdCBhIHRpbWVcclxuLy8ga2VlcCBzZXQgaW5mbyBncmV5ZWQgb3V0IHVudGlsIG1vdmVtZW50IGFkZGVkIHRvIHdvcmtvdXRcclxuLy8gd2h5IGRvZXMgbW92ZW1lbnQgbmFtZSBjb21lIG91dCB3aXRoIGEgc3BhY2VcclxuLy8gc2FuaXRpemUgZ2V0bW92ZW1lbnRpbnB1dFxyXG4vLyByZXRoaW5rIGhvdyB3b3Jrb3V0IG9iamVjdHMgYXJlIGJ1aWx0XHJcbi8vIGZ1bmN0aW9ucyB0byBnZXQgdGltZSBpbnB1dHNcclxuLy8gcmV2aXNpdCBPYmplY3QuYXNzaWduKCkgZm9yIHJlcGVhdCBzZXRzXHJcbi8vIGZpbmQgd2F5IHRvIHRyYWNrIG9yZGVyIG9mIGV4ZXJjaXNlc1xyXG4vLyBmaXggYmxhbmsgbW92ZW1lbnQgZmllbGRcclxuLy8gbG9jYWwgc3RvcmFnZSBmb3IgbmV3IHVuaXF1ZSBtb3ZlbWVudFxyXG4vLyBtYWtlIHN1cmUgeW91IGNhbiBhZGQgbmV3IHRlbXBvIHRpbWVzIGluIHZhcmlhdGlvbnNcclxuLy8gbWVzb2N5Y2xlIHNlbGVjdCBvdGhlciBicmluZyB1cCBhIHRleHQgaW5wdXRcclxuLy8gbWVzb2N5Y2xlIG1ha2Ugc3VyZSBkZWZhdWx0IHNlbGVjdGlvbiBzdGF5cyBjb25zdGFudCBmb3IgYSBnaXZlbiB3b3Jrb3V0XHJcbi8vIGxpbmsgbmV3IGN5Y2xlIGlucHV0cyBpbnRvIG9ialxyXG4vLyBwYWNrYWdlIGV4ZXJjaXNlIGV2ZW50IGxpc3RlbmVyIGludG8gZnVuY3Rpb25cclxuLy8gY2hlY2sgc2V0TnVtYmVyIGZvciBzdHJpbmcvbnVtIGlzc3Vlc1xyXG5cclxuLy8gY29uc29sZS5sb2coZXhlcmNpc2VzLnNhbXBsZVdvcmtvdXQoKSk7XHJcblxyXG5jb25zdCBleGVyY2lzZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGVyY2lzZUlucHV0XCIpO1xyXG4vLyBjb25zdCBleGVyY2lzZUxpc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGVyY2lzZUxpc3RcIik7XHJcbmNvbnN0IHN1Ym1pdEV4ZXJjaXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRFeGVyY2lzZVwiKTtcclxuLy8gY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuY29uc3QgdmFyaWF0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFyaWF0aW9uSW5wdXRzXCIpO1xyXG5jb25zdCBuZXdWYXJpYXRpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdE5ld1ZhcmlhdGlvblwiKTtcclxuY29uc3QgbmV3TW92ZW1lbnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld01vdmVtZW50QnV0dG9uXCIpO1xyXG4vLyBjb25zdCB1c2VyRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlSW5wdXQnKTtcclxuY29uc3QgZGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUJ1dHRvblwiKTtcclxuY29uc3QgYWRkTW92ZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZE1vdmVtZW50XCIpO1xyXG5jb25zdCBtZXNvY3ljbGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzb2N5Y2xlSW5wdXRcIik7XHJcbmNvbnN0IGRpc3BsYXlUZXN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5VGVzdFwiKTtcclxuXHJcbmxldCBuZXdNb3ZlbWVudDtcclxuXHJcbmNvbnN0IHdvcmtvdXRBcnJheSA9IFtdO1xyXG5jb25zb2xlLmxvZyh1dGlscy5nZXREYXRlKCkpO1xyXG5cclxuLy8gY29uc3QgZXhlcmNpc2VMaXN0T2JqID1cclxuLy8gICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhlcmNpc2VMaXN0T2JqXCIpKSB8fCBleGVyY2lzZXM7XHJcblxyXG5jb25zdCBleGVyY2lzZUxpc3RPYmogPSBleGVyY2lzZXM7XHJcblxyXG4vLyByZXRyaWV2ZSBzYXZlZCBvYmplY3Qgb3IgaW5pdGlhbGl6ZSBhIGJsYW5rIG9iamVjdFxyXG4vLyBjb25zdCB3b3Jrb3V0SGlzdG9yeU9iaiA9XHJcbi8vICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndvcmtvdXRIaXN0b3J5T2JqXCIpKSB8fCB7fTtcclxuY29uc3Qgd29ya291dEhpc3RvcnlPYmogPSB7fTtcclxuY29uc29sZS5sb2cod29ya291dEhpc3RvcnlPYmopO1xyXG5jb25zb2xlLmxvZyhleGVyY2lzZUxpc3RPYmopO1xyXG4vLyBjb25zdCBtb3ZlbWVudE9iaiA9IHt9O1xyXG5jb25zdCB3b3Jrb3V0T2JqID0ge307XHJcblxyXG5sZXQgdmFsdWUgPSB1dGlscy5nZXRNb3ZlbWVudElucHV0KCk7XHJcbmxldCB2YWx1ZUNhbWVsQ2FzZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKHZhbHVlLnRvTG93ZXJDYXNlKCkpO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVNZXNvY3ljbGVJbnB1dE90aGVyKCkge1xyXG4gIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc29jeWNsZVdyYXBcIik7XHJcbiAgaWYgKG1lc29jeWNsZUlucHV0LnZhbHVlID09PSBcIm90aGVyXCIpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdXRpbHMuc2V0QXR0cmlidXRlcyhpbnB1dCwge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgbmFtZTogXCJtZXNvY3ljbGVJbnB1dE90aGVyXCIsXHJcbiAgICAgIGlkOiBcIm1lc29jeWNsZUlucHV0T3RoZXJcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiQ3VzdG9tXCIsXHJcbiAgICB9KTtcclxuICAgIHdyYXAuYXBwZW5kKGlucHV0KTtcclxuICAgIC8vIGVsZW1lbnQgY3JlYXRpb24sIHRoaW5rIGFib3V0IHNldGF0dHJpYnV0ZXMoKVxyXG4gIH1cclxufVxyXG5cclxuLy8gY29uc29sZS5sb2codmFsdWVDYW1lbENhc2UpO1xyXG5mdW5jdGlvbiBtb3ZlbWVudFRleHRNYXRjaCgpIHtcclxuICBpZiAoZXhlcmNpc2VMaXN0T2JqW3ZhbHVlQ2FtZWxDYXNlXSkge1xyXG4gICAgLy8gaGlkZSBhZGQgbW92ZW1lbnQgYnV0dG9uIGZvciBleGlzdGluZyBtb3ZlbWVudHNcclxuICAgIGFkZE1vdmVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHZhcmlhdGlvbnMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnNvbGUubG9nKFwic3VjZXNzXCIpO1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGV4ZXJjaXNlTGlzdE9ialt2YWx1ZUNhbWVsQ2FzZV0udmFyaWF0aW9uKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAoZXhlcmNpc2VMaXN0T2JqW3ZhbHVlQ2FtZWxDYXNlXS52YXJpYXRpb25ba2V5c1tpXV0pIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVDaGVja2JveElucHV0ID0gdXRpbHMuY3JlYXRlSW5wdXQoXHJcbiAgICAgICAgICBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICBrZXlzW2ldLFxyXG4gICAgICAgICAgXCJWYXJpYXRpb25DaGVja1wiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyaWF0aW9ucy5hcHBlbmQoY3JlYXRlQ2hlY2tib3hJbnB1dCk7XHJcblxyXG4gICAgICAgIC8vIHByZS1jaGVjayB0aGUgJ25vbmUgdmFyaWF0aW9uIGFmdGVyIGl0J3MgZGl2IGlzIGFwcGVuZGVkXHJcbiAgICAgICAgaWYgKGtleXNbaV0gPT09IFwibm9uZVwiKSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbmVcIikuY2hlY2tlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChrZXlzW2ldICE9PSBcIm5vbmVcIikge1xyXG4gICAgICAgICAgY3JlYXRlQ2hlY2tib3hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub25lXCIpLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZXhwYW5kIHRoZSB0ZW1wbyBjaGVja2JveCBpZiBzZWxlY3RlZCBmb3IgZWNjZW50cmljL2NvbmNlbnRyaWMgaW5wdXRzXHJcbiAgICAgICAgaWYgKGtleXNbaV0gPT09IFwidGVtcG9cIikge1xyXG4gICAgICAgICAgY3JlYXRlQ2hlY2tib3hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICBjb25zdCB0ZW1wb1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgIHRlbXBvV3JhcC5pZCA9IFwidGVtcG9WYXJpYXRpb25XcmFwXCI7XHJcbiAgICAgICAgICAgICAgY29uc3QgZWNjZW50cmljID0gdXRpbHMuY3JlYXRlSW5wdXQoXHJcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJlY2NlbnRyaWNcIixcclxuICAgICAgICAgICAgICAgIFwiV3JhcFwiLFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgY29uc3QgY29uY2VudHJpYyA9IHV0aWxzLmNyZWF0ZUlucHV0KFxyXG4gICAgICAgICAgICAgICAgXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgIFwiY29uY2VudHJpY1wiLFxyXG4gICAgICAgICAgICAgICAgXCJXcmFwXCIsXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB0ZW1wb1dyYXAuYXBwZW5kKGVjY2VudHJpYywgY29uY2VudHJpYyk7XHJcbiAgICAgICAgICAgICAgdmFyaWF0aW9ucy5hcHBlbmQodGVtcG9XcmFwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgdGVtcG9XcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wb1ZhcmlhdGlvbldyYXBcIik7XHJcbiAgICAgICAgICAgICAgdGVtcG9XcmFwLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1lc29jeWNsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gIGdlbmVyYXRlTWVzb2N5Y2xlSW5wdXRPdGhlcigpO1xyXG5cclxuICAvLyByZW1vdmUgY3VzdG9tIHRleHQgaW5wdXQgd2hlbiBzZWxlY3RpbmcgYSBkaWZmZXJlbnQgb3B0aW9uXHJcbiAgaWYgKG1lc29jeWNsZUlucHV0LnZhbHVlICE9PSBcIm90aGVyXCIpIHtcclxuICAgIC8vIGNoZWNrIGlmIHRoZSBjdXN0b20gbWVzb2N5Y2xlIGlucHV0IGV4aXN0cywgaWYgc28sIHJlbW92ZSBpdCBmb3Igb3RoZXIgc2VsZWN0IG9wdGlvbnNcclxuICAgIGNvbnN0IG1lc29jeWNsZUlucHV0T3RoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc29jeWNsZUlucHV0T3RoZXJcIik7XHJcbiAgICBpZiAobWVzb2N5Y2xlSW5wdXRPdGhlcikgbWVzb2N5Y2xlSW5wdXRPdGhlci5yZW1vdmUoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhlcmNpc2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gIC8vIHNob3cgYWRkIG1vdmVtZW50IGJ1dHRvbiB0byBjYXRjaCBuZXcgdW5pcXVlIG1vdmVtZW50IG5hbWVzXHJcbiAgYWRkTW92ZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgdmFsdWUgPSB1dGlscy5nZXRNb3ZlbWVudElucHV0KCk7XHJcbiAgdmFsdWVDYW1lbENhc2UgPSB1dGlscy50b0NhbWVsQ2FzZSh2YWx1ZS50b0xvd2VyQ2FzZSgpKTtcclxuXHJcbiAgLy8gY2xlYXIgdmFyaWF0aW9ucyBzbyB0aGV5IGRvbid0IGdldCBzdHVjayB3aGVuIGNoYW5naW5nIGJldHdlZW4ga25vd24gbW92ZW1lbnRzXHJcbiAgdmFyaWF0aW9ucy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIG1vdmVtZW50VGV4dE1hdGNoKCk7XHJcbn0pO1xyXG5cclxubmV3TW92ZW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAvLyBkb24ndCBwcm9jZWVkIHdpdGggYmxhbmsgbW92ZW1lbnQgZmllbGRcclxuICBpZiAodXRpbHMuZ2V0TW92ZW1lbnRJbnB1dCgpID09PSBcIlwiKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IGRhdGVTdGFydFRpbWUgPSBgJHt1dGlscy5nZXREYXRlKCl9fCR7dXRpbHMuZ2V0U3RhcnRUaW1lKCl9YDtcclxuICBjb25zdCBzZXROdW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldE51bWJlclwiKTtcclxuICAvLyBydW4gdGhpcyBpZiBibG9jayBmb3IgdGhlIGZpcnN0IHNldCBvbmx5XHJcbiAgaWYgKE51bWJlcihzZXROdW1iZXIudmFsdWUpID09PSAxKSB7XHJcbiAgICAvLyBUT0RPIGRhdGVibG9jayBvbmx5IG5lZWRzIHRvIHJ1biBvbmNlLCBjaGVjayBmb3IgY29udGVudCBmaXJzdFxyXG5cclxuICAgIHV0aWxzLnNldFdvcmtvdXREYXRlU3RhcnQod29ya291dEhpc3RvcnlPYmopO1xyXG5cclxuICAgIHV0aWxzLnNldFdvcmtvdXRUaW1lKHdvcmtvdXRIaXN0b3J5T2JqW2RhdGVTdGFydFRpbWVdKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHdvcmtvdXRIaXN0b3J5T2JqKTtcclxuXHJcbiAgICBuZXdNb3ZlbWVudCA9IHV0aWxzLmdlbmVyYXRlTW92ZW1lbnRPYmooKTtcclxuXHJcbiAgICB1dGlscy5nZW5lcmF0ZVNldE9iaihuZXdNb3ZlbWVudCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhuZXdNb3ZlbWVudCk7XHJcbiAgICBPYmplY3QuYXNzaWduKHdvcmtvdXRIaXN0b3J5T2JqW2RhdGVTdGFydFRpbWVdLCBuZXdNb3ZlbWVudCk7XHJcbiAgICBjb25zb2xlLmxvZyh3b3Jrb3V0SGlzdG9yeU9iaik7XHJcblxyXG4gICAgdXRpbHMuaW5jcmVtZW50U2V0TnVtYmVyKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHV0aWxzLmdlbmVyYXRlU2V0T2JqKG5ld01vdmVtZW50KTtcclxuICAgIE9iamVjdC5hc3NpZ24od29ya291dEhpc3RvcnlPYmpbZGF0ZVN0YXJ0VGltZV0sIG5ld01vdmVtZW50KTtcclxuICAgIGNvbnNvbGUubG9nKHdvcmtvdXRIaXN0b3J5T2JqKTtcclxuICAgIHV0aWxzLmluY3JlbWVudFNldE51bWJlcigpO1xyXG4gIH1cclxuXHJcbiAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3b3Jrb3V0SGlzdG9yeU9ialwiLCBKU09OLnN0cmluZ2lmeSh3b3Jrb3V0SGlzdG9yeU9iaikpO1xyXG59KTtcclxuXHJcbmFkZE1vdmVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgdmFsdWUgPSB1dGlscy5nZXRNb3ZlbWVudElucHV0KCk7XHJcbiAgdmFsdWVDYW1lbENhc2UgPSB1dGlscy50b0NhbWVsQ2FzZSh2YWx1ZS50b0xvd2VyQ2FzZSgpKTtcclxuICAvLyBUT0RPIGJhc2UgdGhpcyBvbiBhIHN0YW5kYXJkIHZhcmlhdGlvbiBsaXN0IGZyb20gdGhlIGpzb25cclxuICBleGVyY2lzZUxpc3RPYmpbdmFsdWVDYW1lbENhc2VdID0ge1xyXG4gICAgdmFyaWF0aW9uOiB7XHJcbiAgICAgIG5vbmU6IHRydWUsXHJcbiAgICAgIHBhdXNlOiB0cnVlLFxyXG4gICAgICB0ZW1wbzoge1xyXG4gICAgICAgIGNvbmNlbnRyaWM6IDEsXHJcbiAgICAgICAgZWNjZW50cmljOiAzLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKGV4ZXJjaXNlTGlzdE9iaik7XHJcbiAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJleGVyY2lzZUxpc3RPYmpcIiwgSlNPTi5zdHJpbmdpZnkoZXhlcmNpc2VMaXN0T2JqKSk7XHJcbn0pO1xyXG5cclxubmV3VmFyaWF0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgbmV3VmFyaWF0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1ZhcmlhdGlvbklucHV0XCIpO1xyXG4gIGNvbnN0IG5ld1ZhcmlhdGlvblZhbHVlID0gbmV3VmFyaWF0aW9uSW5wdXQudmFsdWU7XHJcblxyXG4gIC8vIGJyZWFrIGlmIG5vIHZhbHVlIGlzIGVudGVyZWQgaW4gdGhlIGlucHV0XHJcbiAgaWYgKG5ld1ZhcmlhdGlvblZhbHVlID09PSBcIlwiKSByZXR1cm47XHJcbiAgZXhlcmNpc2VMaXN0T2JqW3ZhbHVlQ2FtZWxDYXNlXS52YXJpYXRpb25bbmV3VmFyaWF0aW9uVmFsdWVdID0gdHJ1ZTtcclxuICBjb25zb2xlLmxvZyhleGVyY2lzZUxpc3RPYmpbdmFsdWVDYW1lbENhc2VdKTtcclxuICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV4ZXJjaXNlTGlzdE9ialwiLCBKU09OLnN0cmluZ2lmeShleGVyY2lzZUxpc3RPYmopKTtcclxufSk7XHJcblxyXG5kYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgLy8gcHV0IHVzZXIgZGF0ZSBpbnB1dCBpbnRvIHdvcmtvdXQgYXJyYXlcclxuICAvLyBjb25zdCBtb3ZlbWVudE9iaiA9IHV0aWxzLmdlbmVyYXRlTW92ZW1lbnRPYmooKTtcclxuICAvLyB1dGlscy5nZW5lcmF0ZVNldE9iaihtb3ZlbWVudE9iaik7XHJcbiAgY29uc29sZS5sb2codXRpbHMuZ2V0RGF0ZSgpKTtcclxuICBjb25zb2xlLmxvZyhJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmUpO1xyXG59KTtcclxuXHJcbnN1Ym1pdEV4ZXJjaXNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgbmV3TWVzb2N5Y2xlRW50cnkgPSB1dGlscy5nZXRNZXNvY3ljbGVJbnB1dCgpO1xyXG4gIGNvbnNvbGUubG9nKG5ld01lc29jeWNsZUVudHJ5KTtcclxuICAvLyBjb25zdCB0ZXN0RGF0YSA9IHtcclxuICAvLyAgIGV4ZXJjaXNlOiBcInNxdWF0XCIsXHJcbiAgLy8gICByZXBzOiAzMCxcclxuICAvLyAgIHZhcmlhbnQ6IFwid29ybGRSZWNvcmRcIixcclxuICAvLyB9O1xyXG5cclxuICAvLyB0cnkge1xyXG4gIC8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9zYXZlLWRhdGFcIiwge1xyXG4gIC8vICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRlc3REYXRhKSxcclxuICAvLyAgIH0pO1xyXG5cclxuICAvLyAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gIC8vICAgfVxyXG5cclxuICAvLyAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAvLyAgIGFsZXJ0KGBNZXNzYWdlOiAke3Jlc3VsdC5tZXNzYWdlfSwgRmlsZSBOYW1lOiAke3Jlc3VsdC5maWxlTmFtZX1gKTtcclxuICAvLyB9IGNhdGNoIChlcnJvcikge1xyXG4gIC8vICAgY29uc29sZS5lcnJvcihcIkZldGNoIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgLy8gICBhbGVydChgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAvLyB9XHJcbn0pO1xyXG5cclxuZGlzcGxheVRlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICB1dGlscy5kaXNwbGF5T2JqZWN0KCk7XHJcbn0pO1xyXG5cclxuY29uc3QgY2xlYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsZWFyXCIpO1xyXG5jbGVhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG59KTtcclxuXHJcbi8vIHBhZ2UgbG9hZFxyXG51dGlscy5yZXNldFNldE51bWJlcigpO1xyXG51dGlscy5zZXREYXRlSW5wdXRUb2RheSgpO1xyXG5cclxubW92ZW1lbnRUZXh0TWF0Y2goKTtcclxuXHJcbnV0aWxzLmZpbGxEYXRhbGlzdChcImV4ZXJjaXNlSW5wdXRPcHRpb25zXCIsIGV4ZXJjaXNlTGlzdE9iaik7XHJcblxyXG4vLyBsb2FkIGN1c3RvbSBtZXNvIGlucHV0XHJcbmdlbmVyYXRlTWVzb2N5Y2xlSW5wdXRPdGhlcigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=