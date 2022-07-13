//import Daos
const carritoMemoryDAO = require ('./carrito/carritoMemoryDAO')
const productMemoryDAO = require ('./products/productMemoryDAO')
const carritoFileDAO = require ('./carrito/carritoFileDAO')
const productFileDAO = require ('./products/productFileDAO')

const Factory = (typeDB) => {
    if (typeDB == 'memory') {
        return {
            carrito: new carritoMemoryDAO(),
            product: new productMemoryDAO()
        }
    } else if (typeDB == 'file'){
        return {
            carrito: new carritoFileDAO(),
            product: new productFileDAO()
        }
    }
}

module.exports = Factory