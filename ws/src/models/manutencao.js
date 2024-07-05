const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const manutencao = new Schema({
    veiculoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Veiculo',
        required: true
    },
    tipo: String,
    dataAgendada: Date,
    dataRealizada: Date,
    status: String,
    observacoes: String,
});

module.exports = mongoose.model('Manutencao', manutencao);