const express = require('express');
const router = express.Router();
const Pacote = require('../models/pacote');
const ClientePacote = require('../models/relationship/clientePacote');

router.post('/', async (req, res) => {
    const session = await Pacote.startSession();
    session.startTransaction();
    try {
        // Extrair dados do pacote e clienteId do corpo da solicitação
        const pacoteData = req.body.pacote;
        const clienteId = req.body.clienteId;

        // Criar e salvar o novo pacote
        const pacote = await new Pacote({
            ...pacoteData,
            clienteId
        }).save({ session });

        // Criar e salvar o relacionamento ClientePacote
        const clientePacote = new ClientePacote({
            clientId: clienteId,
            pacoteId: pacote._id,
            status: pacoteData.status || 'A'
        });
        await clientePacote.save({ session });

        // Commitar a transação
        await session.commitTransaction();
        res.json({ pacote, clientePacote });
    } catch (err) {
        // Abortar a transação em caso de erro
        await session.abortTransaction();
        res.json({ error: true, message: err.message });
    } finally {
        // Encerrar a sessão
        session.endSession();
    }
});

module.exports = router;
