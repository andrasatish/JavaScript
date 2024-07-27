//=================== Hoisting ====================//
/**
 * HOISTING: 
 *  1. Hoisting is nothing but variable declarations moved to the top scope.
 *  2. we can access the variable before declaration in this time we will get undefined this is called hoisting.
 *  3. Hoisting possible with variable declaration and arrow functions (expression functions)
 *  4. Hoisting is possible with only var keyword.
 */

console.log(num1);
var num1 = 20; //undefined

/** JAVASCRIPT CONVERT LIKE BELOW CODE.
 * var num1;
 * console.log(num1);
 * num1 = 20;
 */


console.log(sayHello); //undefined
var sayHello = () => {
    return "Hello GoodMorning!";
}

/***
 * var sayHello;
 * console.log(sayHello);
 * sayHello = () => {
 *   return "Hello GoodMorning!";
 * }
 */

console.log(num2);
let num2 = 90; //Error: Cannot access 'num2' before initialization