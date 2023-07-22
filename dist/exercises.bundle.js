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
/* harmony export */   list: () => (/* binding */ list)
/* harmony export */ });
// export function exerciseList() {
//   const list = {
//     squat: {
//       variation: {
//         none: true,
//         pause: true,
//         tempo: {
//           concentric: 1,
//           eccentric: 2,
//         },
//       },
//     },
//     benchPress: {
//       variation: {
//         none: true,
//       },
//     },
//   };
//   return list;
// }

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sampleWorkout);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlcmNpc2VzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osVUFBVTtBQUNWLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvLi9zcmMvZXhlcmNpc2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gZXhwb3J0IGZ1bmN0aW9uIGV4ZXJjaXNlTGlzdCgpIHtcclxuLy8gICBjb25zdCBsaXN0ID0ge1xyXG4vLyAgICAgc3F1YXQ6IHtcclxuLy8gICAgICAgdmFyaWF0aW9uOiB7XHJcbi8vICAgICAgICAgbm9uZTogdHJ1ZSxcclxuLy8gICAgICAgICBwYXVzZTogdHJ1ZSxcclxuLy8gICAgICAgICB0ZW1wbzoge1xyXG4vLyAgICAgICAgICAgY29uY2VudHJpYzogMSxcclxuLy8gICAgICAgICAgIGVjY2VudHJpYzogMixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgfSxcclxuLy8gICAgIGJlbmNoUHJlc3M6IHtcclxuLy8gICAgICAgdmFyaWF0aW9uOiB7XHJcbi8vICAgICAgICAgbm9uZTogdHJ1ZSxcclxuLy8gICAgICAgfSxcclxuLy8gICAgIH0sXHJcbi8vICAgfTtcclxuLy8gICByZXR1cm4gbGlzdDtcclxuLy8gfVxyXG5cclxuY29uc3Qgc2FtcGxlV29ya291dCA9IHtcclxuICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gIGV4ZXJjaXNlMToge1xyXG4gICAgc3F1YXQ6IHtcclxuICAgICAgdmFyaWF0aW9uOiBcInBhdXNlXCIsXHJcbiAgICAgIHNldDE6IHtcclxuICAgICAgICB3ZWlnaHQ6IDEzNSxcclxuICAgICAgICByZXBzOiA1LFxyXG4gICAgICB9LFxyXG4gICAgICBzZXQyOiB7XHJcbiAgICAgICAgd2VpZ2h0OiAxMzUsXHJcbiAgICAgICAgcmVwczogMTAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXhlcmNpc2UyOiB7XHJcbiAgICBiZW5jaF9wcmVzczoge1xyXG4gICAgICB2YXJpYXRpb246IFwibm9uZVwiLFxyXG4gICAgICBzZXQxOiB7XHJcbiAgICAgICAgd2VpZ2h0OiAxMzUsXHJcbiAgICAgICAgcmVwczogNSxcclxuICAgICAgfSxcclxuICAgICAgc2V0Mjoge1xyXG4gICAgICAgIHdlaWdodDogMTM1LFxyXG4gICAgICAgIHJlcHM6IDEwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3QgPSB7XHJcbiAgc3F1YXQ6IHtcclxuICAgIHZhcmlhdGlvbjoge1xyXG4gICAgICBub25lOiB0cnVlLFxyXG4gICAgICBwYXVzZTogdHJ1ZSxcclxuICAgICAgdGVtcG86IHtcclxuICAgICAgICBjb25jZW50cmljOiAxLFxyXG4gICAgICAgIGVjY2VudHJpYzogMixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBiZW5jaFByZXNzOiB7XHJcbiAgICB2YXJpYXRpb246IHtcclxuICAgICAgbm9uZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNhbXBsZVdvcmtvdXQ7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==