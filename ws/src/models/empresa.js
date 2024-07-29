const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empresa = new Schema({
   nome: String,
   foto: String,
   capa: String,
   email: String,
   senha: String,
   cnpj: String,
   endereco: {
        rua: String,
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pais: String,
   },
   dataCadastro: {
    type: Date,
    default: Date.now()
   }
});

module.exports = mongoose.model('Empresa', empresa);