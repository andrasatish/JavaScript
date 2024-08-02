//shallow copy -> same memory it will point to same address; 
//so if we change anything in the copied object then both objects(copied & original) will modify.

//SCENARIO - 1: Object.assign, obj
const obj = { age: 20 } 
const copy_obj = Object.assign(obj); //obj 

copy_obj.name = 'sudheer';
console.log('object assign : ', obj,copy_obj); // { age: 20, name: 'sudheer' } { age: 20, name: 'sudheer' }


//SCENARIO - 2: ...(spread operator) -> First level it won't effect, nested level data will be changed.
const person = {
    name: 'sudheer',
    address: {
        location: 'hyderabad',
        area: 'Kukatpally'
    }
}
const copy_person = {...person};
copy_person.name = 'satish';
copy_person.address.location = 'chennai';
console.log('...', person,copy_person);

/**
 * OUTPUT:
 * PERSON: 
 * {
  name: 'sudheer',
  address: { location: 'chennai', area: 'Kukatpally' }
} 
 * 
 */

// SCENARIO : 3 with arrays
const arr = [12];
const copy_arr = arr; //[12]
copy_arr.push(323); //[12,323]
console.log(arr,copy_arr); //[ 12, 323 ] [ 12, 323 ]


//DEEP_COPY: It will copy the data and if we change copied data it won't effect anything with the original data.
// Generally for DEEP_COPY we can use JSON.parse(JSON.stringfy()) and loadash technic.
//JSON.stringify will convert any type of data to string data.
//JSON.parse will convert to the original data type.
//It will create unique address's in the memory.

//SCENARIO - 4: OBJECT
const personDeepCopy = {
    name: 'sudheer',
    address: {
        location: 'hyderabad',
        area: 'Kukatpally'
    }
}
const copy_personDeepCopy = JSON.parse(JSON.stringify(personDeepCopy));

copy_personDeepCopy.name = 'satish';
copy_personDeepCopy.address.location = 'chennai';

console.log(personDeepCopy, copy_personDeepCopy);


//SCENARIO - 5: ARRAY
const emp = [{name:'sudheer',age:28,address:{location:'hyderabad'}},{name:'satish',age:33,address:{location:'chennai'}}];

const copy_emp = JSON.parse(JSON.stringify(emp));
copy_emp.forEach((employee,index)=>{
    if(employee.name === 'satish'){
        copy_emp.splice(index,1);
    }
})
console.log(emp, copy_emp);