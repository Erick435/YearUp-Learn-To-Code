"use strict";

// const locationsArray = []    --> LocationData.js
// const nationalParksArray = [] --> nationParkData.js
// const parkTypesArray = [] --> parkTypeData.js

const tableBody = document.querySelector("#tableBody");
const dropdownSelect = document.querySelector("#dropDownSelect");
let filterTitle = document.querySelector("#filterTitle");
let locationInput = document.querySelector("#locationInput");
let typeInput = document.querySelector("#typeInput");

window.onload = function () {

    displayStates();
    locationInput.onclick = checkFilterStatus;
    typeInput.onclick = checkFilterStatus;
    dropdownSelect.onchange = displaySelectedData;
    displayParks(nationalParksArray);



}

// ====================== FUNCTION TO DISPLAY FILTER =====================

function checkFilterStatus() {
    console.log("checkFilterStatus() has been called");
    dropdownSelect.innerText = "";

    if (locationInput.checked) {
        displayStates();
        console.log("LocationInput is true");
    }
    else if (typeInput.checked) {
        displayTypes();
        console.log("TypeInput is true");
    }

}


// ====================== FUNCTION TO DISPLAY BY LOCATION =====================

function displayStates() {
    console.log("displayStates() function was called");

    let states = locationsArray;
    let showAll = new Option("All");
    showAll.value = "All";
    
    dropdownSelect.appendChild(showAll);

    for (let state of states) {
        let option = new Option(state);
        option.value = state;
        dropdownSelect.appendChild(option);
    }

    filterTitle.innerText = "States/Territories"

}

function displayTypes() {
    console.log("You have selected the types filter");

    let types = parkTypesArray;
    let showAll = new Option("All");
    showAll.value = "All";
    
    dropdownSelect.appendChild(showAll);
    
    for (let type of types) {
        let option = new Option(type);
        option.value = type;
        dropdownSelect.appendChild(option);
    }

    filterTitle.innerText = "Park Types";
}

// ====================== FUNCTION TO GET FILTERED DATA BY LOCATION =======

function displaySelectedData() {
    let parkLocations = nationalParksArray;
    let selectedValue = dropdownSelect.value;
    let filteredParks = [];


    if (selectedValue == "All"){
        filteredParks = parkLocations;
    }
    else if (locationInput.checked) {
        
        filteredParks = parkLocations.filter(p => p.State == selectedValue);
        
    }
    else if (typeInput.checked) {
        filteredParks = parkLocations.filter(p => p.LocationName.indexOf(selectedValue) !== -1);
        
    }

    displayParks(filteredParks);

}


// ====================== FUNCTION TO DISPLAY PARK DATA =================
function displayParks(parks) {


    tableBody.innerText = "";

    for (let park of parks) {

        let row = tableBody.insertRow();

        let cell1 = row.insertCell(0);
        cell1.innerText = park.LocationName;

        let cell2 = row.insertCell(1);
        cell2.innerText = park.Address;

        let cell3 = row.insertCell(2);
        cell3.innerText = park.City;

        let cell4 = row.insertCell(3);
        cell4.innerText = park.State;

        let cell5 = row.insertCell(4);
        cell5.innerText = park.ZipCode;
        
        let cell6 = row.insertCell(5);
        cell6.innerText = park.Phone;

        let cell7 = row.insertCell(6);
        if (park.Visit != undefined) {
            cell7.innerText = park.Visit;
        }
        else {
            cell7.innerText = "N/A";
        }
    }
}

function getParkData(parks) {
    console.log("getParkData() function was called");

    displayParks(parks)


}

