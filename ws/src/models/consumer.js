const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const consumer = new Schema({
    nome: String,
    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pais: String
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Consumer', consumer);
