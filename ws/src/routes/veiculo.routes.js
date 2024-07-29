const express = require('express');
const router = express.Router();
const Veiculo = require('../models/veiculo')


//Rota de cadastro - método POST
router.post('/', async (req, res) => {
    try{
        const veiculo = await new Veiculo(req.body).save();
        res.json({ veiculo });
    }catch(err){
        res.json({error: true, message: err.message});
    }
});



module.exports = router;