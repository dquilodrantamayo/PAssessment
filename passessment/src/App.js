import React from 'react';
//Boostrap-React
import 'bootstrap/dist/css/bootstrap.min.css';
//W3
import './Styles/W3/w3.css';
//redux
import store from './Redux/Store';
import { Provider } from 'react-redux';
// Componente
import Passessment from './Componentes/PAssessment';
const App = () => {
  //---------------Atributos---------------
  
  //---------------Funciones---------------
  
  //---------------Retorno---------------
  return (
    <Provider store = {store}>
      <Passessment/>
    </Provider>
   );
}

export default App;