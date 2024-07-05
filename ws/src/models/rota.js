const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rota = new Schema({
    veiculoId: [{
        type: mongoose.Types.ObjectId,
        ref: 'Veiculo',
        required: true
    }],
    motoristaId: [{
        type: mongoose.Types.ObjectId,
        ref: 'Motorista',
        required: true
    }],
    origem: String,
    destino: String,
    distancia: Number,
    duracao: Number,
    pontosParada: Array,
});

module.exports = mongoose.model('Rota', rota);