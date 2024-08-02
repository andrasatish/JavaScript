//PROMISE -> TO Handle asynchronous data in javascript we can use promise (in order to call api's).
//It has three states: pending, fullfil(success->resolve) and reject
//resolve will get execute when data as success -> 200, 201
//reject will get execute when there is an error and throw an error. -> 401 (Unautherized), 500, 502, 404

console.log('SYNCRONIZED DATA....1');

const successData = new Promise((resolve, reject) => {
    resolve({ data: 'data coming successfully' }); //success
    reject({ statusCode: 401, message: 'Unautherized' }); //reject
})

successData.then((data) => {
    console.log('Success : ', data); //Success :  { data: 'data coming successfully' }
}).catch((err) => {
    console.log('Error : ', err); //Error :  { statusCode: 401, message: 'Unautherized' }
});


const sum = 20 + 40;

console.log('SYNCRONIZED DATA....2', sum);
console.log('SYNCRONIZED DATA....3');

//then is chaning to the promise method and it will return success data
//catch is used to catch the errors.


const login = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'sudheer@gmail.com' && password === 'test123') {
                resolve('LOGIN SUCCESS AND ABLE TO ACCESS WEBPAGES')
            } else {
                reject('401 UNAUTHERIZED AND REDIRECT TO LOGIN PAGE');
            }
        }, 1000);
    })
}

login('sudheer@gmail.com', 'test123').then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

console.log('NOW PROMISE DATA COMING...');