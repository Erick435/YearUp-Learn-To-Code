// Exercise 1 part 2
// Define variable that contains the current hour (0 - 23). Display the greetings below based on the current hour)

var currentTime = 18;

if (currentTime <= 10){
    console.log("Good morning!");
}
else if (currentTime >= 10 && currentTime < 17){
    console.log("Good Day!");
}
else if (currentTime >= 17 && currentTime < 24){
    console.log("Good Evening!");
}
else {
    console.log("Sorry that's not a valid time, please use 0 - 23")
}