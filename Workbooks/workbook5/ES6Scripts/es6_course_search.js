"use strict";

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

// TODO :
// When does the PROG200 course start?

// ======================= USING FUNCTIONS TO GET THE COURSE ==============================

// Using function to get course
function getCourse(course){
        if (course.CourseId == "PROG200"){
            return true;
        }
        else{return false};
    
}

let startDateClass = courses.find(getCourse); // Should return "11/22/22"

if (startDateClass != undefined){
    console.log("Class start date for PROG200: " + startDateClass.StartDate);
}
else{
    console.log("Class Not found");
}

// =================================== USING ARROW FUNCTIONS TO GET COURSE TITLE =================================

// What is the title of the PROJ500 course?

let courseTitle = courses.find(course => course.CourseId == "PROJ500" )

if (courseTitle != undefined){
    console.log("The title of Course PROJ500 is: " + courseTitle.Title);
}
else{
    console.log("No course was found");
}

// What are the titles of the courses that cost $50 or less?

let coursesCost = courses.filter(course => course.Fee <= 50)
console.log("\n\nThese are the courses that cost $50 or less:");
console.log(coursesCost);

// What classes meet in "Classroom 1"?

let classrooms = courses.filter(course => course.Location == "Classroom 1");
console.log("\n\nThese are the classroom 1 courses: ");
console.log(classrooms);
