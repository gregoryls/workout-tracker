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
/* harmony export */   displayWorkoutInProgress: () => (/* binding */ displayWorkoutInProgress),
/* harmony export */   fillDatalist: () => (/* binding */ fillDatalist),
/* harmony export */   generateMovementObj: () => (/* binding */ generateMovementObj),
/* harmony export */   generateWorkoutObj: () => (/* binding */ generateWorkoutObj),
/* harmony export */   getDateTime: () => (/* binding */ getDateTime),
/* harmony export */   getInputValue: () => (/* binding */ getInputValue),
/* harmony export */   getMovementInput: () => (/* binding */ getMovementInput),
/* harmony export */   getRepsInput: () => (/* binding */ getRepsInput),
/* harmony export */   getRpeInput: () => (/* binding */ getRpeInput),
/* harmony export */   getSetInput: () => (/* binding */ getSetInput),
/* harmony export */   getTempoValues: () => (/* binding */ getTempoValues),
/* harmony export */   getVariationInput: () => (/* binding */ getVariationInput),
/* harmony export */   getWeightInput: () => (/* binding */ getWeightInput),
/* harmony export */   removeCamelCase: () => (/* binding */ removeCamelCase),
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

function getSetInput() {
  const input = document.getElementById("setNumber");
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

function generateMovementObj() {
  const movement = getMovementInput();
  const set = getSetInput();
  const weight = getWeightInput();
  const reps = getRepsInput();
  const rpe = getRpeInput();
  const variationInput = getVariationInput();

  const obj = {
    [movement]: {
      [`set${set}`]: {
        variations: {},
        weight,
        reps,
        rpe,
      },
    },
  };

  if (variationInput.length < 1) {
    obj[movement][`set${set}`].variations.none = true;
  }
  for (let i = 0; i < variationInput.length; i += 1) {
    if (variationInput.length < 1) console.log("none");
    obj[movement][`set${set}`].variations[variationInput[i]] = true;
  }
  return obj;
}

// accepts an array of movement objects as a parameter
function generateWorkoutObj(movements) {
  const obj = {};
  obj.date = new Date();

  for (let i = 0; i < movements.length; i += 1) {
    const movement = movements[i];
    obj[`exercise${i + 1}`] = movement;
  }
  console.log(obj);
}

function displayWorkoutInProgress(workout) {}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx5QkFBeUIsY0FBYztBQUN2Qyx1QkFBdUIsT0FBTyxRQUFRLEVBQUUsVUFBVSxHQUFHO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxJQUFJO0FBQ2pCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixJQUFJO0FBQzVCO0FBQ0Esa0JBQWtCLDJCQUEyQjtBQUM3QztBQUNBLHdCQUF3QixJQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQSxtQkFBbUIsTUFBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyLy4vc3JjL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIHRvQ2FtZWxDYXNlKHN0cmluZykge1xyXG4gIC8vIGFycm93IGZ1bmN0aW9uIHVzZXMgdGhyb3dhd2F5IHZhcmlhYmxlIGZvciB0aGUgcmVnZXggbWF0Y2gsXHJcbiAgLy8gY2FwdHVyZSBncm91cCAwLCBhcyBwZXIgcmVwbGFjZSgpIGZvcm1hdFxyXG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy1fXFxzXSguKS9nLCAoXywgY2hhcikgPT4gY2hhci50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNhbWVsQ2FzZShzdHJpbmcpIHtcclxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIFwiJDEgJDJcIikudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ0dWVzKSB7XHJcbiAgT2JqZWN0LmtleXMoYXR0cmlidHVlcykuZm9yRWFjaCgoa2V5KSA9PlxyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ0dWVzW2tleV0pLFxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnB1dChpbnB1dFR5cGUsIGlucHV0SUQsIHdyYXBwZXJJRCkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIHNldEF0dHJpYnV0ZXMoaW5wdXQsIHtcclxuICAgIHR5cGU6IGlucHV0VHlwZSxcclxuICAgIG5hbWU6IGlucHV0SUQsXHJcbiAgICBpZDogaW5wdXRJRCxcclxuICAgIHZhbHVlOiBpbnB1dElELFxyXG4gIH0pO1xyXG4gIHNldEF0dHJpYnV0ZXMobGFiZWwsIHsgZm9yOiBpbnB1dElEIH0pO1xyXG4gIHNldEF0dHJpYnV0ZXMoZGl2LCB7IGlkOiBgJHtpbnB1dElEfSR7d3JhcHBlcklEfWAgfSk7XHJcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBpbnB1dElEO1xyXG4gIGRpdi5hcHBlbmQobGFiZWwsIGlucHV0KTtcclxuXHJcbiAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxEYXRhbGlzdChsaXN0SUQsIG9iaikge1xyXG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaXN0SUQpO1xyXG5cclxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gcmVtb3ZlQ2FtZWxDYXNlKGtleXNbaV0pO1xyXG4gICAgbGlzdC5hcHBlbmQob3B0aW9uKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNb3ZlbWVudElucHV0KCkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGVyY2lzZUlucHV0XCIpO1xyXG4gIHJldHVybiBpbnB1dC52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldElucHV0KCkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXROdW1iZXJcIik7XHJcbiAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWlnaHRJbnB1dCgpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VpZ2h0XCIpO1xyXG4gIHJldHVybiBpbnB1dC52YWx1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVwc0lucHV0KCkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXBzXCIpO1xyXG4gIHJldHVybiBpbnB1dC52YWx1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UnBlSW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJwZVwiKTtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldElucHV0VmFsdWUoaW5wdXRJRCkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJRCk7XHJcbiAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZW1wb1ZhbHVlcygpIHtcclxuICBjb25zdCBlY2NlbnRyaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVjY2VudHJpY1wiKTtcclxuICBjb25zdCBjb25jZW50cmljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25jZW50cmljXCIpO1xyXG4gIHJldHVybiBbZWNjZW50cmljLnZhbHVlLCBjb25jZW50cmljLnZhbHVlXTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZVRpbWUoKSB7XHJcbiAgY29uc3QgZGF0ZXRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbnB1dFwiKTtcclxuICByZXR1cm4gZGF0ZXRpbWUudmFsdWVBc0RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYXJpYXRpb25JbnB1dCgpIHtcclxuICBjb25zdCB2YXJpYXRpb25JbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhcmlhdGlvbklucHV0c1wiKTtcclxuICBjb25zdCB2YXJpYXRpb25zID0gdmFyaWF0aW9uSW5wdXRzLmNoaWxkTm9kZXM7XHJcbiAgY29uc3QgeCA9IFtdO1xyXG5cclxuICB2YXJpYXRpb25zLmZvckVhY2goKHZhcmlhbnQpID0+IHtcclxuICAgIGlmICh2YXJpYW50LmNoaWxkcmVuWzFdLmNoZWNrZWQpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2codmFyaWFudC5jaGlsZHJlblsxXS52YWx1ZSk7XHJcbiAgICAgIHgucHVzaCh2YXJpYW50LmNoaWxkcmVuWzFdLnZhbHVlKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coeCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU1vdmVtZW50T2JqKCkge1xyXG4gIGNvbnN0IG1vdmVtZW50ID0gZ2V0TW92ZW1lbnRJbnB1dCgpO1xyXG4gIGNvbnN0IHNldCA9IGdldFNldElucHV0KCk7XHJcbiAgY29uc3Qgd2VpZ2h0ID0gZ2V0V2VpZ2h0SW5wdXQoKTtcclxuICBjb25zdCByZXBzID0gZ2V0UmVwc0lucHV0KCk7XHJcbiAgY29uc3QgcnBlID0gZ2V0UnBlSW5wdXQoKTtcclxuICBjb25zdCB2YXJpYXRpb25JbnB1dCA9IGdldFZhcmlhdGlvbklucHV0KCk7XHJcblxyXG4gIGNvbnN0IG9iaiA9IHtcclxuICAgIFttb3ZlbWVudF06IHtcclxuICAgICAgW2BzZXQke3NldH1gXToge1xyXG4gICAgICAgIHZhcmlhdGlvbnM6IHt9LFxyXG4gICAgICAgIHdlaWdodCxcclxuICAgICAgICByZXBzLFxyXG4gICAgICAgIHJwZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgaWYgKHZhcmlhdGlvbklucHV0Lmxlbmd0aCA8IDEpIHtcclxuICAgIG9ialttb3ZlbWVudF1bYHNldCR7c2V0fWBdLnZhcmlhdGlvbnMubm9uZSA9IHRydWU7XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmFyaWF0aW9uSW5wdXQubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGlmICh2YXJpYXRpb25JbnB1dC5sZW5ndGggPCAxKSBjb25zb2xlLmxvZyhcIm5vbmVcIik7XHJcbiAgICBvYmpbbW92ZW1lbnRdW2BzZXQke3NldH1gXS52YXJpYXRpb25zW3ZhcmlhdGlvbklucHV0W2ldXSA9IHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8vIGFjY2VwdHMgYW4gYXJyYXkgb2YgbW92ZW1lbnQgb2JqZWN0cyBhcyBhIHBhcmFtZXRlclxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVXb3Jrb3V0T2JqKG1vdmVtZW50cykge1xyXG4gIGNvbnN0IG9iaiA9IHt9O1xyXG4gIG9iai5kYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3ZlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IG1vdmVtZW50ID0gbW92ZW1lbnRzW2ldO1xyXG4gICAgb2JqW2BleGVyY2lzZSR7aSArIDF9YF0gPSBtb3ZlbWVudDtcclxuICB9XHJcbiAgY29uc29sZS5sb2cob2JqKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlXb3Jrb3V0SW5Qcm9ncmVzcyh3b3Jrb3V0KSB7fVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=