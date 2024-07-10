//FILTER, EVERY, SOME, REDUCE, FIND, FINDINDEX, SET

//FILTER -> It is used to filter out the data.
//PROGRAM : Filter out the string which is having 'na'
let states = ['Andhra','Telangana','Tamilnadu','Chennai'];
// states.includes('na'); //false

// const filterStates = states.filter((state)=>{
//     // console.log('EACH :: ', state); //Each state
//     return state.includes('na');
// })
//NOTE: If we have multiple statements inside arrow function then we need to use return keyword

const filterStates = states.filter((state)=> state.includes('na'));
console.log(filterStates);

// ONE WAY
//Findout if character length >= 8
let filterWords = [];
states.forEach((state)=>{
    if(state.length >= 8) {
        filterWords.push(state);
    }
})

console.log('FILTER WORDS :: ', filterWords); //FILTER WORDS ::  [ 'Telangana', 'Tamilnadu' ]


//ALTERNATIVE WAY
const filterWordsData = states.filter((state)=> state.length >= 8);
console.log('FILTER WORDS DATA :: ', filterWordsData) //FILTER WORDS DATA ::  [ 'Telangana', 'Tamilnadu' ]


//EVERY -> It is used to check each and every element should be match
//It will return true and false
// T + T + T + T => T
//SCENARIO -1 : Condition fail case
states = ['Andhrammmmmm','Telangana','Tamilnadu','Chennai',"jghgjhghgg"];
const checkEachElement = states.every((state)=> {
    // console.log('EACH EVERY ELEMENT :: ', state)
    return state.length >= 8
});
console.log('CHECK EACH ELEMENT :: ', checkEachElement); //CHECK EACH ELEMENT ::  false



//SCENARIO-2 : Condition pass case
states = ['Andhra','Telangana','Tamilnadu','Chennai'];

const checkEveryElement = (arr) => {
    return arr.every((state)=> state.length >= 6)
}

checkEveryElement(states);
console.log('checkEveryElement :: ', checkEveryElement); // checkEveryElement :: true