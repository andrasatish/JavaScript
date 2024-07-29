//################ SPREAD OPERATOR ################//
// spread operator: It is used to merge two or more objects (array or object)

//SCENARIO - 1: merge all the arrays
const arr1 = [12,34];
const arr2 = [13,45];
const arr3 = [14,12];
const arrCombined = [...arr1,...arr2,...arr3];
console.log(arrCombined); //[ 12, 34, 13, 45, 14, 12 ]

//SCENARIO - 2: merge all the arrays with array of objects
const arrObj1 = [{name:'peter'},{name:'john'}];
const arrObj2 = [{name:'ramesh'},{name:'suresh'}];
const arrObjCombined = [...arrObj2,...arrObj1];
console.log(arrObjCombined);

//SCENARIO -3: with objects
const obj1 = {
    name:'sudheer',
    age: 28
}
const obj2 = {
    location: 'hyderabad',
    name: 'satish',
    address: {
        street: 'kukatpally',
        city: 'hyderabad'
    }
}
console.log({...obj2, ...obj1});

//SCENARIO - 4: update address street
obj2.address.street = 'KPHB';
console.log({...obj1,...obj2});


//SCENARIO - 5:
const steps = {
    step1: {name:'satish', address: {street:'kphb'}},
    step2: {age:'32'}
}
const step2Updated = {...steps.step2, location:'bangalore'}
console.log({...steps, ...{step2:step2Updated}})



//############### TEMPLATE STRING (backtick) `${}` ################//
//Template String: If you want to combined static data and dynamic data then we can use template string.
// using template string code is very neet and more readiable

const num1 = 20;
const num2 = 30;
console.log('Number 1 : ', num1, ' ; ', 'Number 2 : ', num2);
console.log(`Number 1 : ${num1} ; Number 2: ${num2}`);

//APPROVE, REJECT, CANCEL
//DO YOU WANT TO APPROVE THIS ACCOUNT
const selectedOption = 'CANCEL';
console.log(`DO YOU WANT TO ${selectedOption} THIS ACCOUNT`);
