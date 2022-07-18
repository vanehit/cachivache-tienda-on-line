const contenedorMongo = require('../../contenedores/contenedorMongo')
const CartModel = require( '../../model/cart.model' )

class CartMongoDAO extends contenedorMongo {

  constructor() {
    super('mongodb://localhost/productos', CartModel)
  }

}

module.exports = CartMongoDAO;