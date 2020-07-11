import React, { useState, useEffect, } from 'react';
import {useHistory} from 'react-router-dom';
import { MDBContainer, MDBRating, MDBInput  } from 'mdbreact';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import BeautyStars from 'beauty-stars';


import Coopers from '../../assets/coopers.png';

import api from '../../api/api';


export default function Categoria(){



    const history = useHistory();
    const [listCervejas, setListCervejas] = useState([]);
    const [state, setState] = useState("");



      useEffect(()=>{
        api.get('listarCerveja').then(response => {
            setListCervejas(response.data);
        })
      }, [])

      function maisInfo(id){
        sessionStorage.setItem("idCerveja", id);
        return history.push("/info");
      }

     


    return(
        <div className="div-la">
            <div className="pai-categorias">
                <div className="categorias">
                    <h2>Categorias</h2>
                    
                    <ul>
                        <li>
                            
                            <label htmlFor="cerveja-de-trigo">Cerveja de trigo</label>
                        </li>
                        <li>
                            <input type="checkbox" name="ipa" id="ipa"/> 
                            <label htmlFor="ipa">India Pale Ale IPA</label>
                        </li>
                        <li>
                            <input type="checkbox" name="lager" id="lager"/> 
                            <label htmlFor="lager">Lager</label>
                        </li>
                        <li>
                            <input type="checkbox" name="pale-ale" id="pale-ale"/> 
                            <label htmlFor="pale-ale">Pale Ale</label>
                        </li>
                        <li>
                            <input type="checkbox" name="strong-ale" id="strong-ale"/> 
                            <label htmlFor="strong-ale">Strong Ale</label>
                        </li>
                        <li>
                            <input type="checkbox" name="sour" id="sour"/> 
                            <label htmlFor="sour">Sour</label>
                        </li>
                        <li>
                            <input type="checkbox" name="porter" id="porter"/> 
                            <label htmlFor="porter">Porter</label>
                        </li>
                        <li>
                            <input type="checkbox" name="blue-moon" id="blue-moon"/> 
                            <label htmlFor="blue-moon">Blue Moon</label>
                        </li>
                    </ul>

                    <h2>Marcas</h2>
                    <ul>
                        <li>
                            <input type="checkbox" name="asgard" id="asgard"/> 
                            <label htmlFor="asgard">Asgard</label>
                        </li>
                        <li>
                            <input type="checkbox" name="blue-moon" id="blue-moon"/> 
                            <label htmlFor="blue-moon">Blue Moon</label>
                        </li>
                        <li>
                            <input type="checkbox" name="budweiser" id="budweiser"/> 
                            <label htmlFor="budweiser">Budweiser</label>
                        </li>
                        <li>
                            <input type="checkbox" name="cacildis" id="cacildis"/> 
                            <label htmlFor="cacildis">Cacildis</label>
                        </li>
                        <li>
                            <input type="checkbox" name="faxe" id="faxe"/> 
                            <label htmlFor="faxe">Faxe</label>
                        </li>
                        <li>
                            <input type="checkbox" name="coopers" id="coopers"/> 
                            <label htmlFor="coopers">Coopers</label>
                        </li>
                        <li>
                            <input type="checkbox" name="skol" id="skol"/> 
                            <label htmlFor="skol">Skol</label>
                        </li>
                        <li>
                            <input type="checkbox" name="brahma" id="brahma"/> 
                            <label htmlFor="brahma">Brahma</label>
                        </li>
                        <h2>Curiosidade</h2>
                        <ul>
                            <li>
                                <p> Mais de 100 estudos demonstraram que o consumo moderado de cerveja diminui o risco de ataques cardíacos e morte por doença cardiovascular em 25 a 40%. Um ou dois copos por dia podem ajudar a elevar os níveis de HDL, o chamado “colesterol bom”, que ajuda a prevenir o entupimento das artérias.
                                </p>
                            </li>
                        </ul>
                    </ul>
                </div>
                <div className="avo-cards">
                    <div className="ordernar">

                    <div class="btn-toolbar class" role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group mr-2" role="group" aria-label="First group">
                            <button type="button" class="btn btn-secondary">1</button>
                            <button type="button" class="btn btn-secondary">2</button>
                            <button type="button" class="btn btn-secondary">3</button>
                            <button type="button" class="btn btn-secondary">4</button>
                        </div>
                    </div>
                    
                        <p>Ordernar por:</p>
                        <select name="ordernar" id="ordernar">
                            <option selected>Selecione</option>
                            <option>Novidades</option>
                            <option>Nome A-Z</option>
                            <option>Nome Z-A</option>
                            <option>Maiores notas</option>
                            <option>Menores notas</option>
                        </select>
                    </div>

                    <div className="pai-cards">

                        {listCervejas.map(listCervejas => (
                            
                            <div className="card" key={listCervejas.idCerveja}>
                            <img src={listCervejas.foto} className="card-img-top"/>
                            <div className="card-body">
                                <div className="card-body-avali">
                                <BeautyStars
                                    value={(listCervejas.nota)}
                                    size="20px"
                                    editable="false"
                                    activeColor={"#f3cb06"}
                                    inactiveColor={"#808080"}
                                    onChange={value => setState({ value })}
                                    />
                                    <h6>
                                        {listCervejas.nome}
                                    </h6>
                                    <p className="card-text">

                                        {listCervejas.pequenaDescri} 
                                    </p>
                                </div>
                                <div className="card-button"> 
                                    <button className="mais-info" onClick={() => maisInfo(listCervejas.idCerveja)}>Mais informações</button>
                                </div>
                            </div>
                        </div>

                        ))}
                        
                        {/* <div className="card">
                            <img src={Coopers} className="card-img-top"/>
                            <div className="card-body">
                                <div>
                                    <MDBContainer>
                                        <MDBRating data={basic}/>
                                    </MDBContainer>
                                    <p className="card-text">
                                        A Coopers Original Pale Ale é uma cerveja de notas frutadas e florais. 
                                    </p>
                                </div>
                                <Link to="/info/id"><button className="mais-info">Mais informações</button></Link>
                            </div>
                        </div>
                        
                        <div className="card">
                            <img src={Coopers} className="card-img-top"/>
                            <div className="card-body">
                                <div>
                                    <MDBContainer>
                                        <MDBRating data={basic}/>
                                    </MDBContainer>
                                    
                                    <p className="card-text">
                                        A Coopers Original Pale Ale é uma cerveja de notas frutadas e florais. 
                                    </p>
                                </div> 
                                <Link to="/info/id"><button className="mais-info">Mais informações</button></Link>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Coopers} className="card-img-top"/>
                            <div className="card-body">
                                <div>
                                    <MDBContainer>
                                        <MDBRating data={basic}/>
                                    </MDBContainer>
                                    <p className="card-text">
                                        A Coopers Original Pale Ale é uma cerveja de notas frutadas e florais. 
                                    </p>
                                </div>
                                <Link to="/info/id"><button className="mais-info">Mais informações</button></Link>
                            </div>
                        </div>
                        
                        <div className="card">
                            <img src={Coopers} className="card-img-top"/>
                            <div className="card-body">
                                <div>
                                    <MDBContainer>
                                        <MDBRating data={basic}/>
                                    </MDBContainer>
                                    <p className="card-text">
                                        A Coopers Original Pale Ale é uma cerveja de notas frutadas e florais. 
                                    </p>
                                </div>
                                <Link to="/info/id"><button className="mais-info">Mais informações</button></Link>
                            </div>
                        </div>
                        
                        <div className="card">
                            <img src={Coopers} className="card-img-top"/>
                            <div className="card-body">
                                <div>
                                    <MDBContainer>
                                        <MDBRating data={basic}/>
                                    </MDBContainer>
                                    
                                    <p className="card-text">
                                        A Coopers Original Pale Ale é uma cerveja de notas frutadas e florais. 
                                    </p>
                                </div> 
                                <Link to="/info/id"><button className="mais-info">Mais informações</button></Link>
                            </div>
                        </div>
                        
                        <div className="card">
                            <img src={Coopers} className="card-img-top"/>
                            <div className="card-body">
                                <div>
                                    <MDBContainer>
                                        <MDBRating data={basic}/>
                                    </MDBContainer>
                                    <p className="card-text">
                                        A Coopers Original Pale Ale é uma cerveja de notas frutadas e florais. 
                                    </p>
                                </div>
                                <Link to="/info/id"><button className="mais-info">Mais informações</button></Link>
                            </div>
                        </div>
                        
                        <div className="card">
                            <img src={Coopers} className="card-img-top"/>
                            <div className="card-body">
                                <div>
                                    <MDBContainer>
                                        <MDBRating data={basic}/>
                                    </MDBContainer>
                                    <p className="card-text">
                                        A Coopers Original Pale Ale é uma cerveja de notas frutadas e florais. 
                                    </p>
                                </div>
                                <Link to="/info/id"><button className="mais-info">Mais informações</button></Link>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Coopers} className="card-img-top"/>
                            <div className="card-body">
                                <div>
                                    <MDBContainer>
                                        <MDBRating data={basic}/>
                                    </MDBContainer>
                                    <p className="card-text">
                                        A Coopers Original Pale Ale é uma cerveja de notas frutadas e florais. 
                                    </p>
                                </div>
                                <Link to="/info/id"><button className="mais-info">Mais informações</button></Link>
                            </div>
                        </div> */}

                    </div>
                </div>

            </div>
    
        </div>
    )
}