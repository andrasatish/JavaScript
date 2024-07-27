//=============== SYNCHRONOUS ==============//
/**
 * Javascript executes line by line so it is called synhronous.
 */

console.log('Test_1');
console.log('Test_2');

/**
 * Settimeout is an asynchrous that means synchronous code will execute first then asynchrous code will execute at last ex: setTimeout.
 */
setTimeout(()=>{
        console.log('Test_5');
}, 3000);

console.log('Test_3');


setTimeout(()=>{
    console.log('Test_4');
}, 1000);