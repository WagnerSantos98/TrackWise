const mongoose = require('mongoose');

const generateNumPedido_CodPacote = async function(){
    const pacote = this;

    if(!pacote.numeroPedido){
        const lastPacote = await mongoose.model('Pacote').findOne().sort({ numeroPedido: -1 });
        pacote.numeroPedido = lastPacote ? lastPacote.numeroPedido + 1 : 1;
    }

    if(!pacote.codigoPedido){
        pacote.codigoPedido = `PKG${Date.now()}${Math.floor(Math.random() * 10000)}`;
    }

    next();
}

module.exports = generateNumPedido_CodPacote;