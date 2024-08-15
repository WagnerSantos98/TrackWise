import { combineReducers } from 'redux';

import veiculo from './modules/veiculo/reducer';

export default combineReducers({
    veiculo: veiculo,
})