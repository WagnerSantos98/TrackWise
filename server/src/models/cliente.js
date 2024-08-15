const mongoose = require('mongoose');
const encryptPassword = require('../middlewares/clienteMiddleware');
const Schema = mongoose.Schema;

const cliente = new Schema({
    nome: String,
    email: String,
    celular: String,
    cpf: String,
    rg: String,
    dataNascimento: Date,
    senha: String,
    endereco: {
        rua: String,
        numero: String,
        bairro: String,
        cidade: String,
        uf: String,
        cep: String,
        complemento: String,
        latitude: Number,
        longitude: Number,
    },
    status: {
        type: String,
        required: true,
        enum: ['A', 'I'],
        default: 'A'
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
});

// Middleware para criptografar a senha antes de salvar
cliente.pre('save', encryptPassword);

module.exports = mongoose.model('Cliente', cliente);
