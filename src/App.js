import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Users</h1>
        </header>
        <UserList/>
      </div>
    );
  }
}

export default App;
