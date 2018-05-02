import React, { Component } from 'react';
var firebase = require('firebase');
var uuid = require('uuid');

var config = {
    apiKey: "AIzaSyAXd0PDgL3X3pboAoc19umDl7mhQFb5Adk",
    authDomain: "usurvey-1ab0b.firebaseapp.com",
    databaseURL: "https://usurvey-1ab0b.firebaseio.com",
    projectId: "usurvey-1ab0b",
    storageBucket: "usurvey-1ab0b.appspot.com",
    messagingSenderId: "519567514703"
  };
firebase.initializeApp(config);



export default class Usurvey extends Component {

    nameSubmit(event) {
        var studentName = this.refs.name.value;
        this.setState({studentName: studentName},  function() {
            console.log(this.state);
        });
    }
    constructor(props) {
        super(props);
        
        this.state = {
            uid: uuid.v1(),
            studentName: '', 
            answers: {
                answer1: '',
                answer2: '',
                answer3: ''
            },
            isSubmitted: false
        };

        this.nameSubmit = this.nameSubmit.bind(this);
    }
    
    render() {
        var studentName;
        var questions;

        if(this.state.studentName === '' && this.state.isSubmitted === false) {
            studentName = <div>
                <h1>Hey Student, please let us know your name: </h1>
                <form onSubmit={this.nameSubmit}>
                    <input className="namy" type="text" placeholder="Enter your name" ref="name" />
                </form>
            </div>;

            questions = '';
        } else if(this.state.studentName != '' && this.state.isSubmitted === false) {

        }
        return (
        <div>
            {studentName}
            --------------------------------------------------
            {questions}
        </div>
        )
    }
};
