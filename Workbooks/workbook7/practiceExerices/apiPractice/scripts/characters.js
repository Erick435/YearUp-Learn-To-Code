"use strict";
// API DOC LINK: https://rickandmortyapi.com/documentation/#info-and-pagination

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
                        characterImage.alt = character.name;
                        characterImage.classList.add("m-2");
                        characterImage.classList.add("rounded-2")
                        cardContainer.appendChild(characterImage);

                        
                        // CREATE A DIV FOR THE BODY TEXT
                        let cardBodyDiv = document.createElement("div");
                        cardBodyDiv.appendChild(document.createElement("hr"));
                        cardBodyDiv.classList.add("container")
                        cardContainer.appendChild(cardBodyDiv);

                        // CREATE TITLE FOR THE BODY TEXT
                        let cardTitle = document.createElement("h4");
                        cardTitle.classList.add("card-title");
                        cardTitle.classList.add("my-4");
                        cardTitle.innerText = character.name;
                        cardBodyDiv.appendChild(cardTitle);

                        // CREATE PARAGRAPHS AND DISPLAY INFORMATION ==================
                        let characterSpecies = document.createElement("p");
                        characterSpecies.innerText = "Species: " + character.species;
                        cardBodyDiv.appendChild(characterSpecies);
                        
                        let characterGender = document.createElement("p");
                        characterGender.innerText = "Gender: " + character.gender;
                        cardBodyDiv.appendChild(characterGender);
                        
                        let characterType = document.createElement("p");
                        if (character.type == ""){
                            characterType.innerText = "Type: Not Available";
                        }
                        cardBodyDiv.appendChild(characterType);
                        
                        let characterStatus = document.createElement("p");
                        characterStatus.innerText = "Status: " + character.status;
                        cardBodyDiv.appendChild(characterStatus);

                    }
                }
            })
    }
}