const express = require('express');
const axios = require('axios');
const router = express.Router();
const Cliente = require('../models/cliente');
const EmpresaCliente = require('../models/relationship/empresaCliente');

const getAddressFromCEP = async (cep) => {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao obter informações do endereço');
    }
};

const geocode = async (logradouro, cidade, uf) => {
    try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
            params: {
                street: logradouro,
                city: cidade,
                state: uf,
                format: 'json'
            }
        });
        if (response.data.length > 0) {
            const { lat, lon } = response.data[0];
            return { latitude: parseFloat(lat), longitude: parseFloat(lon) };
        } else {
            throw new Error('Geocodificação falhou');
        }
    } catch (error) {
        throw new Error('Erro ao obter a geolocalização');
    }
};

router.post('/', async (req, res) => {
    try {
        const { cliente, empresaId } = req.body;
        let newCliente = null;

        // Verificar se o cliente já está cadastrado
        const existentCliente = await Cliente.findOne({
            $or: [
                { nome: cliente.nome },
                { cpf: cliente.cpf },
            ]
        });

        // Caso cliente não esteja cadastrado
        if (!existentCliente) {
            // Obter informações do endereço pelo CEP
            const endereco = await getAddressFromCEP(cliente.endereco.cep);

            // Obter geolocalização pelo endereço
            const { latitude, longitude } = await geocode(endereco.logradouro, endereco.localidade, endereco.uf);

            newCliente = new Cliente({
                ...cliente,
                endereco: {
                    ...cliente.endereco,
                    rua: endereco.logradouro,
                    bairro: endereco.bairro,
                    cidade: endereco.localidade,
                    uf: endereco.uf,
                    latitude,
                    longitude
                }
            });
            await newCliente.save();
        }

        // Relacionamento cliente/empresa
        const clienteId = existentCliente ? existentCliente._id : newCliente._id;

        // Verifica se existe o relacionamento com a empresa
        const existentRelationship = await EmpresaCliente.findOne({
            empresaId,
            clienteId,
            status: { $ne: 'E' }
        });

        // Se não está vinculado
        if (!existentRelationship) {
            await new EmpresaCliente({
                empresaId,
                clienteId,
                status: 'A',
            }).save();
        } else if (existentRelationship.status !== 'A') {
            // Se já existir um vínculo/empresa e não está ativo, atualizar para 'A'
            await EmpresaCliente.findOneAndUpdate(
                {
                    empresaId,
                    clienteId,
                },
                { status: 'A' }
            );
        }

        if (existentCliente && existentRelationship) {
            res.json({ error: false, message: 'Cliente já cadastrado' });
        } else {
            res.json({ error: false });
        }
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

module.exports = router;
