const express = require('express');
const router = express.Router();

const contractor = require('../controllers/contractor.controller');


router.get('/', contractor.getContractors);
router.get('/:id', contractor.getContractor);
router.post('/', contractor.createContractor);
router.put('/:id', contractor.editContractor);
router.delete('/:id', contractor.deleteContractor);

module.exports = router;