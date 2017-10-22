import React, { Component } from 'react'
import { View, TextInput, Button, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import {
  addManualItem,
  fetchData,
  navigate,
  goBack,
  addItemFromSearch,
} from '../actions'
import PropTypes from 'prop-types'
import style from '../style'
import Item from './Item'
import Search from './Search'

class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  render() {
    return (
      <View>
        <TextInput
          autoFocus={true}
          style={{ borderWidth: 1, borderColor: 'black', margin: 10 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          onSubmitEditing={() => {
            this.props.addManualItem(this.state.text)
            this.setState({ text: '' })
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <Button
            title="Add"
            onPress={() => {
              if (this.state.text === '') {
                return
              }
              this.props.addManualItem(this.state.text)
              this.setState({ text: '' })
            }}
          />
          <Button
            title="Search"
            onPress={() => {
              if (this.state.text === '') {
                return
              }
              this.setState({ text: '' })
              this.props.navigate('Search', { text: this.state.text })
            }}
          />
        </View>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addManualItem: text => dispatch(addManualItem(text)),
    goBack: () => dispatch(goBack()),
    navigate: (routeName, params) => dispatch(navigate(routeName, params)),
  }
}

export default connect(null, mapDispatchToProps)(AddItem)
