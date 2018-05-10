import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

import Users from './components/Users';

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
