let emp = [
    { name: 'test_1' }
];


//######################### PUSH Reusable methods ##########################//
/**
 * 
    const addItems = (source, itemsToAdd) => {
        source.push(itemsToAdd);
    }

    addItems(emp, {name: 'test_2'});
 */

/**
 * const addItems = (source, itemsToAdd) => {
    source.push(...itemsToAdd);
}

    addItems(emp, [{ name: 'test_2' },{ name: 'test_3' }]);
 */

//Array and Object
const addItems = (source, itemsToAdd) => {
    if (typeof itemsToAdd === 'object' && itemsToAdd) {
        if (Array.isArray(itemsToAdd)) {
            itemsToAdd.forEach((item) => {
                source.push(item);
            })
        } else {
            source.push(itemsToAdd);
        }
    } else {
        console.log('Invalid type is not correct!');
    }
}

addItems(emp, [{ name: 'test_2' }, { name: 'test_3' }]);



//######################### POP Reusable methods ##########################//

emp = [{ name: 'test_1' }, { name: 'test_2' }, { name: 'test_3' }];

/**
     const deleteArrayItems = (sourceArray) => {
        sourceArray.pop();
    }

    deleteArrayItems(emp);
 */

const deleteArrayItems = (sourceArray, numberOfItemsToDelete) => {
    numberOfItemsToDelete = +numberOfItemsToDelete;
    if(typeof numberOfItemsToDelete === 'number'){ // string === number
        if(numberOfItemsToDelete){
            for(let i = 1; i <= numberOfItemsToDelete; i++ ){
                sourceArray.pop();
            }
        }else{
            sourceArray.pop();
        }
    } else{
        console.log('INVALID ENTRY!')
    }
}

deleteArrayItems(emp, [2]);
console.log(emp);



