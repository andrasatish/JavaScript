let designations = ['hr','admin', 'market'];

//SCENARIO -1
/**
 * If market exists then 'manager' & 'senior staff' needs to be added before market
 * If market not exists then 'manager' & 'senior staff' needs to be added at last
 */

const verify = designations.includes('market');
if(verify){
    const marketIndex = designations.indexOf('market');
    designations.splice(marketIndex,0,'manager','senior staff');
}else{
    designations.push('manager','senior staff');
}

console.log('DESIGNATIONS BASED ON INCLUDS AND INDEX :: ',designations);



//SCENARIO -2
/**
 * If market exists then 'manager' & 'senior staff' needs to be added before market
 * If market not exists then 'manager' & 'senior staff' needs to be added at last
 */
let designation = ['hr','admin', 'market'];
const marketIndex = designation.indexOf('market'); // 0 -> false, +ve/-ve -> true
if(marketIndex >= 0){ // 0 >= 0 -> true
    designation.splice(marketIndex,0,'manager','senior staff');
}else{
    designation.push('manager','senior staff');
}

console.log('DESIGNATIONS BASED ON INDEX :: ',designation);