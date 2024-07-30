const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente');
const EmpresaCliente = require('../models/relationship/empresaCliente');

router.post('/', async (req, res) => {
    try{
        const { cliente, empresaId } = req.body;
        let newCliente = null;

        //Veirifar se o cliente já está cadastrado
        const existentCliente = await Cliente.findOne({
            $or: [
                { nome: cliente.nome },
                { cpf: cliente.cpf },
            ]
        });

        //Caso cliente não esteja cadastrado
        if(!existentCliente){
            newCliente = new Cliente({
                ...cliente,
            });
            await newCliente.save();
        }

        //Relacionamento  cliente/empresa
        const clienteId = existentCliente? existentCliente._id : newCliente._id;

        //Verifica se existe o relacionamento com a empresa
        const existentRelationship = await EmpresaCliente.findOne({
            empresaId,
            clienteId,
            status: { $ne: 'E' }
        });

        //Se não está vinculado
        if(!existentRelationship){
            await new EmpresaCliente({
                empresaId,
                clienteId,
                status: 'A',
            }).save();
        }else if(existentRelationship.status !== 'A'){
            //Se já existir um vinculo/empresa e não está ativo, atualizar para 'A'
            await EmpresaCliente.findOneAndUpdate(
                {
                    empresaId,
                    clienteId,
                },
                { status: 'A' }
            );
        }

        if(existentCliente && existentRelationship){
            res.json({ error: false, message: 'Cliente já cadastrado' });
        }else{
            res.json({ error: false });
        }
    }catch(err){
        res.json({ error: true, message: err.message });
    }
});

module.exports = router;