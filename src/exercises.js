export function sampleWorkout() {
  const obj = {
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
  return obj;
}

// accepts an array of movement objects as a parameter
export function generateWorkoutObj(movements) {
  const obj = {};
  obj.date = new Date();

  for (let i = 0; i < movements.length; i += 1) {
    const movement = movements[i];
    obj[`exercise${i + 1}`] = movement;
  }
  console.log(obj);
}

export const exerciseList = {
  squat: {
    variation: {
      none: false,
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
