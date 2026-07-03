/*
    Don't use 'var' because of issue in block scope and function scope
    Use 'let'
*/

let name = "Saeed"
var email = "hms.builds@gmail.com"
const age = 20;
company = "HMS";
let education;

console.log(name);

console.table([age, name, email, company, education]);
