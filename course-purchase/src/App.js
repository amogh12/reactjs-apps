import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    var courses = [
      {name: 'Complete PHP Course', price: 299},
      {name: 'Complete Java dev Course', price: 50},
      {name: 'Complete C# Course', price: 399},
      {name: 'Complete PHP Course', price: 199}
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course Purchase Page</h1>
        </header>

        <Coursesales items = {courses} />
      </div>
    );
  }
}

export default App;
