
import React, { Component } from 'react';
import * as nb from 'native-base'
import { Scene, Router, Actions, Modal } from 'react-native-router-flux';
//import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Login from './containers/login';
import Menu from './containers/menu';

import FaCode from './containers/2fa';



// import  QuickBuy from './containers/quickBuy1';

class App extends Component {
    render () {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router>
                    <Modal>
                    <Scene key="auth"> 
                        <Scene key="login" component={Login} title="Please Login" initial/>
                        <Scene key="Menu"  component={Menu} />
                        <Scene key="FaCode"  component={FaCode}  />
                    </ Scene>
                    </Modal>
                </ Router>
            </Provider>
        );
    }
}

export default App ;
