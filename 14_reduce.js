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


//SCENARIO-2 : sum of numbers
const numArr = [10,20,30];