import { combineReducers } from 'redux'
import searchFormReducer from './searchFormReducer'

const allReducers = combineReducers({
  query: searchFormReducer
})