const express = require('express');
const routes = express.Router();
const Veiculo= require('../models/veiculo')

router.post('/', async (req, res) => {
    try{

        const veiculo = await new Veiculo(req.body).save();


        res.json({ veiculo });
    }catch(err){
        res.json({ error: true, message: err.message });
    }
});