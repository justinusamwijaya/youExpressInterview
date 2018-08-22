
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import UI from './components/UIComponent.js'
import PickupLocation from './components/PickupLocation.js'
import { Navbar } from './components/static/navbar'
import { Button } from './components/common'
import { createStackNavigator } from 'react-navigation';

class App extends Component{
  render() {
    return (
        <View style={styles.container}>
          <Navbar label="Interview Trial"/>
          <View style={{ flexDirection: "row" }}>
            <Button
            onPress={() => this.props.navigation.navigate('UI')}>
            open UI
            </Button>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
  }
});
export default createStackNavigator(
  {
    Home: {
      screen: App
    },
    UI: {
      screen: UI
    },
    PickupLocation: {
      screen: PickupLocation
    }
  },
  {
    initialRouteName: 'UI',
  }
);
