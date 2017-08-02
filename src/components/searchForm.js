import React, { Component } from 'react'
import { connect } from 'redux'

class SearchForm extends Component {
  state = {
    input: ''
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
					onChange={this.onSearchChange}
					ref={input => (this.query = input)}
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

export default SearchForm