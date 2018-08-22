import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


export const Button = ({onPress, children, style}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{...styles.buttonStyle, ...style}}>    
            <Text style={styles.textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle:{
        alignSelf:'center',
        color:'#007aff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10,
    },
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        background:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginRight:5,
        marginLeft:5,
        flexDirection: "column",
    }
}