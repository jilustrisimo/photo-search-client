import axios from 'axios'

// axios.defaults.baseURL = 'https://photo-search-api.herokuapp.com/api/v1'
axios.defaults.baseURL = 'http://localhost:3001/api/v1'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000'

export const saveImg = params => {
  return dispatch => {
    dispatch({
      type: 'SAVE_IMG',
      payload: axios.post(
        '/favorites',
        params)
        .then(resp => {
          console.log(resp)
        })

    })
  }
}