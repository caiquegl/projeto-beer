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
    const [selectValue, setSelectValue] = useState(1);
    const list = [
        {id:1, link: "listarCerveja", name: 'Novidades'},
        {id:2, link: "aZ", name: 'Nome A- Z'},
        {id:3, link: "zA", name: 'Nome Z - A'},
        {id:4, link: "maisAvaliada", name: 'Mais avaliados'},
        {id:5, link: "menosAvaliada", name: 'Menos avaliados'},
      ];  



      useEffect(()=>{
        api.get('listarCerveja').then(response => {
            setListCervejas(response.data);
        })
      }, [])

      function maisInfo(id){
        sessionStorage.setItem("idCerveja", id);
        return history.push("/info");
      }

      async function pag(id){
        await api.get(`${selectValue}?page=${id}`).then(response => {
            setListCervejas(response.data);
        })
      }

      async function ordernarBy(){
        await api.get(`${selectValue}`).then(response => {
            setListCervejas(response.data);
        })
      }



      async function cooper(){
        await api.get("cooper").then(response => {
            setListCervejas(response.data);
        })
      }

      async function dadoBier(){
        await api.get("dadoBier").then(response => {
            setListCervejas(response.data);
        })
      }

      async function asgard(){
        await api.get("asgard").then(response => {
            setListCervejas(response.data);
        })
      }

      async function importada(){
        await api.get("importada").then(response => {
            setListCervejas(response.data);
        })
      }

      async function paulaner(){
        await api.get("paulaner").then(response => {
            setListCervejas(response.data);
        })
      }

      async function blueMoon(){
        await api.get("blueMoon").then(response => {
            setListCervejas(response.data);
        })
      }

      async function paleAle(){
        await api.get("paleAle").then(response => {
            setListCervejas(response.data);
        })
      }

      async function ipa(){
        await api.get("ipa").then(response => {
            setListCervejas(response.data);
        })
      }

      async function redAle(){
        await api.get("redAle").then(response => {
            setListCervejas(response.data);
        })
      }

      async function especial(){
        await api.get("especial").then(response => {
            setListCervejas(response.data);
        })
      }

      async function weiss(){
        await api.get("weiss").then(response => {
            setListCervejas(response.data);
        })
      }

      async function witbier(){
        await api.get("witbier").then(response => {
            setListCervejas(response.data);
        })
      }


 

    return(
        <div className="div-la">
            <div className="pai-categorias">
                <div className="categorias">
                    <h2>Categorias</h2>
                    
                    <ul>
                        <li>
                    
                            <label onClick={() => paleAle()}>Pale Ale</label>
                        </li>
                        <li>
                        
                            <label onClick={() => ipa()}>India Pale Ale (IPA)</label>
                        </li>
                        <li>
                        
                            <label onClick={() => redAle()}>Red Ale</label>
                        </li>
                        <li>
                            
                            <label onClick={() => weiss()}>Weiss</label>
                        </li>
                        <li>
                           
                            <label onClick={() => weiss()}>Weiss</label>
                        </li>
                        <li>
                           
                            <label onClick={() => witbier()}>Witbier</label>
                        </li>
                       
                    </ul>

                    <h2>Cervejaria</h2>
                    <ul>
                        <li>
                          
                            <label onClick={() => cooper()}>Coopers</label>
                        </li>
                        <li>
                          
                            <label onClick={() => dadoBier()}>Dado Bier</label>
                        </li>
                        <li>
                        
                            <label onClick={() => asgard()}>Asgard</label>
                        </li>
                        <li>
                            
                            <label onClick={() => importada()}>Importada</label>
                        </li>
                        <li>
                            
                            <label onClick={() => paulaner()}>Paulaner</label>
                        </li>
                        <li>
                           
                            <label onClick={() => blueMoon()}>BlueMoon</label>
                        </li>
                    </ul>
                        <h2>Curiosidade</h2>
                        <ul>
                            <li>
                                <p> Mais de 100 estudos demonstraram que o consumo moderado de cerveja diminui o risco de ataques cardíacos e morte por doença cardiovascular em 25 a 40%. Um ou dois copos por dia podem ajudar a elevar os níveis de HDL, o chamado “colesterol bom”, que ajuda a prevenir o entupimento das artérias.
                                </p>
                            </li>
                        </ul>
                </div>
                <div className="avo-cards">
                    <div className="ordernar">

                    <div class="btn-toolbar class" role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group mr-2" role="group" aria-label="First group">
                            <button type="button" class="btn btn-secondary" onClick={() => pag(1)}>1</button>
                            <button type="button" class="btn btn-secondary" onClick={() => pag(2)}>2</button>
                            <button type="button" class="btn btn-secondary" onClick={() => pag(3)}>3</button>
                            <button type="button" class="btn btn-secondary">4</button>
                        </div>
                    </div>
                    
                        <p>Ordernar por:</p>
                        <select name="ordernar" id="ordernar" value={selectValue} onChange={e => setSelectValue(e.target.value)}>
                            {list.map((item) => (
                                <option value={item.link} onClick={() => ordernarBy()}>{item.name}</option>
                            ))}  
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