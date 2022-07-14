const mongoose =  require('mongoose');

    const ProductModel = mongoose.model(
            'Products',
             new mongoose.Schema({
                name: String,
                cantidad: Number,
                img: String,
                precio: Number,
            }));

module.exports = ProductModel;
