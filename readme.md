# Atelier React Native avec Expo

Dans cette nouvelle partie, nous allons mettre en place tout le système de navigation. Pour cela, nous allons utiliser `react-navigation`. Ce qui va nous permettre de naviguer entre les vues et passer des données entre elles

## Installation de react-navigation
Dans votre terminal exécuter cette commande : 
```bash
(atelierrn) $ npm install react-navigation --save
```
En attendant la fin de l'installation de la librairie, on va créer un nouveau dossier et fichier `src/navigations/nav.js`.
Une fois relancer le projet, nous serons prêt à utiliser RN navigation.

## Mise en place de la navigation
Dans notre nouveau fichier, on ma mettre en place tout le système de navigation. Pour commencer, on va importer notre traditionnel react et les modules necessaires à la navigation 
```jsx
import React from "react"
import { createBottomTabNavigator, createStackNavigator } from "react-navigation"
import { Ionicons } from "@expo/vector-icons"
import BeerList from "../components/BeerList"
```
Ensuite, on va créer notre stack de navigation. C'est dans cet objet qu'on va devoir enregistrer tous les composants ou que l'on souhaite y naviguer. On lui donne un nom à ce nouvel écran et on lui donne le composant sur lequel il est lié.
```jsx
[..]
const DefaultStack = createStackNavigator({
  BeerList: {
    screen: BeerList,
    navigationOptions: {
      title: "MyBeer",
      headerTextAlign: "center"
    }
  }
})
```
Puis, on va mettre en place une barre de navigation. Même principe que précédemment, on lui donne et un nom et le composant à relié. On peut aussi rajouter d'autres caractérisques comme ne nom afficher dans la barre et l'icone relié. 
```jsx
const BottomTabNavigator = createBottomTabNavigator({
  BeerList: {
    screen: DefaultStack,
    navigationOptions: {
      tabBarLabel: "Bieres",
      tabBarIcon: ({ tintColor }) => <Ionicons name="md-home" size={32} />
    }
  }
})
```

Enfin, on va créer un nouvel objet qui va lié nos composants de navigation précédemment créé.
```jsx
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
```

Toute notre navigation est prêt à l'emploie. Il reste maintenant à appeller notre navigation à l'initialisation du projet. Le `App.js` a quelques peut changé : 
```jsx
//App.js
import React from "react"
import { StyleSheet, SafeAreaView } from "react-native"
import Root from "./src/navigations/nav"
export default class App extends React.Component {
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
```
Une fois notre appication relancer, on peut voir notre nouveau Header et la barre de navigation en bas. Il nous reste plus qu'a créer de nouveau composant pour embelir notre application.