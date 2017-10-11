import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { addItem } from './actions'
import { connect } from 'react-redux'
import ItemsContainer from './ItemsContainer'
import AddItem from './AddItem'

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={{ paddingTop: 50 }}>Grocery List</Text>
        <AddItem />
        <ItemsContainer />
      </View>
    )
  }
}
