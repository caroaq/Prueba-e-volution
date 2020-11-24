const Employee_Contractor = require('../models/employee_contractor');
const employee_contractorCtrl = {};

employee_contractorCtrl.getEmployees_Contractors = async(req, res) => {
    const employees_contractors = await Employee_Contractor.find();
    res.json(employees_contractors);
}

employee_contractorCtrl.getEmployee_Contractor = async(req, res) => {
    const employee_contractor = await Employee_Contractor.findById(req.params.id);
    res.json(employee_contractor);
}

employee_contractorCtrl.createEmployee_Contractor = async(req, res) => {
    const employee_contractor = new Employee_Contractor({
        nombreContratista: req.body.nombreContratista,
        nombreEmpleado: req.body.nombreEmpleado,
        tiempoTrabajado: req.body.tiempoTrabajado,
        horasFaltantes: req.body.horasFaltantes,
        nombreObra: req.body.nombreObra
    });
    await employee_contractor.save();
    res.json({
        'status': 'success',
        'message': 'Asociación guardada'
    });
}

module.exports = employee_contractorCtrl;