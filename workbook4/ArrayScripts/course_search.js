// Exercise 1
// Add a courses array 

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

// When does the PROG200 course start?

function findClass200(courses, category) {

    let class200Time = [];

    for (let i = 0; i < courses.length; i++) {
        // console.log(courses[i].length);
        if (courses[i].CourseId == category) {
            class200Time = courses[i].StartDate;
            // console.log(class200Time);
        }
        
    }
    console.log("Class " + category + " Starts at: " + class200Time);

}

findClass200(courses, "PROG200");

// What is the title of the PROJ500 course?

function titleOfCourse(courses, category) {

    let title = [];

    for (let i = 0; i < courses.length; i++) {
        if (courses[i].CourseId == category) {
            title = courses[i].Title;
        }
        
    }
    console.log("\n" + category + " is called: " + title);
}

titleOfCourse(courses, "PROJ500")

// What are the titles of the courses that cost $50 or less?

function lessThan50(courses){

    let courses50OrLess = [];

    console.log('\n\n====================================');
    console.log("Courses $50 or less are as follows: ");
    console.log('====================================');;

    for (let i = 0; i < courses.length; i++){

        if (courses[i].Fee <= 50){
            courses50OrLess = courses[i];
            console.log(courses50OrLess);
        }
        
    }

    console.log('====================================');
}

lessThan50(courses);

// What classes meet in "Classroom 1"?

function classRoom(courses, location){

    console.log('\n\n====================================');
    console.log("Here are the courses that meet at classroom 1:");
    console.log('====================================');
    
    let classRoom1 = [];

    for (let i = 0; i < courses.length; i++){
        
        
        if (courses[i].Location == location){
            classRoom1 = courses[i];
            console.log(classRoom1);
        }
        
    }
    console.log('====================================');    
}

classRoom(courses, "Classroom 1")