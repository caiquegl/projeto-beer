import React, {useState} from 'react';

// header
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from '../../assets/avatar-login.png';
import Logo from '../../assets/logo.png';
import {Navbar , Nav, Form, Button, FormControl} from 'react-bootstrap';
// fim do header

import ContainerDoMes from '../../components/Container/container-home-doMes/index';
import ContainerEstilos from '../../components/Container/container-estilos/index';
import Footer from '../../components/footer/index';
import Buscar from '../../components/buscar/index';



import './style.css';



export default function Home() {
    let capturarNome = sessionStorage.getItem("nomeVisitante");
    const idVisitante = sessionStorage.getItem("idVisitante");

    const [ logando, setLogando] = useState("");


    


    if(capturarNome == null){
        capturarNome = "Visitante";
    }

    async function nav1(){
        if(idVisitante < 1){
         document.getElementById("logando-ocult1").style = "display: block";
        }
    }


    if(idVisitante < 1 ){

        window.onload = nav1;


    }



    return(
        <div>
             {/* header */}

             <Navbar  expand="lg" className="nav" id="logando">
        <Navbar.Brand href="/home"><img src={Logo} id="invertImg"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/home" className="nav-itens"><p className="teste">Home</p></Nav.Link>
            <Nav.Link href="/cerveja"><p>Cerveja</p></Nav.Link>
            </Nav>
            <Form inline>
            <Buscar />
            </Form>
            <div className="nav-login">
                    <img src={Avatar} alt="Visitante"/>
                    <h5>Olá  {capturarNome}</h5>
                    <Link to="/registrar" id="logando-ocult1">
                        <h5 id="ocut-visit">Registrar</h5>
                    </Link>

                </div>
        </Navbar.Collapse>
        </Navbar>
            
    {/* fim do header */}

            <div className="home-img"></div>
            <ContainerEstilos />
            <ContainerDoMes />
            <Footer />
        </div>

    )
}


{/* <Navbar.Brand href="/home"><img src={Logo} id="invertImg"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/home" className="nav-itens"><p className="teste">Home</p></Nav.Link>
                    <Nav.Link href="/cerveja"><p>Cerveja</p></Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success" className="btn btn-style">Search</Button>
                    </Form>
                    <div className="nav-login">
                            <img src={Avatar} alt="Visitante"/>
                            <h5>Olá  {capturarNome}</h5>
                            <Link to="/registrar">
                                <h5 id="ocut-visit">Registrar</h5>
                            </Link>

                        </div>
                </Navbar.Collapse> */}