import React,{useState, useEffect} from 'react';
import Zoom from 'react-img-zoom';
import { MDBContainer, MDBRating, MDBInput  } from 'mdbreact';


// header
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from '../../assets/avatar-login.png';
import Logo from '../../assets/logo.png';
import {Navbar , Nav, Form, Button, FormControl} from 'react-bootstrap';
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


import api from '../../api/api';








export default function InfoCerveja(){

    const [infoCerveja, setInfoCerveja] = useState([]);

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
    if(capturarNome == null){
        capturarNome = "Visitante";
    }

    const idCerveja = sessionStorage.getItem("idCerveja");

    const data = {
        id: idCerveja,
    }

    useEffect(()=>{
        api.post('listCervejaId',data).then(response => {
            setInfoCerveja(response.data);
        })
      }, [])

      



    return(
        <div>
            
            {/* header */}


            <Navbar  expand="lg" className="nav">
                <Navbar.Brand href="/home"><img src={Logo} id="invertImg"/></Navbar.Brand>
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
                                <h5>Registrar</h5>
                            </Link>

                        </div>
                </Navbar.Collapse>
                </Navbar>
            {/* fim do header */}

            {infoCerveja.map(info => (



        <div className="container-info">

            <div className="pai-info">

            

                <div className="foto">
                    <Zoom
                    img={info.foto}
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
                        <h2> {info.nome}</h2>
                        <p>
                            {info.pequenaDescri}
                            <a href="#mais-info-beer"> Mais informações.</a>
                        </p>
                    </div>
                    <div className="dados">
                            <img src={info.localidadeIMG} />
                            <p>
                                {info.localidade}
                            </p>
                            <img src={CopoPale}/>
                            <p>
                                {info.estilo}
                            </p>
                            <img src={Ml}/>
                            <p>
                                {info.ml}
                            </p>
                            <img src={Valor}/>
                            <p>
                                +/- R$ {info.precoMedio},00
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
                <h2 id="mais-info-beer">Saiba mais sobre este produto</h2>
                <p>
                    {info.descricao}
                </p>

                <h3>cerveja coopers original pale ale</h3>
                <div className="all-descri">
                    <div className="left">
                        <section>
                            <img src={info.localidadeIMG}/>
                            <h2>Origem:</h2>
                            <p>{info.localidade}</p>
                        </section>
                        <section>
                            <img src={Cervejaria}/>
                            <h2>Cervejaria:</h2>
                            <p>{info.cervejaria}</p>
                        </section>
                        <section>
                            <img src={CopoPale} className="img-copo"/>
                            <h2>Estilo:</h2>
                            <p>{info.estilo}</p>
                        </section>
                        <section>
                            <img src={Ml} className="img-copo"/>
                            <h2>Volume:</h2>
                            <p>{info.ml}</p>
                        </section>
                        <section>
                            <img src={info.coloracaoIMG} className="cor-dourada"/>
                            <h2>Coloração:</h2>
                            <p>{info.coloracao}</p>
                        </section>
                        <section>
                            <img src={Temperatura} className="temp"/>
                            <h2>Temperatura ideal:</h2>
                            <p>{info.tempIdeal}</p>
                        </section>
                    </div>
                    <div className="right">
                        <section>
                            <img src={info.amargorIMG} className="amargor"/>
                            <h2>Amargor:</h2>
                            <p>{info.amargor}</p>
                        </section>
                        <section>
                            <img src={Aparencia} />
                            <h2>Aparência:</h2>
                            <p>{info.aparencia}</p>
                        </section>
                        <section>
                            <img src={Aroma} />
                            <h2>Aroma:</h2>
                            <p>{info.aroma}</p>
                        </section>
                        <section>
                            <img src={Percent} />
                            <h2>Teor alcoólico:</h2>
                            <p>{info.teor}</p>
                        </section>
                        <div className="harmonizacao">
                            <h2>Sugestão de harmonização:</h2>
                            <p>{info.harmonizacao}</p>
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
        ))}
        <Footer />
    </div>
    )
}