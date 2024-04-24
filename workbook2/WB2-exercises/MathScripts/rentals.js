// Exercise 3 Part 5
// X people going on a tour. Van seats hold 15 passengers each. How many van do you need?
// Vans cost $250/day to rent. How much will it cost to rent the vans?
// Cost if you split it per person?

var passengers = 125;

var vansNeeded = passengers / 15;

var amountNeeded = vansNeeded * 250;

console.log("For " + passengers + ", we need " + Math.ceil(vansNeeded) + " vans to rent\nAssuming that each van cost is $250/day, we would need $" + amountNeeded.toFixed(2));

// Test your script with 38 people. How much money do you charge per person? 

var newPassengers = 38;

var amountPerPerson = 250 / 15;

var amountCollected = newPassengers * amountPerPerson;

var newVansNeeded = newPassengers / 15;

var newTotalCost = newVansNeeded * 250;

console.log("\n\nWe charge $" + amountPerPerson.toFixed(2) + " per person.");
console.log("\nWhen multiplied by the passengers, we collected $" +amountCollected.toFixed(2) + " for " + newPassengers + " passengers");

console.log("\nWe need " + Math.ceil(newVansNeeded) + " Vans. So this means we charged $" + newTotalCost.toFixed(2) + ". And the van cost are $250/van so we will make $750. There's money left over because when charging just for the van, it doesn't matter if there's less than 15 people per van since the rate is fixed at $250, and there are 38 people which means they still had to pay for the van even if it wasn't full.");

