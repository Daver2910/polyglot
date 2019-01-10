import React from 'react';
import { connect } from 'react-redux';
import { sendFile } from '../actions';

class DashboardPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            file: null
        }
    };

    render () {
        return (
            <div>
                <h2>Dashboard Page</h2>
                <input type="file" ref={this.fileInput} onInput={e => this.onInput(e)}/>
                <button onClick={e => this.onSubmit(e) }>Submit</button>
            </div>
        )
    };

    onSubmit (e) {
        e.preventDefault();
        console.log(this.state)
        this.props.sendFile({});
    }

    onInput (e) {
        e.preventDefault();
        console.log(e.target.files)
        this.setState({
            file: e.target.files[0]
        })

    }
};

export default connect(null, { sendFile })(DashboardPage);
