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
/* harmony export */   fillDatalist: () => (/* binding */ fillDatalist),
/* harmony export */   generateMovementObj: () => (/* binding */ generateMovementObj),
/* harmony export */   getInputValue: () => (/* binding */ getInputValue),
/* harmony export */   getMovementInput: () => (/* binding */ getMovementInput),
/* harmony export */   getRepsInput: () => (/* binding */ getRepsInput),
/* harmony export */   getRpeInput: () => (/* binding */ getRpeInput),
/* harmony export */   getSetInput: () => (/* binding */ getSetInput),
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

function getVariationInput() {
  const variationInputs = document.getElementById("variationInputs");
  const variations = variationInputs.childNodes;

  // variations.forEach()

  console.log(variations);
}

function generateMovementObj() {
  const movement = getMovementInput();
  const set = getSetInput();
  const weight = getWeightInput();
  const reps = getRepsInput();
  const rpe = getRpeInput();

  const obj = {
    [movement]: {
      [`set${set}`]: {
        weight,
        reps,
        rpe,
      },
    },
  };
  console.log(obj);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHlCQUF5QixjQUFjO0FBQ3ZDLHVCQUF1QixPQUFPLFFBQVEsRUFBRSxVQUFVLEdBQUc7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsSUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci8uL3NyYy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBmdW5jdGlvbiB0b0NhbWVsQ2FzZShzdHJpbmcpIHtcclxuICAvLyBhcnJvdyBmdW5jdGlvbiB1c2VzIHRocm93YXdheSB2YXJpYWJsZSBmb3IgdGhlIHJlZ2V4IG1hdGNoLFxyXG4gIC8vIGNhcHR1cmUgZ3JvdXAgMCwgYXMgcGVyIHJlcGxhY2UoKSBmb3JtYXRcclxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1stX1xcc10oLikvZywgKF8sIGNoYXIpID0+IGNoYXIudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDYW1lbENhc2Uoc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxICQyXCIpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidHVlcykge1xyXG4gIE9iamVjdC5rZXlzKGF0dHJpYnR1ZXMpLmZvckVhY2goKGtleSkgPT5cclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidHVlc1trZXldKSxcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5wdXQoaW5wdXRUeXBlLCBpbnB1dElELCB3cmFwcGVySUQpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBzZXRBdHRyaWJ1dGVzKGlucHV0LCB7XHJcbiAgICB0eXBlOiBpbnB1dFR5cGUsXHJcbiAgICBuYW1lOiBpbnB1dElELFxyXG4gICAgaWQ6IGlucHV0SUQsXHJcbiAgICB2YWx1ZTogaW5wdXRJRCxcclxuICB9KTtcclxuICBzZXRBdHRyaWJ1dGVzKGxhYmVsLCB7IGZvcjogaW5wdXRJRCB9KTtcclxuICBzZXRBdHRyaWJ1dGVzKGRpdiwgeyBpZDogYCR7aW5wdXRJRH0ke3dyYXBwZXJJRH1gIH0pO1xyXG4gIGxhYmVsLnRleHRDb250ZW50ID0gaW5wdXRJRDtcclxuICBkaXYuYXBwZW5kKGxhYmVsLCBpbnB1dCk7XHJcblxyXG4gIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsRGF0YWxpc3QobGlzdElELCBvYmopIHtcclxuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdElEKTtcclxuXHJcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvbi52YWx1ZSA9IHJlbW92ZUNhbWVsQ2FzZShrZXlzW2ldKTtcclxuICAgIGxpc3QuYXBwZW5kKG9wdGlvbik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW92ZW1lbnRJbnB1dCgpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhlcmNpc2VJbnB1dFwiKTtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRJbnB1dCgpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0TnVtYmVyXCIpO1xyXG4gIHJldHVybiBpbnB1dC52YWx1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VpZ2h0SW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlaWdodFwiKTtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlcHNJbnB1dCgpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVwc1wiKTtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJwZUlucHV0KCkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJycGVcIik7XHJcbiAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKGlucHV0SUQpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SUQpO1xyXG4gIHJldHVybiBpbnB1dC52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhcmlhdGlvbklucHV0KCkge1xyXG4gIGNvbnN0IHZhcmlhdGlvbklucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFyaWF0aW9uSW5wdXRzXCIpO1xyXG4gIGNvbnN0IHZhcmlhdGlvbnMgPSB2YXJpYXRpb25JbnB1dHMuY2hpbGROb2RlcztcclxuXHJcbiAgLy8gdmFyaWF0aW9ucy5mb3JFYWNoKClcclxuXHJcbiAgY29uc29sZS5sb2codmFyaWF0aW9ucyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU1vdmVtZW50T2JqKCkge1xyXG4gIGNvbnN0IG1vdmVtZW50ID0gZ2V0TW92ZW1lbnRJbnB1dCgpO1xyXG4gIGNvbnN0IHNldCA9IGdldFNldElucHV0KCk7XHJcbiAgY29uc3Qgd2VpZ2h0ID0gZ2V0V2VpZ2h0SW5wdXQoKTtcclxuICBjb25zdCByZXBzID0gZ2V0UmVwc0lucHV0KCk7XHJcbiAgY29uc3QgcnBlID0gZ2V0UnBlSW5wdXQoKTtcclxuXHJcbiAgY29uc3Qgb2JqID0ge1xyXG4gICAgW21vdmVtZW50XToge1xyXG4gICAgICBbYHNldCR7c2V0fWBdOiB7XHJcbiAgICAgICAgd2VpZ2h0LFxyXG4gICAgICAgIHJlcHMsXHJcbiAgICAgICAgcnBlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKG9iaik7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9