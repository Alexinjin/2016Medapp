"use strict";
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight, NavigatorIOS} from 'react-native';


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


class Screen_5d extends Component {
  render(){
    return(
      <View style = {styles.container}>
        <View>
          <Text style = {styles.description}>Steps</Text>
          <Text style = {styles.dataText}>1. Add 0.5 to CYL</Text>
          <Text style = {styles.dataText}>2. Place axis at 45/135</Text>
          <Text style = {styles.dataText}>3. Sphere - 0.25 to maintain the spherical equivalent</Text>
        </View>
        <View style = {styles.flowRight}>
          <TouchableHighlight
            style = {styles.button}
            uderlayColor = 'blue'>
            <Text style = {styles.dataText}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

module.exports = Screen_5d;
