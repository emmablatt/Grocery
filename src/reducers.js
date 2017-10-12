import { ADD_ITEM, TOGGLE_ITEM } from './actions'
import { combineReducers } from 'redux'

const initialState = {
  items: [
    { text: 'Item 1', completed: false, id: 0 },
    { text: 'Item 2', completed: false, id: 1 },
    { text: 'Item 3', completed: false, id: 2 },
  ],
}

export const itemReducer = (state = initialState, action) => {
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
