import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="Hello">Hello, React! I am ITJackChan! Nice to meet you!</p>
        <p>Hello, everyone! Welcome to learn from each other and make progress together! I am Chen Yibiao!</p>
        <a href="https://github.com/ITJackChan">Click to GitHub Address</a>
      </div>
    );
  }
}

export default App;
