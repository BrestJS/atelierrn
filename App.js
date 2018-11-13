import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open you're favorite editor to getting started and edit me in 'my-project/App.js'</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
