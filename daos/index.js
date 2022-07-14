//import Daos
const carritoMemoryDAO = require ('./carrito/carritoMemoryDAO')
const productMemoryDAO = require ('./products/productMemoryDAO')
const carritoFileDAO = require ('./carrito/carritoFileDAO')
const productFileDAO = require ('./products/productFileDAO')
const carritoMongoDAO = require ('./carrito/carritoMongoDAO')
const productMongoDAO = require ('./products/productMongoDAO')


const FactoryDAO = () => {

    const typeDB = process.env.typeDB

    if (typeDB == 'memory') {
        console.log('Generate DAO with memory');

        return {
            carrito: new carritoMemoryDAO(),
            product: new productMemoryDAO()
        }
    } else if (typeDB == 'file'){
        console.log('Generate DAO with file');
        return {
            carrito: new carritoFileDAO(),
            product: new productFileDAO()
        }
    }  else if (typeDB == 'mongo'){
        console.log('Generate DAO with mongo');
        return {
            carrito: new carritoMongoDAO(),
            product: new productMongoDAO()
        }
    }
    
    throw new Error ('typeDB is not found')

}

module.exports = FactoryDAO