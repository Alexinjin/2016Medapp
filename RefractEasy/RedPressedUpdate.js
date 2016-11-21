'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    TextInput,
    NavigatorIOS
} from 'react-native';

var RedLastUpdateY = require('./RedLastUpdateY');
var styles = StyleSheet.create({
  container: {
      padding: 15,
      flexDirection: 'column',
      justifyContent: 'center',
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

class RedPressedUpdate extends Component {
    constructor(props){
        super(props);
        this.state = {
          X: this.props.X,
          Y: this.props.Y,
          Z: this.props.Z,
        };
    }

    onRedPressed(){
      this.setState({X:this.state.X + 0.25,Y:this.state.Y-0.5});
    }

    onWhitePressed(){
      this.props.navigator.push({
          title: 'Cylinder',
          component: RedLastUpdateY,
          passProps: {
              X: this.state.X + 0.25,
              Y: this.state.Y - 0.5,
              Z: this.state.Z,
          },
      });
    }
    render(){
        return (
            <View style={styles.container}>
              <View style = {{flex:1.5,}}></View>
              <Text style={styles.title}>Cylinder Refinement Power </Text>
              <Text style={styles.description}>
              1. Subtract 0.50 from Cylinder so:{"\n\n"}
              2. New Cylinder is <Text style = {{color:'red',}}>{this.state.Y - 0.5}</Text>{"\n\n"}
              3. Maintain spherical equivalent. {"\n\n"}
              4. Add 0.25 to Sphere:{"\n\n"}
              5. New Sphere is <Text style = {{color:'red'}}>{this.state.X + 0.25}</Text>{"\n\n"}
              6. Repeat JCC Flip with new values and ask patient which is better.{"\n\n"}
              </Text>
                <TouchableHighlight
                  style = {styles.button}
                  onPress = {this.onRedPressed.bind(this)}
                  underlayColor = '#7AD8FF'>
                  <Text style = {styles.buttonText}>Red</Text>
                </TouchableHighlight>
                <View style = {{flex:0.3,}}></View>
                <TouchableHighlight
                  style = {styles.button}
                  onPress = {this.onWhitePressed.bind(this)}
                  underlayColor = '#7AD8FF'>
                  <Text style = {styles.buttonText}>White</Text>
                </TouchableHighlight>
                <View style = {{flex:0.3,}}></View>


            </View>
        );
    }
}

module.exports = RedPressedUpdate;
