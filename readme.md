# Atelier React Native avec Expo

Le but de cette atelier est de vous faire découvrir l'environnement React Native avec l'outil Expo.
On va développer une simple application de bière. Ce tuto serait découper en plusieurs branch git. Les instructions et les explications seront mis à jour dans le readme

## Création de notre premier composant

Si ça ne l'est pas déjà fait créez les dossiers `src/components` à la racine du projet. Tous nos componsants seront insérés dans ce dossier.

La première étape va être de créér notre premier composant. On va l'appeler Header. Il aura le rôle du Header dans notre application et le titre changera dynamiquement.
Au début de chaque composant on doit importer React et les composants React Native qu'on aura besoin.
````javascript
import React from 'react'
import { View, Text } from 'react-native'
```` 

Le composant Header est un composant dit <i>Stateless</i> (<a href="https://medium.com/@imletaconnoux/stateful-and-stateless-components-in-react-5da5cedb808f">Stateless vs Stateful</a>). Cet à dire, qu'il n'y aura pas besoin d'hériter de la class mère `Component` de React et qu'il n'y aura pas de gestion d'état.

````javascript
const Header = props => {
    return (

    )
}
````
Les props sont les attributs de notre composant. On peut y passer des object, des methodes...
Dans le return, on va retourner du JSX, langage à balise de React. C'est inspiré du XML/HTML. On devra toujours wrappé d'un composant parent `<View></View>` par exemple. Ensuite, on peut insérer dedans les composant que l'on a besoin. Ici se sera un composant `<Text></Text>`.
Puis on applique le style à notre composant Header.
````javascript
const styles = {
  containerHeader: {
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    height: Platform.OS === "ios" ? 30 : 80
  },
  textStyle: {
    fontSize: 20
  }
}
````
Le style d'un composant est inséré après notre composant, sous forme d'un objet

Notre composant est donc terminé, il ne reste plus qu'à l'exporter afin de le rendre disponible partout dans notre projet.

Maintenant rendez-vous dans fichier App.js pour appeler notre nouveau composant. `import { Header } from './src/components/Header'`

 Remplacer le composant `<Text>` du App.js par notre `<Header />`

 Voici le code complet de cette étape :   
 Header.js   
````javascript
import React from "react"
import { Text, View, Platform } from "react-native"

const Header = props => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.textStyle}>Biere</Text>
    </View>
  )
}
const styles = {
  containerHeader: {
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    height: Platform.OS === "ios" ? 30 : 80
  },
  textStyle: {
    fontSize: 20
  }
}
export default Header
````

App.js
````javascript
import React from "react"
import { StyleSheet, Text, View, SafeAreaView } from "react-native"
import Header from "./src/components/Header"
export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

````
Nous avons finit de créer notre premier composant, mais la base React et React Native, c'est des composants réutilisables. Nous allons donc modifier le composant Header afin de le rendre plus générique. Avec React et React Native, on peut passer des propriétés aux composants, on appelle ça des props.

App.js
```javascript
export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header title={"My Beer"}/>
      </SafeAreaView>
    )
  }
}
```
Une fois des props passé en paramètre de notre composant, il faut les récupérer. A la déclaration de notre composant Header, nous lui avons passé en paramètre `props`, c'est grâce à lui que nous allons récupérer le paramètre passé précédemment.  
Header.js
```javascript
const Header = props => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  )
}
```
Nous avons créer notre premier composant réutilisable. Nous allons passer à la création du composant qui va illustrer notre bière. Prochaine étape : <a href="https://github.com/BrestJS/atelierrn/tree/step2">Step2</a>
