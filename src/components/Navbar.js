import React from 'react'
import ReactDOM from 'react-dom'
import { 
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () => 
  <div>
    <NavLink
    to='/'
    exact
    style={link}
    activeStyle={{
      background: 'darkblue'
    }}>Home</NavLink>
    <NavLink
    to='/about'
    exact
    style={link}
    activeStyle={{
    background: 'darkblue'
    }}>About</NavLink>
    <NavLink
    to='/search'
    exact
    style={link}
    activeStyle={{
      background: 'darkblue'
    }}>Search</NavLink>
  </div>

export default Navbar