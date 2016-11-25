import fetch from 'isomorphic-fetch'
import { HOST } from './settings'

export const SELECT_PHONE = 'SELECT_PHONE'
export function selectPhone(idExternal) {
  return {
    type: SELECT_PHONE,
    idExternal
  }
}

export const REQUEST_PHONE = 'REQUEST_PHONE'
function requestPhone(idExternal) {
  return {
    type: REQUEST_PHONE,
    idExternal
  }
}

export const RECEIVE_PHONE = 'RECEIVE_PHONE'
function receivePhone(idExternal, json) {
  return {
    type: RECEIVE_PHONE,
    idExternal,
    phone: json.data
  }
}

export const SELECT_QUERY = 'SELECT_QUERY'
export function selectQuery(query) {
  return {
    type: SELECT_QUERY,
    query
  }
}

export const REQUEST_PHONES = 'REQUEST_PHONES'
function requestPhones(query) {
  return {
    type: REQUEST_PHONES,
    query
  }
}

export const RECEIVE_PHONES = 'RECEIVE_PHONES'
function receivePhones(query, json) {
  return {
    type: RECEIVE_PHONES,
    query,
    phones: json.data
  }
}

export const CLICK_BACK = 'CLICK_BACK'
export function clickBack() {
  return {
    type: CLICK_BACK
  }
}

export function fetchPhones(query) {
  return dispatch => {
    dispatch(requestPhones(query))
    return fetch(HOST + `/phones?query=${query}`)
      .then(response => response.json())
      .then(json => dispatch(receivePhones(query, json)))
  }
}

export function fetchPhone(idExternal) {
  return dispatch => {
    dispatch(requestPhone(idExternal))
    return fetch(HOST + `/phones/${idExternal}`)
      .then(response => response.json())
      .then(json => dispatch(receivePhone(idExternal, json)))
  }
}

function shouldFetchPhones(state) {
  if (state.isFetching) {
    return false
  } else {
    return true
  }
}

export function fetchPhonesIfNeeded(query) {
  return (dispatch, getState) => {
    if (shouldFetchPhones(getState())) {
      return dispatch(fetchPhones(query))
    } else {
      return Promise.resolve()
    }
  }
}
