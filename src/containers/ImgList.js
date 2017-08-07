import React, { Component } from 'react'
import { connect } from 'react-redux'

import Img from '../components/Img'
import NoImgs from '../components/NoImgs'
import logo from './logo.svg'

class ImgList extends Component {

  render(){
    this.imgs = this.props.imgs
    let result
    if (this.imgs.length > 0){
      result = this.imgs.map( img =>
        <Img
          url={img.urls.thumb}
          user={img.user.links.html}
          name={img.user.name}
          link={img.links.html}
          key={img.id}
        />
      )
    } else if (this.props.loading === true) {
        result = <img src={logo} className="App-logo" alt="logo" />
    } else {
      result = <NoImgs/>
    }

    return (
      <ul className="img-list">
        {result}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.query.fetching,
    imgs: state.query.imgs
  }
}

export default connect(mapStateToProps)(ImgList)