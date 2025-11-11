var bd = require('mysql');
var conexionBD = bd.createConnection({
        server: 'BEAST',
        authentication: {
            type: 'default',
            options: {
                userName: "sa",
                password: "Contraseña1!"
            } 
        }
    })


let anyadirPlato = document.getElementById('agregarPlato');
anyadirPlato.addEventListener('click', function(){

});
