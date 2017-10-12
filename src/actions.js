// action types
export const ADD_ITEM = 'ADD_ITEM'
export const TOGGLE_ITEM = 'TOGGLE_ITEM'
export const FETCHING_DATA = 'FETCHING_DATA'
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
export const FETCHING_ERROR = 'FETCHING_ERROR'
import getPeople from './api'

// action creators
nextId = 3
export function addItem(text) {
  return { type: ADD_ITEM, text, completed: false, id: nextId++ }
}

export function toggleItem(index) {
  return { type: TOGGLE_ITEM, index }
}

export function getData() {
  return { type: FETCHING_DATA }
}

export function getDataSuccess(data) {
  return { type: FETCHING_SUCCESS, data }
}

export function getDataError() {
  return { type: FETCHING_ERROR }
}

export function fetchData() {
  return dispatch => {
    dispatch(getData())
    getPeople()
      .then(data => {
        dispatch(getDataSuccess(data))
      })
      .catch(err => console.log('err:', err))
  }
}
