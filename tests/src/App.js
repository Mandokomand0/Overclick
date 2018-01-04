import React, { Component } from 'react';
import Results from './components/Results'
import Heroes from './pages/HeroButtons'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='./assets/pic/Spray_-_Logo.png' className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Overclick</h1>

        </header>
        <Results />
          <Heroes />
      </div>
    );
  }
}

export default App;
