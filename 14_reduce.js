//SCENARIO-1 : remove duplicats and it should return only unique values

const numbers = [23, 12, 234, 24, 234, 34, 53, 34];

// Syntax
// const temp = arr.reduce((a, c) => {
//     logic
//     return a;
// }, [] / {} / 0)
// return temp;

const uniqueValues = (input) => {
    const unique = input.reduce((a, c) => {
        // console.log('INSIDE REDUCE', a,c);
        if (!a.includes(c)) {
            a.push(c);
        }
        return a;
    }, []);
    return unique;
}

console.log('UNIQUE VALUES :: ', uniqueValues(numbers));


//SCENARIO-2 : sum of numbers [10,20,30] -> 60
const numArr = [10, 20, 30];
const sumOfNumbers = (arr) => {
    const sumOfNums = arr.reduce((a, c) => {
        // console.log('sum of values', a, c)
        // a = a+c;
        a += c;
        return a;
    }, 0);
    return sumOfNums;
}

console.log('SUM OF NUMBERS ::: ', sumOfNumbers(numArr));



//SCENARIO-3 : count each character in the string. 

/**
 * str = "sudheer satish mohannnnn"  => { s: 2, u:1 }
 */

// obj = { name: 'sudheer' }  
// obj.name // If exists : true, If not exists: false

let str = "sudheer satish mohannnnn";

const countEachChar = (str) => {
    const eachCharCount = str.split('').reduce((a, c) => {
        // if(a[c]){
        //     a[c] +=  1;
        // }else{
        //     a[c] = 1;
        // }
        a[c] ? a[c] +=  1 : a[c] = 1;
        return a;
    }, { });
    return eachCharCount;
}
console.log('Each Character Count ::: ', countEachChar(str))


//SCENARIO-4 : Agg count based make wise
const mobileSales = [
    { location: 'Hyderabad', make: 'RealMe', count : 200 },
    { location: 'Hyderabad', make: 'Nokia', count : 300 },
    { location: 'Hyderabad', make: 'GT', count : 100 },
    { location: 'Hyderabad', make: 'Nokia', count : 500 },
    { location: 'Hyderabad', make: 'RealMe', count : 300 },
] 





