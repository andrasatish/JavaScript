let test = 'sometHing else!';

//uppercase 
console.log('UPPER CASE : ', test.toUpperCase()); //UPPER CASE :  SOMETHING ELSE!

//lowercase
console.log('Lower CASE : ', test.toLowerCase()); //Lower CASE :  something else!

//string also index starts from 0
//If we want to get specific character we can do with charAt method and index
console.log(test[3]); //e
console.log(test[30]); //undefined
console.log(test.charAt(2)); //m

//To find string length
//.length will works for both arrays and string.
console.log(test.length); //15

//If you want split the string based on some character we need to use split method
//split will convert from string to array
console.log('SPLIT STRING : ',test.split(' ')); //['sometHing', 'else!']
console.log('SPLIT STRING : ',test.split('')); // ['s', 'o', 'm', 'e','t', 'H', 'i', 'n','g', ' ', 'e', 'l','s', 'e', '!']
console.log('SPLIT STRING : ',test.split('e')); //[ 'som', 'tHing ', 'ls', '!' ]

//startsWith used to check whether existing string is starting with specified string or not.
//If exists then will return true otherwise false
console.log('STARTS WITH', test.toUpperCase().startsWith('SOME')); //STARTS WITH true
console.log('ENDS WITH', test.endsWith('else')); //ENDS WITH false

//INCLUDES works with arrays and string.
console.log('INCLUDES : ', test.toLowerCase().includes('hi')); //INCLUDES :  true

//replace -> It is used to replace with new data
console.log(test.replace('Hi','hi')); //something else!
