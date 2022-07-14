const contenedorMongo = require('../../contenedores/contenedorMongo')
const CarritoModel = require('../../model/carrito.model')

class carritoMongoDAO  extends contenedorMongo {
    constructor () {
        super('mongodb://localhost/products', ProductModel)
    }
}

module.exports = carritoMongoDAO