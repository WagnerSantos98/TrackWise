const pool = require('../models/driverModel');

const getAllDrivers = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM drivers');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching drivers' });
    }
};

const addDriver = async (req, res) => {
    const { name, status } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO drivers (name, status) VALUES ($1, $2) RETURNING *',
            [name, status]
        );
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error adding driver' });
    }
};

module.exports = { getAllDrivers, addDriver };
