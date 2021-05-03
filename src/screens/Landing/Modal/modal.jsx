import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";
import "./style.scss";

const Modal = ({handleModal}) => {

  return(
      <div className="modalBody" >

        <div className="containerModal">
          <ReactPlayer url="https://youtu.be/esNVFOY_tZI" controls width="100%"/>
        

            <span className="cancel" onClick={ handleModal }>+</span>
       
        </div>
        
      </div>
  )
}

export default Modal;