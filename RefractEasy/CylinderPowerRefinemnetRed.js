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

//var EnterXYZ = require('./EnterXYZ');
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

class CylinderPowerRefinemnetRed extends Component {
    constructor(props){
        super(props);
        this.state = {
            leftX: 10,
            leftY: 0,
            leftZ: 0,
            rightX: 0,
            rightY: 0,
            rightZ: 0,
        };
    }

    render(){
        return (
            <View style={styles.container}>
            <Text style={styles.description}>Cylinder Refinement Power </Text>

              <Text style={styles.dataText}>
              Subtract 0.50 from CYL so:{"\n"}
              CYL: *Y* - 0.50 ~set this as new Y~{"\n"}
              Maintain spherical equivalent. Add 0.25 to Sph:{"\n"}
              Sph: X + 0.25 ~set this as new X~{"\n"}
              </Text>





              <View style = {styles.flowRight}>
                <TouchableHighlight
                  style = {styles.button}
                  uderlayColor = 'blue'>
                  <Text style = {styles.buttonText}>Next</Text>
                </TouchableHighlight>
              </View>


            </View>
        );
    }
}

module.exports = CylinderPowerRefinemnetRed;
