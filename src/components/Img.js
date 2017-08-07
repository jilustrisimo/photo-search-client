import React, { Component } from 'react'
import SingleImg from './SingleImg'

class Img extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <li>
        <a href={this.props.link}>
          <img src={this.props.url} alt='Unsplash Image Here' />
        </a>
          <a href={this.props.user}>{this.props.name}</a>
      </li>
    )
  }
}

export default Img