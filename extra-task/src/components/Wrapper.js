import React from 'react';
import { View, StyleSheet } from 'react-native';
import GameContainer from 'sfi-sample-game'

class Wrapper extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerWrapper}>
          <GameContainer
            onFinish={res => console.log(res)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerWrapper: {
    position: 'absolute',
    bottom: 20,
    top: 100,
    left: 20,
    right: 20
  },
})


export default Wrapper

