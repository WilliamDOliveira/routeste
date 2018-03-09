// function sayHello(){
//     return 'Hello world'
// }

const request = require( 'request' );

let getData = () => {
    return new Promise( ( resolve, reject ) =>{
        request("http://echo.jsontest.com/key/value/one/two", ( err, res, body) => {
            if( err ){
                reject( err )
            }
            resolve( body )
        })
    });
}

async function main(){
    const json = await getData();
    return console.log( json );
}


// async function main(){
//     const hello = await sayHello();
//     return console.log( hello );
// }

main();
console.log('Finished');