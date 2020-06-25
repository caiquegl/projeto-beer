import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'


export default function Efeitos(){
    const history = useHistory();

    

    const [nomeVisita, setNomeVisita] = useState("");
    // const [segundo, setSegundo] = useState(initialOcult);
    // const [nome, setNome] = useState(nom);
    // const [initial, setInitial] =useState("initial");

    

    function pegarNome(e){
        e.preventDefault();
        sessionStorage.clear()
        if (nomeVisita.length > 0) {
            sessionStorage.setItem("nomeVisitante",nomeVisita);
            return history.push("/home");

        }else{
        toast.error('Por favor nos diga seu nome!!!', {
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

    function login(){
        document.getElementById("cadastro-visi").style = "display: none;"
        document.getElementById("cadastro-ocult").style = "display: none;"
        document.getElementById("login-visi").style = "display: block;"
    }
   
    function cadastre(){
        document.getElementById("cadastro-ocult").style = "display: none;"
        document.getElementById("cadastro-visi").style = "display: block;"
        document.getElementById("login-visi").style = "display: none;"



    }

      function visitante(){
        document.getElementById('form-home').style = "display: block";
        document.getElementById('cadastro-ocult').style = "display: block";
        document.getElementById("cadastro-visi").style = "display: none;";
        document.getElementById("login-visi").style = "display: none;"




      }
      
      function aparecendoSegundo(){
        document.getElementById('segundo').style = "display: block";
        
    } 

    function aparecendoPrimeiro(){
        document.getElementById('primeiro').style = "opacity: 1";
    } 
    function movendo(){
        document.getElementById('primeiro').style = "transform: translateX(-800px); opacity: 0";
      }
      function ocutandoPirmeiro(){
        document.getElementById('primeiro').style = "display: none";
      }

    function move(){
        movendo();
        setTimeout(ocutandoPirmeiro, 1000)
        setTimeout(aparecendoSegundo, 1100)

      }
    function sumindoPrimeiro(){
        document.getElementById('primeiro').style = "opacity: 0";
        move();
    } 
    
    function time(){
        setTimeout(aparecendoPrimeiro, 500);
    }




    window.onload = time;

    return(
        <div className="pg-total">
            

            {/* começo primeira fase */}
            <div className="primeira-fase" id="primeiro">
                <h2>Bem vindo</h2>
                <p>Essa pagina é dedicada a pessoas maiores de 18 anos, pressione enter ou clique abaixo.</p>
                <button className="btn btn-entrar" onClick={sumindoPrimeiro}>Entrar</button>
            </div>
            {/* termino primeira fase */}

            {/* começo segunda fase */}
            <div className="segunda-fase" id="segundo">
                <div>
                    <h2>Gostaria de entrar como:</h2>
                </div>
                <div className="flex-entrar">
                    <button className="btn btn-entrar"  onClick={visitante}>Visitante</button>
                    <p>ou caso já tenha cadastro</p>
                    <button className="btn btn-entrar"  onClick={login}>Login</button>
                </div>
                <div id="cadastro-ocult">
                    <form className="form-ocult" id="form-home" onSubmit={pegarNome}>
                        <div className="form-group">
                            <label for="nome">Digite seu nome:</label>
                            <div className="form-flex">
                                <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Digite seu nome" 
                                value={nomeVisita}
                                onChange={e => setNomeVisita(e.target.value)}
                                />
                                <button className="btn btn-entrar" type="submit">Entrar</button>
                            </div>

                        </div>
                    </form>
                    <div className="cadastre">
                        <button className="sem-estilo" onClick={cadastre}>Cadastre-se</button>
                    </div>
                </div>
                    <div id="cadastro-visi">
                        <form>
                            <div className="form-group">
                                <label for="nome">Digite seu nome:</label>
                                <input type="text" placeholder="Digite seu nome" className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label for="email">Digite seu email:</label>
                                <input type="email" placeholder="Digite seu email" className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label for="senha">Digite sua senha:</label>
                                <input type="password" placeholder="Digite seu senha" className="form-control" required/>
                            </div>
                            <button className="btn btn-cadastrar">Cadastrar</button>
                        </form>
                    </div>
                    <div id="login-visi">
                    <form>
                            <div className="form-group">
                                <label for="nome">Digite email:</label>
                                <input type="email" placeholder="Digite seu email" className="form-control" required/>
                            </div>
                            
                            <div className="form-group">
                                <label for="senha">Digite sua senha:</label>
                                <input type="password" placeholder="Digite seu senha" className="form-control" required/>
                            </div>
                            <button className="btn btn-cadastrar">Cadastrar</button>
                        </form>
                    </div>

            </div>
            {/* termino segunda fase */}

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