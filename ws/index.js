const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.set('port', 8000);

app.listen(app.get('port'), () => {
    console.log(`Servidor WS escutando na porta ${app.get('port')}`);
});

