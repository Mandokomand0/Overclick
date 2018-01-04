import React, { Component, createClass } from 'react';
import Results from './components/Results';
import Heroes from './pages/HeroButtons';

import './App.css';

class App extends Component {
  heroObject=[
    Mcree : {
      number:1,
      picture: 'assets/pic/mcree.jpg'
    },
    Mercy : {
      number:2,
      picture: 'assets/pic/mercy.png'
    },
    Sombra: {
      number:3,
      picture: 'assets/pic/sombra.jpg'
    },
    DVa: {
      number:4,
      picture: 'assets/pic/dva.png'
    },
    Soldier: {
      number:5,
      picture: 'assets/pic/soldier76.png'
    },
    Zenyatta: {
      number:6,
      picture: 'assets/pic/zenyatta.jpg'
    },
    Moira: {
      number:7,
      picture: 'assets/pic/moira.jpg'
    },
    Reinhardt: {
      number:8,
      picture: 'assets/pic/reinhardt.jpg'
    },
    Hanzo: {
      number:9,
      picture: 'assets/pic/hanzo.png'
    }
  ]

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='./assets/pic/Spray_-_Logo.png' className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Overclick</h1>

        </header>
      {/*}  <Results />*/}
      <Heroes hero = {this.heroObject} />



      </div>
        );
      }
    }


export default App;
