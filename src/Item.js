import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Item = props => {
  return (
    <View>
      <Text
        key={props.id}
        onPress={props.onPress}
        style={{
          textDecorationLine: props.completed ? 'line-through' : 'none',
        }}
      >
        {props.text}
      </Text>
    </View>
  )
}

Item.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Item
