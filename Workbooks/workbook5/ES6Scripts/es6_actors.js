// Exercise 2 - using new methods, search through the array that has objects

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
let member187 = academyMembers.find(member => member.memID == 187)
console.log("\n\nAcademy Member 187 is: " + member187.name);

// Who has been in at least 3 films?
console.log("\n ======================================= \n\nMembers with at least 3 films: \n");
let MembersWithThreeFilms = academyMembers.filter(member => member.films.length >= 3)
MembersWithThreeFilms.forEach(member => console.log(member));

// Who has a name that starts with "Bob"?
console.log("\n ======================================= \n\nMembers that start with Bob \n");
let startsWithBob = academyMembers.filter(member => member.name.indexOf("Bob") > -1);
startsWithBob.forEach(member => console.log(member))


// HARDER: Which Academy Members have been in a film
// that starts with "A"
console.log("\n ======================================= \n\nMembers with films that start with 'A'\n");

let membersFilmsStartsWithA = academyMembers.filter(member => member.films.find(findMember => findMember.indexOf("A") > -1));
console.log(membersFilmsStartsWithA);
