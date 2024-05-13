// declare an array of student objects and give them exercise scores
// use 2 loops: 1 to loops to the next student, 2 to loop to each student's score
// return the students name and their average scores 

"use strict";

let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]}, 
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
];

function getStudentScores(array){

    
    // loop through each student array 
    for (let i = 0; i < array.length; i++){
        let studentAverage = 0;
        let name = "";
        let count = 0;

        // console.log(array[i]);

        // loop through each students scores
        for (let j = 0; j < array[i].scores.length; j++){
            count += array[i].scores[j];
            // console.log(array[i].scores[j]);
            console.log(count);
        }
        studentAverage = count / array[i].scores.length;
        name = array[i].name;
        console.log("\n" + name + ": " + studentAverage.toFixed(2) + "\n==================");
    }


    
}

getStudentScores(students);