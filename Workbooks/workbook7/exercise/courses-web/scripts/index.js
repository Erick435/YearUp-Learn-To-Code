"use strict";

const tableBody = document.querySelector("#tableBody");

window.onload = function() {

    getAllCourses();
    
}

async function getAllCourses() {

    console.log("getAllCourses() called");
    
    let response = await fetch("http://localhost:8081/api/courses");
    let courses = await response.json();

    for (let course of courses) {
        let row = tableBody.insertRow();

        
        let cell1 = row.insertCell(0);
        cell1.id = course.id;

        let courseLink = document.createElement("a");
        courseLink.href = "#";
        courseLink.innerText = course.courseName;
        cell1.appendChild(courseLink);

        let cell2 = row.insertCell(1);
        cell2.innerText = course.courseNum;

        let cell3 = row.insertCell(2);
        cell3.innerText = course.dept;

        tableBody.appendChild(row);

    }

}