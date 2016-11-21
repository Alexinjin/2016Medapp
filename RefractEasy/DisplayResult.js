"use strict";

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight} from 'react-native';


var Start = require('./Start')


var styles = StyleSheet.create({
  container: {
      padding: 15,
      flexDirection:'column',
      flex:1,
  },
  description: {
      fontSize: 20,
      color: '#2077E8',
      flex: 1,
  },
  titleText : {
    fontSize : 27,
    flex : 1,
  },
  flowRight: {
      flex:1.5,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
      justifyContent: 'center'
  },
  dataText: {
      padding: 5,
      fontSize: 15,
      textAlign: 'left',
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

class DisplayResult extends Component{
  constructor(props){
    super(props);
    this.state = {
        X: this.props.X,
        Y: this.props.Y,
        Z: this.props.Z,
    };
  }
  PressNext(){
    this.props.navigator.push({
      title : 'RefractEasy',
      component: Start,
      //make a if statement (if left, passPros:{leftX ....})
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
        <View style = {{flex:1.5,}}></View>
        <Text style = {styles.titleText}>Final Prescription</Text>
        <View style = {{flex:0.5,}}></View>
        <Text style = {styles.description}>Sph  = {this.state.X}</Text>
        <Text style = {styles.description}>Cyl   = {this.state.Y}</Text>
        <Text style = {styles.description}>Axis = {this.state.Z}</Text>
        <View style = {{flex:3,}}></View>
        <TouchableHighlight
          style = {styles.button}
          onPress={this.PressNext.bind(this)}
          underlayColor='#99d9f4'>
          <Text style = {styles.buttonText}>Finished</Text>
        </TouchableHighlight>
        <View style = {{flex:1,}}></View>
      </View>
    );
  }
}



module.exports = DisplayResult;
