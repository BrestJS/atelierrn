# Atelier React Native avec Expo

Dans cette nouvelle partie, nous allons mettre un peu de forme avec une librairie, <a href="https://react-native-training.github.io/react-native-elements/docs/0.19.1/overview.html" target='_blank'>`react-native-elements`</a>. React Native Élements est une boite à outil de composant UI permetant de nous simplifier le développement mobile. Pour faire le parallèle au web, ça peut s'apparenter à Bootstrap. Vous pourrez retrouver des boutons déjà stylisé, des formulaires, des listes, des icones... Plein de composant essentiel au développement de votre application mobile. 

## Installation d'une librairie 
Que ce soit pour React Native Elements ou tout d'autres librairie, il vous faut l'installer avec npm depuis votre terminal dans le répertoire de votre projet.  
`(atelierrn)$ npm install --save react-native-elements`  
Une fois installé, redémarrer le projet depuis le terminal. Voilà votre librairie est opérationnelle et prête être utilisé.

## Découverte de React-Native-Elements
### Le composant Card
La première utilisation que l'on va expérimenter, on va utiliser le composant `Card` de RN élements pour modifier `BeerDetail`. Il faut importer `react-native-elements` dans notre composant. On va simplement remplacer la balise `<View>` qui entoure notre composant pour le renommer par `Card`. On va modifié notre composant pour l'adapté à ce nouveau composant : 
```javascript
return (
  <Card title={beer.name}>
    <View style={styles.containerDetail}>
      <Image source={{ uri: beer.labels.medium }} style={styles.beerImg} />
      <Text style={{ marginBottom: 10 }}>{beer.style.name}</Text>
    </View>
  </Card>
)
```
On a supprimer notre premier `<Text>`, le nom de notre bière, afin de rajouter une propièté dans `<Card title={beer.name}>` ce qui va donner un titre à notre card.   
### Le composant Button
On va ajouter un bouton à notre composant `BeerDetail` qui nous servira de navigation dans une prochaine partie. On va ajouter `Button` à notre import, toujours dans `BeerDetail`. On va l'ajouter à la suite de `<View>` après notre image. Avec RN Elements, vous avez une base d'icone déjà installé, vous n'avez plus qu'a indiquer dans votre bouton le nom de l'icone et son positionnement. D'autres paramètres sont aussi facile à configurer comme la couleur, le titre ou encore l'animation.  
```javascript
<Button
  iconRight={{ name: "edit" }}
  backgroundColor="#03A9F4"
  buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
  title="EDIT"
/>
```

### Le composant Header
Pour donner encore un peu style à notre application, nous allons utiliser le componsant `Header` de RN Elements. Dans notre fichier `App.js` nous allons remplacer notre composant `Header` par le celui de RN Element.
```javascript
//App.js
<Header
  leftComponent={{ icon: "menu", color: "#fff" }}
  centerComponent={{ text: "MY BEER", style: { color: "#fff" } }}
  rightComponent={{ icon: "home", color: "#fff" }}
/>
```
Dans cet partie, on a implémenté une nouvelle librairie `react-native-elements` qui permet de donner plus de style à notre application et de la développer plus rapidement.
Dans la prochaine partie nous verrons la partie réseaux afin de faire des requêtes à un service externe. <a href="https://github.com/BrestJS/atelierrn/tree/step5">Step5</a>
