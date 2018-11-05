# Atelier React Native avec Expo

Dans cette nouvelle partie, nous allons créer un nouveau composant `BeerDetail`. Ce composant a pour rôle d'afficher une miniature de la bière, un nom et une petite description.

## Initialisation du composant
On va donc créer un nouveau composant dans le dossier `src/components/BeerDetail.js`. On a toujours besoin d'importer React et des composants dans React Native. Ici nous allons utiliser View, Text et Image.
```javascript
import React from "react"
import { Text, View, Image, TouchableOpacity } from "react-native"

const BeerDetail = props => {
  return ()
}
export default BeerDetail;
```

## Les images
L'intégration des images avec React Native peut-être un peu particulière. En effet, celles-ci doit toujours avoir des dimensions spécifier pour s'afficher.
```javascript
return (
    <View>
      <Image
        style={{ width: 50, height: 50,rezizeMode:"cover" }}
        source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }}
      />
      <Image
        style={{ width: 66, height: 58 }}
        source={{
          uri:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=="
        }}
      />
    </View>
  )
```

