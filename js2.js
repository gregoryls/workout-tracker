workoutData = {}
workoutData["date"] = {
    exercises:{
        excercise1:{
            name:"squat",
            225:5,
            185:8
        },
        excercise2:{
            name:"bench",
            155:10,
            145:15
        }
    }
}
console.log(Object.keys(workoutData.date.exercises.excercise1)[0]);