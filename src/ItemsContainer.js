import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import Item from './Item'
import PropTypes from 'prop-types'
import { toggleItem } from './actions'

const ItemsContainer = props => {
  console.log('ItemsContainer props: ', props)
  return (
    <View>
      {props.items.map(item => (
        <Item
          key={item.id}
          text={item.text}
          completed={item.completed}
          onPress={() => props.onItemPress(item.id)}
        />
      ))}
    </View>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onItemPress: id => {
      dispatch(toggleItem(id))
    },
  }
}

const mapStateToProps = state => {
  return {
    items: state.itemReducer.items,
  }
}

// ItemsContainer.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//     }).isRequired,
//   ).isRequired,
// }

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)
