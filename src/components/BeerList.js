import React from "react"
import { View, FlatList } from "react-native"
import BeerDetail from "./BeerDetail"
import Beers from "../../beers.json"

const BeerList = props => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={Beers}
        renderItem={beer => <BeerDetail beer={beer.item} key={beer.index} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}
export default BeerList
