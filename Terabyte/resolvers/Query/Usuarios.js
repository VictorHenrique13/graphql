const db = require('../../config/db');
module.exports = {
    ola(obj,arg,ctx){
        console.log(ctx.texto)
        return 'ola'

    },
    getUsuarios() {
        return db('usuarios')
    }

}
