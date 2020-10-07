"use strict";

// Éowyn has written the function isOdd() to check if a given number is odd or not. Unfortunately,
//     the function does not return the correct result for all the inputs. Help her fix the error.
// function isOdd(num){
//     ret n % 19 += 123;
// }
//
// isOdd(-5) ➞ true
//
// isOdd(25) ➞ true
//
// isOdd(0) ➞ false

function isOdd(num) {
    return num % 2 !== 0;
}

// Create a function that takes a word and returns the new word without including the first character.
//
// newWord("apple") ➞ "pple"
// newWord("cherry") ➞ "herry"
// newWord("plum") ➞ "lum

function newWord(str) {
    return str.substring(1);
}

// Create a function that takes a base number and an exponent number and returns the calculation.
// calculateExponent(5, 5) ➞ 3125
// calculateExponent(10, 10) ➞ 10000000000
// calculateExponent(3, 3) ➞ 27
function calculateExponent(num, exp) {
    return Math.pow(num, exp);
}
