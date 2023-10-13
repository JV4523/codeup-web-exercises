"use strict";

console.log("Hello from inline JavaScript");

alert('Welcome to my Website!');

let color = prompt("What is your favorite color");
alert(`Great, ${color} is my favorite color too!`);

let p =3;
let lm = parseFloat(prompt("How many days did you have The Little Mermaid?"));
alert(`You Owe ${lm * p} dollars.`);

let bb = parseFloat(prompt("How many days did you have the Brother Bear?"));
alert(`You Owe ${bb * p} dollars.`);

let h = parseFloat(prompt("How many days did you have Hercules?"));
alert(`You Owe ${h * p} dollars.`);

alert("Your total is " + ((lm + bb + h) * p) + " dollars.")

//Next Section
let aRate = parseFloat(prompt("How much are you paid by Amazon per hour?"));
let aHours = parseFloat(prompt ("How many hours did you work for Amazon this week?"));
alert(`Employee worked for Amazon for ${aHours} hours this week at a rate of ${aRate.toFixed(2)} per hour. \n\n User is paid: ${(aHours * aRate).toFixed(2)}`);

let mRate = parseFloat(prompt("How much are you paid by Meta per hour?"));
let mHours = parseFloat(prompt ("How many hours did you work for Meta this week?"));
alert(`Employee worked for Meta for ${mHours} hours this week at a rate of ${mRate.toFixed(2)} per hour. \n\n User is paid: ${(mHours * mRate).toFixed(2)}`);

let gRate = parseFloat(prompt("How much are you paid by Google per hour?"));
let gHours = parseFloat(prompt ("How many hours did you work for Google this week?"));
alert(`User worked for Google for ${gHours} hours this week at a rate of ${aRate.toFixed(2)} per hour. \n\n User is paid: ${(gHours * gRate).toFixed(2)}`);

let fPay = (aRate * aHours) + (mRate * mHours) + (gRate * gHours);
alert(`Employee's final take home pay is: ${fPay.toFixed(2)}`);