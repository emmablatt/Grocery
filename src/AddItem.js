import React, { Component } from 'react'
import { View, TextInput, Button, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { addItem, fetchData } from './actions'
import PropTypes from 'prop-types'
import style from './style'

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
            this.props.fetchData(this.state.text)
            this.setState({ text: '' })
          }}
        />
        <ScrollView style={{ backgroundColor: 'white' }}>
          {this.props.isFetching && <Text>Fetching...</Text>}
          {this.props.dataFetched
            ? this.props.items.map((item, i) => {
                return (
                  <View key={i}>
                    <Text>{item.name}</Text>
                  </View>
                )
              })
            : null}
        </ScrollView>
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
    items: state.dataReducer.items,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: text => dispatch(addItem(text)),
    fetchData: query => dispatch(fetchData(query)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)
