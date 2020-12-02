import { combineReducers } from 'redux';
//importamos reducers
import generalReducer from './Reducers/GeneralReducer';
import usuariosReducer from './Reducers/UsuariosReducer'

//combinamos los reducers
export default combineReducers({
    generalStore: generalReducer,
    usuariosStore: usuariosReducer,
});