import React from "react"
import { FontAwesome, Ionicons } from "@expo/vector-icons"
import { createMaterialTopTabNavigator, createStackNavigator, createSwitchNavigator } from "react-navigation"
import BeerList from "../components/BeerList"
import RandomBeer from "../components/RandomBeer"
import Beer from "../components/Beer"

const DefaultStack = createStackNavigator({
  BeerList: {
    screen: BeerList,
    navigationOptions: {
      title: "MyBeer"
    }
  },
  Beer: {
    screen: Beer,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.beer.name.toUpperCase()}`
    })
  }
})
const TabStack = createStackNavigator({
  RandomBeer: {
    screen: RandomBeer,
    navigationOptions: {
      title: "Discover"
    }
  }
})
const BottomTabNavigator = createMaterialTopTabNavigator(
  {
    BeerList: {
      screen: DefaultStack
    },
    RandomBeer: {
      screen: TabStack
    }
  },
  {
    tabBarPosition: "bottom",
    scrollEnabled: false,
    indicatorStyle: {
      indicatorStyle: {
        borderBottomColor: "#ffffff",
        borderBottomWidth: 2
      }
    },
    tabBarOptions: {
      activeTintColor: "#03A9F4",
      inactiveTintColor: "#555",
      style: {
        backgroundColor: "#FFF"
      }
    }
  }
)
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
