import { createStore, applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
const loggerMiddleware = createLogger()

import rootReducers from './reducers'
let store = createStore(
  rootReducers,
  {},
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

console.log(store.getState())

export default store
