"use strict";

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight} from 'react-native';


var Start = require('./Start')


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
      textAlign: 'center',
      flex: 5,
  },
  flowRight: {
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
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'lightslategray',
    textShadowOffset: {width: 3, height: 3,},
    textShadowRadius: 10,
  },
  searchInput: {
    flex: 2,
    paddingLeft:4,
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
      // borderWidth: 2,
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
    this.props.navigator.popToTop();
  }
  render(){
    return(
      <View style = {styles.container}>
        <View style = {{flex:1.5,}}></View>
        <Text style = {styles.title}>Final Prescription</Text>
        <View style = {{flex:0.5,}}></View>
        <Text style = {styles.description}>
        Sph  = {this.state.X}{'\n\n'}
        Cyl   = {this.state.Y}{'\n\n'}
        Axis = {this.state.Z}</Text>
        <TouchableHighlight
          style = {styles.button}
          onPress={this.PressNext.bind(this)}
          underlayColor='#99d9f4'>
          <Text style = {styles.buttonText}>Finished</Text>
        </TouchableHighlight>
        <View style = {{flex:0.5,}}></View>
      </View>
    );
  }
}



module.exports = DisplayResult;
