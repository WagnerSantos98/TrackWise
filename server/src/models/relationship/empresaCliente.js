const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empresaCliente = new Schema({
    empresaId:{
        type: mongoose.Types.ObjectId,
        ref: 'Empresa',
        required: true
    },
    clienteId:{
        type: mongoose.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    status: {
        type: String,
        enum: ['A', 'I', 'E'],
        default: 'A' // A = Ativo, I = Inativo, E = Excluído
    },
    dataCadastro:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('EmpresaCliente', empresaCliente);