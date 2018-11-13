# Atelier React Native avec Expo

Dans cette nouvelle partie, nous allons créer une liste de bières. Dans cette premier temps cette liste sera en dur dans le composant. La liste sera un nouveau composant que l'on va créer, celle-ci va itérer en appellant notre composant BeerDetail créé précédement. Cela necessitera de modifier quelque peu ce composant.

## Initialisation de notre composant
Dans ce nouveau composant `src/components/BeerList.js` nous allons importer les modules nécessaires importer précédement et un nouveau composant `FlatList`.
```javascript
//BeerList.js
import React from "react"
import { View, FlatList } from "react-native"
import BeerDetail from './BeerDetail'

const BeerList = props => {
  return (

  )
}
export default BeerList
```

## Les listes
Il exsiste plusieurs types de listes en React-Native . Vous allez souvent voir `ListView`, c'est la liste de base. Je vous déconseille de l'utiliser car si vous avez une liste de plusieurs centaines items, vous allez avoir des problèmes de performance. Pour cela, je vous recommande d'utiliser des `FlatList` pour les listes simple. Ensuite, si vous voulez faire des listes comme un carnet d'adresse trié par ordre alphabétique il faut utiliser `SectionList`. Puis, pour des listes plus complexes il y a les `VirtualizedList`.   
Dans cet atelier, on va commencer par une liste simple. Une `FlatList` est composé de de 3 propriétés : 
- `data` : il va prendre en paramètre notre tableau de donnée.
- `renderItem` : il va itérer sur le tableau et retourner chaque item de notre tableau.
- `keyExtractor` : il permet d'attribuer une clé unique à chaque item. Ce qui va grandement améliorer les performances. 

Un exemple d'implémentation de la `FlatList` :  
```javascript
<FlatList 
  data={Beers} 
  renderItem={ beer => 
    <Text>{beer.item.name}</Text>
  } 
  keyExtractor={item => item.id} />
```

Afin d'avoir un jeu de donnée pour cet atelier, ci-joint à la racine du projet, le fichier `beers.json`. Importer le dans le component BeerList.
## Construction du composant BeerList
Le but étant d'intégrer notre composant BeerDetail dans BeerList. Pour cela, il faut importer notre composant beerDetail et l'insérer dans le renderItem de la FlatList. Ensuit, passer en paramètre la variable `beer` à notre BeerDetail. C'est ce qu'on appelle des props. Il va donc falloir modifier un peu notre composant BeerDetail pour qu'il puisse prendre en compte les props envoyés.  
BeerDetail n'a donc plus besoin de l'objet beer qu'on lui a créé précédement. On va remplacer les appelles de beer dans le return du composant par `props.beer` suivis des éléments que l'on souhaite affiché comme : name, labels.medium pour une image et style.name pour un autre titre. Un peu d'ajustement niveau style et c'est finit on a notre liste de bière complété qui utilise un composant déjà créé. Voici une des force de React, la réutilisabilité des composants.

## Code complet 
```javascript
//BeerList.js
import React from "react"
import { View, FlatList } from "react-native"
import BeerDetail from "./BeerDetail"
import Beers from "../../beers.json"

const BeerList = props => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={Beers}
        renderItem={beer => <BeerDetail beer={beer.item} key={beer.index} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}
export default BeerList
```

```javascript
//BeerDetail.js
import React from "react"
import { View, Text, Image } from "react-native"

const BeerDetail = props => {
  const { beer } = props
  return (
    <View style={styles.containerDetail}>
      <Text style={styles.beerTitle}>{beer.name}</Text>
      <Image source={{ uri: beer.labels.medium, cache: "only-if-cached" }} style={styles.beerImg} />
      <Text style={styles.descBeer}>{beer.style.name}</Text>
    </View>
  )
}

const styles = {
  containerDetail: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  beerTitle: {
    fontSize: 20
  },
  beerImg: {
    width: 150,
    height: 150,
    resizeMode: "contain"
  },
  descBeer: {
    justifyContent: "center",
    alignItems: "center"
  }
}
export default BeerDetail
```
Notre application de bière commence à avoir un peu de contenu mais niveau design elle n'est pas super jolie, c'est pourquoi dans la prochaine partie, on va apprendre comment intégrer un nouveau module à notre projet. <a href="https://gitlab.com/minicrash/atelierrn/tree/step4">Step4</a>