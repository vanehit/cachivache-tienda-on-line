const express = require('express')
const { Router } = express
const fs = require( 'fs' );

const FactoryDAO = require('../daos/index');
const DAO = FactoryDAO();

const carritoRouter = Router()

//1) crea un carrito y devuelve su id:
carritoRouter.post( '/', ( req, res ) => {
    //a)creamos el carrito:
    const carrito = { productos: [] };
    DAO.carrito.save( carrito ).then( data => res.json( data ) )
  });
  
  //2) vacia un carrito y lo elimina por su id:
  carritoRouter.delete( '/:id', ( req, res ) => {
    DAO.carrito.DeleteByID( req.params.id ).then( data => res.json( data ) );
  });
  
  //3) devuelve el listado de productos presentes en el carrito segun el id del carrito:
  carritoRouter.get( '/:id/products', ( req, res ) => {
    DAO.carrito.getByID( req.params.id )
      .then( data => res.json( data ) )
  });
  
  //4) incorpora un producto al carrito (encuentra al carrito por su ID y luego agrega al producto por el ID del producto)
  carritoRouter.post( '/:id/products', ( req, res ) => {
    if( process.env.typeDB == 'mongo' ){
      DAO.carrito.addToCarrito( req.params.id, req.body )
      .then( data => res.json( data ) )
    } else {
      DAO.carrito.getByID( req.params.id )
        .then( carrito => {
          carrito.products.push( req.body );
          DAO.carrito.editByID( req.params.id, carrito );
          res.json( carrito )
        } );
    }
  });
  
  //5) elimina un producto del carrito segun el id del producto:
  carritoRouter.delete( '/:id/products/:id_prod', ( req, res ) => {
    if( process.env.typeDB == 'mongo' ){
      DAO.carrito.delFromCarrito( req.params.id, req.params.id_prod )
        .then( data => res.json( data ) )
    } else {
      DAO.carrito.getByID( req.params.id )
        .then( carrito => {
          const idx = carrito.products.findIndex( p => p.id == req.params.id_prod )
          if( idx === -1 ){
            res.json({ error: "El producto que desea eliminar no existe." })
          } else {
            carrito.products.splice( idx, 1 );
            DAO.carrito.editByID( req.params.id, carrito );
            res.json( carrito );
          }
        } )
    }
    
  });
module.exports = carritoRouter
