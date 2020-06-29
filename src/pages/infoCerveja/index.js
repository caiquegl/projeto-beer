import React from 'react';
import Zoom from 'react-img-zoom';

// header
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from '../../assets/avatar-login.png';
// fim do header
import Footer from '../../components/footer/index';
import './style.css';

import Cooper from '../../assets/coopers.png';
import Search from '../../assets/search.svg';
import Aus from '../../assets/aus.svg';
import CopoPale from '../../assets/copoPale.png';
import Ml from '../../assets/ml.png';
import Valor from '../../assets/valor.svg';





export default function InfoCerveja(){

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

        <div className="pai-info">

            <div className="foto">
                <Zoom
                img={Cooper}
                zoomScale={3}
                width={500}
                height={500}
                />
                <div className="info-zoom">
                    <img src={Search} alt=""/>
                    <p>Passe o mouse para ver os detalhes. Imagem meramente ilustrativa.</p>
                </div>
            </div>

            <div className="info-descri">
                <div className="descri">
                    <h2> Coopers Original Pale Ale 375ml</h2>
                    <p>
                        A Coopers Original Pale Ale é uma cerveja de notas frutadas e florais, com o equilíbrio perfeito entre o frutado e o amargor. ideal para quem está começando no estilo. 
                    </p>
                </div>
                <div className="dados">
                        <img src={Aus} />
                        <p>
                            Australia
                        </p>
                        <img src={CopoPale}/>
                        <p>
                            English Pale Ale
                        </p>
                        <img src={Ml}/>
                        <p>
                            375ml
                        </p>
                        <img src={Valor}/>
                        <p>
                            +/- R$ 20,00
                        </p>
                        
                </div>

                    
            </div>
        </div>
        <Footer />
    </div>
    )
}