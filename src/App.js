import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import ItemsContainer from './ItemsContainer'
import AddItem from './AddItem'
import Search from './Search'
import { connect } from 'react-redux'
import { navigate } from './actions'

export class Grocery extends Component {
  static navigationOptions = {
    title: 'Groceries',
  }
  render() {
    return (
      <View>
        <Button
          title="Add item"
          onPress={() => this.props.navigate('Search')}
        />
        <ItemsContainer />
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    navigate: routeName => dispatch(navigate(routeName)),
  }
}

export default connect(null, mapDispatchToProps)(Grocery)
