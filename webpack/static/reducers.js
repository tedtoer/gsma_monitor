import { combineReducers } from 'redux'
import {
  SELECT_QUERY, REQUEST_PHONES, RECEIVE_PHONES
} from './actions'

const phonesInitialState = {
  isFetching: false,
  items: []
}

function selectedQuery(state = '', action) {
  switch (action.type) {
  case SELECT_QUERY:
    return action.query
  default:
    return state
  }
}

function phonesByQuery(state = phonesInitialState, action) {
  switch (action.type) {
    case REQUEST_PHONES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_PHONES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.phones,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  phonesByQuery, selectedQuery
})

export default rootReducer
