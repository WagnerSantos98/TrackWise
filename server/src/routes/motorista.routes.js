const express = require('express');
const router = express.Router();
const Motorista = require('../models/motorista');
const EmpresaMotorista = require('../models/relationship/empresaMotorista');

router.post('/', async (req, res) => {
    try{
        const { motorista, empresaId } = req.body;
        let newMotorista = null;

    //Verificar se o motorista já está cadastrado
    const existentMotorista =  await Motorista.findOne({
        $or: [
            { nome: motorista.nome },
            { cpf: motorista.cpf },
        ]
    });

    //Caso motorista não esteja cadastrado
    if(!existentMotorista){
        newMotorista = new Motorista({
            ...motorista,
        });
        await newMotorista.save();
    }

    //Relacionamento motorista/empresa
    const motoristaId = existentMotorista? existentMotorista._id : newMotorista._id;

    //Verifica se existe relacionamento com a empresa
    const existentRelationship = await EmpresaMotorista.findOne({
        empresaId,
        motoristaId,
        status: { $ne: 'E' }
    });

    //Se não está vinculado
    if(!existentRelationship){
        await new EmpresaMotorista({
            empresaId,
            motoristaId,
            status: 'A' //A = Ativo, I = Inativo, E = Excluído
        }).save();
    }else if(existentRelationship.status !== 'A'){
        //Se já existir  um vinculo/empresa e não está ativo, atualizar para 'A'
        await EmpresaMotorista.findOneAndUpdate(
            {
                empresaId,
                motoristaId,
            },
            { status: 'A' }
        );
    }

    if(existentMotorista && existentRelationship){
        res.json({ error: true, message: 'Motorista já cadastrado'});
    }else{
        res.json({ error: false });
    }
    }catch(err){
        res.json({ error: true, message: err.message });
    }
    
});

//Rota de retorno de informações do motorista  com vínculo empresa/motorista
router.get('/empresa/:empresaId', async (req, res) => {
    try{
        const { empresaId } = req.params;

        const motoristas = await EmpresaMotorista.find({
            empresaId,
            status: { $ne: 'E' }
        })
        .populate('motoristaId')
        .select('motoristaId dataCadastro');

        res.json({
            error:  false,
            motoristas: motoristas.map((vinculo) => ({
                ...vinculo.motoristaId._doc,
                vinculoId: vinculo._id,
                dataCadastro: vinculo.dataCadastro
            }))
        });
    }catch(err){
        res.json({ error: true, message: err.message });
    }
});

module.exports = router;