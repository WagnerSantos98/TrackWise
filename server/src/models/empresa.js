const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empresa = new Schema({
   nome: String,
   contato: String,
   foto: String,
   capa: String,
   email: String,
   senha: String,
   cnpj: String,
   endereco: {
        rua: String,
        bairro: String,
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
   },
   dataCadastro: {
    type: Date,
    default: Date.now()
   }
});

module.exports = mongoose.model('Empresa', empresa);