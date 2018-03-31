import React from 'react';
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import TodoItem from './TodoItem';
import Adder from './Adder';
import { connect } from 'react-redux'
import { setTodos, toggleFilter } from '../actions/index';
import firebaseHandler from '../handlers/firebaseHandler';


class TodoList extends React.Component {

  componentDidMount() {
    this.fh = new firebaseHandler(this.props)
  }

  getFiltedTodos = () =>
    this.props.todos.filter(e => !this.props.filter || !e.isDone)


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo List</Text>
        <Button
          onPress={() => this.props.toggleFilter()}
          title={this.props.filter ? "show all" : "show only unfinished"}
          color={this.props.filter ? "#901e0f" : "#5b5dd9"}
        />
        <View style={styles.todos}>
          <ScrollView>
          {this.getFiltedTodos().map(todo =>
            <TodoItem
              key={`todo ${todo.key}`}
              onPress={() => this.fh.markAsFinished(todo.key)}
              caption={todo.label}
              isDone={todo.isDone}
            />
          )}
          </ScrollView>
        </View>
        <Adder
          onAdd={(name) => this.fh.addTodo(name)}
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

const mapStateToProps = (state) => {
  return ({
  todos: state.todos.todos,
  filter: state.todos.filter
})}

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleFilter: () => dispatch(toggleFilter),
  setTodos: (todos) => dispatch(setTodos(todos))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

