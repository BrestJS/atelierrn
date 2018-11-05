import React from "react"
import { StyleSheet, Text, View, SafeAreaView } from "react-native"
import Header from "./src/components/Header"
import BeerDetail from "./src/components/BeerDetail"
export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <BeerDetail />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
