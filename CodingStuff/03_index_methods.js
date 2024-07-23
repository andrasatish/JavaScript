//################## INDEX_OF #######################//
/**
 * 1. We can get specific element index from the array.
 * 2. If search element is found then it will return index value (>=0) otherwise
 *    It will return -1.
 * 3. Alway it will give new value (IGNORE IN INTERVIEW).
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
