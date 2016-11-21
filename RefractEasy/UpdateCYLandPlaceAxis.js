"use strict";
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight, NavigatorIOS} from 'react-native';

var CylinderA = require('./CylinderA')
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


class UpdateCYLandPlaceAxis extends Component {
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
        <View>
          <Text style = {styles.description}>White at {this.state.Z}</Text>
          <Text style = {styles.dataText}>Add 0.50 to CYL and place Axis at {this.state.Z}</Text>
          <Text style = {styles.dataText}>Minus sphere by 0.25 to maintain the spherical equivalent</Text>
        </View>
        <View style = {styles.flowRight}>
          <TouchableHighlight
            style = {styles.button}
            uderlayColor = 'blue'>
            <Text style = {styles.buttonText} onPress = {this.onNextPressed.bind(this)}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

module.exports = UpdateCYLandPlaceAxis;
