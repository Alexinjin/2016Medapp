"use-strict";
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight} from 'react-native';

var CylinderA = require('./CylinderA');
var CylinderB = require('./CylinderB');

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
      fontWeight: 'bold',
      textAlign: 'center',
      flex: 1,
    },
    description: {
        fontSize: 20,
        // textAlign: 'center',
        color: '#2077E8',
        flex: 1,
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
});




class CylinderAxis extends Component{
  constructor(props){
      super(props);
      this.state = {
          X: this.props.X,
          Y: this.props.Y,
          Z: this.props.Z,
      };
      console.log('CylinerAxis: x: ' + this.state.X + ', y: ' + this.state.Y + ', z: ' + this.state.Z);
  }

  onNextPressedToA(){
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

  onNextPressedToB(){
      this.props.navigator.push({
          title: 'Cylinder',
          component: CylinderB,
          passProps: {
              X: this.state.X,
              Y: this.state.Y,
              Z: this.state.Z,
          },
      });
  }


  render(){
    var text;
    if (this.state.Y > 1){
      text =  <TouchableHighlight
              style = {styles.button}
              onPress = {this.onNextPressedToA.bind(this)}
              uderlayColor = '#7AD8FF'>
                <Text
                style = {styles.buttonText}>
                  Next
                </Text>
              </TouchableHighlight>;
      }else {
      text =  <TouchableHighlight
              style = {styles.button}
              onPress = {this.onNextPressedToB.bind(this)}
              uderlayColor = '#7AD8FF'>
                <Text style = {styles.buttonText}>
                  Next
                </Text>
              </TouchableHighlight>;
            };
    return(
      <View style = {styles.container}>
        <View style={{flex: 1,}}>
        </View>
        <Text style = {styles.title}>Cylinder Axis Refinement</Text>
        <Text style = {styles.description}>1. Isolate 20/30 line or one line above best vision </Text>
        <Text style = {styles.description}>2. Let JCC straddle the instrument</Text>
        {text}
        <View style={{flex: 1,}}>
        </View>
      </View>
    );
  }
}

module.exports = CylinderAxis;
