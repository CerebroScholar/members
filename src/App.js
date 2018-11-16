import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Memberpage from './components/Memberpage';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Memberpage />
      </div>
    );
  }
}

export default App;
