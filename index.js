import { AppRegistry } from 'react-native'
import App from './src/App'
import { createStore, combineReducers } from 'redux'
import reducer, { itemReducer } from './src/reducers'
import React, { Component } from 'react'
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
  itemReducer,
})

let store = createStore(rootReducer)

class grocery extends Component {
  render() {
    return (
      <Provider store={store}>
        <App store={store} />
      </Provider>
    )
  }
}
AppRegistry.registerComponent('grocery', () => grocery)
