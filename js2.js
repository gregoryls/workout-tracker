workoutData = {}
workoutData["date"] = {
    date: new Date(),
    "workout number":1,
    exercises:{
        excercise1:{
            name:"squat",
            set1:{
                weight:225,
                reps:5
            },
            set2:{
                weight:185,
                reps:8
            }
        },
        excercise2:{
            name:"bench",
            155:10,
            145:15
        }
    }
}
console.log(Object.keys(workoutData.date.exercises.excercise1)[0]);