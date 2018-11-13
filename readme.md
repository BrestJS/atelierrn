# Atelier React Native avec Expo

Dans cette nouvelle partie, nous allons ajouter un nouveau composé qui sera lié à la barre de navigation. Ce composant affichera juste une bière aléatoire de découverte.

## Initialisation du nouveau composant
Pour ce nouveau composant `src/components/RandomBeer.js` on va  réutiliser le principe de notre FlatList. On va faire une requete similaire sauf que l'on va prendre un seul item. L'API de bière nous renvoie un tableau avec un seul élément. 
```jsx
[..]
fetchBeer(){
  fetch("https://sandbox-api.brewerydb.com/v2/beers?hasLabels=y&order=random&key=8399b25ee2de305bad151de330671ec1")
  .then(response => {
    return response.json()
  })
  .then(beers => {
    this.setState({ beers: beers.data, isFetching: false })
  })
  .catch(err => {
    console.log(err)
  })
}
[..]
```
Ensuite j'applique la même flatlist dans le render avec l'appel de `BeerDetail`dans le renderItem. Puis je souhaite qu'a chaque pull to refresh, j'update la biere. 
```jsx
[..]
<FlatList
  onRefresh={() => this.onRefresh()}
  data={this.state.beers}
  refreshing={this.state.isFetching}
  renderItem={beer => <BeerDetail beer={beer.item} navigation={this.props.navigation} />}
  keyExtractor={item => item.id}
/>
[..]
```
J'ai ajouter une fonction refresh qui appelle la fonction fetchBeer().  
Notre composant est créé, il faut maintenant l'affiché. Pour cela, je souhaite l'afficher dans une barre de navigation. Il faut donc modifier notre navigation. 

## Modification de la navigation
J'ai commencé par créer une nouvel stackNavigator avec uniquement mon nouveau composant `RandomBeer` 
```jsx
const TabStack = createStackNavigator({
  RandomBeer: {
    screen: RandomBeer,
    navigationOptions: {
      title: "Discover"
    }
  }
})
```
Ensuite, on peut créer une stack navigator spécial pour la tab `createMaterialTopTabNavigator`. Par défaut, c'est une navigation material design pour Android. Je lui apportée quelques modifications pour qu'elle soit toujours positionné en bas. Les nouvelles guidelines des constructeurs. Dans cette tabnavigator, j'ai placé ma tabStack précédemment créé et la stackDefault. Puis, j'ai placé le tout dans une stack mère. Voici la nouvelle navigation.
```jsx
// navigations/nav.js
[..]
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
```

Une fois l'application relancer on peut naviguer sur notre nouveau composant. Certes, tout n'est pas parfait, il y a des améliorations à apporter. 
On a finit pour cette nouvelles parties et même pour l'atelier, il reste beaucoup de chose à faire sur cette application. Vous avez toutes les clés en main pour la modifier comme vous le souhaitez. Des mises à jour seront apportées à ce projet prochainement.