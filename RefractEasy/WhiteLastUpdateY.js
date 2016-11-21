"use strict";

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image, TouchableHighlight} from 'react-native';
var LastScreen = require('./GetLastX');
var styles = StyleSheet.create({
  container: {
      padding: 15,
      flexDirection: 'column',
      justifyContent: 'center',
      // alignItems: 'center',
      flex: 1,
  },
  title: {
    fontSize: 30,
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {
      fontSize: 20,
      // textAlign: 'center',
      color: '#2077E8',
      flex: 1.5,
  },

  flowRight: {
      padding:15,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
  },

  flowDown: {
      flexDirection: 'column',
      alignItems: 'center',
      alignSelf: 'stretch',
  },
  button: {
      backgroundColor: '#48BBEC',
      borderColor: '#48BBEC',
      borderRadius: 8,
      // borderWidth: 2,
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 0.75,
  },
  buttonText: {
      fontSize: 25,
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      textShadowColor: 'lightslategray',
      textShadowOffset: {width: 3, height: 3,},
      textShadowRadius: 10,
  },
  searchInput: {
    flex: 4,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 10,
    color: '#48BBEC'
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
      title: "Final",
      component: LastScreen,
      passProps: {
        X: this.state.X,
        Y: this.state.Y - 0.25,
        Z: this.state.Z,
      },
    });
  }


  render(){
    return(
      <View style = {styles.container}>
        <View style={{flex: 1,}}>
        </View>
        <Text style = {styles.title}>Final Cylinder Value</Text>

        <Text style = {styles.description}>
        1. Subtract 0.25 from CYL{'\n\n'}
        2. CYL now = {this.state.Y-0.25} {'\n\n'}
        3. You are done with Cylinder Refinement</Text>
        <View style={{flex: 0.5,}}>
        </View>
        <View style={{flex: 1,}}>
        </View>
        <TouchableHighlight
          style = {styles.button}
          onPress={this.PressNextRight.bind(this)}
          underlayColor='#99d9f4'>
          <Text style = {styles.buttonText}>Next</Text>
        </TouchableHighlight>
        <View style={{flex: 0.5,}}>
        </View>
      </View>
    );
  }
}

module.exports = WhiteLastUpdateY;
