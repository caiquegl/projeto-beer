import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../api/api';


export default function Efeitos(){

    const [nomeVisita, setNomeVisita] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [senhaLogando, setSenhaLogando] = useState("");
    const [emailLogando, setEmailLogando] = useState("");



    async function historyHome(){

        const login = {
            email,
            senha,
        }

        const logando = await api.post('logando', login);


        sessionStorage.setItem("nomeVisitante",logando.data.nome);
        sessionStorage.setItem("idVisitante",logando.data.idUsuario);

        return history.push("/home");
        
    }

    async function logando(e){
        e.preventDefault();
        sessionStorage.clear()

        const data = {
            email: emailLogando,
            senha: senhaLogando,
        };

        console.log(logando);
        
        try{

            const response = await api.post('logando', data);
            let validando = response.data.nome;
            
            if(typeof validando === 'undefined'){
                   toast.error("Usuario ou senha invalidos", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }else{
                sessionStorage.setItem("nomeVisitante",response.data.nome);
                sessionStorage.setItem("idVisitante",response.data.idUsuario);

                history.push('/home');
            }

            

        } catch(error){

            toast.error("Usuario ou senha invalidos", {
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

    async function register(e){
        e.preventDefault();
        sessionStorage.clear()


        const registrando = {
            nome,
            email,
            senha
        };
        
        try{

            const response = await api.post('cadastro', registrando);
            toast.success('Cadastrado com sucesso!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

                

                


                setTimeout(historyHome, 5000);

        } catch(error){
            toast.error('Erro no cadastro, tente novamente', {
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

    const history = useHistory();

    

    // const [segundo, setSegundo] = useState(initialOcult);
    // const [nome, setNome] = useState(nom);
    // const [initial, setInitial] =useState("initial");

    

    function pegarNome(e){
        e.preventDefault();
        sessionStorage.clear()
        if (nomeVisita.length > 0) {
            sessionStorage.setItem("nomeVisitante",nomeVisita);
            sessionStorage.setItem("idVisitante",0);

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
        sessionStorage.clear()

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
                    <button className="btn btn-entrar"  >Visitante</button>
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
                        <form onSubmit={register}>
                            <div className="form-group">
                                <label for="nome">Digite seu nome:</label>
                                <input 
                                type="text" 
                                placeholder="Digite seu nome" 
                                className="form-control" 
                                required
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label for="email">Digite seu email:</label>
                                <input 
                                type="email" 
                                placeholder="Digite seu email" 
                                className="form-control" 
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label for="senha">Digite sua senha:</label>
                                <input 
                                type="password" 
                                placeholder="Digite seu senha" 
                                className="form-control" 
                                required
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-cadastrar">Cadastrar</button>
                        </form>
                    </div>
                    <div id="login-visi">
                    <form onSubmit={logando}>
                            <div className="form-group">
                                <label for="nome">Digite email:</label>
                                <input 
                                type="email" 
                                placeholder="Digite seu email" 
                                className="form-control" 
                                required
                                value={emailLogando}
                                onChange={e => setEmailLogando(e.target.value)}
                                />
                            </div>
                            
                            <div className="form-group">
                                <label for="senha">Digite sua senha:</label>
                                <input 
                                type="password" 
                                placeholder="Digite seu senha" 
                                className="form-control" 
                                required
                                value={senhaLogando}
                                onChange={e => setSenhaLogando(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-cadastrar">Entrar</button>
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