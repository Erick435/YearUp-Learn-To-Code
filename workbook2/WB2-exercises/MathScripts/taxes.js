// Exercise 3 part 2 
//  Federal taxes are 23%/month you make X. How much is withheld for taxes? 
// Don't display partial pennies, use toFixed().

var annualSalary = 100000;
var monthlySalary = (annualSalary / 12);
var calculateTaxes = (monthlySalary * 23) / 100;
var totalWithheld = calculateTaxes.toFixed(2);

console.log("The amount of money that you make monthly is: " + monthlySalary.toFixed(2));
console.log("23% of your monthly taxes are: " + totalWithheld);
