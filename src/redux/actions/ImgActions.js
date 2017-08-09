import axios from 'axios'

// axios.defaults.baseURL = process.env.REACT_APP_RAILS_URL
axios.defaults.baseURL = 'http://localhost:3001/api/v1'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000'

export const saveImg = params => {
  return dispatch => {
    dispatch({
      type: 'SAVE_IMAGE',
      payload: axios.post(
        '/favorites',
        params
      )
    })
  }
}

export const getImgs = () => {
  return dispatch => {
    dispatch({
      type:'GET_IMAGES',
      payload: axios.get('/favorites')
    })
  }
}

export const upVote = params => {
  return dispatch => {
    dispatch({
      type: 'UPVOTE_IMAGE',
      payload: axios.patch(`/favorites/${params}`)
    })
  }
}