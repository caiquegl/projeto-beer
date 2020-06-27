import React, { useState } from 'react';
import { MDBContainer, MDBRating, MDBInput  } from 'mdbreact';

import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import Coopers from '../../assets/coopers.png';




export default function Categoria(){

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
          tooltip: 'Boa'
        },
        {
          tooltip: 'Excelente'
        }
      ]);

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
                    </ul>
                </div>
                <div className="avo-cards">
                    <div className="ordernar">
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
                                <button className="mais-info">Mais informações</button>
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
                                <button className="mais-info">Mais informações</button>
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
                                <button className="mais-info">Mais informações</button>
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
                                <button className="mais-info">Mais informações</button>
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
                                <button className="mais-info">Mais informações</button>
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
                                <button className="mais-info">Mais informações</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
    
        </div>
    )
}