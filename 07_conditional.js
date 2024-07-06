// if, if-else, switch, ternary operator

//################ CHECK WHETHER HE/SHE ELIGIBLE FOR VOTE OR NOT ############//
// age >= 18 Eligible, age < 18 Not eligible, =, ==, ===

// Check whether parameter is number or not.
// Build our logic

//SCENARIO-1 With consoles
function voteEligible(age) {
    if (typeof (age) == 'number') {
        if (age >= 18) {
            console.log('ELIGIBLE FOR VOTE ');
        } else {
            console.log('NOT ELIGIBLE FOR VOTE');
        }
    } else {
        console.log('INVALID ENTRY')
    }
}

voteEligible(12);


//SCENARIO-2 with return statement
// function voteEligibleCheck(age){
//     let eligibleStatus = '';
//     if(typeof(age) == 'number'){
//         if(age >= 18){
//             eligibleStatus = 'ELIGIBLE FOR VOTE';
//         }else{
//             eligibleStatus = 'NOT ELIGIBLE FOR VOTE';
//         }
//     }else{
//         eligibleStatus = 'INVALID ENTRY';
//     }
//     return eligibleStatus;
// }

// const eligibleCheck = voteEligibleCheck(20);
// console.log(eligibleCheck);


//Ternary operator with only two conditions.
// Ternary operator syntax is ? and :, Before ? mark we need to write condtion.
// Salary Deposite verify based on date
//If it is 30 salary credited otherwise not credited
function salaryDepositeVerify(date) {
    const result = date == 30 ? 'SALARY CREDITED' : 'SALARY NOT CREDITED';
    return result;
}

const verify = salaryDepositeVerify(323);
console.log(verify);


function eligibleForMarried(age) {
    return age >= 18 ? 'ELIGIBLE FOR MARRIAGE' : 'NOT ELIGIBLE FOR MARRIAGE';
}
const marriageVerify = eligibleForMarried(8);
console.log(marriageVerify);

//SWITCH CASE
// 1 - SUNDAY, 2 - MONDAY, 3 - TUESDAY, 4 - WEDNSDAY, 5 - THURSDAY, 6 - FRIDAY, 7 - SATURDAY
function day(date) {
    let day = '';
    switch (date) {
        case 1:
            day = 'SUNDAY';
            break;
        case 2:
            day = 'MONDAY';
            break;
        case 3:
            day = 'TUESDAY';
            break;
        case 4:
            day = 'WEDNSDAY';
            break;
        case 5:
            day = 'THURSDAY';
            break;
        case 6:
            day = 'FRIDAY';
            break;
        case 7:
            day = 'SATURDAY';
            break;
        default:
            day = 'INVALID DAY!';
    }
    return day;
}

const dayWise = day(10);
console.log(dayWise);

//SAVE -> Call SAVE API, SAVE AS DRAFT -> Call SAVE AS DRAFT API and SUBMIT -> Call SUBMIT API
function returnActionType(actionType){
    let APIResult = '';
    switch(actionType){
        case 'save':
        case 'SAVE':
            APIResult = 'Call SAVE API';
            break;
        case 'save_as_draft':
        case 'SAVE_AS_DRAFT':
            APIResult = 'Call Save as Draft API';
            break;
        case 'submit':
        case 'SUBMIT':
            APIResult = 'Call Submit API';
            break;
        default:
            APIResult = 'INVALID API';
    }
    return APIResult;
}
const apiEndPoint = returnActionType('save');
console.log(apiEndPoint)



//ELSE - IF
//If it is more than one or two conditions we can go for else-if
// Based on age it should return age group
// 0 - 5 -> KID, 6-17 -> BOY/GIRL, 18 - 59 -> ADULT, 60 - 100 -> SENIOR CITIZEN, >= 101 -> INVALID AGE

const ageGroup = (age) => {
    let ageGroupData = '';
    if(age <= 5){
        ageGroupData = 'KID';
    }else if(age <= 17){
        ageGroupData = 'BOY/GIRL';
    }else if(age <= 59){
        ageGroupData = 'ADULT';
    }else{
        ageGroupData = 'SENIOR CITIZEN';
    }
    return ageGroupData;
}
console.log(ageGroup(90)) // SENIOR CITIZEN
console.log(ageGroup(9)) // BOY/GIRL