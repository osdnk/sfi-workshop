import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import TodoItem from './TodoItem';
import Adder from './Adder';
import firebase from 'firebase';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.db = firebase.database();
    this.listenForItems(this.db.ref('/todos'));
  }

  listenForItems = itemsRef => {
    itemsRef.on('value', (snap) => {
      const data = snap.val();
      const keys = Object.keys(data);
      this.setState({
        todos: keys.map(key => ({ key, ...data[key] }))
      });
    });
  }

  markAsDone = key => {
    const taskRef = this.db.ref('todos/' + key);
    taskRef.once('value', snap => {
      const data = snap.val();
      data.isDone = !data.isDone;
      taskRef.update(data);
    })
  };

  addItem = name => {
    this.db.ref('/todos').push({label: name, isDone: false});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo List</Text>
        <View style={styles.todos}>
          <ScrollView>
          {this.state.todos.map(todo =>
            <TodoItem
              key={`todo ${todo.key}`}
              onPress={() => this.markAsDone(todo.key)}
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
