const express = require('express');
const routes = express.Router();
const Manutencao = require('../models/manutencao');

router.post('/', async (req, res) => {
    try{

        const manutencao = await new Manutencao(req.body).save();


        res.json({ manutencao });
    }catch(err){
        res.json({ error: true, message: err.message });
    }
});