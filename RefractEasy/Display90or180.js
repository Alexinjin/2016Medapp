"use-strict";
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight} from 'react-native';

var CylinderA = require('./CylinderA')
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
      flex: 3,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    description: {
        fontSize: 20,
        // textAlign: 'center',
        color: '#2077E8',
        flex: 6,
    },
    button: {
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderRadius: 8,
        // borderWidth: 2,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
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
});

class Display90or180 extends Component{
  constructor(props){
      super(props);
      this.state = {
          X: this.props.X-0.25,
          Y: this.props.Y+0.5,
          Z: this.props.Z
      };
  }

  onNextPressed(){
    this.props.navigator.push({
        title: 'Cylinder',
        component: CylinderA,
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
        <Text style = {styles.title}>White at <Text style={{color: 'red'}}>{this.state.Z}</Text></Text>
        <Text style = {styles.description}>1. Add 0.50 to CYL and place Axis at <Text style={{color: 'red'}}>{this.state.Z}</Text>{'\n'}{'\n'}
        2. Minus sphere by 0.25 to maintain the spherical equivalent</Text>
        <TouchableHighlight
          style = {styles.button}
          onPress = {this.onNextPressed.bind(this)}
          underlayColor = '#7AD8FF'>
          <Text style = {styles.buttonText}>Next</Text>
        </TouchableHighlight>
        <View style = {{flex:3,}}></View>
      </View>

    );
  }
}

module.exports = Display90or180;
