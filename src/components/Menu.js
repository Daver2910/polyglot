import React, { Component } from 'react';
import MenuItem from './MenuItem'

class Menu extends Component {

    toggle = () => {
        console.log('Toggles')
        return true
    };

    render () {
        return (
            <div className={'side-menu'}>
                <MenuItem />

                <MenuItem />
            </div>
        )
    }
}

const item = (toggle) => {
        let show = false;

            return (
                <React.Fragment>
                    <div className={'side-menu__tab'} onClick={() => { toggle() }}>
                        <p>Hello</p>
                    </div>
                    <div className={show ?'side-menu__drawer--show' : 'side-menu__drawer'}>
                        <ul>
                            <li>Home </li>
                            <li>register</li>
                        </ul>
                    </div>
                </React.Fragment>
            )
};

export default Menu;
