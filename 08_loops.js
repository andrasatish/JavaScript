// for, forEach, for-of, map, for-in 
// loops will works with only arrays and objects (forIn).


//for -> Need to push only even numbers
let even = [];

for (let i = 0; i <= 10; i++) {
    i%2 == 0 ? even.push(i) : '';
}
console.log('EVEN ::: ', even); //[ 0, 2, 4, 6, 8, 10 ]

/** REMAINDER(%) SHOULD BE ZERO
 *
 *   2) 4 (2
 *      4
 *    -------
 *      0 -> REMAINDER
 *    -------
 */



//for -> Need to push only even numbers
let odd = [];

for (let i = 0; i <= 10; i++) {
    i%2 != 0 ? odd.push(i) : '';
}
console.log('ODD ::: ', odd); //[ 1, 3, 5, 7, 9 ]

/** REMAINDER(%) SHOULD BE ZERO
 *
 *   2) 5 (2
 *      4
 *    -------
 *      1 -> REMAINDER
 *    -------
 */


let house = ['cot','tv','fridge','washing machine','car'];
// Index will starts from 0 (3)
// Length will start from 1 (4)
// house[0], house[1]
for(let i = 0; i <= house.length - 1; i++){
    console.log( house, i, '=> ', house[i]); //house[0], house[1], house[2], house[3]
    if(house[i] == 'fridge'){
        console.log('HE IS A MIDDLE CLASS')
    }
    if(house[i] == 'car'){
        console.log('HE IS A RICH')
    }
}
/**
 * OUTPUT:
 *  [ 'cot', 'tv', 'fridge', 'washing machine', 'car' ] 0 =>  cot
    [ 'cot', 'tv', 'fridge', 'washing machine', 'car' ] 1 =>  tv
    [ 'cot', 'tv', 'fridge', 'washing machine', 'car' ] 2 =>  fridge
    HE IS A MIDDLE CLASS
    [ 'cot', 'tv', 'fridge', 'washing machine', 'car' ] 3 =>  washing machine
    [ 'cot', 'tv', 'fridge', 'washing machine', 'car' ] 4 =>  car
    HE IS A RICH
 */


//forEach -> It should work with only arrays and it is used to iterate over array.
// It is also used to update the values based on condition
house = ['cot','tv','fridge','washing machine','car'];
house.forEach((element, elementIndex) => {
    if(element === 'car'){
        console.log('MAINTAINANCE ARE VERY HIGH!')
    }
})

/** 
 * Filter Bajaj and TVS objects based on below Input.
 */
let bikes = [
    {make:'baJaj',location: 'Hyderabad',id:10001},
    {make:'Yamaha',location: 'Secundrabad',id:10002},
    {make:'TVS',location: 'Pune',id:10003},
    {make:'BMW',location: 'Madras',id:10004},
];
let requiredBikes = [];
bikes.forEach((bike)=>{
    if(bike['make'].toLowerCase() === 'bajaj' || bike['make'].toLowerCase() === 'tvs'){
        let obj = {
            make : bike.make,
            location : bike.location
        };
        requiredBikes.push(obj);
    }
});

//for-of -> It should work with only arrays.
house = ['cot','tv','fridge','washing machine','car'];
for(const element of house){
    console.log('FOR-OF EACH ::: ', element);
}

/**
 * FOR - OF SYNTAX
 * for(variable variablename of array)
 */


//for-in -> It should work with only objects.
const person = {
    name : 'sudheer',
    location  : 'hyderabad',
    age : 28
}

for(const key in person){
    console.log('FOR-IN KEY ::: ', key, '-' , person, ' - : ', person[key]);
    
    /**
     *  person details needs to print -> person
     *  If you want to print object keys -> key
     *  If you want to print values -> person[key]
     */
}

