'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
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
});

class CylinderA extends Component {
    constructor(props){
        super(props);
        this.state = {
            leftX: 10,
            leftY: 0,
            leftZ: 0,
            rightX: 0,
            rightY: 0,
            rightZ: 0,
            newZ: '000000'
        };
    }

    render(){
        return (
            <View style={styles.container}>
              <Text style={styles.description}>Cylinder {"\n"} Y {'>'} 1</Text>

              <Text style={styles.dataText}> Cyl = Y  {"\n"}
              Place Red or White dots Axis at Z+45 {"\n"}
              Flip the cross cylinder and present as 1 or 2 {"\n"}
              Move towards white dots on best choice flip (15 degrees) {"\n"}
              Keep changing and switching axis until reverse choice (counter) {"\n"}
              Use 5 degree increments {"\n"}
              Then smaller amounts when reversed again until suitable
              </Text>

              <TextInput
                style={{height: 40}}
                placeholder = 'hahahahahahaha'
                onChangeText={(newZ) => this.setState({newZ})}
              />

              <View style={styles.flowRight}>
                <Text style= {styles.smallTexts}> Finish </Text>
              </View>


            </View>
        );
    }
}

module.exports = CylinderA;
