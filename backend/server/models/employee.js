const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    id_empleado: { type: String, unique: true, required: true },
    tipoContrato: { type: String, required: true },
    fechaNacimiento: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    email: { type: String, required: true }
})

module.exports = mongoose.model('Employee', EmployeeSchema);