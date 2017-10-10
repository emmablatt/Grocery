import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { addItem } from './actions'
import PropTypes from 'prop-types'

class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  render() {
    return (
      <View>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'black' }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          onSubmitEditing={() => {
            this.props.dispatch(addItem(this.state.text))
            this.setState({ text: '' })
          }}
        />
        <Button
          title="Add Item"
          onPress={() => {
            if (this.state.text === '') {
              return
            }
            this.props.dispatch(addItem(this.state.text))
            this.setState({ text: '' })
          }}
        />
      </View>
    )
  }
}

const mapDispatchToProps = () => {
  return {
    addItem: addItem,
  }
}

export default connect(mapDispatchToProps)(AddItem)
