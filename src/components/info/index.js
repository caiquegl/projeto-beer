import React,{useState, useEffect} from 'react';
import Zoom from 'react-img-zoom';
import { MDBContainer, MDBRating, MDBInput  } from 'mdbreact';



import './style.css';




import api from '../../api/api';








export default function InfoCerveja(){

    const [infoCerveja, setInfoCerveja] = useState([])

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




    const idCerveja = sessionStorage.getItem("idCerveja");

    const data = {
        id: idCerveja,
    }

    useEffect(()=>{
        api.post('listCervejaId',data).then(response => {
            setInfoCerveja(response.data);
        })
      }, [])

      



    return(
        <div>
            {infoCerveja.map(info => (
                info.foto
            ))}

        </div>
    )
}