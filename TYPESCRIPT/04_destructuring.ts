const personDetails = { 
    nameDt: 'sudheer',
    age: 28,
    locationDetails: 'Hyd',
    profession: 'Software',
    address: {
        street: 'KPHB',
        pincode: '500085'
    }
}

//Destructuring : To destructure the object
//USE: we can ignore calling the object to destruct the keys
// personDetails.name;
// personDetails.address.street;

const { nameDt, age, locationDetails, profession, address } = personDetails;
console.log(name);
console.log(locationDetails);
console.log(address.street);