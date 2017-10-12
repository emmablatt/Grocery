import React, { Component } from 'react'
import { TouchableHighlight, Text, View, AppRegistry } from 'react-native'
import { connect } from 'react-redux'
import ItemsContainer from './ItemsContainer'
import AddItem from './AddItem'
import { fetchData } from './actions'
import { StackNavigator, TabNavigator } from 'react-navigation'

class Grocery extends Component {
  static navigationOptions = {
    title: 'Groceries',
  }
  render() {
    return (
      <View>
        <AddItem />
        <ItemsContainer />
      </View>
    )
  }
}

class Pantry extends Component {
  static navigationOptions = {
    title: 'Pantry',
  }
  render() {
    return (
      <View>
        <Text>Pantry af</Text>
      </View>
    )
  }
}

const TabNavConfig = TabNavigator({
  Grocery: { screen: Grocery },
  Pantry: { screen: Pantry },
})

const NavConfig = StackNavigator({
  Home: {
    screen: TabNavConfig,
    navigationOptions: {
      title: 'Grocery',
    },
  },
})

export const App = props => {
  return <NavConfig />
}

// const App = props => {
//   return (
//     <View>
//       <Text>Redux Examples</Text>
//       <TouchableHighlight onPress={() => props.fetchData()}>
//         <Text>Load Data</Text>
//       </TouchableHighlight>
//       <View>
//         {props.isFetching && <Text>Loading</Text>}
//         {props.data.length
//           ? props.data.map((person, i) => {
//               return (
//                 <View key={i}>
//                   <Text>Name: {person.name}</Text>
//                   <Text>Age: {person.age}</Text>
//                 </View>
//               )
//             })
//           : null}
//       </View>
//     </View>
//   )
// }

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
    fetchData: () => dispatch(fetchData()),
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App
