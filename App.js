import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Button
} from "react-native";

export default class MyComponent extends Component {
  state = {
    ready: false,
    SlideInLeft: new Animated.Value(0),
    slideUpValue: new Animated.Value(0),
    fadeValue: new Animated.Value(0),
    duration: 1000,
  };

  _restart() {
    this.setState({ SlideInLeft: new Animated.Value(0) });
    this.setState({ slideUpValue: new Animated.Value(0) });
    this.setState({ fadeValue: new Animated.Value(0) });
    this.setState({ ready: false });
  }
  _startParallel = () => {
    return Animated.parallel([
      Animated.timing(this.state.SlideInLeft, {
        toValue: 1,
        duration: this.state.duration,
        useNativeDriver: true
      }),
      Animated.timing(this.state.fadeValue, {
        toValue: 1,
        duration: this.state.duration,
        useNativeDriver: true
      }),
      Animated.timing(this.state.slideUpValue, {
        toValue: 1,
        duration: this.state.duration,
        useNativeDriver: true
      })
    ]).start();
  };

  setNewDuration=(value)=>{
    this.setState({ duration: value });
  }

  _startSequence() {
    Animated.sequence([
      Animated.timing(this.state.SlideInLeft, {
        toValue: 1,
        duration: this.state.duration,
        useNativeDriver: true
      }),
      Animated.timing(this.state.fadeValue, {
        toValue: 1,
        duration: this.state.duration,
        useNativeDriver: true
      }),
      Animated.timing(this.state.slideUpValue, {
        toValue: 1,
        duration: this.state.duration,
        useNativeDriver: true
      })
    ]).start();
  };
  render() {
    let { slideUpValue, fadeValue, SlideInLeft } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerBtns}>
          <TouchableOpacity style={styles.btn} onPress={() => this._startParallel()}>
            <Text style={styles.textBtn}>Start parallel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => this._restart()}>
            <Text style={styles.textBtn}>Restart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => this._startSequence()}>
            <Text style={styles.textBtn}>Start sequence</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerBtns}>
          <Button title='500' onPress={() =>this.setNewDuration(500)} />
          <Button title='1000'  onPress={() =>this.setNewDuration(1000)} />
          <Button title='1500'  onPress={() =>this.setNewDuration(1500)} />
          <Button title='2000'  onPress={() =>this.setNewDuration(2000)} />
        </View>
        <Animated.View
          style={{
            transform: [
              {
                translateX: slideUpValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-600, 0]
                })
              }
            ],
            flex: 1,
            height: 250,
            width: 200,
            borderRadius: 12,
            backgroundColor: "#c00",
            justifyContent: "center"
          }}
        >
          <Text style={styles.text}>SlideUp </Text>
        </Animated.View>
        <Animated.View
          style={{
            transform: [
              {
                translateY: SlideInLeft.interpolate({
                  inputRange: [0, 1],
                  outputRange: [600, 0]
                })
              }
            ],
            flex: 1,
            height: 250,
            width: 200,
            borderRadius: 12,
            backgroundColor: "#347a2a",
            justifyContent: "center"
          }}
        >
          <Text style={styles.text}>SlideInLeft </Text>
        </Animated.View>
        <Animated.View
          style={{
            opacity: fadeValue,
            flex: 1,
            height: 250,
            width: 200,
            borderRadius: 12,
            backgroundColor: "#f4f",
            justifyContent: "center"
          }}
        >
          <Text style={styles.text}>Fade </Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center"
  },
  item: {},
  btn: {
    backgroundColor: "#480032",
    width: 100,
    height: 40,
    padding: 3,
    justifyContent: "center",
    borderRadius: 6,
    marginTop: 29,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
  item1: {
    backgroundColor: "red",
    padding: 20,
    width: 100,
    margin: 10
  },

  textBtn: {
    color: "#f4f4f4",
    fontWeight: "bold",
    textAlign: "center",

  },
  headerBtns: {
    flexDirection: 'row',
  },
});