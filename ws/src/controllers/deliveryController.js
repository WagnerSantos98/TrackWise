const pool = require('../models/deliveryModel');

const getAllDeliveries = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM deliveries');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching deliveries' });
    }
};

const addDelivery = async (req, res) => {
    const { pickup_location, delivery_location, status, driver_id } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO deliveries (pickup_location, delivery_location, status, driver_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [pickup_location, delivery_location, status, driver_id]
        );
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error adding delivery' });
    }
};

module.exports = { getAllDeliveries, addDelivery };
