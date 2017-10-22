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
          keyboardType="default"
          style={{ borderWidth: 1, borderColor: 'black', margin: 10 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          onSubmitEditing={() => {
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
            this.props.fetchData(this.state.text)
            this.setState({ text: '' })
          }}
        />
        <ScrollView style={{ backgroundColor: 'white' }}>
          {this.props.isFetching && <Text>Fetching...</Text>}
          {this.props.dataFetched
            ? this.props.data.list.item.map(item => {
                return (
                  <Item
                    key={item.ndbno}
                    text={item.name}
                    category={item.group}
                    onPress={() => {
                      this.props.addItemFromSearch(item)
                      this.props.goBack()
                    }}
                  />
                )
              })
            : null}
        </ScrollView>
      </View>
    )
  }

  _onItemPress = () => {
    return
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
    addManualItem: text => dispatch(addManualItem(text)),
    fetchData: query => dispatch(fetchData(query)),
    addItemFromSearch: item => dispatch(addItemFromSearch(item)),
    goBack: () => dispatch(goBack()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)
