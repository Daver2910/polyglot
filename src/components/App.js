import React, { Component, Fragment } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import HomePage from "../pages/home";
import DashboardPage from "../pages/dashboard";
import OffersPage from "../pages/offers";
import RegisterPage from "../pages/register";
import SettingsPage from "../pages/setting";
import history from '../history';

class App extends Component {
    render() {
        return (
            <div className="">
                <Router history={history}>
                    <Fragment>
                        <Header/>
                        <Switch>
                            <Route path={'/'} exact component={HomePage}/>
                            <Route path={'/dashboard'} exact component={DashboardPage}/>
                            <Route path={'/offers'} exact component={OffersPage}/>
                            <Route path={'/register'} exact component={RegisterPage}/>
                            <Route path={'/settings'} exact component={SettingsPage}/>
                        </Switch>
                    </Fragment>
                </Router>
            </div>
        );
    }
}

export default App;
