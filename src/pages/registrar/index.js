import React from 'react';

// header
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from '../../assets/avatar-login.png';
import Logo from '../../assets/logo.png';
import {Navbar , Nav, Form, Button, FormControl} from 'react-bootstrap';
// fim do header

import Footer from '../../components/footer/index';
import ContainerRegistrar from '../../components/Container/registrar/index';



export default function Registrar(){

    let capturarNome = sessionStorage.getItem("nomeVisitante");
    console.log(capturarNome);
    if(capturarNome == null){
        capturarNome = "Visitante";
    }

    return (
        <div>
        {/* header */}


        <Navbar  expand="lg" className="nav">
                <Navbar.Brand href="/home"><img src={Logo} id="invertImg"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/home" className="nav-itens"><p >Home</p></Nav.Link>
                    <Nav.Link href="/cerveja"><p className="teste">Cerveja</p></Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success" className="btn btn-style">Search</Button>
                    </Form>
                    <div className="nav-login">
                            <img src={Avatar} alt="Visitante"/>
                            <h5>Olá  {capturarNome}</h5>
                            <Link to="/registrar">
                                <h5>Registrar</h5>
                            </Link>

                        </div>
                </Navbar.Collapse>
                </Navbar>
    {/* fim do header */}

            <ContainerRegistrar />
            <Footer />
        </div>
    )
}