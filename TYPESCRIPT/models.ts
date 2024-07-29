interface iPerson {
    name: string,
    age: number,
    address: iAddress
}

interface iAddress {
    street: string,
    city: string
}

interface iEmployeeData {
    name: string,
    location: any, // any will accept any type of data (all datatypes)
    id: string | number, //It will accept string or number
    documents?: iDoc[] // ? mark is nothing but optional type
}

interface iDoc {
    name: string,
    extenstion: string
}