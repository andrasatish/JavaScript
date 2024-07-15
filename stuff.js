/** 
 * Filter Bajaj and TVS objects based on below Input.
 */
let bikes = [
    {make:'baJaj',location: 'Hyderabad',id:10001, price: 10000},
    {make:'Yamaha',location: 'Secundrabad',id:10002, price: 14000},
    {make:'TVS',location: 'Pune',id:10003, price: 12000},
    {make:'BMW',location: 'Madras',id:10004, price: 14000},
];

// How many approach's -> filter, forEach
//FILTER -> FIRST APPROACH
const filterBikes = bikes.filter((bikeData)=> bikeData.make.toLowerCase() === 'bajaj' || bikeData.make.toLowerCase() === 'tvs')
console.log('Filter Bikes :: ', filterBikes)


//FOREACH -> ALTERNATIVE SCENARIO
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
console.log('FORACH BIKES :: ', requiredBikes);


//MAP -> It is used to copy of original array and it will gives same numbers of elements. Map works on arrays only.
// It will also take callback function.
// If we have an mulitple lines of operation we should need to return the object.
//SCENARIO - 1 -> CLONE
const _bikes = bikes.map((bike)=>bike);
_bikes.splice(1,1);
console.log('MAP _BIKES ::: ', _bikes, bikes);


//SCENARIO - 2 -> UPDATE : If price lessthan 12000 then needs to increment 40%.
bikes = [
    {make:'baJaj',location: 'Hyderabad',id:10001, price: 10000},
    {make:'Yamaha',location: 'Secundrabad',id:10002, price: 14000},
    {make:'TVS',location: 'Pune',id:10003, price: 12000},
    {make:'BMW',location: 'Madras',id:10004, price: 14000},
];

//We have an two approaches MAP and ForEach
const _bikesData = bikes.map((bike)=> {
    if(bike.price < 12000) {
        const increment = (bike.price * 40)/100;
        bike.price = bike.price + increment;
    }
    return bike;
}) 
console.log('UPDATED MAP :: ', _bikesData)

//With same logic needs to implement with forEach
bikes.forEach((bike, index)=>{
    if(bike.price < 12000){
        const increment = (bike.price * 40)/100;
        bike[index]['price'] = bike.price + increment;
    }
})

console.log('BIKES forEach :: ', bikes);








