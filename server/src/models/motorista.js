const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const motorista = new Schema({
    nome: String,
    cpf: String,
    carteiraMotorista: String,
    disponibilidade: Boolean,
    endereco: {
        rua: String,
        bairro: String,
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
    },
    contato: String,
    email: String,
    historicoViagens: Array,
    status: {
        type: String,
        required: true,
        enum: ['A', 'I', 'E'],
        default: 'A'
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Motorista', motorista);