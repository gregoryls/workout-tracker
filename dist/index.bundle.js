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
      none: false,
      pause: true,
      tempo: {
        concentric: 1,
        eccentric: 2,
      },
    },
  },
  benchPress: {
    variation: {
      none: true,
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

  // if (variationInput.length < 1) {
  //   setObj[`set${set}`].variations.none = true;
  // }
  // for (let i = 0; i < variationInput.length; i += 1) {
  //   if (variationInput.length < 1) console.log("none");
  //   setObj[`set${set}`].variations[variationInput[i]] = true;
  // }

  movementObj[movement][`set${set}`] = setObj;
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
// change variation button to somethign like clickable text
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

// const a2022530 = {
//   squat: { weight: "215", reps: ["5", "5", "5", "5", "5"] },
//   ohp: { weight: "55", reps: ["16", "16", "16", "16", "16"] },
// };

// const movement = document.getElementById("movement");
// movement.addEventListener("change", testFunction);

// function testFunction() {
//   if (movement.value === "squat") {
//     document.getElementById("squatOptions").style.visibility = "visible";
//   }
// }

console.log(_exercises__WEBPACK_IMPORTED_MODULE_1__.sampleWorkout());

const exerciseInput = document.getElementById("exerciseInput");
// const exerciseListElement = document.getElementById("exerciseList");
const submitExercise = document.getElementById("submitExercise");
// const option = document.createElement("option");
const variations = document.getElementById("variationInputs");
const newVariationButton = document.getElementById("submitNewVariation");

// console.log(list);
const exerciseListObj = _exercises__WEBPACK_IMPORTED_MODULE_1__.exerciseList;
console.log(exerciseListObj);

let test;

const workoutArray = [];

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

newVariationButton.addEventListener("click", () => {
  const newVariationInput = document.getElementById("newVariationInput");
  const newVariationValue = newVariationInput.value;

  exerciseListObj[valueCamelCase].variation[newVariationValue] = true;
  console.log(exerciseListObj[valueCamelCase]);

  test = _utils__WEBPACK_IMPORTED_MODULE_2__.generateMovementObj();
});

submitExercise.addEventListener("click", () => {
  // const value = utils.getMovementInput();
  // console.log(utils.getInputValue("rpe"));

  // don't add empty entry to exercise list object
  if (value === "") return;

  // const exerciseOptions = exerciseListElement.options;
  // const valueCamelCase = utils.toCamelCase(value.toLowerCase());

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

  workoutArray.push(_utils__WEBPACK_IMPORTED_MODULE_2__.generateSetObj(test));
  console.log(workoutArray);

  _utils__WEBPACK_IMPORTED_MODULE_2__.incrementSetNumber();

  // for (let i = 0; i < workoutArray.length; i += 1) {
  //   console.log(workoutArray[i]);
  // }

  // const testObj = utils.generateSetObj(utils.generateMovementObj());
  // const stringify = JSON.stringify(testObj, null, 2);
  // const display = document.getElementById("currentWorkoutDisplay");
  // display.innerHTML = `<pre>${stringify}</pre>`;
  // console.log(stringify);
});

// input.addEventListener("input", () => {
//   const { value } = this;

//   const newExercise = document.createElement("option");
//   newExercise.value = value;
//   exerciseListElement.append(newExercise);
//   this.value = value;
// });

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
// console.log(Object.keys(workoutData.day.exercises.excercise1)[0]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxhQUFhO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtEQUFvQjtBQUN4QztBQUNBO0FBQ0EsRUFBRSxzREFBd0I7QUFDMUI7QUFDQSxxQkFBcUIseUJBQXlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxVQUFVO0FBQzNDO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyLy4vc3JjL2V4ZXJjaXNlcy5qcyIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQyMDFmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYm9keSBkaXYge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuI3NxdWF0T3B0aW9ucyB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjAxZjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSBkaXYge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNzcXVhdE9wdGlvbnMge1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIHNhbXBsZVdvcmtvdXQoKSB7XHJcbiAgY29uc3Qgb2JqID0ge1xyXG4gICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgIGV4ZXJjaXNlMToge1xyXG4gICAgICBzcXVhdDoge1xyXG4gICAgICAgIHZhcmlhdGlvbjogXCJwYXVzZVwiLFxyXG4gICAgICAgIHNldDE6IHtcclxuICAgICAgICAgIHdlaWdodDogMTM1LFxyXG4gICAgICAgICAgcmVwczogNSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDI6IHtcclxuICAgICAgICAgIHdlaWdodDogMTM1LFxyXG4gICAgICAgICAgcmVwczogMTAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBleGVyY2lzZTI6IHtcclxuICAgICAgYmVuY2hfcHJlc3M6IHtcclxuICAgICAgICB2YXJpYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgIHNldDE6IHtcclxuICAgICAgICAgIHdlaWdodDogMTM1LFxyXG4gICAgICAgICAgcmVwczogNSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDI6IHtcclxuICAgICAgICAgIHdlaWdodDogMTM1LFxyXG4gICAgICAgICAgcmVwczogMTAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXhlcmNpc2VMaXN0ID0ge1xyXG4gIHNxdWF0OiB7XHJcbiAgICB2YXJpYXRpb246IHtcclxuICAgICAgbm9uZTogZmFsc2UsXHJcbiAgICAgIHBhdXNlOiB0cnVlLFxyXG4gICAgICB0ZW1wbzoge1xyXG4gICAgICAgIGNvbmNlbnRyaWM6IDEsXHJcbiAgICAgICAgZWNjZW50cmljOiAyLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJlbmNoUHJlc3M6IHtcclxuICAgIHZhcmlhdGlvbjoge1xyXG4gICAgICBub25lOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gdG9DYW1lbENhc2Uoc3RyaW5nKSB7XHJcbiAgLy8gYXJyb3cgZnVuY3Rpb24gdXNlcyB0aHJvd2F3YXkgdmFyaWFibGUgZm9yIHRoZSByZWdleCBtYXRjaCxcclxuICAvLyBjYXB0dXJlIGdyb3VwIDAsIGFzIHBlciByZXBsYWNlKCkgZm9ybWF0XHJcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bLV9cXHNdKC4pL2csIChfLCBjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2FtZWxDYXNlKHN0cmluZykge1xyXG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMSAkMlwiKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnR1ZXMpIHtcclxuICBPYmplY3Qua2V5cyhhdHRyaWJ0dWVzKS5mb3JFYWNoKChrZXkpID0+XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnR1ZXNba2V5XSksXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUlucHV0KGlucHV0VHlwZSwgaW5wdXRJRCwgd3JhcHBlcklEKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgc2V0QXR0cmlidXRlcyhpbnB1dCwge1xyXG4gICAgdHlwZTogaW5wdXRUeXBlLFxyXG4gICAgbmFtZTogaW5wdXRJRCxcclxuICAgIGlkOiBpbnB1dElELFxyXG4gICAgdmFsdWU6IGlucHV0SUQsXHJcbiAgfSk7XHJcbiAgc2V0QXR0cmlidXRlcyhsYWJlbCwgeyBmb3I6IGlucHV0SUQgfSk7XHJcbiAgc2V0QXR0cmlidXRlcyhkaXYsIHsgaWQ6IGAke2lucHV0SUR9JHt3cmFwcGVySUR9YCB9KTtcclxuICBsYWJlbC50ZXh0Q29udGVudCA9IGlucHV0SUQ7XHJcbiAgZGl2LmFwcGVuZChsYWJlbCwgaW5wdXQpO1xyXG5cclxuICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsbERhdGFsaXN0KGxpc3RJRCwgb2JqKSB7XHJcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3RJRCk7XHJcblxyXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBvcHRpb24udmFsdWUgPSByZW1vdmVDYW1lbENhc2Uoa2V5c1tpXSk7XHJcbiAgICBsaXN0LmFwcGVuZChvcHRpb24pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vdmVtZW50SW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4ZXJjaXNlSW5wdXRcIik7XHJcbiAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VpZ2h0SW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlaWdodFwiKTtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlcHNJbnB1dCgpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVwc1wiKTtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJwZUlucHV0KCkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJycGVcIik7XHJcbiAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKGlucHV0SUQpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SUQpO1xyXG4gIHJldHVybiBpbnB1dC52YWx1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVtcG9WYWx1ZXMoKSB7XHJcbiAgY29uc3QgZWNjZW50cmljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlY2NlbnRyaWNcIik7XHJcbiAgY29uc3QgY29uY2VudHJpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uY2VudHJpY1wiKTtcclxuICByZXR1cm4gW2VjY2VudHJpYy52YWx1ZSwgY29uY2VudHJpYy52YWx1ZV07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGVUaW1lKCkge1xyXG4gIGNvbnN0IGRhdGV0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlSW5wdXRcIik7XHJcbiAgcmV0dXJuIGRhdGV0aW1lLnZhbHVlQXNEYXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFyaWF0aW9uSW5wdXQoKSB7XHJcbiAgY29uc3QgdmFyaWF0aW9uSW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YXJpYXRpb25JbnB1dHNcIik7XHJcbiAgY29uc3QgdmFyaWF0aW9ucyA9IHZhcmlhdGlvbklucHV0cy5jaGlsZE5vZGVzO1xyXG4gIC8vIHJlbmFtZSB4XHJcbiAgY29uc3QgeCA9IFtdO1xyXG5cclxuICB2YXJpYXRpb25zLmZvckVhY2goKHZhcmlhbnQpID0+IHtcclxuICAgIGlmICh2YXJpYW50LmNoaWxkcmVuWzFdLmNoZWNrZWQpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2codmFyaWFudC5jaGlsZHJlblsxXS52YWx1ZSk7XHJcbiAgICAgIHgucHVzaCh2YXJpYW50LmNoaWxkcmVuWzFdLnZhbHVlKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coeCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXROdW1iZXIoKSB7XHJcbiAgY29uc3Qgc2V0Q291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0TnVtYmVyXCIpO1xyXG4gIGNvbnN0IHNldE51bWJlciA9IE51bWJlcihzZXRDb3VudGVyLnRleHRDb250ZW50KTtcclxuICByZXR1cm4gc2V0TnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBzZXROdW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldE51bWJlclwiKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGluY3JlbWVudFNldE51bWJlcigpIHtcclxuICBsZXQgbnVtYmVyID0gTnVtYmVyKHNldE51bWJlci50ZXh0Q29udGVudCk7XHJcbiAgbnVtYmVyICs9IDE7XHJcbiAgc2V0TnVtYmVyLnRleHRDb250ZW50ID0gbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRTZXROdW1iZXIoKSB7XHJcbiAgc2V0TnVtYmVyLnRleHRDb250ZW50ID0gMTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlU2V0T2JqKG9iaikge1xyXG4gIC8vIGRvZXMgb2JqIG5lZWQgdG8gYmUgZGVmaW5lZCBhcyBpdCBpcyBoZXJlXHJcbiAgY29uc3QgbW92ZW1lbnQgPSBnZXRNb3ZlbWVudElucHV0KCk7XHJcbiAgY29uc3Qgc2V0ID0gZ2V0U2V0TnVtYmVyKCk7XHJcbiAgY29uc3Qgd2VpZ2h0ID0gZ2V0V2VpZ2h0SW5wdXQoKTtcclxuICBjb25zdCByZXBzID0gZ2V0UmVwc0lucHV0KCk7XHJcbiAgY29uc3QgcnBlID0gZ2V0UnBlSW5wdXQoKTtcclxuICBjb25zdCB2YXJpYXRpb25JbnB1dCA9IGdldFZhcmlhdGlvbklucHV0KCk7XHJcblxyXG4gIGNvbnN0IG1vdmVtZW50T2JqID0gb2JqO1xyXG4gIGNvbnN0IHNldE9iaiA9IHtcclxuICAgIHZhcmlhdGlvbnM6IHt9LFxyXG4gICAgd2VpZ2h0LFxyXG4gICAgcmVwcyxcclxuICAgIHJwZSxcclxuICB9O1xyXG5cclxuICAvLyBpZiAodmFyaWF0aW9uSW5wdXQubGVuZ3RoIDwgMSkge1xyXG4gIC8vICAgc2V0T2JqW2BzZXQke3NldH1gXS52YXJpYXRpb25zLm5vbmUgPSB0cnVlO1xyXG4gIC8vIH1cclxuICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHZhcmlhdGlvbklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgLy8gICBpZiAodmFyaWF0aW9uSW5wdXQubGVuZ3RoIDwgMSkgY29uc29sZS5sb2coXCJub25lXCIpO1xyXG4gIC8vICAgc2V0T2JqW2BzZXQke3NldH1gXS52YXJpYXRpb25zW3ZhcmlhdGlvbklucHV0W2ldXSA9IHRydWU7XHJcbiAgLy8gfVxyXG5cclxuICBtb3ZlbWVudE9ialttb3ZlbWVudF1bYHNldCR7c2V0fWBdID0gc2V0T2JqO1xyXG4gIHJldHVybiBtb3ZlbWVudE9iajtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTW92ZW1lbnRPYmooKSB7XHJcbiAgY29uc3QgbW92ZW1lbnQgPSBnZXRNb3ZlbWVudElucHV0KCk7XHJcblxyXG4gIGNvbnN0IG9iaiA9IHtcclxuICAgIFttb3ZlbWVudF06IHt9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8vIGFjY2VwdHMgYW4gYXJyYXkgb2YgbW92ZW1lbnQgb2JqZWN0cyBhcyBhIHBhcmFtZXRlclxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVXb3Jrb3V0T2JqKG1vdmVtZW50cykge1xyXG4gIGNvbnN0IG9iaiA9IHt9O1xyXG4gIG9iai5kYXRlID0gZ2V0RGF0ZVRpbWUoKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3ZlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IG1vdmVtZW50ID0gbW92ZW1lbnRzW2ldO1xyXG4gICAgb2JqW2BleGVyY2lzZSR7aSArIDF9YF0gPSBtb3ZlbWVudDtcclxuICB9XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlXb3Jrb3V0SW5Qcm9ncmVzcyh3b3Jrb3V0KSB7fVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgKiBhcyBleGVyY2lzZXMgZnJvbSBcIi4vZXhlcmNpc2VzXCI7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG4vLyBUT0RPXHJcbi8vIGJpZyBsaXN0IG9mIGV4ZXJjaXNlIGZ1bGwgbmFtZXMsIGUuZy4gZmxhdCBiYXJiZWxsIGJlbmNoLCBpbmNsaW5lIGR1bWJlbGwgYmVuY2ggZXRjLlxyXG4vLyBtYXliZSBzZWxlY3Qgb3B0aW9ucyB0byBuYXJyb3cgZG93biBhIHBvcHVsYXRlZCBsaXN0IG9mIGV2ZXJ5IGV4ZXJjaXNlXHJcbi8vIHdoaWNoIGlzIGFsc28gZmlsdGVyYWJsZSBieSBhIHNlYXJjaCBmaWVsZC5cclxuLy8gcmVhZCBtb3JlIG9uIGRlc3RydWN0dXJpbmdcclxuLy8gaW5zdGVhZCBvZiBkaXJlY3RseSBhZGRpbmcgbmV3IGV4ZXJjaXNlLCBoYXZlIHNvbWUga2luZCBvZiBkaWFsb2d1ZVxyXG4vLyBsb29rIGludG8gd2VicGFjayBsaWJyYXJ5XHJcbi8vIHRvZ2dsZSB0byBzd2l0Y2ggYmV0d2VlbiBSUEUgb3IgUmlSXHJcbi8vIHdyaXRlIGZ1bmN0aW9uIHRvIGFkZCBlbnRyeSB0byBleGVyY2lzZSBsaXN0XHJcbi8vIGNvbnNpZGVyIGRpc3BsYXlpbmcgbW92ZW1lbnRzIGFzIGNhcGl0YWwgZmlyc3QgbGV0dGVyIHZzIGFsbCBsb3dlclxyXG4vLyBjb25zaWRlciBhIG51bWJlciBoaWRkZW4gZnJvbSB1c2VyIGZvciBvcmRlcmluZyBtb3ZlbWVudHMgaW4gYSB3b3Jrb3V0XHJcbi8vIG5ldyB2YXJpYXRpb24ganNcclxuLy8gY2hhbmdlIHZhcmlhdGlvbiBidXR0b24gdG8gc29tZXRoaWduIGxpa2UgY2xpY2thYmxlIHRleHRcclxuLy8gd29yayBvbiBuZXcgdmFyaWF0aW9uIGxvZ2ljXHJcbi8vIGNvbW1lbnRzXHJcbi8vIGFkZCBtb3ZlbWVudHMgdG8gd29ya291dCBhcnJheSwgZGlzcGxheSBhcnJheSBjb250ZW50cyBpbiBzb21lIGNvbGxhcHNpYmxlIGZvcm1cclxuLy8gaXRlcmF0ZSB0aHJvdWdoIHRoZSB3b3Jrb3V0IGFycmF5IHRvIGJ1aWxkIHRoZSBmaW5hbCB3b3Jrb3V0IG9iamVjdFxyXG4vLyBsZXQgdXNlciBzZXQgZGF0ZVxyXG4vLyBtZXJpdCB0byBzaW1wbHkgc3RvcmluZyB3b3Jrb3V0IGRhdGEgYXMgYXJyYXkgb2Ygb2JqZWN0cywgZmlyc3QgYXJyYXkgaXRlbSBpcyBkYXRlP1xyXG4vLyBeXl4sIGJ1aWxkIGFzIG9iaiBmcm9tIHN0YXJ0LCBhcHBseSB1c2VyIGRhdGUgZHVyaW5nIGZpbmFsIHN1Ym1pdFxyXG4vLyBzZXQgaW5wdXQgc3RhcnRzIGF0IDEgYW5kIGluY3JlbWVudHMgaXRzZWxmIG91dHNpZGUgdXNlciBjb250cm9sIChjYW4gZWRpdCBsYXRlcilcclxuLy8gZGlmZmVyZW50IGxpc3RlbmVycyBmb3IgbW92ZW1lbnQgYW5kIHNldCBvYmplY3RzXHJcbi8vIHdvcmsgb24gYnVpbGRpbmcgd29ya291dCAxIHNldCBhdCBhIHRpbWVcclxuXHJcbi8vIGNvbnN0IGEyMDIyNTMwID0ge1xyXG4vLyAgIHNxdWF0OiB7IHdlaWdodDogXCIyMTVcIiwgcmVwczogW1wiNVwiLCBcIjVcIiwgXCI1XCIsIFwiNVwiLCBcIjVcIl0gfSxcclxuLy8gICBvaHA6IHsgd2VpZ2h0OiBcIjU1XCIsIHJlcHM6IFtcIjE2XCIsIFwiMTZcIiwgXCIxNlwiLCBcIjE2XCIsIFwiMTZcIl0gfSxcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IG1vdmVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3ZlbWVudFwiKTtcclxuLy8gbW92ZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0ZXN0RnVuY3Rpb24pO1xyXG5cclxuLy8gZnVuY3Rpb24gdGVzdEZ1bmN0aW9uKCkge1xyXG4vLyAgIGlmIChtb3ZlbWVudC52YWx1ZSA9PT0gXCJzcXVhdFwiKSB7XHJcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNxdWF0T3B0aW9uc1wiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5jb25zb2xlLmxvZyhleGVyY2lzZXMuc2FtcGxlV29ya291dCgpKTtcclxuXHJcbmNvbnN0IGV4ZXJjaXNlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4ZXJjaXNlSW5wdXRcIik7XHJcbi8vIGNvbnN0IGV4ZXJjaXNlTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4ZXJjaXNlTGlzdFwiKTtcclxuY29uc3Qgc3VibWl0RXhlcmNpc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdEV4ZXJjaXNlXCIpO1xyXG4vLyBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG5jb25zdCB2YXJpYXRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YXJpYXRpb25JbnB1dHNcIik7XHJcbmNvbnN0IG5ld1ZhcmlhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0TmV3VmFyaWF0aW9uXCIpO1xyXG5cclxuLy8gY29uc29sZS5sb2cobGlzdCk7XHJcbmNvbnN0IGV4ZXJjaXNlTGlzdE9iaiA9IGV4ZXJjaXNlcy5leGVyY2lzZUxpc3Q7XHJcbmNvbnNvbGUubG9nKGV4ZXJjaXNlTGlzdE9iaik7XHJcblxyXG5sZXQgdGVzdDtcclxuXHJcbmNvbnN0IHdvcmtvdXRBcnJheSA9IFtdO1xyXG5cclxudXRpbHMuZmlsbERhdGFsaXN0KFwiZXhlcmNpc2VJbnB1dE9wdGlvbnNcIiwgZXhlcmNpc2VMaXN0T2JqKTtcclxuXHJcbmxldCB2YWx1ZSA9IHV0aWxzLmdldE1vdmVtZW50SW5wdXQoKTtcclxubGV0IHZhbHVlQ2FtZWxDYXNlID0gdXRpbHMudG9DYW1lbENhc2UodmFsdWUudG9Mb3dlckNhc2UoKSk7XHJcbi8vIGNvbnNvbGUubG9nKHZhbHVlQ2FtZWxDYXNlKTtcclxuaWYgKGV4ZXJjaXNlTGlzdE9ialt2YWx1ZUNhbWVsQ2FzZV0pIHtcclxuICB2YXJpYXRpb25zLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgY29uc29sZS5sb2coXCJzdWNlc3NcIik7XHJcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGV4ZXJjaXNlTGlzdE9ialt2YWx1ZUNhbWVsQ2FzZV0udmFyaWF0aW9uKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGlmIChleGVyY2lzZUxpc3RPYmpbdmFsdWVDYW1lbENhc2VdLnZhcmlhdGlvbltrZXlzW2ldXSkge1xyXG4gICAgICBjb25zdCB0ZW1wID0gdXRpbHMuY3JlYXRlSW5wdXQoXCJjaGVja2JveFwiLCBrZXlzW2ldLCBcIlZhcmlhdGlvbkNoZWNrXCIpO1xyXG4gICAgICB2YXJpYXRpb25zLmFwcGVuZCh0ZW1wKTtcclxuICAgICAgaWYgKGtleXNbaV0gPT09IFwidGVtcG9cIikge1xyXG4gICAgICAgIHRlbXAuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wb1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICB0ZW1wb1dyYXAuaWQgPSBcInRlbXBvVmFyaWF0aW9uV3JhcFwiO1xyXG4gICAgICAgICAgICBjb25zdCBlY2NlbnRyaWMgPSB1dGlscy5jcmVhdGVJbnB1dChcclxuICAgICAgICAgICAgICBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICAgIFwiZWNjZW50cmljXCIsXHJcbiAgICAgICAgICAgICAgXCJlY2NlbnRyaWNcIixcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgY29uY2VudHJpYyA9IHV0aWxzLmNyZWF0ZUlucHV0KFxyXG4gICAgICAgICAgICAgIFwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgXCJjb25jZW50cmljXCIsXHJcbiAgICAgICAgICAgICAgXCJjb25jZW50cmljXCIsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRlbXBvV3JhcC5hcHBlbmQoZWNjZW50cmljLCBjb25jZW50cmljKTtcclxuICAgICAgICAgICAgdmFyaWF0aW9ucy5hcHBlbmQodGVtcG9XcmFwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgdGVtcG9XcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wb1ZhcmlhdGlvbldyYXBcIik7XHJcbiAgICAgICAgICAgIHRlbXBvV3JhcC5yZW1vdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhlcmNpc2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gIHZhbHVlID0gdXRpbHMuZ2V0TW92ZW1lbnRJbnB1dCgpO1xyXG4gIHZhbHVlQ2FtZWxDYXNlID0gdXRpbHMudG9DYW1lbENhc2UodmFsdWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgLy8gY29uc29sZS5sb2codmFsdWVDYW1lbENhc2UpO1xyXG4gIHZhcmlhdGlvbnMuaW5uZXJIVE1MID0gXCJcIjtcclxuICBpZiAoZXhlcmNpc2VMaXN0T2JqW3ZhbHVlQ2FtZWxDYXNlXSkge1xyXG4gICAgY29uc29sZS5sb2coXCJzdWNlc3NcIik7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZXhlcmNpc2VMaXN0T2JqW3ZhbHVlQ2FtZWxDYXNlXS52YXJpYXRpb24pO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGlmIChleGVyY2lzZUxpc3RPYmpbdmFsdWVDYW1lbENhc2VdLnZhcmlhdGlvbltrZXlzW2ldXSkge1xyXG4gICAgICAgIGNvbnN0IHRlbXAgPSB1dGlscy5jcmVhdGVJbnB1dChcImNoZWNrYm94XCIsIGtleXNbaV0sIFwiVmFyaWF0aW9uQ2hlY2tcIik7XHJcbiAgICAgICAgdmFyaWF0aW9ucy5hcHBlbmQodGVtcCk7XHJcbiAgICAgICAgaWYgKGtleXNbaV0gPT09IFwidGVtcG9cIikge1xyXG4gICAgICAgICAgdGVtcC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICBjb25zdCB0ZW1wb1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgIHRlbXBvV3JhcC5pZCA9IFwidGVtcG9WYXJpYXRpb25XcmFwXCI7XHJcbiAgICAgICAgICAgICAgY29uc3QgZWNjZW50cmljID0gdXRpbHMuY3JlYXRlSW5wdXQoXHJcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJlY2NlbnRyaWNcIixcclxuICAgICAgICAgICAgICAgIFwiZWNjZW50cmljXCIsXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBjb25zdCBjb25jZW50cmljID0gdXRpbHMuY3JlYXRlSW5wdXQoXHJcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb25jZW50cmljXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbmNlbnRyaWNcIixcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHRlbXBvV3JhcC5hcHBlbmQoZWNjZW50cmljLCBjb25jZW50cmljKTtcclxuICAgICAgICAgICAgICB2YXJpYXRpb25zLmFwcGVuZCh0ZW1wb1dyYXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICBjb25zdCB0ZW1wb1dyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBvVmFyaWF0aW9uV3JhcFwiKTtcclxuICAgICAgICAgICAgICB0ZW1wb1dyYXAucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMobGlzdFt2YWx1ZV0udmFyaWF0aW9uKS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhsaXN0W3ZhbHVlXS52YXJpYXRpb24pW2ldKTtcclxuICAgIC8vIH1cclxuICB9XHJcbn0pO1xyXG5cclxubmV3VmFyaWF0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgbmV3VmFyaWF0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1ZhcmlhdGlvbklucHV0XCIpO1xyXG4gIGNvbnN0IG5ld1ZhcmlhdGlvblZhbHVlID0gbmV3VmFyaWF0aW9uSW5wdXQudmFsdWU7XHJcblxyXG4gIGV4ZXJjaXNlTGlzdE9ialt2YWx1ZUNhbWVsQ2FzZV0udmFyaWF0aW9uW25ld1ZhcmlhdGlvblZhbHVlXSA9IHRydWU7XHJcbiAgY29uc29sZS5sb2coZXhlcmNpc2VMaXN0T2JqW3ZhbHVlQ2FtZWxDYXNlXSk7XHJcblxyXG4gIHRlc3QgPSB1dGlscy5nZW5lcmF0ZU1vdmVtZW50T2JqKCk7XHJcbn0pO1xyXG5cclxuc3VibWl0RXhlcmNpc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAvLyBjb25zdCB2YWx1ZSA9IHV0aWxzLmdldE1vdmVtZW50SW5wdXQoKTtcclxuICAvLyBjb25zb2xlLmxvZyh1dGlscy5nZXRJbnB1dFZhbHVlKFwicnBlXCIpKTtcclxuXHJcbiAgLy8gZG9uJ3QgYWRkIGVtcHR5IGVudHJ5IHRvIGV4ZXJjaXNlIGxpc3Qgb2JqZWN0XHJcbiAgaWYgKHZhbHVlID09PSBcIlwiKSByZXR1cm47XHJcblxyXG4gIC8vIGNvbnN0IGV4ZXJjaXNlT3B0aW9ucyA9IGV4ZXJjaXNlTGlzdEVsZW1lbnQub3B0aW9ucztcclxuICAvLyBjb25zdCB2YWx1ZUNhbWVsQ2FzZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKHZhbHVlLnRvTG93ZXJDYXNlKCkpO1xyXG5cclxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZXhlcmNpc2VMaXN0T2JqKTtcclxuICAvLyBjb25zb2xlLmxvZyhrZXlzKTtcclxuXHJcbiAgLy8gY2hlY2tzIGN1cnJlbnQgbGlzdCBvZiBtb3ZlbWVudHM7IGFkZHMgdW5pcXVlIG1vdmVtZW50cyB0byBleGVyY2lzZSBsaXN0XHJcbiAgbGV0IGlzQ29udGFpbmVkID0gZmFsc2U7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBtb3ZlbWVudCA9IGV4ZXJjaXNlTGlzdE9ialt2YWx1ZUNhbWVsQ2FzZV07XHJcbiAgICBpZiAobW92ZW1lbnQpIHtcclxuICAgICAgaXNDb250YWluZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoIWlzQ29udGFpbmVkKSB7XHJcbiAgICBleGVyY2lzZUxpc3RPYmpbdmFsdWVDYW1lbENhc2VdID0geyB2YXJpYXRpb246IHsgbm9uZTogdHJ1ZSB9IH07XHJcbiAgICBjb25zb2xlLmxvZyhleGVyY2lzZUxpc3RPYmopO1xyXG4gIH1cclxuICAvL1xyXG5cclxuICB3b3Jrb3V0QXJyYXkucHVzaCh1dGlscy5nZW5lcmF0ZVNldE9iaih0ZXN0KSk7XHJcbiAgY29uc29sZS5sb2cod29ya291dEFycmF5KTtcclxuXHJcbiAgdXRpbHMuaW5jcmVtZW50U2V0TnVtYmVyKCk7XHJcblxyXG4gIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgd29ya291dEFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyh3b3Jrb3V0QXJyYXlbaV0pO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29uc3QgdGVzdE9iaiA9IHV0aWxzLmdlbmVyYXRlU2V0T2JqKHV0aWxzLmdlbmVyYXRlTW92ZW1lbnRPYmooKSk7XHJcbiAgLy8gY29uc3Qgc3RyaW5naWZ5ID0gSlNPTi5zdHJpbmdpZnkodGVzdE9iaiwgbnVsbCwgMik7XHJcbiAgLy8gY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudFdvcmtvdXREaXNwbGF5XCIpO1xyXG4gIC8vIGRpc3BsYXkuaW5uZXJIVE1MID0gYDxwcmU+JHtzdHJpbmdpZnl9PC9wcmU+YDtcclxuICAvLyBjb25zb2xlLmxvZyhzdHJpbmdpZnkpO1xyXG59KTtcclxuXHJcbi8vIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbi8vICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcztcclxuXHJcbi8vICAgY29uc3QgbmV3RXhlcmNpc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4vLyAgIG5ld0V4ZXJjaXNlLnZhbHVlID0gdmFsdWU7XHJcbi8vICAgZXhlcmNpc2VMaXN0RWxlbWVudC5hcHBlbmQobmV3RXhlcmNpc2UpO1xyXG4vLyAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuLy8gfSk7XHJcblxyXG5jb25zdCB3b3Jrb3V0RGF0YSA9IHt9O1xyXG53b3Jrb3V0RGF0YS5kYXkgPSB7XHJcbiAgZGF0ZTogbmV3IERhdGUoMjAyMiwgMG82LCAyMCwgMiwgNDUsIDApLFxyXG4gIHdvcmtvdXROdW1iZXI6IDEsXHJcbiAgZXhlcmNpc2VzOiB7XHJcbiAgICBleGNlcmNpc2UxOiB7XHJcbiAgICAgIG5hbWU6IFwic3F1YXRcIixcclxuICAgICAgc2V0MToge1xyXG4gICAgICAgIHdlaWdodDogMjI1LFxyXG4gICAgICAgIHJlcHM6IDUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNldDI6IHtcclxuICAgICAgICB3ZWlnaHQ6IDE4NSxcclxuICAgICAgICByZXBzOiA4LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGV4Y2VyY2lzZTI6IHtcclxuICAgICAgbmFtZTogXCJiZW5jaFwiLFxyXG4gICAgICAxNTU6IDEwLFxyXG4gICAgICAxNDU6IDE1LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4vLyBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyh3b3Jrb3V0RGF0YS5kYXkuZXhlcmNpc2VzLmV4Y2VyY2lzZTEpWzBdKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9