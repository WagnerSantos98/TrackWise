const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const veiculo = new Schema({
    placa: String,
    renavam: String,
    marca: String,
    modelo: String,
    ano: Number,
    cor: String,
    categoria: String,
    capacidadeCarga: Number,
    status: {
        type: String,
        required: true,
        enum: ['A', 'I', 'E'],
        default: 'A'
    },
    statusManutencao: {
        type: String,
        required: true,
        enum: ['OK', 'A', 'C'], // 'E' = Em dia, 'A' = Agendado, 'C' = Cancelado
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Veiculo', veiculo);
