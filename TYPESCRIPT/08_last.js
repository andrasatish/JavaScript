const date = (new Date()).toLocaleString();

console.log('DATE', date, typeof date, date.split(',')[1]);


//Self invoked functions or immediately invoked functions
//The function which is called immediately or automatically then it is called self invoked function.

//NOMRAL FUNCTION
function add(a,b){
    const result = a+b;
    console.log(result);
}

add(20,30);

//SELF INVOKED FUNCTION -> with normal function
(function(a,b){
    const result = a+b;
    console.log(result);
})(20,30);

//SELF INVOKED FUNCTION -> with arrow function
((a,b) => {
    const result = a+b;
    console.log(result);
})(20,30);

//SELF INVOKED FUNCTION -> with arrow function with storing (arrow function or lamda functions or expression functions)
const result = ((a,b) => {
    return a+b;
})(30,30);
console.log(result);