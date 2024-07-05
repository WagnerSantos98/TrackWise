const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const combustivel = new Schema({
    veiculoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Veiculo',
        required: true
    },
    dataAbastecimento: Date,
    quantidadeLitros: Number,
    custo: Number
});

module.exports = mongoose.model('Combustivel', combustivel);