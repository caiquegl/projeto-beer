import React from 'react';
import './style.css';


import Ipa from '../../../assets/ipa.jpg';
import Witi from '../../../assets/witi.jpg';
import Pilsen from '../../../assets/pilsen.jpg';
import Malte from '../../../assets/malte.jpg';
import Sour from '../../../assets/sour.jpg';






export default function ContainerEstilos(){
    return (
        <div className="container-fluid estilos">
            <div className="estilos-titulo">
                <h2>
                    Veja avaliações por tipo de cerveja
                </h2>
                <div className="bx">
                    
                </div>
            </div>
            <div className="flex">
                <section>
                    <img src={Ipa} alt="Ipas"/>
                    <h5 className="hover-sombra">Ipa</h5>
                </section>
                <section>
                    <img src={Witi} alt="Ipas"/>
                    <h5 className="hover-sombra">Witibier</h5>
                </section>
                <section>
                    <img src={Pilsen} alt="Ipas"/>
                    <h5 className="hover-sombra">Pilsen</h5>
                </section>
                <section>
                    <img src={Malte} alt="Ipas"/>
                    <h5 className="hover-sombra">Malte</h5>
                </section>
                <section>
                    <img src={Sour} alt="Ipas"/>
                    <h5 className="hover-sombra">Sour</h5>
                </section>
            </div>
        </div>
    )
}