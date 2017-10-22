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
    navigate: (routeName, params) => dispatch(navigate(routeName, params)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)
