// Exercise 2 Part 5
// How long will it take a savings account worth X to double in value given an interest rate of IR? (Look up rule of 72)

var savingsAccount = 1000;
var interestRate = 8;
var numberOfPeriod = (72/interestRate);
console.log("At a " + interestRate + " interest rate, your savings account will be worth " + savingsAccount * (2) + " in " + numberOfPeriod + " Years");
