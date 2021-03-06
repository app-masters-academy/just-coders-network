import React, {Component, Fragment} from 'react';
import {Route, Router, Switch} from 'react-router';
import {createBrowserHistory} from 'history';
import App from '../App';
import SignUp from '../components/auth/SignUp';
import PostView from "../components/post/PostView";
import Header from "../components/header";

class Routes extends Component {
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
                <Fragment>
                    <Route path='*' component={Header}/>
                    {this.state.auth
                        ? <Switch>
                            <Route path='/post/:postId' component={PostView}/>
                            <Route exact path='/' component={App}/>
                            <Route path='*' component={()=> <div>404</div>}/>
                        </Switch>

                        : <Route
                            path='*'
                            component={() =>
                                <SignUp onSignUp={this.setAuth}/>
                            }/>
                    }
                </Fragment>
            </Router>
        )
    }
}

export default Routes;
