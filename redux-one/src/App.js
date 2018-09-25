import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components.
import Home from './components/Home/Home';
import Content from './components/Content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React REDUX 1</h1>
        </header>
        <Home />
        <Content />
      </div>
    );
  }
}

export default App;
