// If you want perform specific functionality or operation then we have to use functions.
// Code resusability and more readibility.

// ############# function with zero arguments ####################//
function sumCalculation() { //function define / definition
    const num1 = 10;
    const num2 = 20;
    const sum = num1 + num2;
    console.log(sum); // 30
}
sumCalculation(); //function calling

function substractCalculation() { //function define / definition
    const num1 = 10;
    const num2 = 20;
    const sum = num1 - num2;
    return sum;
}

var subResult = substractCalculation(); //function calling
console.log(subResult); // -10



//################# function with parameters ################//
function multiply(num1,num2,num3){
    return num1*num2*num3;
}

const multiplyResult = multiply(2,3,4);
console.log(multiplyResult); //24


// ############ var and let how it is perfoming ###########//
// BLOCK LEVEL SCOPE AND FUNCTIONAL SCOPE
// SCOPE WITH LET
let a = 10;
function numPrint(){ //FUNCTIONAL SCOPE
    let a = 20;
    if(true){ //BLOCK LEVEL SCOPE
        let a = 30;
        console.log('BLOCK LEVEL : ', a); // 30
    }
    console.log("FUNCTIONAL SCOPE/LEVEL"+ a); // 20
}
numPrint();
console.log('GLOBAL SCOPE : ', a); // 10


//SCOPE WITH VAR
var b = 10;
function numPrint1(){ //FUNCTIONAL SCOPE
    var b = 20; 
    if(true){ //BLOCK LEVEL SCOPE
        var b = 30;
        console.log('BLOCK LEVEL VAR : ', b); // 30
    }
    console.log("FUNCTIONAL SCOPE/LEVEL VAR : "+ b); // 30
}
numPrint1();
console.log('GLOBAL SCOPE VAR : ', b); // 10

/* BLOCK LEVEL (LET) vs FUNCTIONAL LEVEL SCOPE (VAR)
   -------------------------------------------------
   let is the block level scope, if you define variable with let inside the block level scope, that it won't effect with functional scope.
   var is the functional scope, if you define variable with var inside the block level scope, that it will effect in functional scope.
*/

// SCENARIO - 1
let name = 'satish';
function employeeDetails(){
    name = 'sudheer';
    if(true){
        console.log('NAME IN BLOCK SCOPE :: ', name); //sudheer
    }
    console.log('NAME IN FUNCTIONAL SCOPE :: ', name); //sudheer
}
employeeDetails();
console.log('OUTSIDE SCOPE :: ', name); //sudheer


// SCENARIO - 2
let location = 'Delhi'; // Chennai, Hyderabad
function locationDetails(){
    location = 'Chennai'; // Hyderabad
    if(true){
        console.log('NAME IN BLOCK SCOPE :: ', location); //Chennai
    }
    location = 'Hyderabad'
    console.log('NAME IN FUNCTIONAL SCOPE :: ', location); //Hyderabad
}
locationDetails();
console.log('OUTSIDE SCOPE :: ', location); //Hyderabad


//NORMAL FUNCTION
function greeting(){
    console.log('HELLO GOOD MORNING');
}

//ARROW FUNCTION
const greeting1 = () => {
    console.log('HELLO GOOD MORNING');
}

const greeting2 = () => "HELLO GOOD MORNING";

greeting(); // HELLO GOOD MORNING
greeting1(); // HELLO GOOD MORNING
console.log(greeting2());


/**
 * DIFFERENCE B/W NORMAL FUNCTION VS ARROW FUNCTION
 * -----------------------------------------------
 * Normal functions we can define with function keyword and we have an function name. 
 * Arrow functions we can define with arrow symbol, If is only one statement we won't write any return keyword and we can omit flower brackets and we can make in one single line.
 */