import React, { Component } from 'react';
import Users from './components/Users';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Users/>
      </BrowserRouter>
    );
  }
}

export default App;
