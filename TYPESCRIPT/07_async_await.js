//async - await => It is used to hold sometime until data is released. once data is released then below code will execute.
const getLoginStatus = () => {
    return 'TEST DATA';
}

async function login() {
    const data = await getLoginStatus();
    console.log('NOW PROMISE DATA COMING...', data)
}

login();
