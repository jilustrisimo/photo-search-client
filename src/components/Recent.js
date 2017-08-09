import React from 'react'

const Recent = props =>
  <li>
    <a href={props.link} target='_blank'>
      <img src={props.url} alt='Preview Not Available' title='View Original'/>
    </a>
    <a href={props.user} title='View Photographer Profile'>{props.name}</a>
  </li>

export default Recent