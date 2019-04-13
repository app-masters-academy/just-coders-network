import React, { Component } from 'react';
import { Route, Router, history } from 'react-router';
import App from '../App';
import SignUp from '../components/auth/SignUp';

class Routes extends Component {
    render(){
        return(
            <Router>
                <Route path='/timeline' component={App}/>
                <Route path='/entrar' component={SignUp}/>
            </Router>
        )
    }
}

export default Routes;
