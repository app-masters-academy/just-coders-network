import React from 'react';
import {Route, Router, Switch} from 'react-router';
import {createBrowserHistory} from 'history';
import App from '../App';
import SignUp from '../components/auth/SignUp';
import PostView from "../components/post/PostView";

class Routes extends React.Component {
    constructor() {
        super();
        const auth = localStorage.getItem('auth');
        this.state = {
            auth: auth ? JSON.parse(auth) : null
        };
        this.setAuth = this.setAuth.bind(this);
    }

    setAuth(auth) {
        this.setState({auth});
    }

    render() {
        return (
            <Router history={createBrowserHistory()}>
                <Switch>
                    {this.state.auth
                        ? <React.Fragment>
                            <Route path='post' component={PostView}/>
                            <Route path='*' component={App}/>
                        </React.Fragment>

                        : <Route
                            path='*'
                            component={() =>
                                <SignUp onSignUp={this.setAuth}/>
                            }/>
                    }
                </Switch>
            </Router>
        )
    }
}

export default Routes;
