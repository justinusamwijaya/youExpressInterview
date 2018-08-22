import React from 'react';
import {StyleSheet, View} from 'react-native';


export const CardSection = ({ children, style }) => {
    return (
        <View style={{ ...styles.cardSectionContainer, ...style }}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardSectionContainer: {
        backgroundColor: '#fff',
        position:'relative',
        borderBottomWidth:1,
        borderColor: '#ddd',
        flexDirection:'row',
        justifyContent:'flex-start',
        padding: 5,
    },
})