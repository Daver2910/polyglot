import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/partComponents/Card'

class RegisterPage extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isDeveloper: false,
            isTranslator: false,
            hasSelected: false
        }
    }

    componentDidMount() {

    }

    render () {
        return (
            <div>
                <h2>Register a new account for Free</h2>
                <div className="row flex-row">
                    <React.Fragment>
                        <Card title={'Developer'}
                              summary={'Do you need your website text translated quickly'}
                              button={'Sign up here'}/>
                        <Card title={'Translator'}
                              summary={'Are you looking for translation work into many languages?'}
                              button={'Get a free profile'}/>
                    </React.Fragment>
                </div>
            </div>
        )};
}

export default connect(null, {}) (RegisterPage);
