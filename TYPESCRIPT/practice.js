const dt = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Error from server')
    },1000);
})

dt.then((res)=>{
    // console.log('RES', res);
}).catch((err)=>{
    console.log('err', err);
})

console.log('DT :::')

const userDetails = () => {
    return 'ASYNC DATA....'
}

async function getUserDetails(){
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    console.log('DATA....', data);
    console.log('Logged')
}

getUserDetails();

