"use strict";

const tableBody = document.querySelector("#tableBody");

window.onload = function() {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            for (let user of users){
                let row = tableBody.insertRow();

                let cell1 = row.insertCell(0);
                cell1.innerText = user.name;

                let cell2 = row.insertCell(1);
                cell2.innerText = user.email;

                let cell3 = row.insertCell(2);
                cell3.innerText = user.username;

                let cell4 = row.insertCell(3);
                cell4.innerText = user.company.name;
                
            } 
        })


}
