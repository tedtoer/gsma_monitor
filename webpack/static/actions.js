import fetch from 'isomorphic-fetch'
import { HOST } from './settings'

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
    phones: json.data,
    receivedAt: Date.now()
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

function shouldFetchPhones(state, query) {
  const phones = state.phonesByQuery
  if (phones.isFetching) {
    return false
  } else {
    return true
  }
}

export function fetchPhonesIfNeeded(query) {
  return (dispatch, getState) => {
    if (shouldFetchPhones(getState(), query)) {
      return dispatch(fetchPhones(query))
    } else {
      return Promise.resolve()
    }
  }
}
