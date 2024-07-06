const express = require('express');
const routes = express.Router();
const Combustivel = require('../models/combustivel');

router.post('/', async (req, res) => {
    try{

        const combustivel = await new Combustivel(req.body).save();


        res.json({ combustivel });
    }catch(err){
        res.json({ error: true, message: err.message });
    }
});