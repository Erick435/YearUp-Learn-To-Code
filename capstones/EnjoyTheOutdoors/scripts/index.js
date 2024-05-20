"use strict";

// const locationsArray = []    --> LocationData.js
// const nationalParksArray = [] --> nationParkData.js
// const parkTypesArray = [] --> parkTypeData.js

const tableBody = document.querySelector("#tableBody");

window.onload = function() {
    
    getParkData();
    
}

function getParkData(){
    console.log("getparkdata called");

    let locations = nationalParksArray;

    for( let location of locations){

        let row = tableBody.insertRow();
        
        let cell1 = row.insertCell(0);
        cell1.innerText = location.LocationName;

        let cell2 = row.insertCell(1);
        cell2.innerText = location.Address;

        let cell3 = row.insertCell(2);
        cell3.innerText = location.City;

        let cell4 = row.insertCell(3);
        cell4.innerText = location.State;

        let cell5 = row.insertCell(4);
        cell5.innerText = location.ZipCode;

        let cell6 = row.insertCell(5);
        cell6.innerText = location.Phone;

        let cell7 = row.insertCell(6);
        let websiteString = "";
        if (location.Visit != undefined){
            cell7.innerText = location.Visit;
        }
        else{
            cell7.innerText = "N/A";
        }
        
    }
    
}

