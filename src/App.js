import React, { Component } from 'react'
import { Text, View, AppRegistry } from 'react-native'
import { addItem } from './actions'
import { connect } from 'react-redux'
import ItemsContainer from './ItemsContainer'
import AddItem from './AddItem'
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

export default class App extends Component {
  render() {
    return <NavConfig />
  }
}
