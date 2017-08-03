import Unsplash, { toJson } from 'unsplash-js'

const id = process.env.REACT_APP_API_ID
const secret = process.env.REACT_APP_API_SECRET
const callback = process.env.REACT_APP_CALLBACK

export const performSearch = query => {
  const unsplash = new Unsplash({
    applicationId: `${id}`,
    secret: `${secret}`,
    callbackUrl: `${callback}`
  })

  return dispatch => {
    dispatch({
      type: 'FETCH_IMAGES',
      payload: unsplash.photos.searchPhotos(`${query}`)
        .then(toJson)
    })
  }
}