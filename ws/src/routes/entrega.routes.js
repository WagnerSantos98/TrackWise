const express = require('express');
const router = express.Router();
const Pacote = require('../models/pacote');
const ClientePacote = require('../models/relationship/clientePacote');

router.get('/rastrear/:codigo', async (req, res) => {
    try {
        const { codigo } = req.params;

        // Buscar o pacote pelo código
        const pacote = await Pacote.findOne({ codigo })
            .populate('clienteId', 'nome endereco')
            .populate('entregas', 'status dataLocalizacao'); // Verifique se 'entregas' é um campo válido em Pacote

        if (!pacote) {
            return res.json({ error: true, message: 'Pacote não encontrado' });
        }

        // Buscar histórico de entrega, status atual e localização
        const entregas = await ClientePacote.find({ pacoteId: pacote._id })
            .populate('entregaId')
            .sort({ data: -1 }); // Ordenar por data (mais recente primeiro)

        res.json({
            pacote: {
                id: pacote._id,
                codigo: pacote.codigo,
                descricao: pacote.descricao,
                status: pacote.status,
                cliente: pacote.clienteId,
                entregas: entregas.map(entrega => ({
                    status: entrega.status,
                    dataLocalizacao: entrega.entregaId.dataLocalizacao,
                    localizacao: entrega.entregaId.localizacao // Assegure-se de que 'localizacao' está definido
                }))
            }
        });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

module.exports = router;
