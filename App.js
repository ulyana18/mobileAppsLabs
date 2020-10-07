import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, TextInput } from 'react-native';
import Form1 from './components/form1';
import Form2 from './components/form2';
import Form3 from './components/form3';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      view: 1,
    }
  }

  onChangeView = () => {
    const viewPage = this.state.view < 3 ? this.state.view + 1 : 1;
    this.setState({ view: viewPage });
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.view === 1 && <Form1/> }
        { this.state.view === 2 && <Form2/> }
        { this.state.view === 3 && <Form3/> }
        <TouchableOpacity
          onPress={() => this.onChangeView()}
        >
          <Text style = {styles.changeViewButton}>
            Change View
          </Text>
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
  },
  changeViewButton: {
    borderWidth: 1,
    padding: 15,
    width: 180,
    marginBottom: 30,
    borderColor: 'black',
    // backgroundColor: 'blue',
    textAlign: 'center',
    fontSize: 25,
    color: '#000'
  }
});
