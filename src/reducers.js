import {
  ADD_MANUAL_ITEM,
  ADD_ITEM_FROM_SEARCH,
  TOGGLE_ITEM,
  FETCHING_DATA,
  FETCHING_SUCCESS,
  FETCHING_ERROR,
} from './actions'
import { combineReducers } from 'redux'
import { AppNavigator } from './AppNavigator'
import { NavigationActions } from 'react-navigation'

export const itemReducer = (
  state = {
    items: [],
  },
  action,
) => {
  switch (action.type) {
    case ADD_MANUAL_ITEM:
      return Object.assign({}, state, {
        items: [
          ...state.items,
          {
            text: action.text,
            completed: false,
            id: `${action.text}-${action.id}`,
          },
        ],
      })
    case ADD_ITEM_FROM_SEARCH:
      return Object.assign({}, state, {
        items: [
          ...state.items,
          {
            text: action.name,
            group: action.group,
            id: action.id,
            completed: false,
          },
        ],
      })
    case TOGGLE_ITEM:
      return Object.assign({}, state, {
        items: state.items.map((item, index) => {
          if (index === action.index) {
            return Object.assign({}, item, {
              completed: !item.completed,
            })
          }
          return item
        }),
      })
    default:
      return state
  }
}

export const dataReducer = (
  state = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false,
  },
  action,
) => {
  switch (action.type) {
    case FETCHING_DATA:
      return Object.assign({}, state, {
        data: [],
        isFetching: true,
        dataFetched: false,
      })
    case FETCHING_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        isFetching: false,
        dataFetched: true,
      })
    case FETCHING_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        dataFetched: false,
      })
    default:
      return state
  }
}

export const navReducer = (state, action) => {
  return AppNavigator.router.getStateForAction(action, state)
}
