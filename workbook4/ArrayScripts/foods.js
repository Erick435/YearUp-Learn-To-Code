// Exercise 3: declare an array that contains objects you ordered from lunch
// Ex: let lunch = [{item: "steak", price: 9.95}, {item: "chips", price: 5.25}]
// Loop through the array, add up the price of everything and print out subtotal, also display the tax on that total (8% tax) and for tips (18%)


"use strict";

let lunch = [
    {item: "Tomato soup", price: 12.95},
    {item: "French Fries", price: 4.55},
    {item: "Mango tea", price: 4.50}
]

function calculateAmount(array){
    let total = 0;
    let tax = 0;
    let tips = 0;
    let basePrice = 0;

    for (let i = 0; i < array.length; i++) {

        total += array[i].price;
        console.log(total);
        basePrice = total;
    }

    tax = total * .08;
    tips = (total + tax) * .18;
    

    total += tax + tips;
    console.log("\nBase Price: $" + basePrice + "\nTax: $" + tax.toFixed(2) + "\nTips (18%): $" + tips.toFixed(2) + "\nTotal: $" + total.toFixed(2));
}

calculateAmount(lunch);