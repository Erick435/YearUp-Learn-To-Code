// Exercise 2

"use strict";

function parseAndDisplayName(nameOfPerson){
    let separationOfName = nameOfPerson.indexOf(" ");
    let firstName = nameOfPerson.substring(0, separationOfName);
    let lastName = nameOfPerson.substring(separationOfName + 1);
    let middleName = nameOfPerson.substring(separationOfName + 2);

    let answer = " ";

    if (separationOfName == 1){
        answer = "\n\nFirst Name: " + firstName;
    }
    else if (separationOfName == 2){
        answer = "\n\nFirst Name: " + firstName + "\nMiddle Name: " + lastName + "\nLast Name: " + middleName;
    }
    else {
        answer = "\n\nFirst Name: " + firstName + "\nLast Name: " + lastName;
    }

    console.log(answer);
    console.log(separationOfName);
}

let person1 = parseAndDisplayName("Cher");
let person2 = parseAndDisplayName("Brenda Kaye");
let person3 = parseAndDisplayName("Dana Lynn Wyatt");
