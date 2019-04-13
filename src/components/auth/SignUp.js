import React, {Component} from 'react';
import {firebaseAuth, githubProvider} from '../../utils/firebase';

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
                <button>Entrar com Github</button>
            </div>
        );
    }
}

export default SignUp;
