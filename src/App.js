import React, { Component } from 'react'
import { Text, View, AppRegistry } from 'react-native'
import { addItem } from './actions'
import { connect } from 'react-redux'
import ItemsContainer from './ItemsContainer'
import AddItem from './AddItem'
import { StackNavigator } from 'react-navigation'

class Home extends Component {
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

const AppNav = StackNavigator({
  Home: { screen: Home },
})

export default class App extends Component {
  render() {
    return <AppNav />
  }
}
