//24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
//Test for equality and inquality with strings
var string1 = "hello";
var string2 = "wold";
console.log(string1 === string2); //false
console.log(string1 !== string2); //true
//Test using the lower case function
var uppercase = "Hello";
var lowercase = "hello";
console.log(uppercase.toLowerCase() === lowercase); //true
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var number1 = 10;
var number2 = 20;
console.log(number1 === number2); //false
console.log(number1 !== number2); //true
console.log(number1 > number2); //false
console.log(number1 < number2); //true
console.log(number1 >= number2); //false
console.log(number1 <= number2); //true
// Tests using "and" and "or" operators
var x = 10;
var y = 20;
var Z = 30;
console.log(x < y && y < Z); //true
console.log(x > y || y < Z); //true
//Test whether an item is in a array
var array1 = [1, 2, 3, 4, 5, 6];
var itemTofind = 3;
console.log(array1.indexOf(itemTofind) !== -1); //true
//Test whether an item is not in a array
console.log(array1.indexOf(10) === -1); //true
