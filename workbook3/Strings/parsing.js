"use strict";

    // let fullName = "Brenda Kaye";

    function parseAndDisplayName(nameOfPerson){
        let separationOfName = nameOfPerson.indexOf(" ");
        let firstName = nameOfPerson.substring(0, separationOfName);
        let lastName = nameOfPerson.substring(separationOfName + 1);

        console.log("\n\nFull Name: " + nameOfPerson + "\nFirst Name: " + firstName + "\nLast Name: " + lastName);
    }

let person1 = parseAndDisplayName("Brenda Kaye")
let person2 = parseAndDisplayName("Ian Auston")
let person3 = parseAndDisplayName("Siddalee Grace")

console.log(person1);
console.log(person2);
console.log(person3);