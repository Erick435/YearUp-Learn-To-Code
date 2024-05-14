// Exercise 1 - using new methods (.map / .filter / .forEach() / arrow functions) and search for the products in the array
"use strict";

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
];

// TODO:

// Which candies costs less than $4.00?

let costLessThan4 =  products.filter(products => products.price < 4);
costLessThan4.forEach(costLessThan4 => console.log(costLessThan4));

// Which candies has "M&M" its name?
console.log("\n =========================================\n");

let candyMAndM = products.filter(products => products.product.indexOf("M&M") > -1);
candyMAndM.forEach(candyMAndM => console.log(candyMAndM));

// Do we carry "Swedish Fish"?

let swedishFish = products.find(products => products.product.indexOf("Swedish Fish") > -1);
console.log("\n================================================");
if (swedishFish){
    console.log("\n We do carry Swedish Fish");
}