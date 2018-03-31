import React from 'react';
import { Button, KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native';

class Adder extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputText: '',
    };
  }
  onPress = () => {
    if (this.props.onAdd)
      this.props.onAdd(this.state.inputText);
    this.setState({
      inputText: ''
    })
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(inputText) => this.setState({inputText})}
          value={this.state.inputText}
        />
        <Button
          onPress={this.onPress}
          title="Add task"
          color="#841584"
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  input: {
    height: 40,
    backgroundColor: '#ddd'
  }
})

export default Adder;
