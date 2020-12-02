import React from 'react';
//Rutas
// import {BrowserRouter as Router} from 'react-router-dom';np,
//Css
//Redux
import { useSelector } from 'react-redux';
//Componentes
import Contenido from './Estructura/Contenido';
import LoginUsuario from './Usuarios/LoginUsuarios';
import Cargando from './General/Cargando';
import BarraNav from './Estructura/BarraNav';

const PAssessment = () => {
    //---------------Atributos---------------)
    const usuarioConectado = useSelector((state)=>state.usuariosStore.usuarioConectado)
    //---------------Funciones---------------

    //--------------- Retorno ---------------
    return (
        <React.Fragment>
            {
                usuarioConectado?
                    <React.Fragment>
                        <BarraNav/>
                        <Contenido/>
                        <Cargando/>
                    </React.Fragment>
                :
                    <React.Fragment>
                        <BarraNav/>
                        <LoginUsuario/>
                        <Cargando/>
                    </React.Fragment>
            }
            
        </React.Fragment>
     );
}
 
export default PAssessment;