"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
//Question 1
function isTrue(x){
    return x === 1;
}
//Question 2
function isFalse(x){
    return x === 0;
}
//Question 3
function not(x){
    return !x;
}
//Question 4
function addOne(x){
    return x + 1;
}
//Question 5
function isEven(x) {
    if(x % 2 === 0){
        return true;
    }else{
        return false;
    }
}
let result = isEven(x);
console.log(result);
//Question 6
function isIdentical(x,y){
    return x === y;
}
//Question 7
function isEqual(x,y) {
    if(x == y){
        return true;
    }else{
        return false;
    }
}
//Question 8
function or(x,y){
    return x || y;
}
//Question 9
function and(x,y){
    return x && y;
}
//Question 10
function concat(x,y){
    return x + y;
}