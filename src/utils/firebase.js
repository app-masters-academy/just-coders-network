import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB8GkEY2guLNAKfu3q2dzqqtH6rUPHGsuc",
    authDomain: "jc-net.firebaseapp.com",
    databaseURL: "https://jc-net.firebaseio.com",
    projectId: "jc-net",
    storageBucket: "jc-net.appspot.com",
    messagingSenderId: "889748138750"
};
firebase.initializeApp(config);

const githubProvider =  new firebase.auth.GithubAuthProvider();
const firebaseAuth = firebase.auth();

export { githubProvider, firebaseAuth }
