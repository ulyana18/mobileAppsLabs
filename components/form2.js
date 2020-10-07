import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, TextInput } from 'react-native';


export default class Form2 extends Component {
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
        <TouchableOpacity
          onPress={() => this.onClick()}
        >
          <Text style = {this.state.isPressed ? styles.textIsPressed : styles.textIsNotPressed}>
            Button
          </Text>
        </TouchableOpacity>

        <View style={styles.formContainer}>
          <TextInput 
            placeholder='Name'
            style={styles.formInput}
            value={this.state.name}
            onChangeText={text => this.setState({name: text})}
          />
          <TextInput 
            placeholder='Surname'
            style={styles.formInput}
            value={this.state.surname}
            onChangeText={text => this.setState({surname: text})}
          />
          <TextInput 
            placeholder='Group number'
            style={styles.formInput}
            value={this.state.groupNumber}
            onChangeText={text => this.setState({groupNumber: text})}
          />
          <TextInput 
            placeholder='Faculty'
            style={styles.formInput}
            value={this.state.faculty}
            onChangeText={text => this.setState({faculty: text})}
          />
        </View>

      </View>
    );
  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textIsPressed: {
    borderWidth: 1,
    padding: 25,
    width: 150,
    borderColor: 'black',
    backgroundColor: 'blue',
    textAlign: 'center',
    fontSize: 25,
    color: '#000'
  },
  textIsNotPressed: {
    borderWidth: 1,
    padding: 25,
    width: 150,
    borderColor: 'black',
    backgroundColor: 'green',
    textAlign: 'center',
    fontSize: 25,
    color: '#fff'
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formInput: {
    width: '80%',
    padding: 15,
    margin: 10,
    backgroundColor: 'yellow',
    borderRadius: 20,
  }
});
