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
        };
        this.setAuth = this.setAuth.bind(this);
    }

    setAuth(auth){
        this.setState({auth});
    }

    render() {
        return (
            <Router history={createBrowserHistory()}>
                <Switch>
                    {this.state.auth
                        ? <Route path='*' component={App}/>
                        : <Route
                            path='*'
                            component={()=>
                                <SignUp onSignUp={this.setAuth}/>
                            } />
                    }
                </Switch>
            </Router>
        )
    }
}

export default Routes;
