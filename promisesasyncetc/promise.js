// const request = require('request');

// https://github.com/dsheiko/jscodesniffer 

// let getData = function(){
//     return new Promise( (resolve, reject)=>{
//         request( 'http://echo.jsontest.com/key/value/one/two' , ( err, res, body )=>{
//             if( err ){
//                 reject( err )
//             }
//             resolve( body )
//         } );
//     } )
// }

// getData()
// .then( data => console.log('success[data]: ', data) )
// .catch( err => console.log('error[err]: ', err) )

// ============================================

// let getData = function(){
//     return new Promise( (resolve, reject)=>{
//         request( 'http://echo.jsontest.com/key/value/one/two' , ( err, res, body )=>{
//             if( err ){
//                 reject( err )
//             }
//             resolve( body )
//         } ).then( () => {
//             resolve( ' --everbody-- ' );
//         });
//     } )
// }


// async function call(){
//     let data = await getData();
//     return console.log('data: ', data);    
// }

// call();


async function getUser(){
    return new Promise( (resolve, reject) => {
        setTimeout( ()=>{ resolve( {'name':'William Developer'} ) }, 1000 );
    } )
}

async function getAddress(){
    return new Promise( (resolve, reject) => {
        reject( true )
        setTimeout( ()=>{ resolve( {'address':'Kami island'} ) }, 1000 );
    } )
}

async function getProfile(){
    try{
        let user = await getUser();
        let address = await getAddress();
        console.log('user: ', user);
        console.log('address: ', address);
    }catch(e){
        console.log('deu ruim' + e);
    }
}

getProfile();

// getUser().then( s => console.log(s) )
// getAddress().then( s => console.log(s) )