import React, { Component } from 'react';
import './App.css';

class App extends Component{
  componentWillMount() {}

  componentDidMount() {}

  componentShouldUpdate() {
    return true;
  }
  render() {
    debugger;
    return (
      <div className="App">
        <div className="App-header">
          <img  className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
