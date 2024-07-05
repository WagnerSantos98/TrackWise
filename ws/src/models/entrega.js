const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrega = new Schema({
    rotaId: {
        type: mongoose.Types.ObjectId,
        ref: 'Rota',
        required: true
    },
    stausEntrega: String,
    dataPrevista: Date,
    dataConclusao: Date
});

module.exports = mongoose.model('Entrega', entrega);