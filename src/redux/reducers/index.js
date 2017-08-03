import { combineReducers } from 'redux'
import searchFormReducer from './searchFormReducer'

export default combineReducers({
  query: searchFormReducer
})