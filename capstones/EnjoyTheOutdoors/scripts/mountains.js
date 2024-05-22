"use strict";

const dropDownSelect = document.querySelector("#dropDownSelect");
const cardContainer = document.querySelector("#cardContainer");

let mountains = mountainsArray;


window.onload = function() {

    displayDropDownNames();

    dropDownSelect.onchange = displaySelectedMountain;


}

// ============ DISPLAY DROP DOWN MOUNTAIN NAMES ================
function displayDropDownNames(){
    console.log("displayDropDownNames() was called");

    let showAll = new Option("All");
    showAll.value = "All";
    dropDownSelect.appendChild(showAll);

    for (let mountain of mountains){
        let option = new Option(mountain.name);
        option.value = mountain.elevation;
        dropDownSelect.appendChild(option);
    }

}

// ============ DISPLAY SELECTED MOUNTAIN ================

function displaySelectedMountain(){
    console.log("displaySelectedMountain() was called ");

    cardContainer.innerText = "";
    
    let selectedValue = dropDownSelect.value;
    let mountainCard = mountains.find(mountain => mountain.elevation == selectedValue);
    
    let cardImg = document.createElement("img");
    cardImg.classList.add("card-img-top");
    cardImg.src = `./images/${mountainCard.img}`;
    cardImg.alt = mountainCard.name;

    cardContainer.appendChild(cardImg);
    
    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body")
    cardContainer.appendChild(cardBodyDiv);

    let cardTitle = document.createElement("h4");
    cardTitle.innerText = mountainCard.name;
    cardBodyDiv.appendChild(cardTitle);

    let cardParagraph = document.createElement("p");
    cardParagraph.innerText = mountainCard.desc;
    cardBodyDiv.appendChild(cardParagraph);

    let cardElevation = document.createElement("p");
    cardElevation.innerText = `Elevation: ${mountainCard.elevation} ft`
    cardElevation.classList.add("h5");
    cardBodyDiv.appendChild(cardElevation);

}

// ============ DISPLAY CARD IMAGE AND INFORMATION ================

function displayCardInformation(){


    
}