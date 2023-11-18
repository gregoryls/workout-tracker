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
/* harmony export */   getDateTime: () => (/* binding */ getDateTime),
/* harmony export */   getInputValue: () => (/* binding */ getInputValue),
/* harmony export */   getMovementInput: () => (/* binding */ getMovementInput),
/* harmony export */   getRepsInput: () => (/* binding */ getRepsInput),
/* harmony export */   getRpeInput: () => (/* binding */ getRpeInput),
/* harmony export */   getSetNumber: () => (/* binding */ getSetNumber),
/* harmony export */   getTempoValues: () => (/* binding */ getTempoValues),
/* harmony export */   getVariationInput: () => (/* binding */ getVariationInput),
/* harmony export */   getWeightInput: () => (/* binding */ getWeightInput),
/* harmony export */   incrementSetNumber: () => (/* binding */ incrementSetNumber),
/* harmony export */   removeCamelCase: () => (/* binding */ removeCamelCase),
/* harmony export */   resetSetNumber: () => (/* binding */ resetSetNumber),
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

function setAttributes(element, attribtues) {
  Object.keys(attribtues).forEach((key) =>
    element.setAttribute(key, attribtues[key]),
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

function getWeightInput() {
  const input = document.getElementById("weight");
  return input.value;
}
function getRepsInput() {
  const input = document.getElementById("reps");
  return input.value;
}
function getRpeInput() {
  const input = document.getElementById("rpe");
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
function getDateTime() {
  const datetime = document.getElementById("dateInput");
  return datetime.valueAsDate;
}

function getVariationInput() {
  const variationInputs = document.getElementById("variationInputs");
  const variations = variationInputs.childNodes;
  // rename x
  const x = [];

  variations.forEach((variant) => {
    if (variant.children[1].checked) {
      // console.log(variant.children[1].value);
      x.push(variant.children[1].value);
      // console.log(x);
    }
  });
  return x;
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
  const reps = getRepsInput();
  const rpe = getRpeInput();
  const variationInput = getVariationInput();

  const movementObj = obj;
  const setObj = {
    variations: {},
    weight,
    reps,
    rpe,
  };

  if (variationInput.length < 1) {
    setObj.variations.none = true;
  }
  for (let i = 0; i < variationInput.length; i += 1) {
    if (variationInput.length < 1) console.log("none");
    setObj.variations[variationInput[i]] = true;
  }

  movementObj[movement][`set${set}`] = setObj;
  // return currently not needed
  return movementObj;
}

function generateMovementObj() {
  const movement = getMovementInput();

  const obj = {
    [movement]: {},
  };

  return obj;
}

// accepts an array of movement objects as a parameter
function generateWorkoutObj(movements) {
  const obj = {};
  obj.date = getDateTime();

  for (let i = 0; i < movements.length; i += 1) {
    const movement = movements[i];
    obj[`exercise${i + 1}`] = movement;
  }
  return obj;
}

function displayObject(obj){
  const display = document.getElementById('currentWorkoutDisplay');
  const movement = Object.keys(obj);

  const p = document.createElement('p');
  // Object.keys() returns an array
  p.textContent = movement[0]
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
// look into webpack library
// toggle to switch between RPE or RiR
// write function to add entry to exercise list
// consider displaying movements as capital first letter vs all lower
// consider a number hidden from user for ordering movements in a workout
// new variation js
// change variation button to something like clickable text
// work on new variation logic
// comments
// add movements to workout array, display array contents in some collapsible form
// iterate through the workout array to build the final workout object
// let user set date
// merit to simply storing workout data as array of objects, first array item is date?
// ^^^, build as obj from start, apply user date during final submit
// set input starts at 1 and increments itself outside user control (can edit later)
// different listeners for movement and set objects
// work on building workout 1 set at a time
// keep set info greyed out until movement added to workout
// why does movement name come out with a space

console.log(_exercises__WEBPACK_IMPORTED_MODULE_1__.sampleWorkout());

const exerciseInput = document.getElementById("exerciseInput");
// const exerciseListElement = document.getElementById("exerciseList");
const submitExercise = document.getElementById("submitExercise");
// const option = document.createElement("option");
const variations = document.getElementById("variationInputs");
const newVariationButton = document.getElementById("submitNewVariation");
const newMovementButton = document.getElementById("newMovementButton");
// const userDate = document.getElementById('dateInput');
const dateButton = document.getElementById("dateButton");

// console.log(list);
const exerciseListObj = _exercises__WEBPACK_IMPORTED_MODULE_1__.exerciseList;
console.log(exerciseListObj);

let newMovement;

const workoutArray = [];
const workoutObj = {};

dateButton.addEventListener("click", () => {
  // put user date input into workout array
  // console.log(utils.getDateTime());
  workoutObj.date = _utils__WEBPACK_IMPORTED_MODULE_2__.getDateTime();
  console.log(workoutObj);
});

_utils__WEBPACK_IMPORTED_MODULE_2__.fillDatalist("exerciseInputOptions", exerciseListObj);

let value = _utils__WEBPACK_IMPORTED_MODULE_2__.getMovementInput();
let valueCamelCase = _utils__WEBPACK_IMPORTED_MODULE_2__.toCamelCase(value.toLowerCase());
// console.log(valueCamelCase);
if (exerciseListObj[valueCamelCase]) {
  variations.innerHTML = "";
  console.log("sucess");
  const keys = Object.keys(exerciseListObj[valueCamelCase].variation);
  for (let i = 0; i < keys.length; i += 1) {
    if (exerciseListObj[valueCamelCase].variation[keys[i]]) {
      const temp = _utils__WEBPACK_IMPORTED_MODULE_2__.createInput("checkbox", keys[i], "VariationCheck");
      variations.append(temp);

      // pre-check the 'none variation after it's div is appended
      if (keys[i] === "none") document.getElementById("none").checked = true;

      // expand the tempo checkbox if selected for eccentric/concentric inputs
      if (keys[i] === "tempo") {
        temp.addEventListener("change", (event) => {
          if (event.target.checked) {
            const tempoWrap = document.createElement("div");
            tempoWrap.id = "tempoVariationWrap";
            const eccentric = _utils__WEBPACK_IMPORTED_MODULE_2__.createInput(
              "number",
              "eccentric",
              "eccentric",
            );
            const concentric = _utils__WEBPACK_IMPORTED_MODULE_2__.createInput(
              "number",
              "concentric",
              "concentric",
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

exerciseInput.addEventListener("input", () => {
  value = _utils__WEBPACK_IMPORTED_MODULE_2__.getMovementInput();
  valueCamelCase = _utils__WEBPACK_IMPORTED_MODULE_2__.toCamelCase(value.toLowerCase());
  // console.log(valueCamelCase);
  variations.innerHTML = "";
  if (exerciseListObj[valueCamelCase]) {
    console.log("sucess");
    const keys = Object.keys(exerciseListObj[valueCamelCase].variation);
    for (let i = 0; i < keys.length; i += 1) {
      if (exerciseListObj[valueCamelCase].variation[keys[i]]) {
        const temp = _utils__WEBPACK_IMPORTED_MODULE_2__.createInput("checkbox", keys[i], "VariationCheck");
        variations.append(temp);

        // pre-check the 'none variation after it's div is appended
        if (keys[i] === "none") document.getElementById("none").checked = true;

        if (keys[i] === "tempo") {
          temp.addEventListener("change", (event) => {
            if (event.target.checked) {
              const tempoWrap = document.createElement("div");
              tempoWrap.id = "tempoVariationWrap";
              const eccentric = _utils__WEBPACK_IMPORTED_MODULE_2__.createInput(
                "number",
                "eccentric",
                "eccentric",
              );
              const concentric = _utils__WEBPACK_IMPORTED_MODULE_2__.createInput(
                "number",
                "concentric",
                "concentric",
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

    // for (let i = 0; i < Object.keys(list[value].variation).length; i += 1) {
    //   console.log(Object.keys(list[value].variation)[i]);
    // }
  }
});

newMovementButton.addEventListener("click", () => {
  newMovement = _utils__WEBPACK_IMPORTED_MODULE_2__.generateMovementObj();
  workoutArray.push(newMovement);
});

newVariationButton.addEventListener("click", () => {
  const newVariationInput = document.getElementById("newVariationInput");
  const newVariationValue = newVariationInput.value;

  exerciseListObj[valueCamelCase].variation[newVariationValue] = true;
  console.log(exerciseListObj[valueCamelCase]);
});

submitExercise.addEventListener("click", () => {
  // don't add empty entry to exercise list object
  if (value === "") return;

  const keys = Object.keys(exerciseListObj);
  // console.log(keys);

  // checks current list of movements; adds unique movements to exercise list
  let isContained = false;
  for (let i = 0; i < keys.length; i += 1) {
    const movement = exerciseListObj[valueCamelCase];
    if (movement) {
      isContained = true;
    }
  }
  if (!isContained) {
    exerciseListObj[valueCamelCase] = { variation: { none: true } };
    console.log(exerciseListObj);
  }
  //

  _utils__WEBPACK_IMPORTED_MODULE_2__.generateSetObj(newMovement);
  console.log(workoutArray);
  console.log(_utils__WEBPACK_IMPORTED_MODULE_2__.displayObject(workoutArray[0]));

  _utils__WEBPACK_IMPORTED_MODULE_2__.incrementSetNumber();
});

const workoutData = {};
workoutData.day = {
  date: new Date(2022, 0o6, 20, 2, 45, 0),
  workoutNumber: 1,
  exercises: {
    excercise1: {
      name: "squat",
      set1: {
        weight: 225,
        reps: 5,
      },
      set2: {
        weight: 185,
        reps: 8,
      },
    },
    excercise2: {
      name: "bench",
      155: 10,
      145: 15,
    },
  },
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywrQ0FBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsK0NBQWlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsK0NBQStDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUF5QjtBQUN6QztBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsYUFBYTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0RBQW9CO0FBQ3RCO0FBQ0EsY0FBYyxpREFBbUI7QUFDakM7QUFDQSxFQUFFLHNEQUF3QjtBQUMxQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvLi9zcmMvZXhlcmNpc2VzLmpzIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDIwMWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5ib2R5IGRpdiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4jc3F1YXRPcHRpb25zIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQyMDFmO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IGRpdiB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NxdWF0T3B0aW9ucyB7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gc2FtcGxlV29ya291dCgpIHtcclxuICBjb25zdCBvYmogPSB7XHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgZXhlcmNpc2UxOiB7XHJcbiAgICAgIHNxdWF0OiB7XHJcbiAgICAgICAgdmFyaWF0aW9uOiBcInBhdXNlXCIsXHJcbiAgICAgICAgc2V0MToge1xyXG4gICAgICAgICAgd2VpZ2h0OiAxMzUsXHJcbiAgICAgICAgICByZXBzOiA1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0Mjoge1xyXG4gICAgICAgICAgd2VpZ2h0OiAxMzUsXHJcbiAgICAgICAgICByZXBzOiAxMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGV4ZXJjaXNlMjoge1xyXG4gICAgICBiZW5jaF9wcmVzczoge1xyXG4gICAgICAgIHZhcmlhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgc2V0MToge1xyXG4gICAgICAgICAgd2VpZ2h0OiAxMzUsXHJcbiAgICAgICAgICByZXBzOiA1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0Mjoge1xyXG4gICAgICAgICAgd2VpZ2h0OiAxMzUsXHJcbiAgICAgICAgICByZXBzOiAxMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBleGVyY2lzZUxpc3QgPSB7XHJcbiAgc3F1YXQ6IHtcclxuICAgIHZhcmlhdGlvbjoge1xyXG4gICAgICBub25lOiB0cnVlLFxyXG4gICAgICBwYXVzZTogdHJ1ZSxcclxuICAgICAgdGVtcG86IHtcclxuICAgICAgICBjb25jZW50cmljOiAxLFxyXG4gICAgICAgIGVjY2VudHJpYzogMyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBiZW5jaFByZXNzOiB7XHJcbiAgICB2YXJpYXRpb246IHtcclxuICAgICAgbm9uZTogdHJ1ZSxcclxuICAgICAgcGF1c2U6IHRydWUsXHJcbiAgICAgIHRlbXBvOntcclxuICAgICAgICBjb25jZW50cmljOiAxLFxyXG4gICAgICAgIGVjY2VudHJpYzogMyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIGluY2xpbmVCZW5jaFByZXNzOiB7XHJcbiAgICB2YXJpYXRpb246IHtcclxuICAgICAgbm9uZTogdHJ1ZSxcclxuICAgICAgcGF1c2U6IHRydWUsXHJcbiAgICAgIHRlbXBvOntcclxuICAgICAgICBjb25jZW50cmljOiAxLFxyXG4gICAgICAgIGVjY2VudHJpYzogMyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIG92ZXJoZWFkUHJlc3M6IHtcclxuICAgIHZhcmlhdGlvbjoge1xyXG4gICAgICBub25lOiB0cnVlLFxyXG4gICAgICBwYXVzZTogdHJ1ZSxcclxuICAgICAgdGVtcG86e1xyXG4gICAgICAgIGNvbmNlbnRyaWM6IDEsXHJcbiAgICAgICAgZWNjZW50cmljOiAzLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGVhZGxpZnQ6IHtcclxuICAgIHZhcmlhdGlvbjoge1xyXG4gICAgICBub25lOiB0cnVlLFxyXG4gICAgICBwYXVzZTogdHJ1ZSxcclxuICAgICAgdGVtcG86e1xyXG4gICAgICAgIGNvbmNlbnRyaWM6IDEsXHJcbiAgICAgICAgZWNjZW50cmljOiAzLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcHVsbHVwOiB7XHJcbiAgICB2YXJpYXRpb246IHtcclxuICAgICAgY2hpbnVwOiB0cnVlLFxyXG4gICAgICBuZXV0cmFsOiB0cnVlLFxyXG4gICAgICBub25lOiB0cnVlLFxyXG4gICAgICBwYXVzZTogdHJ1ZSxcclxuICAgICAgdGVtcG86e1xyXG4gICAgICAgIGNvbmNlbnRyaWM6IDEsXHJcbiAgICAgICAgZWNjZW50cmljOiAzLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImV4cG9ydCBmdW5jdGlvbiB0b0NhbWVsQ2FzZShzdHJpbmcpIHtcclxuICAvLyBhcnJvdyBmdW5jdGlvbiB1c2VzIHRocm93YXdheSB2YXJpYWJsZSBmb3IgdGhlIHJlZ2V4IG1hdGNoLFxyXG4gIC8vIGNhcHR1cmUgZ3JvdXAgMCwgYXMgcGVyIHJlcGxhY2UoKSBmb3JtYXRcclxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1stX1xcc10oLikvZywgKF8sIGNoYXIpID0+IGNoYXIudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDYW1lbENhc2Uoc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxICQyXCIpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidHVlcykge1xyXG4gIE9iamVjdC5rZXlzKGF0dHJpYnR1ZXMpLmZvckVhY2goKGtleSkgPT5cclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidHVlc1trZXldKSxcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5wdXQoaW5wdXRUeXBlLCBpbnB1dElELCB3cmFwcGVySUQpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBzZXRBdHRyaWJ1dGVzKGlucHV0LCB7XHJcbiAgICB0eXBlOiBpbnB1dFR5cGUsXHJcbiAgICBuYW1lOiBpbnB1dElELFxyXG4gICAgaWQ6IGlucHV0SUQsXHJcbiAgICB2YWx1ZTogaW5wdXRJRCxcclxuICB9KTtcclxuICBzZXRBdHRyaWJ1dGVzKGxhYmVsLCB7IGZvcjogaW5wdXRJRCB9KTtcclxuICBzZXRBdHRyaWJ1dGVzKGRpdiwgeyBpZDogYCR7aW5wdXRJRH0ke3dyYXBwZXJJRH1gIH0pO1xyXG4gIGxhYmVsLnRleHRDb250ZW50ID0gaW5wdXRJRDtcclxuICBkaXYuYXBwZW5kKGxhYmVsLCBpbnB1dCk7XHJcblxyXG4gIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsRGF0YWxpc3QobGlzdElELCBvYmopIHtcclxuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdElEKTtcclxuXHJcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvbi52YWx1ZSA9IHJlbW92ZUNhbWVsQ2FzZShrZXlzW2ldKTtcclxuICAgIGxpc3QuYXBwZW5kKG9wdGlvbik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW92ZW1lbnRJbnB1dCgpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhlcmNpc2VJbnB1dFwiKTtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWlnaHRJbnB1dCgpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VpZ2h0XCIpO1xyXG4gIHJldHVybiBpbnB1dC52YWx1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVwc0lucHV0KCkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXBzXCIpO1xyXG4gIHJldHVybiBpbnB1dC52YWx1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UnBlSW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJwZVwiKTtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldElucHV0VmFsdWUoaW5wdXRJRCkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJRCk7XHJcbiAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZW1wb1ZhbHVlcygpIHtcclxuICBjb25zdCBlY2NlbnRyaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVjY2VudHJpY1wiKTtcclxuICBjb25zdCBjb25jZW50cmljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25jZW50cmljXCIpO1xyXG4gIHJldHVybiBbZWNjZW50cmljLnZhbHVlLCBjb25jZW50cmljLnZhbHVlXTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZVRpbWUoKSB7XHJcbiAgY29uc3QgZGF0ZXRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbnB1dFwiKTtcclxuICByZXR1cm4gZGF0ZXRpbWUudmFsdWVBc0RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYXJpYXRpb25JbnB1dCgpIHtcclxuICBjb25zdCB2YXJpYXRpb25JbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhcmlhdGlvbklucHV0c1wiKTtcclxuICBjb25zdCB2YXJpYXRpb25zID0gdmFyaWF0aW9uSW5wdXRzLmNoaWxkTm9kZXM7XHJcbiAgLy8gcmVuYW1lIHhcclxuICBjb25zdCB4ID0gW107XHJcblxyXG4gIHZhcmlhdGlvbnMuZm9yRWFjaCgodmFyaWFudCkgPT4ge1xyXG4gICAgaWYgKHZhcmlhbnQuY2hpbGRyZW5bMV0uY2hlY2tlZCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh2YXJpYW50LmNoaWxkcmVuWzFdLnZhbHVlKTtcclxuICAgICAgeC5wdXNoKHZhcmlhbnQuY2hpbGRyZW5bMV0udmFsdWUpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh4KTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4geDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldE51bWJlcigpIHtcclxuICBjb25zdCBzZXRDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXROdW1iZXJcIik7XHJcbiAgY29uc3Qgc2V0TnVtYmVyID0gTnVtYmVyKHNldENvdW50ZXIudGV4dENvbnRlbnQpO1xyXG4gIHJldHVybiBzZXROdW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IHNldE51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0TnVtYmVyXCIpO1xyXG5leHBvcnQgZnVuY3Rpb24gaW5jcmVtZW50U2V0TnVtYmVyKCkge1xyXG4gIGxldCBudW1iZXIgPSBOdW1iZXIoc2V0TnVtYmVyLnRleHRDb250ZW50KTtcclxuICBudW1iZXIgKz0gMTtcclxuICBzZXROdW1iZXIudGV4dENvbnRlbnQgPSBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldFNldE51bWJlcigpIHtcclxuICBzZXROdW1iZXIudGV4dENvbnRlbnQgPSAxO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVTZXRPYmoob2JqKSB7XHJcbiAgLy8gZG9lcyBvYmogbmVlZCB0byBiZSBkZWZpbmVkIGFzIGl0IGlzIGhlcmVcclxuICBjb25zdCBtb3ZlbWVudCA9IGdldE1vdmVtZW50SW5wdXQoKTtcclxuICBjb25zdCBzZXQgPSBnZXRTZXROdW1iZXIoKTtcclxuICBjb25zdCB3ZWlnaHQgPSBnZXRXZWlnaHRJbnB1dCgpO1xyXG4gIGNvbnN0IHJlcHMgPSBnZXRSZXBzSW5wdXQoKTtcclxuICBjb25zdCBycGUgPSBnZXRScGVJbnB1dCgpO1xyXG4gIGNvbnN0IHZhcmlhdGlvbklucHV0ID0gZ2V0VmFyaWF0aW9uSW5wdXQoKTtcclxuXHJcbiAgY29uc3QgbW92ZW1lbnRPYmogPSBvYmo7XHJcbiAgY29uc3Qgc2V0T2JqID0ge1xyXG4gICAgdmFyaWF0aW9uczoge30sXHJcbiAgICB3ZWlnaHQsXHJcbiAgICByZXBzLFxyXG4gICAgcnBlLFxyXG4gIH07XHJcblxyXG4gIGlmICh2YXJpYXRpb25JbnB1dC5sZW5ndGggPCAxKSB7XHJcbiAgICBzZXRPYmoudmFyaWF0aW9ucy5ub25lID0gdHJ1ZTtcclxuICB9XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YXJpYXRpb25JbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgaWYgKHZhcmlhdGlvbklucHV0Lmxlbmd0aCA8IDEpIGNvbnNvbGUubG9nKFwibm9uZVwiKTtcclxuICAgIHNldE9iai52YXJpYXRpb25zW3ZhcmlhdGlvbklucHV0W2ldXSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBtb3ZlbWVudE9ialttb3ZlbWVudF1bYHNldCR7c2V0fWBdID0gc2V0T2JqO1xyXG4gIC8vIHJldHVybiBjdXJyZW50bHkgbm90IG5lZWRlZFxyXG4gIHJldHVybiBtb3ZlbWVudE9iajtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTW92ZW1lbnRPYmooKSB7XHJcbiAgY29uc3QgbW92ZW1lbnQgPSBnZXRNb3ZlbWVudElucHV0KCk7XHJcblxyXG4gIGNvbnN0IG9iaiA9IHtcclxuICAgIFttb3ZlbWVudF06IHt9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8vIGFjY2VwdHMgYW4gYXJyYXkgb2YgbW92ZW1lbnQgb2JqZWN0cyBhcyBhIHBhcmFtZXRlclxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVXb3Jrb3V0T2JqKG1vdmVtZW50cykge1xyXG4gIGNvbnN0IG9iaiA9IHt9O1xyXG4gIG9iai5kYXRlID0gZ2V0RGF0ZVRpbWUoKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3ZlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IG1vdmVtZW50ID0gbW92ZW1lbnRzW2ldO1xyXG4gICAgb2JqW2BleGVyY2lzZSR7aSArIDF9YF0gPSBtb3ZlbWVudDtcclxuICB9XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlPYmplY3Qob2JqKXtcclxuICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRXb3Jrb3V0RGlzcGxheScpO1xyXG4gIGNvbnN0IG1vdmVtZW50ID0gT2JqZWN0LmtleXMob2JqKTtcclxuXHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAvLyBPYmplY3Qua2V5cygpIHJldHVybnMgYW4gYXJyYXlcclxuICBwLnRleHRDb250ZW50ID0gbW92ZW1lbnRbMF1cclxuICBkaXNwbGF5LmFwcGVuZChwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlXb3Jrb3V0SW5Qcm9ncmVzcyh3b3Jrb3V0KSB7fVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgKiBhcyBleGVyY2lzZXMgZnJvbSBcIi4vZXhlcmNpc2VzXCI7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG4vLyBUT0RPXHJcbi8vIGJpZyBsaXN0IG9mIGV4ZXJjaXNlIGZ1bGwgbmFtZXMsIGUuZy4gZmxhdCBiYXJiZWxsIGJlbmNoLCBpbmNsaW5lIGR1bWJlbGwgYmVuY2ggZXRjLlxyXG4vLyBtYXliZSBzZWxlY3Qgb3B0aW9ucyB0byBuYXJyb3cgZG93biBhIHBvcHVsYXRlZCBsaXN0IG9mIGV2ZXJ5IGV4ZXJjaXNlXHJcbi8vIHdoaWNoIGlzIGFsc28gZmlsdGVyYWJsZSBieSBhIHNlYXJjaCBmaWVsZC5cclxuLy8gcmVhZCBtb3JlIG9uIGRlc3RydWN0dXJpbmdcclxuLy8gaW5zdGVhZCBvZiBkaXJlY3RseSBhZGRpbmcgbmV3IGV4ZXJjaXNlLCBoYXZlIHNvbWUga2luZCBvZiBkaWFsb2d1ZVxyXG4vLyBsb29rIGludG8gd2VicGFjayBsaWJyYXJ5XHJcbi8vIHRvZ2dsZSB0byBzd2l0Y2ggYmV0d2VlbiBSUEUgb3IgUmlSXHJcbi8vIHdyaXRlIGZ1bmN0aW9uIHRvIGFkZCBlbnRyeSB0byBleGVyY2lzZSBsaXN0XHJcbi8vIGNvbnNpZGVyIGRpc3BsYXlpbmcgbW92ZW1lbnRzIGFzIGNhcGl0YWwgZmlyc3QgbGV0dGVyIHZzIGFsbCBsb3dlclxyXG4vLyBjb25zaWRlciBhIG51bWJlciBoaWRkZW4gZnJvbSB1c2VyIGZvciBvcmRlcmluZyBtb3ZlbWVudHMgaW4gYSB3b3Jrb3V0XHJcbi8vIG5ldyB2YXJpYXRpb24ganNcclxuLy8gY2hhbmdlIHZhcmlhdGlvbiBidXR0b24gdG8gc29tZXRoaW5nIGxpa2UgY2xpY2thYmxlIHRleHRcclxuLy8gd29yayBvbiBuZXcgdmFyaWF0aW9uIGxvZ2ljXHJcbi8vIGNvbW1lbnRzXHJcbi8vIGFkZCBtb3ZlbWVudHMgdG8gd29ya291dCBhcnJheSwgZGlzcGxheSBhcnJheSBjb250ZW50cyBpbiBzb21lIGNvbGxhcHNpYmxlIGZvcm1cclxuLy8gaXRlcmF0ZSB0aHJvdWdoIHRoZSB3b3Jrb3V0IGFycmF5IHRvIGJ1aWxkIHRoZSBmaW5hbCB3b3Jrb3V0IG9iamVjdFxyXG4vLyBsZXQgdXNlciBzZXQgZGF0ZVxyXG4vLyBtZXJpdCB0byBzaW1wbHkgc3RvcmluZyB3b3Jrb3V0IGRhdGEgYXMgYXJyYXkgb2Ygb2JqZWN0cywgZmlyc3QgYXJyYXkgaXRlbSBpcyBkYXRlP1xyXG4vLyBeXl4sIGJ1aWxkIGFzIG9iaiBmcm9tIHN0YXJ0LCBhcHBseSB1c2VyIGRhdGUgZHVyaW5nIGZpbmFsIHN1Ym1pdFxyXG4vLyBzZXQgaW5wdXQgc3RhcnRzIGF0IDEgYW5kIGluY3JlbWVudHMgaXRzZWxmIG91dHNpZGUgdXNlciBjb250cm9sIChjYW4gZWRpdCBsYXRlcilcclxuLy8gZGlmZmVyZW50IGxpc3RlbmVycyBmb3IgbW92ZW1lbnQgYW5kIHNldCBvYmplY3RzXHJcbi8vIHdvcmsgb24gYnVpbGRpbmcgd29ya291dCAxIHNldCBhdCBhIHRpbWVcclxuLy8ga2VlcCBzZXQgaW5mbyBncmV5ZWQgb3V0IHVudGlsIG1vdmVtZW50IGFkZGVkIHRvIHdvcmtvdXRcclxuLy8gd2h5IGRvZXMgbW92ZW1lbnQgbmFtZSBjb21lIG91dCB3aXRoIGEgc3BhY2VcclxuXHJcbmNvbnNvbGUubG9nKGV4ZXJjaXNlcy5zYW1wbGVXb3Jrb3V0KCkpO1xyXG5cclxuY29uc3QgZXhlcmNpc2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhlcmNpc2VJbnB1dFwiKTtcclxuLy8gY29uc3QgZXhlcmNpc2VMaXN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhlcmNpc2VMaXN0XCIpO1xyXG5jb25zdCBzdWJtaXRFeGVyY2lzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0RXhlcmNpc2VcIik7XHJcbi8vIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbmNvbnN0IHZhcmlhdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhcmlhdGlvbklucHV0c1wiKTtcclxuY29uc3QgbmV3VmFyaWF0aW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXROZXdWYXJpYXRpb25cIik7XHJcbmNvbnN0IG5ld01vdmVtZW50QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdNb3ZlbWVudEJ1dHRvblwiKTtcclxuLy8gY29uc3QgdXNlckRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZUlucHV0Jyk7XHJcbmNvbnN0IGRhdGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVCdXR0b25cIik7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhsaXN0KTtcclxuY29uc3QgZXhlcmNpc2VMaXN0T2JqID0gZXhlcmNpc2VzLmV4ZXJjaXNlTGlzdDtcclxuY29uc29sZS5sb2coZXhlcmNpc2VMaXN0T2JqKTtcclxuXHJcbmxldCBuZXdNb3ZlbWVudDtcclxuXHJcbmNvbnN0IHdvcmtvdXRBcnJheSA9IFtdO1xyXG5jb25zdCB3b3Jrb3V0T2JqID0ge307XHJcblxyXG5kYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgLy8gcHV0IHVzZXIgZGF0ZSBpbnB1dCBpbnRvIHdvcmtvdXQgYXJyYXlcclxuICAvLyBjb25zb2xlLmxvZyh1dGlscy5nZXREYXRlVGltZSgpKTtcclxuICB3b3Jrb3V0T2JqLmRhdGUgPSB1dGlscy5nZXREYXRlVGltZSgpO1xyXG4gIGNvbnNvbGUubG9nKHdvcmtvdXRPYmopO1xyXG59KTtcclxuXHJcbnV0aWxzLmZpbGxEYXRhbGlzdChcImV4ZXJjaXNlSW5wdXRPcHRpb25zXCIsIGV4ZXJjaXNlTGlzdE9iaik7XHJcblxyXG5sZXQgdmFsdWUgPSB1dGlscy5nZXRNb3ZlbWVudElucHV0KCk7XHJcbmxldCB2YWx1ZUNhbWVsQ2FzZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKHZhbHVlLnRvTG93ZXJDYXNlKCkpO1xyXG4vLyBjb25zb2xlLmxvZyh2YWx1ZUNhbWVsQ2FzZSk7XHJcbmlmIChleGVyY2lzZUxpc3RPYmpbdmFsdWVDYW1lbENhc2VdKSB7XHJcbiAgdmFyaWF0aW9ucy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGNvbnNvbGUubG9nKFwic3VjZXNzXCIpO1xyXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhleGVyY2lzZUxpc3RPYmpbdmFsdWVDYW1lbENhc2VdLnZhcmlhdGlvbik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAoZXhlcmNpc2VMaXN0T2JqW3ZhbHVlQ2FtZWxDYXNlXS52YXJpYXRpb25ba2V5c1tpXV0pIHtcclxuICAgICAgY29uc3QgdGVtcCA9IHV0aWxzLmNyZWF0ZUlucHV0KFwiY2hlY2tib3hcIiwga2V5c1tpXSwgXCJWYXJpYXRpb25DaGVja1wiKTtcclxuICAgICAgdmFyaWF0aW9ucy5hcHBlbmQodGVtcCk7XHJcblxyXG4gICAgICAvLyBwcmUtY2hlY2sgdGhlICdub25lIHZhcmlhdGlvbiBhZnRlciBpdCdzIGRpdiBpcyBhcHBlbmRlZFxyXG4gICAgICBpZiAoa2V5c1tpXSA9PT0gXCJub25lXCIpIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm9uZVwiKS5jaGVja2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgIC8vIGV4cGFuZCB0aGUgdGVtcG8gY2hlY2tib3ggaWYgc2VsZWN0ZWQgZm9yIGVjY2VudHJpYy9jb25jZW50cmljIGlucHV0c1xyXG4gICAgICBpZiAoa2V5c1tpXSA9PT0gXCJ0ZW1wb1wiKSB7XHJcbiAgICAgICAgdGVtcC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBvV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHRlbXBvV3JhcC5pZCA9IFwidGVtcG9WYXJpYXRpb25XcmFwXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGVjY2VudHJpYyA9IHV0aWxzLmNyZWF0ZUlucHV0KFxyXG4gICAgICAgICAgICAgIFwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgXCJlY2NlbnRyaWNcIixcclxuICAgICAgICAgICAgICBcImVjY2VudHJpY1wiLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBjb25jZW50cmljID0gdXRpbHMuY3JlYXRlSW5wdXQoXHJcbiAgICAgICAgICAgICAgXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICBcImNvbmNlbnRyaWNcIixcclxuICAgICAgICAgICAgICBcImNvbmNlbnRyaWNcIixcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGVtcG9XcmFwLmFwcGVuZChlY2NlbnRyaWMsIGNvbmNlbnRyaWMpO1xyXG4gICAgICAgICAgICB2YXJpYXRpb25zLmFwcGVuZCh0ZW1wb1dyYXApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCFldmVudC50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wb1dyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBvVmFyaWF0aW9uV3JhcFwiKTtcclxuICAgICAgICAgICAgdGVtcG9XcmFwLnJlbW92ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leGVyY2lzZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgdmFsdWUgPSB1dGlscy5nZXRNb3ZlbWVudElucHV0KCk7XHJcbiAgdmFsdWVDYW1lbENhc2UgPSB1dGlscy50b0NhbWVsQ2FzZSh2YWx1ZS50b0xvd2VyQ2FzZSgpKTtcclxuICAvLyBjb25zb2xlLmxvZyh2YWx1ZUNhbWVsQ2FzZSk7XHJcbiAgdmFyaWF0aW9ucy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGlmIChleGVyY2lzZUxpc3RPYmpbdmFsdWVDYW1lbENhc2VdKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInN1Y2Vzc1wiKTtcclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhleGVyY2lzZUxpc3RPYmpbdmFsdWVDYW1lbENhc2VdLnZhcmlhdGlvbik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgaWYgKGV4ZXJjaXNlTGlzdE9ialt2YWx1ZUNhbWVsQ2FzZV0udmFyaWF0aW9uW2tleXNbaV1dKSB7XHJcbiAgICAgICAgY29uc3QgdGVtcCA9IHV0aWxzLmNyZWF0ZUlucHV0KFwiY2hlY2tib3hcIiwga2V5c1tpXSwgXCJWYXJpYXRpb25DaGVja1wiKTtcclxuICAgICAgICB2YXJpYXRpb25zLmFwcGVuZCh0ZW1wKTtcclxuXHJcbiAgICAgICAgLy8gcHJlLWNoZWNrIHRoZSAnbm9uZSB2YXJpYXRpb24gYWZ0ZXIgaXQncyBkaXYgaXMgYXBwZW5kZWRcclxuICAgICAgICBpZiAoa2V5c1tpXSA9PT0gXCJub25lXCIpIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm9uZVwiKS5jaGVja2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKGtleXNbaV0gPT09IFwidGVtcG9cIikge1xyXG4gICAgICAgICAgdGVtcC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICBjb25zdCB0ZW1wb1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgIHRlbXBvV3JhcC5pZCA9IFwidGVtcG9WYXJpYXRpb25XcmFwXCI7XHJcbiAgICAgICAgICAgICAgY29uc3QgZWNjZW50cmljID0gdXRpbHMuY3JlYXRlSW5wdXQoXHJcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJlY2NlbnRyaWNcIixcclxuICAgICAgICAgICAgICAgIFwiZWNjZW50cmljXCIsXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBjb25zdCBjb25jZW50cmljID0gdXRpbHMuY3JlYXRlSW5wdXQoXHJcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb25jZW50cmljXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbmNlbnRyaWNcIixcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHRlbXBvV3JhcC5hcHBlbmQoZWNjZW50cmljLCBjb25jZW50cmljKTtcclxuICAgICAgICAgICAgICB2YXJpYXRpb25zLmFwcGVuZCh0ZW1wb1dyYXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICBjb25zdCB0ZW1wb1dyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBvVmFyaWF0aW9uV3JhcFwiKTtcclxuICAgICAgICAgICAgICB0ZW1wb1dyYXAucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMobGlzdFt2YWx1ZV0udmFyaWF0aW9uKS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhsaXN0W3ZhbHVlXS52YXJpYXRpb24pW2ldKTtcclxuICAgIC8vIH1cclxuICB9XHJcbn0pO1xyXG5cclxubmV3TW92ZW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBuZXdNb3ZlbWVudCA9IHV0aWxzLmdlbmVyYXRlTW92ZW1lbnRPYmooKTtcclxuICB3b3Jrb3V0QXJyYXkucHVzaChuZXdNb3ZlbWVudCk7XHJcbn0pO1xyXG5cclxubmV3VmFyaWF0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgbmV3VmFyaWF0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1ZhcmlhdGlvbklucHV0XCIpO1xyXG4gIGNvbnN0IG5ld1ZhcmlhdGlvblZhbHVlID0gbmV3VmFyaWF0aW9uSW5wdXQudmFsdWU7XHJcblxyXG4gIGV4ZXJjaXNlTGlzdE9ialt2YWx1ZUNhbWVsQ2FzZV0udmFyaWF0aW9uW25ld1ZhcmlhdGlvblZhbHVlXSA9IHRydWU7XHJcbiAgY29uc29sZS5sb2coZXhlcmNpc2VMaXN0T2JqW3ZhbHVlQ2FtZWxDYXNlXSk7XHJcbn0pO1xyXG5cclxuc3VibWl0RXhlcmNpc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAvLyBkb24ndCBhZGQgZW1wdHkgZW50cnkgdG8gZXhlcmNpc2UgbGlzdCBvYmplY3RcclxuICBpZiAodmFsdWUgPT09IFwiXCIpIHJldHVybjtcclxuXHJcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGV4ZXJjaXNlTGlzdE9iaik7XHJcbiAgLy8gY29uc29sZS5sb2coa2V5cyk7XHJcblxyXG4gIC8vIGNoZWNrcyBjdXJyZW50IGxpc3Qgb2YgbW92ZW1lbnRzOyBhZGRzIHVuaXF1ZSBtb3ZlbWVudHMgdG8gZXhlcmNpc2UgbGlzdFxyXG4gIGxldCBpc0NvbnRhaW5lZCA9IGZhbHNlO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgbW92ZW1lbnQgPSBleGVyY2lzZUxpc3RPYmpbdmFsdWVDYW1lbENhc2VdO1xyXG4gICAgaWYgKG1vdmVtZW50KSB7XHJcbiAgICAgIGlzQ29udGFpbmVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKCFpc0NvbnRhaW5lZCkge1xyXG4gICAgZXhlcmNpc2VMaXN0T2JqW3ZhbHVlQ2FtZWxDYXNlXSA9IHsgdmFyaWF0aW9uOiB7IG5vbmU6IHRydWUgfSB9O1xyXG4gICAgY29uc29sZS5sb2coZXhlcmNpc2VMaXN0T2JqKTtcclxuICB9XHJcbiAgLy9cclxuXHJcbiAgdXRpbHMuZ2VuZXJhdGVTZXRPYmoobmV3TW92ZW1lbnQpO1xyXG4gIGNvbnNvbGUubG9nKHdvcmtvdXRBcnJheSk7XHJcbiAgY29uc29sZS5sb2codXRpbHMuZGlzcGxheU9iamVjdCh3b3Jrb3V0QXJyYXlbMF0pKTtcclxuXHJcbiAgdXRpbHMuaW5jcmVtZW50U2V0TnVtYmVyKCk7XHJcbn0pO1xyXG5cclxuY29uc3Qgd29ya291dERhdGEgPSB7fTtcclxud29ya291dERhdGEuZGF5ID0ge1xyXG4gIGRhdGU6IG5ldyBEYXRlKDIwMjIsIDBvNiwgMjAsIDIsIDQ1LCAwKSxcclxuICB3b3Jrb3V0TnVtYmVyOiAxLFxyXG4gIGV4ZXJjaXNlczoge1xyXG4gICAgZXhjZXJjaXNlMToge1xyXG4gICAgICBuYW1lOiBcInNxdWF0XCIsXHJcbiAgICAgIHNldDE6IHtcclxuICAgICAgICB3ZWlnaHQ6IDIyNSxcclxuICAgICAgICByZXBzOiA1LFxyXG4gICAgICB9LFxyXG4gICAgICBzZXQyOiB7XHJcbiAgICAgICAgd2VpZ2h0OiAxODUsXHJcbiAgICAgICAgcmVwczogOCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBleGNlcmNpc2UyOiB7XHJcbiAgICAgIG5hbWU6IFwiYmVuY2hcIixcclxuICAgICAgMTU1OiAxMCxcclxuICAgICAgMTQ1OiAxNSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9