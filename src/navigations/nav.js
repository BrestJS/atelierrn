import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { createBottomTabNavigator, createStackNavigator } from "react-navigation"
import BeerList from "../components/BeerList"
import BeerDetail from "../components/BeerDetail"
import Beer from "../components/Beer"

const DefaultStack = createStackNavigator({
  BeerList: {
    screen: BeerList,
    navigationOptions: {
      title: "MyBeer",
      headerTextAlign: "center"
    }
  },
  Beer: {
    screen: Beer,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.beer.name.toUpperCase()}`
    })
  }
})

const BottomTabNavigator = createBottomTabNavigator({
  BeerList: {
    screen: DefaultStack,
    navigationOptions: {
      tabBarLabel: "Bieres",
      tabBarIcon: ({ tintColor }) => <Ionicons name="md-home" size={32} color={"#03A9F4"} />
    }
  }
})
const Root = createStackNavigator(
  {
    Tabs: {
      screen: BottomTabNavigator
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
)

export default Root
