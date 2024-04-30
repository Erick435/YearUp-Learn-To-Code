"use strict";

function displayMailingLabel(firstName, address, city, state, zip){

    console.log("Name: " + firstName + "\nAddress: " + address + "\nCity: " + city + "\nState: " + state + "\nZip: " + zip);

}


function addNumbers(num1, num2) {
    let result = num1 + num2;
    console.log("\n" + num1 + " + " + num2 + " = " + result);
}


function displayReceipt(totalDue, amountPaid){
    console.log("\nTotal Due: $" + totalDue + "Amount Paid: $" + amountPaid + "\nChange Due: $" + (amountPaid - totalDue) + "\n");
}

let firstName = "Erik";
let address = "123 Road Street";
let city = "London";
let state = "Hawaii";
let zip = "12345";

let number1 = 100;
let number2 = 550;

let totalDue = 101;
let amountPaid = 120;

displayMailingLabel(firstName, address, city, state, zip);

addNumbers(number1, number2);

displayReceipt(totalDue, amountPaid);

