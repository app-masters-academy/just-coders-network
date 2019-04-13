import React, {Component} from 'react';
import {firebaseAuth, githubProvider} from '../../utils/firebase';

class SignUp extends Component {
    loginWithGithub() {
        firebaseAuth.signUpWithPopup()
    }

    render() {
        return (
            <div>
                <button>Entrar com Github</button>
            </div>
        );
    }
}

export default SignUp;
