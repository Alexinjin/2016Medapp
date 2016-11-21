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
        <Text style = {styles.description}>Final Prescription</Text>
        <View style = {styles.flowRight}>
          <Text style = {styles.dataText}>Sph = {this.state.X}</Text>
          <Text style = {styles.dataText}>Cyl = {this.state.Y}</Text>
          <Text style = {styles.dataText}>Axis = {this.state.Z}</Text>
        </View>
        <View style = {styles.flowRight}>
          <TouchableHighlight
            style = {styles.button}
            onPress={this.PressNext.bind(this)}
            uderlayColor = 'blue'>
            <Text style = {styles.buttonText}>Finished</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}



module.exports = DisplayResult;
