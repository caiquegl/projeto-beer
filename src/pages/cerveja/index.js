import React from 'react';

// header
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from '../../assets/avatar-login.png';
// fim do header

import Footer from '../../components/footer/index';
import CervejasConhecidas from '../../components/Container/cervejasConhecidas/index';

export default function Cervejas(){

    let capturarNome = sessionStorage.getItem("nomeVisitante");
    console.log(capturarNome);
    if(capturarNome == null){
        capturarNome = "Visitante";
    }

    return(
        <div>
            <div className="container-fluid nav">
                <div className="container">
                    <div className="row">
                        <div className="nav-itens">
                            <Link to="/home">
                                <p >Home</p>
                            </Link>
                            <Link to="/cerveja">
                                <p className="teste active">Cerveja</p>
                            </Link>
                        </div>
                        <div>
                            <form className="form-inline my-2 my-lg-0">
                                <input type="search" className="form-control mr-sm-2" placeholder="Search"/>
                                <button class="btn btn-style my-2 my-sm-0" type="submit">Search</button>
                                </form>
                        </div>
                        <div className="nav-login">
                            <img src={Avatar} alt="Visitante"/>
                            <h5>Olá  {capturarNome}</h5>
                            <h5>Registrar</h5>

                        </div>
                    </div>
                </div>
            </div>
    {/* fim do header */}

            <CervejasConhecidas />
            <Footer />
        </div>
    )
}