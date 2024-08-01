const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
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
clienteSchema.pre('save', async function(next) {
    if (this.isModified('senha') || this.isNew) {
        try {
            const salt = await bcrypt.genSalt(10);
            this.senha = await bcrypt.hash(this.senha, salt);
            next();
        } catch (err) {
            next(err);
        }
    } else {
        return next();
    }
});


module.exports = mongoose.model('Cliente', clienteSchema);
