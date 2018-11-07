import React from "react"
import { StyleSheet, Text, View, SafeAreaView } from "react-native"
import Header from "./src/components/Header"
import BeerList from "./src/components/BeerList"
export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <BeerList />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
