const a2022530 = {
    squat:{weight:'215',reps:['5','5','5','5','5']},
    ohp:{weight:'55',reps:['16','16','16','16','16']},
};
function testFunction(){
    if (movement.value == 'squat') {
        document.getElementById('squatOptions').style.visibility = 'visible';
    }
}
const movement = document.getElementById('movement');
movement.addEventListener('change',testFunction);