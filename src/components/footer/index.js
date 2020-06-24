import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Footer(){
    return (
        <div className="container-fluid footer">
            <p>Beer Project - copyright </p>
            <form className="my-2 my-lg-0 flex">
                <div className="form-group">
                    <label for="exampleInputEmail1">Assine nosso newsletter:</label>
                    <input type="email" className="form-control" placeholder="Digite seu email"/>

                </div>
                <button class="btn btn-style my-2 my-sm-0" type="submit">Enviar</button>

            </form>
        </div>
    )
}