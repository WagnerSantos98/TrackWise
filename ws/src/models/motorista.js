const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const motorista = new Schema({
    nome: String,
    cpf: String,
    carteiraMotorista: String,
    disponibilidade: Boolean,
    endereco: {
        rua: String,
        numero: String,
        cidade: String,
        uf: String,
        cep: String,
        bairro: String,
    },
    telefone: String,
    email: String,
    placa: String,
    historicoViagens: Array,
    status: String,
    dataCadastro: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Motorista', motorista);