"use-strict";
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight} from 'react-native';

var GetLastX = require('./GetLastX');
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
        <View>
          <Text style = {styles.description}>Add 0.25 to CYL</Text>
          <Text style = {styles.description}> CYL now = {this.state.Y+0.25} </Text>
          <Text style = {styles.dataText}>You're done with Cylinder refinement</Text>
          </View>
        <View style = {styles.flowRight}>
          <TouchableHighlight
            style = {styles.button}
            onPress={this.PressNextRight.bind(this)}
            uderlayColor = 'blue'>
            <Text style = {styles.dataText}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>

    );
  }
}

module.exports = RedLastUpdateY;
