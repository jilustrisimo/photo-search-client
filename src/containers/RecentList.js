import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getImgs } from '../redux/actions/ImgActions'
import Recent from '../components/Recent'
import logo from './logo.svg'

class RecentList extends Component {

  componentDidMount() {
    this.props.getImgs()
  }

  render(){
    this.imgs = this.props.imgs
    let result
    if (this.imgs.length > 0){
      result = this.imgs.map( img =>
        <Recent
          url={img.imageURL}
          user={img.profileURL}
          name={img.photographer}
          link={img.remoteURL}
          key={img.id}
        />
      )
    } else if (this.props.loading === true) {
        result = <img src={logo} className="App-logo" alt="logo" />
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
    loading: state.recent.fetching,
    imgs: state.recent.imgs,
  }
}

const matchDispatchToProps = dispatch => {
	return bindActionCreators({getImgs: getImgs}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(RecentList)