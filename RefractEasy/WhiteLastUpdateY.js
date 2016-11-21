"use strict";

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight} from 'react-native';
var LastScreen = require('./GetLastX');
var styles = StyleSheet.create({
  container: {
      marginTop: 100,
      padding: 30,
      alignItems: 'center',
  },
  description: {
      marginBottom: 50,
      fontSize: 25,
      textAlign: 'center',
      color: '#2077E8',
  },
  flowRight: {
      padding:15,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
  },
  dataText: {
      paddingTop: 5,
      fontSize: 15,
      textAlign: 'left',
  },
  flowDown: {
      flexDirection: 'column',
      alignItems: 'center',
      alignSelf: 'stretch',
  },
  buttonText: {
    fontSize: 15,
    color: 'black',
    textAlign: 'right',
  },
  searchInput: {
    flex: 4,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 10,
    color: '#48BBEC'
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
})

class WhiteLastUpdateY extends Component{
  constructor(props){
    super(props);
    this.state = {
      X: this.props.X,
      Y: this.props.Y,
      Z: this.props.Z,
    };
  }
  PressNextRight(){
    this.props.navigator.push({
      title: "Eye Completed",
      component: LastScreen,
      passProps: {
        X: this.state.X,
        Y: this.state.Y,
        Z: this.state.Z,
      },
    });
  }
  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.description}>Setting Final Cylinder Value</Text>
        <View>
          <Text style = {styles.dataText}>1. Subtract 0.25 from CYL</Text>
          <Text style = {styles.dataText}>2. CYL now = {this.state.Y-0.25} </Text>
          <Text style = {styles.dataText}>3. You are done with Cylinder Refinement</Text>
        </View>
        <View style = {styles.flowRight}>
          <TouchableHighlight
            style = {styles.button}
            onPress={this.PressNextRight.bind(this)}
            uderlayColor = 'blue'>
            <Text style = {styles.dataText}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

module.exports = WhiteLastUpdateY;
