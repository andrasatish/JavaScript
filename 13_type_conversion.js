// string to number and number to string conversion: It should works with number data only.

/** STRING - NUMBER Conversion */
let num1  = '20';
num1 = +num1; // + means always convert to numbers
console.log('STRING - NUMBER : ', num1, typeof num1); //20 number

/** NUMBER - STRING Conversion */
let num2  = 20;
num2 = num2.toString();
console.log('NUMBER - STRING : ', num2, typeof num2); //20 string


/** If you are not converting numbers then we will get some unexpected results 
 *  If you are not converting the numbers then it will concatinate when we are doing addition operation.
*/
const addNumbers = (num1,num2) => {
    return +num1 + +num2;
}

console.log(addNumbers('20',10)) //30

/**
 * 
 * If you are adding string and number then you will get string type 
 * and If you perform any addition operation then it will perform concat operation.
 */
const addNumber = (num1,num2) => {
    return num1 + +num2;
}
console.log(addNumber('abc',10)) //abc10

//If we want to perform with string data and if you are trying to convert to number then you will get NaN.