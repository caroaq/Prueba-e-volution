const mongoose = require('mongoose');
const { Schema } = mongoose;

const Employee_ContractorSchema = new Schema({
    id_contratista: [{ type: Schema.Types.ObjectId, ref: 'Contractor' }],
    id_empleado: [{ type: Schema.Types.ObjectId, ref: 'Employee' }],
    nombreContratista: { type: String, required: true },
    nombreEmpleado: { type: String, required: true },
    tiempoTrabajado: { type: Schema.Types.Number, required: true },
    horasFaltantes: { type: Schema.Types.Number, required: true },
    nombreObra: { type: String, required: true }
})

module.exports = mongoose.model('Employee_Contractor', Employee_ContractorSchema);