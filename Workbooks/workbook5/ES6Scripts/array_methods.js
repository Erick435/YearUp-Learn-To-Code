"use strict";

let products = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
];

// // put variable into an empty array
// let productName = [];

// // loop through each products
// for (const product of products){
//     // add the items into the array
//     productName.push(product.item);
// }

// console.log(productName);

// USING .MAP TO GET ITEMS ==================================

// function getProductName(product){
//     return product.item;
// }

// let productNames = products.map(getProductName);

// console.log(productNames);


// USING .MAP AND ARROW FUNCTIONS =============================

let productNames = products.map(products => products.item);
console.log(productNames);


