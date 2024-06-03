"use strict";

let job = {
    title: "Web Designer",
    startDate: "October 2022",
    company: "AT&T",
    minSalary: 52000,
    maxSalary: 86000,
};

console.log(job);
console.log(JSON.stringify(job));

// filter and find a specific key/value

let filter = ["title", "company"];
let str = JSON.stringify(job, filter);

console.log("\n\n" + str);