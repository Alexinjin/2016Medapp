'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        flex: 1,
    },
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: '#2077E8',
        flex: 1,
    },
});

class SphTest extends Component{
    constructor(props){
        super(props);
        this.state = {
            X: this.props.X,
            Y: this.props.Y,
            Z: this.props.Z,
        };
        console.log('SphTest: x: ' + this.state.X + ', y: ' + this.state.Y + ', z: ' + this.state.Z);
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.description}>
                gogogogo
                </Text>
            </View>
        );
    }
}

module.exports = SphTest;