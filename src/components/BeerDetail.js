import React from "react"
import { View, Text, Image } from "react-native"

const BeerDetail = props => {
  const Beers = {
    id: 1,
    name: "Buzz",
    tagline: "A Real Bitter Experience.",
    first_brewed: "09/2007",
    description: "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
    image_url: "https://images.punkapi.com/v2/keg.png"
  }
  return (
    <View style={styles.containerDetail}>
      <Image source={{ uri: Beers.image_url, cache: "only-if-cached" }} style={styles.beerImg} />
      <Text style={styles.descBeer}>{Beers.description}</Text>
    </View>
  )
}

const styles = {
  containerDetail: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  beerImg: {
    width: 500,
    height: 400,
    resizeMode: "contain"
  },
  descBeer: {
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    marginTop: 20
  }
}
export default BeerDetail
