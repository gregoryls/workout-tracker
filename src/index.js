import "./style.css";
import * as exercises from "./exercises";
import * as utils from "./utils";

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
// change variation button to something like clickable text
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
// keep set info greyed out until movement added to workout
// why does movement name come out with a space
// sanitize getmovementinput
// rethink how workout objects are built
// functions to get time inputs

// console.log(exercises.sampleWorkout());

const exerciseInput = document.getElementById("exerciseInput");
// const exerciseListElement = document.getElementById("exerciseList");
const submitExercise = document.getElementById("submitExercise");
// const option = document.createElement("option");
const variations = document.getElementById("variationInputs");
const newVariationButton = document.getElementById("submitNewVariation");
const newMovementButton = document.getElementById("newMovementButton");
// const userDate = document.getElementById('dateInput');
const dateButton = document.getElementById("dateButton");

// console.log(list);
const exerciseListObj = exercises.exerciseList;
// console.log(exerciseListObj);

let newMovement;

const workoutArray = [];
const workoutHistoryObj = {};
const movementObj = {};
const workoutObj = {};

dateButton.addEventListener("click", () => {
  // put user date input into workout array
  // console.log(utils.getDate());
  // if (workoutObj.date === null) {
  //   workoutObj.date = utils.getDate();
  //   console.log(workoutObj);
  // }
  const temp = utils.generateMovementObj();
  utils.generateSetObj(temp);
  console.log(temp);
});

utils.fillDatalist("exerciseInputOptions", exerciseListObj);

let value = utils.getMovementInput();
let valueCamelCase = utils.toCamelCase(value.toLowerCase());
// console.log(valueCamelCase);
if (exerciseListObj[valueCamelCase]) {
  variations.innerHTML = "";
  console.log("sucess");
  const keys = Object.keys(exerciseListObj[valueCamelCase].variation);
  for (let i = 0; i < keys.length; i += 1) {
    if (exerciseListObj[valueCamelCase].variation[keys[i]]) {
      const temp = utils.createInput("checkbox", keys[i], "VariationCheck");
      variations.append(temp);

      // pre-check the 'none variation after it's div is appended
      if (keys[i] === "none") document.getElementById("none").checked = true;

      // expand the tempo checkbox if selected for eccentric/concentric inputs
      if (keys[i] === "tempo") {
        temp.addEventListener("change", (event) => {
          if (event.target.checked) {
            const tempoWrap = document.createElement("div");
            tempoWrap.id = "tempoVariationWrap";
            const eccentric = utils.createInput(
              "number",
              "eccentric",
              "eccentric",
            );
            const concentric = utils.createInput(
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
  value = utils.getMovementInput();
  valueCamelCase = utils.toCamelCase(value.toLowerCase());
  // console.log(valueCamelCase);
  variations.innerHTML = "";
  if (exerciseListObj[valueCamelCase]) {
    console.log("sucess");
    const keys = Object.keys(exerciseListObj[valueCamelCase].variation);
    for (let i = 0; i < keys.length; i += 1) {
      if (exerciseListObj[valueCamelCase].variation[keys[i]]) {
        const temp = utils.createInput("checkbox", keys[i], "VariationCheck");
        variations.append(temp);

        // pre-check the 'none variation after it's div is appended
        if (keys[i] === "none") document.getElementById("none").checked = true;

        if (keys[i] === "tempo") {
          temp.addEventListener("change", (event) => {
            if (event.target.checked) {
              const tempoWrap = document.createElement("div");
              tempoWrap.id = "tempoVariationWrap";
              const eccentric = utils.createInput(
                "number",
                "eccentric",
                "eccentric",
              );
              const concentric = utils.createInput(
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

newMovementButton.addEventListener("click", () => {
  // TODO dateblock only needs to run once, check for content first
  const dateStartTime = `${utils.getDate()}|${utils.getStartTime()}`;
  utils.setWorkoutDateStart(workoutHistoryObj);

  utils.setWorkoutTime(workoutHistoryObj[dateStartTime]);
  console.log(workoutHistoryObj);

  newMovement = utils.generateMovementObj();
  console.log(newMovement);

  utils.generateSetObj(newMovement);
  console.log(newMovement);
  Object.assign(workoutHistoryObj[dateStartTime], newMovement);
  console.log(workoutHistoryObj);

  utils.incrementSetNumber();

  // workoutArray.push(newMovement);
  // workoutObj.movements = workoutArray;
  // // workoutObj[utils.getMovementInput()] = newMovement;
  // console.log(workoutObj);
});

newVariationButton.addEventListener("click", () => {
  // const newVariationInput = document.getElementById("newVariationInput");
  // const newVariationValue = newVariationInput.value;
  // exerciseListObj[valueCamelCase].variation[newVariationValue] = true;
  // console.log(exerciseListObj[valueCamelCase]);
});

submitExercise.addEventListener("click", () => {
  // // don't add empty entry to exercise list object
  // if (value === "") return;
  // const keys = Object.keys(exerciseListObj);
  // // console.log(keys);
  // // checks current list of movements; adds unique movements to exercise list
  // let isContained = false;
  // for (let i = 0; i < keys.length; i += 1) {
  //   const movement = exerciseListObj[valueCamelCase];
  //   if (movement) {
  //     isContained = true;
  //   }
  // }
  // if (!isContained) {
  //   exerciseListObj[valueCamelCase] = { variation: { none: true } };
  //   console.log(exerciseListObj);
  // }
  // //
  // utils.generateSetObj(newMovement);
  // console.log(workoutArray);
  // console.log(utils.displayObject(workoutArray[0]));
  // utils.incrementSetNumber();
});

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
