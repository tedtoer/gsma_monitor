import { combineReducers } from 'redux'
import {
  SELECT_QUERY, REQUEST_PHONES, RECEIVE_PHONES,
  SELECT_PHONE, REQUEST_PHONE, RECEIVE_PHONE, CLICK_BACK
} from './actions'

// not uses, just for clarity
const initialState = {
  selectedQuery: '',
  isFetching: false,
  phones: [],
  selectedPhoneIdExternal: '',
  selectedPhone: {}
}

function selectedQuery(state = '', action) {
  switch (action.type) {
    case SELECT_QUERY:
      return action.query
    default:
      return state
  }
}

function selectedPhoneIdExternal(state = '', action) {
  switch (action.type) {
    case SELECT_PHONE:
      return action.idExternal
    case CLICK_BACK:
      return ''
    default:
      return state
  }
}

function isFetching(state = false, action) {
  switch (action.type) {
    case REQUEST_PHONES:
    case REQUEST_PHONE:
      return true
    case RECEIVE_PHONES:
    case RECEIVE_PHONE:
      return false
    default:
      return state
  }
}

function phones(state = [], action) {
  switch (action.type) {
    case RECEIVE_PHONES:
      return action.phones
    default:
      return state
  }
}

function selectedPhone(state = {}, action) {
  switch (action.type) {
    case RECEIVE_PHONE:
      return action.phone
    case CLICK_BACK:
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedQuery,
  isFetching,
  phones,
  selectedPhoneIdExternal,
  selectedPhone
})

export default rootReducer
