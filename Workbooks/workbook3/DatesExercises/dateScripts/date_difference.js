"use strict";

let startDate = "July 11, 2022";
let endDate = "November 11, 2022";

let date1 = new Date(startDate);
let date2 = new Date(endDate);

let msecPerDay = 1000 * 60 * 60 * 24; // amount of milliseconds in a day

let elapsedMilliseconds = date2.getTime() - date1.getTime();

let dayDiff = elapsedMilliseconds / msecPerDay; // total mSec diff / 24 hour (msec)

let answer = Math.round(dayDiff);

console.log(`Start: ${date1}\nEnd: ${date2}\nDifference: ${answer} Days`);