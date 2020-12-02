//---------------state inicial---------------
const initialState = {
    usuarioConectado: true,
}
//--------------- Funciones del reducer ---------------
export default function(state = initialState, action) {
    switch(action.type){
        // caso que actua como setState
        case 'usuarioConectado' :
            return {
                ...state,
                usuarioConectado: true,
                usuarioActual:action.payload
            }
        
        //retorno default, se retorna el state sin modificar
        default:
            return state;
    }
}