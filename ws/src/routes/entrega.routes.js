const express = require('express');
const router = express.Router();
const Pacote = require('../models/pacote');
const ClientePacote = require('../models/relationship/clientePacote');



router.get('/rastrear/:codigo', async (req, res) => {
    try {
        const { codigo } = req.params;

        // Buscar o pacote pelo campo correto
        const pacote = await Pacote.findOne({ codigoPacote: codigo })
            .populate('clienteId', 'nome endereco'); // Populate para retornar dados do cliente

        if (!pacote) {
            return res.json({ error: true, message: 'Pacote não encontrado' });
        }

        // Buscar o status atual do pacote no modelo de relacionamento
        const clientePacote = await ClientePacote.findOne({ pacoteId: pacote._id })
            .sort({ data: -1 }); // Ordenar por data (mais recente primeiro)

        res.json({
            pacote: {
                id: pacote._id,
                codigo: pacote.codigoPacote,
                descricao: pacote.descricao,
                status: clientePacote?.status || pacote.status, // Usar o status do relacionamento ou do pacote
                cliente: pacote.clienteId,
            }
        });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

module.exports = router;

