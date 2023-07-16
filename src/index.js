import "./style.css";

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
