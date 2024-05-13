let currentTemp = 92;
let f = 0;
let c = 0;

function convertFtoC(currentTemp) {
    f = currentTemp;
    let celsiusTemp = ((f - 32) * 5) / 9;
    return f + " degrees F, is " + celsiusTemp + " degrees C";
}

let temp1 = convertFtoC(212);
let temp2 = convertFtoC(90);
let temp3 =convertFtoC(72);
let temp4 =convertFtoC(32);
let temp5 = convertFtoC(0);


console.log(temp1);
console.log(temp2);
console.log(temp3);
console.log(temp4);
console.log(temp5);

