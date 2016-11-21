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

var CylinderB_noPref = require('./CylinderB_noPref');
var Display90or180 = require('./Display90or180');
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
      flex: 1,
      textAlign: 'center',
      fontWeight: 'bold',
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

class CylinderB extends Component {
    constructor(props){
        super(props);
        this.state = {
          X: this.props.X,
          Y: this.props.Y,
          Z: this.props.Z,
        };
    }

    on90Pressed(){
      this.props.navigator.push({
          title: 'Cylinder',
          component: Display90or180,
          passProps: {
              X: this.state.X,
              Y: this.state.Y,
              Z: 90,
          },
      });
    }

    on180Pressed(){
      this.props.navigator.push({
          title: 'Cylinder',
          component: Display90or180,
          passProps: {
              X: this.state.X,
              Y: this.state.Y,
              Z: 180,
          },
      });
    }

    onNoPrefPressed(){
      this.props.navigator.push({
          title: 'Cylinder',
          component: CylinderB_noPref,
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
              <View style={{flex: 1,}}>
              </View>
              <Text style={styles.title}>Cylinder {"<="} 1</Text>
              <Text style={styles.description}>1. Cyl=0.50 Axis at 180</Text>
              <Text style={styles.description}>2. Orient JCC so that red is at 90 and white at 180 degrees.</Text>
              <Text style={styles.description}>3. Flip JCC and ask the patient, which is better.</Text>
              <TouchableHighlight
                style = {styles.button}
                onPress = {this.on90Pressed.bind(this)}
                uderlayColor = '#7AD8FF'>
                <Text style = {styles.buttonText} >White at 90</Text>
              </TouchableHighlight>
              <View style={{flex: 0.1,}}>
              </View>
              <TouchableHighlight
                style = {styles.button}
                onPress = {this.on180Pressed.bind(this)}
                uderlayColor = '#7AD8FF'>
                <Text style = {styles.buttonText}>White at 180</Text>
              </TouchableHighlight>
              <View style={{flex: 0.1,}}>
              </View>
              <TouchableHighlight
                style = {styles.button}
                onPress = {this.onNoPrefPressed.bind(this)}
                uderlayColor = '#7AD8FF'>
                <Text style = {styles.buttonText}>No Preference</Text>
              </TouchableHighlight>
              <View style={{flex: 0.3,}}>
              </View>
            </View>
        );
    }
}

module.exports = CylinderB;
