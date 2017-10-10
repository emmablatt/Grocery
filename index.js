import { AppRegistry } from 'react-native'
import App from './src/App'
import { createStore } from 'redux'
import items from './src/reducers'
import React, { Component } from 'react'
import { Provider } from 'react-redux'

let store = createStore(items)

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
