const initialState = {
  fetching: false,
  fetched: false,
  imgs: []
}
export default (state=initialState, action) => {
  switch (action.type) {
    case 'FETCH_IMAGES_START':
      return {...state, fetching: true}
    case 'FETCH_IMAGES_END':
      return {
        ...state, 
        fetching: false,
        fetched: true,
        imgs: action.payload
      }
    default:
      return state
  }
}