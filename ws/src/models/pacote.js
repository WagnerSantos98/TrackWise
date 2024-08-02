const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pacote  = new Schema({
    clienteId:{
        type: mongoose.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    codigoRastreio: String,
    pesoPacote: Number,
    quantidadePacote: Number,
});

module.exports = mongoose.model('Pacote', pacote);