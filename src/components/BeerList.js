import React from "react"
import { View, FlatList } from "react-native"
import BeerDetail from "./BeerDetail"

class BeerList extends React.PureComponent {
  constructor(props) {
    super(props)
    this.props = props
    this.state = { beers: [] }
    fetch("https://sandbox-api.brewerydb.com/v2/beers?hasLabels=y&key=8399b25ee2de305bad151de330671ec1")
      .then(response => {
        return response.json()
      })
      .then(beers => {
        this.setState({ beers: beers.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.beers}
          renderItem={beer => <BeerDetail beer={beer.item} navigation={this.props.navigation} />}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}
export default BeerList
