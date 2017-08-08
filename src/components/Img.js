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

  // componentDidMount() {
  //   this.handleClick()
  // }

  handleClick = (e,params) => {
    e.preventDefault()
    this.props.saveImg(params)
  }

  render(){
    // const href = window.location.href

    // let button
    // if (href.indexOf('search') >= 0){
    //   button = 
    //     <button title='Like Photo' onClick={(e,params) => this.handleClick(e,params)}>
    //       <i className="material-icons icn-thumb">thumb_up</i>
    //     </button>
    // } else {
    //   button = null
    // }

    return(
      <li>
        <a href={this.props.link} onClick={(e) => this.handleClick(e,this.params)}>
          <img src={this.props.url} alt='Preview Not Available' title='View Original'/>
        </a>
        <a href={this.props.user} title='View Photographer Profile'>{this.props.name}</a>
        {/* <button title='Like Photo' onClick={(e,params) => this.handleClick(e,params)}>
          <i className="material-icons icn-thumb">thumb_up</i>
        </button> */}
        {/* {button} */}
      </li>
    )
  }  
}

const matchDispatchToProps = dispatch => {
	return bindActionCreators({saveImg: saveImg}, dispatch)
}

export default connect(null, matchDispatchToProps)(Img)