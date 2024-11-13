import json

with open('src/exercisesClean.json','r') as file: 
    exerciseList = json.load(file)


print(exerciseList)