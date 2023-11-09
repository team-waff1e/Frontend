import React from "react";
import '../styles/cpm.css';


//빈칸입력시 활성 모달
const CreatePostModal = ({onClose, children})=>{
    return(
        <div className ="modal">
            <div className ="modal-content">
                {/* <button className="close-button" onClick={onClose}>
                    &times;
                </button> */}
                {children}
            </div>
        </div>
    )
}

export default CreatePostModal;