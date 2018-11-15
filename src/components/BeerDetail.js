import React from "react"
import { View, Text, Image } from "react-native"

const BeerDetail = props => {
  const { beer } = props
  return (
    <View style={styles.containerDetail}>
      <Text style={styles.beerTitle}>{beer.name}</Text>
      <Image source={{ uri: beer.labels.medium,  }} style={styles.beerImg} />
      <Text style={styles.descBeer}>{beer.style.name}</Text>
    </View>
  )
}

const styles = {
  containerDetail: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  beerTitle: {
    fontSize: 20
  },
  beerImg: {
    width: 150,
    height: 150,
    resizeMode: "contain"
  },
  descBeer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  }
}
export default BeerDetail
