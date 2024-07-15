//FALSE types : 0, '', undefined, null
//TRUE types : +ve/-ve, 'name' , {}, []

//If condition works on numbers
// NUMBERS : 0 -> false, -ve/+ve -> true
let num = 23;
if(num){
    console.log('Condition true');
}else{
    console.log('Condition false');
}
 
//BOOLEAN : true -> true; false -> false
let isMarrid =  false;
if(isMarrid){
    console.log('is marrid : ', isMarrid)
}else{
    console.log('is married : ', isMarrid);
}
 
//STRING => '' -> false, if data exists -> true
let test = '   ';
if(test){
    console.log('test value  true')
}else{
    console.log('test value false')
}

/*OBJECT: 
    {}                 -> true
    { name:'sudheer' } -> true
*/
const obj = {};
if(obj){
    console.log('Data exists');
}else{
    console.log('Data not exists');
}

//If you want to check object is empty or not.
const objLength = Object.keys(obj).length //1 : 0
if(objLength){
    console.log('Object as values');
}else{
    console.log('Object as empty');
}


/*Array: 
    []      -> false
    ['hr']  -> true
*/
let des = ['hr','admin'];
if(des.length){
    console.log('Array as values')
}else{
    console.log('Array is empty');
}


/*
    undefined -> It means aways false
*/
let age = 20; //number
console.log('age data', age.length); //age data undefined
if(age.length){
    console.log('AGE Exist');
}else{
    console.log('Age not exists');
}


/*
    null -> false
*/
let pi = null;
if(pi){
    console.log('PI as value');
}else{
    console.log('PI as empty');
}


/**
 * We can compare both numbers, strings, boolean, undefined, null but
 * we can't compare object and arrays (If you want to compare object and arrays we need to use JSON.stringify)
 * JSON.Stringify is used to take data(number,string, boolean, object, array, undefined, null) and it will converted into string.
*/

//We can compare both strings - Example_1
const name_1 = 'Sudheer';
const name_2 = 'Sudheer';

if(name_1 === name_2){
    console.log('Names are equal'); //Names are equal
}else{
    console.log('Names are not equal');
}

// Compare both objects
const obj1 = {name:'sudheer'};
const obj2 = {name:'sudheer'};
const stringObj1 = JSON.stringify(obj1);
const stringObj2 = JSON.stringify(obj2); 
console.log('TYPE :', typeof obj1, typeof stringObj1); //TYPE : object string
if( stringObj1 === stringObj2){
    console.log('BOTH ARE EQUAL OBJECTS'); //BOTH ARE EQUAL OBJECTS
}else{
    console.log('BOTH ARE NOT EQUAL OBJECTS');
}

//Compare both arrays
const arr1 = [23,12];
const arr2 = [23,12];
if(JSON.stringify(arr1) === JSON.stringify(arr2)){
    console.log('BOTH ARRAYS ARE EQUAL'); //BOTH ARRAYS ARE EQUAL
}else{
    console.log('BOTH ARRAYS NOT ARE EQUAL');
}