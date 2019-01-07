import React from 'react';
import { createPortal } from 'react-dom';

const Modal = () => {
    const Styles = {
        top: '0',
        left: '0',
        height: '100vh',
        position: 'absolute',
        width: '100vw'
    };
    return (
        <div style={Styles}>Modal</div>
    )
};

createPortal(Modal, document.getElementById('modalRoot'));

export default Modal;
