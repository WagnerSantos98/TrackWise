const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('./database');

const app = express();

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.set('port', 8000);

//Rotas
app.use('/veiculo', require('./src/routes/veiculo.routes'));

// Lidar com erros de CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.listen(app.get('port'), () => {
    console.log(`Ws Escutando na porta ${app.get('port')}`);
});