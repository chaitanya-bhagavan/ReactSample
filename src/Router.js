
import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Signup from './containers/signup';
import Login from './containers/login';
import Menu from './containers/menu';
import LandingPage from './containers/landingpage';

const RouterComponent = () =>{
    return(
        <Router>
            <Scene key="auth">
                <Scene key="login" component={Login} title="Please Login" />
            </Scene>
        </Router>
    );
};

export default RouterComponent ;
