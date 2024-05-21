"use strict";

const dropDownSelect = document.querySelector("#dropDownSelect");
let mountains = mountainsArray;


window.onload = function() {

displayDropDownNames();

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
    console.log("displayDropDownNames() was called ");

    
}