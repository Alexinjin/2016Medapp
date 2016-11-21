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
              <Text style={styles.description}>Cylinder {"\n"} Y {"<="} 1</Text>

              <Text style={styles.dataText}>
              Cyl=0.50 Axis at 180{"\n"}
              Orient JCC so that red is at 90 and white at 180 degrees.{"\n"}
              Flip JCC and ask the patient, which is better.{"\n"}
              </Text>





              <View style = {styles.flowRight}>
                <TouchableHighlight
                  style = {styles.button}
                  uderlayColor = 'blue'>
                  <Text style = {styles.buttonText} onPress = {this.on90Pressed.bind(this)}>White at 90</Text>
                </TouchableHighlight>
              </View>
              <View style = {styles.flowRight}>
                <TouchableHighlight
                  style = {styles.button}
                  uderlayColor = 'blue'>
                  <Text style = {styles.buttonText} onPress = {this.on180Pressed.bind(this)}>White at 180</Text>
                </TouchableHighlight>
              </View>
              <View style = {styles.flowRight}>
                <TouchableHighlight
                  style = {styles.button}
                  uderlayColor = 'blue'>
                  <Text style = {styles.buttonText} onPress = {this.onNoPrefPressed.bind(this)}>No Preference</Text>
                </TouchableHighlight>
              </View>




            </View>
        );
    }
}

module.exports = CylinderB;
