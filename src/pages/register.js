import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/partComponents/Card'

class RegisterPage extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isDeveloper: false,
            isTranslator: false,
            hasSelected: true
        }
    }

    componentDidMount() {

    }

    renderForm = () => {
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name={'name'}/>

                <label htmlFor="email">email</label>
                <input type="text" name={'email'}/>

                <button >Sign up</button>
            </form>
        )
    };

    selectedDev = () => {
        this.setState({
            isDeveloper: true,
            isTranslator: false,
            hasSelected: true
        })
    };

    selectedTrans = () => {
        this.setState({
            isDeveloper: false,
            isTranslator: true,
            hasSelected: true
        })
    };

    renderSelection = () => {
      return (
          <React.Fragment>
              <h2>Register a new account for Free</h2>
              <div className="row flex-row">
                  <Card  title={'Developer'}
                         summary={'Do you need your website text translated quickly'}
                         button={'Sign up here'}/>
                  <Card title={'Translator'}
                        summary={'Are you looking for translation work into many languages?'}
                        button={'Get a free profile'}/>
              </div>
          </React.Fragment>
      )
    };

    render () {
        return (
            <div>
                {this.state.hasSelected ? this.renderForm() : this.renderSelection() }
            </div>
        )};
}

export default connect(null, {}) (RegisterPage);
