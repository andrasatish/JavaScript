let fruits = [];

//If you want to find the length of the array we can do with .length
const fruitsLength = fruits.length;
console.log(fruitsLength);

//Array will support multiple types of data (number,string,boolean,array,object)
let houses = ['1BHK','2BHK','3BHK'];

//We can retrieve the items based on Index
console.log(houses[2]); // 3BHK
console.log(houses[0]); // 1BHK
console.log(houses[1]); // 2BHK
console.log(houses[5]); // undefined

houses = [];
console.log(houses);


// ################### ARRAY METHODS ####################
// PUSH, POP, SHIFT, UNSHIFT, INDEXOF, LASTINDEXOF, INCLUDES, REDUCE, SPLICE, SLICE, SORT, JOIN, FINDINDEX


// PUSH -> This method is used to add the items/elements at end of the array.
let states = ['AP'];
states.push('TG');
states.push('MH','DLH');
console.log(states); // [ 'AP', 'TG', 'MH', 'DLH' ]


//POP -> This method is used to delete/remove the last element/item from the array.
states =  [ 'AP', 'TG', 'MH', 'DLH' ];
states.pop();
console.log(states); // [ 'AP', 'TG', 'MH' ];
console.log(states.pop()); // 'MH'


//SHIFT -> This method is used to delete/remove the starting element/item from the array.
states =  [ 'AP', 'TG', 'MH', 'DLH', 'VZG' ];
states.shift();
states.shift();
console.log(states); // [ 'MH', 'DLH', 'VZG' ]
console.log(states.shift()) //['MH']

//UNSHIFT -> This method is used to add the items/elements at starting of the array.
states =  [ 'AP', 'TG', 'MH' ];
states.unshift('DLH','VZG');
console.log(states); // [ 'DLH', 'VZG', 'AP', 'TG', 'MH' ]

//INCLUDES -> This method is used to check whether element is existed or not in the array.
// If it is existed then it will return true otherwise it will return false.
states =  [ 'AP', 'TG', 'MH' ];
console.log(states.includes('AP')); // true
console.log(states.includes('NH')); // false

//INDEXOF -> It will return position of the index.
//If it is existed then it will return the index of element (>=0)
//If it is not-existed then it will return -1
states =  [ 'AP', 'TG', 'MH' ];
console.log(states.indexOf('AP')); //0
console.log(states.indexOf('MH')); //2
console.log(states.indexOf('mh')); //-1
console.log(states.indexOf('zz')); //-1

//LASTINDEXOF -> It will return always at the last index of element
states =  [ 'AP', 'TG', 'MH', 'TG', 'NH', 'TG', 'DG' ];
console.log(states.lastIndexOf('TG')); // 5
console.log(states.lastIndexOf('MH')); // 2
console.log(states.lastIndexOf('mh')); // -1
