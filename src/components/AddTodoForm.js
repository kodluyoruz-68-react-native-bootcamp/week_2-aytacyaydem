import React,{useState} from "react"
import {View,Text,StyleSheet,TextInput, TouchableOpacity} from "react-native"

function AddToDoForm ({onAdd}){
    const [val,setValue] = useState("")
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Type Something To Do" onChangeText={text => setValue(text)} value={val} testID="input"/>
            </View>
            <TouchableOpacity onPress={() => {
                onAdd(val)
                setValue("")
            }} style={styles.buttonContainer}
            disabled={!val ? true:false}
            testID="button"
            >
                <Text style={styles.buttonText}>ADD TODO</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:"#3f51b5",
        margin:10,
        padding:20,
        borderRadius:6
    },
    inputContainer : {
        backgroundColor:"white",
        borderRadius:6
    },
    buttonContainer : {
        marginTop:10,
        padding:10,
        backgroundColor:"#d1d9ff",
        borderRadius:6
    },
    buttonText : {
        alignSelf:"center"
    }
})

export {AddToDoForm}