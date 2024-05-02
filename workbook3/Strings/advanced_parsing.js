// Exercise 2

"use strict";

function parseAndDisplayName(nameOfPerson){
    let separationOfName = nameOfPerson.indexOf(" ");
    let separationOfName2 = nameOfPerson.indexOf(" ", separationOfName + 1);
    
    let firstName, lastName, middleName, answer;
    

    if (separationOfName < 0){
        firstName = nameOfPerson;
    }
    else {
        firstName = nameOfPerson.substring(0, separationOfName);
        lastName = nameOfPerson.substring(separationOfName + 1);
    }

    if (separationOfName2 > 0){
        lastName = nameOfPerson.substring(separationOfName + 1);
        
    }
    else if (separationOfName2 > separationOfName){
        middleName = nameOfPerson.substring(separationOfName + 1, separationOfName2)
        lastName = nameOfPerson.substring(separationOfName2 + 1);
    }

    if (!middleName && !lastName){
        answer = "First name: " + firstName;
    }
    else if (!middleName){
        answer = "First name: " + firstName + "\nlast name: " + lastName;
    }
    else {
        answer = "First name: " + firstName + "\nMiddle Name: " + middleName + "\nlast name: " + lastName;
    }

    console.log("\n\n" + answer);

}

let person1 = parseAndDisplayName("Cher");
let person2 = parseAndDisplayName("Brenda Kaye");
let person3 = parseAndDisplayName("Dana Lynn Wyatt");
