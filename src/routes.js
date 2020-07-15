import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/home/index';
import Cerveja from './pages/cerveja/index';
import Inicio from './pages/inicio/index';
import InfoCerveja from './pages/infoCerveja/index';
import Registrar from './pages/registrar/index';
import Busca from './pages/busca/index';





export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Inicio}/> 
                <Route path="/home" exact component={Home}/> 
                <Route path="/cerveja" exact component={Cerveja}/>
                <Route path="/info"  exact component={InfoCerveja}/> 
                <Route path="/registrar" exact component={Registrar}/>
                <Route path="/busca" exact component={Busca}/> 
 

 

            </Switch>
        </BrowserRouter>
    )
}