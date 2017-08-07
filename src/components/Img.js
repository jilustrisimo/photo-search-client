import React, { Component } from 'react'

class Img extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <li>
        <a href={this.props.link}>
          <img src={this.props.url} alt='Preview Not Available' title='Open Original'/>
        </a>
        <a href={this.props.user} title='View Photographer Profile'>{this.props.name}</a>
        <a href='#' title='Like Photo'>
          <i className="material-icons icn-thumb">thumb_up</i>
        </a>
      </li>
    )
  }
}

export default Img