import { combineReducers } from 'redux'
import searchFormReducer from './searchFormReducer'
import imgReducer from './ImgReducer'

export default combineReducers({
  query: searchFormReducer,
  recent: imgReducer
})