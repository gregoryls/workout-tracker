export function exerciseList() {
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

export default sampleWorkout;
