const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rota = new Schema({
    veiculoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Veiculo',
        required: true
    },
    motoristaId: {
        type: mongoose.Types.ObjectId,
        ref: 'Motorista',
        required: true
    },
    origem: {
        type: String,
        required: true
    },
    destino: {
        type: String,
        required: true
    },
    distancia: Number,
    duracao: Number,
    pontosParada: [{
        latitude: Number,
        longitude: Number,
        endereco: String
    }]
});

module.exports = mongoose.model('Rota', rota);
