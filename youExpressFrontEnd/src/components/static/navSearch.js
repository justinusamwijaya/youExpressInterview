import React from 'react';
import {StyleSheet, View} from 'react-native';


export const NavSearch = ({children}) => {
    return (
        <View  style={styles.container}>
            {children}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      marginBottom: 15,
      height: 75,
    },
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
    },
  });