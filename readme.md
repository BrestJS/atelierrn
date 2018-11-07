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
Il exsiste plusieurs types de listes en React-Native . Vous allez souvent voir `ListView`, c'est la liste de base. Je vous déconseille de l'utiliser car si vous avez une liste de plusieurs centaines items, vous allez avoir des problèmes de performance. Pour cela, je vous recommande d'utiliser des `FlatList` pour les listes simple. 