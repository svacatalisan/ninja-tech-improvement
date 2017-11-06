import React, { Component } from 'react';
import './App.css';

class App extends Component{
  componentWillMount() {
    console.log(1);
  }

  componentDidMount() {
    console.log(1);
  }

  render() {
    console.log(1);
    return (
      <div className="App">
        <div className="App-header">
          <img  className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
           Alex  are mere To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
