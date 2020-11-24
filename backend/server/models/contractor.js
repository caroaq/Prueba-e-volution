const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContractorSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    id_contratista: { type: String, unique: true, required: true },
    fechaNacimiento: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    email: { type: String, required: true },
    empresa: { type: String, required: true }
})

module.exports = mongoose.model('Contractor', ContractorSchema);