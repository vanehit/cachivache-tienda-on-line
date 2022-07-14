const fs = require('fs')

class contenedorMemory {
    
    constructor() {
        this.data = []

    }

    async save(obj) {
        const id = this.getLastID()
        this.data.push({
            ...obj, ...{ id: id + 1 }
        })
        this.write()
    }

    async getByID(id) {
        return this.data.find(p => p.id == id)
    }

    async editByID(obj, id) {
        obj [ 'id' ] = id
        const idx = this.getAll().findIndex(p => p.id == id)
        this.data.splice(idx, 1, obj)

        return obj
    }

    async getAll() {
        return this.data
    }

    async deleteById(id) {
        const idx = this.data.findIndex(p => p.id == id)
        this.data.splice(idx, 1)

        this.write()
    }

    async deleteAll() {
        this.data = []

        this.write()
    }

}



module.exports = contenedorMemory