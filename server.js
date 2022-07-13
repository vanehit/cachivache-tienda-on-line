//Imports
const express = require( 'express' );
const cors = require( 'cors' );



//import routers
const productsRouter = require('./routers/productsRouter');
const carritoRouter = require( './routers/carritoRouter' );



//inicializar express
const app = express();

const productDao = new productMemoryDAO();
const carritoDao = new carritoMemoryDAO();

//Settings
app.use( cors() );
const PORT = process.env.PORT || 8080;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use("/", express.static("frontend" + __dirname + '/public'));

//Routes

app.use( '/api/products', productsRouter );
app.use( '/api/carrito', carritoRouter );

app.get('/products', (req, res) => res.send(productDao.getAll()))
app.post('/products', (req, res) => res.send(productDao.save(req.body)))

app.get('/carrito', (req, res) => res.send(carritoDao.getAll()))
app.post('/carrito', (req, res) => res.send(carritoDao.save(req.body)))
  

//Server listening
const server = app.listen( PORT, () => {
    console.log( `Server on PORT: ${ PORT }` );
});
server.on( 'error', err => console.log( 'Error en el server: ' + err ) );

