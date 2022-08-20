import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) =>{
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null)
        }
        
    }

    return(
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="modal" />
        </div>
    )
}

export default Modal;