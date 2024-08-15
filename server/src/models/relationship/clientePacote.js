const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientePacote = new Schema({
    clientId:{
        type: mongoose.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    pacoteId:{
        type: mongoose.Types.ObjectId,
        ref: 'Pacote',
        required: true
    },
    status:{
        type: String,
        enum: ['E', 'A', 'C'], // E = Entregue, A = Em Andamento, C = Cancelado
        default: 'A'
    },
    dataCadastro:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('ClientePacote', clientePacote);