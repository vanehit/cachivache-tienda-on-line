//Imports
const express = require( 'express' );
const cors = require( 'cors' );

//import routers
const productsRouter = require('./routers/productsRouter');
const carritoRouter = require( './routers/carritoRouter' );

//inicializar express
const app = express();

//Settings
app.use( cors() );
const PORT = process.env.PORT || 8080;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use("/", express.static("frontend" + __dirname + '/public'));

//Routes

app.use( '/api/products', productsRouter );
app.use( '/api/carrito', carritoRouter );

//Server listening
const server = app.listen( PORT, () => {
    console.log( `Server on PORT: ${ PORT }` );
});
server.on( 'error', err => console.log( 'Error en el server: ' + err ) );

