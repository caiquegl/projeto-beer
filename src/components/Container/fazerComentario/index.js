import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import { MDBContainer, MDBRating, MDBInput  } from 'mdbreact';
import { ToastContainer, toast } from "react-toastify";


import api from '../../../api/api';


export default function CriarComentario(){


    const [comentar, setComentar] = useState("");

    const capturarNome = sessionStorage.getItem("nomeVisitante");
    const idCerveja = sessionStorage.getItem("idCerveja");
    const idVisitante = sessionStorage.getItem("idVisitante");


    if(capturarNome == null){
        capturarNome = "Visitante";
    }

    const [basic] = useState([
        {
          tooltip: 'Muito ruim'
        },
        {
          tooltip: 'Ruim'
        },
        {
          tooltip: 'Ok',
        },
        {
          tooltip: 'Boa',
          choosed: true
        },
        {
          tooltip: 'Excelente'
        }
      ]);

      async function postComentar(e){
        e.preventDefault();


          const data = {
              comentario: comentar,
              nomeUsuario: capturarNome,
              idCerveja: idCerveja,
              idUsuario: idVisitante
          }

        try{
            let response = await api.post('comentando', data);
            let validacao = response.data.msg;
            if(typeof validacao === "undefined"){

                toast.success('Comentado com sucesso!', {
                    position: "bottom-right",
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });


            }else{
                toast.error("Só pode fazer um comentario por cerveja", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }

      } catch(err){
        console.log(err)
        alert("error")
      }
    }


    return (


        <div className="fazer-coment">
                            <h1>Faça um comentario</h1>
                            <p>Diga a baixo o que você achou <strong>{capturarNome}</strong>:</p>
                            <form onSubmit={postComentar}>
                                <textarea 
                                class="form-control" 
                                id="exampleFormControlTextarea1" 
                                rows="3"
                                value={comentar}
                                onChange={e => setComentar(e.target.value)}
                                ></textarea>
                                <MDBContainer>
                                    <MDBRating data={basic}/>
                                </MDBContainer>
                                <button>Comentar</button>

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