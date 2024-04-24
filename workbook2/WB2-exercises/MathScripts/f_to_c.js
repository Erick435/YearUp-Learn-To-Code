// Exercise 3 part 1
// covert Fahrenheit temp to Celsius Temp
// EX: (80°F − 32) × 5/9 = 26.667°C

var temperatureF = 80;
var convertFahrenheitToCelsius = (temperatureF - 32) * 5/9;
console.log("Temperature in Fahrenheit is " + temperatureF + " degrees, and Temperature in Celsius is " + convertFahrenheitToCelsius + " degrees.\n" + "Temperature in Celsius rounded is " + Math.round(convertFahrenheitToCelsius) + " degrees.");

// Vice versa
// Ex: (5°C × 9/5) + 32 = 41°F

var temperatureC = 5;
var coverCelsiusToFahrenheit = (temperatureC * 9/5) + 32;

console.log("\nTemperature in Celsius is " + temperatureC + " degrees, and Temperature in Fahrenheit is " + coverCelsiusToFahrenheit + " degrees.\n");

