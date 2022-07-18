const productsRouter = require( 'express' ).Router();

const FactoryDAO = require( '../daos/index' );
const DAO = FactoryDAO();

//1) Devuelve todos los productos (disponible para usuarios y admins)
productsRouter.get( '/', ( req, res ) => {
  DAO.product.getAll().then( data => res.json( data ) )
});

//2) Devuelve un producto segun su id (disponible para usuarios y admins)
productsRouter.get( '/:id', ( req, res ) => {
  DAO.product.getById( req.params.id ).then( data => res.json( data ) )
});

//3) Recibe y agrega un producto. Devuelve el producto agregado y su ID asignada (disponible para admins)
productsRouter.post( '/', ( req, res ) => {
  if( req.headers.admin ){
    DAO.product.save( req.body ).then( data => res.json( data ) )
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
    DAO.product.editById( req.params.id, req.body )
      .then( data => res.json( data ) )
  } else{
    res.json({
      error: -1,
      desc: 'Ruta y metodo PUT no autorizado.',
    })
  }
});

//5) Elimina un producto segun su id: (disponible para admins)
productsRouter.delete( '/:id', ( req, res ) => {
  if( req.headers.admin ){
    DAO.product.deleteById( req.params.id ).then( data => res.json( data ) )
  }
  else{
    res.json({
      error: -1,
      desc: 'Ruta y metodo DELETE no autorizado.',
    })
  }
});

module.exports = productsRouter;



