import React, {Component} from 'react';
import {Route, Router, Switch} from 'react-router';
import {createBrowserHistory} from 'history';
import App from '../App';
import SignUp from '../components/auth/SignUp';

class Routes extends Component {
    constructor(){
        super();
        this.state = {
            auth: localStorage.getItem('auth')
        }
    }

    render() {
        return (
            <Router history={createBrowserHistory()}>
                <Switch>
                    {this.state.auth
                        ? <Route path='*' component={App}/>
                        : <Route path='*' component={()=> <SignUp />}/> }
                </Switch>
            </Router>
        )
    }
}

export default Routes;
