const fs = require('fs')

class contenedorMemory {
    constructor() {
        this.data = []

    }

    save(obj) {
        const id = this.getLastID()
        this.data.push({
            ...obj, ...{ id: id + 1 }
        })
        this.write()
    }

    getByID(id) {
        return this.data.find(p => p.id == id)
    }

    editByID(obj, id) {
        obj [ 'id' ] = id
        const idx = this.getAll().findIndex(p => p.id == id)
        this.data.splice(idx, 1, obj)

        return obj
    }

    getAll() {
        return this.data
    }

    deleteById(id) {
        const idx = this.data.findIndex(p => p.id == id)
        this.data.splice(idx, 1)

        this.write()
    }

    deleteAll() {
        this.data = []

        this.write()
    }

}



module.exports = contenedorMemory