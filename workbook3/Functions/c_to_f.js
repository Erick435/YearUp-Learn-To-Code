"use strict";

let temperatureC = 5;

function convertCtoF(temp){
    let fahrenheit = (temp * 9/5) + 32;
    return temp + " degrees C, is " + fahrenheit + " degrees F";
}


let temp1 = convertCtoF(100);
let temp2 = convertCtoF(45);
let temp3 = convertCtoF(19);
let temp4 = convertCtoF(0);
let temp5 = convertCtoF(-7);

console.log(temp1);
console.log(temp2);
console.log(temp3);
console.log(temp4);
console.log(temp5);

