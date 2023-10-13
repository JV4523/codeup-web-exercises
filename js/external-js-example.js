"use strict";//Makes Javascript more strict

const pi = 3.14;
console.log(pi);

console.log(5+4);//Console logs print to the console and ONLY print to the console
let instructorName = "David";
console.log(instructorName);

let favoriteColor = "Green";
console.log(favoriteColor);
//Alert Pop-up menu from user to Javascript
alert("Howdy from Javascript");
alert("howdy from " + instructorName);

//Confirm  Pop-Up message from user to Javascript, that has the ability to capture a boolean
let confirmed = confirm("We have lunch at 12:30 today?");
console.log(confirmed);

// Prompt - A pop-up message to the user from javascript that asks for a text view
let userString = prompt("what is your favorite baseball team");
console.log(`The user entered: ${userString}`);