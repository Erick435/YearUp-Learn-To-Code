"use strict";

const cardContainer = document.querySelector("#cardContainer");
const charactersDropDown = document.querySelector("#characterDropDown");

window.onload = function () {

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

    let selectedCharacter = charactersDropDown.value;

    console.log("A character was selected");

    if (charactersDropDown.selectedIndex >= 0) {

        let text = charactersDropDown.options[charactersDropDown.selectedIndex].text;
        let value = selectedCharacter;


        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((characters) => {
                let allCharacters = characters.results;

                cardContainer.innerText = ""; //Reset the card container to display 1 character

                // EACH CHARACTER
                for (let character of allCharacters) {

                    // check and only show the character's info when selected
                    if (text == character.name){

                        // CREATE AN IMAGE FOR EACH CHARACTER CARD
                        let characterImage = document.createElement("img");
                        characterImage.src = character.image;
                        cardContainer.appendChild(characterImage);
                        
                        // CREATE A DIV FOR THE BODY TEXT
                        let cardBodyDiv = document.createElement("div");
                        cardContainer.appendChild(cardBodyDiv);

                        // CREATE TITLE FOR THE BODY TEXT
                        let cardTitle = document.createElement("h5");
                        cardTitle.classList.add("card-title");
                        cardTitle.innerText = character.name;
                        cardBodyDiv.appendChild(cardTitle);

                    }
                }
            })
    }
}