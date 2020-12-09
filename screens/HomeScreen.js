import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'


export default class HomeScreen extends React.Component {

  goToBuzzerScreen = (color) => {
    this.props.navigation.navigate('BuzzerScreen', {color: color})
  }
  render() {
    return (
      <View>
        <AppHeader/>
        <TouchableOpacity
        style={[styles.button, {backgroundColor: 'red'}]}
        onPress={()=> this.goToBuzzerScreen('red')}>
        <Text
          style={styles.buttonText}>
          Team 1
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.button, {backgroundColor: 'blue'}]}
        onPress={() => this.goToBuzzerScreen('blue')}>
        <Text
          style={styles.buttonText}>
          Team 2
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, {backgroundColor: 'green'}]}
        onPress={() => this.goToBuzzerScreen('green')}>
        <Text
          style={styles.buttonText}>
          Team 3
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, {backgroundColor: 'yellow'}]}
        onPress={() => this.goToBuzzerScreen('yellow')}>
        <Text
          style={styles.buttonText}>
          Team 4
        </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    borderWidth: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    borderRadius: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  }
});