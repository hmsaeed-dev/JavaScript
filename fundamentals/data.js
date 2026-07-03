"Use strict"; // treat all js code as newer version

// alert(3 + 3) can't implement this on node.js, we are not using browser

/*
    string => ""
    boolean => true/false
    int => 2 power 52
    symbol => unique
    null => standalone value
    undefined => value not asigned to a variable

    object =>
*/


//! Typeof
console.log(typeof null); // object
console.log(typeof undefined); // undefined

console.log(typeof 23);
console.log(typeof(23)); // typeof as a method

console.log(typeof "Saeed");

/* Primitive Data Types
=> call by value Always, copy passed, not the reference to actual
=> string, boolean, int, null, undefined, bigInt
=> store instack memory
*/


/* Non-Primitive Data Types
=> call by reference
=> Arrays, Functions, Objects
=> return type for typeof operator is object for all non-primitive data types
=> store in heap memory
*/

//! Symbols => typeof , symbol
let id = Symbol("123");
let ID = Symbol("123");

console.log(id == ID);

//! Arrays
const array = ['Saeed', 'Saad', 'Salman'];

//! Objects
const myObject = {
    name = "Saeed",
    age = 23,
}

//! Function
const myFunction = function () {
    console.log("HMS");
}
