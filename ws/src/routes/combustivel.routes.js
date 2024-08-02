const express = require('express');
const router = express.Router();
const Combustivel = require('../models/combustivel');

//Criar novo registro  de combustível
router.post('/', async (req, res) => {
    try{
        const novoCombustivel = await Combustivel(req.body).save();
        res.json({ novoCombustivel });
    }catch(err){
        res.json({ error: true, message: err.message });
    }
});
//Obter todos os registro de combustível


module.exports = router;