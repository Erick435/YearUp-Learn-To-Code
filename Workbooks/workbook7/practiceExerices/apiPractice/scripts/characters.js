"use strict";

const cardContainer = document.querySelector("#cardContainer");
const charactersDropDown = document.querySelector("#characterDropDown");

window.onload = function() {

displayCharactersDropDown();

charactersDropDown.onchange = getCharacterInfo;

}

function displayCharactersDropDown() {

    console.log("displayCharactersDropDown() was called");
    fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((characters) => {
            let allCharacters = characters.results;
            for (let character of allCharacters) {

                let option = new Option(character);
                option.text = character.name;
                option.value = character.id;

                charactersDropDown.appendChild(option);
            }
            console.log(characters.results);
        })

    
}

function getCharacterInfo() {

    console.log("A character was selected");

    fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((character) => function() {

        })
}