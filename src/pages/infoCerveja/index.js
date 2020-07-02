import React,{useState} from 'react';
import Zoom from 'react-img-zoom';
import { MDBContainer, MDBRating, MDBInput  } from 'mdbreact';


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
import Cervejaria from '../../assets/cervejaria.png';
import Cor2 from '../../assets/cor-2.jpg';
import Temperatura from '../../assets/temperatura.png';
import An3 from '../../assets/n3.jpg';
import Aparencia from '../../assets/aparencia.jpg';
import Aroma from '../../assets/aroma.jpg';
import Percent from '../../assets/percent.svg';
import CarneVermelha from '../../assets/carne-vermelha.jpg';
import CarneAves from '../../assets/carne-aves.jpg';










export default function InfoCerveja(){
    const [basic] = useState([
        {
          tooltip: 'Muito ruim'
        },
        {
          tooltip: 'Ruim'
        },
        {
          tooltip: 'Ok',
        },
        {
          tooltip: 'Boa',
          choosed: true
        },
        {
          tooltip: 'Excelente'
        }
      ]);

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
                            <Link to="/registrar">
                                <h5>Registrar</h5>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
    {/* fim do header */}
        <div className="container-info">
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
                    <div className="coments">
                        <div className="star">
                            <MDBContainer>
                                <MDBRating data={basic}/>
                                <p>(110)</p>
                            </MDBContainer>
                        </div>
                        <a href="#comentarios">Comentarios (85)</a>
                    </div>
                </div>                        
            </div>

            <div className="mais-descri">
                <h2>Saiba mais sobre este produto</h2>
                <p>A Coopers Original Pale Ale é uma cerveja de notas frutadas e florais, com o equilíbrio perfeito entre o frutado e o amargor ideal para quem está começando no estilo. </p>

                <h3>cerveja coopers original pale ale</h3>
                <div className="all-descri">
                    <div className="left">
                        <section>
                            <img src={Aus}/>
                            <h2>Origem:</h2>
                            <p>Adelaide - Australia</p>
                        </section>
                        <section>
                            <img src={Cervejaria}/>
                            <h2>Cervejaria:</h2>
                            <p>Coopers</p>
                        </section>
                        <section>
                            <img src={CopoPale} className="img-copo"/>
                            <h2>Estilo:</h2>
                            <p>English Pale Ale</p>
                        </section>
                        <section>
                            <img src={Ml} className="img-copo"/>
                            <h2>Volume:</h2>
                            <p>375ml</p>
                        </section>
                        <section>
                            <img src={Cor2} className="cor-dourada"/>
                            <h2>Coloração:</h2>
                            <p>Dourada</p>
                        </section>
                        <section>
                            <img src={Temperatura} className="temp"/>
                            <h2>Temperatura ideal:</h2>
                            <p>12º a 14º</p>
                        </section>
                    </div>
                    <div className="right">
                        <section>
                            <img src={An3} className="amargor"/>
                            <h2>Amargor:</h2>
                            <p>Moderado</p>
                        </section>
                        <section>
                            <img src={Aparencia} />
                            <h2>Aparência:</h2>
                            <p>Levemente turva</p>
                        </section>
                        <section>
                            <img src={Aroma} />
                            <h2>Aroma:</h2>
                            <p>Pão, mel e notas cítricas do lúpulo.</p>
                        </section>
                        <section>
                            <img src={Percent} />
                            <h2>Teor alcoólico:</h2>
                            <p>4,5%</p>
                        </section>
                        <div className="harmonizacao">
                            <h2>Sugestão de harmonização:</h2>
                            <div className="itens">
                                <div>
                                    <img src={CarneVermelha}/>
                                    <p>Carne vermelha</p>
                                </div>
                                <div>
                                    <img src={CarneAves}/>
                                    <p>Aves</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="avaliacao" id="comentarios">
                <h2>Avaliações</h2>
                <div className="pai-avaliacao">
                    <div className="star">
                        <MDBContainer>
                            <h2>4.5</h2>
                            <MDBRating data={basic}/>
                                <p>(110)</p>
                        </MDBContainer>
                        <select name="#" id="#">
                            <option>avaliação mais recente</option>
                            <option>avaliação mais antiga</option>
                            <option>avaliação mais positiva</option>
                            <option>avaliação mais negativa</option>
                        </select>
                    </div>

                    <div className="user-comentarios">
                        <div className="divisao-coments">

                            <div className="comentarios">
                                <h2>Caique</h2>
                                <MDBContainer>
                                    <MDBRating data={basic}/>
                                </MDBContainer>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure dolore ex distinctio ea enim quod reprehenderit consequatur ducimus delectus. Neque repellat saepe, a tempore sed voluptatibus nobis magni, omnis, qui animi corporis quibusdam aliquid commodi placeat ut accusantium minus dolorem.</p>
                                <div className="curtir">
                                    <p>29/06/2020</p>
                                    <button>Curtir</button>
                                </div>
                            </div>

                            <div className="comentarios">
                                <h2>Caique</h2>
                                <MDBContainer>
                                    <MDBRating data={basic}/>
                                </MDBContainer>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure dolore ex distinctio ea enim quod reprehenderit consequatur ducimus delectus. Neque repellat saepe, a tempore sed voluptatibus nobis magni, omnis, qui animi corporis quibusdam aliquid commodi placeat ut accusantium minus dolorem.</p>
                                <div className="curtir">
                                    <p>29/06/2020</p>
                                    <button>Curtir</button>
                                </div>
                            </div>


                        </div>

                        <div className="fazer-coment">
                            <h1>Faça um comentario</h1>
                            <p>Diga a baixo o que você achou <strong>{capturarNome}</strong>:</p>
                            <form action="#">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                <MDBContainer>
                                    <MDBRating data={basic}/>
                                </MDBContainer>
                                <button>Comentar</button>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}