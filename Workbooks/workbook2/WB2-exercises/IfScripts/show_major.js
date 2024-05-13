// Exercise 3 part 2
// Have a student name & major and align it with the major code & name of major & department office below
// 1. (BIOL - Biology - Science Bldg - Room 310)
// 2. (CSCI - Computer Science - Sheppard Hall, Room 314)
// 3. (ENG - English - Kerr Hall, Room 201)
// 4. (HIST - History - Kerr Hall, Room 114)
// 5. (MKT - Marketing - Westly Hall, Room 310)

// var studentName = "Jerry";
// var studentMajor = "BIOL";

var studentName = "Ben";
var studentMajor = "CSCI";

// var studentName = "Tom";
// var studentMajor = "ENG";

// var studentName = "Harry";
// var studentMajor = "HIST";

if (studentMajor == "BIOL"){
    console.log("Student: " + studentName + "\nMajor: Biology" + "\nAdvising Location: Science Bldg, Room 310");
}
else if (studentMajor == "CSCI"){
    console.log("Student: " + studentName + "\nMajor: Computer Science" + "\nAdvising Location: Sheppard Hall, Room 314");
}
else if (studentMajor == "ENG"){
    console.log("Student: " + studentName + "\nMajor: English" + "\nAdvising Location: Kerr Hall, Room 201");
}
else if (studentMajor == "HIST"){
    console.log("Student: " + studentName + "\nMajor: History"  + "\nAdvising Location: Kerr Hall, Room 114");
}
else if (studentMajor == "MKT"){
    console.log("Student: " + studentName + "\nMajor: Marketing" + "\nAdvising Location: Westly Hall, Room 310");
}
else {
    console.log("Sorry that's not a valid option for the student Major");
}