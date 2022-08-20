import React from "react";

const Modal = ({ selectedImg }) => {
    return(
        <div className="backdrop">
            <img src={selectedImg} alt="modal" />
        </div>
    )
}

export default Modal;