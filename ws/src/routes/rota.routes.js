const express = require('express');
const routes = express.Router();
const Rota = require('../models/rota');

router.post('/', async (req, res) => {
    try{

        const rota = await new Rota(req.body).save();


        res.json({ rota });
    }catch(err){
        res.json({ error: true, message: err.message });
    }
});
