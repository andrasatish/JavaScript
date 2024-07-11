const ranks = [101,102,300,105,110];

const filterRank = ranks.filter((rank)=> rank >= 150);
console.log('FILTER RANK :: ', filterRank); // [300]


//Working with objects.
let employees = [
    { name: 'John', location: 'Hyderabad', salary: 20000 },
    { name: 'Suresh', location: 'Secundrabad', salary: 30000 },
    { name: 'Ramesh', location: 'Bangalore', salary: 50000 },
    { name: 'Mukesh', location: 'Chennai', salary: 40000 },
];

employees.push({ name: 'Lokesh', location: 'Pune', salary: 80000 });

//SCENARIO - 1
//How to update values using forEach
//I want to update mukesh location to Delhi
employees.forEach((employee,index)=>{
    const empName = employee.name.toLowerCase();
    if(empName === 'mukesh' || empName === 'lokesh'){
        // console.log('EMPLOYEE :: ', employee, index)
        employees[index]['location'] = 'Delhi';
    }
})

console.log('UPDATED EMPLOYEES :: ', employees);

//SCENARIO - 2
//Need to update each person salary by percentage
//update salary values based on following conditions
//20000 - 30000 -> 20%; 30001 - 45000 -> 10%; >= 45001 -> 5%
employees = [
    { name: 'John', location: 'Hyderabad', salary: 20000 },
    { name: 'Suresh', location: 'Secundrabad', salary: 30000 },
    { name: 'Ramesh', location: 'Bangalore', salary: 50000 },
    { name: 'Mukesh', location: 'Chennai', salary: 40000 },
    { name: 'Lokesh', location: 'Pune', salary: 80000 }
];

employees.forEach((emp,index)=>{
    if(emp.salary >= 20000 && emp.salary <= 30000){
        //20%
        const percent = (emp.salary * 20)/100;
        employees[index]['salary'] = emp.salary + percent;
    }
    if(emp.salary >= 30001 && emp.salary <= 45000){
        //10%
        const percent = (emp.salary * 10)/100;
        employees[index]['salary'] = emp.salary + percent;
    }
    if(emp.salary >= 45001){
        //5%
        const percent = (emp.salary * 5)/100;
        employees[index]['salary'] = emp.salary + percent;
    }
})
console.log('UPDATED SALARY :: ', employees);


//SCENARIO - 3  - Reusable function
//Need to update each person salary by percentage
//update salary values based on following conditions
//20000 - 30000 -> 20%; 30001 - 45000 -> 10%; >= 45001 -> 5%
employees = [    
    { name: 'Rakesh', location: 'Hyderabad', salary: 8000 },
    { name: 'John', location: 'Hyderabad', salary: 80000 },
    { name: 'Suresh', location: 'Secundrabad', salary: 30000 },
    { name: 'Ramesh', location: 'Bangalore', salary: 50000 },
    { name: 'Mukesh', location: 'Chennai', salary: 4000 },
    { name: 'Lokesh', location: 'Pune', salary: 80000 }
];

const calculatePercentage = (salary, percentage, index) => {
    const percent = (salary * percentage)/100;
    employees[index]['salary'] = salary + percent;
}

employees.forEach((emp,index)=>{
    console.log('EMP :: ', emp, ' - ', index)
    if(emp.salary >= 20000 && emp.salary <= 30000){
        calculatePercentage(emp.salary,20,index)
    }
    if(emp.salary >= 30001 && emp.salary <= 45000){
        calculatePercentage(emp.salary,10,index)
    }
    if(emp.salary >= 45001){
        calculatePercentage(emp.salary,5,index)
    }
})

console.log('UPDATED SALARY WITH REUSABLE FUNCTION :: ', employees);