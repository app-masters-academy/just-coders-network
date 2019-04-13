import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import App from '../App';
import SignUp from '../components/auth/SignUp';

class Routes extends Component {
    render(){
        return(
            <div>
                <Route path='/timeline' component={App}/>
                <Route path='/entrar' component={SignUp}/>
            </div>
        )
    }
}

export default Routes;
