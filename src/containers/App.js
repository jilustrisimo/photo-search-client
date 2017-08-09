import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
	Switch
} from 'react-router-dom'

import SearchForm from './searchForm'
import ImgList from './ImgList'
import Navbar from '../components/Navbar'
import RecentList from './RecentList'
import RecentHeader from '../components/RecentHeader'
import Home from '../components/Home'
import About from '../components/About'
import '../styles/App.css'

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
							<Route exact path='/recent' component={RecentHeader}/>
							<Route exact path='/' render={Home}/>
							<Route exact path='/about' render={About}/>
							<Route exact path='/search' component={ImgList}/> 
							<Route exact path='/recent' component={RecentList}/> 
						</div>
					</div>
				</Switch>
			</Router>
    );
  }
}

export default App;
