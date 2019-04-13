import React, {Component} from 'react';
import axios from 'axios';
import {firebaseAuth, githubProvider} from '../../utils/firebase';
import {signUp} from '../../utils/database';

class SignUp extends Component {
    loginWithGithub() {
        firebaseAuth.signInWithPopup(githubProvider).then(data => {
           console.log(data);
        }).catch(error => {
            console.error(error);
        })
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.loginWithGithub()}>Entrar com Github</button>
            </div>
        );
    }
}

export default SignUp;
