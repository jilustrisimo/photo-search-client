import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { saveImg } from '../redux/actions/ImgActions'

class Img extends Component {

  params = {
    favorite: {
      photographer: this.props.name,
      image_url: this.props.url,
      profile_url: this.props.user
    }
  }

  handleClick = params => {
    this.props.saveImg(params)
  }

  render(){

    return(
      <li>
        <a href={this.props.link} onClick={() => this.handleClick(this.params)} target='_blank'>
          <img src={this.props.url} alt='Preview Not Available' title='View Original'/>
        </a>
        <a href={this.props.user} title='View Photographer Profile'>{this.props.name}</a>
      </li>
    )
  }  
}

const matchDispatchToProps = dispatch => {
	return bindActionCreators({saveImg: saveImg}, dispatch)
}

export default connect(null, matchDispatchToProps)(Img)