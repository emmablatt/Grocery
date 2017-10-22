import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import Items from './Items'
import AddItem from './AddItem'
import Search from './Search'
import { connect } from 'react-redux'
import { navigate } from '../actions'

export default class Grocery extends Component {
  static navigationOptions = {
    title: 'Groceries',
  }
  render() {
    return (
      <View>
        <AddItem />
        <Items />
      </View>
    )
  }
}
