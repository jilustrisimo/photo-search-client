const initialState = {
  posting: false,
  posted: false,
  img: {},
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
        img: action.payload
      }
    case 'SAVE_IMAGE_REJECTED':
      return {...state, posting: false, error: action.payload}
    default:
      return state
  }
}