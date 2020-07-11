import React, { useState, useEffect, Component  } from "react";
import { ToastContainer, toast } from "react-toastify";
import BeautyStars from 'beauty-stars';

import api from "../../api/api";
import './style.css';




export default function InfoCerveja() {
  const [comentar, setComentar] = useState("");
  const [state, setState] = useState("");


  const capturarNome = sessionStorage.getItem("nomeVisitante");
  const idCerveja = sessionStorage.getItem("idCerveja");
  const idVisitante = sessionStorage.getItem("idVisitante");

  const [comentarios, setComentarios] = useState([]);

 

  const data = {
    idCerveja: idCerveja,
    idUsuario: idVisitante,
  };

  useEffect(() => {
    api.post("listComentando", data).then((response) => {
      setComentarios(response.data);
    });
  }, []);

  async function deletando(id) {
    try {
      const response = await api.post("deleteComentario", {
        idComentario: id,
        idUsuario: idVisitante,
        idCerveja,
      });

      let validando = response.data.msg;

      console.log(validando);

      if (typeof validando === "undefined") {
        toast.error(response.data, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.success("Excluido com sucesso!", {
          position: "bottom-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      api.post("listComentando", data).then((response) => {
        setComentarios(response.data);
      });
    } catch (err) {
      toast.error("Erro", {
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

  async function postComentar(e) {
    e.preventDefault();

    const data = {
      comentario: comentar,
      nomeUsuario: capturarNome,
      idCerveja: idCerveja,
      idUsuario: idVisitante,
      nota: state.value,
    };

    if(data.nota === undefined){

      toast.error("Esqueceu das estrelas", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }

    try {
      let response = await api.post("comentando", data);
      let validacao = response.data.msg;
      if (typeof validacao === "undefined") {
        toast.success("Comentado com sucesso!", {
          position: "bottom-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        api.post("listComentando", data).then((response) => {
          setComentarios(response.data);
        });
      } else {
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
    } catch (err) {
      toast.error("Esqueceu das estrelas", {
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
    <div className="user-comentarios">
      <div>
      {comentarios.map((coment) => (
        <div className="divisao-coments">
          <div className="comentarios">
            <h2>{coment.nomeUsuario}</h2>
            <BeautyStars
          value={coment.nota}
          size="20px"
          editable="false"
          activeColor={"#f3cb06"}
          inactiveColor={"#808080"}
          onChange={value => setState({ value })}
          />
            <p>{coment.comentario}</p>
            <div className="curtir">
              <p>{coment.dataCriada}</p>
              <button onClick={() => deletando(coment.idComentario)}>
                Deletar
              </button>
            </div>
          </div>
        </div>
      ))}
      </div>

      <div className="fazer-coment">
        <h1>Faça um comentario</h1>
        <p>
          Diga a baixo o que você achou <strong>{capturarNome}</strong>:
        </p>
        <form onSubmit={postComentar} id="stars">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={comentar}
            onChange={(e) => setComentar(e.target.value)}
          ></textarea> 

          <BeautyStars
          value={state.value}
          size="20px"
          activeColor={"#f3cb06"}
          inactiveColor={"#808080"}
          onChange={value => setState({ value })}
        
          />

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
    </div>
  );
}
