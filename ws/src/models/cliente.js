const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema({
    contato:{
        nome: String,
        email: String,
        celular: String,
        cpf: String,
        rg: String,
    },
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
    },
    status:{
        type: String,
        required: true,
        enum: ['A', 'I'],
        default: 'A'
    },
    dataCadastro:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Cliente', cliente);