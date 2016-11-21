"use strict";

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight} from 'react-native';

var DisplayResult = require('./DisplayResult')


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

class GetLastX extends Component{
  constructor(props){
    super(props);
    this.state = {
        X: this.props.X,
        Y: this.props.Y,
        Z: this.props.Z,
        newX:0,
    };
  }

  PressNext(){
    this.props.navigator.push({
      title : 'Result',
      component: DisplayResult,
      //make a if statement (if left, passPros:{leftX ....})
      passProps: {
          X: this.state.newX,
          Y: this.state.Y,
          Z: this.state.Z,
      },
    });
  }
  onXChanged(event){
      this.setState({ newX: parseFloat(event.nativeEvent.text) });
  }
  render(){
    return(
      <View style = {styles.container}>
        <View style = {{flex:1,}}>
        </View>
        <Text style = {styles.title}>Confirmation</Text>
        <View style = {styles.flowRight}>
          <TextInput
          style = {styles.searchInput}
          onChange={this.onXChanged.bind(this)}
          keyboardType='numeric'
          placeholder = ' Patient Stops At: '/>
          <TouchableHighlight
            style = {styles.button}
            onPress={this.PressNext.bind(this)}
            underlayColor='#99d9f4'>
            <Text style = {styles.buttonText}>Confirm</Text>
          </TouchableHighlight>
        </View>
        <View style={{flex: 0.4,}}></View>
        <Text style = {styles.description}>
        1. Sphere Power Refinement should be close{'\n\n'}
        2. Currently, Sphere Power = {this.state.X}{'\n\n'}
        3. Fogged again by adding 0.75{'\n\n'}
        4. Subtract 0.25 from the patients{'\n\n'}
        5. Ask if the vision is better{'\n\n'}
        6. Stop if no more appreciably improvement{'\n\n'}
        7. Put the result into the input box </Text>
        <View style={{flex: 1,}}></View>
      </View>
    );
  }
}



module.exports = GetLastX;
