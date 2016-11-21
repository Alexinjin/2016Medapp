"use strict";
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight, NavigatorIOS} from 'react-native';

var WhiteLastUpdateY = require('./WhiteLastUpdateY');

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

            <Text style={styles.description}>Cylinder Refinement Power </Text>
            <Text style={styles.dataText}>
            Add 0.50 from CYL so:{"\n"}
            New Cylinder is {this.state.Y + 0.5}{"\n"}
            Maintain spherical equivalent. {"\n"}Subtract 0.25 to Sphere:{"\n"}
            New Sphere is {this.state.X - 0.25}{"\n"}
            {"\n"}
            Repeat JCC Flip with new values and ask patient which is better.{"\n"}
            </Text>
            <View style = {styles.flowRight}>
              <TouchableHighlight
                style = {styles.button}
                onPress = {this.onRedPressed.bind(this)}
                underlayColor = '#7AD8FF'>
                <Text style = {styles.buttonText}>Red</Text>
              </TouchableHighlight>
            </View>
            <View style = {styles.flowRight}>
              <TouchableHighlight
                onPress = {this.onWhitePressed.bind(this)}
                style = {styles.button}
                underlayColor = '#7AD8FF'>
                <Text style = {styles.buttonText} >White</Text>
              </TouchableHighlight>
            </View>


        </View>
        );
    }
}
module.exports = WhitePressedUpdate;
