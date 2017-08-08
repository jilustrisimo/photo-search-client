import React, { Component } from 'react'

class Img extends Component {

  params = {
    favorite: {
      photographer: this.props.name,
      image_url: this.props.url,
      profile_url: this.props.user
    }
  }

  render(){
    return(
      <li>
        <a href={this.props.link} onClick={() => this.props.savePhoto(this.params)} target='_blank'>
          <img src={this.props.url} alt='Preview Not Available' title='View Original'/>
        </a>
        <a href={this.props.user} title='View Photographer Profile'>{this.props.name}</a>
      </li>
    )
  }  
}

export default Img