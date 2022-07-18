//Imports
const express = require( 'express' );
const cors = require( 'cors' );

//import routers
const productsRouter = require('./routers/productsRouter');
const cartRouter = require( './routers/cartRouter' );



//inicializar express
const app = express();


//Settings
app.use( cors() );
const PORT = process.env.PORT || 8080;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use("/", express.static("frontend" + __dirname + '/public'));

//Routes

app.use( '/api/productos', productsRouter );
app.use( '/api/carrito',  cartRouter);
app.get( '/*', (req,res) => {
    res.json({
        error: -2,
        desc: "Ruta no implementada"
    })
} )
//Server listening
const server = app.listen( PORT, () => {
    console.log( `Server on PORT: ${ PORT }` );
});
server.on( 'error', err => console.log( 'Error en el server: ' + err ) );

