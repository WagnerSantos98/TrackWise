const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pacote  = new Schema({
    clienteId:{
        type: mongoose.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    numeroPedido: Number,
    codigoPacote: String,
    pesoPacote: Number,
    qtdItem: Number,
    status:{
        type: String,
        enum: ['E', 'A', 'C'], // E = Entregue, A = Em Andamento, C = Cancelado
        default: 'A'
    },
    dataCompra:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Pacote', pacote);