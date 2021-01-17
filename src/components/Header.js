import React from "react";
import {View,Text,StyleSheet} from "react-native"

function Header({counter}){
    return (
        <View style={styles.container}>
            <Text style={styles.leftText}>TODO</Text>
            <Text style={styles.rightText}>{counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        paddingHorizontal:10,
        paddingVertical:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    leftText: {
        fontSize:30,
        fontWeight:"bold",
    },
    rightText: {
        fontSize:30,
    }
})

export {Header};