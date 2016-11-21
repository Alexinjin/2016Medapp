"use-strict";
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight} from 'react-native';

var CylinderA = require('./CylinderA');
var CylinderB = require('./CylinderB');

var styles = StyleSheet.create({
    container: {
        marginTop: 120,
        padding: 30,
        alignItems: 'center',
    },
    description: {
        marginBottom: 50,
        fontSize: 30,
        textAlign: 'center',
        color: '#2077E8',
    },
    image: {
        width: 320,
        height: 154,
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    smallTexts: {
        marginTop: 50,
        marginBottom: 50,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15,
        textAlign: 'left',
        color: 'white',
        backgroundColor: 'paleturquoise',
        fontWeight: 'bold',
        flex: 1,
        padding: 10,
        borderWidth: 2,
        borderColor: 'paleturquoise',
        textShadowColor: 'lightseagreen',
        textShadowOffset: {width: 3, height: 3,},
        textShadowRadius: 10,
    },
    dataText: {
        fontSize: 15,
        textAlign: 'center',
        textShadowColor: 'gray',
        textShadowOffset: {width: 1, height: 1,},
        textShadowRadius: 10,
    },
    flowDown: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 3,
        borderRadius: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginTop: 30
},

});




class CylinderAxis extends Component{
  constructor(props){
      super(props);
      this.state = {
          X: 10,
          Y: 0.5,
          Z: 0
      };
  }

  onNextPressedToA(){
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

  onNextPressedToB(){
      this.props.navigator.push({
          title: 'Cylinder',
          component: CylinderB,
          passProps: {
              X: this.state.X,
              Y: this.state.Y,
              Z: this.state.Z,
          },
      });
  }


  render(){
    var text;
    if (this.state.Y > 1){
      text =  <TouchableHighlight
              style = {styles.button}
              uderlayColor = 'blue'>
              <Text style = {styles.dataText}
              onPress = {this.onNextPressedToA.bind(this)}>Next</Text>
              </TouchableHighlight>;
      }else {
      text =  <TouchableHighlight
              style = {styles.button}
              uderlayColor = 'blue'>
              <Text style = {styles.dataText}
              onPress = {this.onNextPressedToB.bind(this)}>Next</Text>
              </TouchableHighlight>;
            }
    return(
      <View style = {styles.container}>
        <View>
          <Text style = {styles.description}>Cylinder Axis Refinement</Text>
          <Text style = {styles.dataText}>Isolate 20/30 line or one line above best vision </Text>
          <Text style = {styles.dataText}>Let JCC straddle the instrument</Text>
          </View>
        <View style = {styles.flowRight}>
        {text}
        </View>
      </View>

    );
  }
}

module.exports = CylinderAxis;
