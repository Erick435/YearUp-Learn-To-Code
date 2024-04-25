var payRate = 17.30;
var hoursWorked = 45;
var regularHours = 40;
var overTimePayRate = 1.5;
var regularTotalPay = payRate * regularHours;


if ( hoursWorked > 40 ) {
    var overTimeHours = hoursWorked - regularHours;
    var overTimeTotalPay = (payRate * overTimePayRate) * overTimeHours;
    var totalGrossPay = overTimeTotalPay + regularTotalPay;
}
else {
    totalGrossPay = regularTotalPay;
}



console.log("Your total gross is: $" + totalGrossPay)