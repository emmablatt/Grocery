import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import AddItem from './AddItem'
import { navigate, fetchData, addItemFromSearch, goBack } from '../actions'
import Items from './Items'
import Item from './Item'

export class Search extends Component {
  static navigationOptions = {
    title: 'Search',
  }

  componentDidMount() {
    let text = this.props.navigation.state.params.text
    this.props.fetchData(text)
    console.log(this.props)
  }

  render() {
    return (
      <View>
        <ScrollView>
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
        <Items />
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
    navigate: state.navReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: query => dispatch(fetchData(query)),
    addItemFromSearch: item => dispatch(addItemFromSearch(item)),
    goBack: () => dispatch(goBack()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
