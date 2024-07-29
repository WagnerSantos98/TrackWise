const express = require('express');
const routes = express.Router();
const Motorista = require('../models/motorista');

router.post('/', async (req, res) => {
    try{

        const motorista = await new Motorista(req.body).save();
        
        res.json({ motorista });
    }catch(err){
        res.json({ error: true, message: err.message });
    }
});