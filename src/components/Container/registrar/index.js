import React from 'react';

import './style.css';

export default function ContainerRegistrar(){

    return (
        <div className="container-regis">
            <h2>Registrar</h2>
            <div className="pai-regis">
                <div className="left">
                    <form action="#">
                        <div className="form-group">
                            <label>
                                Nome:
                            </label>
                            <br/>
                            <input type="text" placeholder="Digite seu nome"/>
                        </div>
                        <div className="form-group">
                            <label>
                                Email:
                            </label>
                            <br/>
                            <input type="email" placeholder="Digite seu email"/>
                        </div>
                        <div className="form-group">
                            <label>
                                Senha:
                            </label>
                            <br/>
                            <input type="password" placeholder="Digite sua senha"/>
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
        </div>
    )
}