const express = require('express');
const router = express.Router();
const Veiculo = require('../models/veiculo');
const EmpresaVeiculo = require('../models/relationship/empresaVeiculo');

router.post('/', async (req, res) => {
    try {
        const { veiculo, empresaId } = req.body;
        let newVeiculo = null;

        // Verificar se o veículo já está cadastrado
        const existentVeiculo = await Veiculo.findOne({
            $or: [
                { placa: veiculo.placa },
                { marca: veiculo.marca },
            ]
        });

        // Caso veículo não esteja cadastrado
        if (!existentVeiculo) {
            newVeiculo = new Veiculo({
                ...veiculo,
            });
            await newVeiculo.save();
        }

        // Relacionamento veiculo/empresa
        const veiculoId = existentVeiculo ? existentVeiculo._id : newVeiculo._id;

        // Verifica se existe o relacionamento com a empresa
        const existentRelationship = await EmpresaVeiculo.findOne({
            empresaId,
            veiculoId,
            status: { $ne: 'E' }
        });

        // Se não está vinculado
        if (!existentRelationship) {
            await new EmpresaVeiculo({
                empresaId,
                veiculoId,
                status: 'A' // Supondo que o status 'A' significa 'Ativo'
            }).save();
        } else if (existentRelationship.status !== 'A') {
            // Se já existir um vínculo veiculo/empresa e não está ativo, atualizar para 'A'
            await EmpresaVeiculo.findOneAndUpdate(
                {
                    empresaId,
                    veiculoId,
                },
                { status: 'A' }
            );
        }

        res.json({ success: true, message: 'Veículo cadastrado e vinculado à empresa com sucesso!' });
    } catch (err) {
        res.status(500).json({ error: true, message: err.message });
    }
});

module.exports = router;
