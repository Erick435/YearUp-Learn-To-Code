// create a product array and log the answers to the questions

"use strict";

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    // TODO: fill the array with 10 candies of various
    // price ranges
];




// Which candies costs less than $4.00?

function lessThan4(product){
    let candies = [];
    
    console.log('\n====================================');
    console.log("The following candies are less than 4");
    console.log('====================================');

    for (let i = 0; i < product.length; i++){
        
        if(product[i].price < 4){
            candies = product[i].product
            console.log(candies);
        }
    }
    
    console.log("\nHave a Great day!");
    console.log('====================================');
}

lessThan4(products);

// Which candies has "M&M" its name?

function getProductName(product, name){

    let getName = [];
    
    console.log("\nThe candies that has " + name + " in it, are as follows: \n");

    
    for (let i = 0; i < product.length; i++){
        let nameOfProduct = product[i].product;
        if (nameOfProduct.indexOf(name) !== -1){
            getName = product[i];
            console.log(getName);
        }
    }
    
    console.log("\n\nThank you have a great day!");
    console.log("========================================");
    
}

getProductName(products, "M&Ms");


// Do we carry "Swedish Fish"?

function searchProduct(product, name){

    let getName = [];

    console.log("\n================================================");
    console.log("\n\nChecking if we have... " + name + " in stock . . .\n");
    
    for (let i = 0; i < product.length; i++){
        let nameOfProduct = product[i].product;
        if (nameOfProduct.indexOf(name) !== -1){
            getName = product[i];
            console.log("We do have: " + name + " in stock!\n");
        }
    }
    console.log(getName);
    
    console.log("\n\nThank you have a great day!");
    console.log("========================================");
    
}

searchProduct(products, "Swedish Fish");