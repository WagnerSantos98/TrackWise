const mongoose = require('mongoose');

const generateNumPedido_CodPacote = async function(next) {
    const pacote = this;

    // Generate numeroPedido
    if (!pacote.numeroPedido) {
        const lastPacote = await mongoose.model('Pacote').findOne().sort({ numeroPedido: -1 });
        pacote.numeroPedido = lastPacote ? lastPacote.numeroPedido + 1 : 1;
    }

    // Generate codigoPacote
    if (!pacote.codigoPacote) {
        pacote.codigoPacote = `PKG${Date.now()}${Math.floor(Math.random() * 10000)}`;
    }

    next();
};

module.exports = generateNumPedido_CodPacote;
