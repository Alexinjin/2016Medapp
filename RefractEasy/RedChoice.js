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

var RedPressedUpdate = require('./RedPressedUpdate');
var RedLastUpdateY = require('./RedLastUpdateY');

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
      flex: 3,
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

class RedChoice extends Component {
    constructor(props){
        super(props);
        this.state = {
            X: 0,
            Y: 0,
            Z: 0,
        };
    }

    onRedPressed(){
      this.props.navigator.push({
          title: 'Cylinder',
          component: RedPressedUpdate,
          passProps: {
              X: this.state.X,
              Y: this.state.Y,
              Z: this.state.Z,
          },
      });
    }

    onWhitePressed(){
      this.props.navigator.push({
          title: 'Cylinder',
          component: RedLastUpdateY,
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
              <View style={{flex: 1.5,}}>
              </View>

              <Text style={styles.title}>Cylinder Power</Text>

              <Text style={styles.description}>
              Repeat JCC Flip with new values and ask patient which is better.
              </Text>


              <TouchableHighlight
                style = {styles.button}
                onPress = {this.onRedPressed.bind(this)}
                underlayColor = '#7AD8FF'>
                <Text style = {styles.buttonText} >Red</Text>
              </TouchableHighlight>

              <View style={{flex: 0.3,}}>
              </View>

              <TouchableHighlight
                style = {styles.button}
                onPress = {this.onWhitePressed.bind(this)}
                uderlayColor = '#7AD8FF'>
                <Text style = {styles.buttonText} >White</Text>
              </TouchableHighlight>

              <View style={{flex: 1,}}>
              </View>

            </View>
        );
    }
}

module.exports = RedChoice;
