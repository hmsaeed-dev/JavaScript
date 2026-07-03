//! Data Type Conversions

/*
"33"    =>  33
"33abc" =>  NaN
true => 1  false => 0
1 => true  0 => false
null =>
undefined =>
"" => false
"djhf" => true


Number()
Boolean()
String()

*/

let score = "34";

console.log(typeof (score));

let scoreinNumber = Number(score);

console.log(scoreinNumber);
console.log(typeof scoreinNumber);
