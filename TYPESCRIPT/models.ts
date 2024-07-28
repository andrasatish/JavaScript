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
    location: string,
    id: number,
    documents: iDoc[]
}

interface iDoc {
    name: string,
    extenstion: string
}