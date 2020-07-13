import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";

import './style.css';
import api from '../../../api/api';

export default function ContainerRegistrar(){
    
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

  const history = useHistory();


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

    async function registrarVisitante(e) {
        e.preventDefault();
        sessionStorage.clear();
    
        const registrando = {
          nome,
          email,
          senha,
        };
    
        try {
          const response = await api.post("cadastro", registrando);
          toast.success("Cadastrado com sucesso!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setTimeout(historyHome, 3500);

    
        } catch (error) {
          toast.error("Erro no cadastro, tente novamente", {
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
        <div className="container-regis">
            <h2>Registrar</h2>
            <div className="pai-regis">
                <div className="left">
                    <form onSubmit={registrarVisitante}>
                        <div className="form-group">
                            <label>
                                Nome:
                            </label>
                            <br/>
                            <input 
                            type="text" 
                            placeholder="Digite seu nome"
                            required
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Email:
                            </label>
                            <br/>
                            <input 
                            type="email" 
                            placeholder="Digite seu email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Senha:
                            </label>
                            <br/>
                            <input 
                            type="password" 
                            placeholder="Digite sua senha"
                            required
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                            />
                        </div>
                        <button>Cadastrar</button>
                    </form>
                </div>
                <div className="rigth">
                    <h2>
                        USAMOS SEU E-MAIL DE FORMA
                        100% SEGURA PARA: 
                    </h2>
                    <ul>
                        <li>
                            Identificar seu perfil
                        </li>
                        <li>
                            Notificar sobre novidades
                        </li>
                        <li>
                            Gerenciar seu histórico de comentarios
                        </li>
                        <li>
                            Acelerar o preenchimento de suas informações 
                        </li>
                    </ul>
                </div>
            </div>
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