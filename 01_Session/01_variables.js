//type of data -> number, string, boolean, arrays, object and date

// variable -> var, let and const -> predefined keywords


//########### VAR ##########
var num1 = 10; // number type
console.log(num1); //10

var sum = 10 + 20; // assign
console.log(sum) //30

sum = "Sudheer"; // reassignment -> Already variable name exists and we are assigning value to the variable
console.log(sum);

sum = [1,2,3]; // reassignment
console.log(sum);

var sum = "test"; // we can define the same variable name multiple times. It won't throw any error.
console.log(sum);



//########### LET ##########

//let it won't take multiple times with variable name. If we define multiple times it will throw error 
//Error:  Identifier 'name' has already been declared
let name = 'sudheer';
console.log(name);

// let name = 'satish';
// console.log(name);


//########### CONST ##########
// We con't reassign the values to the const variables. If we reassign it will throw an error.
const PI = 3.14;
// PI = 4.23;
console.log(PI);


//NOTE: Commented lines: Cntrl+KC, Uncommented lines:Cntrl+KU
// int num = 10;
// num = 90;
// num = "sudheer"
