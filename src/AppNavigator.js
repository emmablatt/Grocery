import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator,
} from 'react-navigation'
import Grocery from './components/Grocery'
import Pantry from './components/Pantry'
import Search from './components/Search'

const TabNavConfig = TabNavigator({
  Grocery: { screen: Grocery },
  Pantry: { screen: Pantry },
})

export const AppNavigator = StackNavigator({
  Home: { screen: TabNavConfig },
  Search: { screen: Search },
})

const AppWithNavigationState = ({ dispatch, nav }) => {
  return (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
  )
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  nav: state.navReducer,
})

export default connect(mapStateToProps)(AppWithNavigationState)
