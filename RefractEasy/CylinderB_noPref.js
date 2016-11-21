'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    TextInput
} from 'react-native';

var UpdateCYLandPlaceAxis = require('./UpdateCYLandPlaceAxis');
var DisplayResult = require('./DisplayResult');
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
      flex: 2,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: '#2077E8',
        flex: 5,
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

class CylinderB_noPref extends Component {
    constructor(props){
        super(props);
        this.state = {
            X: 0,
            Y: 0,
            Z: 0,
        };
    }

        on45Pressed(){
          this.props.navigator.push({
              title: 'Cylinder',
              component: UpdateCYLandPlaceAxis,
              passProps: {
                  X: this.state.X,
                  Y: this.state.Y,
                  Z: 45,
              },
          });
        }

        on135Pressed(){
          this.props.navigator.push({
              title: 'Cylinder',
              component: UpdateCYLandPlaceAxis,
              passProps: {
                  X: this.state.X,
                  Y: this.state.Y,
                  Z: 135,
              },
          });
        }

        onNoPrefPressed(){
          this.props.navigator.push({
              title: 'Cylinder',
              component: DisplayResult,
              passProps: {
                  X: this.state.X,
                  Y: this.state.Y,
                  Z: this.state.Z,
              },
          });
        }
    render(){
      return (
          <View style={styles.container}>

            <View style={{flex: 3,}}>
            </View>

            <Text style={styles.description}>
            Place Axis at 90{"\n"}{"\n"}
            Orient JCC  at 45 and 135 degrees.
            </Text>

            <TouchableHighlight
              style = {styles.button}
              onPress = {this.on45Pressed.bind(this)}
              underlayColor = '#7AD8FF'>
              <Text style = {styles.buttonText}>White at 45</Text>
            </TouchableHighlight>
            <View style={{flex: 0.3}}>
            </View>

            <TouchableHighlight
              style = {styles.button}
              onPress = {this.on135Pressed.bind(this)}
              underlayColor = '#7AD8FF'>
              <Text style = {styles.buttonText} >White at 135</Text>
            </TouchableHighlight>
            <View style={{flex: 0.3}}>
            </View>

            <TouchableHighlight
              style = {styles.button}
              onPress = {this.onNoPrefPressed.bind(this)}
              underlayColor = '#7AD8FF'>
              <Text style = {styles.buttonText} >No Prefernce</Text>
            </TouchableHighlight>

            <View style={{flex: 1}}>
            </View>

            </View>
        );
    }
}

module.exports = CylinderB_noPref;
