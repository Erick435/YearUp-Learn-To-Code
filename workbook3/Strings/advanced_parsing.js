// Exercise 2

"use strict";

function parseAndDisplayName(nameOfPerson){
    
    let names = nameOfPerson.split(" ");

    let firstName = names[0];
    let middleName = "";
    let lastName = "";

    if (names.length == 2){
        lastName = names[1];
    }
    else if (names.length == 3) {
        middleName = names[1];
        lastName = names[2];
    }

    console.log(`\nName: ${nameOfPerson}`);
    console.log(`First Name: ${firstName}`);
    console.log(`Middle Name: ${middleName}`);
    console.log(`Last Name: ${lastName}`);


    
    
    // let separationOfName = nameOfPerson.indexOf(" ");
    // let separationOfName2 = nameOfPerson.indexOf(" ", separationOfName + 1);
    
    // if (separationOfName < 0){
    //     firstName = nameOfPerson;
    // }
    // else {
    //     firstName = nameOfPerson.substring(0, separationOfName);
    //     lastName = nameOfPerson.substring(separationOfName + 1);
    // }

    // if (separationOfName2 > 0){
    //     lastName = nameOfPerson.substring(separationOfName + 1);
        
    // }
    // else if (separationOfName2 > separationOfName){
    //     middleName = nameOfPerson.substring(separationOfName + 1, separationOfName2)
    //     lastName = nameOfPerson.substring(separationOfName2 + 1);
    // }

    // if (!middleName && !lastName){
    //     answer = "First name: " + firstName;
    // }
    // else if (!middleName){
    //     answer = "First name: " + firstName + "\nlast name: " + lastName;
    // }
    // else {
    //     answer = "First name: " + firstName + "\nMiddle Name: " + middleName + "\nlast name: " + lastName;
    // }

    // console.log("\n\n" + answer);



}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");
