"use strict";

// let item = document.getElementById("item");
// let price;
// switch(item){
//     case "Hat":
//     case "Gloves":
//         price = 15.95
//         break;
//     case "Coat":
//         price = 49.99;
//         break;
// }

// let a = 5, b = 3, c = 4, d = 2;
// let answer = a + b * c - d;
// console.log(answer);

// ==========================

// let sum = 0;

// function add (x, y, z){
//     let sum = x + y + z;
//     return sum;
// }

// function display(){
//     console.log(sum);
// }

// sum = add(1, 2, 3);
// sum = add (3, 4, 5);
// display();

// =================

// let d = new Date();
// console.log((d.getMonth() + 1)+ "/" + d.getDate() + "/" + d.getFullYear());

// let num = 33;
// if (num >= 18 && num <= 65){
//     console.log("good job");
// }


// for (let i = 0; i < 5; i++){
//     console.log("hello");
// }

// let colors = ["green", "yellow", "blue", "red", "pink"];
// for (let i = 0; i < 5; i++){
//     if (colors[i] == "blue") break;
//     console.log("hello");
// }


// let numbers = [0, 0, 0];
// function doit(n){
//     let num = 10;
//     for (let i = 1; i < numbers; i++){
//         num += i;
//         numbers[i] = num;
//     }
// }
// doit(3);
// console.log(numbers);

let ages = [9, 11, 62, 65, 17, 16, 15, 14, 31, 35, 37];
let num = ages.find(a => a > 20);
console.log(num);

// window.onload = function (){
//     document.getElementById("num").value = "ABC";
// }