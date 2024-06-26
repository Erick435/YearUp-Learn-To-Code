"use strict";

const dropDownSelect = document.querySelector("#dropDownSelect");
// const cardContainer = document.querySelector("#cardContainer");
const mountainsPage = document.querySelector("#mountainsPage");

let mountains = mountainsArray;


window.onload = function() {

    
    displayDropDownNames();
    
    displaySelectedMountain();
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

    mountainsPage.innerText = "";
    
    let selectedValue = dropDownSelect.value;
    let mountainCard = mountains.find(mountain => mountain.elevation == selectedValue);
    

    let mountainCardCreate = async function (mountainArray) {

        
        let cardContainer = document.createElement("div");
        cardContainer.classList.add("container");
        cardContainer.classList.add("card");
        cardContainer.classList.add("my-5");
        cardContainer.style = "width: 25rem";
        cardContainer.id = "cardContainer";
        mountainsPage.appendChild(cardContainer);
        
        let cardImg = document.createElement("img");
        cardImg.classList.add("card-img-top");
        cardImg.classList.add("my-2");
        cardImg.src = `./images/${mountainArray.img}`;
        cardImg.alt = mountainArray.name;
        
        cardContainer.appendChild(cardImg);
        
        let cardBodyDiv = document.createElement("div");
        cardBodyDiv.classList.add("card-body")
        
        cardContainer.appendChild(cardBodyDiv);
        
        let cardTitle = document.createElement("h4");
        cardTitle.innerText = mountainArray.name;
        cardBodyDiv.appendChild(cardTitle);
        
        let cardParagraph = document.createElement("p");
        cardParagraph.innerText = mountainArray.desc;
        cardBodyDiv.appendChild(cardParagraph);

        let bottomCardText = document.createElement("div");
        bottomCardText.classList.add("container");
        cardContainer.appendChild(bottomCardText);
        
        let cardElevation = document.createElement("h5");
        cardElevation.innerText = `Elevation: ${mountainArray.elevation} ft`
        bottomCardText.appendChild(cardElevation);

        let apiCall = await getSunsetForMountain(mountainArray.lat, mountainArray.lng);
        
        let sunRise = document.createElement("h5");
        sunRise.innerText = `Sunrise: ${apiCall.results.sunrise}`;
        bottomCardText.appendChild(sunRise);

        let sunSet = document.createElement("h5");
        sunSet.innerText = `Sunset: ${apiCall.results.sunset}`;
        bottomCardText.appendChild(sunSet);
        
        

    }


    if (selectedValue == "All"){
        for (let mountain of mountains){
            mountainCardCreate(mountain);
        }
    }
    else{
        mountainCardCreate(mountainCard);
    }
        
}


// function that can "fetch" the sunrise/sunset times
async function getSunsetForMountain(lat, lng){
    let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
    let data = await response.json();
    return data;
}
