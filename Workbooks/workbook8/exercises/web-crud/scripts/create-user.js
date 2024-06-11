"use strict";

// get the values that the user inputted for new user
const fullName = document.querySelector("#fullName").value;
const userName = document.querySelector("#username").value;
const userEmail = document.querySelector("#email").value;
const confirmEmail = document.querySelector("#confirmEmail").value;
const submitButton = document.querySelector("#submitButton");

window.onload = function () {

    submitButton.onclick = createNewUser;

}


function createNewUser() {
    console.log("createNewUser() called");

    let bodyData = {
        name: fullName,
        username: userName,
        email: userEmail
    }

    if (userEmail != confirmEmail) {
        alert("Your Email Does Not Match");
    }
    else {

        // call the fetch and POST method to create a new user to the api
        fetch("http://localhost:3000/users/", {
            method: "POST",
            body: JSON.stringify(bodyData),
            header: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(user => {
                alert(`User: ${user.name} was created successfully`);
            })
            .catch(error => {
                alert("Error creating a New User: " + error.message);
            })
    }
}