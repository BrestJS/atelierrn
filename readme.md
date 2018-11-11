# Atelier React Native avec Expo

Dans cette nouvelle partie, nous allons récupérer notre liste de bière depuis une API. Cela va nécessiter de modifier notre composant `BeerList`. On va donc aborder une notion important dans React Native, Il existe deux types de composant. Ceux dit StateLess et ceux StateFul.

## Composant Stateless VS Composant Stateful
Depuis le début de cet atelier, on a créer des composants, ces composants sont stateless. Cela veut dire qu'il n'y a pas de gestion état, On ne peut pas modifier le contenu du composant dynamiquement. Pour pouvoir le faire, il faut mettre en place un composant Stateful, qui a une gestion d'état. Du coup c'est quoi l'intéret d'avoir des composants sans gestion d'état ? D'un point de vue performance, le composant stateless n'hérite pas de la classe Component de React. Nous allons modifier le composant `BeerList`. De plus, un composant stateful est une classe tandis qu'un composant stateless est une simple fonction.

## Update de stateless vers stateful
Dans chaque composant que le créer depuis le début, on importe `React`. Dans React, il y a classe qui s'appelle `Component`. Chaque composant stateful hérite de ce composant mère. Ensuite, pour bien fonctionner, il doit avoir une méthode (fonction) `constructor`. C'est la méthode d'initialisation du composant. Puis, pour afficher le JSX du composant, on va placer tout le contenu de notre return dans la méthode `render()`. Un exemple vaut mieux qu'un long discours.
```javascript
//BeerList.js
import React from "react"
{..}
class BeerList extends React.Component {
  constructor(props){
    super(props)
    this.props = props
    this.state = {}
  }
  render(){
    return (
      <View></View>
    )
  }
}
```
Dans l'exemple ci-dessus, il y a deux nouveaux termes en plus qui sont apparu. Vous vous souvenez des props, précédement utiliser pour rendre un composant dynamique. Cette fois-ci on les retrouvent en paramètre du constructor. Comme on hérite de la classe mère Component, on a besoin de surchargé `props` c'est le `super(props)`. Ensuite, pour que nos props soit disponible dans tout notre composant, on l'assigne à this : `this.props = props`. Puis, la nouveauté le state. Le state est un objet interne au composant, c'est grâce à lui que le composant va changer d'état. On va récupérer notre liste de bière depuis une API distante.

## Network
Pour récupérer des data depuis une API distante, il existe plusieurs librairie pour ce faire. Ici nous allons utiliser une des plus répandue `fetch`. Fetch prend en paramètre l'URL a requeter. Il peut prendre des paramètres, ici ce ne sera pas nécessaire. Ensuite, le retour est promisifier.
```javascript
constructor(props) {
  super(props)
  this.props = props
  this.state = { beers: [] }

  fetch("https://sandbox-api.brewerydb.com/v2/beers?hasLabels=y&key=8399b25ee2de305bad151de330671ec1")
    .then(response => {
      return response.json()
    })
    .then(beers => {
      this.setState({ beers: beers.data })
    })
    .catch(err => {
      console.log(err)
    })
}
```
Dans l'exemple, au premier retour, je converti les données dans le format JSON. Ensuite, je modifier mon state avec les nouvelles données. Puis dans le render je remplace les datas qui sont envoyées à la liste. Voici le code complet de la liste.
```jsx
//BeerList.js
import React from "react"
import { View, FlatList } from "react-native"
import BeerDetail from "./BeerDetail"
class BeerList extends React.PureComponent {
  constructor(props) {
    super(props)
    this.props = props
    this.state = { beers: [] }

    fetch("https://sandbox-api.brewerydb.com/v2/beers?hasLabels=y&key=8399b25ee2de305bad151de330671ec1")
      .then(response => {
        return response.json()
      })
      .then(beers => {
        this.setState({ beers: beers.data })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.beers}
          renderItem={beer => <BeerDetail beer={beer.item} />}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}
export default BeerList
```

Dans le composant `BeerDetail` j'ai du faire un modification car dans le jeu de donné reçu, certains objet manquent des propriété.

```jsx
//BeerDetail.js
const BeerDetail = props => {
  const { beer } = props
  return (
    <Card title={beer.name}>
      <View style={styles.containerDetail}>
        <Image source={{ uri: beer.labels.medium }} style={styles.beerImg} />
        <Text style={{ marginBottom: 10 }}>{beer.style ? beer.style.name : beer.name}</Text>
      </View>
      <Button
        iconRight={{ name: "edit" }}
        backgroundColor="#03A9F4"
        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        title="EDIT"
      />
    </Card>
  )
}
```

Notre application est connecté à une API afin de recevoir des données dynamiquement. Nous avons modifié notre composant `BeerList` afin qu'il puisse changer d'état via le state. Dans la prochaine étape, nous implémenterons la navigation dans l'application.