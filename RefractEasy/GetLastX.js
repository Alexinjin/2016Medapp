"use strict";

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight} from 'react-native';

var DisplayResult = require('./DisplayResult')


var styles = StyleSheet.create({
  container: {
      padding: 15,
      flexDirection:'column',
      flex:1,
  },
  description: {
      fontSize: 20,
      color: '#2077E8',
      flex: 1.5,
  },
  titleText : {
    fontSize : 27,
    flex : 2,
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
      color: 'white',
      alignSelf: 'center'
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
      borderWidth: 2,
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
    };
  }

  PressNext(){
    this.props.navigator.push({
      title : 'Result',
      component: DisplayResult,
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
        <View style = {{flex:2,}}>
        </View>
        <Text style = {styles.titleText}>Confirmation</Text>
        <View style = {styles.flowRight}>
          <TextInput
          style = {styles.searchInput}
          placeholder = ' Patient Stops At: '/>
          <TouchableHighlight
            style = {styles.button}
            onPress={this.PressNext.bind(this)}
            underlayColor='#99d9f4'>
            <Text style = {styles.buttonText}>Confirm</Text>
          </TouchableHighlight>
        </View>
        <View style={{flex: 1,}}></View>
        <Text style = {styles.description}>1. Sphere Power Refinement should be close</Text>
        <Text style = {styles.description}>2. Currently, Sphere Power = {this.state.X}</Text>
        <Text style = {styles.description}>3. Fogged again by adding 0.75</Text>
        <Text style = {styles.description}>4. Subtract 0.25 from the patients</Text>
        <Text style = {styles.description}>5. Ask if the vision is better</Text>
        <Text style = {styles.description}>6. Stop if no more appreciably improvement</Text>
        <Text style = {styles.description}>7. Put the result into the input box </Text>
      </View>
    );
  }
}



module.exports = GetLastX;
