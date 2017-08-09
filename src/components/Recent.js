import React, { Component } from 'react'


class Recent extends Component {

  render() {
    return(
      <li>
        <a href={this.props.link} target='_blank'>
          <img src={this.props.url} alt='Preview Not Available' title='View Original'/>
        </a>
        <a href={this.props.user} title='View Photographer Profile' target='_blank'>{this.props.name}</a>
        <a onClick={() => this.props.like(this.props.id)}><i className="material-icons">thumb_up</i>{this.props.upVoteCount}</a>
      </li>
    )
  }
}

export default Recent