import React, {useState, useRef} from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';



import Ipa from '../../../assets/ipa.jpg';
import Witi from '../../../assets/witi.jpg';
import Pilsen from '../../../assets/pilsen.jpg';
import Malte from '../../../assets/malte.jpg';
import Sour from '../../../assets/sour.jpg';






export default function ContainerEstilos(porps){

   
  


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


            {[ 'right'].map((placement) => (
                    <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                       As IPA, também conhecidas como India Pale Ale, são cervejas de alto amargor e geralmente de alto teor alcoólico. Os ingleses, em busca de um meio para aumentar a conservação das cervejas durantes as viagens de navio para a Índia, acabaram criando as cervejas IPA. Cervejas carregadas de lúpulo, e por isso bem amargas, mas que conseguem se conservar por muito mais tempo do que cervejas com menos lúpulo.
                      </Tooltip>
                    }
                  >
                <section>
                    <img src={Ipa} alt="Ipas"/>
                    <h5 className="hover-sombra">Ipa</h5>
                </section>
                </OverlayTrigger>
                  ))}


                
                {[ 'right'].map((placement) => (
                <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`}>
                   As cervejas Witbier, apesar de serem feitas com trigo, são um pouco diferente das Weiss. As Witbier são cervejas turvas, de cor amarelo palha, com espuma branca e cremosa. O aroma é geralmente adocicado, com toques de mel ou baunilha e notas cítricas de laranja, provenientes das cascas de laranja que são usadas na fabricação. É uma cerveja muito bonita, leve e ideal para se beber no verão. Se você já é fã das Weiss, não deixe de provar uma boa Witbier.
                  </Tooltip>
                }
                >
                <section>
                    <img src={Witi} alt="Ipas"/>
                    <h5 className="hover-sombra">Witibier</h5>
                </section>
                </OverlayTrigger>
                  ))}




                {[ 'right'].map((placement) => (
                    <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                       Este estilo é uma ótima opção para quem esta iniciando no mundo das cervejas artesanais, por ser leve e de baixo amargor. Contudo, possui rótulos que impressionam até os já adeptos á trajetória cervejeira.
                      </Tooltip>
                    }
                  >
                <section>
                    <img src={Pilsen} alt="Ipas" />
                    <h5 className="hover-sombra">Pilsen</h5>
                </section>

                </OverlayTrigger>
                  ))}
               
                
               {[ 'right'].map((placement) => (
                    <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                       As cervejas artesanais do estilo, apresentam uma coloração âmbar, que pode ser mais clara ou mais escura além de sabores e aromas com maltes e lúpulos diversificados. No paladar, teremos um sabor com maior dulçor e um final levemente amargo, já no aroma uma presença frisante do malte.
                      </Tooltip>
                    }
                  >
                <section>
                    <img src={Malte} alt="Ipas"/>
                    <h5 className="hover-sombra">Malte</h5>
                </section>
                </OverlayTrigger>
                  ))}

                
                    {[ 'left'].map((placement) => (
                    <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                       As cervejas artesanais do estilo, apresentam uma coloração âmbar, que pode ser mais clara ou mais escura além de sabores e aromas com maltes e lúpulos diversificados. No paladar, teremos um sabor com maior dulçor e um final levemente amargo, já no aroma uma presença frisante do malte.
                      </Tooltip>
                    }
                  >
                <section>
                    <img src={Sour} alt="Ipas"/>
                    <h5 className="hover-sombra">Sour</h5>
                </section>
                </OverlayTrigger>
                  ))}
            </div>
        </div>
    )
}