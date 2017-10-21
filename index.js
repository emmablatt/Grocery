import { AppRegistry } from 'react-native'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { itemReducer, dataReducer, navReducer } from './src/reducers'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import 'whatwg-fetch'
import AppWithNavigationState from './src/AppNavigator'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  itemReducer,
  dataReducer,
  navReducer,
})

const loggerMiddleware = createLogger()

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware)),
)

class GroceryApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState store={store} />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('GroceryApp', () => GroceryApp)
