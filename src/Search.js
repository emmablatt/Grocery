import React, { Component } from 'react'
import { View, Text } from 'react-native'
import AddItem from './AddItem'
import { navigate } from './actions'
import ItemsContainer from './ItemsContainer'

export default class Search extends Component {
  static navigationOptions = {
    title: 'Search',
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
