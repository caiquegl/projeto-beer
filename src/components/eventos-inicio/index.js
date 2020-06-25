import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Efeitos(){
    const history = useHistory();

    

    const [nomeVisita, setNomeVisita] = useState("");
    // const [segundo, setSegundo] = useState(initialOcult);
    // const [nome, setNome] = useState(nom);
    // const [initial, setInitial] =useState("initial");

    function pegarNome(){
        if (nomeVisita.length > 0) {
            sessionStorage.setItem("nomeVisitante",nomeVisita);

        }else{
            window.alert("Por favor digite seu nome!!!")
        }

    }
    
    function salvarVisitanteInput(e){
        e.preventDefault();
        pegarNome();
        return window.location.replace("http://localhost:3000/home");

        console.log(sessionStorage.getItem("nomeVisitante"));
    }
    

    document.addEventListener('keydown', function(e){
        if(e.key == 'Enter'){
          document.getElementById("Enter").click();
        }
      }, false);

      function visitante(){
        document.getElementById('form-home').style = "display: block";

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
                <button className="btn btn-entrar" id="Enter" onClick={sumindoPrimeiro}>Entrar</button>
            </div>
            {/* termino primeira fase */}

            {/* começo segunda fase */}
            <div className="segunda-fase" id="segundo">
                <div>
                    <h2>Gostaria de entrar como:</h2>
                </div>
                <div className="flex-entrar">
                    <button className="btn btn-entrar" id="Enter" onClick={visitante}>Visitante</button>
                    <p>ou caso já tenha cadastro</p>
                    <button className="btn btn-entrar" id="Enter" onClick={sumindoPrimeiro}>Login</button>
                </div>
                <form className="form-ocult" id="form-home" onSubmit={salvarVisitanteInput}>
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
                    <p className="cadastre">Cadastre-se</p>
                </div>

            </div>
            {/* termino segunda fase */}

        </div>
    )
}