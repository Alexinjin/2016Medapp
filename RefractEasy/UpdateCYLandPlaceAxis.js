"use strict";
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight, NavigatorIOS} from 'react-native';

var CylinderA = require('./CylinderA')
var styles = StyleSheet.create({
  container: {
      padding: 15,
      flexDirection: 'column',
      justifyContent: 'center',
      flex: 1,
  },
  title: {
    fontSize: 30,
    flex: 2.8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {
      fontSize: 20,
      textAlign: 'center',
      color: '#2077E8',
      flex: 5.5,
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


class UpdateCYLandPlaceAxis extends Component {
  constructor(props){
      super(props);
      this.state = {
          X: this.props.X,
          Y: 0.5,
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
        <Text style = {styles.description}>
        White at {this.state.Z}{"\n\n"}
        Add 0.50 to Cylinder and place Axis at {this.state.Z}{"\n\n"}
        Minus sphere by 0.25 to maintain the spherical equivalent</Text>
        <TouchableHighlight
          style = {styles.button}
          onPress = {this.onNextPressed.bind(this)}
          underlayColor = '#7AD8FF'>
          <Text style = {styles.buttonText}>Next</Text>
        </TouchableHighlight>
        <View style = {{flex:0.5,}}></View>
      </View>
    );
  }
}

module.exports = UpdateCYLandPlaceAxis;
