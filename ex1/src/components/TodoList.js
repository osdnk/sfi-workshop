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
    // TODO 1
    this.setState({
      ...
    })
  };

  addItem = name => {
    // TODO 2
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo List</Text>
        <View style={styles.todos}>
          <ScrollView>
          {this.state.todos.map((todo, i) =>
            // Why scrollView? TODO 4
            // TODO 3
          )}
          </ScrollView>
        </View>
        <Adder
          // TODO 5
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
