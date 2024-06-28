const express = require('express');
const { getAllDeliveries, addDelivery } = require('../controllers/deliveryController');

const router = express.Router();

router.get('/', getAllDeliveries);
router.post('/', addDelivery);

module.exports = router;
