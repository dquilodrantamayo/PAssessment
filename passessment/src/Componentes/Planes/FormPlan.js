import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';

const FormPlan = () => {
    //---------- Atributos-------------
    const [ plan, setPlan ] = useState({
        nombre:"",
        objetivo:{
            descripcion:"",
            indicadores:[""],
        }
    });
    //---------- Funciones-------------
    // const formIndicadores = () => {
        
    //     plan.objetivo.indicadores.map((indicador, index)=>
    //                     <div className="row">
    //                         <div className="form-group col-6">
    //                             <div className="row align-items-center">
    //                                 <div className="col-6">
    //                                     <label htmlFor="idindicadorplan">indicador</label>
    //                                 </div>
    //                                 <div className="col-6">
    //                                     <input
    //                                         type="text"
    //                                         className="form-control"
    //                                         required
    //                                         value={plan.objetivo.descripcion}
    //                                         name="objetivo.descripcion"
    //                                         onChange={handleChange}
    //                                         id="idindicadorplan"
    //                                     >
    //                                     </input>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 );
    // }
    const handleChange = e => {
        var nombre = e.target.name.split('.')
        if(nombre.length === 1){
            setPlan({
                ...plan,
                [nombre[0]]: e.target.value
            })
        }
        else if(nombre.length === 2){
            setPlan({
                ...plan,
                [nombre[0]]:{
                    ...plan[nombre[0]],
                    [nombre[1]]:e.target.value
                }
            })
        }
        else if(nombre.length === 3){
            setPlan({
                ...plan,
                [nombre[0]]:{
                    ...plan[nombre[0]],
                    [nombre[1]]:[...plan[nombre[0]][nombre[1]].filter((indicador, index) => String(index) !== nombre[2] ), e.target.value]
                }
            })
        }
    }
    useEffect(()=>{
        console.log(plan)
    },[plan]);
    //----------  Retorno -------------
    return (
        <Container>
            <form className="needs-validation w3-section" noValidate> 
                <div className="row">
                    <div className="form-group col-6">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <label htmlFor="idnombreplan">Nombre</label>
                            </div>
                            <div className="col-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    value={plan.nombre}
                                    name="nombre"
                                    onChange={handleChange}
                                    id="idnombreplan"
                                >
                                </input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-6">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <label htmlFor="iddescripcionplan">Descripcion</label>
                            </div>
                            <div className="col-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    value={plan.objetivo.descripcion}
                                    name="objetivo.descripcion"
                                    onChange={handleChange}
                                    id="iddescripcionplan"
                                >
                                </input>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    plan.objetivo.indicadores.map((indicador, index) =>(
                        <div className="row" key={index}>
                            <div className="form-group col-6">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <label htmlFor={"idindicadorplan"+index}>{"indicador "+index}</label>
                                    </div>
                                    <div className="col-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            required
                                            value={plan.objetivo.indicadores[index]}
                                            name={"objetivo.indicadores."+index}
                                            onChange={handleChange}
                                            id={"idindicadorplan"+index}
                                        >
                                        </input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
                <Button
                    type="button"
                    onClick={
                        ()=>{
                            setPlan({
                                ...plan,
                                objetivo:{
                                    ...plan.objetivo,
                                    indicadores:[...plan.objetivo.indicadores, ""]
                                }
                            })
                        }
                    }

                >
                    Agregar indicador
                </Button>
            </form>
        </Container>
    );
};

export default FormPlan;