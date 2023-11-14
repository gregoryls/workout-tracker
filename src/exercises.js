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

export const exerciseList = {
  squat: {
    variation: {
      none: true,
      pause: true,
      tempo: {
        concentric: 1,
        eccentric: 3,
      },
    },
  },
  benchPress: {
    variation: {
      none: true,
      pause: true,
      tempo:{
        concentric: 1,
        eccentric: 3,
      }
    },
  },
  inclineBenchPress: {
    variation: {
      none: true,
      pause: true,
      tempo:{
        concentric: 1,
        eccentric: 3,
      }
    },
  },
  overheadPress: {
    variation: {
      none: true,
      pause: true,
      tempo:{
        concentric: 1,
        eccentric: 3,
      }
    },
  },
  deadlift: {
    variation: {
      none: true,
      pause: true,
      tempo:{
        concentric: 1,
        eccentric: 3,
      }
    },
  },
  pullup: {
    variation: {
      chinup: true,
      neutral: true,
      none: true,
      pause: true,
      tempo:{
        concentric: 1,
        eccentric: 3,
      }
    },
  },
};
