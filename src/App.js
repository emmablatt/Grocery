import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { addItem } from './actions'
import { connect } from 'react-redux'
import ItemsContainer from './ItemsContainer'
import AddItem from './AddItem'
import { TabNavigator } from 'react-navigation'

class GroceryScreen extends Component {
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

class PantryScreen extends Component {
  render() {
    return (
      <View>
        <Text style={{ paddingTop: 50 }}>Pantry List</Text>
        <AddItem />
        <ItemsContainer />
      </View>
    )
  }
}

const MainScreenNavigator = TabNavigator({
  Grocery: { screen: GroceryScreen },
  Pantry: { screen: PantryScreen },
})

const mapDispatchToProps = () => {
  return {
    addItem: addItem,
  }
}

export default connect(mapDispatchToProps)(GroceryScreen)
