import React from "react"
import { View, Text } from "react-native"

const Header = props => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.textStyle}>My beer</Text>
    </View>
  )
}

const styles = {
  containerHeader: {
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    height: Platform.OS === "ios" ? 30 : 80
  },
  textStyle: {
    fontSize: 20
  }
}

export default Header
