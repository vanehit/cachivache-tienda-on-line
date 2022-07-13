const mongoose = require('mongoose');
const productModel = require('../model/model');
const ObjectId = require('mongoose').Types.ObjectId;

//constructor

class contenedorMongo{
    constructor{
        this.mongo = mongoose;
       // const URI = 'mongodb://localhost/products';
        mongoose.connect.(URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        .then(db => console.log('DB is connected'))
        .catch(err => console.log(err));
    }

    async save(obj) {
        const newProduct = new productModel(obj);
        await newProduct.save()

        return newProduct
    }

    getByID(id){
        return productModel.find({ id: new ObjectId(id) });
    }

    getAll(id){
        return productModel.find({});
    }

    //update
    editByID(obj, id) {
        console.log('UPDATE')
        const objUpdated= await productModel.updateOne(
            { _id: new ObjectId(id) },
            { $set: obj  }
        )

        return objUpdated
    }

   
    DeleteByID(id){
        const userDelete = await productModel.deleteOne({ id: new ObjectId(id) })

        return true
    }

   
}

module.exports = contenedorMongo