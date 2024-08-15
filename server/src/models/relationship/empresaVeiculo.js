const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empresaVeiculo = new Schema({
    empresaId: {
        type: mongoose.Types.ObjectId,
        ref: 'Empresa',
        required: true
    },
    veiculoId:{
        type: mongoose.Types.ObjectId,
        ref: 'Veiculo',
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['A', 'I', 'E'],
        default: 'A' // A = Ativo, I = Inativo, E = Excluído
    },
    dataCadastro: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('EmpresaVeiculo', empresaVeiculo);