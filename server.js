//Imports
const express = require( 'express' );
const cors = require( 'cors' );

const FactoryDAO = require('./daos/index')

//import routers
const productsRouter = require('./routers/productsRouter');
const carritoRouter = require( './routers/carritoRouter' );



//inicializar express
const app = express();

const DAO = FactoryDAO();


//Settings
app.use( cors() );
const PORT = process.env.PORT || 8080;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use("/", express.static("frontend" + __dirname + '/public'));

//Routes

app.use( '/api/products', productsRouter );
app.use( '/api/carrito', carritoRouter );

app.get('/products', async (req, res) => res.send(await DAO.product.getAll()))
app.post('/products', async (req, res) => res.send(await DAO.product.save(req.body)))

app.get('/carrito', async (req, res) => res.send(await DAO.carrito.getAll()))
app.post('/carrito', async (req, res) => res.send(await DAO.carrito.save(req.body)))
  

//Server listening
const server = app.listen( PORT, () => {
    console.log( `Server on PORT: ${ PORT }` );
});
server.on( 'error', err => console.log( 'Error en el server: ' + err ) );

