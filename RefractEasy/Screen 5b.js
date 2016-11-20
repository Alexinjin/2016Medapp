"use-strict";
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight} from 'react-native';


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

class Screen_5b extends Component{
  render(){
    return(
      <View style = {styles.container}>
        <View>
          <Text style = {styles.description}>White at 90 / 180</Text>
          <Text style = {styles.dataText}>Add 0.50 to CYL and place Axis at 90 / 180</Text>
          <Text style = {styles.dataText}>Minus sphere by 0.25 to maintain the spherical equivalent</Text>
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

module.exports = Screen_5b;
