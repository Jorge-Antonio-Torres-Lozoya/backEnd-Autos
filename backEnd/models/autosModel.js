const mongoose = require('mongoose')

const autoSchema = mongoose.Schema({
    Marca: {
        type: String,
        required: [true, 'Por favor teclea un valor']
    },
    Modelo: {
        type: String,
        required: [true, 'Por favor teclea un valor']
    },
  Año: {
        type: String,
        required: [true, 'Por favor teclea un valor']
    },
    Color: {
        type: String,
        required: [true, 'Por favor teclea un valor']
    }
    
}, {
    timestamps: true
})

module.exports = mongoose.model('Auto', autoSchema)