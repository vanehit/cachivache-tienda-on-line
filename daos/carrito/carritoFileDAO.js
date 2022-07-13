const contenedorFile = require('../../contenedores/contenedorFile')

class carritoFileDAO  extends contenedorFile {
    constructor () {
        super('DB_carrito.jason')
    }
}

module.exports = carritoFileDAO