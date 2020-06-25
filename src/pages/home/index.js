import React from 'react';

// header
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from '../../assets/avatar-login.png';
// fim do header

import ContainerDoMes from '../../components/Container/container-home-doMes/index';
import ContainerEstilos from '../../components/Container/container-estilos/index';
import Footer from '../../components/footer/index';


import './style.css';


export default function Home() {
    return(
        <div>
             {/* header */}

            <div className="container-fluid nav">
                <div className="container">
                    <div className="row">
                        <div className="nav-itens">
                            <Link to="/home">
                                <p className="teste active">Home</p>
                            </Link>
                            <Link to="/cerveja">
                                <p>Cerveja</p>
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
                            <h5>Login</h5>
                            <h5>Registrar</h5>

                        </div>
                    </div>
                </div>
            </div>
    {/* fim do header */}

            <div className="home-img"></div>
            <ContainerEstilos />
            <ContainerDoMes />
            <Footer />
        </div>

    )
}
