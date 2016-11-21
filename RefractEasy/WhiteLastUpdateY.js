"use strict";

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image, TouchableHighlight} from 'react-native';
var LastScreen = require('./GetLastX');
var styles = StyleSheet.create({
  container: {
      padding: 15,
      width : null,
      height : null,
      flexDirection:'column',
      flex:1,
  },
  description: {
      fontSize: 20,
      color: '#2077E8',
      flex: 1,
  },

  titleText : {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    flex : 2,
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
  buttonText: {
      fontSize: 25,
      color: 'white',
      alignSelf: 'center'
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
      backgroundColor: '#48BBEC',
      borderColor: '#48BBEC',
      borderRadius: 8,
      borderWidth: 2,
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
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
        <View style={{flex: 1.5,}}>
        </View>
        <Text style = {styles.titleText}>Setting Final Cylinder Value</Text>
        <Text style = {styles.description}>1. Subtract 0.25 from CYL</Text>
        <Text style = {styles.description}>2. CYL now = {this.state.Y-0.25} </Text>
        <Text style = {styles.description}>3. You are done with Cylinder Refinement</Text>
        <View style={{flex: 1,}}>
        </View>
        <TouchableHighlight
          style = {styles.button}
          onPress={this.PressNextRight.bind(this)}
          underlayColor='#99d9f4'>
          <Text style = {styles.buttonText}>Next</Text>
        </TouchableHighlight>
        <View style={{flex: 2,}}>
        </View>
      </View>
    );
  }
}

module.exports = WhiteLastUpdateY;
