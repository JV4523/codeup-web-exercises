"use strict";

console.log("Hello from inline JavaScript");

alert('Welcome to my Website!');

let color = prompt("What is your favorite color");
alert(`Great, ${color} is my favorite color too!`);

let p =3;
let lm = parseInt(prompt("How many days did you have The Little Mermaid?"));
alert(`You Owe ${lm * p} dollars.`);

let bb = parseInt(prompt("How many days did you have the Brother Bear?"));
alert(`You Owe ${bb * p} dollars.`);

let h = parseInt(prompt("How many days did you have Hercules?"));
alert(`You Owe ${h * p} dollars.`);

alert("Your total is " + ((lm + bb + h) * p) + " dollars.")