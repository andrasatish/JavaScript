let userDetails = {
    name : 'sudheer',
    age: 28,
    location: 'Hyderabad',
    address: {
        street: '9th Phase',
        area: 'Kukatpally'
    }
};

//How to retreive the values of particular key
console.log(userDetails.address);
console.log(userDetails.location);
console.log(userDetails.age);


userDetails = {};
//Adding key value pair to the object using dot notation - userDetails
userDetails.name = 'Satish';
userDetails.age = 33;
userDetails.address = {
        location:'Chennai',
        street:'Ganesh Nagar'
}
console.log(userDetails);



userDetails = {};
//Adding key value pair to the object using square notation - userDetails
userDetails['name'] = 'Mohan';
userDetails['age'] = 60;
userDetails['address'] = {
    location: 'Mandapeta',
    street: 'Alamuru Road'
}
console.log(userDetails);


//update existing values
userDetails.name = 'Malleswari';
userDetails['age'] = 54;
userDetails.address['location'] = 'Dulla';
userDetails['address']['street'] = 'Erra Coloni';
console.log(userDetails);

//delete particular key value pair -> delete keyword used to delete existing key values in the object.
//delete will work only with objects.
delete userDetails.name;
console.log(userDetails);



//Adding key value pair with object using object.assing. Object.assign is the predefined javascript method
userDetails = {};
employeeDetails = {};
Object.assign(userDetails,{ age: 28, location: 'Hyderabad'});
console.log(userDetails);

Object.assign(userDetails,{
    address: {
        street: '9th Phase',
        area: 'Kukatpally'
    },
    name:'Sudheer'
});
console.log(userDetails);

const obj = {
    name:'Sudheer',
    age : 28,
    gender: 'Male',
    address: {
        street: '9th Phase',
        area: 'Kukatpally'
    },
};

Object.assign(employeeDetails,obj);
console.log(employeeDetails);



//How to know keys and values count in the Object
//### KEYS retreive
const employeeKeys = Object.keys(employeeDetails);
console.log(employeeKeys); //[ 'name', 'age', 'gender', 'address' ]

const employeeAddressKeys = Object.keys(employeeDetails.address);
console.log(employeeAddressKeys); //[ 'street', 'area' ]

//### VALUES retreive
const employeeValues = Object.values(employeeDetails);
console.log(employeeValues); //[ 'Sudheer', 28, 'Male', { street: '9th Phase', area: 'Kukatpally' } ]

const employeeAddressValues = Object.values(employeeDetails.address);
console.log(employeeAddressValues); //[ '9th Phase', 'Kukatpally' ]


//How to find if object is empty or not?
let personDetails = {name:'sudheer', age: 28, location: {street:'alamuru'}};
personDetails = {};
console.log(Object.keys(personDetails).length); // 0
//NOTE: If we get 0 then object should be empty, otherthan 0 then object have some data.


//Check if object have specific key or not.
let student = { name:'sudheer', rollNumber: 20, address: { street:'mandapeta' } };
console.log(student.name); //sudheer
console.log(student.rollNumber) //20
console.log(student.class); // undefined
console.log(student.keys); // undefined
console.log(student.address.street); // mandapeta

// #hasOwnProperty() -> It is an predefined method which tell key is existed or not in the object.
// If key is existed then it will give true, otherwise it will give/return false.
console.log(student.hasOwnProperty('name')); //true
console.log(student.hasOwnProperty('marks')); //false
console.log(student.address.hasOwnProperty('street')); //true


