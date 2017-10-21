import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator,
} from 'react-navigation'
import { Grocery, Pantry } from './App'
import Search from './Search'

// const TabNavConfig = TabNavigator({
//   Grocery: { screen: Grocery },
//   Pantry: { screen: Pantry },
// })

export const AppNavigator = StackNavigator({
  Grocery: { screen: Grocery },
  Search: { screen: Search },
})

const AppWithNavigationState = ({ dispatch, navReducer }) => {
  return (
    <AppNavigator
      navigation={addNavigationHelpers({ dispatch, state: navReducer })}
    />
  )
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navReducer: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  navReducer: state.navReducer,
})

export default connect(mapStateToProps)(AppWithNavigationState)
