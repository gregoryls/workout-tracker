/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const a2022530 = {
  squat: { weight: "215", reps: ["5", "5", "5", "5", "5"] },
  ohp: { weight: "55", reps: ["16", "16", "16", "16", "16"] },
};
function testFunction() {
  if (movement.value == "squat") {
    document.getElementById("squatOptions").style.visibility = "visible";
  }
}
const movement = document.getElementById("movement");
movement.addEventListener("change", testFunction);

// big list of exercise full names, e.g. flat barbell bench, incline dumbell bench etc.
// maybe select options to narrow down a populated list of every exercise
// which is also filterable by a search field.

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
console.log(Object.keys(workoutData.day.exercises.excercise1)[0]);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxXQUFXLGdEQUFnRDtBQUMzRCxTQUFTLG9EQUFvRDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYTIwMjI1MzAgPSB7XHJcbiAgc3F1YXQ6IHsgd2VpZ2h0OiBcIjIxNVwiLCByZXBzOiBbXCI1XCIsIFwiNVwiLCBcIjVcIiwgXCI1XCIsIFwiNVwiXSB9LFxyXG4gIG9ocDogeyB3ZWlnaHQ6IFwiNTVcIiwgcmVwczogW1wiMTZcIiwgXCIxNlwiLCBcIjE2XCIsIFwiMTZcIiwgXCIxNlwiXSB9LFxyXG59O1xyXG5mdW5jdGlvbiB0ZXN0RnVuY3Rpb24oKSB7XHJcbiAgaWYgKG1vdmVtZW50LnZhbHVlID09IFwic3F1YXRcIikge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcXVhdE9wdGlvbnNcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gIH1cclxufVxyXG5jb25zdCBtb3ZlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW92ZW1lbnRcIik7XHJcbm1vdmVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGVzdEZ1bmN0aW9uKTtcclxuXHJcbi8vIGJpZyBsaXN0IG9mIGV4ZXJjaXNlIGZ1bGwgbmFtZXMsIGUuZy4gZmxhdCBiYXJiZWxsIGJlbmNoLCBpbmNsaW5lIGR1bWJlbGwgYmVuY2ggZXRjLlxyXG4vLyBtYXliZSBzZWxlY3Qgb3B0aW9ucyB0byBuYXJyb3cgZG93biBhIHBvcHVsYXRlZCBsaXN0IG9mIGV2ZXJ5IGV4ZXJjaXNlXHJcbi8vIHdoaWNoIGlzIGFsc28gZmlsdGVyYWJsZSBieSBhIHNlYXJjaCBmaWVsZC5cclxuXHJcbmNvbnN0IHdvcmtvdXREYXRhID0ge307XHJcbndvcmtvdXREYXRhLmRheSA9IHtcclxuICBkYXRlOiBuZXcgRGF0ZSgyMDIyLCAwbzYsIDIwLCAyLCA0NSwgMCksXHJcbiAgd29ya291dE51bWJlcjogMSxcclxuICBleGVyY2lzZXM6IHtcclxuICAgIGV4Y2VyY2lzZTE6IHtcclxuICAgICAgbmFtZTogXCJzcXVhdFwiLFxyXG4gICAgICBzZXQxOiB7XHJcbiAgICAgICAgd2VpZ2h0OiAyMjUsXHJcbiAgICAgICAgcmVwczogNSxcclxuICAgICAgfSxcclxuICAgICAgc2V0Mjoge1xyXG4gICAgICAgIHdlaWdodDogMTg1LFxyXG4gICAgICAgIHJlcHM6IDgsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXhjZXJjaXNlMjoge1xyXG4gICAgICBuYW1lOiBcImJlbmNoXCIsXHJcbiAgICAgIDE1NTogMTAsXHJcbiAgICAgIDE0NTogMTUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbmNvbnNvbGUubG9nKE9iamVjdC5rZXlzKHdvcmtvdXREYXRhLmRheS5leGVyY2lzZXMuZXhjZXJjaXNlMSlbMF0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=