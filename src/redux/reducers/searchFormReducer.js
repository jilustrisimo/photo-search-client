const initialState = {
  fetching: false,
  fetched: false,
  imgs: [],
  error: null
}
export default (state=initialState, action) => {
  switch (action.type) {
    case 'FETCH_IMAGES_PENDING':
      return {...state, fetching: true}
    case 'FETCH_IMAGES_FULFILLED':
      return {
        ...state, 
        fetching: false,
        fetched: true,
        imgs: action.payload
      }
    case 'FETCH_IMAGES_REJECTED':
      return {...state, fetching: false, error: action.payload}
    default:
      return state
  }
}