const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driver = new Schema({
    nome: String,
    email: String,
    senha: String,
    telefone: String,
    cnh: String,
    veiculo: String,
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Driver', driver);
