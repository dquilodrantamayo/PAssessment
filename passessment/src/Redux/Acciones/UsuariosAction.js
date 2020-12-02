export const usuarioConectado = (usuario) => {
    return{
        type:'usuarioConectado',
        payload: usuario
    }
}