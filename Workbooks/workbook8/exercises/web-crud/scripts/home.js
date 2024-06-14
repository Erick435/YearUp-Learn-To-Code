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

                let editLink = document.createElement("a");
                editLink.href = `http://localhost:5500/Workbooks/workbook8/exercises/web-crud/update-delete.html?id=${user.id}`;
                editLink.classList.add("btn");
                editLink.classList.add("btn-outline-primary");
                editLink.innerText = "Edit";
                editLink.id = user.id;
                cell3.appendChild(editLink);

                tableBody.appendChild(row);
            }
        })
}
