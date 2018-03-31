import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './src/components/TodoList';
import firebase from 'firebase';
import { config } from './config';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import reducer from './src/reducers'
import thunk from 'redux-thunk';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducer);
    return (
      <Provider store={store}>
        <TodoList/>
      </Provider>
    );
  }
}

