//---------------state inicial---------------
const initialState = {
    hola:"hola",
}
//--------------- Funciones del reducer ---------------
export default function(state = initialState, action) {
    switch(action.type){
        // caso que actua como setState
        case 'chao' :
            return {
                ...state,
                hola: action.payload
            }
        
        //retorno default, se retorna el state sin modificar
        default:
            return state;
    }
}