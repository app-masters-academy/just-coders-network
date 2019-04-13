import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD8GAQsiRE89DOBYBuBtSAJnB71yXbN2KA",
    authDomain: "just-coders-network.firebaseapp.com",
    databaseURL: "https://just-coders-network.firebaseio.com",
    projectId: "just-coders-network",
    storageBucket: "just-coders-network.appspot.com",
    messagingSenderId: "556023047356"
};
firebase.initializeApp(config);

const githubProvider =  new firebase.auth.GithubAuthProvider();
const firebaseAuth = firebase.auth();

export { githubProvider, firebaseAuth }
