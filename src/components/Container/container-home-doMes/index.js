import React from 'react';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Beers from '../../../assets/beers.png';


export default function Container(){
    return(
        <div className="container-shadow">
            <div className="doMes">
                <div className="doMes-before">
                </div>
                <div className="text">
                    <p>Cerveja do mês</p>
                </div>
                <div className="doMes-after">
                </div>
            </div>
            <div className="prop">
            <p>
                Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.
            </p>
            <img src={Beers} alt="" />
            </div>
            
        
        </div>
    )
}