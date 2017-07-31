import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';


import logo from './logo.svg';
import './App.css';
import Home from '../views/Home'
import Signup from '../views/Signup'

class App extends Component {
  render() {
    return (
      <Router>
         <div className="App">
          <div className="App-header">
            {/* <div className='navbar'> */}
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
              </Switch>
            </div>
          {/* </div> */}
          </div>
      </Router>
    );
  }
}

export default App;
