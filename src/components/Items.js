import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import Item from './Item'
import PropTypes from 'prop-types'
import { toggleItem } from '../actions'

const Items = props => {
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

Items.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Items)
