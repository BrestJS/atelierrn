import React from "react"
import { Text, View, Image, TouchableOpacity } from "react-native"

const BeerDetail = props => {
  return (
    <View>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }}
      />
      <Image
        style={{ width: 66, height: 58 }}
        source={{
          uri:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=="
        }}
        fadeDuration={2000}
      />
    </View>
  )
}
export default BeerDetail
