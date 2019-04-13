import React, { Component } from 'react';
import { Route, Router } from 'react-router';
import { createBrowserHistory } from 'history';
import App from '../App';
import SignUp from '../components/auth/SignUp';

class Routes extends Component {
    render(){
        return(
            <Router history={createBrowserHistory()}>
                <Route path='*' component={App}/>
                <Route path='/entrar' component={SignUp}/>
            </Router>
        )
    }
}

export default Routes;
