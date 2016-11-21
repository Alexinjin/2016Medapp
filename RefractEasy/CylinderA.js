'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableHighlight,
} from 'react-native';

var CylinderPowerRefinemnet = require('./CylinderPowerRefinemnet');
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
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        flex: 0.6,
    },
    description: {
        fontSize: 20,
        textAlign: 'left',
        color: '#2077E8',
        flex: 6,
    },
    inputBox: {
        // height: 36,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
        flex: 3,
    },
    button: {
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderRadius: 8,
        // borderWidth: 2,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'lightslategray',
        textShadowOffset: {width: 3, height: 3,},
        textShadowRadius: 10,
    },
});



class CylinderA extends Component {
    constructor(props){
        super(props);
        this.state = {
          X: this.props.X,
          Y: this.props.Y,
          Z: this.props.Z,
          newZ : 0
        };
    }

    onNextPressed(){
      this.props.navigator.push({
          title: 'Cylinder',
          component: CylinderPowerRefinemnet,
          passProps: {
              X: this.state.X,
              Y: this.state.Y,
              Z: parseFloat(this.state.newZ)
          },
      });

    }

    render(){
        return (
            <View style={styles.container}>
              <View style={{flex: 1,}}>
              </View>
              <Text style={styles.title}>Cylinder {'>'} 1</Text>

              <View style={styles.flowRight}>
                <TextInput
                  style={styles.inputBox}
                  placeholder = 'Enter New Axis'
                  keyboardType='numeric'
                  onChangeText={(newZ) => this.setState({newZ})}/>
                <TouchableHighlight style={styles.button}
                    onPress = {this.onNextPressed.bind(this)}
                    underlayColor='#7AD8FF'>
                  <Text style= {styles.buttonText} > Finish </Text>
                </TouchableHighlight>
              </View>

              <View style={{flex: 1,}}>
              </View>

              <Text style={styles.description}> Cyl = <Text style={[styles.description, {color: 'red',}]}>{this.state.Y}</Text>{'\n'}{'\n'}
              1. Place Red or White dots Axis at <Text style={[styles.description, {color: 'red',}]}>{this.state.Z+45} </Text>{'\n'}{'\n'}
              2. Flip the cross cylinder and present as 1 or 2{'\n'}{'\n'}
              3. Move towards white dots on best choice flip (15 degrees){'\n'}{'\n'}
              4. Keep changing and switching axis until reverse choice (counter){'\n'}{'\n'}
              5. Use 5 degree increments{'\n'}{'\n'}
              6. Then smaller amounts when reversed again until suitable</Text>
              <View style={{flex: 1,}}>
              </View>

            </View>
        );
    }
}

module.exports = CylinderA;
