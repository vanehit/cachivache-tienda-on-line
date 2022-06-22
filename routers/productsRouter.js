const express = require('express')
const { Router } = express
const fs = require( 'fs' );

const Contenedor = require('../contenedor');

const contenedor = new Contenedor('products.json');

const productsRouter = Router()



function auth(req, res, next) {
  if('admin' in req.headers) next()
  else {
      res.status(400)
      res.send('No admin')
  }
}
//1) Devuelve todos los productos 
productsRouter.get('/', (req, res) => {
  res.json(contenedor.getAll())
})


productsRouter.post('/', auth, (req, res) => {
  res.json(contenedor.save(req.body))
})

module.exports = productsRouter




