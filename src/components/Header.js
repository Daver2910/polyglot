import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './partComponents/LanguageSelector'
import Modal from '../components/partComponents/Modal';

class Header extends Component {
    ModalContent = {
        modal: <div className='modal-content'>Modal</div>
    };

    handleClick = () => {
        console.log('fired')
        return (
            Modal(this.ModalContent)
        )
    };

    render () {
        return (
            <div className={'ui menu'}>
                <div className={'left align'}>
                    <Link className={'navbar-logo'} to={'/'}>Logo</Link>
                </div>
                <div className={'right align menu'}>

                    <Link className={'button green ui'} to={'/register'}>Sign up</Link>
                    <button onClick={ () => Modal(this.ModalContent) } className={'button red ui'}>Login</button>
                </div>
            </div>
        )
    }
}

export default Header;
