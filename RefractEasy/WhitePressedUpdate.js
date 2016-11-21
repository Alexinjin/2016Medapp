"use strict";
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight, NavigatorIOS} from 'react-native';

var WhiteLastUpdateY = require('./WhiteLastUpdateY');

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
    flex: 2.8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {
      fontSize: 20,
      // textAlign: 'center',
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


export default class WhitePressedUpdate extends Component {
  constructor(props){
    super(props);
    this.state = {
          X: this.props.X,
          Y: this.props.Y,
          Z: this.props.Z,
        };
  }
  onWhitePressed(){
    this.setState({X:this.state.X - 0.25,Y:this.state.Y+0.5});
    }

  onRedPressed(){
    this.props.navigator.push({
      title: "Eye Completed",
      component: WhiteLastUpdateY ,
      passProps: {
          X: this.state.X,
          Y: this.state.Y,
          Z: this.state.Z,
      },
    });
  }
  render(){
    return(
       <View style={styles.container}>
            <View style = {{flex:1.5,}}></View>
            <Text style={styles.title}>Cylinder Refinement Power </Text>
            <Text style={styles.description}>
            1. Add 0.50 from CYL, so New Cylinder is <Text style = {{color : 'red'}}>{this.state.Y + 0.5}</Text>{"\n\n"}
            2. Maintain spherical equivalent. {"\n"}Subtract 0.25 to Sphere{"\n\n"}
            3. New Sphere is <Text style = {{color : 'red'}}>{this.state.X - 0.25}</Text>{"\n\n"}
            4. Repeat JCC Flip with new values and ask patient which is better.{"\n\n"}
            </Text>
            <TouchableHighlight
              style = {styles.button}
              onPress = {this.onRedPressed.bind(this)}
              underlayColor = '#7AD8FF'>
              <Text style = {styles.buttonText}>Red</Text>
            </TouchableHighlight>
            <View style = {{flex:0.3,}}></View>
            <TouchableHighlight
              onPress = {this.onWhitePressed.bind(this)}
              style = {styles.button}
              underlayColor = '#7AD8FF'>
              <Text style = {styles.buttonText} >White</Text>
            </TouchableHighlight>

            <View style = {{flex:1,}}></View>
        </View>
        );
    }
}
module.exports = WhitePressedUpdate;
