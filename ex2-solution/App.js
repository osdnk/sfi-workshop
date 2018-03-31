import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './src/components/TodoList';
import firebase from 'firebase';
import { config } from './config';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config);
  }
  render() {
    return (
      <TodoList/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
