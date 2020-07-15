import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';

// header
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Avatar from "../../assets/avatar-login.png";
import Logo from "../../assets/logo.png";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import Buscar from "../../components/buscar/index";
// fim do header

import api from "../../api/api";
import Footer from "../../components/footer/index";
import Aroma from '../../assets/aroma.jpg';
import Aparencia from '../../assets/aparencia.jpg';
import "./style.css";


export default function Busca() {
  const [buscar, setBuscar] = useState([]);
  const history = useHistory();


  const idVisitante = sessionStorage.getItem("idVisitante");
  const nomeDaBusca = sessionStorage.getItem("buscar");

  let capturarNome = sessionStorage.getItem("nomeVisitante");
  console.log(capturarNome);
  if (capturarNome == null) {
    capturarNome = "Visitante";
  }

  async function nav1() {
    if (idVisitante < 1) {
      document.getElementById("logando-ocult1").style = "display: block";
    }
  }

  if (idVisitante < 1) {
    window.onload = nav1;
  }

  let data = {
    nome: nomeDaBusca,
  };

  useEffect(() => {
    api.post("busca", data).then((response) => {
      setBuscar(response.data);
    });
  }, []);

  let count = buscar.length;

  function maisInfo(id){
    sessionStorage.setItem("idCerveja", id);
    return history.push("/info");
  }

  return (
    <div>
      {/* header */}

      <Navbar expand="lg" className="nav" id="logando">
        <Navbar.Brand href="/home">
          <img src={Logo} id="invertImg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home" className="nav-itens">
              <p>Home</p>
            </Nav.Link>
            <Nav.Link href="/cerveja">
              <p className="teste">Cerveja</p>
            </Nav.Link>
          </Nav>
          <Form inline>
            <Buscar />
          </Form>
          <div className="nav-login">
            <img src={Avatar} alt="Visitante" />
            <h5>Olá {capturarNome}</h5>
            <Link to="/registrar" id="logando-ocult1">
              <h5 id="ocut-visit">Registrar</h5>
            </Link>
          </div>
        </Navbar.Collapse>
      </Navbar>

      {/* fim do header */}
      <div className="resultadoPai">
        <h2>Resultados encontrados com <strong>{nomeDaBusca}:</strong> {count}</h2>
        <div className="resultado">
            {buscar.map(list =>(
                <div className="descri">
                <h3>{list.nome}</h3>
                <p>
                    {list.descricao}
                </p>
                <div className="flex-slider">
                    <div className="left">
                        <article>
                        <img src={list.amargorIMG}/> <h5>Amargor:</h5><p>{list.amargor}</p>
                        </article>
                        <article>
                        <img src={list.coloracaoIMG}/> <h5>Coloração:</h5><p>{list.coloracao}</p>
                        </article>
                    </div>
                    <div className="left">
                        <article>
                        <img src={Aroma}/> <h5>Aromas:</h5><p>{list.aroma}</p>
                        </article>
                        <article>
                        <img src={Aparencia}/> <h5>Aparência:</h5><p>{list.aparencia}</p>
                        </article>
                    </div>
                </div>

                <button className="mais-info" onClick={() => maisInfo(list.idCerveja)}>Mais informações</button>
  
                
            </div>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
