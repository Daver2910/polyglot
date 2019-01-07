import React from 'react';
import { createPortal } from 'react-dom';
import history from '../../history';

const Modal = (props) => {
    console.log('called Modal');

    return (
        <div className="modal" >
            <div className={'modal__background'}>
                <p >heel</p>
            </div>
        </div>
    )
};

createPortal(Modal, document.getElementById('modalRoot'));

export default Modal;
