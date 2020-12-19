import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from "react-native"

function TodoItem({data,onToggle,onDelete}) {
  console.log("Todo Item Data: ",data)
  return (
    <TouchableOpacity style={styles[`${data.isDone ? "doneContainer":"itemContainer"}`]} onPress={() => onToggle(data.id)} onLongPress={() => onDelete(data.id)}>
      <Text style={styles[`${data.isDone ? "doneText" : "todoText"}`]}>{data.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    itemContainer : {
        backgroundColor:"#3f51b5",
        borderRadius:7,
        margin:10,
        padding:10
    },
    doneContainer : {
      backgroundColor:"rgba(100,100,100,0.2)",
      borderRadius:7,
      margin:10,
      padding:10
    },
    todoText : {
        fontSize:17,
        color:"white",
        fontWeight:"600",
    },
    doneText : {
      fontSize:17,
        color:"black",
        textDecorationLine:"line-through",
        fontWeight:"600",
    }
})

export {TodoItem}
