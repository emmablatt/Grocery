import { AppRegistry } from 'react-native'
import App from './src/App'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { itemReducer, dataReducer } from './src/reducers'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

const rootReducer = combineReducers({
  itemReducer,
  dataReducer,
})

let store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware),
)

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
