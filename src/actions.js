// action types
export const ADD_ITEM = 'ADD_ITEM'
export const TOGGLE_ITEM = 'TOGGLE_ITEM'

// action creators
nextId = 3
export function addItem(text) {
  return { type: ADD_ITEM, text, completed: false, id: nextId++ }
}

export function toggleItem(index) {
  return { type: TOGGLE_ITEM, index }
}
