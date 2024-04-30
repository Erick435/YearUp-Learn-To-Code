"use strict";

function getSocSecTax(grossPay) {
    let taxedAmount = (grossPay * 6.2) / 100;
    return taxedAmount;
}

function getMedicareTax(grossPay) {
    let taxedAmount = (grossPay * 1.45) / 100;
    return taxedAmount;
}

function getFederalTax(grossPay, code) {
    let taxedAmount = 0;

    if (code == 0) {
        taxedAmount = (grossPay * 23) / 100;
        return taxedAmount;
    } else if (code == 1) {
        taxedAmount = (grossPay * 21) / 100;
        return taxedAmount;
    } else if (code == 2) {
        taxedAmount = (grossPay * 19.5) / 100;
        return taxedAmount;
    } else if (code == 3) {
        taxedAmount = (grossPay * 18.5) / 100;
        return taxedAmount;
    } else if ( code >= 4) {
        let remainingAmount = code - 4;
        let percentageAmount = 18 - (remainingAmount * 0.005);
        taxedAmount = (grossPay * percentageAmount) / 100;
        return taxedAmount;
    } else {
        return "That is not a valid code";
    }
}

let person1 = getFederalTax(750, 0);
let person2 = getFederalTax(1550, 2);
let person3 = getFederalTax(1100, 6);

console.log(person1);
console.log(person2);
console.log(person3);
