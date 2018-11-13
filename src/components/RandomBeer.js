import React from "react"
import { View, Text, FlatList } from "react-native"
import BeerDetail from "./BeerDetail"
class RandomBeer extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    this.state = { beers: [], isFetching: false }
    this.fetchBeer()
  }
  fetchBeer() {
    fetch("https://sandbox-api.brewerydb.com/v2/beers?hasLabels=y&order=random&key=8399b25ee2de305bad151de330671ec1")
      .then(response => {
        return response.json()
      })
      .then(beers => {
        this.setState({ beers: beers.data, isFetching: false })
      })
      .catch(err => {
        console.log(err)
      })
  }
  onRefresh() {
    this.fetchBeer()
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          onRefresh={() => this.onRefresh()}
          data={this.state.beers}
          refreshing={this.state.isFetching}
          renderItem={beer => <BeerDetail beer={beer.item} navigation={this.props.navigation} />}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}

export default RandomBeer
