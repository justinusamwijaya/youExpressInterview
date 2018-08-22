import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { NavSearch } from './static/navSearch'
import { Card, CardSection } from './common'


export default class PickupLocation extends Component{
    static navigationOptions = {
        title: "Pickup Location"
      };
  render() {
    return (
        <View>
          <NavSearch>
            <TextInput style={{ borderWidth: .3, width: "80%", height: 50, paddingLeft: 25 }} placeholder="Pick Up Location"/>
          </NavSearch>
          <Card>
            <CardSection style={{ height: 50 }}>
              <TouchableOpacity style={{ height: "100%", width: "100%" }}>
                <Text style={{ fontSize: 16, width: "100%" }}>Set route from favorite list</Text>
              </TouchableOpacity>
            </CardSection>
            <CardSection style={{ height: 50 }}>
              <TouchableOpacity style={{ height: "100%", width: "100%" }}>
                <Text style={{ fontSize: 16, width: "100%" }}>Set route on the map</Text>
              </TouchableOpacity>
            </CardSection>
            <CardSection style={{ height: 50 }}>
              <TouchableOpacity style={{ height: "100%", width: "100%" }}>
                <Text style={{ fontSize: 16, width: "100%" }}>Home</Text>
                <Text style={{fontSize: 12}}>Some Address</Text>
              </TouchableOpacity>
            </CardSection>
            <CardSection style={{ height: 50 }}>
              <TouchableOpacity style={{ height: "100%", width: "100%" }}>
                <Text style={{ fontSize: 16, width: "100%" }}>Work</Text>
                <Text style={{fontSize: 12}}>Some Address</Text>
              </TouchableOpacity>
            </CardSection>
            <CardSection style={{ height: 50 }}>
              <TouchableOpacity style={{ height: "100%", width: "100%" }}>
                <Text style={{ fontSize: 16, width: "100%" }}>Daily Market</Text>
                <Text style={{fontSize: 12}}>Some Address</Text>
              </TouchableOpacity>
            </CardSection>
            <CardSection style={{ height: 50 }}>
              <TouchableOpacity style={{ height: "100%", width: "100%" }}>
                <Text style={{ fontSize: 16, width: "100%" }}>Hospital</Text>
                <Text style={{fontSize: 12}}>Some Address</Text>
              </TouchableOpacity>
            </CardSection>
          </Card>
        </View>
    );
  }
}