const Employee = require('../models/employee');
const employeeCtrl = {};

employeeCtrl.getEmployees = async(req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}

employeeCtrl.getEmployee = async(req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
}

employeeCtrl.createEmployee = async(req, res) => {
    const employee = new Employee({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        id_empleado: req.body.id_empleado,
        tipoContrato: req.body.tipoContrato,
        fechaNacimiento: req.body.fechaNacimiento,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        email: req.body.email
    });
    await employee.save();
    res.json({
        'status': 'success',
        'message': 'Empleado guardado'
    });
};

employeeCtrl.editEmployee = async(req, res) => {
    const { id } = req.params;
    result = await Employee.findByIdAndUpdate(id, req.body, { new: true });
    res.json({
        'status': 'success',
        'message': 'Empleado actualizado',
        'data': result
    });
};

employeeCtrl.deleteEmployee = async(req, res) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'success',
        'message': 'Empleado eliminado'
    })
};

module.exports = employeeCtrl;