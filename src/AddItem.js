import React, { Component } from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import { connect } from 'react-redux'
import { addItem, fetchData } from './actions'
import PropTypes from 'prop-types'

class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
    console.log(this.props)
  }

  render() {
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
          title="Fetch some data"
          onPress={() => {
            if (this.state.text === '') {
              return
            }
            console.log('addItem props:', this.props)
            this.props.fetchData(this.state.text)
            this.setState({ text: '' })
          }}
        />
        <View style={{ backgroundColor: 'white' }}>
          {this.props.isFetching && <Text>Loading</Text>}
          {this.props.data.length ? console.log(this.props.data) : null}
        </View>
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
    fetchData: query => dispatch(fetchData(query)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)
