import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../redux/actions/searchFormActions'

class SearchForm extends Component {
  state = {
    input: ''
	}
	
	handleSubmit = e => {
		e.preventDefault()
		this.props.performSearch(this.state.input)
		e.currentTarget.reset()
	}

  handleChange = e => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
		return (
			<form className="search-form" onSubmit={this.handleSubmit}>
				<label className="is-hidden" htmlFor="search">Search</label>
				<input
					type="search"
					onChange={e => this.handleChange(e)}
					value={this.state.input}
					name="search"
					placeholder="Search..."
				/>
				<button type="submit" id="submit" className="search-button">
					<i className="material-icons icn-search">search</i>
				</button>
			</form>
		);
	}
}

const matchDispatchToProps = dispatch => {
	return bindActionCreators(actions, dispatch)
}

export default connect(null, matchDispatchToProps)(SearchForm)