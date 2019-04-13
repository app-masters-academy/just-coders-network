import React, {Component} from 'react';
import {Route, Router, Switch} from 'react-router';
import {createBrowserHistory} from 'history';
import App from '../App';
import SignUp from '../components/auth/SignUp';

class Routes extends Component {
    render() {
        return (
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route path='/entrar' component={SignUp}/>
                    <Route path='*' component={App}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;
