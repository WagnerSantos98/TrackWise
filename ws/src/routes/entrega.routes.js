const express = require('express');
const routes = require('../models/entrega');
const Entrega = require('../models/entrega');

router.post('/', async (req, res) => {
    try{

        const entrega = await new Entrega(req.body).save();


        res.json({ entrega });
    }catch(err){
        res.json({ error: true, message: err.message });
    }
});