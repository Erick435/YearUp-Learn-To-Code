// Exercise 2: create function named getAverage(), find the average score in that array, return the average score

"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores){
    let count = 0;

    for (let i = 0; i < scores.length; i++){
        count += scores[i];
        // console.log(count);
    }

    let result = count / scores.length;

    console.log(result.toFixed(2));

}

getAverage(myScores);
getAverage(yourScores);