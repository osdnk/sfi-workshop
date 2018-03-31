import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import TodoItem from './TodoItem';
import Adder from './Adder';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  markAsDone = id => {
    console.log(this.state)
    const newTodos = this.state.todos;
    newTodos[id].isDone = true;
    this.setState({ todos: newTodos })
  };

  addItem = name => {
    this.setState ({
      todos: this.state.todos.concat({
        label: name,
        isDone: false
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo List</Text>
        <View style={styles.todos}>
          <ScrollView>
          {this.state.todos.map((todo, i) =>
            <TodoItem
              key={`todo ${i}`}
              onPress={() => this.markAsDone(i)}
              caption={todo.label}
              isDone={todo.isDone}
            />
          )}
          </ScrollView>
        </View>
        <Adder
          onAdd={this.addItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 25
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
  },
  todos: {
    flex: 1
  }
})

export default TodoList;
