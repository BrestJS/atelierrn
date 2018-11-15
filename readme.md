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

## Noveau composant
Nous allons mettre en place un nouveau composant qui va afficher une bière qu'on aura selectionné et qui nous donnera plus d'informations sur celle-ci. On va donc créer un nouveau composant `src/components/Beer.js`.   
On importe les composants nécessaires à notre nouveau composant : 
```jsx
import React from "react"
import { View, Text, ScrollView, Button } from "react-native"
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"
import { Card } from "react-native-elements"

class Beer extends React.Component{
  constructor(props){
    super(props)
    this.props = props
    this.state = {}
  }
  render(){
    return()
  }
}
export default Beer
```
Notre composant est initialisé, prêt à être construit. Ce composant va être accessible par le clique sur le bouton présent dans le composant `BeerDetail`. On va y accéder grâce à la navigation. Pour pouvoir naviguer dans notre application, i lfaut enregistrer les composants navigables. Dans le `DefaultStack` de notre système de navigation, on va enregistrer notre nouveau composant précédement créé. Sans oublier de l'importer.
```jsx
// navigations/nav.js
[..]
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
[..]
```
J'ai rajouté une option qui va changer notre Header avec le nom de la bière selectionnée. Notre navigation connait notre composant, il faut maitenant lui donner le nécessaire pour naviguer. Rendez-vous dans le composant `BeerList.js`. Au sein de ma FlatList, je vais passer en props la navigation : 
```jsx
<FlatList
  data={this.state.beers}
  renderItem={beer => 
    <BeerDetail beer={beer.item} navigation={this.props.navigation} />}
  keyExtractor={item => item.id}
/>
```
Notre bouton qui va nous envoyer à notre nouveau composant est le bouton de `BeerDetail.js`. On va récupérer la navigation passée en props et lui dire : "Au clique sur le bouton tu vas naviguer sur le composant `Beer` et lui donner les données nécéssaires" : 
```jsx
[..]
<Button
  backgroundColor="#03A9F4"
  buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
  title="MORE"
  onPress={() => props.navigation.navigate("Beer", { beer: beer })}
/>
[..]
```
Si on relance notre application on peut voir qu'au clique sur le bouton on peut naviguer et revenir en arrière. Nous reste plus qu'à désigné notre nouveau composant. Voici un exemple : 
```jsx
import React from "react"
import { View, Text, ScrollView, Button } from "react-native"
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"
import { Card } from "react-native-elements"
class Beer extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    this.state = { beer: this.props.navigation.state.params.beer, isViewMore: false }
    this.viewMoreOrLess = this.viewMoreOrLess.bind(this)
  }
  viewMoreOrLess() {
    this.setState({ isViewMore: !this.state.isViewMore })
  }
  render() {
    return (
      <ScrollView>
        <Card image={{ uri: this.state.beer.labels.contentAwareMedium }}>
          <Text style={{ marginBottom: 10 }}>{this.state.beer.nameDisplay}</Text>
          <Text style={{ marginBottom: 10 }}>
            <MaterialCommunityIcons name="beer" size={30} color={"#03A9F4"} />
            {this.state.beer.abv}°
          </Text>
          <Text style={{ marginBottom: 10 }}>
            <FontAwesome name="flag" size={30} color={"#03A9F4"} />
            {this.state.beer.style.category.name}
          </Text>
          <Text style={{ marginBottom: 10 }}>
            <FontAwesome name="calendar" size={30} color={"#03A9F4"} />
            {this.state.beer.style.createDate}
          </Text>
          {!this.state.isViewMore ? (
            <View>
              <Text style={{ marginBottom: 10 }}>{this.state.beer.style.description.slice(0, 200)}...</Text>
              <Button title={"View more"} onPress={this.viewMoreOrLess} />
            </View>
          ) : (
            <View>
              <Text style={{ marginBottom: 10 }}>{this.state.beer.style.description}</Text>
              <Button title={"View less"} onPress={this.viewMoreOrLess} />
            </View>
          )}
        </Card>
      </ScrollView>
    )
  }
}
export default Beer
```
Comme j'ai passé en props la navigation dont mon objet Bière que lequel j'ai cliqué. J'ai placé mon objet bière dans mon state. Le State permet de gérer l'état de mon composant et c'est un objet interne à mon composant. Ensuite j'ai décidé de mette en place un système de résumé pour la description de notre bière. 

On a finit pour notre nouveau composant lié à la navigation. On va créer un nouveau composant mais cette fois on va le lier à notre barre de navigation.
<a href="https://github.com/BrestJS/atelierrn/tree/step7">Step7</a>
