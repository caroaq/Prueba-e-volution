const Contractor = require('../models/contractor');
const contractorCtrl = {};

contractorCtrl.getContractors = async(req, res) => {
    const contractors = await Contractor.find();
    res.json(contractors);
}

contractorCtrl.getContractor = async(req, res) => {
    const contractor = await Contractor.findById(req.params.id);
    res.json(contractor);
}

contractorCtrl.createContractor = async(req, res) => {
    const contractor = new Contractor({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        id_contratista: req.body.id_contratista,
        fechaNacimiento: req.body.fechaNacimiento,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        email: req.body.email,
        empresa: req.body.empresa
    });
    await contractor.save();
    res.json({
        'status': 'success',
        'message': 'Contratista guardado'
    });
};

contractorCtrl.editContractor = async(req, res) => {
    const { id } = req.params;
    result = await Contractor.findByIdAndUpdate(id, req.body, { new: true });
    res.json({
        'status': 'success',
        'message': 'Contratista actualizado',
        'data': result

    }).catch((error) => {
        console.log(error.message)
    });
};

contractorCtrl.deleteContractor = async(req, res) => {
    await Contractor.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'success',
        'message': 'Contratista eliminado'
    })
};

module.exports = contractorCtrl;