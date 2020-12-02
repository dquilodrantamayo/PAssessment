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
                        <Cargando/>
                        <BarraNav/>
                        <Contenido/>
                    </React.Fragment>
                :
                    <React.Fragment>
                        <Cargando/>
                        <BarraNav/>
                        <LoginUsuario/>
                    </React.Fragment>
            }
            
        </React.Fragment>
     );
}
 
export default PAssessment;