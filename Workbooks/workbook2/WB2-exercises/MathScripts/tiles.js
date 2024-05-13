// Exercise 3 part 4
// Room dimension = length * width (ft);
// You want to tile the room and there is 12 (1ft * 1ft) tiles per box. How many boxes of tiles do you need? No partial boxes.

// You want to buy 10% more tiles than you actually need to handle chips, breakage, and mess-ups. How many boxes do you buy?


var length = 12;
var width = 15;
var roomDimension = length * width;
var calculateBoxes = roomDimension / 12;

var tenPercentMoreTiles = ((roomDimension * 10) / 100);
var totalBoxes = (roomDimension + tenPercentMoreTiles) / 12;

console.log("The dimensions of the room are: " + roomDimension + " square feet.\nWe need: " + calculateBoxes + " boxes to fill the room with tiles.\n");

console.log("10% more tiles would be " + tenPercentMoreTiles +" tiles.\nIn total, we need: " + (tenPercentMoreTiles + roomDimension) + " tiles, so this will add up to " + Math.ceil(totalBoxes) + " boxes.");






