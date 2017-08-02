import React, { Component } from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch
// } from 'react-router-dom'

import SearchForm from '../components/searchForm'
// import logo from './logo.svg';
import './App.css';
// import Home from '../views/Home'
// import Signup from '../views/Signup'

class App extends Component {
  render() {
    return (
			<div>
				<div className="main-header">
					<div className="inner">
						<h1 className="main-title">PhotoSearch</h1>
            <SearchForm />
					</div>
				</div>
				<div className="main-content">
				</div>
			</div>
    );
  }
}

export default App;
