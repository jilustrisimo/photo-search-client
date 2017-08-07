import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
	Switch
} from 'react-router-dom'

import SearchForm from '../components/searchForm'
import ImgList from '../containers/ImgList'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import './App.css'

class App extends Component {
  render() {
    return (
			<Router>
				<Switch>
					<div>
						<div className="main-header">
							<div className="inner">
								<Navbar/>
								<h1 className="main-title">PhotoSearch</h1>
								<Route exact path='/search' component={SearchForm}/>
							</div>
						</div>
						<div className="main-content">
							<Route exact path='/' render={Home}/>
							<Route exact path='/about' render={About}/>
							<Route exact path='/search' component={ImgList}/> 
						</div>
					</div>
				</Switch>
			</Router>
    );
  }
}

export default App;
