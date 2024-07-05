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
// PUSH, POP, SHIFT, UNSHIFT, INDEXOF, LASTINDEXOF, INCLUDES, SPLICE, SLICE, SORT, JOIN, REVERSE, REDUCE, FINDINDEX


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


//SORT -> Sort is used to sort the array which is in ascending order.
states =  [ 'AP', 'TZ', 'MH', 'TG', 'NH', 'TA', 'DG' ];
states.sort();
console.log(states); //[ 'AP', 'DG', 'MH', 'NH', 'TA', 'TG', 'TZ'] -> ASCENDING ORDER

states = [400,112,21,64];
states.sort();
console.log(states); //[ 112, 21, 400, 64 ] -> unexpected result

//REVERSE -> It will reverse the array.
states =  [ 'AP', 'TZ', 'MH', 'TG', 'NH', 'TA', 'DG' ];
states.reverse();
console.log(states); //[ 'DG', 'TA', 'NH', 'TG', 'MH', 'TZ', 'AP']

//SORT + REVERSE : TO GET DESCENDING ORDER
states =  [ 'AP', 'TZ', 'MH', 'TG', 'NH', 'TA', 'DG' ];
states.sort().reverse(); // Descending order
console.log(states); //[ 'TZ', 'TG', 'TA', 'NH', 'MH', 'DG','AP']


//JOIN -> used to join the elements with specific character and it will convert from array to string.
states =  [ 'AP', 'TZ', 'MH', 'TG', 'NH', 'TA', 'DG' ];
console.log(states.join('-')); // 'AP-TZ-MH-TG-NH-TA-DG'

//CONTACT
const states1 = ['AP','TZ'];
const state2 = ['BZ'];
console.log(states1.concat(state2)); //[ 'AP', 'TZ', 'BZ' ]


//SLICE -> It will give portion the array elements and it won't change any original array and It will take two optional parameters.
states =  [ 'AP', 'TZ', 'MH', 'TG', 'NH', 'TA', 'DG' ];
console.log(states.slice(2,5)); //[ 'MH', 'TG', 'NH' ]
console.log(states.slice(3,7)) //[ 'TG', 'NH', 'TA', 'DG' ]
console.log(states.slice(5,70)) //[ 'TA', 'DG' ]
console.log(states.slice(50,70)) //[]
console.log(states.slice()); //[ 'AP', 'TZ', 'MH', 'TG', 'NH', 'TA', 'DG' ]
console.log(states.slice(3)) //['TG', 'NH', 'TA', 'DG' ]
console.log(states); //[ 'AP', 'TZ', 'MH', 'TG', 'NH', 'TA', 'DG' ]


//SPLICE -> It is used to insert the elements, update the elements and delete the elements from the array. So it will change the original array.
//It will take three parameters those are start index , delete count, how many elements want to insert. delete count and insert elements are optional parameters.
//SCENARIO-1
states =  [ 'AP', 'TZ', 'MH', 'TG', 'NH', 'TA', 'DG' ];
states.splice(); 
console.log(states); // [ 'AP', 'TZ', 'MH', 'TG', 'NH', 'TA', 'DG' ]

//SCENARIO-2
//If you want portion the array and it will change the original array
console.log(states.splice(4)); // [ 'NH', 'TA', 'DG' ] -> It will give deleted items
console.log(states); //[ 'AP', 'TZ', 'MH', 'TG']


//SCENARIO-3
//If you want to delete (2nd parameter needs to specify)
states =  [ 'AP', 'TZ', 'MH', 'TG', 'NH', 'TA', 'DG' ];
states.splice(2,4); // 2 means index position from the starting. 4 means how many elements needs to be delete.
console.log(states); //[ 'AP', 'TZ', 'DG' ]

//SCENARIO-4
states =  [ 'AP', 'TZ', 'MH', 'TG', 'NH', 'TA', 'DG' ];
states.splice(3,1);
console.log(states); //[ 'AP', 'TZ', 'MH', 'NH', 'TA', 'DG' ]

//SCENARIO-5
states =  [ 'AP', 'TZ', 'MH', 'TG', 'NH', 'TA', 'DG' ];
states.splice(3,0);
console.log(states); //[ 'AP', 'TZ', 'MH', 'NH', 'TA', 'DG' ]

//SCENARIO-6
// If you want to add elements to the array
states =  [ 'AP', 'TZ', 'MH', 'TG', 'NH', 'TA', 'DG' ];
states.splice(3,0,'GH');
console.log(states); //[ 'AP', 'TZ', 'MH', 'GH', 'TG', 'NH', 'TA', 'DG' ]

//SCENARIO-6
// If you want to update the element to the array
states =  [ 'AP', 'TZ', 'MH', 'TG', 'NH', 'TA', 'DG' ];
states.splice(3,1,'GH');
console.log(states); //[ 'AP', 'TZ', 'MH', 'GH', 'NH', 'TA', 'DG' ]

states =  [ 'AP', 'TZ', 'MH', 'TG', 'NH', 'TA', 'DG' ];
states.splice(3,1,'GH','BH');
console.log(states); //[ 'AP', 'TZ', 'MH', 'GH', 'BH', 'NH', 'TA', 'DG' ]


//FILTER, EVERY, SOME, REDUCE, FINDINDEX, SET