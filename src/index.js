import "./style.css";
import * as exercises from "./exercises";
import * as utils from "./utils";

// TODO
// big list of exercise full names, e.g. flat barbell bench, incline dumbell bench etc.
// import this big list from it's own separate file to reduce visual bloat
// maybe select options to narrow down a populated list of every exercise
// which is also filterable by a search field.
// read more on destructuring
// instead of directly adding new exercise, have some kind of dialogue
// look into webpack library

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

const exerciseInput = document.getElementById("exerciseInput");
const exerciseList = document.getElementById("exerciseList");
const submitExercise = document.getElementById("submitExercise");
const option = document.createElement("option");

// console.log(list);
const list = exercises.exerciseList;
console.log(list);

console.log(utils.toCamelCase("test string"));

exerciseInput.addEventListener("input", () => {
  const { value } = exerciseInput;
  const valueCamelCase = utils.toCamelCase(value.toLowerCase());
  // console.log(valueCamelCase);
  if (list[valueCamelCase]) {
    console.log("sucess");
    utils.createCheckbox("test", "Variations");
    // for (let i = 0; i < Object.keys(list[value].variation).length; i += 1) {
    //   console.log(Object.keys(list[value].variation)[i]);
    // }
  }
});

submitExercise.addEventListener("click", () => {
  const { value } = exerciseInput;
  const exerciseOptions = exerciseList.options;

  let isContained = false;

  for (let i = 0; i < exerciseOptions.length; i += 1) {
    if (exerciseOptions[i].value.toLowerCase() === value.toLowerCase()) {
      isContained = true;
    }
  }
  if (!isContained) {
    option.value = value;
    exerciseList.append(option);
  }
});

// console.log(sampleWorkout.exercise1.squat.variation);

// input.addEventListener("input", () => {
//   const { value } = this;

//   const newExercise = document.createElement("option");
//   newExercise.value = value;
//   exerciseList.append(newExercise);
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
