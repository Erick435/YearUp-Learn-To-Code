"use strict";


const tableBody = document.querySelector("#tableBody");


window.onload = function () {

    showAllUsers();

}


function showAllUsers() {
    console.log("showAllUsers() called");

    fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(users => {

            for (let user of users) {
                let row = tableBody.insertRow();

                let cell = row.insertCell(0);
                cell.innerText = user.name;

                let cell1 = row.insertCell(1);
                cell1.innerText = user.username;

                let cell2 = row.insertCell(2);
                cell2.innerText = user.email;

                let cell3 = row.insertCell(3);
                cell3.innerText = "option";

                tableBody.appendChild(row);
            }
        })


}
