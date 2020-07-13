import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar , Nav, Form, Button, FormControl} from 'react-bootstrap';

import './style.css';



export default function Buscar() {

    return(
        <div className="SearchBar">
             
            <FormControl
            id="buscandoInput" 
            type="text" 
            placeholder="Buscar cerveja" 
            className="mr-sm-2 inputBusca" 
            />
            
            <Button variant="outline-success" className="btn btn-style">Search</Button>

        </div>
    )
}


