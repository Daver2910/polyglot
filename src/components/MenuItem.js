import React from "react";

class MenuItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openDrawer: false
        }
    }

    toggle = () => {
        this.setState({
            openDrawer: !this.state.openDrawer
        })
    };

    render() {
        return (
            <React.Fragment>
                <div className={'side-menu__tab'} onClick={() => { this.toggle() }}>
                    <p>Hello</p>
                </div>
                {this.state.openDrawer && (<div className={'side-menu__drawer'}>
                    <ul>
                        <li>Home</li>
                        <li>register</li>
                    </ul>
                </div>) }
            </React.Fragment>
        )
    };
}

export default MenuItem;
