const express = require('express')
const Contenedor = require('../contenedor')
const { Router } = express
const fs = require( 'fs' );

const contenedor = new Contenedor('carrito.json')
const carritoRouter = Router()

carritoRouter.get('/',  (req, res) => {
    res.json(contenedor.getAll())
})
carritoRouter.post('/', (req, res) => {
    obj = {...req.body, ...{ products: []} }
    res.json(contenedor.save(obj))
})

carritoRouter.post('/:id/products', (req, res) => {

    const product = req.body
    const carritoID = req.params.id
    const carrito =  contenedor.getByID(carritoID)
    cart.products.push(product)

    const newObj = contenedor.editByBody(carrito, cartID)

    res.json(newObj)
})


module.exports = carritoRouter
