const initialState = {
  posting: false,
  posted: false,
  fetching: false,
  fetched: false,
  img: {},
  imgs: [],
  error: null
}
export default (state=initialState, action) => {
  switch (action.type) {
    case 'SAVE_IMAGE_PENDING':
      return {...state, posting: true}
    case 'SAVE_IMAGE_FULFILLED':
      return {
        ...state, 
        posting: false,
        posted: true,
        img: action.payload.data.favorite
      }
    case 'SAVE_IMAGE_REJECTED':
      return {...state, posting: false, error: action.payload}
    case 'GET_IMAGES_PENDING':
      return {...state, fetching: true}
    case 'GET_IMAGES_FULFILLED':
      return {
        ...state, 
        fetching: false,
        fetched: true,
        imgs: action.payload.data.favorites
      }
    case 'GET_IMAGES_REJECTED':
      return {...state, fetching: false, error: action.payload}
    case 'UPVOTE_IMAGE_PENDING':
      return {...state, posting: true}
    case 'UPVOTE_IMAGE_FULFILLED':
      return {
        ...state, 
        posting: false,
        posted: true,
        imgs: action.payload.data.favorites
      }
    case 'UPVOTE_IMAGE_REJECTED':
      return {...state, posting: false, error: action.payload}
    default:
      return state
  }
}