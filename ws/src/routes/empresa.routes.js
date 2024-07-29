const express = require('express');
const router = express.Router();
const Empresa = require('../models/empresa');
const Veiculo = require('../models/veiculo');

router.post('/', async (req, res) => {
    try{
        const empresa = await new Empresa(req.body).save();
        res.json({ empresa });
    }catch(err){
        res.json({ error: true, message: err.message });
    }
});

/*router.get('/veiculos/:empresaId', async (req, res) => {
    try{
        const { empresaId } = req.params;
        const veiculos = await Veiculo.find({
            empresaId,
            status: 'A',
        }).select('_id titulo');

        res.json({
            veiculos: veiculos.map((s) => ({ label: s.titulo, value: s._id })),
        });
    }catch(err){
        res.json({ error: true, message: err.message });
    }
});*/

router.get('/id', async (req, res) => {
    try{
        const empresa = await Empresa.findById(req.params.id).select('capa nome endereco.cidade contato');

        res.json({ error: false, empresa: { ...empresa._doc } });
    }catch(err){
        res.json({ error: true, message: err.message });
    }
});


module.exports = router;