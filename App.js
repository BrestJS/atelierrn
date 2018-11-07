import React from "react"
import { StyleSheet, Text, View, SafeAreaView } from "react-native"
// import Header from "./src/components/Header"
import BeerList from "./src/components/BeerList"
import { Header } from "react-native-elements"
export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "MY BEER", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
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
