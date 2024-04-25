// Exercise 2 part 1
// Estimate annual gross pay (multiply by 52) and save to a new variable
// Use a series of if statements to determine and save the TAX RATE 
// Single filers is : (Under 12,000 = 5% tax rate) (12,000 - 24,999.99 = 10%) (25,000 - 74,999.99 = 15) (75,000+ = 20%)
// Joint filers is: (under 12,000 = 0%) (12,000 - 24,999.99 = 6%) (25,000 - 74,999.99 = 11%) (75,000+ = 25%)

var payRate = 17.30;
var hoursWorked = 45;
var regularHours = 40;
var overTimePayRate = 1.5;
var regularTotalPay = payRate * regularHours;

// var taxFilerOne = "Single";
var taxFilerOne = "Joint";

if ( hoursWorked > 40 ) {
    var overTimeHours = hoursWorked - regularHours;
    var overTimeTotalPay = (payRate * overTimePayRate) * overTimeHours;
    var totalGrossPay = overTimeTotalPay + regularTotalPay;
}
else {
    totalGrossPay = regularTotalPay;
}

if (taxFilerOne == "Single") {
    
    var annualGrossPay = totalGrossPay * 52;

    if(annualGrossPay < 12000){

        var taxes = (annualGrossPay * 5) / 100;
        var takeHomePay = annualGrossPay - taxes;
    }
    else if(annualGrossPay > 12000 && annualGrossPay < 24999.99){
        
        var taxes = (annualGrossPay * 10) / 100;
        var takeHomePay = annualGrossPay - taxes;
    }
    else if(annualGrossPay > 25000 && annualGrossPay < 74999.99){

        var taxes = annualGrossPay * .15
        var takeHomePay = annualGrossPay - taxes;
    }
    else {
        var taxes = (annualGrossPay * 20) / 100;
        var takeHomePay = annualGrossPay - taxes;
    }
    console.log("Your total gross income is: $" + annualGrossPay + ", after filing for single on your taxes, your take home pay is: $" + takeHomePay + "\n That is: -$" + taxes + " in taxes.");
}
else if (taxFilerOne == "Joint"){
    var annualGrossPay = totalGrossPay * 52;

    if(annualGrossPay < 12000){

        var taxes = (annualGrossPay * 0) / 100;
        var takeHomePay = annualGrossPay - taxes;
    }
    else if(annualGrossPay > 12000 && annualGrossPay < 24999.99){
        
        var taxes = (annualGrossPay * 6) / 100;
        var takeHomePay = annualGrossPay - taxes;
    }
    else if(annualGrossPay > 25000 && annualGrossPay < 74999.99){

        var taxes = (annualGrossPay * 11) / 100;
        var takeHomePay = annualGrossPay - taxes;
    }
    else {
        var taxes = (annualGrossPay * 20) / 100;
        var takeHomePay = annualGrossPay - taxes;
    }
    console.log("Your total gross income is: $" + annualGrossPay + ", after filing for Joint on your taxes, your take home pay is: $" + takeHomePay + "\n That is: -$" + taxes + " in taxes.");

}
else {
    console.log("Sorry that's not an option!");
}