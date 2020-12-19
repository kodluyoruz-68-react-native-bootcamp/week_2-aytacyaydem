import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Header, AddToDoForm, TodoItem} from './components';

/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const [todos, setTodos] = useState([]);
  const renderItem = ({item}) => <TodoItem data={item} onToggle={onToggle} onDelete={onDelete}/>;

  const addTodo = (val) => {
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 999999),
        title: val,
        isDone: false,
      },
    ]);
  };

  const onToggle = (id) => {
    // const newArr = todos.map((todo) => {
    //   console.log(todo)
    //   if(id === todo.id){
    //     return ({
    //       ...todo,
    //       isDone:!todo.isDone
    //     })
    //   }
    //   return todo;
    // });
    // setTodos(newArr);

    // const index = todos.findIndex(todo => todo.id === id)
    // todos[index].isDone = !todos[index].isDone
    // setTodos([
    //   ...todos
    // ])

    const index = todos.findIndex(todo => todo.id === id)
    const newArr = [...todos]
    newArr[index].isDone = !newArr[index].isDone
    setTodos(newArr)
  };

  const onDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  } 

  console.log("Tüm Liste: ",todos)
  return (
    <View style={styles.container}>
      <Header counter={todos.length} />
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id.toString()}
        testID="list"
      />
      <AddToDoForm onAdd={addTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaf6',
  },
});

export default App;
