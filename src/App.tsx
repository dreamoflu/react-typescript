
import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.scss';
import Login from './pages/Login/Login'

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <BrowserRouter>
          <Route to='/' component={Login} />
        </BrowserRouter>
     
      </div>
    );
  }
}

export default App;
