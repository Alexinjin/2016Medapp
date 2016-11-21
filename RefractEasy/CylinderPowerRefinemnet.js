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
var WhitePressedUpdate = require('./WhitePressedUpdate');
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
        flex: 4,
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

class CylinderPowerRefinemnet extends Component {
    constructor(props){
        super(props);
        this.state = {
            X: this.props.X,
            Y: this.props.Y,
            Z: this.props.Z
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
          component: WhitePressedUpdate,
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
              <Text style={styles.title}>Cylinder Power
              </Text>

              <View style={{flex: 0.5,}}>
              </View>

              <Text style={styles.description}>
              1. Need to focus both images on the retina (axes) {'\n'}{'\n'}
              2. Twist JCC to align red or white dots at <Text style={{color: 'red',}}>{this.state.Z}</Text>{'\n'}{'\n'}
              3. Flip JCC, ask which flip patient prefers. </Text>


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
                underlayColor = '#7AD8FF'>
                <Text style = {styles.buttonText} >White</Text>
              </TouchableHighlight>


            </View>
        );
    }
}

module.exports = CylinderPowerRefinemnet;
