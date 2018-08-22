import React from 'react';
import {StyleSheet, View} from 'react-native';


export const Card = ({ children, style }) => {
    return (
        <View style={{...styles.contentContainer, ...style}}>
                {children}
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10
    },
})