const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const horario = new Schema({
    empresaId:{
        type: mongoose.Types.ObjectId,
        ref: 'Empresa',
        required: true
    },
    veiculos:{
        type: mongoose.Types.ObjectId,
        ref: 'Veiculo',
        required: true
    },
    motoristas:{
        type: mongoose.Types.ObjectId,
        ref: 'Motorista',
        required: true
    },
    dias:{
        type: [Number]
    },
    inicio: Date,
    fim: Date,
    dataCadastro:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Horario', horario);