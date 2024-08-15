const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empresaMotorista = new Schema({
    empresaId:{
        type: mongoose.Types.ObjectId,
        ref: 'Empresa',
        required: true
    },
    motoristaId:{
        type: mongoose.Types.ObjectId,
        ref: 'Motorista',
        required: true
    },
    status: {
        type: String,
        enum: ['A', 'I', 'E'],
        default: 'A'
    },
    dataCadastro:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('EmpresaMotorista', empresaMotorista);