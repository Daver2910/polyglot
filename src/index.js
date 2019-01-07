import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import './assets/scss/main.scss';
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import AllReducers from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(AllReducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDom.render(
    <Provider store={Store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
