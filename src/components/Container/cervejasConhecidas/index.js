import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

import Paulaner from '../../../assets/paulaner.png';
import Coopers from '../../../assets/coopers.png';
import BlueMoon from '../../../assets/blue.png';


import Nv2Amargo from '../../../assets/n2.png';
import Nv3Amargo from '../../../assets/n3.jpg';

import Cor2 from '../../../assets/cor-2.jpg';
import Aroma from '../../../assets/aroma.jpg';
import Aparencia from '../../../assets/aparencia.jpg';






export default class SimpleSlider extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <div className="full-slick">
            <div className="full-slick">
               
                <div className="doMes">
                    <div className="doMes-before">
                    </div>
                    <div className="text">
                        <p>Melhores marcas</p>
                    </div>
                    <div className="doMes-after">
                    </div>
                </div>
            <div className="slick-pai">
                <Slider {...settings}>
                <div>

                <div className="flex-slick">
                    <div className="card">
                        <img src={Paulaner} className="card-img-top"/>
                        <div className="card-body">
                            <p className="card-text">
                            Uma das melhores cervejas de trigo, a Paulaner é sutilmente amarga, não filtrada e de cor amarela turva.
                            </p>
                        </div>
                    </div>

                    <div className="descri">
                        <h3>Descrição</h3>
                        <p>
                            Uma das melhores cervejas de trigo, a Paulaner Hefe-Weissbier¹ Naturtrüb é sutilmente amarga, não filtrada e de cor amarela turva, esta cerveja com teor alcoólico de 5,5% possui o clássico aroma do estilo Weiss de cravo e banana. Também é conhecida como “cerveja para o café da manhã”, na região da Bavária. Isso por ser uma cerveja de fácil digestão e leve. Com sabores frutados, malte adocicado e cravo, o sabor se assemelha muito aos aromas.
                        </p>
                        <div className="flex-slider">
                            <div className="left">
                                <article>
                                <img src={Nv2Amargo}/> <h5>Amargor:</h5><p>Baixo</p>
                                </article>
                                <article>
                                <img src={Cor2}/> <h5>Coloração:</h5><p>Dourada</p>
                                </article>
                            </div>
                            <div className="left">
                                <article>
                                <img src={Aroma}/> <h5>Aromas:</h5><p>Cravo, pão, caramelo e banana.</p>
                                </article>
                                <article>
                                <img src={Aparencia}/> <h5>Aparência:</h5><p>Dourada</p>
                                </article>
                            </div>
                        </div>  
                        
                    </div>
                </div>   
                



                </div>
                <div>


                <div className="flex-slick">
                    <div className="card">
                        <img src={Coopers} className="card-img-top"/>
                        <div className="card-body">
                            <p className="card-text">
                            A Coopers Original Pale Ale é uma cerveja de notas frutadas e florais. 
                            </p>
                        </div>
                    </div>

                    <div className="descri">
                        <h3>Descrição</h3>
                        <p>
                        A Coopers Original Pale Ale é uma cerveja de notas frutadas e florais, com o equilíbrio perfeito entre o frutado e o amargor. ideal para quem está começando no estilo. 
                        </p>
                        <div className="flex-slider">
                            <div className="left">
                                <article>
                                <img src={Nv3Amargo}/> <h5>Amargor:</h5><p>Moderado</p>
                                </article>
                                <article>
                                <img src={Cor2}/> <h5>Coloração:</h5><p>Dourada</p>
                                </article>
                            </div>
                            <div className="left">
                                <article>
                                <img src={Aroma}/> <h5>Aromas:</h5><p>Pão, mel e notas cítricas do lúpulo.</p>
                                </article>
                                <article>
                                <img src={Aparencia}/> <h5>Aparência:</h5><p>Levemente turva.</p>
                                </article>
                            </div>
                        </div>  
                        
                    </div>
                </div>   


                
                
                </div>
                <div>
                    
                    
                <div className="flex-slick">
                    <div className="card">
                        <img src={BlueMoon} className="card-img-top"/>
                        <div className="card-body">
                            <p className="card-text">
                                A Blue Moon é uma das cervejas mais famosas dos EUA e uma das melhores cervejas artesanais do país. 
                            </p>
                        </div>
                    </div>

                    <div className="descri">
                        <h3>Descrição</h3>
                        <p>
                        A Blue Moon é uma das cervejas mais famosas dos EUA e uma das melhores cervejas artesanais do país. É uma cerveja Witbier¹ de baixo amargor, e apresenta as características típicas do estilo, com notas cítricas (de casca de laranja) e de especiarias (sementes de coentro). Com excelente drinkability e muito refrescante, pode ser servida com uma fatia de laranja no copo para acentuar as suas sensações cítricas. É perfeita para ser tomada em dias quentes e acompanha bem pratos leves como saladas e frutos do mar.
                        </p>
                        <div className="flex-slider">
                            <div className="left">
                                <article>
                                <img src={Nv2Amargo}/> <h5>Amargor:</h5><p>Moderado</p>
                                </article>
                                <article>
                                <img src={Cor2}/> <h5>Coloração:</h5><p>Dourada</p>
                                </article>
                            </div>
                            <div className="left">
                                <article>
                                <img src={Aroma}/> <h5>Aromas:</h5><p>Notas cítricas, especiarias.</p>
                                </article>
                                <article>
                                <img src={Aparencia}/> <h5>Aparência:</h5><p>Turva.</p>
                                </article>
                            </div>
                        </div>  
                        
                    </div>
                </div>   

                    
                </div>
                
                </Slider>
            </div>
            </div>
        </div>
    );
  }
}