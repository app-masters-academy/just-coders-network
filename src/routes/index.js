import React, {Component} from 'react';
import {Route, Router, Switch} from 'react-router';
import {createBrowserHistory} from 'history';
import App from '../App';
import SignUp from '../components/auth/SignUp';

class Routes extends Component {
    render() {
        const auth = localStorage.getItem('auth');
        return (
            <Router history={createBrowserHistory()}>
                <Switch>
                    {auth
                        ? <Route path='*' component={SignUp}/>
                        : <Route path='*' component={App}/>
                    }


                </Switch>
            </Router>
        )
    }
}

export default Routes;
