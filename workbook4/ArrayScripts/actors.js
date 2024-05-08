// Exercise 3

"use strict";


let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
    name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

// TODO:
// Who is the Academy Member whose ID is 187?

function getMemberId(member, IDNumber){
    let memberId = [];

    console.log('====================================');
    console.log("Academy Member " + IDNumber + " is: ");
    
    for (let i = 0; i < member.length; i++){
        if (member[i].memID == IDNumber){
            memberId = member[i].name;
            console.log(memberId);
        }
    }
    console.log('====================================');
    
}

getMemberId(academyMembers, 187)

// Who has have been in at least 3 films?

function filmsAmount(array){

    console.log('\n\n====================================');
    console.log("These are the members with at least 3 films: ");
    console.log('====================================');
    
    let members = [];
    
    for (let i = 0; i < array.length; i++){
        
        if (array[i].films.length >= 3){
            members = array[i].name;
            console.log(members);
        }
        
    }
    console.log("\nThank you have a great day!");
    console.log('====================================');
}

filmsAmount(academyMembers);

// Who has a name that starts with "Bob"?

function firstNameBob(array){
    let firstName = [];

    console.log('\n\n====================================');
    console.log("Here are the actors that have a name that starts with Bob");
    console.log('====================================\n');
    
    for (let i =0; i < array.length; i++){
        
        let findName = array[i].name;
        
        if (findName.indexOf("Bob") !== -1){
            firstName = findName;
            console.log(firstName);
        }
    }
    console.log('====================================\n');
}

firstNameBob(academyMembers);

// HARDER: Which Academy Members have been in a film
// that starts with "A"

function filmsWithA(array){
    let actors = [];

    console.log('\n====================================');
    console.log("These actors have been in a film that starts with 'A'");
    console.log('====================================\n\n');
    
    for (let i = 0; i < array.length; i++){
        
        
        // console.log(findFilm);
        
        for (let j = 0; j < array[i].films.length; j++){
            if (array[i].films[j].indexOf("A") !== -1){
                actors = array[i].name;
                // console.log(actors);
            }
        }
        
        
    }
    console.log(actors);
    console.log('====================================');
    
}

filmsWithA(academyMembers);