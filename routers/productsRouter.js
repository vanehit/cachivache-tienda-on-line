const express = require('express')
const { Router } = express
const fs = require( 'fs' );


const productsRouter = Router()

const FactoryDAO = require( '../daos/index' );
const DAO = FactoryDAO();


function auth(req, res, next) {
  if('admin' in req.headers) next()
  else {
      res.status(400)
      res.send('No admin')
  }
}

//1) Devuelve todos los productos 
productsRouter.get( '/', ( req, res ) => {
  DAO.products.getAll().then( data => res.json( data ) )
});

productsRouter.get( '/:id', ( req, res ) => {
  DAO.products.getById( req.params.id ).then( data => res.json( data ) )
});

productsRouter.post( '/', ( req, res ) => {
  if( req.headers.admin ){
    DAO.products.save( req.body ).then( data => res.json( data ) )
  }
  else{
    res.json({
      error: -1,
      desc: 'Ruta y metodo POST no autorizado.',
    })
  }
});

//4) Edita un producto segun su id: (disponible para admins)
productsRouter.put( '/:id', ( req, res ) => {
  if( req.headers.admin ){
    DAO.products.editById( req.params.id, req.body )
      .then( data => res.json( data ) )
  }
  else{
    res.json({
      error: -1,
      desc: 'Ruta y metodo PUT no autorizado.',
    })
  }
});


//5) Elimina un producto segun su id: (disponible para admins)
productsRouter.delete( '/:id', ( req, res ) => {
  if( req.headers.admin ){
    DAO.products.deleteById( req.params.id ).then( data => res.json( data ) )
  }
  else{
    res.json({
      error: -1,
      desc: 'Ruta y metodo DELETE no autorizado.',
    })
  }
});



module.exports = productsRouter




