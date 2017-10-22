// action types
export const ADD_MANUAL_ITEM = 'ADD_MANUAL_ITEM'
export const ADD_ITEM_FROM_SEARCH = 'ADD_ITEM_FROM_SEARCH'
export const TOGGLE_ITEM = 'TOGGLE_ITEM'
export const FETCHING_DATA = 'FETCHING_DATA'
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
export const FETCHING_ERROR = 'FETCHING_ERROR'
import fetchingData from './Api'
import { NavigationActions } from 'react-navigation'

// action creators
nextId = 0
export function addManualItem(text) {
  return {
    type: ADD_MANUAL_ITEM,
    text,
    completed: false,
    id: nextId++,
  }
}

export function addItemFromSearch(item) {
  return {
    type: ADD_ITEM_FROM_SEARCH,
    name: item.name,
    group: item.group,
    id: item.ndbno,
  }
}

export function toggleItem(item) {
  return {
    type: TOGGLE_ITEM,
    id: item.id,
  }
}

export function getData(query) {
  return {
    type: FETCHING_DATA,
    query,
  }
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_SUCCESS,
    data,
  }
}

export function getDataError() {
  return {
    type: FETCHING_ERROR,
  }
}

export function fetchData(query) {
  return function(dispatch) {
    dispatch(getData(query))
    fetchingData(query)
      .then(response => response.json())
      .then(data => dispatch(getDataSuccess(data)))
      .catch(() => dispatch(getDataError()))
  }
}

export function navigate(routeName, params) {
  return NavigationActions.navigate({
    routeName,
    params,
  })
}

export function goBack() {
  return NavigationActions.back()
}
