const contenedorFile = require('../../contenedores/contenedorFile')

class productFileDAO  extends contenedorFile {
    constructor () {
        super('DB_products.json')
    }
}

module.exports = productFileDAO