import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ct: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.ct}</Text>
        <Text style={styles.text}>This is Miles' App</Text>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        <TouchableOpacity 
          onPress={() => this.setState({ ct: this.state.ct + 1 })}
          style={styles.button}>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
        </TouchableOpacity>
      </View>
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
  text: {
    color: 'orange',
    fontSize: 40,
  },
  button: {
    backgroundColor: 'green',
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    padding: 20,
  }
});
