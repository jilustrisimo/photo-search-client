import React, { Component } from 'react'
import { upvote } from '../redux/actions/PhotoActions'

class Img extends Component {

  params = {
    // favorite: {
    //   remote_id: this.props.key,
    //   image_url: this.props.url,
    // }
  }

  handleClick = (e, params) => {
    e.preventDefault()
    this.props.upvote(params)
  }

  render(){
    const href = window.location.href

    let button
    if (href.indexOf('search') <= 0){
      button = 
        <button title='Like Photo' onClick={(e,params) => this.handleClick(e,params)}>
          <i className="material-icons icn-thumb">thumb_up</i>
        </button>
    } else {
      button = null
    }

    return(
      <li>
        <a href={this.props.link}>
          <img src={this.props.url} alt='Preview Not Available' title='Open Original'/>
        </a>
        <a href={this.props.user} title='View Photographer Profile'>{this.props.name}</a>
        <button title='Like Photo' onClick={(e,params) => this.handleClick(e,params)}>
          <i className="material-icons icn-thumb">thumb_up</i>
        </button>
      </li>
    )
  }  
}

export default Img