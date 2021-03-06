import React, { Component } from 'react';
var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyD_nBG9sFsjxpYbQTBNXWx7EYm4Y87JIY8",
    authDomain: "fir-login-f2c39.firebaseapp.com",
    databaseURL: "https://fir-login-f2c39.firebaseio.com",
    projectId: "fir-login-f2c39",
    storageBucket: "fir-login-f2c39.appspot.com",
    messagingSenderId: "934696851495"
};
firebase.initializeApp(config);



export default class Authentication extends Component {

    google(event) {
        var provider = new firebase.auth.GoogleAuthProvider();
        var promise = firebase.auth().signInWithPopup(provider);
        promise.then(result => {
            var user = result.user;
            firebase.database().ref('users/' + user.uid).set({
                email: user.email,
                name: user.displayName
            });
        });

        promise.catch(e => {
            var msg = e.message;
        });
    }

    login(event) {
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        console.log(email, password);

        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, password);

        promise.then(user => {
            var lout = document.getElementById('logout')
            lout.classList.remove('hide');
        });
        promise.catch(e => {
            var err = e.message;
            console.log(err);
            this.setState({err: err});
        });
    }

    signup(event) {
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, password);
       
        promise
        .then(user => {
            var err = "Welcome " + user.email;
            firebase.database().ref('users/' + user.uid).set({
                email: user.email
            });
            this.setState({err: err});
        });
        promise
        .catch(e => {
            var err = e.message;
            console.log(err);
            this.setState({err: err});
        })
    }

    logout(event) {
        firebase.auth().signOut();
        var lout = document.getElementById('logout')
        lout.classList.add('hide');
    }

    constructor(props) {
        super(props);
        this.state = {
            err: ''
        };
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.logout = this.logout.bind(this);
        this.google = this.google.bind(this);
    }

    render() {
        return (
            <div>
                <input id="email" ref="email" type="email" placeholder="Enter your email" /><br />
                <input id="pass" ref="password" type="password" placeholder="Enter your password" /><br />
                <p>{this.state.err}</p>
                <button onClick={this.login}>Log In</button>
                <button onClick={this.signup}>Sign Up</button>
                <button id="logout" className="hide" onClick={this.logout}>Log Out</button> <br />
                <button id="google" className="google" onClick={this.google}>Sign In with Google</button>
            </div>
        )
    }
};
