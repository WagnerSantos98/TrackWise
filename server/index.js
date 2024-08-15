const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('./src/connection/database');

const app = express();

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.set('port', 8000);

//Rotas
app.use('/empresa', require('./src/routes/empresa.routes'));
app.use('/pacote', require('./src/routes/pacote.routes'));
app.use('/cliente', require('./src/routes/cliente.routes'));
app.use('/veiculo', require('./src/routes/veiculo.routes'));
app.use('/motorista', require('./src/routes/motorista.routes'));
app.use('/rota', require('./src/routes/rota.routes'));
app.use('/entrega', require('./src/routes/entrega.routes'));

// Lidar com erros de CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


//Iniciar o server
app.listen(app.get('port'), () => {
    console.log(`Ws Escutando na porta ${app.get('port')}`);
});