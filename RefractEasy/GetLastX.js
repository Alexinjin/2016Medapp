"use strict";

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight} from 'react-native';

var Start = require('./Start')


var styles = StyleSheet.create({
  container: {
      marginTop: 100,
      padding: 30,
      alignItems: 'center',
  },
  description: {
      marginBottom: 50,
      fontSize: 30,
      textAlign: 'center',
      color: '#2077E8',
  },
  flowRight: {
      padding:1,
      marginTop:30,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
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
    fontSize: 15,
    color: 'black',
    textAlign: 'right',
  },
  searchInput: {
    flex: 4,
    paddingLeft:4,
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
    borderWidth: 3,
    borderRadius: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
})

class LastScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
        X: this.props.X,
        Y: this.props.Y,
        Z: this.props.Z,
        eye: this.props.eye,
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
          eye: this.state.eye,
      },
    });
  }
  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.description}>Confirmation</Text>
        <View>
          <Text style = {styles.dataText}>1. Sphere Power Refinement should be close</Text>
          <Text style = {styles.dataText}>2. Currently, Sphere Power = {this.state.X}</Text>
          <Text style = {styles.dataText}>3. Fogged again by adding 0.75</Text>
          <Text style = {styles.dataText}>4. Subtract 0.25 from the patients</Text>
          <Text style = {styles.dataText}>5. Ask if the vision is better</Text>
          <Text style = {styles.dataText}>6. Stop if no more appreciably improvement</Text>
          <View style = {styles.flowRight}>
            <TextInput
            style = {styles.searchInput}
            placeholder = ' Patient Stops At: '/>
            <TouchableHighlight
              style = {styles.button}
              onPress={this.PressNext.bind(this)}
              uderlayColor = 'blue'>
              <Text style = {styles.buttonText}>Confirm</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}



module.exports = LastScreen;
