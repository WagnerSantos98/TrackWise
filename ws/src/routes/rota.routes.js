const express = require('express');
const axios = require('axios');
const routes = express.Router();
const Rota = require('../models/rota');
const Cliente = require('../models/cliente');
const Pacote = require('../models/pacote');

//Função para calcular a rota
const calcularRota = async (origem, destino) => {
    try{
        const response = await axios.get(`http://router.project-osrm.org/route/v1/driving/${origem.longitude},${origem.latitude};${destino.longitude},${destino.latitude}`, {
            params: {
                overview: 'full',
                geometries: 'geojson'
            }
        });

        if(response.data.routes.length > 0){
            const rota = response.data.routes[0];
            return rota;
        }else{
            throw new Error('Não foi possível calcular a rota');
        }

    }catch(error){
        throw new Error('Erro ao calcular a rota');
    }
};

// Rota para iniciar percurso de entrega
routes.post('/iniciar', async (req, res) => {
    try {
        const { veiculoId, motoristaId, codigoPacote } = req.body;

        // Buscar o pacote pelo código
        const pacote = await Pacote.findOne({ codigoPacote });
        if (!pacote) {
            return res.json({ error: true, message: 'Pacote não encontrado' });
        }

        // Buscar a localização atual do veículo
        const origem = { latitude: -22.958102, longitude: -46.543028 };

        // Buscar localização do cliente associado ao pacote
        const cliente = await Cliente.findById(pacote.clienteId);
        const destino = { latitude: cliente.endereco.latitude, longitude: cliente.endereco.longitude };

        // Calcular a rota
        const rota = await calcularRota(origem, destino);

        // Salvar a rota no banco de dados
        const novaRota = new Rota({
            veiculoId,
            motoristaId,
            origem: `${origem.latitude}, ${origem.longitude}`,
            destino: `${destino.latitude}, ${destino.longitude}`,
            distancia: rota.distance,
            duracao: rota.duration,
            pontosParada: rota.legs[0].steps.map(step => ({
                latitude: step.maneuver.location[1],
                longitude: step.maneuver.location[0],
                descricao: step.maneuver.instruction
            }))
        });

        const rotaSalva = await novaRota.save();

        res.json({ rotaSalva });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

module.exports = routes;