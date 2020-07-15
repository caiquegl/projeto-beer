import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, FormControl} from 'react-bootstrap';


import './style.css';



export default function Buscar() {
    const [busca, setBusca] = useState("");

    const history = useHistory();


    async function pesquisar(e) {
        e.preventDefault();
        sessionStorage.setItem("buscar",busca);
        
        return history.push("/busca");
    }


    return(
        <div className="SearchBar">
             
            <FormControl
            id="buscandoInput" 
            type="text" 
            placeholder="Buscar cerveja" 
            className="mr-sm-2 inputBusca"
            value={busca}
            onChange={e => setBusca(e.target.value)} 
            />
            
            <Button variant="outline-success" className="btn btn-style" onClick={pesquisar}>Search</Button>

        </div>
    )
}


