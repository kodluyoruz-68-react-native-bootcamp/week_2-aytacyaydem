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

  const onToggle = () => {
    const newArr = todos.map((todo) => ({
      ...todo,
      isDone: true,
    }));
    setTodos(newArr);
  };

  const onDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  } 

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
