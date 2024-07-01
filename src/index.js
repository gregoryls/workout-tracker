import "./style.css";
import exercises from "./exercises.json";
import * as utils from "./utils";

// TODO
// big list of exercise full names, e.g. flat barbell bench, incline dumbell bench etc.
// maybe select options to narrow down a populated list of every exercise
// which is also filterable by a search field.
// read more on destructuring
// instead of directly adding new exercise, have some kind of dialogue
// toggle to switch between RPE or RiR
// write function to add entry to exercise list
// consider displaying movements as capital first letter vs all lower
// consider a number hidden from user for ordering movements in a workout
// new variation js
// change variation button to something like clickable text
// work on new variation logic
// add movements to workout array, display array contents in some collapsible form
// iterate through the workout array to build the final workout object
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
// revisit Object.assign() for repeat sets
// find way to track order of exercises
// fix blank movement field
// local storage for new unique movement
// make sure you can add new tempo times in variations
// mesocycle select other bring up a text input
// mesocycle make sure default selection stays constant for a given workout
// link new cycle inputs into obj
// package exercise event listener into function
// check setNumber for string/num issues

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
const addMovement = document.getElementById("addMovement");
const mesocycleInput = document.getElementById("mesocycleInput");

let newMovement;

const workoutArray = [];

const exerciseListObj =
  JSON.parse(localStorage.getItem("exerciseListObj")) || exercises;

// retrieve saved object or initialize a blank object
const workoutHistoryObj =
  JSON.parse(localStorage.getItem("workoutHistoryObj")) || {};
console.log(workoutHistoryObj);
console.log(exerciseListObj);
// const movementObj = {};
const workoutObj = {};

let value = utils.getMovementInput();
let valueCamelCase = utils.toCamelCase(value.toLowerCase());

function generateMesocycleInputOther() {
  const wrap = document.getElementById("mesocycleWrap");
  if (mesocycleInput.value === "other") {
    const input = document.createElement("input");
    utils.setAttributes(input, {
      type: "text",
      name: "mesocycleInputOther",
      id: "mesocycleInputOther",
      placeholder: "Custom",
    });
    wrap.append(input);
    // element creation, think about setattributes()
  }
}

// console.log(valueCamelCase);
function movementTextMatch() {
  if (exerciseListObj[valueCamelCase]) {
    // hide add movement button for existing movements
    addMovement.style.display = "none";
    variations.innerHTML = "";
    console.log("sucess");
    const keys = Object.keys(exerciseListObj[valueCamelCase].variation);
    for (let i = 0; i < keys.length; i += 1) {
      if (exerciseListObj[valueCamelCase].variation[keys[i]]) {
        const createCheckboxInput = utils.createInput(
          "checkbox",
          keys[i],
          "VariationCheck",
        );
        variations.append(createCheckboxInput);

        // pre-check the 'none variation after it's div is appended
        if (keys[i] === "none") document.getElementById("none").checked = true;

        if (keys[i] !== "none") {
          createCheckboxInput.addEventListener("change", (event) => {
            if (event.target.checked)
              document.getElementById("none").checked = false;
          });
        }

        // expand the tempo checkbox if selected for eccentric/concentric inputs
        if (keys[i] === "tempo") {
          createCheckboxInput.addEventListener("change", (event) => {
            if (event.target.checked) {
              const tempoWrap = document.createElement("div");
              tempoWrap.id = "tempoVariationWrap";
              const eccentric = utils.createInput(
                "number",
                "eccentric",
                "Wrap",
              );
              const concentric = utils.createInput(
                "number",
                "concentric",
                "Wrap",
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
}

mesocycleInput.addEventListener("change", () => {
  generateMesocycleInputOther();

  // remove custom text input when selecting a different option
  if (mesocycleInput.value !== "other") {
    // check if the custom mesocycle input exists, if so, remove it for other select options
    const mesocycleInputOther = document.getElementById("mesocycleInputOther");
    if (mesocycleInputOther) mesocycleInputOther.remove();
  }
});

exerciseInput.addEventListener("input", () => {
  // show add movement button to catch new unique movement names
  addMovement.style.display = "inline-block";
  value = utils.getMovementInput();
  valueCamelCase = utils.toCamelCase(value.toLowerCase());

  // clear variations so they don't get stuck when changing between known movements
  variations.innerHTML = "";
  movementTextMatch();
});

newMovementButton.addEventListener("click", () => {
  // don't proceed with blank movement field
  if (utils.getMovementInput() === "") return;

  const dateStartTime = `${utils.getDate()}|${utils.getStartTime()}`;
  const setNumber = document.getElementById("setNumber");
  // run this if block for the first set only
  if (Number(setNumber.value) === 1) {
    // TODO dateblock only needs to run once, check for content first

    utils.setWorkoutDateStart(workoutHistoryObj);

    utils.setWorkoutTime(workoutHistoryObj[dateStartTime]);
    // console.log(workoutHistoryObj);

    newMovement = utils.generateMovementObj();

    utils.generateSetObj(newMovement);
    // console.log(newMovement);
    Object.assign(workoutHistoryObj[dateStartTime], newMovement);
    console.log(workoutHistoryObj);

    utils.incrementSetNumber();
  } else {
    utils.generateSetObj(newMovement);
    Object.assign(workoutHistoryObj[dateStartTime], newMovement);
    console.log(workoutHistoryObj);
    utils.incrementSetNumber();
  }

  localStorage.setItem("workoutHistoryObj", JSON.stringify(workoutHistoryObj));
});

addMovement.addEventListener("click", () => {
  value = utils.getMovementInput();
  valueCamelCase = utils.toCamelCase(value.toLowerCase());
  // TODO base this on a standard variation list from the json
  exerciseListObj[valueCamelCase] = {
    variation: {
      none: true,
      pause: true,
      tempo: {
        concentric: 1,
        eccentric: 3,
      },
    },
  };
  console.log(exerciseListObj);
  localStorage.setItem("exerciseListObj", JSON.stringify(exerciseListObj));
});

newVariationButton.addEventListener("click", () => {
  const newVariationInput = document.getElementById("newVariationInput");
  const newVariationValue = newVariationInput.value;

  // break if no value is entered in the input
  if (newVariationValue === "") return;
  exerciseListObj[valueCamelCase].variation[newVariationValue] = true;
  console.log(exerciseListObj[valueCamelCase]);
  localStorage.setItem("exerciseListObj", JSON.stringify(exerciseListObj));
});

dateButton.addEventListener("click", () => {
  // put user date input into workout array
  // const movementObj = utils.generateMovementObj();
  // utils.generateSetObj(movementObj);
  // console.log(movementObj);
});

submitExercise.addEventListener("click", async () => {
  try {
    const response = await fetch("/run-script", {
      method: "POST",
    });
    const result = await response.json();
    alert(result.message);
  } catch (error) {
    console.error("Fetch error:", error);
    alert(`Error: ${error.message}`);
  }
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

// page load
utils.resetSetNumber();
utils.setDateInputToday();

movementTextMatch();

utils.fillDatalist("exerciseInputOptions", exerciseListObj);

// autoload custom meso input
generateMesocycleInputOther();
