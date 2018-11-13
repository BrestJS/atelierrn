import React from "react"
import { View, Text, ScrollView, Button } from "react-native"
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"
import { Card } from "react-native-elements"
class Beer extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      beer: this.props.navigation ? this.props.navigation.state.params.beer : this.props.beer ? this.props.beer : null,
      isViewMore: false
    }
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
