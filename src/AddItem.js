import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { addItem, fetchData } from './actions'
import PropTypes from 'prop-types'

class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  render() {
    console.log(this.props)
    return (
      <View>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'black', margin: 10 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          onSubmitEditing={() => {
            this.props.addItem(this.state.text)
            this.setState({ text: '' })
          }}
        />
        <Button
          title="Add Item"
          onPress={() => {
            if (this.state.text === '') {
              return
            }
            this.props.addItem(this.state.text)
            this.setState({ text: '' })
          }}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.dataReducer.data,
    isFetching: state.dataReducer.isFetching,
    error: state.dataReducer.error,
    dataFetched: state.dataReducer.dataFetched,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: text => dispatch(addItem(text)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)
