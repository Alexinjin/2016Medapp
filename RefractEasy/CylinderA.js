'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput
} from 'react-native';

var CylinderPowerRefinemnet = require('./CylinderPowerRefinemnet');
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
              <Text style={styles.description}>Cylinder {"\n"} Y {'>'} 1</Text>

              <Text style={styles.dataText}> Cyl = {this.state.Y}  {"\n"}
              Place Red or White dots Axis at {this.state.Z+45} {"\n"}
              Flip the cross cylinder and present as 1 or 2 {"\n"}
              Move towards white dots on best choice flip (15 degrees) {"\n"}
              Keep changing and switching axis until reverse choice (counter) {"\n"}
              Use 5 degree increments {"\n"}
              Then smaller amounts when reversed again until suitable
              </Text>

              <TextInput
                style={{height: 40}}
                placeholder = 'placeholder'
                onChangeText={(newZ) => this.setState({newZ})}
              />

              <View style={styles.flowRight}>
                <Text style= {styles.smallTexts} onPress = {this.onNextPressed.bind(this)}> Finish </Text>
              </View>


            </View>
        );
    }
}

module.exports = CylinderA;
