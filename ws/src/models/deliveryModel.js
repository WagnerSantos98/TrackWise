const { Pool } = require('pg');
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

const createTables = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS deliveries (
            id SERIAL PRIMARY KEY,
            pickup_location VARCHAR(255) NOT NULL,
            delivery_location VARCHAR(255) NOT NULL,
            status VARCHAR(50) NOT NULL,
            driver_id INTEGER
        );
    `);
    await pool.query(`
        CREATE TABLE IF NOT EXISTS drivers (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            status VARCHAR(50) NOT NULL
        );
    `);
};

createTables().catch(err => console.error(err));

module.exports = pool;
