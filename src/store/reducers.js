import { combineReducers } from 'redux'
import {
  REQUEST_TABLE,
  RECEIVE_TABLE,
  SELECT_PATH,
  CHANGE_PAGE_INDEX
} from './actions'

function selectedPath(state='posts', action) {
  switch (action.type) {
    case SELECT_PATH:
      return action.payload.path
    default:
      return state
  }
}

const defaultState = {
  isFetch: false,
  didInvalidate: false,
  items: [],
  pageIndex: 0,
  totalPage: 0
}

function table(state = defaultState, action) {
  switch (action.type) {
    case REQUEST_TABLE:
      return {
        ...state,
        isFetch: true,
        didInvalidate: false
      }
    case RECEIVE_TABLE:
      return {
        ...state,
        ...action.payload,
        isFetch: false,
        didInvalidate: false
      }
    default:
      return state
  }
}

function tableByPath(state = {}, action) {
  switch (action.type) {
    case REQUEST_TABLE:
    case RECEIVE_TABLE:
      return {
        ...state,
        [action.meta.path]: table(state[action.meta.path], action)
      }
    default:
      return state
  }
}

function pageIndexChanged(state=0, action) {
  
}

export default combineReducers({
  tableByPath,
  selectedPath
})
