import React from "react"
import { StyleSheet, SafeAreaView } from "react-native"
import Root from "./src/navigations/nav"
export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Root />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
