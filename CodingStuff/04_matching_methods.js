
//Finding whether object is existed or not. { make: 'AUDI', cost: 50000, id: 107 }
// let carsData = [
//     { make: 'BMW', cost: 20000, id: 101 },
//     { make: 'SKODA', cost: 40000, id: 102 },
//     { make: 'TATA', cost: 10000, id: 103 },
//     { make: 'NANO', cost: 50000, id: 104 }
//   ];

/**
 * SCENARIO - 1: indexOf, includes, find
 */
// const inputObj = { make: 'AUDI', cost: 50000, id: 107 };

// const verifyObj = (originalArray, inputObj) => {
//     const ids = carsData.map(car => car.id);
//     if(ids.includes(inputObj.id)){ //ids.indexOf(inputObj.id) === -1
//         return 'OBJECT ALREADY EXISTED!';
//     }else{
//         originalArray.push(inputObj);
//         return originalArray;
//     }
// }

// const result = verifyObj(carsData, inputObj);
// console.log('RESULT :: ', result)

/**
 * SCENARIO - 2: find -> 
 * 1. If you want to filter only one item then we need to use find and If we have multiple items with same match always it will return first matching element/item.
 * 2. If item is existed then it will return same item  
 * 3. If it is not existed then it will return undefined
 */
//let carsData = ['BMW', 'SKODA']; -> const find = carsData.find((car)=> car === 'BMW') //BMW or undefined
// let carsData = [
//     { make: 'BMW', cost: 20000, id: 101 },
//     { make: 'SKODA', cost: 40000, id: 102 },
//     { make: 'TATA', cost: 10000, id: 103 },
//     { make: 'AUDI', cost: 10000, id: 103 },
//     { make: 'NANO', cost: 50000, id: 104 }
//   ];
// const inputObj = { make: 'TATA', cost: 10000, id: 108 };

// const verifyObj = (originalArray, inputObj) => {
//     const findObj = originalArray.find((item) => item.id === inputObj.id);
//     if(findObj){ //object or undefined
//         return 'ALREADY EXISTED!'
//     }else{
//         originalArray.push(inputObj)
//     }
// }

// const result = verifyObj(carsData, inputObj);
// console.log('RESULT :: ', result)



/**
 * SCENARIO - 2: findIndex -> 
 * 1. If you want to filter only one index then we need to use findIndex and If we have multiple items with same match always it will return first matching index.
 * 2. If item is existed then it will return first matching index 
 * 3. If it is not existed then it will return -1
 */
// let carsData = [
//     { make: 'BMW', cost: 20000, id: 101 },
//     { make: 'SKODA', cost: 40000, id: 102 },
//     { make: 'TATA', cost: 10000, id: 103 },
//     { make: 'AUDI', cost: 10000, id: 103 },
//     { make: 'NANO', cost: 50000, id: 104 }
//   ];
// const inputObj = { make: 'TATA', cost: 10000, id: 103 };

// const verifyObj = (originalArray, inputObj) => {
//     const searchIndex = originalArray.findIndex((item) => item.id === inputObj.id);
//     console.log('searchIndex', searchIndex)
//     if(searchIndex === -1){ 
//         originalArray.push(inputObj);
//         return originalArray;
//     }else{
//         return 'ALREADY EXISTED!'
//     }
// }

// const result = verifyObj(carsData, inputObj);
// console.log('RESULT :: ', result)





/**
 * SCENARIO - 3: filter -> 
 * 1. If you want to filter items/elements based on some criteria.
 * 2. If criteria match then it will return array of items. 
 * 3. If criteria not matches then it will return empty array
 */
let carsData = [
    { make: 'BMW', cost: 20000, id: 101 },
    { make: 'SKODA', cost: 40000, id: 102 },
    { make: 'TATA', cost: 10000, id: 103 },
    { make: 'AUDI', cost: 10000, id: 103 },
    { make: 'NANO', cost: 50000, id: 104 }
  ];

// If id is 103 needs to get all the records
const searchRes = carsData.filter((car)=> car.id === 108);
console.log(searchRes); //[
//    { make: 'TATA', cost: 10000, id: 103 },
//    { make: 'AUDI', cost: 10000, id: 103 }
//  ]