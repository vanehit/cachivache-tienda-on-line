const mongoose =  require('mongoose');

    const CarritoModel = mongoose.model(
            'Carrito',
             new mongoose.Schema({
                products: [{ type: String }],
                createdAt: Date
            }));

module.exports = CarritoModel;
