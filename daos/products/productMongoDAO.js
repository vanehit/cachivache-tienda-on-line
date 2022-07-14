const contenedorMongo = require('../../contenedores/contenedorMongo')
const ProductModel = require('../../model/product.model')

class productMongoDAO  extends contenedorMongo {
    constructor () {
        super('mongodb://localhost/products', ProductModel)
    }
}

module.exports = productMongoDAO