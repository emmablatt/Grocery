import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ItemsContainer from './ItemsContainer'
import AddItem from './AddItem'
import Search from './Search'

export class Grocery extends Component {
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

export class Pantry extends Component {
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
