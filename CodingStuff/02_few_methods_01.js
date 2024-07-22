//################## MAP #######################//
/**
 * 1. MAP is used to clone/copy of original array.
 * 2. If you want to update existing values we can update.
 * 3. If you want to retrieve particular key values it can possible and if it is an object of array.
 * (IGNORE - IN INTERVIEW) 4. It won't effect anything for origianl array (It should only applicable for strings of array, numbers of array).
 */

/**
 * SCENARIO - 1: Clone the array. (POINT NUMBER 1 & 4 COVERED)
 */
let cars = ['BMW','SKODA','BENZE']; //Same it will works for all types (number, string, object of array)
let _cars = cars.map((car) => car);
_cars.push('TATA');
console.log('MAP COPY OF CARS : ', cars, _cars); //[ 'BMW', 'SKODA', 'BENZE' ] [ 'BMW', 'SKODA', 'BENZE', 'TATA' ]


/**
 * SCENARIO - 2 -> 1: Update existing values. (POINT NUMBER 1 & 2)
 */
let fruits = ['BANANA','GRAPS']; //Same for array of strings & array of numbers
let _fruits = fruits.map((fruit)=> {
    if(fruit === 'GRAPS') {
        return 'ORANGE';
    }else{
        return fruit;
    }
});
console.log('FRUITS UPDATED ONE :::', _fruits, fruits); //[ 'BANANA', 'ORANGE' ] [ 'BANANA', 'GRAPS' ]


/**
 * SCENARIO - 2 -> 2: Update existing values. (POINT NUMBER 1 & 2)
 * Ramesh salary needs to be increament 10%;
 */

let emps = [{name:'john',salary:200},{name:'ramesh',salary:900},{name:'bhunesh',salary:100}];
let updatedEmp = emps.map((emp)=>{
    if(emp.name === 'ramesh'){
        const percent = (emp.salary * 10) / 100;
        Object.assign(emp, { salary : emp.salary + percent});
        return emp; // 900 + 90 => 990
    }else{
        return emp;
    }
})
console.log('EMPLOYEE UPDATED :: ', emps, updatedEmp);



/**
 * SCENARIO - 3 : (If you want to retrieve particular key values it can possible and if it is an object of array)
 */
// I want to retrieve only name data;
const empData = [{name:'john',salary:200},{name:'ramesh',salary:900},{name:'bhunesh',salary:100}];
const _namesList = empData.map((emp) => emp.name);
console.log("NAMES LIST ::: ", _namesList); //[ 'john', 'ramesh', 'bhunesh' ]

const _salaryList = empData.map((emp)=> emp.salary);
console.log("SALARY LIST ", _salaryList); //[ 200, 900, 100 ]

const agesList = empData.map((emp)=> emp.age);
console.log("AGE LIST ", agesList); [ undefined, undefined, undefined ]

/**
 * SCENARIO - 4: Remove duplicates from particular key data using map & set.
 */
const roles = [{role:'HR'},{role:'HR'},{role:'HR'},{role:'ADMIN'}];
//[HR, ADMIN]
const _roles = roles.map((role)=> role.role); // [HR, HR, HR, ADMIN];
const unique = [...new Set(_roles)];
console.log('UNIQUE ROLES :: ', unique); //[ 'HR', 'ADMIN' ]

