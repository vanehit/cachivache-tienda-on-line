const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

//constructor

class contenedorMongo{

    constructor(uri, model) {
        this.mongo = mongoose;
        this.model = model
        mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        .then(db => console.log('DB is connected'))
        .catch(err => console.log(err));
    }

    async save(obj) {
        const newProduct = new this.model(obj);
        await newProduct.save()

        return newProduct
    }

    async getByID(id){
        return this.model.find({ id: new ObjectId(id) });
    }

    async getAll(id){
        return this.model.find({});
    }

    //update
    async editByID(obj, id) {
        console.log('UPDATE')
        const objUpdated= await this.model.updateOne(
            { _id: new ObjectId(id) },
            { $set: obj  }
        )

        return objUpdated
    }

   
    async DeleteByID(id){
        const userDelete = await this.model.deleteOne({ id: new ObjectId(id) })

        return true
    }

   
}

module.exports = contenedorMongo