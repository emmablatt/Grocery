import {
  ADD_ITEM,
  TOGGLE_ITEM,
  FETCHING_DATA,
  FETCHING_SUCCESS,
  FETCHING_ERROR,
} from './actions'
import { combineReducers } from 'redux'

const initialItemsState = {
  items: [
    { text: 'Item 1', completed: false, id: 0 },
    { text: 'Item 2', completed: false, id: 1 },
    { text: 'Item 3', completed: false, id: 2 },
  ],
}

export const itemReducer = (state = initialItemsState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({}, state, {
        items: [
          ...state.items,
          {
            text: action.text,
            completed: false,
            id: action.id,
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

const initialDataState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false,
}

export const dataReducer = (state = initialDataState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return Object.assign({}, state, {
        data: [],
        isFetching: true,
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
      })
    default:
      return state
  }
}
