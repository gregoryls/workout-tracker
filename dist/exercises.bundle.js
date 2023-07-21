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
/*!**************************!*\
  !*** ./src/exercises.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   exerciseList: () => (/* binding */ exerciseList)
/* harmony export */ });
function exerciseList() {
  const list = {
    squat: {
      variation: {
        none: true,
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
  return list;
}

const sampleWorkout = {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sampleWorkout);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlcmNpc2VzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci8uL3NyYy9leGVyY2lzZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZnVuY3Rpb24gZXhlcmNpc2VMaXN0KCkge1xyXG4gIGNvbnN0IGxpc3QgPSB7XHJcbiAgICBzcXVhdDoge1xyXG4gICAgICB2YXJpYXRpb246IHtcclxuICAgICAgICBub25lOiB0cnVlLFxyXG4gICAgICAgIHBhdXNlOiB0cnVlLFxyXG4gICAgICAgIHRlbXBvOiB7XHJcbiAgICAgICAgICBjb25jZW50cmljOiAxLFxyXG4gICAgICAgICAgZWNjZW50cmljOiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYmVuY2hQcmVzczoge1xyXG4gICAgICB2YXJpYXRpb246IHtcclxuICAgICAgICBub25lOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHJldHVybiBsaXN0O1xyXG59XHJcblxyXG5jb25zdCBzYW1wbGVXb3Jrb3V0ID0ge1xyXG4gIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgZXhlcmNpc2UxOiB7XHJcbiAgICBzcXVhdDoge1xyXG4gICAgICB2YXJpYXRpb246IFwicGF1c2VcIixcclxuICAgICAgc2V0MToge1xyXG4gICAgICAgIHdlaWdodDogMTM1LFxyXG4gICAgICAgIHJlcHM6IDUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNldDI6IHtcclxuICAgICAgICB3ZWlnaHQ6IDEzNSxcclxuICAgICAgICByZXBzOiAxMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBleGVyY2lzZTI6IHtcclxuICAgIGJlbmNoX3ByZXNzOiB7XHJcbiAgICAgIHZhcmlhdGlvbjogXCJub25lXCIsXHJcbiAgICAgIHNldDE6IHtcclxuICAgICAgICB3ZWlnaHQ6IDEzNSxcclxuICAgICAgICByZXBzOiA1LFxyXG4gICAgICB9LFxyXG4gICAgICBzZXQyOiB7XHJcbiAgICAgICAgd2VpZ2h0OiAxMzUsXHJcbiAgICAgICAgcmVwczogMTAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzYW1wbGVXb3Jrb3V0O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=