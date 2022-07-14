const fs = require('fs')

class contenedorFile {

    constructor(filename) {
        console.log('Init Contenedor')
        this.filename = filename
        this.data = []

        try {
            this.read()
        } catch(e) {
            console.log('No se encontro el file')
            console.log('Creando uno nuevo')
            this.write()
        }
    }

    write() {
        fs.writeFileSync(this.filename, JSON.stringify(this.data))
    }
    read() {
        this.data = JSON.parse(fs.readFileSync(this.filename))
    }

    async getAllPromise() { 
        try { 
            const allContent = await fs.promises.readFile(this.filename, 'utf-8')
            const content = JSON.parse(allContent)

            return content; 
        } catch (error) { 
            console.log(error)
            throw error
        } 
    } 

    async getLastID() {
        const l = this.data.length
        
        if(l < 1) return 0

        return this.data[this.data.length - 1].id
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



module.exports = contenedorFile