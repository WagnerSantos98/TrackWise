const INITIAL_STATE = {
    veiculos: [],
};

function veiculo(state = INITIAL_STATE, action){
    switch(action.type){
        case '@veiculo/ALL':{

        }
        default:
            return state;
    }
}

export default veiculo;