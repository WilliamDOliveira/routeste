



var incrementar = {
    "num":0,
    "add": function(){ return this.num++ }
}

console.log( incrementar );
console.log( incrementar.num );
console.log( incrementar.add() );
console.log( incrementar.add() );
console.log( incrementar.add() );