"use strict";

// get the values that the user inputted for new user
const submitButton = document.querySelector("#submitButton");

window.onload = function () {

    submitButton.onclick = createNewUser;

}

function test() {
    console.log(document.querySelector("#fullName").value);
}


function createNewUser() {
    console.log("createNewUser() called");

    let bodyData = {
        name: document.querySelector("#fullName").value,
        username: document.querySelector("#userName").value,
        email: document.querySelector("#userEmail").value
    }

    if (userEmail.value != confirmEmail.value) {
        alert("Your Email Does Not Match");
        
    }
    else {

        // call the fetch and POST method to create a new user to the api
        fetch("http://localhost:3000/users", {
            method: "POST",
            body: JSON.stringify(bodyData),
            headers: {
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