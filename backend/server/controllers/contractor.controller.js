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
    const contractor = new Contractor(req.body);
    await contractor.save();
    res.json({
        'status': 'success',
        'message': 'Contratista guardado'
    });
};

contractorCtrl.editContractor = async(req, res) => {
    const { id } = req.params;
    await Contractor.findByIdAndUpdate(id, req.body, { new: true });
    res.json({
        'status': 'success',
        'message': 'Contratista actualizado',
        'data': result
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