"use strict";
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight, NavigatorIOS} from 'react-native';

var WhiteChoice = require('./WhiteChoice');
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
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 50,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
  },
  dataText: {
      padding: 5,
      fontSize: 15,
      textAlign: 'left',
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


export default class WhitePressedUpdate extends Component {
  constructor(props){
    super(props);
    this.state = {
        X: 0,
        Y: 0,
        Z: 0,

    };
  }
  PressNext(){
    this.props.navigator.push({
      title: "Eye Completed",
      component: WhiteChoice,
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
        <View>
          <Text style = {styles.description}>Updating CYL and Sph</Text>
          <Text style = {styles.dataText}>1. Add 0.5 to CYL to maintain the spherical equivalent</Text>
          <Text style = {styles.dataText}>2. Subtract 0.25 to Sph</Text>
        </View>
        <View style = {styles.flowRight}>
          <TouchableHighlight style = {styles.button}
            onPress={this.PressNext.bind(this)}
            uderlayColor = 'blue'>
          <Text style = {styles.dataText}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

module.exports = WhitePressedUpdate;
