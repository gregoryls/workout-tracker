/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx5QkFBeUIsY0FBYztBQUN2Qyx1QkFBdUIsT0FBTyxRQUFRLEVBQUUsVUFBVSxHQUFHO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLDJCQUEyQixVQUFVLEdBQUcsZUFBZTtBQUN2RCx5QkFBeUIsVUFBVSxHQUFHLGVBQWU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsSUFBSTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBLG1CQUFtQixNQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci8uL3NyYy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBmdW5jdGlvbiB0b0NhbWVsQ2FzZShzdHJpbmcpIHtcclxuICAvLyBhcnJvdyBmdW5jdGlvbiB1c2VzIHRocm93YXdheSB2YXJpYWJsZSBmb3IgdGhlIHJlZ2V4IG1hdGNoLFxyXG4gIC8vIGNhcHR1cmUgZ3JvdXAgMCwgYXMgcGVyIHJlcGxhY2UoKSBmb3JtYXRcclxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1stX1xcc10oLikvZywgKF8sIGNoYXIpID0+IGNoYXIudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDYW1lbENhc2Uoc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxICQyXCIpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREYXRlSW5wdXRUb2RheSgpIHtcclxuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbnB1dFwiKTtcclxuXHJcbiAgLy8gU3BsaXQgYXQgJ1QnIHRvIHJlbW92ZSB0aW1lIGluZm8gYWZ0ZXIgY2FsZW5kYXIgZGF0ZTtcclxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcbiAgZGF0ZUlucHV0LnZhbHVlID0gdG9kYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcclxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSksXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUlucHV0KGlucHV0VHlwZSwgaW5wdXRJRCwgd3JhcHBlcklEKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgc2V0QXR0cmlidXRlcyhpbnB1dCwge1xyXG4gICAgdHlwZTogaW5wdXRUeXBlLFxyXG4gICAgbmFtZTogaW5wdXRJRCxcclxuICAgIGlkOiBpbnB1dElELFxyXG4gICAgdmFsdWU6IGlucHV0SUQsXHJcbiAgfSk7XHJcbiAgc2V0QXR0cmlidXRlcyhsYWJlbCwgeyBmb3I6IGlucHV0SUQgfSk7XHJcbiAgc2V0QXR0cmlidXRlcyhkaXYsIHsgaWQ6IGAke2lucHV0SUR9JHt3cmFwcGVySUR9YCB9KTtcclxuICBsYWJlbC50ZXh0Q29udGVudCA9IGlucHV0SUQ7XHJcbiAgZGl2LmFwcGVuZChsYWJlbCwgaW5wdXQpO1xyXG5cclxuICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsbERhdGFsaXN0KGxpc3RJRCwgb2JqKSB7XHJcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3RJRCk7XHJcblxyXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBvcHRpb24udmFsdWUgPSByZW1vdmVDYW1lbENhc2Uoa2V5c1tpXSk7XHJcbiAgICBsaXN0LmFwcGVuZChvcHRpb24pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vdmVtZW50SW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4ZXJjaXNlSW5wdXRcIik7XHJcbiAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVzb2N5Y2xlSW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc29jeWNsZUlucHV0XCIpO1xyXG4gIGlmIChpbnB1dC52YWx1ZSA9PT0gXCJvdGhlclwiKSB7XHJcbiAgICBjb25zdCBpbnB1dE90aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNvY3ljbGVJbnB1dE90aGVyXCIpO1xyXG4gICAgcmV0dXJuIGlucHV0T3RoZXIudmFsdWU7XHJcbiAgfVxyXG4gIHJldHVybiBpbnB1dC52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1pY3JvY3ljbGVJbnB1dCgpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWljcm9jeWNsZUlucHV0XCIpO1xyXG4gIHJldHVybiBpbnB1dC52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdvcmtvdXROYW1lSW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtvdXROYW1lSW5wdXRcIik7XHJcbiAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VpZ2h0SW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlaWdodFwiKTtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlaWdodFVuaXQoKSB7XHJcbiAgY29uc3QgY2hlY2tlZFJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICdpbnB1dFtuYW1lPVwicG91bmRLaWxvXCJdOmNoZWNrZWQnLFxyXG4gICk7XHJcbiAgcmV0dXJuIGNoZWNrZWRSYWRpby52YWx1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVwc0lucHV0KCkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXBzXCIpO1xyXG4gIHJldHVybiBpbnB1dC52YWx1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UklSSW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlJJUlwiKTtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldElucHV0VmFsdWUoaW5wdXRJRCkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJRCk7XHJcbiAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZW1wb1ZhbHVlcygpIHtcclxuICBjb25zdCBlY2NlbnRyaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVjY2VudHJpY1wiKTtcclxuICBjb25zdCBjb25jZW50cmljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25jZW50cmljXCIpO1xyXG4gIHJldHVybiBbZWNjZW50cmljLnZhbHVlLCBjb25jZW50cmljLnZhbHVlXTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcclxuICBjb25zdCBkYXRldGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUlucHV0XCIpO1xyXG4gIHJldHVybiBkYXRldGltZS52YWx1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhcnRUaW1lKCkge1xyXG4gIGNvbnN0IHN0YXJ0VGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRUaW1lXCIpO1xyXG4gIHJldHVybiBzdGFydFRpbWUudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbmRUaW1lKCkge1xyXG4gIGNvbnN0IGVuZFRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZFRpbWVcIik7XHJcbiAgcmV0dXJuIGVuZFRpbWUudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYXJpYXRpb25JbnB1dCgpIHtcclxuICBjb25zdCB2YXJpYXRpb25JbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhcmlhdGlvbklucHV0c1wiKTtcclxuICBjb25zdCB2YXJpYXRpb25zID0gdmFyaWF0aW9uSW5wdXRzLmNoaWxkTm9kZXM7XHJcbiAgLy8gcmVuYW1lIHhcclxuICBjb25zdCB2YXJpYXRpb25BcnJheSA9IFtdO1xyXG5cclxuICB2YXJpYXRpb25zLmZvckVhY2goKHZhcmlhbnQpID0+IHtcclxuICAgIGlmICh2YXJpYW50LmNoaWxkcmVuWzFdLmNoZWNrZWQpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2codmFyaWFudC5jaGlsZHJlblsxXS52YWx1ZSk7XHJcbiAgICAgIHZhcmlhdGlvbkFycmF5LnB1c2godmFyaWFudC5jaGlsZHJlblsxXS52YWx1ZSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiB2YXJpYXRpb25BcnJheTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFdvcmtvdXREYXRlU3RhcnQob2JqKSB7XHJcbiAgY29uc3Qgd29ya291dEhpc3RvcnlPYmogPSBvYmo7XHJcbiAgaWYgKHdvcmtvdXRIaXN0b3J5T2JqW2Ake2dldERhdGUoKX18JHtnZXRTdGFydFRpbWUoKX1gXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB3b3Jrb3V0SGlzdG9yeU9ialtgJHtnZXREYXRlKCl9fCR7Z2V0U3RhcnRUaW1lKCl9YF0gPSB7fTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHdvcmtvdXRIaXN0b3J5T2JqKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRXb3Jrb3V0VGltZShvYmopIHtcclxuICBjb25zdCB3b3Jrb3V0SGlzdG9yeU9iaiA9IG9iajtcclxuICB3b3Jrb3V0SGlzdG9yeU9iai50aW1lID0ge1xyXG4gICAgc3RhcnQ6IGdldFN0YXJ0VGltZSgpLFxyXG4gICAgZW5kOiBnZXRFbmRUaW1lKCksXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldE51bWJlcigpIHtcclxuICBjb25zdCBzZXRDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXROdW1iZXJcIik7XHJcbiAgY29uc3Qgc2V0TnVtYmVyID0gTnVtYmVyKHNldENvdW50ZXIudGV4dENvbnRlbnQpO1xyXG4gIHJldHVybiBzZXROdW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IHNldE51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0TnVtYmVyXCIpO1xyXG5leHBvcnQgZnVuY3Rpb24gaW5jcmVtZW50U2V0TnVtYmVyKCkge1xyXG4gIGxldCBudW1iZXIgPSBOdW1iZXIoc2V0TnVtYmVyLnRleHRDb250ZW50KTtcclxuICBudW1iZXIgKz0gMTtcclxuICBzZXROdW1iZXIudGV4dENvbnRlbnQgPSBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldFNldE51bWJlcigpIHtcclxuICBzZXROdW1iZXIudGV4dENvbnRlbnQgPSAxO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVTZXRPYmoob2JqKSB7XHJcbiAgLy8gZG9lcyBvYmogbmVlZCB0byBiZSBkZWZpbmVkIGFzIGl0IGlzIGhlcmVcclxuICBjb25zdCBtb3ZlbWVudCA9IGdldE1vdmVtZW50SW5wdXQoKTtcclxuICBjb25zdCBzZXQgPSBnZXRTZXROdW1iZXIoKTtcclxuICBjb25zdCB3ZWlnaHQgPSBnZXRXZWlnaHRJbnB1dCgpO1xyXG4gIGNvbnN0IHdlaWdodFVuaXQgPSBnZXRXZWlnaHRVbml0KCk7XHJcbiAgY29uc3QgcmVwcyA9IGdldFJlcHNJbnB1dCgpO1xyXG4gIGNvbnN0IFJJUiA9IGdldFJJUklucHV0KCk7XHJcbiAgY29uc3QgdmFyaWF0aW9uSW5wdXQgPSBnZXRWYXJpYXRpb25JbnB1dCgpO1xyXG5cclxuICBjb25zdCBtb3ZlbWVudE9iaiA9IG9iajtcclxuICBjb25zdCBzZXRPYmogPSB7XHJcbiAgICB2YXJpYXRpb25zOiB7fSxcclxuICAgIHdlaWdodCxcclxuICAgIHdlaWdodFVuaXQsXHJcbiAgICByZXBzLFxyXG4gICAgUklSLFxyXG4gIH07XHJcblxyXG4gIGlmICh2YXJpYXRpb25JbnB1dC5sZW5ndGggPCAxKSB7XHJcbiAgICBzZXRPYmoudmFyaWF0aW9ucy5ub25lID0gdHJ1ZTtcclxuICB9XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YXJpYXRpb25JbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgLy8gVE9ETyBjaGVjayB0aGlzIGlmLCBkb2Vzbid0IGxvb2sgbmVlZGVkXHJcbiAgICBpZiAodmFyaWF0aW9uSW5wdXQubGVuZ3RoIDwgMSkgY29uc29sZS5sb2coXCJub25lXCIpO1xyXG4gICAgc2V0T2JqLnZhcmlhdGlvbnNbdmFyaWF0aW9uSW5wdXRbaV1dID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG1vdmVtZW50T2JqW21vdmVtZW50XVtgc2V0JHtzZXR9YF0gPSBzZXRPYmo7XHJcbiAgLy8gcmV0dXJuIGN1cnJlbnRseSBub3QgbmVlZGVkXHJcbiAgLy8gcmV0dXJuIG1vdmVtZW50T2JqO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVNb3ZlbWVudE9iaigpIHtcclxuICBjb25zdCBtb3ZlbWVudCA9IGdldE1vdmVtZW50SW5wdXQoKTtcclxuICBjb25zdCBtZXNvY3ljbGUgPSBnZXRNZXNvY3ljbGVJbnB1dCgpO1xyXG4gIGNvbnN0IG1pY3JvY3ljbGUgPSBnZXRNaWNyb2N5Y2xlSW5wdXQoKTtcclxuICBjb25zdCB3b3Jrb3V0TmFtZSA9IGdldFdvcmtvdXROYW1lSW5wdXQoKTtcclxuXHJcbiAgY29uc3Qgb2JqID0ge1xyXG4gICAgbWVzb2N5Y2xlLFxyXG4gICAgbWljcm9jeWNsZSxcclxuICAgIHdvcmtvdXROYW1lLFxyXG4gICAgW21vdmVtZW50XToge30sXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuLy8gYWNjZXB0cyBhbiBhcnJheSBvZiBtb3ZlbWVudCBvYmplY3RzIGFzIGEgcGFyYW1ldGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVdvcmtvdXRPYmoobW92ZW1lbnRzKSB7XHJcbiAgY29uc3Qgb2JqID0ge307XHJcbiAgb2JqLmRhdGUgPSBnZXREYXRlKCk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbW92ZW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBtb3ZlbWVudCA9IG1vdmVtZW50c1tpXTtcclxuICAgIG9ialtgZXhlcmNpc2Uke2kgKyAxfWBdID0gbW92ZW1lbnQ7XHJcbiAgfVxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5T2JqZWN0KG9iaikge1xyXG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRXb3Jrb3V0RGlzcGxheVwiKTtcclxuICBjb25zdCBtb3ZlbWVudCA9IE9iamVjdC5rZXlzKG9iaik7XHJcblxyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAvLyBPYmplY3Qua2V5cygpIHJldHVybnMgYW4gYXJyYXlcclxuICBwLnRleHRDb250ZW50ID0gbW92ZW1lbnRbMF07XHJcbiAgZGlzcGxheS5hcHBlbmQocCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5V29ya291dEluUHJvZ3Jlc3Mod29ya291dCkge31cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9