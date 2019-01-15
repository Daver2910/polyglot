import React, {Component } from 'react';
import Modal from '../components/partComponents/Modal';
import axios from 'axios';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            isDone: false
        }
        this.uploadInput = React.createRef();
    };

    onSubmit(e) {
      e.preventDefault();
      let file = this.uploadInput.current.files[0];
      console.log(this.uploadInput.current);
      console.dir(file);
      axios({
          url: 'http://127.0.0.1:4000/products/1',
          method: 'get',
          headers: {
              'Content-Type': 'application/json',
              "Accept": "application/json",
              "X-Requested-With": "XMLHttpRequest",
              "Cache-Control": "no-cache,no-store"
          }
      })
          // .then(() => {
          //     this.setState({
          //         isDone: true
          //     })
          // })
          // .catch(err => {
          //     console.log(err)
          // })
    };

    render () {
        return (
            <div>
                <label htmlFor="file-upload">Upload file</label>
                <br/>
                <input type="file" name={'file-upload'} ref={this.uploadInput}/>
                <br/>
                <label htmlFor="noting">Upload file</label>
                <br/>
                <input type="text" name="noting"/>
                <br/>
                <button onClick={ e => this.onSubmit(e) }>Send file</button>
                <br/>
                <br/>
                { this.state.isDone && <p>Done</p>}
            </div>
        )
    }
    jsonPrinter (obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key) && (typeof obj[key] === "object")) {
                this.jsonPrinter(obj[key])
            }
            console.log(key + " -> " + obj[key]);
        }
    }
};

export default HomePage;
