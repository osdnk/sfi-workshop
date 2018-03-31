import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

class TodoItem extends React.Component {
  onPress = () => {
    if (this.props.onPress)
      this.props.onPress()
  };

  render() {
    const { isDone, caption } = this.props;
    return (
      <View style={styles.container}>
        <Button
          onPress={this.onPress}
          title="Done"
          color={isDone ? "#389036" : "#cdd951" }
          disabled={isDone}
        />
        <Text
          style = {{
            textDecorationLine: isDone ? 'line-through' : 'none'
          }}
        >
          {caption}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    borderWidth: 0.5,
    padding: 4,
    margin: 4,
    alignItems: 'center',
    borderRadius: 6
  }
})


export default TodoItem;
