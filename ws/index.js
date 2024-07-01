const express = require('express');
const busboyBodyParser = require('body-parser');
const busboy = require('connect-busboy');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(busboy());
app.use(busboyBodyParser());
app.use(cors());

//Rotas
app.use('/', require('./src/routes/deliveryRoutes'));
app.use('/', require('./src/routes/driverRoutes'));

// Lidar com erros de CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.set('port', 8000);


app.listen(app.get('port'), () => {
    console.log(`Servidor WS escutando na porta ${app.get('port')}`);
});

