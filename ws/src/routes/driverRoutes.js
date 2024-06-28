const express = require('express');
const { getAllDrivers, addDriver } = require('../controllers/driverController');

const router = express.Router();

router.get('/', getAllDrivers);
router.post('/', addDriver);

module.exports = router;
