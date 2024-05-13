// Exercise 3 part 3
// Find the distance between 2 points (x1, y1) and (x2, y2)
// Formula: d=√((x2 – x1)² + (y2 – y1)²)

// (x1, y1) = 1, 1
// (x2, y2) = 4, 3

var distance = Math.sqrt(Math.pow(4 - 1, 2) + (Math.pow(3 - 1, 2)));

console.log("The distance is " + distance.toFixed(2));
