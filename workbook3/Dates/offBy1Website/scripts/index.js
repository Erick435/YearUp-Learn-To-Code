"use strict";
let dateButton = document.getElementById("dateButton");
let message = document.getElementById("message");

function init(){
    
    dateButton.onclick = getDate;
    
}

function getDate(){
    let dateButton = Date(document.getElementById("dateButton"));
    let d = dateButton.toString();

    
    message.innerText = d;

}



window.onload = init;