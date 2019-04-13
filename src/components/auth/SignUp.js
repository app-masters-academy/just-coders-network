import React, {Component} from 'react';
import axios from 'axios';
import {firebaseAuth, githubProvider} from '../../utils/firebase';
import {signUp} from '../../utils/database';

class SignUp extends Component {
    async loginWithGithub() {
        try {
           const data = await irebaseAuth.signInWithPopup(githubProvider)
        } catch(error) {
            console.error(error);
        }
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
