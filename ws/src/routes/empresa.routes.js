const express = require('express');
const router = express.Router();
const Empresa = require('../models/empresa');
const Veiculo = require('../models/veiculo');
const util = require('../utils/util');

router.post('/', async (req, res) => {
    try{
        const empresa = await new Empresa(req.body).save();
        res.json({ empresa });
    }catch(err){
        res.json({ error: true, message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try{
        const empresa = await Empresa.findById(req.params.id).select('capa nome endereco.cidade contato');

        /*const horarios = await Horario.find({
            empresaId: req.params.id,
        }).select('dias inicio fim');

        const isOpened = util.isOpened(horarios);*/

        res.json({ error: false, empresa: { ...empresa._doc } });
    }catch(err){
        res.json({ error: true, message: err.message });
    }
});


module.exports = router;