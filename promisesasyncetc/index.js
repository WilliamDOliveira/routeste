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


getData()
    .then( data => {  console.log('data: ', data)  })
    .catch( error => {  console.log('error: ', error)  })
