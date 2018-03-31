import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Wrapper from './src/components/Wrapper';
import firebase from 'firebase';
import { config } from './config';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Wrapper/>
    );
  }
}

