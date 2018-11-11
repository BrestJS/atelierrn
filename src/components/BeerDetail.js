import React from "react"
import { Text, Image, View } from "react-native"
import { Card, Button } from "react-native-elements"
const BeerDetail = props => {
  const { beer } = props
  return (
    <Card title={beer.name}>
      <View style={styles.containerDetail}>
        <Image source={{ uri: beer.labels.medium }} style={styles.beerImg} />
        <Text style={{ marginBottom: 10 }}>{beer.style ? beer.style.name : beer.name}</Text>
      </View>
      <Button
        iconRight={{ name: "edit" }}
        backgroundColor="#03A9F4"
        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        title="EDIT"
      />
    </Card>
  )
}

const styles = {
  containerDetail: {
    justifyContent: "center",
    alignItems: "center"
  },
  beerTitle: {
    fontSize: 20
  },
  beerImg: {
    width: 150,
    height: 150
  },
  descBeer: {
    textAlign: "center",
    marginBottom: 10
  }
}
export default BeerDetail
