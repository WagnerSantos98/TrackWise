const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const veiculo = new Schema({
    placa: String,
    marca: String,
    modelo: String,
    ano: Number,
    cor: String,
    categoria: String,
    capacidadeCarga: Number,
    status: String,
    statusManutencao: String,
});

module.exports = mongoose.model('Veiculo', veiculo);
