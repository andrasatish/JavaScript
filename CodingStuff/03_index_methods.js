//################## INDEX_OF #######################//
/**
 * 1. We can get specific element index from the array.
 * 2. If search element is found then it will return index value (>=0) otherwise
 *    It will return -1.
 * 3. indexOf will always works with number, strings, boolean.
 * 4. Alway it will give new value (IGNORE IN INTERVIEW).
 */

let cars = ['BMW','SKODA','BENZE'];

/**
 * SCENARIO -1 : If TATA not exists in cars needs to add in existing array otherwise it will return search result.
 */

const checkCarExists = (arr, searchText) => {
    const result = arr.indexOf(searchText);
    let searchResult = null;
    if(result >= 0){
        searchResult = 'SEARCH RESULTS ALREADY PRESENT';
    }else{
        arr.push(searchText);
        searchResult = 'CAR ADDED -> '+ searchText + ' : '+ arr;
    }
    return searchResult;
}

const result = checkCarExists(cars,'TATA');
console.log('RESULT :: ', result)

/**
 * SCENARIO - 2: Check whether id 107 exists or not.
 * If it exists print all carsList
 * Not exists add following object { make : 'AUDI', cost: 50000, id: 107 } to carsList
 */
const carsList = [
    { make : 'BMW', cost: 20000, id: 101 },
    { make : 'SKODA', cost: 40000, id: 102 },
    { make : 'TATA', cost: 10000, id: 103 },
    { make : 'NANO', cost: 50000, id: 104 }
];

const verifyObj = { make : 'AUDI', cost: 50000, id: 107 };
// carsList.indexOf({ make : 'AUDI', cost: 50000, id: 107 }); // we can't check like this (with the object)

const idsList = carsList.map((car)=> car.id);
if(idsList.indexOf(verifyObj.id) === -1){
    carsList.push(verifyObj);
}
console.log(carsList);

/**
 * SCENARIO - 3: update id 107 cost to 400000.
 */

const carsData = [
    { make: 'BMW', cost: 20000, id: 101 },
    { make: 'SKODA', cost: 40000, id: 102 },
    { make: 'TATA', cost: 10000, id: 103 },
    { make: 'NANO', cost: 50000, id: 104 },
    { make: 'AUDI', cost: 50000, id: 107 }
  ];

//   carsData[2]['cost'] = 4000;

  const updateIDValue = (arr, updateObj) => {
        //Identify 107 exists or not
        const ids = arr.map((element)=> element.id);
        const index = ids.indexOf(updateObj.id);
        if( index >= 0) {
            carsData[index]['cost'] = updateObj.cost;
        }else{
            console.log('NOT EXIST');
        }
  }

  const updateObj = {
    id: 107,
    cost: 400000
  }
  updateIDValue(carsData, updateObj);
  console.log(carsData);