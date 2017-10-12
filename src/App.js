import React, { Component } from 'react'
import { TouchableHighlight, Text, View, AppRegistry } from 'react-native'
import { connect } from 'react-redux'
import ItemsContainer from './ItemsContainer'
import AddItem from './AddItem'
import { fetchData } from './actions'
import { StackNavigator, TabNavigator } from 'react-navigation'

class Grocery extends Component {
  static navigationOptions = {
    title: 'Groceries',
  }
  render() {
    return (
      <View>
        <AddItem />
        <ItemsContainer />
      </View>
    )
  }
}

class Pantry extends Component {
  static navigationOptions = {
    title: 'Pantry',
  }
  render() {
    return (
      <View>
        <Text>Pantry af</Text>
      </View>
    )
  }
}

const TabNavConfig = TabNavigator({
  Grocery: { screen: Grocery },
  Pantry: { screen: Pantry },
})

const NavConfig = StackNavigator({
  Home: {
    screen: TabNavConfig,
    navigationOptions: {
      title: 'Grocery',
    },
  },
})

export const App = props => {
  return <NavConfig />
}

export default App
