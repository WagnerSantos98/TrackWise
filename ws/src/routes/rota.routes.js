const express = require('express');
const axios = require('axios');
const routes = express.Router();
const Rota = require('../models/rota');
const Cliente = require('../models/cliente');

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

routes.post('/', async (req, res) => {
    try{
        const { veiculoId, motoristaId, clienteId } = req.body;
    
        //Buscar a localização atual do veículo
        const origem = { latitude: -22.958102, longitude: -46.543028 };

        //Buscar localização do cliente
        const cliente = await Cliente.findById(clienteId);
        const destino = { latitude: cliente.endereco.latitude, longitude: cliente.endereco.longitude };

        //Calcular a rota
        const rota = await calcularRota(origem, destino);

        //Salvar a rota no banco de dados
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
    }catch(err){
        res.json({ error: true, message: err.message });
    }

});

module.exports = routes;