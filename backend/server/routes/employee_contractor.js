const express = require('express');
const router = express.Router();

const employee_contractor = require('../controllers/employee_contractor.controller');

router.get('/', employee_contractor.getEmployees_Contractors);
router.get('/:id', employee_contractor.getEmployee_Contractor);
router.post('/', employee_contractor.createEmployee_Contractor);

module.exports = router;