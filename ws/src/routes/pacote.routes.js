const express = require('express');
const router  = express.Router();
const Pacote = require('../models/pacote');
const ClientePacote = require('../models/relationship/clientePacote');

router.post('/', async (req, res) => {
    try{
        const pacote = await new Pacote(req.body).save();
        res.json({ pacote });
    }catch(err){
        res.json({ error: true, message: err.message });
    }
});

module.exports = router;