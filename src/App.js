import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'Max Khramkov';
    const age = 34;

    return (
      <div className='App'>
        <h1>Hello, {name} {age + 1}</h1>
      </div>
    );
  }
}

export default App;
