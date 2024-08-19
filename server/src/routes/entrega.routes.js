const express = require('express');
const router = express.Router();
const Pacote = require('../models/pacote');

router.get('/entrega', async (req, res) => {
    try {
        const pacotes = await Pacote.find().populate('clienteId', 'nome celular');
        res.json({ pacotes }); // Corrigido aqui
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

module.exports = router;
