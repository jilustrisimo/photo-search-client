import {
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import allReducers from './reducers/index'

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(promiseMiddleware(), thunk, createLogger())
)

export default store