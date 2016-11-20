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
        alignItems: 'center',
        marginTop: 80,
        padding: 15,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    description: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 30,
        flex: 4,
    },
});

class SphIns extends Component{
    constructor(props){
        super(props);
        this.state = {
            X: this.props.X,
            Y: this.props.Y,
            Z: this.props.Z,
            eye: this.props.eye,
        };
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.description}>
                X: {this.state.X}
                Y: {this.state.Y}
                Z: {this.state.Z}
                eye: {this.state.eye}
                </Text>
            </View>
        );
    }
}

module.exports = SphIns;