const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const deliveryRoutes = require('./src/routes/deliveryRoutes');
const driverRoutes = require('./src/routes/driverRoutes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/deliveries', deliveryRoutes);
app.use('/api/drivers', driverRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
