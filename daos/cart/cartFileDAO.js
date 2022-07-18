const contenedorFile = require('../../contenedores/contenedorFile')

class cartFileDAO  extends contenedorFile {
    constructor () {
        super('DB_carts.json')
    }
}

module.exports = cartFileDAO