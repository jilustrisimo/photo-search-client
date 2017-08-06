import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
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
			<div>
				<div className="main-header">
					<div className="inner">
						<h1 className="main-title">PhotoSearch</h1>
             <Router>
							 <div>
								 <Navbar/>
								 <Route exact path='/' render={Home}/>
								 <Route exact path='/about' render={About}/>
							 </div>
						 </Router>
					</div>
				</div>
				<div className="main-content">
					 <ImgList />
				</div>
			</div>
    );
  }
}

export default App;
