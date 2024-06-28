//It will tell what is the type of the data. If you want to know about the type we need to use typeof.
//typeof is an predefined JavaScript Keyword.

let test = 20; // number
test = 'sudheer'; //string
test = true; // boolean (true/false)
test = ['test']; // object (In JavaScript Array type it will return as Object)
test = {} // object
// console.log(typeof(test));


//If you want to findout array type we need to use Array.isArray() and this is predefined JavaScript Method.
console.log(Array.isArray(test)) // true

let testData = 20.89;
console.log(typeof(testData))

//Till now we discussed number, string, boolean, array, object
// we have other also null, undefined

let testVar = null; // null is also Object in Javascript
// console.log(typeof(testVar));

testVar = undefined;
console.log(typeof(testVar));


//NOTE: For Object, Arrays and null for all the type it will give object
//If you want to know about array type you need to use Array.isArray()

