import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { upVote } from '../redux/actions/ImgActions'

class Recent extends Component {

  state = {
    count: this.props.upVoteCount
  }

  // componentWillReceiveProps(nextProps){
  //   this.props = nextProps
  // }


  like = params => {
    this.props.upVote(params)
    // this.setState(this.state)
  }

  render() {
    console.log('recent',this.props)
    return(
      <li>
        <a href={this.props.link} target='_blank'>
          <img src={this.props.url} alt='Preview Not Available' title='View Original'/>
        </a>
        <a href={this.props.user} title='View Photographer Profile' target='_blank'>{this.props.name}</a>
        <button onClick={() => this.like(this.props.id)}>{this.props.upVoteCount}</button>
      </li>
    )
  }
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators({upVote: upVote}, dispatch)
}

const mapStateToProps = state => {
  return {
    count: state.recent.img.upvote_count
  }
}


export default connect(mapStateToProps, matchDispatchToProps)(Recent)