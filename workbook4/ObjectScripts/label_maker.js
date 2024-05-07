"use strict";


let person1 = {
    name: "Erik",
    address: "123 Road",
    city: "London",
    state: "Hawaii",
    zip: "12345"
}

function printContract (person) {
    
    let myInfo = {
        name: person1.name,
        address: person1.address,
        city: person1.city,
        state: person1.state,
        zip: person1.zip
    }

    console.log(person.name + "\n" + person.address + "\n" + person.city + "\n" + person.state + "\n" + person.zip);

}

printContract(person1)