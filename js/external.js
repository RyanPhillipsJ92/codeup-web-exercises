"use strict";
//1)
//alert("welcome to my Website!");

//2)
//var favColor = prompt("What is your favorite color?");
//var alertMessage = "Great, " + favColor + " is my favorite color too!";
//alert(alertMessage);

//3.1
var dailyRentalRate = Number(prompt("How much is the daily rate?"));

var mermaidDaysRented = Number(prompt("How long are you renting the little mermaid?"));
var brotherBearRented = Number(prompt("How long are you renting brother bear?"));
var herculesDaysRented = Number(prompt("How long are you renting hercules?"));

var totalCost = (mermaidDaysRented + brotherBearRented + herculesDaysRented) * dailyRentalRate)



//3.2


//3.3 A student can be enrolled in a class only if the class is not full and the class schedule does
// not conflict with her current schedule

//If class is not full (true) -> we can enroll
var classIsNotFull = confirm("Class is not full?"); //boolean

//If class schedule does not conflict  -> we can enroll - space in our schedule
var classScheduleDoesNotConflict = confirm("Schedules do not conflict"); //boolean

//true && true  -> Student can enroll
//true && false -> Student CANT enroll (schedule conflict)
//false && true -> Student CANT enroll (class is full)
//fasle && false-> Student CANT enroll (class fulle & schedule conflict)
var studentEnrolled = classIsNotFull && classScheduleDoesNotConflict

var alertMessage = "student enrolled: " + studentEnrolled
var (alertMessage);


//3.4 A product offer can be applied only if a person buys more than 2 items, and offers has
// not expired. Premium members do not need to buy a sepcific amount of products.

//1. Offer has to be valid no matter what.
//2.a. If they a premium member, number of items does not matter
//2.b if they are NOT premium member, they must buy more that 2 -> have to use OR ( || )

var numOfItems = Number(prompt("How many items for checkout?")); //number
var offerIsValid = confirm("Is the ofer valid?"); //boolean
var isPremium = confirm("Are you a Premium Member?"); //boolean

//true && (true || true)  |
//true && (false || true) =====> TRUE
//true && (true || false) |
//true && (false || false) ====> FALSE
var discountApplied = offerIsValid && (isPremium || numOfItems > 2);