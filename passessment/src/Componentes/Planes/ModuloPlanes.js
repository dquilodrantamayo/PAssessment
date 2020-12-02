import React, { useState } from 'react';
import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap';
import FormPlan from './FormPlan';
import ListaPlanes from './ListaPlanes';

const ModuloPlanes = () => {
    //---------------Atributos---------------
    const [key, setKey] = useState('ListaPlanes');
    //---------------Funciones---------------
  
    //---------------Retorno---------------
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className ="w3-section">Plan Assessment del Aprendizaje estudiantil</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Tabs activeKey={key} onSelect={k => setKey(k)}>
                        <Tab eventKey="ListaPlanes" title="Lista Planes">
                            <ListaPlanes/>
                        </Tab>
                        <Tab eventKey="formPlan" title="Agregar Plan">
                            <FormPlan/>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
};
export default ModuloPlanes;