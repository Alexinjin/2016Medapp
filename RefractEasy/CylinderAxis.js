"use-strict";
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight} from 'react-native';

var CylinderA = require('./CylinderA');
var CylinderB = require('./CylinderB');
var styles = StyleSheet.create({
  container: {
      marginTop: 100,
      padding: 30,
      alignItems: 'center',
  },
  description: {
      marginBottom: 50,
      fontSize: 25,
      textAlign: 'left',
      color: '#2077E8',
  },
  flowRight: {
      paddingLeft: 5,
      paddingRight: 5,
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
});


class CylinderAxis extends Component{
  constructor(props){
      super(props);
      this.state = {
          X: 10,
          Y: 1.5,
          Z: 0
      };
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
              uderlayColor = 'blue'>
              <Text style = {styles.dataText}
              onPress = {this.onNextPressedToA.bind(this)}>Next</Text>
              </TouchableHighlight>;
      }else {
      text =  <TouchableHighlight
              style = {styles.button}
              uderlayColor = 'blue'>
              <Text style = {styles.dataText}
              onPress = {this.onNextPressedToB.bind(this)}>Next</Text>
              </TouchableHighlight>;
            }
    return(
      <View style = {styles.container}>
        <View>
          <Text style = {styles.description}>Cylinder Axis Refinement</Text>
          <Text style = {styles.dataText}>Isolate 20/30 line or one line above best vision </Text>
          <Text style = {styles.dataText}>Let JCC straddle the instrument</Text>
          </View>
        <View style = {styles.flowRight}>
        {text}
        </View>
      </View>

    );
  }
}

module.exports = CylinderAxis;
