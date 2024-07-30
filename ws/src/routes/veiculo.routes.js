const express = require('express');
const router = express.Router();
const Veiculo = require('../models/veiculo');
const EmpresaVeiculo = require('../models/relationship/empresaVeiculo');

router.post('/', async (req, res) => {
    try{
        const { veiculo, empresaId } = req.body;
        let newVeiculo = null;

        //Verificar se o veículo já está cadastrado
        const existentVeiculo = await Veiculo.findOne({
            $or:[
                { placa: veiculo.placa },
                { renavam: veiculo.renavam },
            ]
        });

        //Caso veículo não esteja cadastrado
        if(!existentVeiculo){
            newVeiculo = await Veiculo({
                ...veiculo,
            });
            await newVeiculo.save();
        }

        //Relacionamento motorista/empresa
        const veiculoId = existentVeiculo? existentVeiculo._id : newVeiculo._id;

        //Verifica se existe relacionamento com a empresa
        const existentRelatioship = await EmpresaVeiculo.findOne({
            empresaId,
            veiculoId,
            status: { $ne: 'E' }
        });

        //Se não está vinculado
        if(!existentRelatioship){
            await new EmpresaVeiculo({
                empresaId,
                veiculoId,
                status: 'A' //A = Ativo, I = Inativo, E = Excluído
            }).save();
        }else if(existentRelatioship.status === 'A'){
            //Se já existir  um vinculo/empresa e não está ativo, atualizar para 'A'
            await EmpresaVeiculo.findOneAndUpdate(
                {
                    empresaId,
                    veiculoId,
                },
                { status: 'A' }
            );
        }

        if(existentVeiculo && existentRelatioship){
            res.json({ error: true, message: 'Veículo já cadastrado' });
        }else{
            res.json({ error: false });
        }

    }catch(err){
        res.json({ error: true, message: err.message });
    }
});

module.exports = router;