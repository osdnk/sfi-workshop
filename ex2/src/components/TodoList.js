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
    // this.db = firebase.database(); TODO
    this.listenForItems(this.db.ref('/todos'));
  }

  listenForItems = itemsRef => {
    itemsRef.on('value', (snap) => {
      const data = snap.val();
      // TODO 2
      // remember ot keep key in object
    });
  }

  markAsDone = key => {
    const taskRef = this.db.ref('todos/' + key);
    taskRef.once('value', snap => { // why value?
      const data = snap.val();
      // TODO 3
      // mind that that data are _mutable_
      taskRef.update(data);
    })
  };

  addItem = name => {
    const objectToBePushed = {}; // TODO 4
    this.db.ref('/todos').push(objectToBePushed);
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
              onPress={ // TODO 5 }
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
