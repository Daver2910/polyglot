import React, {Component } from 'react';
import Modal from '../components/partComponents/Modal';
import axios from 'axios';

class HomePage extends Component {
    constructor(props){
        super(props);

        this.uploadInput = React.createRef();
    };

    onSubmit(e) {
      e.preventDefault();
      let file = this.uploadInput.current.files[0];
      console.log(this.uploadInput.current);
      console.dir(file);
      axios.post('http://127.0.0.1:8000/file-upload/', file, {
          headers: {
              'Content-Type': 'application/json'

          }
      });
    };

    render () {
        return (
            <div>
                <label htmlFor="file-upload">Upload file</label>
                <br/>
                <input type="file" name={'file-upload'} ref={this.uploadInput}/>
                <br/>
                <button onClick={ e => this.onSubmit(e) }>Send file</button>
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
