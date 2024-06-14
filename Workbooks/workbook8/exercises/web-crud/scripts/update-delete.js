"use strict";

const urlParams = new URLSearchParams(location.search);
const fullName = document.querySelector("#fullName");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");

window.onload = function () {

    updateUser();

}

function getUser() {
    console.log("updateUser called");

    let id = -1;

    if (urlParams.has("id") === true) {

        id = urlParams.get("id");

        console.log("id: " + id);
        
        fetch("http://localhost:3000/users/" + id)
            .then(response => response.json())
            .then(user => {
                fullName.value = user.name;
                userName.value = user.username;
                userEmail.value = user.email;

            })

    }
}

function deleteUser() {

}

