"use strict";

const idInput = document.querySelector("#idInput");
const submitButton = document.querySelector("#submitButton");
const messageBox = document.querySelector("#messageBox");

window.onload = function() {

    submitButton.addEventListener("click", handleData);
    
}



function handleData() {
    console.log("You have called the handleData method");
    let userNumber = idInput.value;
    console.log(userNumber);
    // if (userNumber !== undefined){

    let url = "https://jsonplaceholder.typicode.com/todos/";
        console.log(url + userNumber);
        fetch(url + userNumber)
        .then(response => response.json())
        .then((todo) => {
                messageBox.innerText = "";
            if (userNumber != ""){

                let cardTitle = document.createElement("h5");
                cardTitle.classList.add("card-title");
                cardTitle.innerText = todo.title;
                messageBox.appendChild(cardTitle);
                
                let cardParagraph = document.createElement("p");
                cardParagraph.classList.add("card-text");
                cardParagraph.innerText = todo.completed;
                messageBox.appendChild(cardParagraph);
            }
            else {
                let cardTitle = document.createElement("h5");
                cardTitle.classList.add("card-title");
                cardTitle.innerText = "Please type a number"
                messageBox.appendChild(cardTitle);

            }

        }
        )
    // }
        
}