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
/* harmony export */   getMovementInput: () => (/* binding */ getMovementInput),
/* harmony export */   getRepsInput: () => (/* binding */ getRepsInput),
/* harmony export */   getRpeInput: () => (/* binding */ getRpeInput),
/* harmony export */   getSetNumber: () => (/* binding */ getSetNumber),
/* harmony export */   getStartTime: () => (/* binding */ getStartTime),
/* harmony export */   getTempoValues: () => (/* binding */ getTempoValues),
/* harmony export */   getVariationInput: () => (/* binding */ getVariationInput),
/* harmony export */   getWeightInput: () => (/* binding */ getWeightInput),
/* harmony export */   getWeightUnit: () => (/* binding */ getWeightUnit),
/* harmony export */   incrementSetNumber: () => (/* binding */ incrementSetNumber),
/* harmony export */   removeCamelCase: () => (/* binding */ removeCamelCase),
/* harmony export */   resetSetNumber: () => (/* binding */ resetSetNumber),
/* harmony export */   setWorkoutDate: () => (/* binding */ setWorkoutDate),
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

function setWorkoutDate(obj) {
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
  const rpe = getRpeInput();
  const variationInput = getVariationInput();

  const movementObj = obj;
  const setObj = {
    variations: {},
    weight,
    weightUnit,
    reps,
    rpe,
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

  const obj = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx5QkFBeUIsY0FBYztBQUN2Qyx1QkFBdUIsT0FBTyxRQUFRLEVBQUUsVUFBVSxHQUFHO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSwyQkFBMkIsVUFBVSxHQUFHLGVBQWU7QUFDdkQseUJBQXlCLFVBQVUsR0FBRyxlQUFlO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLElBQUk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQSxtQkFBbUIsTUFBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvLi9zcmMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZnVuY3Rpb24gdG9DYW1lbENhc2Uoc3RyaW5nKSB7XHJcbiAgLy8gYXJyb3cgZnVuY3Rpb24gdXNlcyB0aHJvd2F3YXkgdmFyaWFibGUgZm9yIHRoZSByZWdleCBtYXRjaCxcclxuICAvLyBjYXB0dXJlIGdyb3VwIDAsIGFzIHBlciByZXBsYWNlKCkgZm9ybWF0XHJcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bLV9cXHNdKC4pL2csIChfLCBjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2FtZWxDYXNlKHN0cmluZykge1xyXG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMSAkMlwiKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnR1ZXMpIHtcclxuICBPYmplY3Qua2V5cyhhdHRyaWJ0dWVzKS5mb3JFYWNoKChrZXkpID0+XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnR1ZXNba2V5XSksXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUlucHV0KGlucHV0VHlwZSwgaW5wdXRJRCwgd3JhcHBlcklEKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgc2V0QXR0cmlidXRlcyhpbnB1dCwge1xyXG4gICAgdHlwZTogaW5wdXRUeXBlLFxyXG4gICAgbmFtZTogaW5wdXRJRCxcclxuICAgIGlkOiBpbnB1dElELFxyXG4gICAgdmFsdWU6IGlucHV0SUQsXHJcbiAgfSk7XHJcbiAgc2V0QXR0cmlidXRlcyhsYWJlbCwgeyBmb3I6IGlucHV0SUQgfSk7XHJcbiAgc2V0QXR0cmlidXRlcyhkaXYsIHsgaWQ6IGAke2lucHV0SUR9JHt3cmFwcGVySUR9YCB9KTtcclxuICBsYWJlbC50ZXh0Q29udGVudCA9IGlucHV0SUQ7XHJcbiAgZGl2LmFwcGVuZChsYWJlbCwgaW5wdXQpO1xyXG5cclxuICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsbERhdGFsaXN0KGxpc3RJRCwgb2JqKSB7XHJcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3RJRCk7XHJcblxyXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBvcHRpb24udmFsdWUgPSByZW1vdmVDYW1lbENhc2Uoa2V5c1tpXSk7XHJcbiAgICBsaXN0LmFwcGVuZChvcHRpb24pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vdmVtZW50SW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4ZXJjaXNlSW5wdXRcIik7XHJcbiAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VpZ2h0SW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlaWdodFwiKTtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlaWdodFVuaXQoKSB7XHJcbiAgY29uc3QgY2hlY2tlZFJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICdpbnB1dFtuYW1lPVwicG91bmRLaWxvXCJdOmNoZWNrZWQnLFxyXG4gICk7XHJcbiAgcmV0dXJuIGNoZWNrZWRSYWRpby52YWx1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVwc0lucHV0KCkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXBzXCIpO1xyXG4gIHJldHVybiBpbnB1dC52YWx1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UnBlSW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJwZVwiKTtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldElucHV0VmFsdWUoaW5wdXRJRCkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJRCk7XHJcbiAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZW1wb1ZhbHVlcygpIHtcclxuICBjb25zdCBlY2NlbnRyaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVjY2VudHJpY1wiKTtcclxuICBjb25zdCBjb25jZW50cmljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25jZW50cmljXCIpO1xyXG4gIHJldHVybiBbZWNjZW50cmljLnZhbHVlLCBjb25jZW50cmljLnZhbHVlXTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcclxuICBjb25zdCBkYXRldGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUlucHV0XCIpO1xyXG4gIHJldHVybiBkYXRldGltZS52YWx1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhcnRUaW1lKCkge1xyXG4gIGNvbnN0IHN0YXJ0VGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRUaW1lXCIpO1xyXG4gIHJldHVybiBzdGFydFRpbWUudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbmRUaW1lKCkge1xyXG4gIGNvbnN0IGVuZFRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZFRpbWVcIik7XHJcbiAgcmV0dXJuIGVuZFRpbWUudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYXJpYXRpb25JbnB1dCgpIHtcclxuICBjb25zdCB2YXJpYXRpb25JbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhcmlhdGlvbklucHV0c1wiKTtcclxuICBjb25zdCB2YXJpYXRpb25zID0gdmFyaWF0aW9uSW5wdXRzLmNoaWxkTm9kZXM7XHJcbiAgLy8gcmVuYW1lIHhcclxuICBjb25zdCB2YXJpYXRpb25BcnJheSA9IFtdO1xyXG5cclxuICB2YXJpYXRpb25zLmZvckVhY2goKHZhcmlhbnQpID0+IHtcclxuICAgIGlmICh2YXJpYW50LmNoaWxkcmVuWzFdLmNoZWNrZWQpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2codmFyaWFudC5jaGlsZHJlblsxXS52YWx1ZSk7XHJcbiAgICAgIHZhcmlhdGlvbkFycmF5LnB1c2godmFyaWFudC5jaGlsZHJlblsxXS52YWx1ZSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiB2YXJpYXRpb25BcnJheTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFdvcmtvdXREYXRlKG9iaikge1xyXG4gIGNvbnN0IHdvcmtvdXRIaXN0b3J5T2JqID0gb2JqO1xyXG4gIGlmICh3b3Jrb3V0SGlzdG9yeU9ialtgJHtnZXREYXRlKCl9fCR7Z2V0U3RhcnRUaW1lKCl9YF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgd29ya291dEhpc3RvcnlPYmpbYCR7Z2V0RGF0ZSgpfXwke2dldFN0YXJ0VGltZSgpfWBdID0ge307XHJcbiAgICAvLyBjb25zb2xlLmxvZyh3b3Jrb3V0SGlzdG9yeU9iaik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0V29ya291dFRpbWUob2JqKSB7XHJcbiAgY29uc3Qgd29ya291dEhpc3RvcnlPYmogPSBvYmo7XHJcbiAgd29ya291dEhpc3RvcnlPYmoudGltZSA9IHtcclxuICAgIHN0YXJ0OiBnZXRTdGFydFRpbWUoKSxcclxuICAgIGVuZDogZ2V0RW5kVGltZSgpLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXROdW1iZXIoKSB7XHJcbiAgY29uc3Qgc2V0Q291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0TnVtYmVyXCIpO1xyXG4gIGNvbnN0IHNldE51bWJlciA9IE51bWJlcihzZXRDb3VudGVyLnRleHRDb250ZW50KTtcclxuICByZXR1cm4gc2V0TnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBzZXROdW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldE51bWJlclwiKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGluY3JlbWVudFNldE51bWJlcigpIHtcclxuICBsZXQgbnVtYmVyID0gTnVtYmVyKHNldE51bWJlci50ZXh0Q29udGVudCk7XHJcbiAgbnVtYmVyICs9IDE7XHJcbiAgc2V0TnVtYmVyLnRleHRDb250ZW50ID0gbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRTZXROdW1iZXIoKSB7XHJcbiAgc2V0TnVtYmVyLnRleHRDb250ZW50ID0gMTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlU2V0T2JqKG9iaikge1xyXG4gIC8vIGRvZXMgb2JqIG5lZWQgdG8gYmUgZGVmaW5lZCBhcyBpdCBpcyBoZXJlXHJcbiAgY29uc3QgbW92ZW1lbnQgPSBnZXRNb3ZlbWVudElucHV0KCk7XHJcbiAgY29uc3Qgc2V0ID0gZ2V0U2V0TnVtYmVyKCk7XHJcbiAgY29uc3Qgd2VpZ2h0ID0gZ2V0V2VpZ2h0SW5wdXQoKTtcclxuICBjb25zdCB3ZWlnaHRVbml0ID0gZ2V0V2VpZ2h0VW5pdCgpO1xyXG4gIGNvbnN0IHJlcHMgPSBnZXRSZXBzSW5wdXQoKTtcclxuICBjb25zdCBycGUgPSBnZXRScGVJbnB1dCgpO1xyXG4gIGNvbnN0IHZhcmlhdGlvbklucHV0ID0gZ2V0VmFyaWF0aW9uSW5wdXQoKTtcclxuXHJcbiAgY29uc3QgbW92ZW1lbnRPYmogPSBvYmo7XHJcbiAgY29uc3Qgc2V0T2JqID0ge1xyXG4gICAgdmFyaWF0aW9uczoge30sXHJcbiAgICB3ZWlnaHQsXHJcbiAgICB3ZWlnaHRVbml0LFxyXG4gICAgcmVwcyxcclxuICAgIHJwZSxcclxuICB9O1xyXG5cclxuICBpZiAodmFyaWF0aW9uSW5wdXQubGVuZ3RoIDwgMSkge1xyXG4gICAgc2V0T2JqLnZhcmlhdGlvbnMubm9uZSA9IHRydWU7XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmFyaWF0aW9uSW5wdXQubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIC8vIFRPRE8gY2hlY2sgdGhpcyBpZiwgZG9lc24ndCBsb29rIG5lZWRlZFxyXG4gICAgaWYgKHZhcmlhdGlvbklucHV0Lmxlbmd0aCA8IDEpIGNvbnNvbGUubG9nKFwibm9uZVwiKTtcclxuICAgIHNldE9iai52YXJpYXRpb25zW3ZhcmlhdGlvbklucHV0W2ldXSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBtb3ZlbWVudE9ialttb3ZlbWVudF1bYHNldCR7c2V0fWBdID0gc2V0T2JqO1xyXG4gIC8vIHJldHVybiBjdXJyZW50bHkgbm90IG5lZWRlZFxyXG4gIC8vIHJldHVybiBtb3ZlbWVudE9iajtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTW92ZW1lbnRPYmooKSB7XHJcbiAgY29uc3QgbW92ZW1lbnQgPSBnZXRNb3ZlbWVudElucHV0KCk7XHJcblxyXG4gIGNvbnN0IG9iaiA9IHtcclxuICAgIFttb3ZlbWVudF06IHt9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8vIGFjY2VwdHMgYW4gYXJyYXkgb2YgbW92ZW1lbnQgb2JqZWN0cyBhcyBhIHBhcmFtZXRlclxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVXb3Jrb3V0T2JqKG1vdmVtZW50cykge1xyXG4gIGNvbnN0IG9iaiA9IHt9O1xyXG4gIG9iai5kYXRlID0gZ2V0RGF0ZSgpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdmVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgbW92ZW1lbnQgPSBtb3ZlbWVudHNbaV07XHJcbiAgICBvYmpbYGV4ZXJjaXNlJHtpICsgMX1gXSA9IG1vdmVtZW50O1xyXG4gIH1cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU9iamVjdChvYmopIHtcclxuICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50V29ya291dERpc3BsYXlcIik7XHJcbiAgY29uc3QgbW92ZW1lbnQgPSBPYmplY3Qua2V5cyhvYmopO1xyXG5cclxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgLy8gT2JqZWN0LmtleXMoKSByZXR1cm5zIGFuIGFycmF5XHJcbiAgcC50ZXh0Q29udGVudCA9IG1vdmVtZW50WzBdO1xyXG4gIGRpc3BsYXkuYXBwZW5kKHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVdvcmtvdXRJblByb2dyZXNzKHdvcmtvdXQpIHt9XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==