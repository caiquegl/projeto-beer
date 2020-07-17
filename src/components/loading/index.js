import React from 'react';
import ReactLoading from 'react-loading';

import './style.css';



export default function ExampLe(props) {
    return (
        <div className={props.status}>
        <ReactLoading type={"spinningBubbles"} color={'#ffc700'} height={'12%'} width={'12%'} />
    </div>
    );
  }


  ExampLe.defaultProps = {
    status: "falseLoader",
  };