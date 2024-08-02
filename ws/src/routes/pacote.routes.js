const express = require('express');
const router  = express.Router();
const Pacote = require('../models/pacote');

router.post('/', async (req, res) => {
    try{

    }catch(err){
        res.json({ error: true, message: err.message });
    }
});

module.exports = router;