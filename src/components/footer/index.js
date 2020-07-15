import React, {useState} from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from "react-toastify";


import api from '../../api/api';

export default function Footer(){

    const [email, setEmail] = useState("");

    async function news(e){
        e.preventDefault();

        const data = {
            email: email
        }        
        
        try{

            await api.post('newsletter', data);
            toast.success('Cadastrado com sucesso!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });


        } catch(error){
            toast.error('Já está cadastrado', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }


    return (
        <div className="container-fluid footer">
            <p>Beer Project - copyright </p>
            <form className="my-2 my-lg-0 flex" onSubmit={news}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Assine nosso newsletter:</label>
                    <input 
                    type="email"
                    className="form-control"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    />

                </div>
                <button class="btn btn-style my-2 my-sm-0" type="submit">Enviar</button>

            </form>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
                {/* Same as */}
            <ToastContainer />
        </div>
    )
}