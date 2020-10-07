import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, TextInput } from 'react-native';
import Form1 from './components/form1';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      isPressed: false,
      name: '',
      surname: '',
      groupNumber: '',
      faculty: '',
    }
  }

  onClick = () => {
    const buttonState = this.state.isPressed;
    this.setState({ 
      isPressed: !buttonState,
      name: '',
      surname: '',
      groupNumber: '',
      faculty: ''
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <Form1/>
      </View>
    );
  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
