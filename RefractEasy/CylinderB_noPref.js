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

class CylinderB_noPref extends Component {
    constructor(props){
        super(props);
        this.state = {
            X: 0,
            Y: 0,
            Z: 0,
        };
    }

    render(){

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
          component: CylinderB_noPref,
          passProps: {
              X: this.state.X,
              Y: this.state.Y,
              Z: this.state.Z,
          },
      });
    }

      return (
          <View style={styles.container}>
            <Text style={styles.description}>Cylinder {"\n"} Y {"<="} 1</Text>

            <Text style={styles.dataText}>
            Place Axis at 90{"\n"}
            Orient JCC  at 45 and 135 degrees.{"\n"}
            </Text>





            <View style = {styles.flowRight}>
              <TouchableHighlight
                style = {styles.button}
                uderlayColor = 'blue'>
                <Text style = {styles.buttonText} onPress = {this.on45Pressed.bind(this)}>White at 45</Text>
              </TouchableHighlight>
            </View>
            <View style = {styles.flowRight}>
              <TouchableHighlight
                style = {styles.button}
                uderlayColor = 'blue'>
                <Text style = {styles.buttonText} onPress = {this.on135Pressed.bind(this)}>White at 135</Text>
              </TouchableHighlight>
            </View>
            <View style = {styles.flowRight}>
              <TouchableHighlight
                style = {styles.button}
                uderlayColor = 'blue'>
                <Text style = {styles.buttonText} onPress = {this.onNoPrefPressed.bind(this)}>No Prefernce</Text>
              </TouchableHighlight>
            </View>




            </View>
        );
    }
}

module.exports = CylinderB_noPref;
