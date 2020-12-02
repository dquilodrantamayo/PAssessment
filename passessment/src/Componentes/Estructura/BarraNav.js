import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

const BarraNav = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand >Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
};

export default BarraNav;