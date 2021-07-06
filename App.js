import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PetsScreen from './PetsScreen'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      names: [""],
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <PetsScreen />











      </View>










    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },


});

export default App;
