//If amount morethan 1200000 -> buy a car
//Else Required amount to buy a car : 1200000 - input amount
const buyACar = (amount: number | string, make: string) => {
    amount = +amount;
    if(amount){
        if(amount >= 1200000) {
            console.log(`Elgible to Buy a ${make} car & avaiable amount : ${amount}`);
        }else{
            const requiredAmount = 1200000 - amount;
            console.log(`Required amount to buy a ${make} car : ${requiredAmount}`);
        }
    }
}

buyACar(0, 'AUDI');

//optional parameter -> optional parameter means we can pass or we can ignore.
//optional parameter always at last.
const buyACarOptionalMake = (amount: number | string, make?: string, color?: string) => {
    amount = +amount;
    if(amount){
        if(amount >= 1200000) {
            console.log(`Elgible to Buy a ${make ? make : ''} car & avaiable amount : ${amount}`);
        }else{
            const requiredAmount = 1200000 - amount;
            console.log(`Required amount to buy a ${make ? make : ''} car : ${requiredAmount}`);
        }
    }
}

buyACarOptionalMake(0, 'AUDI');


//DEFAULT PARAMETER -> we can assign some data to the parameter
const buyACarDefault = (amount = 200, make = 'NANO', color: string) => {
    amount = +amount;
    if(amount){
        if(amount >= 1200000) {
            console.log(`Elgible to Buy a ${make} ${color} car & avaiable amount : ${amount}`);
        }else{
            const requiredAmount = 1200000 - amount;
            console.log(`Required amount to buy a ${make} ${color} car : ${requiredAmount}`);
        }
    }
}

buyACarDefault(50000, 'AUDI', 'Black');

