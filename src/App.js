import React, { Component } from 'react';
import Navbar from './Componets/layout/Navbar';
import UsersU from './Componets/users/UsersU';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <UsersU />
        </div>
      </div>
    )
  }
}

export default App;
