// let designations = ['hr','admin', 'market'];

// //SCENARIO -1
// /**
//  * If market exists then 'manager' & 'senior staff' needs to be added before market
//  * If market not exists then 'manager' & 'senior staff' needs to be added at last
//  */

// const verify = designations.includes('market');
// if(verify){
//     const marketIndex = designations.indexOf('market');
//     designations.splice(marketIndex,0,'manager','senior staff');
// }else{
//     designations.push('manager','senior staff');
// }

// console.log('DESIGNATIONS BASED ON INCLUDS AND INDEX :: ',designations);



// //SCENARIO -2
// /**
//  * If market exists then 'manager' & 'senior staff' needs to be added before market
//  * If market not exists then 'manager' & 'senior staff' needs to be added at last
//  */
// let designation = ['hr','admin', 'market'];
// const marketIndex = designation.indexOf('market'); // 0 -> false, +ve/-ve -> true
// if(marketIndex >= 0){ // 0 >= 0 -> true
//     designation.splice(marketIndex,0,'manager','senior staff');
// }else{
//     designation.push('manager','senior staff');
// }

// console.log('DESIGNATIONS BASED ON INDEX :: ',designation);

// 2. Insert, delete (first, last and specific position)
//findout john record then need to add one record before john.

////insert object
const arr = [{ name: 'sudheer', lcoation: 'hyd', designation: 'developer', id:1001 },
             { name: 'john', lcoation: 'sec', designation: 'admin', id:1002 },
             { name: 'ramesh', lcoation: 'delhi', designation: 'hr', id:1003 },
            ];

// const insertObj = (arr, reqObject, searchKey) => {
//     const index = (arr.map(obj => obj.name)).indexOf(searchKey);
//     arr.splice(index, 0, reqObject);
//     return arr;
// }
// const reqObj = { name: 'sudheep', location: 'agra', designation: 'recruiter'};
// console.log(insertObj(arr,reqObj, 'john'));

////delete objects -> array of strings
// const deletedNames = ['john','ramesh'];

// const deleteArrObj = (sourceArr, targetArrToDelete) => {
//     targetArrToDelete.forEach((item)=>{
//         const ind = (sourceArr.map((obj)=> obj.name)).indexOf(item);
//         sourceArr.splice(ind,1);
//     })
//     return sourceArr;
// }

// console.log(deleteArrObj(arr,deletedNames));

const deletedNames = [
    { name: 'john', lcoation: 'sec', designation: 'admin', id:1002 },
    { name: 'ramesh', lcoation: 'delhi', designation: 'hr', id:1003 }
];

const deleteArrObj = (sourceArr, targetArrToDelete) => {
    const idsToDelete = targetArrToDelete.map((item)=> item.id);
    idsToDelete.forEach((item)=>{
        const ind = (sourceArr.map((obj)=> obj.id)).indexOf(item);
        sourceArr.splice(ind,1);
    })
    return sourceArr;
}

console.log(deleteArrObj(arr,deletedNames));