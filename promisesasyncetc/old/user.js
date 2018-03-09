var User =  function( name, role = null ){
    this.name = name;
    this.role = role;
}

User.prototype.roles = [
    { "Admin"   : "3000" },
    { "Manager" : "2000" },
    { "Clerk"   : "1000" }
];

User.prototype.sal = function( role = '' ){
    if( this.role ){
        role = this.role;
    }
    console.log('role: ', role);
    
    var valSalario = 0;
    this.roles.forEach( objects => { // Percorro o array
        for( var [key, val] of Object.entries( objects ) ){// Valido os objetos
            if( key == role )
                valSalario = val;// Atribuo valor ao salário
        }
    });
    return valSalario;//Efetuo o retorno
};

User.prototype.calcSal = function( horasExtras ){
    return horasExtras * 20 + parseFloat(this.sal);
};

var king = {};
king = new User('King','gg');
king.sal = king.sal('Admin');

console.log('king: ', king.calcSal(10));