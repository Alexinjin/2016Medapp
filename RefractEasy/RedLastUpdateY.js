"use-strict";
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight} from 'react-native';

var GetLastX = require('./GetLastX');
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
      flex: 2,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: '#2077E8',
        flex: 5,
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
    buttonText: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'lightslategray',
        textShadowOffset: {width: 3, height: 3,},
        textShadowRadius: 10,
    },
})

class RedLastUpdateY extends Component{
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
      component: GetLastX,
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
        <View style={{flex: 1,}}>
        </View>
        <Text style = {styles.title}>Final Cylinder Value</Text>

        <Text style = {styles.description}>
        1. Add 0.25 to Cylinder{'\n\n'}
        2. Cylinder now is <Text style={{color: 'red',}}>{this.state.Y+0.25} </Text>{'\n\n'}
        3. You are done with Cylinder refinement</Text>
        <View style={{flex: 0.5,}}>
        </View>
        <View style={{flex: 1,}}>
        </View>
        <TouchableHighlight
          style = {styles.button}
          onPress={this.PressNextRight.bind(this)}
          underlayColor = '#7AD8FF'>
          <Text style = {styles.buttonText}>Next</Text>
        </TouchableHighlight>

        <View style={{flex: 0.5,}}>
        </View>
      </View>

    );
  }
}

module.exports = RedLastUpdateY;
