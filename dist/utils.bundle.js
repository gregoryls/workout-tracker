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
  const x = [];

  variations.forEach((variant) => {
    if (variant.children[1].checked) {
      console.log(variant.children[1].value);
      x.push(variant.children[1].value);
      console.log(x);
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
  const variations = getVariationInput();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHlCQUF5QixjQUFjO0FBQ3ZDLHVCQUF1QixPQUFPLFFBQVEsRUFBRSxVQUFVLEdBQUc7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLElBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvLi9zcmMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZnVuY3Rpb24gdG9DYW1lbENhc2Uoc3RyaW5nKSB7XHJcbiAgLy8gYXJyb3cgZnVuY3Rpb24gdXNlcyB0aHJvd2F3YXkgdmFyaWFibGUgZm9yIHRoZSByZWdleCBtYXRjaCxcclxuICAvLyBjYXB0dXJlIGdyb3VwIDAsIGFzIHBlciByZXBsYWNlKCkgZm9ybWF0XHJcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bLV9cXHNdKC4pL2csIChfLCBjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2FtZWxDYXNlKHN0cmluZykge1xyXG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMSAkMlwiKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnR1ZXMpIHtcclxuICBPYmplY3Qua2V5cyhhdHRyaWJ0dWVzKS5mb3JFYWNoKChrZXkpID0+XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnR1ZXNba2V5XSksXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUlucHV0KGlucHV0VHlwZSwgaW5wdXRJRCwgd3JhcHBlcklEKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgc2V0QXR0cmlidXRlcyhpbnB1dCwge1xyXG4gICAgdHlwZTogaW5wdXRUeXBlLFxyXG4gICAgbmFtZTogaW5wdXRJRCxcclxuICAgIGlkOiBpbnB1dElELFxyXG4gICAgdmFsdWU6IGlucHV0SUQsXHJcbiAgfSk7XHJcbiAgc2V0QXR0cmlidXRlcyhsYWJlbCwgeyBmb3I6IGlucHV0SUQgfSk7XHJcbiAgc2V0QXR0cmlidXRlcyhkaXYsIHsgaWQ6IGAke2lucHV0SUR9JHt3cmFwcGVySUR9YCB9KTtcclxuICBsYWJlbC50ZXh0Q29udGVudCA9IGlucHV0SUQ7XHJcbiAgZGl2LmFwcGVuZChsYWJlbCwgaW5wdXQpO1xyXG5cclxuICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsbERhdGFsaXN0KGxpc3RJRCwgb2JqKSB7XHJcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3RJRCk7XHJcblxyXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBvcHRpb24udmFsdWUgPSByZW1vdmVDYW1lbENhc2Uoa2V5c1tpXSk7XHJcbiAgICBsaXN0LmFwcGVuZChvcHRpb24pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vdmVtZW50SW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4ZXJjaXNlSW5wdXRcIik7XHJcbiAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0SW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldE51bWJlclwiKTtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlaWdodElucHV0KCkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWlnaHRcIik7XHJcbiAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXBzSW5wdXQoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcHNcIik7XHJcbiAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRScGVJbnB1dCgpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicnBlXCIpO1xyXG4gIHJldHVybiBpbnB1dC52YWx1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShpbnB1dElEKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElEKTtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYXJpYXRpb25JbnB1dCgpIHtcclxuICBjb25zdCB2YXJpYXRpb25JbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhcmlhdGlvbklucHV0c1wiKTtcclxuICBjb25zdCB2YXJpYXRpb25zID0gdmFyaWF0aW9uSW5wdXRzLmNoaWxkTm9kZXM7XHJcbiAgY29uc3QgeCA9IFtdO1xyXG5cclxuICB2YXJpYXRpb25zLmZvckVhY2goKHZhcmlhbnQpID0+IHtcclxuICAgIGlmICh2YXJpYW50LmNoaWxkcmVuWzFdLmNoZWNrZWQpIHtcclxuICAgICAgY29uc29sZS5sb2codmFyaWFudC5jaGlsZHJlblsxXS52YWx1ZSk7XHJcbiAgICAgIHgucHVzaCh2YXJpYW50LmNoaWxkcmVuWzFdLnZhbHVlKTtcclxuICAgICAgY29uc29sZS5sb2coeCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU1vdmVtZW50T2JqKCkge1xyXG4gIGNvbnN0IG1vdmVtZW50ID0gZ2V0TW92ZW1lbnRJbnB1dCgpO1xyXG4gIGNvbnN0IHNldCA9IGdldFNldElucHV0KCk7XHJcbiAgY29uc3Qgd2VpZ2h0ID0gZ2V0V2VpZ2h0SW5wdXQoKTtcclxuICBjb25zdCByZXBzID0gZ2V0UmVwc0lucHV0KCk7XHJcbiAgY29uc3QgcnBlID0gZ2V0UnBlSW5wdXQoKTtcclxuICBjb25zdCB2YXJpYXRpb25zID0gZ2V0VmFyaWF0aW9uSW5wdXQoKTtcclxuXHJcbiAgY29uc3Qgb2JqID0ge1xyXG4gICAgW21vdmVtZW50XToge1xyXG4gICAgICBbYHNldCR7c2V0fWBdOiB7XHJcbiAgICAgICAgd2VpZ2h0LFxyXG4gICAgICAgIHJlcHMsXHJcbiAgICAgICAgcnBlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKG9iaik7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9